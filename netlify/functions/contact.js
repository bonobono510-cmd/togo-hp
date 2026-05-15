// 合同会社TOGO お問い合わせフォーム受信 → Resend でメール送信
// 依存ゼロ（Netlify Node ランタイムの global fetch を使用）
// 必要な環境変数: RESEND_API_KEY（Netlify サイトの環境変数に設定）

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let body = event.body || "";
  if (event.isBase64Encoded) {
    body = Buffer.from(body, "base64").toString("utf8");
  }
  const params = new URLSearchParams(body);
  const get = (k) => (params.get(k) || "").trim();

  // ハニーポット（ボットは bot-field を埋める）→ 静かに完了画面へ
  if (get("bot-field")) {
    return { statusCode: 303, headers: { Location: "/thanks.html" }, body: "" };
  }

  const name = get("お名前");
  const company = get("会社名");
  const email = get("email");
  const tel = get("電話番号");
  const message = get("お問い合わせ内容");
  const consent = get("個人情報取扱同意");

  if (!name || !email || !message || !consent) {
    return { statusCode: 400, body: "必須項目が不足しています。" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: "メール送信が未設定です（RESEND_API_KEY 未設定）。" };
  }

  const lines = [
    "合同会社TOGO 公式サイトのお問い合わせフォームから送信がありました。",
    "",
    "──────────────────────────",
    `お名前　　： ${name}`,
    `会社名　　： ${company || "（未記入）"}`,
    `メール　　： ${email}`,
    `電話番号　： ${tel || "（未記入）"}`,
    `同意　　　： ${consent}`,
    "──────────────────────────",
    "",
    "【お問い合わせ内容】",
    message,
    "",
    "──────────────────────────",
    "送信元: https://togo-jp.biz/#contact",
  ];

  let res;
  try {
    res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "合同会社TOGO お問い合わせ <noreply@togo-jp.biz>",
        to: ["contact@togo-jp.biz"],
        reply_to: email,
        subject: `【合同会社TOGO HP】お問い合わせ - ${name} 様`,
        text: lines.join("\n"),
      }),
    });
  } catch (e) {
    return { statusCode: 502, body: "送信処理でエラーが発生しました。" };
  }

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    return { statusCode: 502, body: "メール送信に失敗しました: " + detail.slice(0, 300) };
  }

  return { statusCode: 303, headers: { Location: "/thanks.html" }, body: "" };
};

# 合同会社TOGO コーポレートサイト

## プロジェクト概要

合同会社TOGOのコーポレートサイト（静的HTML）。
取引先・不動産会社への信頼感アップ用（名刺代わり）のWebサイト。

- **公開URL**: https://sprightly-squirrel-a1d1d0.netlify.app/
- **ホスティング**: Netlify（無料プラン）
- **問い合わせフォーム**: FormSubmit.co → t_goto@togo-jp.biz

## 技術スタック

- 静的HTML / CSS / JavaScript（フレームワークなし）
- フォント: Google Fonts（Cormorant Garamond, Noto Sans JP, Noto Serif JP）
- フォーム送信: FormSubmit.co
- ホスティング: Netlify

## ディレクトリ構成

```
togo-hp-project/
├── CLAUDE.md          # このファイル（Claude Code用プロジェクト説明）
├── README.md          # プロジェクトREADME
├── netlify.toml       # Netlifyデプロイ設定
└── src/
    └── index.html     # サイト本体（1ファイル構成）
```

## サイト構成

1. **ヘッダー** — 固定ナビ（スクロールで背景色変化）、モバイルハンバーガーメニュー対応
2. **ヒーロー** — 紺グラデーション背景、キャッチコピー、CTAボタン
3. **会社概要（#about）** — 代表挨拶 + 会社情報テーブル
4. **事業内容（#business）** — 不動産賃貸 / ITコンサルの2カード + 主要取引先
5. **お問い合わせ（#contact）** — FormSubmit.co経由のフォーム
6. **フッター** — 会社情報、ナビリンク

## 会社基本情報（コンテンツ更新用）

- 商号: 合同会社TOGO
- 法人番号: 8040003014985
- 設立: 令和2年3月2日（2020年）
- 資本金: 100,000円
- 所在地: 千葉県松戸市新松戸六丁目70番地
- 電話: 090-4835-4091
- 代表社員: 後藤 達彦
- 事業: 不動産の賃貸・所有・管理 / 不動産会社向けITコンサルティング
- 決算期: 毎年2月末日

## 主要取引先

- 合同会社なごみ（ITコンサルティング契約・1,000万円単位）
- 株式会社千葉銀行（融資取引・稲毛支店）
- 株式会社静岡銀行（融資取引）

## デザインルール

- カラー: 紺（#1a2744）× 白 × ゴールドアクセント（#b8965a）
- フォント: 見出しに Noto Serif JP、本文に Noto Sans JP、英字装飾に Cormorant Garamond
- トーン: シンプル・信頼感重視のビジネス系
- アニメーション: スクロール連動のフェードイン（IntersectionObserver）

## デプロイ手順

```bash
# Netlify CLIでデプロイ（プロダクション）
netlify deploy --prod --dir=src

# プレビューデプロイ（確認用）
netlify deploy --dir=src
```

## 開発時の注意事項

- `src/index.html` が唯一のソースファイル。CSS/JSはすべてインライン
- FormSubmit.coの送信先メールアドレス変更時は `formsubmit.co/` の後ろを書き換える
- OGPタグ（meta property="og:〜"）はSNSシェア用。URL変更時に更新が必要
- レスポンシブ対応済み（768px以下でハンバーガーメニュー、600px以下でテーブル縦積み）

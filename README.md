# 合同会社TOGO コーポレートサイト

合同会社TOGOの公式Webサイトです。

## 公開URL

https://sprightly-squirrel-a1d1d0.netlify.app/

## セットアップ

### 1. Netlify CLIのインストール

```bash
npm install -g netlify-cli
```

### 2. Netlifyにログイン

```bash
netlify login
```

### 3. 既存サイトとリンク

```bash
netlify link
# Site ID または サイト名（sprightly-squirrel-a1d1d0）を入力
```

### 4. デプロイ

```bash
# 本番デプロイ
netlify deploy --prod --dir=src

# プレビュー（確認用）
netlify deploy --dir=src
```

## ファイル構成

```
src/
└── index.html   # サイト全体（HTML/CSS/JS一体型）
```

## お問い合わせフォーム

FormSubmit.co を使用。送信先: `t_goto@togo-jp.biz`

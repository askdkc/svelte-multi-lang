# Svelteの多言語対応

## このサンプルの使い方
```bash
git clone git@github.com:askdkc/svelte-multi-lang.git
cd svelte-multi-lang
npm i
npm run dev
```

http://localhost:5173 にアクセス

## 新規プロジェクトでSvelteに多言語対応を導入する流れ

[svelte-i18n](https://github.com/kaisermann/svelte-i18n/)を使って`Svelte`を多言語対応します

## svelte-i18nのインストール
```bash
npm i svelte-i18n
```

## 言語ファイルの作成

下記のような言語ファイルを作成します

- `src/lib/en.json`
- `src/lib/ja.json`

## 初期化

[ドキュメント](https://github.com/kaisermann/svelte-i18n/blob/main/docs/Getting%20Started.md)に従って初期化ファイルを作ります

- `src/i18n.js`

## App.svelteに読み込んで使用

下記のような感じで読み込んで利用します

```js
<script>
  // (略)

  import './i18n.js' // i18n設定ファイルをインポート
  import { _, locale } from 'svelte-i18n' // i18nで使用する関数をインポート

  // 言語を変更機能
  function changeLanguage(lang) {
    locale.set(lang);
  }
</script>
```

```html
  <!-- 言語切り替えボタン -->
  <div>
    <button on:click={() => changeLanguage('en')}>English</button>
    <button on:click={() => changeLanguage('ja')}>日本語</button>
  </div>
```

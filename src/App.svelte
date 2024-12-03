<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'

  import './i18n.js' // i18n設定ファイルをインポート
  import { _, locale } from 'svelte-i18n' // i18nで使用する関数をインポート

  // 言語を変更機能
  function changeLanguage(lang) {
    locale.set(lang);
  }
</script>

<main>
  <div>
    <a href="https://vite.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>{$_('greetings')}</h1>

  <!-- 言語切り替えボタン -->
  <div>
    <button on:click={() => changeLanguage('en')}>English</button>
    <button on:click={() => changeLanguage('ja')}>日本語</button>
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>

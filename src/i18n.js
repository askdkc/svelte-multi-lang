import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

import en from './lib/en.json';
import ja from './lib/ja.json';

addMessages('en', en);
addMessages('ja', ja);

init({
    fallbackLocale: 'ja',
    initialLocale: getLocaleFromNavigator(),
});

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'

Vue.use(Buefy);
Vue.use(VueI18n);

import content_EN from './data/content_EN';
import content_DE from './data/content_DE';

let messages = {
  en: content_EN,
  de: content_DE
};

const i18n = new VueI18n({
  locale: 'en',
  messages
});

new Vue({
  i18n,
  el: '#app',
  render: h => h(App)
});

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import VueObserveVisibility from 'vue-observe-visibility'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(VueScrollTo, {
  container: "body",
  duration: 700,
  easing: "ease",
  offset: -200,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

Vue.use(Buefy);
Vue.use(VueI18n);
Vue.use(VueObserveVisibility);

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
  created () {
    AOS.init()
  },
  i18n,
  el: '#app',
  render: h => h(App)
});

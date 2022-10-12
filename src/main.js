import Vue from 'vue/dist/vue.js';
import VueRouter from "vue-router"
import VueI18n from "vue-i18n";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import App from "./App.vue";
import VueScrollTo from "vue-scrollto";
import AOS from "aos";
import "aos/dist/aos.css";
import PersonalPage from "./pages/PersonalPage.vue"

Vue.use(VueScrollTo, {
  container: "body",
  duration: 700,
  easing: "ease",
  offset: -100,
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
Vue.use(VueRouter);

import content_EN from "./data/content_EN";
import content_DE from "./data/content_DE";

let messages = {
  en: content_EN,
  de: content_DE
};

const i18n = new VueI18n({
  locale: navigator.language.split("-")[0] || "en",
  messages
});


const routes = [
  { path: '/', component: PersonalPage },
]

const router = new VueRouter({
  routes, // short for `routes: routes`
})

new Vue({
  created() {
    AOS.init();
  },
  i18n,
  el: "#app",
  router,
  render: h => h(App)
});

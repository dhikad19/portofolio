import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import vue3GoogleLogin from "vue3-google-login";
import Vue3Lottie from "vue3-lottie";
import VCalendar from "v-calendar";
import { createI18n } from "vue-i18n";
import "v-calendar/style.css";
import router from "./router";
import store from "./store";
import "./assets/styles/global.scss";

import en from "./locales/en.json";
import id from "./locales/id.json";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    id,
  },
});

const clientId = import.meta.env.VITE_CLIENT_ID;

loadFonts();
createApp(App)
  .use(VCalendar)
  .use(store)
  .use(router)
  .use(vuetify)
  .use(Vue3Lottie)
  .use(i18n)
  .use(vue3GoogleLogin, {
    clientId: clientId,
  })
  .mount("#app");

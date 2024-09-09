import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import vue3GoogleLogin from "vue3-google-login";
import router from "./router";
import store from "./store";

const clientId = import.meta.env.VITE_CLIENT_ID;

loadFonts();
createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .use(vue3GoogleLogin, {
    clientId: clientId,
  })
  .mount("#app");

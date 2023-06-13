import "./bootstrap";

import { createApp } from "vue";
import router from "./plugins/routing";
import App from "./pages/App.vue";
import vuetify from "./plugins/vuetify";

createApp(App).use(router).use(vuetify).mount("#app");

import "./bootstrap";

import { createApp } from "vue";
import router from "./plugins/routing";
import App from "./pages/App.vue";
import vuetify from "./plugins/vuetify";
import pinia from "./plugins/pinia";
import eventBus from "./plugins/event-bus";

createApp(App).use(router).use(vuetify).use(pinia).use(eventBus).mount("#app");

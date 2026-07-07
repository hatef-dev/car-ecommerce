import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import persianDigits from "./directives/persianDigits";
import ButtonComponent from "./components/Button.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.directive("persian-digits", persianDigits);
app.component("ButtonComponent", ButtonComponent);

app.mount("#app");

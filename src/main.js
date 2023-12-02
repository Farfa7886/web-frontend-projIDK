import { createApp } from "vue";
import "./tailwind.css";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";

const eventBus = new EventTarget();
const app = createApp(App);

app.config.globalProperties.eventBus = eventBus;
app.use(router).mount("#app");

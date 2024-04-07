import { createApp } from "vue";
import "./tailwind.css";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import axios from "axios";
import config from "../projectConfig";

axios.defaults.baseURL = config.baseAPIUrl;

const eventBus = new EventTarget();
const app = createApp(App);

app.config.globalProperties.eventBus = eventBus;
app.use(router).mount("#app");

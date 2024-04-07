import { createRouter, createWebHistory } from "vue-router";

import NotFoundPage from "./pages/NotFound.vue";
import Hero from "./pages/Hero.vue";
import Explore from "./pages/Explore.vue";
import Editor from "./pages/NewProject.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import FirstSetup from "./components/editor/FirstSetup.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Hero },
    { path: "/explore", component: Explore },
    { path: "/editor/:projectId", component: Editor },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/firstSetup", component: FirstSetup },

    { path: "/:pathMatch(.*)*", component: NotFoundPage },
  ],
});

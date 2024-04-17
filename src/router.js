import { createRouter, createWebHistory } from "vue-router";

import NotFoundPage from "./pages/NotFound.vue";
import Hero from "./pages/Hero.vue";
import Explore from "./pages/Explore.vue";
import Editor from "./pages/Editor.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import FirstSetup from "./pages/FirstSetup.vue";
import Projects from "./pages/Projects.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Hero },
    { path: "/explore", component: Explore },
    { path: "/editor/:projectId", component: Editor },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/firstSetup", component: FirstSetup },
    { path: "/projects", component: Projects },

    { path: "/:pathMatch(.*)*", component: NotFoundPage },
  ],
});

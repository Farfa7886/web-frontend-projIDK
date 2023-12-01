import { createRouter, createWebHistory } from "vue-router";

import NotFoundPage from "./pages/NotFound.vue";
import Hero from "./pages/Hero.vue";
import Explore from "./pages/Explore.vue";
import Editor from "./pages/Editor.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Hero },
    { path: "/explore", component: Explore },
    { path: "/editor/:projectId", component: Editor },

    { path: "/:pathMatch(.*)*", component: NotFoundPage },
  ],
});

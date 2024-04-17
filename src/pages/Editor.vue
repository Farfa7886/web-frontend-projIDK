<script setup>
import { useRoute } from "vue-router";
import utils from "../helpers/utils";
import NewProject from "../components/editor/NewProject.vue";

const route = useRoute();
const isLogged = localStorage.getItem("token") != null;
utils.onLoad(() => {
  if (localStorage.getItem("token") === null) utils.toggleModal("modal-login");
  else if (route.params.projectId == "new") utils.toggleModal("modal-create");
  else {
  }
});
</script>

<template>
  <div
    id="loading"
    class="hidden w-full justify-center items-center"
    style="height: calc(100vh - 70px)"
  >
    <div class="loader bw xl info">
      <div class="flow-cross" />
    </div>
  </div>
  <!-- LOGIN MODAL -->
  <div
    class="modal flex flex-col gap-5"
    style="min-width: 250px"
    id="modal-login"
  >
    <h2 class="text-xl">Login necessario</h2>
    <span>È necessario effettuare il login per creare un progetto</span>
    <div class="flex gap-3">
      <a href="/login" class="w-full">
        <button class="btn solid info flex-1 w-full">Login</button></a
      >
      <a class="w-full" href="/register">
        <button class="btn solid bw flex-1 w-full">Registrati</button>
      </a>
    </div>
  </div>
  <!-- END LOGIN MODAL -->
  <div
    class="flex w-full justify-center items-center"
    style="height: calc(100vh - 70px)"
    id="loader"
  >
    <div class="loader bw">
      <div class="bar-bounce" />
    </div>
  </div>
  <NewProject v-if="route.params.projectId == 'new' && isLogged" />
</template>

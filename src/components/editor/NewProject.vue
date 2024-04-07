<script setup>
import utils from "../../helpers/utils";
import CreateBtn from "./CreateBtn.vue";
utils.onLoad(() => {
  if (localStorage.getItem("token") === null) utils.toggleModal("modal-login");
  else utils.toggleModal("modal-create");
});

let projectData = {
  name: "",
  description: "",
  type: "", // quiz, iframe, blocks, code
  data: {},
};

function showAdvanced() {
  utils.hide("premade");
  utils.show("advanced");
}

function step2(projectType) {
  if (projectType) projectData.type = projectType;
  utils.hide("step1");
  utils.show("step2");
}
</script>

<template>
  <!-- LOGIN MODAL -->
  <div>
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
  </div>
  <!-- END LOGIN MODAL -->
  <div
    class="modal flex flex-col gap-5 w-full max-w-lg"
    style="min-width: 350px"
    id="modal-create"
  >
    <h2 class="text-xl">Crea progetto</h2>
    <div id="step1" class="none">
      <span>Seleziona il tipo di progetto</span>

      <div class="gap-3 mt-4">
        <div id="premade" class="none">
          <CreateBtn
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Blue_question_mark_icon.svg/2048px-Blue_question_mark_icon.svg.png"
            text="Quiz"
            :disabled="true"
          />
          <CreateBtn
            img="/iframe.png"
            text="Incorpora"
            subtitle="Incorpora un sito"
            :disabled="true"
          />
          <CreateBtn
            img="/code-icon.png"
            text="Opzioni avanzate"
            @click="showAdvanced()"
          />
        </div>
        <div id="advanced" class="none hidden">
          <CreateBtn
            img="/blockly-icon.png"
            text="Blocchi"
            subtitle="PixyJS v7, Potrai convertire a codice"
            @click="step2('blocks')"
          />
          <CreateBtn
            img="/code-icon.png"
            text="Codice"
            @click="step2('code')"
          />
        </div>
      </div>
    </div>
    <div id="step2" class="none hidden">
      <span>Nome del progetto</span>
      <form>
        <input class="input bw mt-2 mb-2" required />
        <button class="btn solid success w-full" type="submit">Crea</button>
      </form>
    </div>
  </div>
</template>

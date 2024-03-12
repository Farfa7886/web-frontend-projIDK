<script setup>
import * as monaco from "monaco-editor";
import utils from "../helpers/utils";
import "../userWorker";
import EditorActionNav from "../components/EditorActionNav.vue";
import { eventBus } from "../event-bus";

let editor;
utils.onLoad(() => {
  editor = monaco.editor.create(document.getElementById("editorDIV"), {
    value: 'function hello() {\n\talert("Hello, world!");\n}',
    language: "javascript",
    theme: utils.getCurrentTheme(true) == "dark" ? "vs-dark" : "vs-light",
  });
  editor.layout({
    width: document.getElementById("editorDIV").offsetWidth,
    height: document.getElementById("editorDIV").offsetHeight,
  });
});

addEventListener("resize", (event) => {
  editor.layout({
    width: 100,
    height: 100,
  });
  editor.layout({
    width: document.getElementById("editorDIV").offsetWidth,
    height: document.getElementById("editorDIV").offsetHeight,
  });
});

function testCodee() {
  console.log("hi");
}

eventBus.addEventListener("testCode", () => {
  testCodee();
});
</script>

<template>
  <div
    style="width: 100%; height: calc(100vh - 70px)"
    class="grid grid-cols-3 col-span-6"
  >
    <div
      class="col-span-2 bg-black"
      style="background-color: black; height: 100%"
    >
      <div class="w-full" style="height: 40px"><EditorActionNav /></div>
      <div
        id="editorDIV"
        style="background-color: orange; height: calc(100% - 40px); width: 100%"
      ></div>
    </div>
    <div>
      <div style="height: 50%; width: 100%">
        <iframe src="/pixyView.html" class="w-full h-full"></iframe>
      </div>
      <div style="background-color: green; height: 50%; width: 100%"></div>
    </div>
  </div>
</template>

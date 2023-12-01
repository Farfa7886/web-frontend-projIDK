<script setup>
import { ref } from "vue";
import Blockly from "../components/Blockly.vue";
import blocksToolbox from "../helpers/blocklyEditor/toolbox/toolbox";
import DarkTheme from "@blockly/theme-dark";
import utils from "../helpers/utils";

const workspace = ref();

const options = {
  media: "https://blockly-demo.appspot.com/static/media/",
  grid: {
    spacing: 25,
    length: 3,
    colour: "#ccc",
    snap: true,
  },
  zoom: {
    controls: true,
    wheel: false,
    startScale: 1.0,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2,
    pinch: true,
  },
  move: {
    scrollbars: {
      horizontal: true,
      vertical: true,
    },
    drag: true,
    wheel: true,
  },
  toolbox: blocksToolbox,
  renderer: "zelos",
  theme: utils.getCurrentTheme(true) == "dark" ? DarkTheme : "",
};

console.log(workspace);
</script>

<template>
  <div class="w-full grid grid-cols-3 gap-3" style="height: calc(100vh - 70px)">
    <div class="col-span-2 mt-3 mb-3 ml-3">
      <div
        class="dark:bg-neutral-700 bg-neutral-300 rounded-xl mb-3"
        style="min-height: 40px; display: flex; align-items: center"
      >
        <p class="font-bold text-xl ml-5 hover:opacity-40">[PROJECT NAME]</p>
      </div>
      <Blockly :options="options" ref="workspace" class="h-full rounded-xl" />
    </div>
    <div class="grid grid-cols-1 gap-3 mb-3 mt-3">
      <div class="mr-3 mb-3 h-full">
        <iframe
          class="w-full rounded-xl h-full"
          src="https://example.com"
        ></iframe>
      </div>
      <div class="bg-yellow-400 rounded-xl mr-3 mb-3 h-full"></div>
    </div>
  </div>
</template>

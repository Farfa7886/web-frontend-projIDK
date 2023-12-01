<script setup>
import { ref } from "vue";
import Blockly from "../components/Blockly.vue";
import blocksToolbox from "../helpers/blocklyEditor/toolbox/toolbox";
import DarkTheme from "@blockly/theme-dark";
import utils from "../helpers/utils";
import EditorActionNav from "../components/EditorActionNav.vue";

const workspace = ref();

document.addEventListener("DOMContentLoaded", () => {
  const iframeView = document.getElementById("previewIframe");
  iframeView.addEventListener("load", function () {
    iframeView.contentWindow.runCode(`  const app = new PIXI.Application({
    background: "#1099bb",
    resizeTo: window,
  });

  document.body.appendChild(app.view);

  const container = new PIXI.Container();

  app.stage.addChild(container);

  // Create a new texture
  const texture = PIXI.Texture.from("https://pixijs.com/assets/bunny.png");

  // Create a 5x5 grid of bunnies
  for (let i = 0; i < 25; i++) {
    const bunny = new PIXI.Sprite(texture);

    bunny.anchor.set(0.5);
    bunny.x = (i % 5) * 40;
    bunny.y = Math.floor(i / 5) * 40;
    container.addChild(bunny);
  }

  // Move container to the center
  container.x = app.screen.width / 2;
  container.y = app.screen.height / 2;

  // Center bunny sprite in local container coordinates
  container.pivot.x = container.width / 2;
  container.pivot.y = container.height / 2;

  // Listen for animate update
  app.ticker.add((delta) => {
    // rotate the container!
    // use delta to create frame-independent transform
    container.rotation -= 0.01 * delta;
  });`);
  });
});

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
  theme: utils.getCurrentTheme(true) == "dark" ? DarkTheme : "zelos",
};

console.log(workspace);
</script>

<template>
  <div class="w-full grid grid-cols-3 gap-3" style="height: calc(100vh - 70px)">
    <div class="col-span-2 mt-3 mb-3 ml-3">
      <div
        class="dark:bg-neutral-700 bg-neutral-100 rounded-xl mb-3"
        style="min-height: 40px; display: flex; align-items: center"
      >
        <EditorActionNav />
      </div>
      <Blockly :options="options" ref="workspace" class="h-full rounded-xl" />
    </div>
    <div class="flex flex-col">
      <div class="flex-1 mr-3 mb-3">
        <div
          class="dark:bg-neutral-700 bg-neutral-100 rounded-t-xl mt-3"
          style="min-height: 40px; display: flex; align-items: center"
        >
          <div class="border-b border-gray-200 dark:border-gray-700 ml-3">
            <ul
              class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
            >
              <li class="me-2">
                <a
                  href="#"
                  class="inline-flex items-center justify-center p-2 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                  aria-current="page"
                >
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 me-2"
                    viewBox="0 0 52 52"
                    enable-background="new 0 0 52 52"
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        d="M51.8,25.1C47.1,15.6,37.3,9,26,9S4.9,15.6,0.2,25.1c-0.3,0.6-0.3,1.3,0,1.8C4.9,36.4,14.7,43,26,43
		s21.1-6.6,25.8-16.1C52.1,26.3,52.1,25.7,51.8,25.1z M26,37c-6.1,0-11-4.9-11-11s4.9-11,11-11s11,4.9,11,11S32.1,37,26,37z"
                      />
                      <path
                        d="M26,19c-3.9,0-7,3.1-7,7s3.1,7,7,7s7-3.1,7-7S29.9,19,26,19z"
                      />
                    </g>
                  </svg>
                  Preview
                </a>
              </li>
              <li class="me-2">
                <a
                  href="#"
                  class="inline-flex items-center justify-center p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <svg
                    class="me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                    style="width: 1.2rem; height: 1.2rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 7C2 4.23858 4.23858 2 7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7ZM7 4C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V7C20 5.34315 18.6569 4 17 4H7ZM7 17C7 16.4477 7.44772 16 8 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H8C7.44772 18 7 17.5523 7 17ZM8.70709 7.29288C8.31656 6.90236 7.6834 6.90238 7.29288 7.29291C6.90236 7.68344 6.90238 8.3166 7.29291 8.70712L9.58588 11L7.29291 13.2929C6.90238 13.6834 6.90236 14.3166 7.29288 14.7071C7.6834 15.0976 8.31656 15.0976 8.70709 14.7071L11.7072 11.7071C11.8948 11.5196 12.0001 11.2652 12.0001 11C12.0001 10.7348 11.8948 10.4804 11.7072 10.2929L8.70709 7.29288Z"
                      fill="currentColor"
                    />
                  </svg>

                  Console
                </a>
              </li>
            </ul>
          </div>
        </div>
        <iframe
          class="w-full rounded-b-xl mb-3"
          style="height: calc(100% - 40px - 0.75rem)"
          src="/pixyView.html"
          id="previewIframe"
        ></iframe>
      </div>
      <div class="flex-1 bg-yellow-400 rounded-xl mr-3 mb-3 h-full"></div>
    </div>
  </div>
</template>

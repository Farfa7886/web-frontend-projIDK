<script setup>
import * as monaco from "monaco-editor";
import utils from "../../helpers/utils";
import EditorActionNav from "../CodeEditorActionNav.vue";
import { eventBus } from "../../event-bus";
import "../../userWorker";
import templates from "../../helpers/templates";

let iframeView;

function log(text, type) {
  const fId = Math.random().toString(36).substring(2, 7);
  if (type == "error") {
    document.getElementById("logsDiv").innerHTML += templates.errorTemplate(
      text,
      fId
    );
  } else {
    document.getElementById("logsDiv").innerHTML += templates.logTemplate(
      text,
      fId
    );
  }
  document.getElementById(fId).scrollIntoView();
}

function clearConsole() {
  document.getElementById("logsDiv").innerHTML = "";
}

let editor;
utils.onLoad(() => {
  iframeView = document.getElementById("previewIframe");
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
  clearConsole();
  iframeView.contentWindow.location.reload();
  var iframeDocument =
    iframeView.contentDocument || iframeView.contentWindow.document;
  var script = iframeDocument.createElement("script");
  script.type = "text/javascript";
  /* script.innerHTML = `

(async () =>
{
    // Create a new application
    const app = new PIXI.Application();

    // Initialize the application
    await app.init({ background: '#1099bb', resizeTo: window });

    // Append the application canvas to the document body
    document.body.appendChild(app.canvas);

    // Create and add a container to the stage
    const container = new PIXI.Container();

    app.stage.addChild(container);

    // Load the bunny texture
    const texture = await PIXI.Assets.load('https://pixijs.com/assets/bunny.png');

    // Create a 5x5 grid of bunnies in the container
    for (let i = 0; i < 25; i++)
    {
        const bunny = new PIXI.Sprite(texture);

        bunny.x = (i % 5) * 40;
        bunny.y = Math.floor(i / 5) * 40;
        container.addChild(bunny);
    }

    // Move the container to the center
    container.x = app.screen.width / 2;
    container.y = app.screen.height / 2;

    // Center the bunny sprites in local container coordinates
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;

    // Listen for animate update
    app.ticker.add((time) =>
    {
        // Continuously rotate the container!
        // * use delta to create frame-independent transform *
        container.rotation -= 0.01 * time.deltaTime;
    });
})();

`; */
  script.innerHTML = editor.getValue();
  iframeDocument.body.appendChild(script);
  document.getElementById("testCodeBtn").classList.add("is-loading");
  document.getElementById("testCodeBtn").disabled = true;
  setTimeout(() => {
    document.getElementById("testCodeBtn").classList.remove("is-loading");
    document.getElementById("testCodeBtn").disabled = false;
  }, 1000);
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
        <iframe
          src="/pixyView.html"
          id="previewIframe"
          class="w-full h-full"
        ></iframe>
      </div>
      <div
        style="height: 50%; width: 100%"
        class="dark:bg-zinc-700 bg-zinc-300"
      >
        <div
          id="logsDiv"
          class="bg-transparent"
          style="overflow-y: auto; height: calc(45vh)"
        ></div>
      </div>
    </div>
  </div>
</template>

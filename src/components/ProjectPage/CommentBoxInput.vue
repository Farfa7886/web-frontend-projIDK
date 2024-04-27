<script setup>
let username = JSON.parse(localStorage.getItem("userData")).username;

function updateInputCounter() {
  const textarea = document.querySelector("textarea");
  const counter = document.querySelector("#counter");
  counter.innerText = textarea.value.length + "/500";
}
</script>

<template>
  <div class="flex">
    <img src="/no-icon.png" style="height: 50px; width: 50px" />
    <div class="ml-3" style="width: 500px">
      <textarea
        class="input bw mb-3"
        maxlength="500"
        style="
          max-width: 500px;
          max-height: 200px;
          min-height: 100px;
          width: 100%;
        "
        @input="updateInputCounter()"
      />
      <div class="flex items-center w-full" style="width: 360px">
        <button class="btn solid info">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            data-name="Line Color"
            xmlns="http://www.w3.org/2000/svg"
            class="icon line-color"
          >
            <path
              style="
                fill: none;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 2;
              "
              d="M7 12h4"
              stroke="currentColor"
            />
            <path
              d="m5.44 4.15 14.65 7a1 1 0 0 1 0 1.8l-14.65 7a1 1 0 0 1-1.34-1.41l2.72-6.13a1.06 1.06 0 0 0 0-.82L4.1 5.46a1 1 0 0 1 1.34-1.31"
              style="
                fill: none;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 2;
              "
              stroke="currentColor"
            />
          </svg>
          <p>Invia</p>
        </button>
        <p id="counter" style="margin-left: 100%">0/500</p>
      </div>
    </div>
  </div>
</template>

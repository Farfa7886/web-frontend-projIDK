<script setup>
import checkAuth from "../helpers/checkAuth";
import { DotLottie } from "@lottiefiles/dotlottie-web";
import utils from "../helpers/utils";
checkAuth();

const lottieSteps = [
  "https://assets-v2.lottiefiles.com/a/dd13b484-1161-11ee-9d4c-cb11cd77cdea/lBNoyqqCAB.lottie",
  "https://assets-v2.lottiefiles.com/a/5d1bcc18-1179-11ee-a331-430e1aefe1a1/0dL42BnGLC.lottie",
];

let animationPlayer;

utils.onLoad(() => {
  animationPlayer = new DotLottie({
    autoplay: true,
    loop: false,
    canvas: document.querySelector("#dotlottie-canvas"),
    src: lottieSteps[0], // or .json file
  });
});

function nextStep(currentStep) {
  document.getElementById("sep" + currentStep).classList.add("hidden");
  document.getElementById("sep" + (currentStep + 1)).classList.remove("hidden");
  animationPlayer.destroy();
  animationPlayer = new DotLottie({
    autoplay: true,
    loop: false,
    canvas: document.querySelector("#dotlottie-canvas"),
    src: lottieSteps[currentStep], // or .json file
  });
}
</script>

<template>
  <div
    class="justify-center align-middle flex w-full"
    style="height: calc(100vh - 70px)"
  >
    <div>
      <div class="flex justify-center mb-2">
        <canvas id="dotlottie-canvas" style="height: 150px"></canvas>
      </div>

      <div id="sep1" class="w-full" style="height: 250px">
        <div class="flex justify-center w-full">
          <div>
            <h1 class="text-3xl font-bold text-center">
              Registrazione effettuata
            </h1>
            <p class="text-lg">
              Prima di continuare, è necessario completare la configurazione
            </p>
            <div class="w-full flex justify-center mt-4">
              <button
                class="btn light bw"
                style="width: 300px"
                @click="nextStep(1)"
              >
                Prossimo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="sep2" class="w-full hidden" style="height: 250px">
        <div class="flex justify-center w-full">
          <div>
            <h1 class="text-3xl font-bold text-center">Profilo</h1>
            <p class="text-lg">‎</p>
            <input
              type="range"
              class="w-full bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:-mt-0.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-150 [&::-webkit-slider-thumb]:ease-in-out [&::-webkit-slider-thumb]:dark:bg-slate-700 [&::-moz-range-thumb]:w-2.5 [&::-moz-range-thumb]:h-2.5 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-blue-600 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:transition-all [&::-moz-range-thumb]:duration-150 [&::-moz-range-thumb]:ease-in-out [&::-webkit-slider-runnable-track]:w-full [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:bg-gray-100 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:dark:bg-gray-700 [&::-moz-range-track]:w-full [&::-moz-range-track]:h-2 [&::-moz-range-track]:bg-gray-100 [&::-moz-range-track]:rounded-full"
              id="basic-range-slider-usage"
            />
            <div class="w-full flex justify-center mt-4">
              <button
                class="btn light bw"
                style="width: 300px"
                @click="nextStep(2)"
              >
                Prossimo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

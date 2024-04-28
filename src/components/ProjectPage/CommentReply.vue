<script setup>
import DOMPurify from "isomorphic-dompurify";

defineProps({
  username: String,
  content: String,
});
</script>

<template>
  <div class="flex mt-3">
    <img src="/no-icon.png" style="height: 50px; width: 50px" />
    <div
      class="ml-3 rounded-b-xl rounded-tr-xl dark:bg-neutral-800 bg-neutral-100"
      style="width: 100%; max-width: calc(500px)"
    >
      <h5 class="font-bold text-lg m-2 w-full">
        {{ DOMPurify.sanitize(username) }}
      </h5>
      <p class="m-2">{{ DOMPurify.sanitize(content) }}</p>
      <div style="height: 2px" class="dark:bg-neutral-700 bg-neutral-400 m-3" />
      <div class="flex ml-2 mb-2">
        <button
          class="flex items-center dark:hover:bg-neutral-700 hover:bg-neutral-300 rounded-lg"
        >
          <div class="flex items-center m-1">
            <svg
              width="24"
              height="24"
              fill="currentColor"
              class="opacity-75"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m4.687 11.119 9.287 8.933V14.64c2.813 0 9.973.062 9.973 7.426a7.98 7.98 0 0 1-6.369 7.816c5.842-.792 10.359-5.747 10.359-11.806 0-11.256-12.026-11.352-13.963-11.352V2.118z"
              />
            </svg>
            <p class="ml-2">Rispondi</p>
          </div>
        </button>
        <button
          class="flex items-center dark:hover:bg-neutral-700 hover:bg-neutral-300 rounded-lg ml-2"
        >
          <div class="flex items-center m-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              class="opacity-75"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M13.253 5.98 12 13.5l-1.253-7.52a1.27 1.27 0 1 1 2.506 0"
              />
              <circle
                cx="12"
                cy="19"
                r="1"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
            <p>Segnala</p>
          </div>
        </button>
        <button
          class="flex items-center dark:hover:bg-neutral-700 hover:bg-neutral-300 rounded-lg ml-2"
        >
          <div class="flex items-center m-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              class="opacity-75"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            >
              <path d="M5.75 4.25v-2.5h4.5v2.5m-6.5 1v9h8.5v-9m-9.5-.5h10.5" />
            </svg>
            <p class="ml-1">Elimina</p>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

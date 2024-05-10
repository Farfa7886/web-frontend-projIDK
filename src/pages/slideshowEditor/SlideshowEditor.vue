<script setup>
import CreateSlide from "./components/CreateSlide.vue";
import utils from "../../helpers/utils";
</script>

<template>
  <div
    class="grid lg:grid-cols-7 grid-cols-1 w-full gap-2 p-2"
    style="height: calc(100vh - 70px)"
  >
    <div>
      <CreateSlide />
    </div>
    <div
      class="bg-neutral-200 dark:bg-neutral-950 lg:col-span-5 lg:h-auto h-[900px] rounded-xl dropzone"
    ></div>
    <div>
      <p>boh</p>
    </div>
  </div>
</template>

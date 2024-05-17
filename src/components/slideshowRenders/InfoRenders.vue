<script setup>
import { onMounted } from "vue";
import { eventBus } from "../../event-bus";
import { sanitize } from "isomorphic-dompurify";
import { marked } from "marked";

const props = defineProps({
  type: String,
  elements: {
    type: Object,
    default: {}, // { key: HTML }
  },
});

eventBus.addEventListener("updateSlidePreview", (event) => {
  //console.log(event.detail);
  document.getElementById(
    event.detail.type + "_" + event.detail.elementNum
  ).style.overflowY = "auto";
  if (event.detail.elemType == "text")
    document.getElementById(
      event.detail.type + "_" + event.detail.elementNum
    ).innerHTML = sanitize(marked.parse(event.detail.value));
  else if (event.detail.elemType == "iframe") {
    if (event.detail.value.startsWith('<iframe src="https://')) {
      document.getElementById(
        event.detail.type + "_" + event.detail.elementNum
      ).innerHTML = sanitize(event.detail.value, { ADD_TAGS: ["iframe"] });
    } else {
      document.getElementById(
        event.detail.type + "_" + event.detail.elementNum
      ).innerHTML = "⚠️ Please use HTTPS";
    }
  } else if (event.detail.elemType == "image") {
    document.getElementById(
      event.detail.type + "_" + event.detail.elementNum
    ).innerHTML = sanitize(event.detail.value, { ADD_TAGS: ["img"] });
    document.getElementById(
      event.detail.type + "_" + event.detail.elementNum
    ).style.overflowY = "hidden";
  }
});

onMounted(() => {
  if (props.type == "none") {
    document.getElementById("selectSlide_renderer").classList.remove("hidden");
    document.getElementById("selectSlide_renderer").classList.add("flex");
    return;
  }
  document.getElementById(props.type + "_container").classList.remove("hidden");
  Object.keys(props.elements).forEach((key) => {
    document.getElementById(props.type + "_" + key).innerHTML =
      props.elements[key];
  });
});
</script>

<template>
  <div
    id="selectSlide_renderer"
    class="hidden w-full h-full justify-center items-center"
  >
    Seleziona una slide
  </div>
  <div id="info_1_container" class="w-full h-full rounded-xl p-2 hidden">
    <div class="grid lg:grid-cols-2 grid-cols-1 w-full h-full gap-2">
      <div
        class="slideshowBG w-full h-full slideshowContent"
        id="info_1_1"
      ></div>
      <div class="w-full h-full rounded-xl">
        <div
          class="w-full h-[calc(50%-0.25rem)] slideshowBG slideshowContent"
          id="info_1_2"
        ></div>
        <div
          class="w-full h-[calc(50%-0.25rem)] slideshowBG mt-2 slideshowContent"
          id="info_1_3"
        ></div>
      </div>
    </div>
  </div>
  <div id="info_2_container" class="w-full h-full rounded-xl p-2 hidden">
    <div class="grid lg:grid-cols-2 grid-cols-1 w-full h-full gap-2">
      <div class="w-full h-full rounded-xl">
        <div
          class="w-full h-[calc(50%-0.25rem)] slideshowBG slideshowContent"
          id="info_2_1"
        ></div>
        <div
          class="w-full h-[calc(50%-0.25rem)] slideshowBG mt-2 slideshowContent"
          id="info_2_2"
        ></div>
      </div>
      <div
        class="slideshowBG w-full h-full slideshowContent"
        id="info_2_3"
      ></div>
    </div>
  </div>
  <div id="info_3_container" class="w-full h-full rounded-xl p-2 hidden">
    <div class="grid lg:grid-cols-2 grid-cols-1 w-full h-full gap-2">
      <div
        class="slideshowBG w-full h-full slideshowContent"
        id="info_3_1"
      ></div>
      <div
        class="slideshowBG w-full h-full slideshowContent"
        id="info_3_2"
      ></div>
    </div>
  </div>
  <div id="info_4_container" class="w-full h-full rounded-xl p-2 hidden">
    <div
      class="slideshowBG w-full h-[80px] mb-2 slideshowContent"
      id="info_4_1"
    ></div>
    <div
      class="slideshowBG w-full h-[calc(100%-80px-0.5rem)] slideshowContent"
      id="info_4_2"
    ></div>
  </div>
  <div id="info_5_container" class="w-full h-full rounded-xl p-2 hidden">
    <div
      class="slideshowBG w-full h-full mb-2 slideshowContent prose lg:prose-xl dark:prose-invert rounded-xl"
      id="info_5_1"
    ></div>
  </div>
  <div class="hidden prose lg:prose-xl dark:prose-invert rounded-xl"></div>
</template>

<style scoped>
.slideshowBG {
  /* @apply bg-neutral-700; */
}
.slideshowContent {
  @apply prose lg:prose-xl dark:prose-invert rounded-xl;
  max-width: 100%;
  overflow-y: auto;
}
</style>

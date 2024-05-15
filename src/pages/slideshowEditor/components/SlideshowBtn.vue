<script setup>
import utils from "../../../helpers/utils";
import Layouts from "./Layouts.vue";
import SvgLoader from "../../../components/SvgLoader.vue";
import { eventBus } from "../../../event-bus";

const props = defineProps({
  selected: Boolean,
  layoutUrl: String,
  name: String,
  index: Number,
});

function selectSlide() {
  eventBus.dispatchEvent(
    new CustomEvent("selectSlide", {
      detail: { name: props.name, index: props.index },
    })
  );
}
</script>

<template>
  <button
    @click="selectSlide()"
    style="height: 20%; width: 100%; min-height: 170px; margin-bottom: 8px"
    :class="
      'dark:bg-neutral-900 bg-gray-200 rounded-xl ' +
      (selected
        ? 'dark:border-white border-black border-2'
        : 'hover:opacity-60')
    "
  >
    <div class="flex w-full justify-center mt-2">
      <SvgLoader :src="layoutUrl" style="height: 130px; padding: 5px" />
    </div>
    <p class="mt-1">{{ name }}</p>
  </button>
</template>

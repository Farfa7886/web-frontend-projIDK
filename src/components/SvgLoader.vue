<script setup>
import { onMounted, ref } from "vue";
const props = defineProps({
  src: String,
});

const svgContainer = ref(null);

onMounted(async () => {
  const response = await fetch(props.src);
  const blob = await response.blob();
  const svg = await blob.text();
  svgContainer.value.innerHTML = svg;
});
</script>
<template>
  <div class="none" ref="svgContainer"></div>
  <svg class="fill-neutral-300 dark:fill-neutral-800 hidden"></svg>
</template>

<script setup>
import SvgLoader from "../../../components/SvgLoader.vue";

function select() {
  event.preventDefault();
}
</script>

<template>
  <form @click="select()">
    <p class="mb-1">Sezioni informative</p>
    <div class="grid grid-cols-4 w-full gap-6">
      <div class="none">
        <button
          style="width: 150px; height: 107px"
          class="hover:border-2 p-2 pb-5 rounded-xl"
        >
          <SvgLoader src="/slideshowLayouts/1.svg" />
        </button>
      </div>
      <div class="none">
        <button
          style="width: 150px; height: 107px"
          class="hover:border-2 p-2 pb-5 rounded-xl"
        >
          <SvgLoader src="/slideshowLayouts/2.svg" />
        </button>
      </div>
      <div class="none">
        <button
          style="width: 150px; height: 107px"
          class="hover:border-2 p-2 pb-5 rounded-xl"
        >
          <SvgLoader src="/slideshowLayouts/3.svg" />
        </button>
      </div>
      <div class="none">
        <button
          style="width: 150px; height: 107px"
          class="hover:border-2 p-2 pb-5 rounded-xl"
        >
          <SvgLoader src="/slideshowLayouts/4.svg" />
        </button>
      </div>
    </div>
    <p class="mt-3 mb-1">Quiz</p>
    <div class="grid grid-cols-4 w-full gap-6">
      <div class="none">
        <button
          style="width: 150px; height: 107px"
          class="hover:border-2 p-2 pb-5 rounded-xl"
        >
          <SvgLoader src="/slideshowLayouts/quiz_1.svg" />
        </button>
      </div>
      <div class="none">
        <button
          style="width: 150px; height: 107px"
          class="hover:border-2 p-2 pb-5 rounded-xl"
        >
          <SvgLoader src="/slideshowLayouts/quiz_2.svg" />
        </button>
      </div>
      <div class="none">
        <button
          style="width: 150px; height: 107px"
          class="hover:border-2 p-2 pb-5 rounded-xl"
        >
          <SvgLoader src="/slideshowLayouts/quiz_3.svg" />
        </button>
      </div>
    </div>
  </form>
</template>

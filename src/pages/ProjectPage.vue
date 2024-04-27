<script setup lang="ts">
import LikeBtn from "../components/ProjectPage/LikeBtn.vue";
import ForkBtn from "../components/ProjectPage/ForkBtn.vue";
import CommentBox from "../components/ProjectPage/CommentBoxInput.vue";
import utils from "../helpers/utils";
import { useLikesStore } from "../stores/ProjectPageStore"; // It's my first time using stores lol
import { ref } from "vue";

const store = useLikesStore();

function like() {
  if (!store.liked) {
    store.like();
  } else {
    store.unlike();
  }
}
</script>

<template>
  <div id="mainDiv" class="w-full h-full flex justify-center">
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-3">
      <div>
        <div
          class="bg-black rounded-xl lg:w-[calc(100vw_/_3)] h-[calc((100vh_-_70px)_/_2)] w-[90vw] min-h-[433px]"
          id="tmpDIV"
        ></div>
        <div
          class="dark:bg-neutral-900 bg-neutral-300 rounded-xl h-[60px] mt-3 flex items-center"
        >
          <div class="w-full">
            <LikeBtn :count="16" :liked="store.liked" @click="like()" />
            <ForkBtn />
          </div>
          <div class="mr-3 flex items-center">
            <svg
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              xml:space="preserve"
              fill="currentColor"
              class="opacity-65"
            >
              <path
                d="M12 21C7 21 3.2 18.2.2 12.5L0 12l.2-.5C3.2 5.8 7 3 12 3s8.8 2.8 11.8 8.5l.2.5-.2.5C20.8 18.2 17 21 12 21m-9.7-9c2.5 4.7 5.7 7 9.7 7s7.2-2.3 9.7-7C19.2 7.3 16 5 12 5s-7.2 2.3-9.7 7"
              />
              <path
                d="M12 17c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5m0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3"
              />
            </svg>
            <p class="ml-2 font-bold text-lg opacity-65" id="viewsCounter">0</p>
          </div>
        </div>
      </div>

      <div
        class="dark:bg-neutral-900 bg-neutral-300 rounded-xl lg:w-full w-[90vw] min-h-[433px]"
        style="height: 100%"
      >
        <p class="m-3 h-full w-full">Hello gays</p>
      </div>
      <div class="lg:col-span-2 rounded-xl dark:bg-neutral-900 bg-neutral-300">
        <h3 class="text-3xl text-center font-bold mt-2">Commenti</h3>
        <div class="m-3" id="commentsContainer">
          <CommentBox />
          <div class="divider mt-2 mb-2" />
          <p class="text-center m-2">Wow così vuoto qui 😯 *suono di grilli*</p>
        </div>
      </div>
    </div>
  </div>
</template>

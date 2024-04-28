<script setup lang="ts">
import LikeBtn from "../components/ProjectPage/LikeBtn.vue";
import ForkBtn from "../components/ProjectPage/ForkBtn.vue";
import CommentBoxInput from "../components/ProjectPage/CommentBoxInput.vue";
import CommentsRenderer from "../components/ProjectPage/CommentsRenderer.vue";

import axios from "axios";
import utils from "../helpers/utils";
import { useRoute } from "vue-router";
import { useLikesStore } from "../stores/ProjectPageStore"; // It's my first time using stores lol
import { reactive } from "vue";
import { eventBus } from "../event-bus";

const store = useLikesStore();
const route = useRoute();
let currentPage = 1;
let maxPages = 1;

interface Comment {
  author: {
    _id: string;
    username: string;
  };
  content: string;
  _id: string;
  replies: number;
  isReply: boolean;
  replyTo: string;
  projectId: string;
  createdAt: string;
  __v: number;
}

let comments: Comment[] = reactive([]);

function like() {
  if (!store.liked) {
    store.like();
  } else {
    store.unlike();
  }
}

async function renderComments(fetchAgain: boolean) {
  comments.splice(0, comments.length);
  document.getElementById("commentsContainer").classList.add("hidden");
  document.getElementById("commentsLoader").classList.remove("hidden");
  if (fetchAgain) {
    const response = await axios.get(`/comments/${route.params.projectId}`);
    response.data.docs.forEach((doc: Comment) => {
      comments.push(doc);
    });
    maxPages = response.data.totalPages;
    if (maxPages === 1)
      document.getElementById("loadmoreBtn").classList.add("hidden");
  } else {
  }
  if (comments.length > 0)
    document.getElementById("emptyComments").classList.add("hidden");
  document.getElementById("commentsContainer").classList.remove("hidden");
  document.getElementById("commentsLoader").classList.add("hidden");
}

async function loadMore() {
  document.getElementById("loadmoreBtn").classList.add("is-loading");
  currentPage++;
  const response = await axios.get(
    `/comments/${route.params.projectId}/?page=${currentPage}`
  );
  response.data.docs.forEach((doc: Comment) => {
    comments.push(doc);
  });
  if (currentPage === maxPages) {
    document.getElementById("loadmoreBtn").classList.add("hidden");
  }
  document.getElementById("loadmoreBtn").classList.remove("is-loading");
}

utils.onLoad(async () => {
  renderComments(true);
});

eventBus.addEventListener("rerenderComments", async () => {
  renderComments(true);
});
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
            <button class="ml-2 hover:opacity-30">
              <svg
                fill="currentColor"
                class="opacity-65"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m3 15 .117.007a1 1 0 0 1 .876.876L4 16v4h4l.117.007a1 1 0 0 1 0 1.986L8 22H3l-.117-.007a1 1 0 0 1-.876-.876L2 21v-5l.007-.117a1 1 0 0 1 .876-.876zm18 0a1 1 0 0 1 .993.883L22 16v5a1 1 0 0 1-.883.993L21 22h-5a1 1 0 0 1-.117-1.993L16 20h4v-4a1 1 0 0 1 .883-.993zM8 2a1 1 0 0 1 .117 1.993L8 4H4v4a1 1 0 0 1-.883.993L3 9a1 1 0 0 1-.993-.883L2 8V3a1 1 0 0 1 .883-.993L3 2zm13 0 .117.007a1 1 0 0 1 .876.876L22 3v5l-.007.117a1 1 0 0 1-.876.876L21 9l-.117-.007a1 1 0 0 1-.876-.876L20 8V4h-4l-.117-.007a1 1 0 0 1 0-1.986L16 2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        class="dark:bg-neutral-900 bg-neutral-300 rounded-xl lg:w-full w-[90vw] min-h-[433px]"
        style="height: 100%"
      >
        <p class="m-3 h-full w-full">Hello gays</p>
      </div>
      <div
        class="lg:col-span-2 rounded-xl dark:bg-neutral-900 bg-neutral-300 mb-5"
      >
        <h3 class="text-3xl text-center font-bold mt-5">Commenti</h3>
        <div id="commentsLoader" class="m-5 mt-10 flex w-full justify-center">
          <div class="loader bw">
            <div class="bar-bounce" />
          </div>
        </div>
        <div class="m-3 hidden" id="commentsContainer">
          <CommentBoxInput />
          <div
            style="height: 2px"
            class="dark:bg-neutral-700 bg-neutral-400 m-3"
          />
          <p class="text-center m-2" id="emptyComments">
            Wow, così vuoto qui 😯 *suono di grilli*
          </p>
          <CommentsRenderer
            v-for="i in comments"
            :username="i.author.username"
            :comment="i.content"
            :totalReplies="i.replies"
            :id="i._id"
          />
          <div class="flex w-full items-center justify-center mt-3">
            <button
              class="btn solid info outline"
              id="loadmoreBtn"
              @click="loadMore()"
            >
              Carica altri
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

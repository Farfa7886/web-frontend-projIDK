<script setup lang="ts">
import { PropType } from "vue";
import Comment from "./Comment.vue";
import CommentReply from "./CommentReply.vue";
import { reactive, ref, onMounted } from "vue";
import utils from "../../helpers/utils";
import axios from "axios";
import { useRoute } from "vue-router";

const props = defineProps({
  username: String,
  comment: String,
  id: String,
  totalReplies: Number,
});

const route = useRoute();
let remainingReplies = props.totalReplies;
let readReplies = 0;
let isLoading = false;
let currentPage = 0;
const showRepliesButton = ref(null);

interface Reply {
  author: {
    username: string;
  };
  content: string;
  id: string;
}
let replies: Reply[] = reactive([]);

async function showReplies() {
  if (isLoading) return;
  isLoading = true;
  showRepliesButton.value.classList.add("is-loading");
  currentPage++;
  const response = await axios.get(
    `/replies/${route.params.projectId}/${props.id}/?page=${currentPage}`
  );
  console.log(response.data);
  response.data.docs.forEach((doc: Reply) => {
    replies.push(doc);
  });
  showRepliesButton.value.classList.remove("is-loading");
  readReplies += 10;
  if (props.totalReplies - readReplies < 0)
    showRepliesButton.value.classList.add("hidden");
  isLoading = false;
}
</script>

<template>
  <Comment :username="username" :comment="comment" :id="id">
    <CommentReply
      v-for="i in replies"
      :username="i.author.username"
      :content="i.content"
      :id="i.id"
    />
    <button
      ref="showRepliesButton"
      class="btn solid bw sm mt-2 pill ghost"
      v-if="remainingReplies > 0"
      @click="showReplies()"
    >
      Visualizza {{ totalReplies - readReplies }} risposte
    </button>
  </Comment>
</template>

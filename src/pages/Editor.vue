<script setup>
import { useRoute } from "vue-router";
import NewProject from "../components/editor/NewProject.vue";

const route = useRoute();
</script>

<template>
  <NewProject v-if="route.params.projectId == 'new'" />
</template>

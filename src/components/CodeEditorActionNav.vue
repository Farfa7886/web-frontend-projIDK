<script>
import { eventBus } from "../event-bus";

export default {
  methods: {
    test() {
      eventBus.dispatchEvent(new Event("testCode"));
    },
    save() {
      document.getElementById("saveBtn").classList.add("is-loading");
      eventBus.dispatchEvent(new Event("save"));
    },
  },
};
</script>

<template>
  <div
    class="flex dark:bg-zinc-700 bg-zinc-300 h-full"
    style="align-items: center"
  >
    <div class="flex w-full">
      <h4 class="font-bold text-xl ml-2 hover:opacity-60" id="projName">
        [PROJECT NAME]
      </h4>
      <div class="w-full flex justify-end mr-2 gap-2">
        <button
          class="btn solid warn compact light sm ml-3"
          @click="test()"
          id="testCodeBtn"
        >
          Compile & test
        </button>
        <button class="btn solid info sm" @click="save()" id="saveBtn">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

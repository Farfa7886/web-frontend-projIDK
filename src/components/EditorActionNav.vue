<script stup>
import { eventBus } from "../event-bus";

function testCode() {
  console.log("hi");
  //eventBus.dispatchEvent(new Event("testCode"));
}
function ee() {
  console.log("bubu");
}
</script>

<template>
  <div
    class="flex dark:bg-zinc-700 bg-zinc-300 h-full"
    style="align-items: center"
  >
    <div class="flex">
      <h4 class="font-bold text-xl ml-2 hover:opacity-60">[PROJECT NAME]</h4>
      <button class="btn solid warn compact light sm ml-3" @click="ee()">
        Compile & test
      </button>
    </div>
  </div>
</template>

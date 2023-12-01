<script setup>
import { onMounted, ref, shallowRef } from "vue";
import Blockly from "blockly";
import { WorkspaceSearch } from "@blockly/plugin-workspace-search";
import { Backpack } from "@blockly/workspace-backpack";
import "@blockly/toolbox-search";

import { CrossTabCopyPaste } from "@blockly/plugin-cross-tab-copy-paste";

import "../helpers/blocklyEditor/customCategory";

const props = defineProps(["options"]);
const blocklyToolbox = ref();
const blocklyDiv = ref();
let workspace = shallowRef();

defineExpose({ workspace });

onMounted(() => {
  const options = props.options || {};
  if (!options.toolbox) {
    options.toolbox = blocklyToolbox.value;
  }
  workspace = Blockly.inject(blocklyDiv.value, options);
  const workspaceSearch = new WorkspaceSearch(workspace);
  const backpack = new Backpack(workspace, {
    allowEmptyBackpackOpen: false,
  });
  const crossTabCopyPaste = new CrossTabCopyPaste();
  crossTabCopyPaste.init(options, () => {
    console.log("Use this error callback to handle TypeError while pasting");
  });

  Blockly.ContextMenuRegistry.registry.unregister("blockDuplicate");

  workspaceSearch.init();
  backpack.init();
});
</script>

<template>
  <div style="height: calc(100% - 50px)" class="rounded-xl">
    <div
      class="blocklyDiv h-full rounded-xl"
      ref="blocklyDiv"
      style="height: 100%"
    ></div>
    <xml ref="blocklyToolbox" style="display: none">
      <slot></slot>
    </xml>
  </div>
</template>

<style scoped>
.blocklyDiv {
  height: 300px;
  width: 100%;
  border-radius: 400px !important;
}
</style>

<style>
.blocklyTreeRow {
  border-radius: 5px;
  margin-bottom: 8px;
  height: 35px;
  display: flex;
  align-items: center;
}

.blocklyToolboxCategory {
  margin-left: 5px;
  margin-right: 5px;
}

.blocklyTreeLabel {
  color: white;
}

@media (prefers-color-scheme: dark) {
  .blockly-ws-search-input input[type="text"] {
    @apply input bg-neutral-700 text-white;
  }
  .blockly-ws-search {
    @apply bg-neutral-600 border-black shadow-xl;
  }
}
</style>

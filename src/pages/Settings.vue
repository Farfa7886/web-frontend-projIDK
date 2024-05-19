<script setup lang="ts">
import axios from "axios";
import AvatarMaker from "../components/AvatarMaker.vue";
import { onMounted } from "vue";

onMounted(() => {});
</script>

<template>
  <div class="h-[calc(100vh-70px)] w-full">
    <div class="w-full grid lg:grid-cols-2 grid-cols-1 gap-2 p-2 pt-10">
      <div>
        <AvatarMaker />
      </div>
      <div>
        <div class="w-full h-[calc(100%-40.78px)]">
          <h2 class="font-bold text-2xl">Username</h2>
          <label
            for="Username"
            class="lg:w-[50%] relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="text"
              id="Username"
              class="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Username"
            />

            <span
              class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
            >
            </span>
          </label>

          <!-- ...-->

          <h2 class="font-bold text-2xl mt-3">Password</h2>
          <button class="btn solid warn">Cambia password</button>
        </div>
        <button class="btn solid info">Salva cambiamenti</button>
      </div>
    </div>
  </div>
</template>

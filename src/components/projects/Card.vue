<script setup>
const props = defineProps({
  thumbnail: String,
  date: Date,
  updated: Date,
  title: String,
  description: String,
  id: String,
});
</script>

<template>
  <button class="text-left hover:opacity-80">
    <a :href="'/editor/' + id">
      <div
        class="overflow-hidden rounded-lg has-shadow w-full dark:bg-neutral-900"
      >
        <img
          :src="thumbnail == '' ? '/no_thumbnail.png' : thumbnail"
          class="aspect-video rounded-b-none"
          style="object-fit: cover"
          alt=""
        />
        <div class="p-4 flex flex-col gap-2">
          <div class="text-xs">
            {{
              "Creato " +
              date.toLocaleDateString() +
              "・Aggiornato " +
              updated.toLocaleDateString()
            }}
          </div>
          <h3 class="text-xl font-semibold">{{ title }}</h3>
          <div class="text-sm">
            <p>
              {{ description == "" ? "No description" : description }}
            </p>
          </div>
        </div>
      </div></a
    >
  </button>
</template>

<script setup>
import CreateSlide from "./components/CreateSlide.vue";
import SlideshowBtn from "./components/SlideshowBtn.vue";
import SlideshowSidebar from "./components/SlideshowSidebar.vue";
import { onMounted, reactive, ref } from "vue";
import axios from "axios";
import utils from "../../helpers/utils";
import { useRoute } from "vue-router";
import { eventBus } from "../../event-bus";

let layouts = []; // { selected: bool, layoutUrl: string }
const route = useRoute();
let projectData = { slides: [] };
const newSlideBtn = ref(null);
let projectSlides = reactive([
  // {
  //   slideshowName: "Slide 1",
  //   layoutUrl: "/slideshowLayouts/info_1.svg",
  //   current: false,
  //   index: 0,
  //   layoutType: "info_1",
  // },
]); // { layoutUrl: str, slideshowName: str, current: bool }

onMounted(async () => {
  const data = (
    await axios.get(`/project/${route.params.projectId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
  ).data.data;

  console.log(data);
  if (data.data) projectData = data.data;
  document.getElementById("select-slide-info-div").classList.remove("hidden");
  document.getElementById("slideActionNav").classList.add("hidden");
});

eventBus.addEventListener("createSlide", (event) => {
  projectSlides.forEach((slide) => {
    slide.current = false;
  });
  projectSlides.push({
    slideshowName: `Slide ${projectSlides.length + 1}`,
    layoutUrl: `/slideshowLayouts/${event.detail}.svg`,
    current: true,
    index: projectSlides.length,
    layoutType: event.detail,
  });
  document.getElementById("select-slide-info-div").classList.add("hidden");
  document.getElementById("slideActionNav").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("newSlideBtn").scrollIntoView();
  }, 100);
});

eventBus.addEventListener("selectSlide", (event) => {
  projectSlides.forEach((slide) => {
    if (slide.slideshowName != event.detail.name) slide.current = false;
    else slide.current = true;
  });
  document.getElementById("select-slide-info-div").classList.add("hidden");
  document.getElementById("slideActionNav").classList.remove("hidden");
  eventBus.dispatchEvent(
    new CustomEvent("slideData", {
      detail: {
        top: event.detail.index == 0, // is slide at the top of the list
        bottom: event.detail.index == projectSlides.length - 1, // is slide at the bottom of the list
        index: event.detail.index,
        name: event.detail.name,
        layoutType: event.detail.layoutType,
      },
    })
  );
});
</script>

<template>
  <div
    class="grid lg:grid-cols-7 grid-cols-1 w-full gap-2 p-2"
    style="height: calc(100vh - 70px)"
  >
    <div style="overflow-y: auto">
      <SlideshowBtn
        v-for="i in projectSlides"
        :layoutUrl="i.layoutUrl"
        :name="i.slideshowName"
        :selected="i.current"
        :index="i.index"
      />
      <CreateSlide />
    </div>
    <div
      class="bg-neutral-200 dark:bg-neutral-950 lg:col-span-5 lg:h-auto h-[900px] rounded-xl dropzone"
    ></div>
    <div id="select-slide-info-div" class="hidden">Seleziona una slide</div>
    <div style="overflow-y: auto" id="slideActionNav">
      <SlideshowSidebar />
    </div>
  </div>
</template>

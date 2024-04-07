<script setup>
import Navbar from "./components/Navbar.vue";

// In your main JavaScript file or a component
document.addEventListener("DOMContentLoaded", () => {
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const body = document.body;

  if (prefersDarkScheme) {
    body.classList.add("dark");
  } else {
    body.classList.add("light");
  }
});
</script>

<template><Navbar /><router-view /></template>

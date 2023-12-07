<script setup>
import config from "../../projectConfig";
</script>

<template>
  <nav class="bg-zinc-200 border-gray-200 dark:bg-neutral-900">
    <div
      class="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >{{ config.name }}</span
        >
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 zinc-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gr-200 bg-zinc-200 border-gray-200 dark:bg-neutral-900 md:dark:bg-neutral-900 dark:border-gray-700"
        >
          <li>
            <label
              for="UserEmail"
              class="cursor-text relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-gray-700 dark:bg-neutral-800 bg-gray-100"
            >
              <input
                type="email"
                id="UserEmail"
                placeholder="Email"
                class="peer w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 dark:text-white sm:text-sm bg-gray-100"
              />

              <span
                class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs dark:text-gray-200"
              >
                🔍 Search
              </span>
            </label>
          </li>
          <li>
            <a
              href="/"
              class="block py-2 px-3 text-gray-900 text-center rounded hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-gray-100"
              style="height: 35px; width: 70px; line-height: 35px"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="/explore"
              class="block py-2 px-3 text-gray-900 text-center rounded hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-gray-100"
              style="height: 35px; width: 80px; line-height: 35px"
              aria-current="page"
              >Explore</a
            >
          </li>
          <li>
            <a
              href="/editor/new"
              class="block py-2 px-3 text-gray-900 text-center rounded hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-gray-100"
              style="height: 35px; width: 80px; line-height: 35px"
              aria-current="page"
              >Create</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

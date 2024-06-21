<template>
  <footer class="relative mt-24 sm:mt-32">
    <div class="border-t border-neutral-200 dark:border-neutral-800">
      <div
        class="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl py-8 lg:py-4 flex items-center justify-between lg:gap-x-3"
      >
        <div
          class="flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 lg:mt-0 lg:order-1"
        >
          <a
            class="flex items-center justify-center space-x-3 text-lg font-semibold text-center text-neutral-600 dark:text-gray-100 selection:bg-emerald-500 mr-10"
            href="/"
          >
            <div
              class="relative h-8 w-8 md:h-6 md:w-6 bg-background text-white flex items-center justify-center rounded-md text-sm antialiased"
            >
              <div class="text-sm text-emerald-500 relative z-20">
                <MinimalLogo class="w-6 h-6" />
              </div>
            </div>
            <div class="flex items-center gap-2">
              <h1 class="text-primary text-xl">Acme</h1>
            </div>
          </a>
          <div class="mr-4 hidden md:flex items-center">
            <p class="text-neutral-500 dark:text-neutral-400 text-sm">
              Copyright © {{ new Date().getFullYear() }}. All rights reserved.
            </p>
          </div>
        </div>

        <div
          class="lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3"
        >
          <div
            class="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end"
          >
            <ul role="list" class="flex space-x-4">
              <li>
                <Button
                  variant="link"
                  type="button"
                  class="text-sm p-0 relative text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                >
                  FAQ
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  type="button"
                  class="text-sm p-0 relative text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                >
                  Help center
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  type="button"
                  class="text-sm p-0 relative text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                >
                  About Us
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped></style>

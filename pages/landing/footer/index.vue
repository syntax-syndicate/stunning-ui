<template>
  <main class="w-screen h-screen relative bg-dots flex flex-col">
    <footer class="absolute bottom-0 left-0 w-full bg-background">
      <div class="border-t border-neutral-200 dark:border-neutral-800">
        <div
          class="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3"
        >
          <div
            class="lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3"
          >
            <div
              class="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end"
            >
              <Button
                variant="ghost"
                size="icon"
                @click="navigateTo('https://x.com/robert_shaw_x')"
              >
                <Icon name="ri:twitter-x-line" class="h-[1.2rem] w-[1.2rem]" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                @click="navigateTo('https://github.com/xiaoluoboding')"
              >
                <Icon name="ri:github-fill" class="h-6 w-6" />
              </Button>
              <ToggleDarkmode />
            </div>
          </div>
          <div
            class="mt-3 lg:mt-0 lg:order-2 flex items-center justify-center"
          ></div>
          <div
            class="flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1"
          >
            <div class="mr-4 hidden md:flex items-center">
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
              <p class="text-neutral-500 dark:text-neutral-400 text-sm">
                Copyright © {{ new Date().getFullYear() }}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>

<script lang="ts" setup></script>

<style scoped></style>

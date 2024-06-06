<template>
  <header
    class="flex h-16 items-center mx-auto bg-background/75 backdrop-blur sticky top-0 z-50 border-b dark:border-neutral-800"
  >
    <div class="container max-w-screen-2xl flex">
      <div class="mr-4 hidden md:flex">
        <a
          class="flex items-center justify-center space-x-3 text-lg font-semibold py-6 text-center text-neutral-600 dark:text-gray-100 selection:bg-emerald-500 mr-10"
          href="/"
        >
          <div
            class="relative h-8 w-8 md:h-6 md:w-6 bg-background text-white flex items-center justify-center rounded-md text-sm antialiased"
          >
            <div class="text-sm text-emerald-500 relative z-20">
              <Logo class="w-6 h-6" />
            </div>
          </div>
          <div class="flex flex-col">
            <h1 class="text-primary text-2xl">Stunning UI</h1>
          </div>
        </a>
      </div>
      <nav class="flex items-center space-x-2 text-sm font-medium xl:flex">
        <Button variant="link" @click="navigateTo('/components')">
          Components
        </Button>
        <Button variant="link" @click="navigateTo('/templates')">
          Templates
        </Button>
        <Button variant="link" @click="navigateTo('/pricing')">
          Pricing
        </Button>
        <Button variant="link" @click="navigateTo('/components')">
          Roadmap
        </Button>
      </nav>
      <div
        class="flex flex-1 items-center justify-end gap-2 sm:gap-4 md:justify-end"
      >
        <NuxtLink href="https://twitter.com/robert_shaw_x" target="_blank">
          <ri:twitter-x-line
            class="w-4 h-4 dark:text-white/60 hover:text-white"
          />
        </NuxtLink>
        <ToggleDarkmode />
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style scoped></style>

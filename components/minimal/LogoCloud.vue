<template>
  <section class="container max-w-screen-lg py-24 sm:py-32 px-4 sm:px-8">
    <div
      class="relative flex flex-col items-center justify-center overflow-hidden rounded-lg md:dark:shadow-xl"
    >
      <div className="font-medium text-muted-foreground mb-10 text-center px-8">
        Join over 1,000 startups and start to maximize your productivity.
      </div>
      <div
        className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-y-12 sm:gap-y-6 sm:gap-x-6"
      >
        <template v-for="(logo, idx) in logos" :key="idx">
          <img
            :src="logo.src"
            class="h-10 w-4/5 sm:w-28 mx-auto px-2 brightness-0 dark:invert"
            :alt="logo.name"
          />
        </template>
      </div>
      <div
        class="pointer-events-none absolute inset-y-0 left-0 w-[12%] sm:w-1/3 bg-gradient-to-r from-white dark:from-background"
      ></div>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-[12%] sm:w-1/3 bg-gradient-to-l from-white dark:from-background"
      ></div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { logos } from '~/lib/constants'
</script>

<style scoped></style>

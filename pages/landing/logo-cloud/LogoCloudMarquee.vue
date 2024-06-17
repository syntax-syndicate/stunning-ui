<template>
  <NuxtLayout name="playground" class="bg-dots">
    <div
      class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg py-20 md:dark:shadow-xl"
    >
      <div className="font-medium text-muted-foreground mb-10">
        Join over 1,000 startups and start to maximize your productivity.
      </div>
      <Marquee pauseOnHover :repeat="4" class="[--duration:20s]">
        <template v-for="(logo, idx) in logos" :key="idx">
          <img
            :src="logo.src"
            class="h-10 w-28 px-2 brightness-0 dark:invert"
            :alt="logo.name"
          />
        </template>
      </Marquee>
      <div
        class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
      ></div>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
      ></div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import Marquee from '@/components/stunning/Marquee.vue'
import { logos } from '~/lib/constants'
</script>

<style scoped></style>

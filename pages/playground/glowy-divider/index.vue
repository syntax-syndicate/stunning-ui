<template>
  <main class="w-full h-full pt-32 pb-64">
    <div class="flex flex-col md:items-center">
      <span class="font-mono text-sm tracking-tight text-neon">
        How it works
      </span>
      <h2
        class="mt-4 text-left font-display text-2xl font-light leading-[1.125] text-muted-foreground md:text-center md:text-4xl lg:text-5xl"
      >
        Your pathway to <br />
        <span class="text-foreground">Business Success</span>
      </h2>
      <p
        class="mx-auto mt-4 text-left leading-relaxed text-muted-foreground md:max-w-2xl md:text-center lg:mt-8"
      >
        Kaldorei is a platform that helps you build your business.
      </p>
    </div>

    <GlowyDivider direction="top" class="lg:px-24" />

    <div class="flex flex-col md:items-center">
      <span class="font-mono text-sm tracking-tight text-neon">
        What others say
      </span>
      <h2
        class="mt-4 text-left font-display text-2xl font-light leading-[1.125] text-muted-foreground md:text-center md:text-4xl lg:text-5xl"
      >
        Trusted by the experts, <br />
        <span class="text-foreground">used by the leaders</span>
      </h2>
      <p
        class="mx-auto mt-4 text-left leading-relaxed text-muted-foreground md:max-w-2xl md:text-center lg:mt-8"
      >
        Don't just take our word for it. Read what others say about Kaldorei.
      </p>
    </div>

    <GlowyDivider direction="bottom" class="lg:px-24" />

    <div
      class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background"
    >
      <Marquee pauseOnHover :repeat="4" class="[--duration:20s]">
        <template v-for="item in firstRow">
          <figure
            class="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
          >
            <div class="flex flex-row items-center gap-2">
              <img
                class="rounded-full"
                width="32"
                height="32"
                alt=""
                :src="item.img"
              />
              <div class="flex flex-col">
                <figcaption class="text-sm font-medium dark:text-white">
                  {{ item.name }}
                </figcaption>
                <p class="text-xs font-medium dark:text-white/40">
                  {{ item.username }}
                </p>
              </div>
            </div>
            <blockquote class="mt-2 text-sm">{{ item.body }}</blockquote>
          </figure>
        </template>
      </Marquee>
      <Marquee reverse pauseOnHover :repeat="4" class="[--duration:20s]">
        <template v-for="item in secondRow">
          <figure
            class="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
          >
            <div class="flex flex-row items-center gap-2">
              <img
                class="rounded-full"
                width="32"
                height="32"
                alt=""
                :src="item.img"
              />
              <div class="flex flex-col">
                <figcaption class="text-sm font-medium dark:text-white">
                  {{ item.name }}
                </figcaption>
                <p class="text-xs font-medium dark:text-white/40">
                  {{ item.username }}
                </p>
              </div>
            </div>
            <blockquote class="mt-2 text-sm">{{ item.body }}</blockquote>
          </figure>
        </template>
      </Marquee>
      <div
        class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
      ></div>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
      ></div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import GlowyDivider from '@/components/stunning/GlowyDivider.vue'

import Marquee from '@/components/stunning/Marquee.vue'
import { reviews } from '~/lib/constants'

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)
</script>

<style scoped></style>

<template>
  <NuxtLayout name="playground">
    <div
      class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-20 md:shadow-xl"
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
  </NuxtLayout>
</template>

<script lang="ts" setup>
import Marquee from '@/components/stunning/Marquee.vue'

const reviews = [
  {
    name: 'Jack',
    username: '@jack',
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: 'https://avatar.vercel.sh/jack'
  },
  {
    name: 'Jill',
    username: '@jill',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: 'https://avatar.vercel.sh/jill'
  },
  {
    name: 'John',
    username: '@john',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/john'
  },
  {
    name: 'Jane',
    username: '@jane',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jane'
  },
  {
    name: 'Jenny',
    username: '@jenny',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jenny'
  },
  {
    name: 'James',
    username: '@james',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/james'
  }
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)
</script>

<style scoped></style>

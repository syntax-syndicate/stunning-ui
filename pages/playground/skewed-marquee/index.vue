<template>
  <NuxtLayout name="playground">
    <div
      class="relative flex h-full w-full overflow-hidden rounded-lg bg-background md:dark:shadow-xl"
    >
      <SkewedMarquee>
        <template #content>
          <div class="grid grid-cols-1 gap-2">
            <Marquee pauseOnHover :repeat="4" class="[--duration:10s]">
              <template v-for="item in firstRow">
                <figure
                  class="relative w-full cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
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
            <Marquee reverse pauseOnHover :repeat="4" class="[--duration:10s]">
              <template v-for="item in secondRow">
                <figure
                  class="relative w-full cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
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
            <Marquee pauseOnHover :repeat="4" class="[--duration:10s]">
              <template v-for="item in firstRow">
                <figure
                  class="relative w-full cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
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
          </div>
        </template>
      </SkewedMarquee>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import SkewedMarquee from '@/components/stunning/SkewedMarquee.vue'
import Marquee from '@/components/stunning/Marquee.vue'
import { reviews } from '~/lib/constants'

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)
</script>

<style scoped></style>

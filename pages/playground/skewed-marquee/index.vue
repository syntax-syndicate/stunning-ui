<template>
  <NuxtLayout name="playground">
    <div
      class="relative flex h-full w-full overflow-hidden rounded-lg bg-background md:dark:shadow-xl"
    >
      <SkewedWrapper>
        <template #content>
          <div class="grid grid-cols-1 gap-2">
            <Marquee pauseOnHover :repeat="4" class="[--duration:10s]">
              <template v-for="item in firstRow">
                <figure
                  class="relative w-full cursor-pointer overflow-hidden rounded-xl border p-4 border-neutral-950/[.1] bg-neutral-950/[.01] hover:bg-neutral-950/[.05] dark:border-neutral-50/[.1] dark:bg-neutral-50/[.10] dark:hover:bg-neutral-50/[.15] transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
                >
                  <div class="flex flex-row items-center gap-2">
                    <img
                      class="rounded-full w-8 h-8 object-cover aspect-square"
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
                  class="relative w-full cursor-pointer overflow-hidden rounded-xl border p-4 border-neutral-950/[.1] bg-neutral-950/[.01] hover:bg-neutral-950/[.05] dark:border-neutral-50/[.1] dark:bg-neutral-50/[.10] dark:hover:bg-neutral-50/[.15] transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
                >
                  <div class="flex flex-row items-center gap-2">
                    <img
                      class="rounded-full w-8 h-8 object-cover aspect-square"
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
                  class="relative w-full cursor-pointer overflow-hidden rounded-xl border p-4 border-neutral-950/[.1] bg-neutral-950/[.01] hover:bg-neutral-950/[.05] dark:border-neutral-50/[.1] dark:bg-neutral-50/[.10] dark:hover:bg-neutral-50/[.15] transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
                >
                  <div class="flex flex-row items-center gap-2">
                    <img
                      class="rounded-full w-8 h-8 object-cover aspect-square"
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
      </SkewedWrapper>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import SkewedWrapper from '~/components/stunning/SkewedWrapper.vue'
import Marquee from '@/components/stunning/Marquee.vue'
import { reviews } from '~/lib/constants'

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)
</script>

<style scoped></style>

<template>
  <Marquee pauseOnHover :repeat="4" class="![--duration:160s] p-8">
    <template v-for="item in allcomponentList">
      <figure
        class="relative w-full cursor-pointer overflow-hidden rounded-xl border p-2 border-neutral-950/[.1] bg-neutral-950/[.01] hover:bg-neutral-950/[.05] dark:border-neutral-50/[.1] dark:bg-neutral-50/[.10] dark:hover:bg-neutral-50/[.15] transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
      >
        <div class="flex flex-col items-center gap-2">
          <img
            class="rounded-lg aspect-video"
            width="256"
            height="144"
            alt=""
            :src="item.image"
            v-if="item.image"
          />
          <div
            class="relative bg-neutral-900/5 dark:bg-white/5 rounded-lg w-64 h-36"
            v-else
          >
            <div
              class="aspect-video rounded-lg relative overflow-hidden border border-dashed border-neutral-900/10 dark:border-white/10"
            >
              <ImagePlaceholder />
            </div>
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-pre-wrap text-center text-lg font-medium tracking-tighter text-black dark:text-white"
            >
              Comming Soon
            </div>
          </div>
          <figcaption class="text-xs font-medium dark:text-white">
            {{ item.name }}
          </figcaption>
        </div>
      </figure>
    </template>
  </Marquee>
  <div
    class="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-background"
  ></div>
  <div
    class="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white dark:from-background"
  ></div>
</template>

<script lang="ts" setup>
import { componentList } from '~/lib/constants'
import Marquee from '~/components/stunning/Marquee.vue'

const allcomponentList = componentList.map((item) => item.components).flat(1)
</script>

<style scoped></style>

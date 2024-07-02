<template>
  <SkewedWrapper>
    <template #content>
      <Marquee vertical pauseOnHover :repeat="4" class="![--duration:120s] p-8">
        <template v-for="item in blockList[0].components">
          <figure
            class="relative w-full cursor-pointer overflow-hidden rounded-xl border p-4 border-neutral-950/[.1] bg-neutral-950/[.01] hover:bg-neutral-950/[.05] dark:border-neutral-50/[.1] dark:bg-neutral-50/[.10] dark:hover:bg-neutral-50/[.15] transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
          >
            <div class="flex flex-col items-center gap-2">
              <img
                class="rounded-lg"
                width="256"
                height="256"
                alt=""
                :src="item.image"
              />
              <figcaption class="text-xs font-medium dark:text-white">
                {{ item.name }}
              </figcaption>
            </div>
          </figure>
        </template>
      </Marquee>
    </template>
  </SkewedWrapper>
</template>

<script lang="ts" setup>
import { blockList } from '~/lib/constants'
import SkewedWrapper from '~/components/stunning/SkewedWrapper.vue'
import Marquee from '~/components/stunning/Marquee.vue'
</script>

<style scoped></style>

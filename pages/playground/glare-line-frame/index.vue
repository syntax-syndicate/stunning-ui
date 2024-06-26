<template>
  <main
    class="w-screen h-screen flex items-center justify-center bg-neutral-950"
  >
    <GlareLineFrame>
      <div
        class="relative z-10 flex w-full cursor-pointer flex-col items-start gap-8"
      >
        <div class="group flex w-full flex-col">
          <div class="flex w-full justify-between">
            <div class="font-semibold sm:text-base md:text-lg lg:text-2xl">
              Stunning UI
            </div>
            <div
              class="transition-all ease-in-out will-change-auto group-hover:translate-x-1"
            >
              <Icon name="ri:arrow-right-line" class="h-6 w-6" />
            </div>
          </div>
          <div class="text-neutral-100/80 sm:text-xs md:text-sm lg:text-base">
            Create Stunning Websites That Stand Out
          </div>
        </div>
        <div
          class="w-full h-full flex-1 bg-white/5 ring-1 ring-inset ring-white/10 rounded-[8px] p-3 transition-all ease-linear group-hover:-translate-y-4"
        >
          <div
            class="aspect-video rounded-md relative overflow-hidden border border-dashed border-white/10"
          >
            <svg
              class="absolute inset-0 h-full w-full stroke-white/10"
              fill="none"
            >
              <defs>
                <pattern
                  id="pattern-image-placeholder"
                  x="0"
                  y="0"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
                </pattern>
              </defs>
              <rect
                stroke="none"
                fill="url(#pattern-image-placeholder)"
                width="100%"
                height="100%"
              ></rect>
            </svg>
          </div>
        </div>
      </div>
    </GlareLineFrame>
  </main>
</template>

<script lang="ts" setup>
import GlareLineFrame from '@/components/stunning/GlareLineFrame.vue'
</script>

<style scoped></style>

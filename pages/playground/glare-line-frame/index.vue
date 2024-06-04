<template>
  <main class="w-screen h-screen flex items-center justify-center">
    <GlareLineFrame class="bg-white dark:bg-neutral-950">
      <a
        class="relative z-10 flex w-full cursor-pointer flex-col items-start gap-8"
        href="https://onetab.group"
      >
        <div class="group flex w-full flex-col">
          <div class="flex w-full justify-between">
            <div class="font-semibold sm:text-base md:text-lg lg:text-2xl">
              Stunning UI
            </div>
            <div
              class="transition-all ease-in-out will-change-auto group-hover:translate-x-1"
            >
              <ri:arrow-right-line class="h-6 w-6" />
            </div>
          </div>
          <div class="text-[#f2f2f2]/80 sm:text-xs md:text-sm lg:text-base">
            Create Stunning Websites That Stand Out
          </div>
        </div>
        <img
          src="https://www.onetab.group/preview.jpg"
          alt="One Tab Group"
          class="rounded-lg transition-all ease-linear group-hover:-translate-y-4"
        />
      </a>
    </GlareLineFrame>
  </main>
</template>

<script lang="ts" setup>
import GlareLineFrame from '@/components/stunning/GlareLineFrame.vue'
</script>

<style scoped></style>

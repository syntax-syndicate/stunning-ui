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
            <div class="h-6 w-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="transition ease-in-out will-change-auto group-hover:translate-x-1"
              >
                <path
                  fill="none"
                  stroke="#f2f2f2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
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

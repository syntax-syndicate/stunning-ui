<template>
  <NuxtLayout name="playground">
    <main class="w-full h-full flex flex-col justify-center items-center px-8">
      <div
        class="group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
      >
        <GradientBorderButton
          gradientColor="from-sky-400 via-rose-400 to-lime-400"
        >
          ✨ 2.0 Beta is live
          <Icon
            name="ri:arrow-right-line"
            class="w-4 h-4 ml-2 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
          />
        </GradientBorderButton>
      </div>
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import GradientBorderButton from '@/components/stunning/GradientBorderButton.vue'
</script>

<style scoped></style>

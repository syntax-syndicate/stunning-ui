<template>
  <NuxtLayout name="playground">
    <main class="w-full my-16 flex flex-col px-8 py-16 h-[200vh]">
      <div className="pb-4 flex justify-center w-full">
        <span class="text-neon-wb text-2xl text-white/30">
          Scroll-driven Blurry Text Reveal
        </span>
      </div>
      <BlurryTextReveal :text="text" />
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import BlurryTextReveal from '@/components/stunning/BlurryTextReveal.vue'

const text =
  'Stunning UI is Designed for Developers、Designers、Creators、Indie Hackers'
</script>

<style scoped></style>

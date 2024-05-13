<template>
  <NuxtLayout name="component">
    <div class="">
      <header class="space-y-2">
        <h1 class="text-3xl text-primary">Blurry Text Reveal</h1>
        <p class="text-secondary">Scrolling text reveal</p>
      </header>
      <main class="w-full mt-8">
        <div
          class="border border-neutral-800 relative w-full h-[200vh] rounded-2xl overflow-hidden"
        >
          <div class="flex flex-col h-full p-8">
            <div className="pb-4 flex justify-center w-full h-[50vh]">
              <span class="text-neon-wb text-2xl text-white/30">
                On-Scroll Blurry Text Reveal
              </span>
            </div>
            <BlurryTextReveal :text="paragraphPlaceholder" />
          </div>
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { paragraphPlaceholder } from '@/utils/constants'
</script>

<style scoped></style>

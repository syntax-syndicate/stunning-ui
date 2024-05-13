<template>
  <NuxtLayout name="component">
    <div class="">
      <header class="space-y-2">
        <h1 class="text-3xl text-primary">Text Reveal</h1>
        <p class="text-secondary">Scrolling text reveal</p>
      </header>
      <main class="w-full mt-8">
        <div
          class="border border-neutral-800 relative w-full h-[200rem] rounded-2xl overflow-hidden"
        >
          <div class="flex flex-col h-full p-8">
            <div
              className="pb-4 flex-center w-full text-sm text-white/30 h-[50vh]"
            >
              Scroll down
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

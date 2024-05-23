<template>
  <NuxtLayout name="component">
    <div class="">
      <header class="space-y-2">
        <h1 class="text-3xl text-primary">Text Reveal</h1>
        <p class="text-secondary-foreground">Scrolling text reveal</p>
      </header>
      <main class="w-full mt-8">
        <div class="border border-border relative w-full h-[200vh] rounded-2xl">
          <div class="flex flex-col p-8">
            <div className="pb-4 flex justify-center w-full">
              <span class="text-neon-wb text-2xl text-white/30">
                On-Scroll Text Reveal
              </span>
            </div>
            <TextReveal :text="paragraphPlaceholder" />
          </div>
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { paragraphPlaceholder } from '@/lib/constants'
</script>

<style scoped></style>

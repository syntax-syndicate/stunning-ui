<template>
  <NuxtLayout name="playground">
    <main class="w-full flex flex-col justify-center items-center h-full px-8">
      <div class="grid grid-cols-12 gap-4">
        <AnimatedGradientBorder class="col-span-8">
          <div class="rounded p-4 flex flex-col gap-2">
            <ri:magic-line class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-secondary-foreground">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </AnimatedGradientBorder>
        <AnimatedGradientBorder class="col-span-4">
          <div class="rounded p-4 flex flex-col gap-2">
            <ri:stack-line class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-secondary-foreground">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </AnimatedGradientBorder>

        <AnimatedGradientBorder class="col-span-4">
          <div class="rounded p-4 flex flex-col gap-2">
            <ri:cake-2-line class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-secondary-foreground">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </AnimatedGradientBorder>
        <AnimatedGradientBorder class="col-span-8">
          <div class="rounded p-4 flex flex-col gap-2">
            <ri:vip-crown-line class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-secondary-foreground">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </AnimatedGradientBorder>
      </div>
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import AnimatedGradientBorder from '~/components/stunning/AnimatedGradientBorder.vue'
import { paragraphPlaceholder } from '~/lib/constants'
</script>

<style scoped></style>

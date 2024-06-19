<template>
  <NuxtLayout name="playground">
    <main class="w-full flex flex-col justify-center items-center h-full px-8">
      <div class="grid grid-cols-12 gap-4">
        <ProgressiveGradientBorder class="col-span-8">
          <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
            <Icon name="ri:magic-line" class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-secondary-foreground">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </ProgressiveGradientBorder>
        <ProgressiveGradientBorder class="col-span-4">
          <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
            <Icon name="ri:stack-line" class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-secondary-foreground">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </ProgressiveGradientBorder>

        <ProgressiveGradientBorder
          class="col-span-4"
          :style="{
            '--sui-gb-from-color': '#5f00ff',
            '--sui-gb-via-color': '#8250df',
            '--sui-gb-to-color': '#f4e162'
          }"
        >
          <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
            <Icon name="ri:cake-2-line" class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-secondary-foreground">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </ProgressiveGradientBorder>
        <ProgressiveGradientBorder
          class="col-span-8"
          :style="{
            '--sui-gb-from-color': '#4fa',
            '--sui-gb-via-color': '#4af',
            '--sui-gb-to-color': '#f4a'
          }"
        >
          <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
            <Icon name="ri:vip-crown-line" class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-secondary-foreground">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </ProgressiveGradientBorder>
      </div>
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import ProgressiveGradientBorder from '~/components/stunning/ProgressiveGradientBorder.vue'
import { paragraphPlaceholder } from '~/lib/constants'
</script>

<style scoped></style>

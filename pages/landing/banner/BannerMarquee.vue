<template>
  <main class="w-screen h-screen bg-dots">
    <Banner class="relative bg-neutral-50 dark:bg-neutral-950">
      <Marquee
        pauseOnHover
        :repeat="40"
        class="[--duration:30s] flex items-center"
      >
        <template v-for="(text, idx) in texts" :key="idx">
          {{ text }}
        </template>
      </Marquee>
      <div
        class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
      ></div>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
      ></div>
    </Banner>
  </main>
</template>

<script lang="ts" setup>
import Banner from '@/components/blocks/banner/Banner.vue'

const texts = [
  '50% off all plans',
  '・',
  'Limited time only',
  '・',
  '50% off all plans',
  '・',
  'Limited time only',
  '・',
  '50% off all plans',
  '・',
  'Limited time only',
  '・',
  '50% off all plans',
  '・',
  'Limited time only',
  '・',
  '50% off all plans',
  '・',
  'Limited time only',
  '・',
  '50% off all plans',
  '・',
  'Limited time only',
  '・',
  '50% off all plans',
  '・',
  'Limited time only',
  '・',
  '50% off all plans',
  '・',
  'Limited time only',
  '・',
  '50% off all plans',
  '・',
  'Limited time only',
  '・',
  '50% off all plans',
  '・',
  'Limited time only',
  '・',
  '50% off all plans',
  '・',
  'Limited time only',
  '・',
  '50% off all plans',
  '・',
  'Limited time only',
  '・',
  '50% off all plans',
  '・',
  'Limited time only',
  '・',
  '50% off all plans',
  '・',
  'Limited time only',
  '・',
  '50% off all plans',
  '・',
  'Limited time only',
  '・'
]
</script>

<style scoped></style>

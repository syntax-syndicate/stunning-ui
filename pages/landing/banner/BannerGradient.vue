<template>
  <main class="w-screen h-screen bg-dots">
    <Banner class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      <div class="text-white">
        Stunning UI 1.0 is here. Create stunning website that stand out!
      </div>
      <div>
        <Button size="xs" class="gap-2">
          <Icon name="ri:sparkling-2-line" />
          <span>Getting Started</span>
        </Button>
      </div>
    </Banner>
  </main>
</template>

<script lang="ts" setup>
import Banner from '@/components/blocks/banner/Banner.vue'
</script>

<style scoped></style>

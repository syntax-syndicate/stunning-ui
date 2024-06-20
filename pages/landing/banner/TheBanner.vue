<template>
  <div class="fixed h-10 bg-background w-full top-0 overflow-hidden z-50">
    <Banner class="bg-emerald-400 dark:bg-emerald-500">
      <div>
        Stunning UI beta 1.0 is here. Create stunning website that stand out!
      </div>
      <div>
        <Button size="xs" class="gap-2">
          <Icon name="ri:sparkling-2-line" />
          <span>Getting Started</span>
        </Button>
      </div>
    </Banner>
  </div>
</template>

<script lang="ts" setup>
import Banner from '@/components/blocks/banner/Banner.vue'
</script>

<style scoped></style>

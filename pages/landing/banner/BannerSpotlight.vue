<template>
  <main class="w-screen h-screen bg-dots">
    <Banner
      :class="
        cn(
          'px-paddings relative z-40 overflow-hidden leading-none transition-colors duration-200 dark:bg-neutral-950 dark:hover:bg-gray-new-8 bg-[#F5FBFD] hover:bg-[#f1fcff]',
          'before:content-normal before:absolute before:inset-x-0 before:bottom-0 before:z-10 before:block before:h-px before:w-full before:mix-blend-overlay before:dark:bg-white',
          'after:content-normal after:absolute after:left-1/2 after:top-1/2 after:-z-10 after:h-[188px] after:w-[60px] after:origin-center after:-translate-y-[43%] after:translate-x-[-290px] after:rotate-[226deg] after:rounded-[100%] after:bg-gradient-to-r after:from-green-300 after:via-blue-500 after:to-purple-600 after:mix-blend-plus-lighter after:blur-2xl after:dark:opacity-100 after:sm:left-[30%] after:sm:translate-x-0 after:opacity-70'
        )
      "
    >
      <div>
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
import { cn } from '~/lib/utils'
import Banner from '@/components/blocks/banner/Banner.vue'
</script>

<style scoped></style>

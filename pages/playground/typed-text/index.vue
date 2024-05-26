<template>
  <NuxtLayout name="playground">
    <main class="w-full flex flex-col px-8 py-16 h-full">
      <div class="flex-center flex-col h-full text-5xl font-semibold">
        <p class="text-center">
          <span class="text-neon">Stunning UI</span> is designed for
        </p>
        <p>
          <TypedText
            :words="['Designers', 'Developers', 'Creators', 'Indie Hackers']"
            class="ml-2 text-neon"
            :typeSpeed="75"
          />
        </p>
      </div>
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import TypedText from '@/components/stunning/TypedText.vue'
</script>

<style scoped></style>

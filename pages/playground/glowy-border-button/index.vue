<template>
  <NuxtLayout name="playground">
    <main class="w-full h-full flex justify-center items-center gap-8">
      <GlowyBorderButton>
        <span>Sign in</span>
      </GlowyBorderButton>

      <GlowyBorderButton color="#0ea5e9">
        <span>Sign in</span>
      </GlowyBorderButton>
      <GlowyBorderButton color="#10b981">
        <span>Sign in</span>
      </GlowyBorderButton>
      <GlowyBorderButton color="#8b5cf6">
        <span>Sign in</span>
      </GlowyBorderButton>
      <GlowyBorderButton color="#eab308">
        <span>Sign in</span>
      </GlowyBorderButton>
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import GlowyBorderButton from '~/components/stunning/GlowyBorderButton.vue'
</script>

<style scoped></style>

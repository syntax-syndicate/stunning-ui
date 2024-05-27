<template>
  <NuxtLayout name="playground">
    <main class="w-full h-full flex justify-center items-center gap-8">
      <GlowyBorderButton>
        <span>Sign in</span>
      </GlowyBorderButton>

      <GlowyBorderButton color="#a4f">
        <span>Sign in</span>
      </GlowyBorderButton>
      <GlowyBorderButton color="#f4a">
        <span>Sign in</span>
      </GlowyBorderButton>
      <GlowyBorderButton color="#4af">
        <span>Sign in</span>
      </GlowyBorderButton>
      <GlowyBorderButton color="#4fa">
        <span>Sign in</span>
      </GlowyBorderButton>
      <GlowyBorderButton color="#af4">
        <span>Sign in</span>
      </GlowyBorderButton>
      <GlowyBorderButton color="#fa4">
        <span>Sign in</span>
      </GlowyBorderButton>
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import GlowyBorderButton from '~/components/stunning/GlowyBorderButton.vue'
</script>

<style scoped></style>

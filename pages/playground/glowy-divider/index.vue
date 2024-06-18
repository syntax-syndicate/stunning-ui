<template>
  <main class="w-full h-full pt-32 pb-64">
    <div class="flex flex-col md:items-center">
      <span class="font-mono text-sm tracking-tight text-neon">
        Section A
      </span>
      <h2
        class="mt-4 text-left font-display text-2xl font-light leading-[1.125] text-muted-foreground md:text-center md:text-4xl lg:text-5xl"
      >
        Your pathway to <br />
        <span class="text-foreground">Business Success</span>
      </h2>
      <p
        class="mx-auto mt-4 text-left leading-relaxed text-muted-foreground md:max-w-2xl md:text-center lg:mt-8"
      >
        Stunning UI is a platform that helps you build your business.
      </p>
    </div>

    <GlowyDivider direction="top" class="lg:px-24" />

    <div class="flex flex-col md:items-center">
      <span class="font-mono text-sm tracking-tight text-neon">
        Section B
      </span>
      <h2
        class="mt-4 text-left font-display text-2xl font-light leading-[1.125] text-muted-foreground md:text-center md:text-4xl lg:text-5xl"
      >
        Trusted by the experts, <br />
        <span class="text-foreground">used by the leaders</span>
      </h2>
      <p
        class="mx-auto mt-4 text-left leading-relaxed text-muted-foreground md:max-w-2xl md:text-center lg:mt-8"
      >
        Don't just take our word for it. Read what others say about Stunning UI.
      </p>
    </div>
  </main>
</template>

<script lang="ts" setup>
import GlowyDivider from '@/components/stunning/GlowyDivider.vue'
</script>

<style scoped></style>

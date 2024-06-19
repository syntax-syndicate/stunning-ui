<template>
  <div class="text-left md:text-center mb-8">
    <span class="font-mono text-sm tracking-tight text-neon">
      {{ section }}
    </span>
    <h2
      class="mt-4 text-left font-display text-2xl font-light leading-[1.125] md:text-center md:text-4xl lg:text-5xl"
    >
      <slot name="title" v-if="$slots.title" />
      <span v-else>{{ title }}</span>
    </h2>
    <p
      class="mx-auto mt-4 text-left leading-relaxed text-muted-foreground md:max-w-2xl md:text-center lg:mt-8"
    >
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    section: string
    title?: string
    description: string
  }>(),
  {
    section: '',
    title: '',
    description: ''
  }
)
</script>

<style scoped></style>

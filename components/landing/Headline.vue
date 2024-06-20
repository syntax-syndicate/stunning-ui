<template>
  <div class="text-left mb-8" :class="alignClass">
    <template v-if="$slots.section">
      <slot name="section" />
    </template>
    <template v-else>
      <span v-if="section" class="font-mono text-sm tracking-tight text-neon">
        {{ section }}
      </span>
    </template>
    <h2
      class="mt-4 text-left font-display text-2xl font-light leading-[1.125] md:text-4xl lg:text-5xl"
      :class="alignClass"
    >
      <slot name="title" v-if="$slots.title" />
      <span v-else>{{ title }}</span>
    </h2>
    <p
      class="mx-auto mt-4 text-left leading-relaxed text-muted-foreground md:max-w-2xl lg:mt-8"
      :class="alignClass"
      v-if="description"
    >
      {{ description }}
    </p>
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    align: 'left' | 'center' | 'right'
    section?: string
    title?: string
    description?: string
  }>(),
  {
    align: 'center',
    section: '',
    title: '',
    description: ''
  }
)

const alignClass = computed(() => {
  if (props.align === 'left') return 'md:text-left'
  if (props.align === 'right') return 'md:text-right'
  return 'md:text-center'
})
</script>

<style scoped></style>

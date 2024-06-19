<template>
  <div class="text-center flex flex-col items-center">
    <Badge>{{ section }}</Badge>
    <h2
      class="my-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
    >
      {{ title }}
    </h2>
    <div class="text-lg/8 text-gray-600 dark:text-gray-300 line-clamp-2">
      {{ description }}
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    section: string
    title: string
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

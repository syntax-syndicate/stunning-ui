<template>
  <div
    class="blocks-playground border dark:border-neutral-700 rounded-bl-lg rounded-br-lg mt-4 overflow-hidden"
  >
    <iframe
      v-if="reflash"
      :src="url"
      class="w-full"
      :class="{
        'aspect-[16/9]': aspect === '16/9',
        'aspect-[4/3]': aspect === '4/3',
        'aspect-[3/4]': aspect === '3/4',
        'aspect-[9/16]': aspect === '9/16',
        'aspect-[1/1]': aspect === '1/1',
        'aspect-[5/2]': aspect === '5/2',
        dark: colorMode.preference === 'dark',
        light: colorMode.preference === 'light'
      }"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>
<script lang="ts">
export default {
  props: {
    url: String,
    aspect: {
      type: String,
      default: '16/9'
    }
  },
  fetchOnServer: false
}
</script>

<script setup lang="ts">
const colorMode = useColorMode()

const reflash = ref(false)

watch(
  () => colorMode.preference,
  () => {
    reflash.value = false
    nextTick(() => (reflash.value = true))
  },
  {
    immediate: true,
    deep: true
  }
)
</script>

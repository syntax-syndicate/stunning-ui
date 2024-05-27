<template>
  <div class="blocks-playground border border-neutral-700 rounded-lg">
    <iframe
      v-if="reflash"
      :src="url"
      class="w-full aspect-video rounded-lg"
      :class="colorMode.preference === 'dark' ? 'dark' : 'light'"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>
<script lang="ts">
export default {
  props: {
    url: String
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

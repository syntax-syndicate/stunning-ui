<template>
  <div
    class="sui-sticky-stack sticky top-0 min-h-[100vh] flex-center flex-col w-full"
    ref="stickyCardWrapper"
  >
    <div class="sui-sticky-stack-card w-full mx-auto flex-center flex-col">
      <slot name="card" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    maxHeight?: number
  }>(),
  {
    maxHeight: 90
  }
)

const stickyCardWrapper = ref<HTMLDivElement | null>(null)

watch(
  () => props.maxHeight,
  (h) => {
    nextTick(() => {
      stickyCardWrapper.value?.style.setProperty('--max-height', `${h}vh`)
    })
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<style scoped>
.sui-sticky-stack {
  --max-height: 90vh;
}

.sui-sticky-stack-card {
  height: var(--max-height);
}
</style>

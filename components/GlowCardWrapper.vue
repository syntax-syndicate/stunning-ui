<template>
  <main class="sui-glow-card-wrapper" ref="glowCardWrapper">
    <slot />
  </main>
</template>

<script lang="ts" setup>
const {
  hue = 120,
  size = 200,
  border = 2,
  radius = 10
} = defineProps<{
  hue: number
  size: number
  border: number
  radius: number
}>()

const glowCardWrapper = ref<HTMLElement | null>(null)

const syncPointer = ({ x, y }: { x: number; y: number }) => {
  if (glowCardWrapper.value) {
    glowCardWrapper.value.style.setProperty('--x', x.toFixed(2))
    glowCardWrapper.value.style.setProperty(
      '--xp',
      (x / window.innerWidth).toFixed(2)
    )

    glowCardWrapper.value.style.setProperty('--y', y.toFixed(2))
    glowCardWrapper.value.style.setProperty(
      '--yp',
      (y / window.innerHeight).toFixed(2)
    )
  }
}

const leaveWrapper = () => {
  if (glowCardWrapper.value) {
    glowCardWrapper.value.style.setProperty('--x', '0')
    glowCardWrapper.value.style.setProperty('--y', '0')
  }
}

const initialVariables = () => {
  if (glowCardWrapper.value) {
    glowCardWrapper.value.addEventListener('pointermove', syncPointer)
    glowCardWrapper.value.addEventListener('pointerleave', leaveWrapper)
  }
}

watch(
  () => hue,
  () => {
    nextTick(() => {
      glowCardWrapper.value?.style.setProperty('--hue', hue.toString())
    })
  },
  {
    deep: true,
    immediate: true
  }
)
watch(
  () => size,
  () => {
    nextTick(() => {
      glowCardWrapper.value?.style.setProperty('--size', size.toString())
    })
  },
  {
    deep: true,
    immediate: true
  }
)
watch(
  () => border,
  () => {
    nextTick(() => {
      glowCardWrapper.value?.style.setProperty('--border', border.toString())
    })
  },
  {
    deep: true,
    immediate: true
  }
)
watch(
  () => radius,
  () => {
    nextTick(() => {
      glowCardWrapper.value?.style.setProperty('--radius', radius.toString())
    })
  },
  {
    deep: true,
    immediate: true
  }
)

onMounted(() => {
  initialVariables()
})
</script>

<style scoped>
.sui-glow-card-wrapper {
  --backdrop: hsl(0 0% 60% / 0.12);
  --radius: 12;
  --border: 2;
  --backup-border: var(--backdrop);
  --size: 200;
  --hue: 120;
}
</style>

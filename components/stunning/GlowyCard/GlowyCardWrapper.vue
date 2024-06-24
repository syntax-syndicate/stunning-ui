<template>
  <main
    class="sui-glow-card-wrapper"
    ref="glowCardWrapper"
    :style="wrapperStyle"
  >
    <slot />
  </main>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    hue: number
    size: number
    border: number
    radius: number
  }>(),
  {
    hue: 120,
    size: 200,
    border: 2,
    radius: 10
  }
)

const { hue, size, border, radius } = toRefs(props)

const glowCardWrapper = ref<HTMLElement | null>(null)

const wrapperStyle = computed(() => {
  return {
    '--hue': hue.value.toString(),
    '--size': size.value.toString(),
    '--border': border.value.toString(),
    '--radius': radius.value.toString()
  }
})

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

onMounted(initialVariables)
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

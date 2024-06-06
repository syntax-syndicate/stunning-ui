<template>
  <div
    class="light-bar relative flex min-h-screen flex-col items-center justify-center bg-black overflow-hidden z-0"
  >
    <div
      class="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0"
    >
      <div
        class="absolute inset-auto right-1/2 h-56 bg-gradient-conic from-emerald-500 via-black to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        :style="leftStyle"
        v-motion
        :initial="{ width: '320px' }"
        :enter="{ width: '480px' }"
        :duration="1600"
      />
      <div
        class="absolute inset-auto left-1/2 h-56 bg-gradient-conic from-transparent via-black to-emerald-500 text-white [--conic-position:from_290deg_at_center_top]"
        :style="rightStyle"
        v-motion
        :initial="{ width: '320px' }"
        :enter="{ width: '480px' }"
        :duration="1600"
      />
      <div
        class="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"
      />
      <div
        class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"
      />
      <div
        class="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full opacity-50 blur-3xl bg-[var(--sui-light-bar-bg)]"
        :style="topStyle"
      />
      <div
        class="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full blur-2xl"
        :style="bottomStyle"
      />
      <div
        class="absolute inset-auto z-50 h-0.5 -translate-y-[7rem] blur-sm"
        :style="bottomStyle"
        :initial="{ width: '320px' }"
        :enter="{ width: '480px' }"
        :duration="1600"
      />

      <div
        class="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { formatThemeColors, type ColorType } from '~/lib/tailwind-theme'

const props = withDefaults(defineProps<{ theme?: ColorType }>(), {
  theme: 'emerald'
})

const { theme } = toRefs(props)

const topStyle = computed(() => {
  return {
    backgroundColor: formatThemeColors(theme.value)['500']
  }
})
const bottomStyle = computed(() => {
  return {
    backgroundColor: formatThemeColors(theme.value)['400']
  }
})
const leftStyle = computed(() => {
  return {
    '--tw-gradient-from': `${
      formatThemeColors(theme.value)['500']
    } var(--tw-gradient-from-position)`
  }
})
const rightStyle = computed(() => {
  return {
    '--tw-gradient-to': `${
      formatThemeColors(theme.value)['500']
    } var(--tw-gradient-to-position)`
  }
})
</script>

<style scoped></style>

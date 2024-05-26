<template>
  <div
    v-bind="props"
    :class="[
      'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
      { 'flex-row': !vertical, 'flex-col': vertical }
    ]"
  >
    <div
      v-for="i in repeat"
      :key="i"
      :class="[
        'flex shrink-0 justify-around [gap:var(--gap)]',
        {
          'animate-marquee flex-row': !vertical,
          'animate-marquee-vertical flex-col': vertical,
          'group-hover:[animation-play-state:paused]': pauseOnHover,
          '![animation-direction:reverse]': reverse
        }
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  reverse: {
    type: Boolean,
    default: false
  },
  pauseOnHover: {
    type: Boolean,
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  },
  repeat: {
    type: Number,
    default: 1
  }
})
</script>

<style scoped></style>

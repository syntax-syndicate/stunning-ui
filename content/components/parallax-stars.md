---
navigation.title: Parallax Stars
title: Parallax Stars
description: A rising star shines especially bright in the night.
category: background, hero
---

## Preview

<Playground url="/playground/parallax-stars"></Playground>

## Installation

### Prerequisites

This component can be used as a background, letting stars fill your page.

### Copy the source code

Setup the grid pattern background, background size `60px`

`/components/stunning/ParallaxStars.vue`

<CollapseCodeWrapper>

```vue
<template>
  <div
    class="parallax-stars absolute inset-0 overflow-hidden w-screen h-[45vh] bg-gradient-to-b from-20% to-80%"
  >
    <div
      class="parallax-stars__small animate-raiseup [animation-duration:333s] w-px h-px bg-transparent after:content-[''] after:absolute after:top-[2048px] after:w-px after:h-px after:bg-transparent"
      :style="`box-shadow: ${smallStars.join(',')}`"
    />
    <div
      class="parallax-stars__medium animate-raiseup [animation-duration:666s] w-[2px] h-[2px] bg-transparent after:content-[''] after:absolute after:top-[2048px] after:w-[2px] after:h-[2px] after:bg-transparent"
      :style="`box-shadow: ${mediumStars.join(',')}`"
    />
    <div
      class="parallax-stars__large animate-raiseup [animation-duration:999s] w-[3px] h-[3px] bg-transparent after:content-[''] after:absolute after:top-[2048px] after:w-[3px] after:h-[3px] after:bg-transparent"
      :style="`box-shadow: ${largeStars.join(',')}`"
    />
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{ size?: number; width?: number; height?: number }>(),
  {
    size: 1024,
    width: 3840,
    height: 3840
  }
)

const { size, width, height } = toRefs(props)

const random = (max: number) => Math.floor(Math.random() * max)

const smallStars = computed(() => {
  return Array.from({ length: size.value }, () => {
    return `${random(width.value)}px ${random(height.value)}px #FFF, ${random(
      width.value
    )}px ${random(height.value)}px #FFF`
  })
})

const mediumStars = Array.from({ length: size.value / 2 }, () => {
  return `${random(width.value)}px ${random(height.value)}px #FFF, ${random(
    width.value
  )}px ${random(height.value)}px #FFF`
})

const largeStars = Array.from({ length: size.value / 4 }, () => {
  return `${random(width.value)}px ${random(height.value)}px #FFF, ${random(
    width.value
  )}px ${random(height.value)}px #FFF`
})
</script>

<style scoped></style>
```

</CollapseCodeWrapper>

## Usage

```vue
<template>
  <main class="w-screen h-screen bg-neutral-900">
    <ParallaxStars class="from-neutral-950 to-neutral-900" />
  </main>
</template>

<script lang="ts" setup>
import ParallaxStars from '@/components/stunning/ParallaxStars.vue'
</script>

<style scoped></style>
```

## Props

| Prop   | Type   | Description                            | Default  |
| :----- | :----- | :------------------------------------- | :------- |
| size   | number | the numbers of the stars               | 1024     |
| height | number | the height of the night sky background | 3840(4k) |
| width  | number | the width of the night sky background  | 3840(4k) |

## Inspiration

- [https://xlbd.me/](https://xlbd.me/)

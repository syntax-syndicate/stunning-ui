---
navigation.title: Rising Stars
title: Rising Stars
description: A rising star shines brightly at night, serving as an excellent background, with stars filling your page.
category: background, hero
---

::code-group

::div{label="Preview"}
<Playground url="/playground/rising-stars"></Playground>
::

```vue [Code]
<template>
  <main class="w-screen h-screen bg-neutral-900">
    <div class="absolute flex h-full w-full items-center justify-center">
      <p
        className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-primary-foreground dark:text-white"
      >
        Rising Stars
      </p>
    </div>
    <RisingStars class="from-neutral-950 to-neutral-900" />
  </main>
</template>

<script lang="ts" setup>
import RisingStars from '@/components/stunning/RisingStars.vue'
</script>

<style scoped></style>
```

::

## Installation

::MSteps

### Prerequisites

This component requires animation to be added in the `tailwind.config.ts` file for Tailwind CSS.

```ts
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      keyframes: {
        risingstar: {
          from: {
            transform: 'translateY(0px)'
          },
          to: {
            transform: 'translateY(-3840px)'
          }
        }
      },
      animation: {
        risingstar: 'risingstar 1000s linear infinite'
      }
    }
  }
}
```

### Copy the source code

`/components/stunning/RisingStars.vue`

::CodeCollapse

```vue
<template>
  <div
    class="rising-stars absolute inset-0 overflow-hidden w-screen h-[45vh] bg-gradient-to-b from-20% to-80%"
  >
    <div
      class="rising-stars__small animate-risingstar [animation-duration:333s] w-px h-px bg-transparent after:content-[''] after:absolute after:top-[2048px] after:w-px after:h-px after:bg-transparent"
      :style="`box-shadow: ${smallStars.join(',')}`"
    />
    <div
      class="rising-stars__medium animate-risingstar [animation-duration:666s] w-[2px] h-[2px] bg-transparent after:content-[''] after:absolute after:top-[2048px] after:w-[2px] after:h-[2px] after:bg-transparent"
      :style="`box-shadow: ${mediumStars.join(',')}`"
    />
    <div
      class="rising-stars__large animate-risingstar [animation-duration:999s] w-[3px] h-[3px] bg-transparent after:content-[''] after:absolute after:top-[2048px] after:w-[3px] after:h-[3px] after:bg-transparent"
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

::

::

## Props

| Prop   | Type   | Description                            | Default  |
| :----- | :----- | :------------------------------------- | :------- |
| size   | number | the numbers of the stars               | 1024     |
| height | number | the height of the night sky background | 3840(4k) |
| width  | number | the width of the night sky background  | 3840(4k) |

## Inspiration

- [https://xlbd.me/](https://xlbd.me/)

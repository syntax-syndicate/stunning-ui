---
navigation.title: Shimmer Text
title: Shimmer Text
description: A light glare effect which pans across text making it appear as if it is shimmering.
category: text, callout
---

::code-group

::div{label="Preview"}
<Playground url="/playground/shimmer-text"></Playground>
::

```vue [Code]
<template>
  <main class="w-full h-full flex flex-col justify-center items-center px-8">
    <div
      class="group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
    >
      <ShimmerText
        class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
      >
        ✨ Stunning UI Version 1.0
        <ri:arrow-right-line
          class="w-4 h-4 ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
        />
      </ShimmerText>
    </div>
  </main>
</template>

<script lang="ts" setup>
import ShimmerText from '@/components/stunning/ShimmerText.vue'
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
        shimmer: {
          '0%, 90%, 100%': {
            'background-position': 'calc(-100% - var(--shimmer-width)) 0'
          },
          '30%, 60%': {
            'background-position': 'calc(100% + var(--shimmer-width)) 0'
          }
        }
      },
      animation: {
        shimmer: 'shimmer 8s infinite'
      }
    }
  }
}
```

### Copy the source code

`/components/stunning/ShimmerText.vue`

::CodeCollapse

```vue
<template>
  <p
    :style="{
      '--shimmer-width': `${shimmerWidth}px`
    }"
    :class="
      cn(
        'mx-auto max-w-md text-neutral-600/50 dark:text-neutral-400/50 ',

        // Shimmer effect
        'animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]',

        // Shimmer gradient
        'bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80'
      )
    "
  >
    <slot />
  </p>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

withDefaults(
  defineProps<{
    shimmerWidth: number
  }>(),
  {
    shimmerWidth: 100
  }
)
</script>

<style scoped></style>
```

::

::

## Props

| Prop         | Type      | Description                         | Default |
| :----------- | :-------- | :---------------------------------- | :------ |
| children     | Component | the text to do the animation for    | ""      |
| shimmerWidth | number    | The width of the shimmer in pixels. | 100     |

## Inspiration

-

---
navigation.title: Progressive Gradient Border
title: Progressive Gradient Border
description: The glowing card effect is typically used to highlight feature cards when they are hovered over.
category: cards, hover, features
---

::code-group

::div{label="Preview"}
<Playground url="/playground/progressive-gradient-border"></Playground>
::

```vue [Code]
<template>
  <NuxtLayout name="playground">
    <main class="w-full flex flex-col justify-center items-center h-full px-8">
      <div class="grid grid-cols-12 gap-4">
        <ProgressiveGradientBorder class="col-span-8">
          <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
            <ri:magic-line class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-secondary-foreground">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </ProgressiveGradientBorder>
        <ProgressiveGradientBorder class="col-span-4">
          <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
            <ri:stack-line class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-secondary-foreground">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </ProgressiveGradientBorder>

        <ProgressiveGradientBorder
          class="col-span-4"
          :style="{
            '--sui-gb-from-color': '#5f00ff',
            '--sui-gb-via-color': '#8250df',
            '--sui-gb-to-color': '#f4e162'
          }"
        >
          <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
            <ri:cake-2-line class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-secondary-foreground">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </ProgressiveGradientBorder>
        <ProgressiveGradientBorder
          class="col-span-8"
          :style="{
            '--sui-gb-from-color': '#4fa',
            '--sui-gb-via-color': '#4af',
            '--sui-gb-to-color': '#f4a'
          }"
        >
          <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
            <ri:vip-crown-line class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-secondary-foreground">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </ProgressiveGradientBorder>
      </div>
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import ProgressiveGradientBorder from '~/components/stunning/ProgressiveGradientBorder.vue'
import { paragraphPlaceholder } from '~/lib/constants'
</script>

<style scoped></style>
```

::

## Installation

::MSteps

### Prerequisites

This component is a wrapper of card.

### Copy the source code

`/components/stunning/ProgressiveGradientBorder.vue`

::CodeCollapse

```vue
// /components/stunning/ProgressiveGradientBorder.vue
<template>
  <div :class="className">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { cn } from '@/lib/utils'

const className = cn(
  'sui-gradient-border',
  'w-full rounded-lg relative backdrop-blur-md',
  'before:absolute before:left-0 before:top-0 before:h-full before:w-full before:z-[-1] before:p-0.5 before:rounded-lg',
  'before:[background-size:400%_auto] before:[background-position:0_0] before:content-[""]',
  'hover:before:opacity-100 hover:before:[background-position:-50%_0]'
)
</script>

<style scoped>
.sui-gradient-border {
  --sui-gb-bg-color-light: #e2e2e2;
  --sui-gb-bg-color-dark: #303030;
  --sui-gb-from-color: #00dc82;
  --sui-gb-via-color: #36e4da;
  --sui-gb-to-color: #0047e1;
}

.light {
  .sui-gradient-border {
    background-color: rgba(255, 255, 255, 0.3);
  }
  .sui-gradient-border:hover:before {
    background: linear-gradient(
      90deg,
      var(--sui-gb-bg-color-light) 0%,
      var(--sui-gb-bg-color-light) 25%,
      var(--sui-gb-from-color) 50%,
      var(--sui-gb-via-color) 75%,
      var(--sui-gb-to-color) 100%
    );
    background-size: 400% auto;
  }
  .sui-gradient-border:hover:before {
    opacity: 1;
    background-position: -50% 0;
  }
}
.dark {
  .sui-gradient-border {
    background-color: rgba(20, 20, 20, 0.3);
  }
  .sui-gradient-border::before {
    background: linear-gradient(
      90deg,
      var(--sui-gb-bg-color-dark) 0%,
      var(--sui-gb-bg-color-dark) 25%,
      var(--sui-gb-from-color) 50%,
      var(--sui-gb-via-color) 75%,
      var(--sui-gb-to-color) 100%
    );
    background-size: 400% auto;
  }
  .sui-gradient-border:hover:before {
    opacity: 1;
    background-position: -50% 0;
  }
}

.sui-gradient-border::before {
  transition: background-position 0.3s ease-in-out, opacity 0.2s ease-in-out;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
</style>
```

::

::

## Usage

### Default Card

```vue
<template>
  <ProgressiveGradientBorder>
    <div class="rounded p-4 flex flex-col gap-2">
      <ri:magic-line class="w-8 h-8" />

      <h1 class="font-medium text-2xl">Hover me</h1>

      <p class="line-clamp-5 text-secondary-foreground">
        {{ paragraphPlaceholder }}
      </p>
    </div>
  </ProgressiveGradientBorder>
</template>
```

### Custom Card Gradient Color

```vue
<template>
  <ProgressiveGradientBorder
    :style="{
      '--sui-gb-from-color': '#5f00ff',
      '--sui-gb-via-color': '#8250df',
      '--sui-gb-to-color': '#f4e162'
    }"
  >
    <div class="rounded p-4 flex flex-col gap-2">
      <ri:cake-2-line class="w-8 h-8" />

      <h1 class="font-medium text-2xl">Hover me</h1>

      <p class="line-clamp-5 text-secondary-foreground">
        {{ paragraphPlaceholder }}
      </p>
    </div>
  </ProgressiveGradientBorder>
</template>
```

## Props

customize the color using CSS Variables

| Prop                    | Type      | Description                         | Default |
| :---------------------- | :-------- | :---------------------------------- | :------ |
| --sui-gb-bg-color-light | HEX Color | the light gradient background color | #e2e2e2 |
| --sui-gb-bg-color-dark  | HEX Color | the dark gradient background color  | #303030 |
| --sui-gb-from-color     | HEX Color | the dark gradient from stop color   | #00dc82 |
| --sui-gb-via-color      | HEX Color | the dark gradient via stop color    | #36e4da |
| --sui-gb-to-color       | HEX Color | the dark gradient to stop color     | #0047e1 |

## Inspiration

-

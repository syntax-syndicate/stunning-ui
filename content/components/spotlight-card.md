---
navigation.title: Spotlight Card
title: Spotlight Card
description: A spotlight effect that follows the cursor and guides users' attention.
category: card, feature, overview, hover
---

::code-group

::div{label="Preview"}
<Playground url="/playground/spotlight-card"></Playground>
::

```vue [Code]
<template>
  <SpotlightCard>
    <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
      <Icon name="ri:vip-crown-line" class="w-8 h-8" />

      <h1 class="font-medium text-2xl">Hover me</h1>

      <p class="line-clamp-4 text-neon-p">
        {{ paragraphPlaceholder }}
      </p>
    </div>
  <SpotlightCard>
</template>
```

::

## Installation

::MSteps

### Copy the source code

::CodeCollapse

```vue [Code]
<template>
  <div
    class="rounded-3xl border border-neutral-950/10 dark:border-white/10 bg-white/[.012] p-2"
    ref="spotlightCardRef"
  >
    <div
      :style="{
        '--x': `${x}px`,
        '--y': `${y}px`,
        '--spotlight-color-stops': `${color}, transparent`,
        '--spotlight-size': `${size}px`
      }"
      class="spotlight-card before:content-[''] before:h-full before:w-full before:absolute before:top-0 before:left-0 relative transform-gpu overflow-hidden rounded-2xl border border-neutral-950/10 dark:border-white/10 bg-neutral-950/[.012] dark:bg-white/5 shadow-sm dark:shadow-md shadow-neutral-50/50 dark:shadow-neutral-950/50"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { UseMouseEventExtractor } from '@vueuse/core'
import { useMouse } from '@vueuse/core'

withDefaults(
  defineProps<{
    color: string
    size?: number
  }>(),
  {
    color: 'rgba(255, 255, 255, 0.1)',
    size: 300
  }
)

const spotlightCardRef = ref<HTMLElement | null>(null)
// const parentEl = useParentElement()
const extractor: UseMouseEventExtractor = (event) =>
  event instanceof Touch ? null : [event.offsetX, event.offsetY]
const { x, y } = useMouse({ target: spotlightCardRef, type: extractor })
</script>

<style scoped>
.spotlight-card:before {
  opacity: 0;
  transition: opacity 0.3s;
  background-image: radial-gradient(
    var(--spotlight-size) circle at var(--x) var(--y),
    var(--spotlight-color-stops)
  );
}
.spotlight-card:hover:before {
  opacity: 1;
  transition: opacity 0.3s;
}
</style>
```

::

::

## Props

| Prop  | Type   | Description                    | Default                  |
| :---- | :----- | :----------------------------- | :----------------------- |
| color | string | The linear color stops's color | rgba(255, 255, 255, 0.1) |
| size  | number | The Spotlight circle size      | 300                      |

## Inspiration

-

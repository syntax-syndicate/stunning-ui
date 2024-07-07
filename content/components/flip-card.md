---
navigation.title: Flip Card
title: Flip Card
description: A dynamic flip card with smooth 180-degree animations along both the X and Y axes.
category: card, bento
---

::code-group

::div{label="Preview"}
<Playground url="/playground/flip-card"></Playground>
::

```vue [Code]
<template>
  <main class="w-screen h-screen flex justify-center items-center bg-dots">
    <FlipCard class="w-96 h-72 rounded-lg">
      <template #front>
        <div
          class="h-full p-4 gap-2 flex flex-col rounded-lg bg-neutral-100/80 dark:bg-neutral-800 border border-white/10 text-foreground"
        >
          <div
            class="ring-1 ring-inset ring-neutral-900/10 dark:ring-white/10 rounded-[8px] p-3"
          >
            <div
              class="aspect-video rounded-[8px] relative overflow-hidden border border-dashed border-neutral-900/10 dark:border-white/10"
            >
              <ImagePlaceholder />
            </div>
          </div>
          <h1 class="font-medium text-xl mt-2">Hover me</h1>
        </div>
      </template>
      <template #back>
        <div
          class="h-full p-4 flex flex-col gap-2 rounded-lg bg-neutral-100/80 dark:bg-neutral-800 border border-white/10 text-foreground"
        >
          <Icon name="ri:vip-crown-line" class="w-8 h-8" />

          <h1 class="font-medium text-2xl">Hover me</h1>

          <p class="text-neon-wb">
            {{ paragraphPlaceholder }}
          </p>
        </div>
      </template>
    </FlipCard>
  </main>
</template>

<script lang="ts" setup>
import FlipCard from '~/components/stunning/FlipCard.vue'

import { paragraphPlaceholder } from '~/lib/constants'
</script>

<style scoped></style>
```

::

## Installation

::MSteps

### Copy the source code

`/components/stunning/FlipCard.vue`

::CodeCollapse

```vue [Code]
<template>
  <div :class="cn('group [perspective:1000px]')">
    <div
      :class="
        cn(
          'relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]',
          direction === 'vertical'
            ? 'group-hover:[transform:rotateX(180deg)]'
            : 'group-hover:[transform:rotateY(180deg)]'
        )
      "
    >
      <!-- {/* Front Card */} -->
      <div class="absolute h-full w-full [backface-visibility:hidden]">
        <slot name="front" />
      </div>

      <!-- {/* Back Card */} -->
      <div
        :class="
          cn(
            'absolute h-full w-full [backface-visibility:hidden]',
            direction === 'vertical'
              ? '[transform:rotateX(180deg)]'
              : '[transform:rotateY(180deg)]'
          )
        "
      >
        <slot name="back" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

interface FlipCardProps {
  direction?: 'vertical' | 'horizontal'
}

withDefaults(defineProps<FlipCardProps>(), {
  direction: 'vertical'
})
</script>

<style scoped></style>
```

::

::

## Examples

### Horizontal

::code-group

::div{label="Preview"}
<Playground url="/playground/flip-card/HorizontalCard"></Playground>
::

```vue [Code]
<template>
  <main class="w-screen h-screen flex justify-center items-center bg-dots">
    <FlipCard class="w-96 h-72 rounded-lg" direction="horizontal">
      <template #front>
        <div
          class="h-full p-4 gap-2 flex flex-col rounded-lg bg-neutral-100/80 dark:bg-neutral-800 border border-white/10 text-foreground"
        >
          <div
            class="ring-1 ring-inset ring-neutral-900/10 dark:ring-white/10 rounded-[8px] p-3"
          >
            <div
              class="aspect-video rounded-[8px] relative overflow-hidden border border-dashed border-neutral-900/10 dark:border-white/10"
            >
              <ImagePlaceholder />
            </div>
          </div>
          <h1 class="font-medium text-xl mt-2">Hover me</h1>
        </div>
      </template>
      <template #back>
        <div
          class="h-full p-4 flex flex-col gap-2 rounded-lg bg-neutral-100/80 dark:bg-neutral-800 border border-white/10 text-foreground"
        >
          <Icon name="ri:vip-crown-line" class="w-8 h-8" />

          <h1 class="font-medium text-2xl">Hover me</h1>

          <p class="text-neon-wb">
            {{ paragraphPlaceholder }}
          </p>
        </div>
      </template>
    </FlipCard>
  </main>
</template>

<script lang="ts" setup>
import FlipCard from '~/components/stunning/FlipCard.vue'

import { paragraphPlaceholder } from '~/lib/constants'
</script>

<style scoped></style>
```

::

## Props

| Prop      | Type   | Description                                                 | Default    |
| :-------- | :----- | :---------------------------------------------------------- | :--------- |
| direction | string | the direction of the animations, 'vertical' or 'horizontol' | 'vertical' |

## Inspiration

- [https://diagram.com](https://diagram.com)

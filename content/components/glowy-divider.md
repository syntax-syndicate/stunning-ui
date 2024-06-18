---
navigation.title: Glowy Divider
title: Glowy Divider
description: Used for dividing sections on a page
category: wireframe, line, divider
---

::code-group

::div{label="Preview"}
<Playground url="/playground/glowy-divider"></Playground>
::

```vue [Code]
<template>
  <main class="w-full h-full pt-32 pb-64">
    <div class="flex flex-col md:items-center">
      <span class="font-mono text-sm tracking-tight text-neon">
        How it works
      </span>
      <h2
        class="mt-4 text-left font-display text-2xl font-light leading-[1.125] text-muted-foreground md:text-center md:text-4xl lg:text-5xl"
      >
        Your pathway to <br />
        <span class="text-foreground">Business Success</span>
      </h2>
      <p
        class="mx-auto mt-4 text-left leading-relaxed text-muted-foreground md:max-w-2xl md:text-center lg:mt-8"
      >
        Stunning UI is a platform that helps you build your business.
      </p>
    </div>

    <GlowyDivider direction="top" class="lg:px-24" />

    <div class="flex flex-col md:items-center">
      <span class="font-mono text-sm tracking-tight text-neon">
        What others say
      </span>
      <h2
        class="mt-4 text-left font-display text-2xl font-light leading-[1.125] text-muted-foreground md:text-center md:text-4xl lg:text-5xl"
      >
        Trusted by the experts, <br />
        <span class="text-foreground">used by the leaders</span>
      </h2>
      <p
        class="mx-auto mt-4 text-left leading-relaxed text-muted-foreground md:max-w-2xl md:text-center lg:mt-8"
      >
        Don't just take our word for it. Read what others say about Stunning UI.
      </p>
    </div>

    <GlowyDivider direction="bottom" class="lg:px-24" />

    <div
      class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background"
    >
      <Marquee pauseOnHover :repeat="4" class="[--duration:20s]">
        <template v-for="item in firstRow">
          <figure
            class="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
          >
            <div class="flex flex-row items-center gap-2">
              <img
                class="rounded-full"
                width="32"
                height="32"
                alt=""
                :src="item.img"
              />
              <div class="flex flex-col">
                <figcaption class="text-sm font-medium dark:text-white">
                  {{ item.name }}
                </figcaption>
                <p class="text-xs font-medium dark:text-white/40">
                  {{ item.username }}
                </p>
              </div>
            </div>
            <blockquote class="mt-2 text-sm">{{ item.body }}</blockquote>
          </figure>
        </template>
      </Marquee>
      <Marquee reverse pauseOnHover :repeat="4" class="[--duration:20s]">
        <template v-for="item in secondRow">
          <figure
            class="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
          >
            <div class="flex flex-row items-center gap-2">
              <img
                class="rounded-full"
                width="32"
                height="32"
                alt=""
                :src="item.img"
              />
              <div class="flex flex-col">
                <figcaption class="text-sm font-medium dark:text-white">
                  {{ item.name }}
                </figcaption>
                <p class="text-xs font-medium dark:text-white/40">
                  {{ item.username }}
                </p>
              </div>
            </div>
            <blockquote class="mt-2 text-sm">{{ item.body }}</blockquote>
          </figure>
        </template>
      </Marquee>
      <div
        class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
      ></div>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
      ></div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import GlowyDivider from '@/components/stunning/GlowyDivider.vue'

import Marquee from '@/components/stunning/Marquee.vue'
import { reviews } from '~/lib/constants'

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)
</script>

<style scoped></style>
```

::

## Installation

::MSteps

### Copy the source code

`/components/stunning/GlowyDivider.vue`

::CodeCollapse

```vue
<template>
  <div class="relative py-32 w-full">
    <div
      class="absolute left-0 h-full w-full"
      :class="
        cn(
          direction === 'bottom'
            ? 'top-1/2 dark:bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.neutral[950]/5%),transparent)]'
            : '-top-1/2 dark:bg-[radial-gradient(35%_128px_at_50%_100%,theme(backgroundColor.white/8%),transparent)] bg-[radial-gradient(35%_128px_at_50%_100%,theme(backgroundColor.neutral[950]/5%),transparent)]'
        )
      "
    ></div>
    <!-- the line -->
    <div
      class="absolute inset-x-12 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent dark:via-white/30 via-neutral-950/30 to-transparent"
    />
    <div
      class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-950 p-1.5"
      v-if="showBuckle"
    >
      <div class="h-1.5 w-8 rounded-lg bg-neutral-950/90 dark:bg-white"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

withDefaults(
  defineProps<{
    showBuckle?: boolean
    direction?: 'top' | 'bottom'
  }>(),
  {
    showBuckle: false,
    direction: 'bottom'
  }
)
</script>

<style scoped></style>
```

::

::

## Props

| Prop       | Type              | Description                                   | Default |
| :--------- | :---------------- | :-------------------------------------------- | :------ |
| showBuckle | Boolean           | Whether show the buckle in the middle of line | false   |
| direction  | `top` \| `bottom` | the direction of the glowy light              | bottom  |

## Inspiration

-

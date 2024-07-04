---
navigation.title: Skewed Marquee
title: Skewed Marquee
description: Infinite Marquee in 3D view, no repeated elements.
category: bento grid, card
---

::code-group

::div{label="Preview"}
<Playground url="/playground/skewed-marquee"></Playground>
::

```vue [Code]
<template>
  <div
    class="relative flex h-full w-full overflow-hidden rounded-lg bg-background md:dark:shadow-xl"
  >
    <SkewedMarquee>
      <template #content>
        <div class="grid grid-cols-1 gap-2">
          <Marquee pauseOnHover :repeat="4" class="[--duration:10s]">
            <template v-for="item in firstRow">
              <figure
                class="relative w-full cursor-pointer overflow-hidden rounded-xl border p-4 border-neutral-950/[.1] bg-neutral-950/[.01] hover:bg-neutral-950/[.05] dark:border-neutral-50/[.1] dark:bg-neutral-50/[.10] dark:hover:bg-neutral-50/[.15] transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
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
          <Marquee reverse pauseOnHover :repeat="4" class="[--duration:10s]">
            <template v-for="item in secondRow">
              <figure
                class="relative w-full cursor-pointer overflow-hidden rounded-xl border p-4 border-neutral-950/[.1] bg-neutral-950/[.01] hover:bg-neutral-950/[.05] dark:border-neutral-50/[.1] dark:bg-neutral-50/[.10] dark:hover:bg-neutral-50/[.15] transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
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
          <Marquee pauseOnHover :repeat="4" class="[--duration:10s]">
            <template v-for="item in firstRow">
              <figure
                class="relative w-full cursor-pointer overflow-hidden rounded-xl border p-4 border-neutral-950/[.1] bg-neutral-950/[.01] hover:bg-neutral-950/[.05] dark:border-neutral-50/[.1] dark:bg-neutral-50/[.10] dark:hover:bg-neutral-50/[.15] transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
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
        </div>
      </template>
    </SkewedMarquee>
  </div>
</template>

<script lang="ts" setup>
import SkewedMarquee from '@/components/stunning/SkewedMarquee.vue'
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

### Prerequisites

This skewed marquee component consists of two components:

- [SkewedWrapper] - Allow the content to be skewed.
- [Marquee](/components/marquee) - Allow the content to scroll infinitely.

### Copy the source code, `SkewedWrapper`

`/components/stunning/SkewedWrapper.vue`

::CodeCollapse

```vue [Code]
<template>
  <div
    class="[--rotate:1] relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background"
  >
    <div
      class="skewed-view-wrapper w-full [container-type:inline-size] [transform-style:preserve-3d]"
    >
      <div
        class="skewed-view [transform-style:preserve-3d] h-full w-full transform-gpu"
      >
        <slot name="content" />
      </div>
    </div>

    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white dark:from-background"
    />
    <div
      class="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-background"
    />
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white dark:from-background"
    />
    <div
      class="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-background"
    />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.skewed-view {
  /*	3D translation */
  transform: rotateX(calc(var(--rotate, 0) * 20deg)) rotateZ(
      calc(var(--rotate, 0) * -20deg)
    )
    skewX(calc(var(--rotate, 0) * 20deg));
}
</style>
```

::

### Copy the source code, `Marquee`

learn how to install [Marquee](/components/marquee) component

::

## Examples

### Vertical

::code-group

::div{label="Preview"}
<Playground url="/playground/skewed-marquee/WithVertical"></Playground>
::

```vue [Code]
<template>
  <NuxtLayout name="playground">
    <div
      class="relative flex h-full w-full overflow-hidden rounded-lg bg-background md:dark:shadow-xl"
    >
      <StunningSkewedMarquee>
        <template #content>
          <div class="grid grid-cols-2 gap-2 p-20">
            <Marquee vertical pauseOnHover :repeat="4" class="[--duration:10s]">
              <template v-for="item in firstRow">
                <figure
                  class="relative w-full cursor-pointer overflow-hidden rounded-xl border p-4 border-neutral-950/[.1] bg-neutral-950/[.01] hover:bg-neutral-950/[.05] dark:border-neutral-50/[.1] dark:bg-neutral-50/[.10] dark:hover:bg-neutral-50/[.15] transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
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
            <Marquee
              reverse
              vertical
              pauseOnHover
              :repeat="4"
              class="[--duration:10s]"
            >
              <template v-for="item in secondRow">
                <figure
                  class="relative w-full cursor-pointer overflow-hidden rounded-xl border p-4 border-neutral-950/[.1] bg-neutral-950/[.01] hover:bg-neutral-950/[.05] dark:border-neutral-50/[.1] dark:bg-neutral-50/[.10] dark:hover:bg-neutral-50/[.15] transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
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
          </div>
        </template>
      </StunningSkewedMarquee>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import Marquee from '@/components/stunning/Marquee.vue'
import { reviews } from '~/lib/constants'

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)
</script>

<style scoped></style>
```

::

## Props

### SkewedWrapper

| Prop       | Type   | Description                                       | Default |
| :--------- | :----- | :------------------------------------------------ | :------ |
| `--rotate` | Number | CSS Variable, control the angle of skewed element | 1       |

### Marquee

learn the props of [Marquee](/components/marquee#props) props

## Inspiration

- [https://codepen.io/jh3y/pen/RwdPvvz](https://codepen.io/jh3y/pen/RwdPvvz)

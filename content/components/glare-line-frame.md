---
navigation.title: Glare Line Frame
title: Glare Line Frame
description: The double top border effect makes your card stand out.
category: card, features
---

::code-group

::div{label="Preview"}
<Playground url="/playground/glare-line-frame"></Playground>
::

```vue [Code]
<template>
  <main
    class="w-screen h-screen flex items-center justify-center bg-neutral-950"
  >
    <GlareLineFrame>
      <div
        class="relative z-10 flex w-full cursor-pointer flex-col items-start gap-8"
      >
        <div class="group flex w-full flex-col">
          <div class="flex w-full justify-between">
            <div class="font-semibold sm:text-base md:text-lg lg:text-2xl">
              Stunning UI
            </div>
            <div
              class="transition-all ease-in-out will-change-auto group-hover:translate-x-1"
            >
              <Icon name="ri:arrow-right-line" class="h-6 w-6" />
            </div>
          </div>
          <div class="text-neutral-100/80 sm:text-xs md:text-sm lg:text-base">
            Create Stunning Websites That Stand Out
          </div>
        </div>
        <div
          class="w-full h-full flex-1 bg-white/5 ring-1 ring-inset ring-white/10 rounded-[8px] p-3 transition-all ease-linear group-hover:-translate-y-4"
        >
          <div
            class="aspect-video rounded-md relative overflow-hidden border border-dashed border-white/10"
          >
            <svg
              class="absolute inset-0 h-full w-full stroke-white/10"
              fill="none"
            >
              <defs>
                <pattern
                  id="pattern-image-placeholder"
                  x="0"
                  y="0"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
                </pattern>
              </defs>
              <rect
                stroke="none"
                fill="url(#pattern-image-placeholder)"
                width="100%"
                height="100%"
              ></rect>
            </svg>
          </div>
        </div>
      </div>
    </GlareLineFrame>
  </main>
</template>

<script lang="ts" setup>
import GlareLineFrame from '@/components/stunning/GlareLineFrame.vue'
</script>

<style scoped></style>
```

::

## Installation

::MSteps

### Copy the source code

`/components/stunning/GlareLineFrame.vue`

::CodeCollapse

```vue [Code]
<template>
  <template>
    <div
      class="group relative flex min-h-screen flex-col justify-center overflow-hidden bg-neutral-950 py-6 text-neutral-50 sm:py-12"
    >
      <div
        class="relative bg-neutral-50/5 p-2 shadow-xl outline outline-1 -outline-offset-1 outline-neutral-50/5 sm:mx-auto sm:rounded-lg lg:rounded-3xl"
      >
        <div
          class="absolute bottom-auto left-0 right-0 top-0 z-10 -mb-[1px] h-[1px] bg-gradient-to-r from-neutral-950 from-5% via-white/60 group-hover:via-white via-50% to-neutral-950 to-95%"
        />
        <div
          class="relative flex overflow-hidden rounded-2xl border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-950 px-8 pt-9 transition-all ease-linear hover:border-neutral-500/80 sm:h-[270px] sm:w-[480px] md:h-[360px] md:w-[640px] lg:h-[450px] lg:w-[800px]"
        >
          <div
            class="bg-gradient-to-r from-neutral-950 from-20% via-white/80 group-hover:via-white via-50% to-neutral-950 to-80% absolute bottom-auto left-0 right-0 top-0 z-10 -mb-[1px] h-[1px]"
          />
          <slot />
          <div
            class="bg-[radial-gradient(circle_at_50%_0,_rgba(128,128,128,_.2),_rgba(0,_0,_0,_0)_80%),_radial-gradient(circle_at_50%_0,_#181818,_rgba(0,_0,_0,_0))] absolute bottom-0 left-0 right-0 top-0 z-0 opacity-0 transition-all ease-linear group-hover:opacity-100"
          />
        </div>
      </div>
    </div>
  </template>

  <script lang="ts" setup></script>

  <style scoped></style>
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

## Inspiration

-

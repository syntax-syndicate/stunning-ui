---
navigation.title: Meteor Grid
title: Meteor Grid
description: The meteor's vertical descent captures the user's attention
category: background, hero, bento grid, card
---

::code-group

::div{label="Preview"}
<Playground url="/playground/meteor-grid"></Playground>
::

```vue [Code]
<template>
  <main class="w-screen h-screen flex items-center justify-center">
    <div class="absolute flex h-full w-full items-center justify-center">
      <p
        className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"
      >
        Meteor Grid
      </p>
    </div>
    <div class="relative w-[961px] h-[481px]">
      <MeteorGrid>
        <Meteor
          class="left-[60px]"
          starClass="from-sky-300/10 via-sky-500 to-sky-900/80 dark:to-sky-200 shadow-sky-500/50 [animation-delay:240ms]"
          bgClass="from-sky-500/60 via-sky-300/10 [animation-delay:240ms]"
        />
        <Meteor
          class="left-[180px]"
          starClass="from-indigo-300/10 via-indigo-500 to-indigo-900/80 dark:to-indigo-200 shadow-indigo-500/50 [animation-delay:740ms]"
          bgClass="from-indigo-500/60 via-indigo-300/10 [animation-delay:740ms]"
        />
        <Meteor
          class="left-[180px]"
          starClass="from-indigo-300/10 via-indigo-500 to-indigo-900/80 dark:to-indigo-200 shadow-indigo-500/50"
          bgClass="from-indigo-500/60 via-indigo-300/10"
        />
        <Meteor
          class="left-[300px]"
          starClass="from-blue-300/10 via-blue-500 to-blue-900/80 dark:to-blue-200 shadow-blue-500/50 [animation-delay:1040ms]"
          bgClass="from-blue-500/60 via-blue-300/10 [animation-delay:1040ms]"
        />
        <Meteor
          class="left-[480px]"
          starClass="from-yellow-300/10 via-yellow-500 to-yellow-900/80 dark:to-yellow-200 shadow-yellow-500/50 [animation-delay:860ms]"
          bgClass="from-yellow-500/60 via-yellow-300/10 [animation-delay:860ms]"
        />
        <Meteor
          class="left-[600px]"
          starClass="from-emerald-300/10 via-emerald-500 to-emerald-900/80 dark:to-emerald-200 shadow-emerald-500/50 [animation-delay:1440ms]"
          bgClass="from-emerald-500/60 via-emerald-300/10 [animation-delay:1440ms]"
        />
        <Meteor
          class="left-[720px]"
          starClass="from-white/10 via-white to-white/80 dark:to-white shadow-white/50 [animation-delay:3000ms]"
          bgClass="from-white/60 via-white/10 [animation-delay:3000ms]"
        />
        <Meteor
          class="left-[900px]"
          starClass="from-violet-300/10 via-violet-500 to-violet-900/80 dark:to-violet-200 shadow-violet-500/50 [animation-delay:2200ms]"
          bgClass="from-violet-500/60 via-violet-300/10 [animation-delay:2200ms]"
        />
      </MeteorGrid>
    </div>
  </main>
</template>

<script lang="ts" setup>
import MeteorGrid from '~/components/stunning/MeteorGrid/MeteorGrid.vue'
import Meteor from '~/components/stunning/MeteorGrid/Meteor.vue'
</script>

<style scoped></style>
```

::

## Installation

::MSteps

### Prerequisites

This component consists of two parts，`MeteorGrid` + `Meteor`

### Copy the source code

Setup the grid pattern background, background size `60px`

`/components/stunning/MeteorGrid.vue`

::CodeCollapse

```vue
<template>
  <div class="absolute h-full w-full transform-gpu overflow-hidden">
    <div
      class="absolute left-0 right-0 top-0 z-0 h-full bg-gradient-to-b from-white dark:from-black via-80% via-white/10 dark:via-neutral-850 to-neutral-800"
    ></div>
    <div
      class="absolute left-10 right-10 top-[-120px] h-[120px] rounded-[50%] shadow-2xl shadow-black dark:shadow-white"
    ></div>
    <div class="absolute left-0 right-0 h-screen overflow-hidden">
      <slot />
    </div>
    <div class="absolute inset-0 z-0 bg-grid bg-[size:60px_60px]"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
```

::

### Copy the source code

You can customize the color, delay, and position of each meteor.

`/components/stunning/Meteor.vue`

::CodeCollapse

```vue
<template>
  <div class="meteor-holder relative -top-[120px]">
    <div :class="starClasses" />
    <div
      class="meteor-bg absolute -left-32 -top-20 z-0 h-48 w-64 transform-gpu animate-falldown rounded-full bg-gradient-radial via-80% to-transparent"
      :class="bgClass"
    />
  </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

const props = withDefaults(
  defineProps<{
    starClass: string
    bgClass: string
  }>(),
  {
    starClass:
      'from-indigo-300/10 via-indigo-500 to-indigo-900/80 dark:to-indigo-200 shadow-indigo-500/50',
    bgClass: 'from-indigo-500/60 via-indigo-300/10'
  }
)

const { starClass, bgClass } = toRefs(props)

const starClasses = computed(() => {
  return cn(
    'meteor absolute z-10 h-[60px] w-[1px] transform-gpu animate-falldown rounded-[2px]',
    'bg-gradient-to-b via-80% dark:via-60% shadow-lg dark:shadow-[-2px_-16px_16px_4px_var(--tw-shadow-color)]',
    starClass.value
  )
})
</script>

<style scoped></style>
```

::

::

## Examples

### Skewed View

With [SkewedWrapper](/components/stunning/SkewedWrapper.vue), you can easily create a skewed meteor grid.

::code-group

::div{label="Preview"}
<Playground url="/playground/meteor-grid/SkewedMeteorGrid"></Playground>
::

```vue [Code]
<template>
  <main class="w-screen h-screen relative flex items-center justify-center">
    <div class="absolute flex h-full w-full items-center justify-center">
      <p
        className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"
      >
        Meteor Grid
      </p>
    </div>
    <SkewedWrapper class="![--rotate:-1]">
      <template #content>
        <div class="relative w-[150vh] h-[150vh]">
          <MeteorGrid>
            <Meteor
              class="left-[60px]"
              starClass="from-sky-300/10 via-sky-500 to-sky-900/80 dark:to-sky-200 shadow-sky-500/50 [animation-delay:240ms]"
              bgClass="from-sky-500/60 via-sky-300/10 [animation-delay:240ms]"
            />
            <Meteor
              class="left-[180px]"
              starClass="from-indigo-300/10 via-indigo-500 to-indigo-900/80 dark:to-indigo-200 shadow-indigo-500/50 [animation-delay:740ms]"
              bgClass="from-indigo-500/60 via-indigo-300/10 [animation-delay:740ms]"
            />
            <Meteor
              class="left-[180px]"
              starClass="from-indigo-300/10 via-indigo-500 to-indigo-900/80 dark:to-indigo-200 shadow-indigo-500/50"
              bgClass="from-indigo-500/60 via-indigo-300/10"
            />
            <Meteor
              class="left-[300px]"
              starClass="from-blue-300/10 via-blue-500 to-blue-900/80 dark:to-blue-200 shadow-blue-500/50 [animation-delay:1040ms]"
              bgClass="from-blue-500/60 via-blue-300/10 [animation-delay:1040ms]"
            />
            <Meteor
              class="left-[480px]"
              starClass="from-yellow-300/10 via-yellow-500 to-yellow-900/80 dark:to-yellow-200 shadow-yellow-500/50 [animation-delay:860ms]"
              bgClass="from-yellow-500/60 via-yellow-300/10 [animation-delay:860ms]"
            />
            <Meteor
              class="left-[600px]"
              starClass="from-emerald-300/10 via-emerald-500 to-emerald-900/80 dark:to-emerald-200 shadow-emerald-500/50 [animation-delay:1440ms]"
              bgClass="from-emerald-500/60 via-emerald-300/10 [animation-delay:1440ms]"
            />
            <Meteor
              class="left-[720px]"
              starClass="from-white/10 via-white to-white/80 dark:to-white shadow-white/50 [animation-delay:3000ms]"
              bgClass="from-white/60 via-white/10 [animation-delay:3000ms]"
            />
            <Meteor
              class="left-[900px]"
              starClass="from-violet-300/10 via-violet-500 to-violet-900/80 dark:to-violet-200 shadow-violet-500/50 [animation-delay:2200ms]"
              bgClass="from-violet-500/60 via-violet-300/10 [animation-delay:2200ms]"
            />
          </MeteorGrid>
        </div>
      </template>
    </SkewedWrapper>
  </main>
</template>

<script lang="ts" setup>
import SkewedWrapper from '~/components/stunning/SkewedWrapper.vue'
import MeteorGrid from '~/components/stunning/MeteorGrid/MeteorGrid.vue'
import Meteor from '~/components/stunning/MeteorGrid/Meteor.vue'
</script>

<style scoped></style>
```

::

## Inspiration

-

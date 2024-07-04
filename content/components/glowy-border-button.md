---
navigation.title: Glowy Border Button
title: Glowy Border Button
description: Glowing Light Border Button for CTA
category: button, cta
---

::code-group

::div{label="Preview"}
<Playground url="/playground/glowy-border-button"></Playground>
::

```vue [Code]
<template>
  <main class="w-full h-full flex justify-center items-center gap-8">
    <GlowyBorderButton>
      <span>Sign in</span>
    </GlowyBorderButton>
    <GlowyBorderButton color="#0ea5e9">
      <span>Sign in</span>
    </GlowyBorderButton>
    <GlowyBorderButton color="#10b981">
      <span>Sign in</span>
    </GlowyBorderButton>
    <GlowyBorderButton color="#8b5cf6">
      <span>Sign in</span>
    </GlowyBorderButton>
    <GlowyBorderButton color="#eab308">
      <span>Sign in</span>
    </GlowyBorderButton>
  </main>
</template>

<script lang="ts" setup>
import GlowyBorderButton from '~/components/stunning/GlowyBorderButton.vue'
</script>

<style scoped></style>
```

::

## Installation

::MSteps

### Prerequisites

This component requires the package [colord](https://github.com/omgovich/colord).

```bash
pnpm i colord
# or
bun i colord
```

### Copy the source code

`/components/stunning/GlowyBorderButton.vue`

::CodeCollapse

```vue
<template>
  <div
    class="sm:flex-row sm:gap-8 lg:gap-10 flex flex-col items-center justify-center gap-6"
  >
    <button
      class="group relative z-[1] bg-transparent text-neutral-100 hover:text-neutral-100 hover:no-underline"
    >
      <div
        class="absolute -left-[1.5px] -top-[1.5px] z-[-1] h-[calc(100%+2.5px)] w-[calc(100%+2.5px)] overflow-hidden rounded-lg"
      >
        <div
          class="animate-spin [animation-duration:5s] absolute left-[-12.5%] top-[-40px] aspect-square h-auto w-[125%]"
          :style="{
            backgroundImage: conicGraident
          }"
        ></div>
      </div>
      <div
        class="rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-800 px-4 py-1"
      >
        <div
          class="flex items-center justify-center gap-2 transition-transform duration-100 ease-in-out group-hover:scale-105"
        >
          <slot />
        </div>
      </div>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { colord } from 'colord'

const props = withDefaults(
  defineProps<{
    color: string
  }>(),
  { color: '#ffffff' }
)

const conicGraident = computed(() => {
  const alphaColor = colord(props.color).alpha(0.33).toRgbString()
  return `conic-gradient(from 90deg at 50% 50%, ${alphaColor} 0, ${alphaColor} 10%, ${props.color} 20%, ${alphaColor} 30%, ${alphaColor} 60%, ${props.color} 70%, ${alphaColor} 80%, ${alphaColor} 100%)`
})
</script>

<style scoped></style>
```

::

::

## Props

| Prop  | Type   | Description                       | Default   |
| :---- | :----- | :-------------------------------- | :-------- |
| color | String | the color of the border animation | '#FFFFFF' |

## Inspiration

-

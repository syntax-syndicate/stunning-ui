---
navigation.title: Glass Border Button
title: Glass Border Button
description: Typically used to display dynamic text changes in the Hero Section.
category: cta, button
---

::code-group

::div{label="Preview"}
<Playground url="/playground/glass-border-button"></Playground>
::

```vue [Code]
<template>
  <main
    class="w-screen h-screen flex flex-col bg-gradient-to-b from-emerald-950 to-emerald-500"
  >
    <div
      class="absolute top-32 left-1/2 -translate-x-1/2 transform w-full flex flex-col items-center px-5"
    >
      <p
        class="rounded-full border border-white/50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white opacity-50"
      >
        New Version 1.0
      </p>

      <h1
        class="mt-8 bg-gradient-to-br from-emerald-300/90 via-emerald-50 to-emerald-300/90 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
      >
        Stunning UI is a better way <br />
        to build websites
      </h1>
    </div>
    <div class="absolute left-1/2 -translate-x-1/2 bottom-48">
      <GlassBorderButton class="z-10 w-40"> Start for free </GlassBorderButton>
    </div>
  </main>
</template>

<script lang="ts" setup>
import GlassBorderButton from '@/components/stunning/GlassBorderButton.vue'
</script>

<style scoped></style>
```

::

## Installation

::steps

### Prerequisites

This component need to install the package:

```bash
pnpm i -S @tsparticles/preset-stars @tsparticles/shape-star colord
```

### Copy the source code

`/components/stunning/GlassBorderButton.vue`

::CodeCollapse

```vue [Code]
<template>
  <div
    :class="
      cn(
        'glass-border-button group bg-white/10 rounded-xl relative h-12 cursor-pointer shadow-sm shadow-black/5'
      )
    "
  >
    <div
      :class="
        cn(
          'glass-border absolute -left-[3px] -top-[3px] h-[calc(100%+6px)] w-[calc(100%+6px)] overflow-hidden rounded-xl z-0',
          'after:content-[\'\'] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:rounded-xl after:border-[0.5px] after:border-white/20'
        )
      "
    >
      <div
        class="animate-spin [animation-duration:5s] blur absolute left-[-42px] top-[-90px] aspect-square h-auto w-[150%]"
        :style="{
          background: conicGraident
        }"
      />
    </div>

    <div
      :class="
        cn(
          'z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl px-8 py-1 font-medium',
          'bg-gradient-to-t from-neutral-100/90  to-neutral-50 backdrop-blur-2xl',
          'group-hover:from-neutral-200/90 group-hover:to-neutral-50'
        )
      "
    >
      <div
        class="flex items-center justify-center gap-2 transition-transform duration-100 text-neutral-950 ease-in-out group-hover:scale-105"
      >
        <slot />
      </div>
    </div>
    <ParticlesStarEffect
      :density="32"
      class="absolute z-0 inset-x-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[160px] w-[160px] [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
    />
  </div>
</template>

<script lang="ts" setup>
import { colord } from 'colord'
import { cn } from '~/lib/utils'
import ParticlesStarEffect from '@/components/stunning/ParticlesStarEffect.vue'

const props = withDefaults(
  defineProps<{
    color: string
  }>(),
  { color: '#ffffff' }
)

const conicGraident = computed(() => {
  const alphaColor = colord(props.color).alpha(0.12).toRgbString()
  return `conic-gradient(from 90deg at 50% 50%, ${alphaColor} 0, ${alphaColor} 10%, ${props.color} 20%, ${alphaColor} 30%, ${alphaColor} 60%, ${props.color} 70%, ${alphaColor} 80%, ${alphaColor} 100%)`
})
</script>

<style scoped></style>
```

::

::

## Inspiration

- [https://senja.io/](https://senja.io/)

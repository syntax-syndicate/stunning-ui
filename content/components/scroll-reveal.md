---
navigation.title: Scroll Reveal
title: Scroll Reveal
description: Scroll-driven section reveal
category: scroll, features
---

::code-group

::div{label="Preview"}
<Playground url="/playground/scroll-reveal"></Playground>
::

```vue [Code]
<template>
  <div class="min-h-screen w-screen py-12">
    <div className="h-screen pb-4 flex justify-center w-full">
      <span class="text-neon-wb text-2xl text-white/30">
        Scroll-driven Section Reveal
      </span>
    </div>

    <ScrollReveal
      v-slot="{ isActive }"
      :offset="200"
      class="max-w-screen-md flex flex-col mx-auto"
      :style="{
        '--duration': '500ms'
      }"
    >
      <div
        :class="{ 'translate-y-8 opacity-0': !isActive }"
        class="flex justify-center transition-[transform,opacity] [transition-delay:100ms] duration-500"
      >
        <div class="rounded-full font-mono text-sm tracking-tight text-neon">
          Features
        </div>
      </div>

      <h2
        :class="{ 'translate-y-8 opacity-0': !isActive }"
        class="mt-4 text-left font-display text-2xl font-light leading-[1.125] md:text-3xl lg:text-4xl transition-[transform,opacity] [transition-delay:100ms] duration-500"
      >
        Why choose our service?
      </h2>

      <h3
        :class="{ 'translate-y-8 opacity-0': !isActive }"
        class="mx-auto mt-4 text-center leading-relaxed text-muted-foreground md:max-w-2xl lg:mt-8 transition-[transform,opacity] [transition-delay:100ms] duration-500"
      >
        Stunning UI Pro is awesome premium library.
        <br class="hidden md:block" />
        Build better, faster with Stunning UI.
      </h3>

      <div
        class="mt-6 transition-[transform,opacity] duration-[var(--duration)] md:mt-12"
      >
        <div class="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 md:gap-y-8">
          <div
            :style="{ '--delay': `${250}ms` }"
            :class="{
              'translate-y-8 opacity-0': !isActive,
              'delay-[var(--delay)]': isActive
            }"
            class="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 transition-[transform,opacity] [transition-delay:250ms] duration-500"
          >
            <Icon name="ri:magic-line" class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-neon-p text-lg">
              {{ paragraphPlaceholder }}
            </p>
          </div>
          <div
            :style="{ '--delay': `${500}ms` }"
            :class="{
              'translate-y-8 opacity-0': !isActive,
              'delay-[var(--delay)]': isActive
            }"
            class="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 transition-[transform,opacity] [transition-delay:500ms] duration-500"
          >
            <Icon name="ri:magic-line" class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-neon-p text-lg">
              {{ paragraphPlaceholder }}
            </p>
          </div>
          <div
            :style="{ '--delay': `${750}ms` }"
            :class="{
              'translate-y-8 opacity-0': !isActive,
              'delay-[var(--delay)]': isActive
            }"
            class="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 transition-[transform,opacity] [transition-delay:750ms] duration-500"
          >
            <Icon name="ri:magic-line" class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-neon-p text-lg">
              {{ paragraphPlaceholder }}
            </p>
          </div>
          <div
            :style="{ '--delay': `${1000}ms` }"
            :class="{
              'translate-y-8 opacity-0': !isActive,
              'delay-[var(--delay)]': isActive
            }"
            class="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 transition-[transform,opacity] [transition-delay:1000ms] duration-500"
          >
            <Icon name="ri:magic-line" class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-neon-p text-lg">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  </div>
</template>

<script setup>
import ScrollReveal from '@/components/stunning/ScrollReveal.vue'
import { paragraphPlaceholder } from '~/lib/constants'
</script>
```

::

## Installation

::MSteps

### Prerequisites

This component requires the package [GSAP](https://gsap.com/).

```bash
pnpm i gsap
# or
bun i gsap
```

### Copy the source code

`/components/stunning/TextReveal.vue`

::CodeCollapse

```vue
<template>
  <div
    ref="scrollRef"
    class="max-w-screen-lg min-h-[100vh] items-center flex justify-center relative"
  >
    <slot :isActive="targetIsVisible" ref="contentRef" />
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Lenis from 'lenis'
import { useElementVisibility } from '@vueuse/core'

const scrollRef = ref(null)

const targetIsVisible = useElementVisibility(scrollRef)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  const lenis = new Lenis()

  lenis.on('scroll', (e: any) => {
    // console.log(e)
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
})

onUnmounted(() => {})
</script>

<style scoped>
html.lenis,
html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
</style>
```

::

::

## Props

| Prop | Type   | Description                      | Default |
| :--- | :----- | :------------------------------- | :------ |
| text | String | the text to do the animation for | ""      |

## Inspiration

-

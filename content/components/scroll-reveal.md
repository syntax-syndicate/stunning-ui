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
    <div
      className="w-full h-screen pb-16 flex flex-col items-center justify-between"
    >
      <span class="text-neon-wb text-2xl text-white/30">
        Scroll-driven Section Reveal
      </span>
      <Button
        size="icon"
        class="rounded-full animate-bounce"
        @click="handleScroll"
      >
        <Icon name="ri:arrow-down-line" />
      </Button>
    </div>

    <ScrollReveal
      v-slot="{ isVisible }"
      class="max-w-screen-md flex flex-col mx-auto"
    >
      <div
        :class="{ 'translate-y-8 opacity-0': !isVisible }"
        class="flex justify-center transition-[transform,opacity] [transition-delay:100ms] duration-500"
      >
        <div class="rounded-full font-mono text-sm tracking-tight text-neon">
          Features
        </div>
      </div>

      <h2
        :class="{ 'translate-y-8 opacity-0': !isVisible }"
        class="mt-4 text-left font-display text-2xl font-light leading-[1.125] md:text-3xl lg:text-4xl transition-[transform,opacity] [transition-delay:100ms] duration-500"
      >
        Why choose our service?
      </h2>

      <h3
        :class="{ 'translate-y-8 opacity-0': !isVisible }"
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
            :class="{
              'translate-y-8 opacity-0': !isVisible,
              'delay-[var(--delay)]': isVisible
            }"
            class="space-y-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 transition-[transform,opacity] [transition-delay:250ms] duration-500"
          >
            <Icon name="ri:magic-line" class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-2 text-neon-wb text-lg">
              {{ paragraphPlaceholder }}
            </p>
          </div>
          <div
            :class="{
              'translate-y-8 opacity-0': !isVisible,
              'delay-[var(--delay)]': isVisible
            }"
            class="space-y-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 transition-[transform,opacity] [transition-delay:500ms] duration-500"
          >
            <Icon name="ri:magic-line" class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-2 text-neon-wb text-lg">
              {{ paragraphPlaceholder }}
            </p>
          </div>
          <div
            :class="{
              'translate-y-8 opacity-0': !isVisible,
              'delay-[var(--delay)]': isVisible
            }"
            class="space-y-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 transition-[transform,opacity] [transition-delay:750ms] duration-500"
          >
            <Icon name="ri:magic-line" class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-2 text-neon-wb text-lg">
              {{ paragraphPlaceholder }}
            </p>
          </div>
          <div
            :class="{
              'translate-y-8 opacity-0': !isVisible,
              'delay-[var(--delay)]': isVisible
            }"
            class="space-y-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 transition-[transform,opacity] [transition-delay:1000ms] duration-500"
          >
            <Icon name="ri:magic-line" class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-2 text-neon-wb text-lg">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  </div>
</template>

<script setup lang="ts">
import ScrollReveal from '@/components/stunning/ScrollReveal.vue'
import { paragraphPlaceholder } from '~/lib/constants'

const handleScroll = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}
</script>
```

::

## Installation

::MSteps

### Prerequisites

This component requires the package [@vueuse/core](https://vueuse.org/).

::code-group

```bash [npm]
npm install @vueuse/core
```

```bash [pnpm]
pnpm install @vueuse/core
```

```bash [bun]
bun install @vueuse/core
```

```bash [yarn]
yarn install @vueuse/core
```

::

### Copy the composables (Optional)

This hook allows for smooth scrolling and requires the installation of two packages: [GSAP](https://gsap.com), [lenis](https://lenis.darkroom.engineering/):

::code-group

```bash [npm]
npm install gsap lenis
```

```bash [pnpm]
pnpm install gsap lenis
```

```bash [bun]
bun install gsap lenis
```

```bash [yarn]
yarn install gsap lenis
```

::

`/composables/useSmoothScroll.ts`

::CodeCollapse

```ts [Code]
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Lenis from 'lenis'

const useSmoothScroll = () => {
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
}

export { useSmoothScroll }
```

::

### Copy the source code

`/components/stunning/ScrollReveal.vue`

::CodeCollapse

```vue [Code]
<template>
  <div
    ref="scrollRef"
    class="max-w-screen-lg min-h-[100vh] items-center flex justify-center relative"
  >
    <slot :isVisible="targetIsVisible" ref="contentRef" />
  </div>
</template>

<script lang="ts" setup>
import { useElementVisibility } from '@vueuse/core'
import { useSmoothScroll } from '@/composables/useSmoothScroll'

const scrollRef = ref(null)

const targetIsVisible = useElementVisibility(scrollRef)

useSmoothScroll()
</script>

<style scoped></style>
```

::

::

## Slots

| Prop    | Type      | Description                             | Default |
| :------ | :-------- | :-------------------------------------- | :------ |
| default | Component | The element will reveal when you scroll | null    |

## Inspiration

-

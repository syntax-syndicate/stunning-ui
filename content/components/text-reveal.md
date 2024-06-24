---
navigation.title: Text Reveal
title: Text Reveal
description: Scroll-driven text reveal, a text appearance effect activates as you scroll through the content.
category: scroll, features, typography
---

::code-group

::div{label="Preview"}
<Playground url="/playground/text-reveal"></Playground>
::

```vue [Code]
<template>
  <main class="w-full my-16 flex flex-col px-8 py-16 h-[200vh]">
    <div className="pb-4 flex justify-center w-full">
      <span class="text-neon-wb text-2xl text-white/30">
        Scroll-driven Text Reveal
      </span>
    </div>
    <TextReveal :text="text" />
  </main>
</template>

<script lang="ts" setup>
import TextReveal from '@/components/stunning/TextReveal.vue'

const text =
  'Stunning UI is Designed for Developers、Designers、Creators、Indie Hackers'
</script>

<style scoped></style>
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
    ref="textRef"
    class="max-w-[60rem] min-h-[100vh] items-center flex justify-center"
    :class="clasName"
  >
    <p class="font-semibold">
      <template v-for="(word, index) in words" :key="index">
        <span class="opacity-30 sui-text-reveal">
          {{ `${word} ` }}
        </span>
      </template>
    </p>
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  clasName: {
    type: String,
    default: 'text-5xl'
  }
})

const textRef = ref(null)
const revealText = ref()
const words = props.text.split(' ')

onMounted(() => {
  revealText.value = ScrollTrigger.create({
    trigger: textRef.value,
    start: 'top top'
  })

  gsap.to('.sui-text-reveal', {
    pin: true,
    opacity: 1,
    stagger: 1,
    scrollTrigger: {
      scrub: true,
      trigger: textRef.value,
      start: 'top',
      end: 'center'
    }
  })
})

onUnmounted(() => {
  revealText.value.kill()
})
</script>

<style scoped></style>
```

::

::

## Examples

### Splitting with chars

::CodeGroup

::div{label="Preview"}
<Playground url="/playground/text-reveal/TextRevealWithChars"></Playground>
::

```vue [Code]
<template>
  <main class="w-screen px-24 py-12 h-[300vh]">
    <div
      className="w-full h-screen pb-16 flex flex-col items-center justify-between"
    >
      <span class="text-neon-wb text-2xl text-white/30">
        Scroll-driven Text Reveal
      </span>
      <Button
        size="icon"
        class="rounded-full animate-bounce"
        @click="handleScroll"
      >
        <Icon name="ri:arrow-down-line" />
      </Button>
    </div>
    <TextReveal
      :text="paragraphPlaceholder"
      textClass="font-semibold"
      splitting-by="chars"
    />
    <div class="h-screen w-full"></div>
  </main>
</template>

<script lang="ts" setup>
import TextReveal from '@/components/stunning/TextReveal.vue'
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import { paragraphPlaceholder } from '~/lib/constants'

const text =
  'Stunning UI is Designed for Developers、Designers、Creators、Indie Hackers'

useSmoothScroll()

const handleScroll = () => {
  window.scrollTo({ top: document.body.scrollHeight / 3, behavior: 'smooth' })
}
</script>

<style scoped></style>
```

::

### Animate with custom parameters

You can customize the animation's initial and final states using the `fromVars` and `toVars`, align with `gsap.fromTo()`

::CodeGroup

::div{label="Preview"}
<Playground url="/playground/text-reveal/TextRevealCustomTween"></Playground>
::

```vue [Code]
<template>
  <main class="w-screen px-24 py-12 h-[300vh]">
    <div
      className="w-full h-screen pb-16 flex flex-col items-center justify-between"
    >
      <span class="text-neon-wb text-2xl text-white/30">
        Scroll-driven Text Reveal
      </span>
      <Button
        size="icon"
        class="rounded-full animate-bounce"
        @click="handleScroll"
      >
        <Icon name="ri:arrow-down-line" />
      </Button>
    </div>
    <TextReveal
      :text="paragraphPlaceholder"
      textClass="font-semibold"
      splitting-by="chars"
      :fromVars="{
        skewX: -20,
        willChange: 'filter, transform',
        color: 'rgba(255, 255, 255, .5)'
      }"
      :toVars="{
        skewX: 0,
        stagger: 0.04,
        ease: 'sine',
        color: '#4fa'
      }"
    />
    <div class="h-screen w-full"></div>
  </main>
</template>

<script lang="ts" setup>
import TextReveal from '@/components/stunning/TextReveal.vue'
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import { paragraphPlaceholder } from '~/lib/constants'

const text =
  'Stunning UI is Designed for Developers、Designers、Creators、Indie Hackers'

useSmoothScroll()

const handleScroll = () => {
  window.scrollTo({ top: document.body.scrollHeight / 3, behavior: 'smooth' })
}
</script>

<style scoped></style>
```

::

## Props

| Prop      | Type   | Description                                                                                                                                      | Default |
| :-------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :------ |
| text      | String | the text to do the animation for                                                                                                                 | ""      |
| textClass | String | the text class                                                                                                                                   | ""      |
| fromVars  | String | An object containing the initial (starting) property/value pairs. [API Reference](<https://gsap.com/docs/v3/GSAP/gsap.fromTo()/#parameters>)     | {}      |
| toVars    | String | An object containing the destination properties/values to animate to. [API Reference](<https://gsap.com/docs/v3/GSAP/gsap.fromTo()/#parameters>) | {}      |

## Inspiration

-

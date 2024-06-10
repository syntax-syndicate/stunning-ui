---
navigation.title: Text Reveal
title: Text Reveal
description: Scroll-driven text reveal, a text appearance effect activates as you scroll through the content.
category: scroll, features
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
<!-- /components/TextReveal.vue -->
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

## Props

| Prop | Type   | Description                      | Default |
| :--- | :----- | :------------------------------- | :------ |
| text | String | the text to do the animation for | ""      |

## Inspiration

-

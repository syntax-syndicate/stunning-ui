---
navigation.title: Text Reveal
title: Text Reveal
description: Scroll-driven text reveal, a text appearance effect activates as you scroll through the content.
category: scroll, features
---

## Preview

<Playground url="/playground/text-reveal"></Playground>

## Installation

### Prerequisites

This component requires the package [GSAP](https://gsap.com/).

```bash
pnpm i gsap
# or
bun i gsap
```

### Copy the source code

`/components/stunning/TextReveal.vue`

<CollapseCodeWrapper>

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

</CollapseCodeWrapper>

## Usage

```vue
<template>
  <TextReveal :text="paragraphPlaceholder" />
</template>
```

## Props

| Prop | Type   | Description                      | Default |
| :--- | :----- | :------------------------------- | :------ |
| text | String | the text to do the animation for | ""      |

## Inspiration

-

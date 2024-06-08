---
navigation.title: Blurry Text Reveal
title: Blurry Text Reveal
description: Scroll-driven blurry text reveal, a text appearance effect activates as you scroll through the content.
category: scroll, headline, features
---

::code-group

::div{label="Preview"}
<Playground url="/playground/blurry-text-reveal"></Playground>
::

```vue [Code]
<template>
  <NuxtLayout name="playground">
    <main class="w-full my-16 flex flex-col px-8 py-16 h-[400vh]">
      <section className="w-full h-screen mx-auto text-center">
        <span class="inline-block text-neon-wb text-2xl text-white/30">
          Scroll-driven Blurry Text Reveal
        </span>
      </section>
      <section
        class="max-w-[60rem] min-h-[100vh] flex items-center justify-center flex-col gap-32"
      >
        <div>Feature 1</div>
        <BlurryTextReveal :text="text1" />
      </section>
      <section
        class="max-w-[60rem] min-h-[100vh] flex items-center justify-center flex-col gap-16"
      >
        <div>Feature 2</div>
        <BlurryTextReveal :text="text2" />
      </section>
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import BlurryTextReveal from '@/components/stunning/BlurryTextReveal.vue'

const text1 =
  'Stunning UI is Designed for Developers、Designers、Creators、Indie Hackers'
const text2 =
  'Stunning UI lets you easily copy and paste code into your projects, enabling you to create an impressive website quickly.'
</script>

<style scoped></style>
```

::

## Installation

::steps

### Prerequisites

This component requires the package [GSAP](https://gsap.com/).

```bash
pnpm i gsap
# or
bun i gsap
```

### Copy the source code

`/components/stunning/BlurryTextReveal.vue`

::CodeCollapse

```vue [Code]
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
<template>
  <div
    ref="textRef"
    class="max-w-[60rem] min-h-[100vh] items-center flex justify-center"
    :class="clasName"
  >
    <p class="font-semibold sui-blurry-text" ref="blurryText">
      {{ text }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import TextSplitter from '@/lib/TextSplitter'

defineProps({
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
const blurryText = ref<HTMLParagraphElement | null>(null)

onMounted(() => {
  const scroll = (e: HTMLParagraphElement) => {
    const splitter = new TextSplitter(e, {
      resizeCallback: () => scroll(e),
      splitTypeTypes: 'words,chars'
    })

    const chars = splitter.getChars()
    gsap.fromTo(
      chars,
      {
        filter: 'blur(10px) brightness(0%)',
        willChange: 'filter'
      },
      {
        ease: 'none',
        filter: 'blur(0px) brightness(100%)',
        stagger: 0.05,
        scrollTrigger: {
          trigger: blurryText.value,
          start: 'top bottom-=15%',
          end: 'bottom center+=15%',
          scrub: true
        }
      }
    )
  }

  if (blurryText.value) {
    scroll(blurryText.value)
  }
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

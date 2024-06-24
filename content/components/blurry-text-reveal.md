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
  <main class="w-screen px-24 py-12 h-[400vh]">
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
    <section
      class="max-w-[60rem] min-h-[100vh] flex items-center justify-center flex-col gap-32"
    >
      <div>Feature 1</div>
      <BlurryTextReveal class="text-4xl" :text="paragraphPlaceholder" />
    </section>
    <section
      class="max-w-[60rem] min-h-[100vh] flex items-center justify-center flex-col gap-16"
    >
      <div>Feature 2</div>
      <BlurryTextReveal class="text-4xl" :text="paragraphPlaceholder" />
    </section>
    <div ref="screenBottom" class="my-12 h-screen"></div>
  </main>
</template>

<script lang="ts" setup>
import BlurryTextReveal from '@/components/stunning/BlurryTextReveal.vue'
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import { paragraphPlaceholder } from '@/lib/constants'

useSmoothScroll()

const screenBottom = ref<HTMLDivElement | null>(null)

const handleScroll = () => {
  screenBottom.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
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

`/components/stunning/BlurryTextReveal.vue`

::CodeCollapse

```vue [Code]
<template>
  <div ref="textRef" class="flex justify-center items-center">
    <p class="font-semibold sui-blurry-text" ref="blurryText">
      {{ text }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import TextSplitter from '~/lib/TextSplitter'

defineProps({
  text: {
    type: String,
    required: true
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

onUnmounted(() => {
  // revealText.value.kill()
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

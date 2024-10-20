---
navigation.title: Streaming Text
title: Streaming Text
description: Streaming text, perplexing text appearance effect.
category: features, typography
---

::code-group

::div{label="Preview"}
<Playground url="/playground/streaming-text"></Playground>
::

```vue [Code]
<template>
  <main class="w-screen h-screen px-24 relative">
    <StreamingText :text="text" />

    <Button
      class="rounded-full absolute left-1/2 -translate-x-1/2 bottom-12"
      @click="handleReplay"
    >
      <Icon name="ri:refresh-line" class="mr-2" />
      Replay
    </Button>
  </main>
</template>

<script lang="ts" setup>
import StreamingText from '@/components/stunning/StreamingText.vue'

const text = `In the music-loving city of Harmonia, a humble shoe cobbler named Elias, with a gift for singing, shares his beautiful voice only with the confines of his shop. One day, a poor, old woman, Nelda, enters his shop and upon hearing him sing, offers to teach him music in return for shoes. Nelda trains Elias and encourages him to enter a city music festival. Overcoming his fears, Elias performs, his voice enchants the entire city, and he wins the competition. He becomes famous but stays grounded, continuing his trade as a cobbler, while his extraordinary voice adds a new melody to the city's music.`

const handleReplay = () => {
  window.location.reload()
}
</script>

<style scoped></style>
```

::

## Installation

::MSteps

### Prerequisites

This component requires the package [GSAP](https://gsap.com/).

::code-group

```bash [npm]
npm install gsap
```

```bash [pnpm]
pnpm install gsap
```

```bash [bun]
bun install gsap
```

```bash [yarn]
yarn install gsap
```

::

### Copy the source code

`/components/stunning/StreamingText.vue`

::CodeCollapse

```vue
<template>
  <div
    ref="textRef"
    class="max-w-[60rem] min-h-[100vh] items-center flex justify-center text-lg"
  >
    <p class="transform-gpu" :class="textClass" ref="textTarget">
      {{ text }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import TextSplitter from '~/lib/TextSplitter'

gsap.registerPlugin(ScrollTrigger)

const props = withDefaults(
  defineProps<{
    text: string
    textClass?: string
    fromVars?: Record<string, any>
    toVars?: Record<string, any>
    splittingBy?: 'words' | 'chars'
  }>(),
  {
    text: '',
    textClass: '',
    fromVars: () => ({}),
    toVars: () => ({}),
    splittingBy: 'words'
  }
)

const { splittingBy, fromVars, toVars } = toRefs(props)

const textRef = ref(null)
const textTarget = ref(null)
const revealText = ref()

onMounted(() => {
  const streaming = (e: HTMLParagraphElement) => {
    const splitter = new TextSplitter(e, {
      resizeCallback: () => streaming(e),
      splitTypeTypes: splittingBy.value
    })

    let animateTarget =
      splittingBy.value === 'words' ? splitter.getWords() : splitter.getChars()

    gsap.fromTo(
      animateTarget,
      {
        opacity: 0,
        ...fromVars.value
      },
      {
        opacity: 1,
        stagger: 0.05,
        ...toVars.value,
        onComplete: () => {
          // Replace the animated spans with the original text
          e.innerHTML = props.text
        }
      }
    )
  }
  if (textTarget.value) {
    streaming(textTarget.value)
  }
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

| Prop      | Type   | Description                                                                                                                                      | Default |
| :-------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :------ |
| text      | String | the text to do the animation for                                                                                                                 | ""      |
| textClass | String | the text class                                                                                                                                   | ""      |
| fromVars  | String | An object containing the initial (starting) property/value pairs. [API Reference](<https://gsap.com/docs/v3/GSAP/gsap.fromTo()/#parameters>)     | {}      |
| toVars    | String | An object containing the destination properties/values to animate to. [API Reference](<https://gsap.com/docs/v3/GSAP/gsap.fromTo()/#parameters>) | {}      |

## Inspiration

- [Perplexity](https://www.perplexity.ai/)

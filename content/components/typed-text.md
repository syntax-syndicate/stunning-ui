---
navigation.title: Typed Text
title: Typed Text
description: Typically used to display dynamic text changes in the Hero Section.
category: paragraph, headline, text
---

::code-group

::div{label="Preview"}
<Playground url="/playground/typed-text"></Playground>
::

```vue [Code]
<template>
  <main class="w-full flex flex-col px-8 py-16 h-full">
    <div class="flex-center flex-col h-full text-5xl font-semibold">
      <p class="text-center">
        <span class="text-neon">Stunning UI</span> is designed for
      </p>
      <p>
        <TypedText
          :words="['Designers', 'Developers', 'Creators', 'Indie Hackers']"
          class="ml-2 text-neon"
          :typeSpeed="75"
        />
      </p>
    </div>
  </main>
</template>

<script lang="ts" setup>
import TypedText from '@/components/stunning/TypedText.vue'
</script>

<style scoped></style>
```

::

## Installation

::steps

### Prerequisites

This component requires the package [typed.js](https://github.com/mattboldt/typed.js).

```bash
pnpm i typed.js
# or
bun i typed.js
```

### Copy the source code

`/components/stunning/TextReveal.vue`

<CollapseCodeWrapper>

```vue
<!-- /components/TypedText.vue -->
<template>
  <span class="sui-typed-text" ref="typedElement" v-bind="$attrs"></span>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Typed from 'typed.js'

const props = defineProps({
  words: {
    type: Array,
    required: true
  },
  typeSpeed: {
    type: Number,
    default: 150
  }
})

const typed = ref(null)
const typedElement = ref(null)

onMounted(() => {
  typed.value = new Typed(typedElement.value, {
    strings: props.words,
    typeSpeed: props.typeSpeed,
    loop: true
  })
})

onUnmounted(() => {
  if (typed.value) {
    typed.value?.destory()
    typed.value = null
    typedElement.value = null
  }
})
</script>

<style scoped></style>
```

</CollapseCodeWrapper>
::

## Props

| Prop      | Type     | Description                | Default |
| :-------- | :------- | :------------------------- | :------ |
| words     | String[] | the words to be typed      | `[]`    |
| typeSpeed | number   | type speed in milliseconds | 150     |

## Inspiration

- [https://circle.so/](https://circle.so/)

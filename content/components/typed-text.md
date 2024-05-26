# Typed Text

Typically used to display dynamic text changes in the Hero Section.

## Preview

<Playground url="/playground/typed-text"></Playground>

## Installation

### Prerequisites

This component requires the package [typed.js](https://github.com/mattboldt/typed.js).

```bash
pnpm i typed.js
# or
bun i typed.js
```

### Copy the source code

`/components/TextReveal.vue`

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

## Usage

```vue
<TypedText
  class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700 dark:to-emerald-300"
  :words="['Designers', 'Developers', 'Creators', 'Indie Hackers']"
  :typeSpeed="75"
/>
```

## Props

| Prop      | Type     | Description                | Default |
| :-------- | :------- | :------------------------- | :------ |
| words     | String[] | the words to be typed      | `[]`    |
| typeSpeed | number   | type speed in milliseconds | 150     |

## Inspiration

- [https://forwardemail.net/en](https://forwardemail.net/en)

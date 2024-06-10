---
navigation.title: Torch Text Reveal
title: Torch Text Reveal
description: Torch text reveal, a text effect to highlight the headline.
category: text, features
---

::code-group

::div{label="Preview"}
<Playground url="/playground/torch-text-reveal"></Playground>
::

```vue [Code]
<template>
  <main class="w-full h-full flex flex-col justify-center items-center px-8">
    <TorchTextReveal> Stunning UI is Awesome </TorchTextReveal>
  </main>
</template>

<script lang="ts" setup>
import TorchTextReveal from '@/components/stunning/TorchTextReveal.vue'
</script>

<style scoped></style>
```

::

## Installation

::MSteps

### Prerequisites

This component requires animation to be added in the `tailwind.config.ts` file for Tailwind CSS.

```ts
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      keyframes: {
        torch: {
          '0%': {
            backgroundPosition: '-200% 0'
          },
          '50%': {
            backgroundPosition: '200% 0'
          },
          '100%': {
            backgroundPosition: '-200% 0'
          }
        }
      },
      animation: {
        torch: 'torch 5s linear infinite'
      }
    }
  }
}
```

### Copy the source code

`/components/stunning/TorchTextReveal.vue`

::CodeCollapse

```vue
<template>
  <div class="relative flex min-h-screen items-center justify-center">
    <h1
      class="animate-torch select-none whitespace-nowrap bg-gradient-to-r from-neutral-950 via-white to-neutral-950 bg-[length:100px_30px] bg-clip-text bg-no-repeat text-lg font-bold uppercase text-transparent sm:bg-[length:200px_50px] sm:text-4xl"
    >
      <slot />
    </h1>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
```

::

::

## Props

| Prop     | Type      | Description                      | Default |
| :------- | :-------- | :------------------------------- | :------ |
| children | Component | the text to do the animation for | ""      |

## Inspiration

-

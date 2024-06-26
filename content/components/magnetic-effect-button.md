---
navigation.title: Magnetic Effect Button
title: Magnetic Effect Button
description: When the mouse enters the button, there will be a simulated magnetic effect.
category: button, gsap
---

::code-group

::div{label="Preview" icon="ri:eye-line"}
<Playground url="/playground/magnetic-effect-button" aspect="5/1"></Playground>
::

```vue [Code]
<template>
  <main class="w-screen h-screen flex items-center justify-center">
    <MagneticEffect>
      <Button size="lg">Hover me</Button>
    </MagneticEffect>
  </main>
</template>

<script lang="ts" setup>
import MagneticEffect from '@/components/stunning/MagneticEffect.vue'
</script>

<style scoped></style>
```

::

## Installation

::MSteps

### Prerequisites

This component requires the package [gsap](https://gsap.com/).

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

`/components/stunning/MagneticEffect.vue`

::CodeCollapse

```vue
<template>
  <div
    ref="magneticEffectRef"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'

const magneticEffectRef = ref<HTMLDivElement | null>(null)

const handleMouseMove = (e: MouseEvent) => {
  if (magneticEffectRef.value) {
    let boundingRect = magneticEffectRef.value.getBoundingClientRect()
    const mousePosX = e.x - boundingRect.left
    const mousePosY = e.y - boundingRect.top

    gsap.to(magneticEffectRef.value, {
      x: (mousePosX - boundingRect.width / 2) * 0.4,
      y: (mousePosY - boundingRect.height / 2) * 0.4,
      duration: 0.8,
      ease: 'power3.out'
    })
  }
}

const handleMouseLeave = () => {
  gsap.to(magneticEffectRef.value, {
    x: 0,
    y: 0,
    duration: 0.8,
    ease: 'elastic.out(1,0.3)'
  })
}
</script>

<style scoped></style>
```

::

::

## Slots

| Prop    | Type      | Description                      | Default |
| :------ | :-------- | :------------------------------- | :------ |
| default | Component | the children you want animate to | null    |

## Inspiration

-

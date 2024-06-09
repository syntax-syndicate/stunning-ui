---
navigation.title: Confetti
title: Confetti
description: Typically used as a celebratory animation effect after successfully completing an event, such as registration or payment.
category: cta, mirco effect
---

::code-group

::div{label="Preview"}
<Playground url="/playground/confetti"></Playground>
::

```vue [Code]
<template>
  <main class="w-screen h-screen flex justify-center items-center">
    <Button @click="handleClick">Run basic cannon</Button>
  </main>
</template>

<script lang="ts" setup>
import { useConfetti } from '~/composables/useConfetti'

const { confetti } = useConfetti()

const handleClick = () => {
  confetti({
    particleCount: 100,
    spread: 70
  })
}
</script>

<style scoped></style>
```

::

## Installation

::steps

### Prerequisites

This component need to install the package: [canvas-confetti](https://github.com/catdad/canvas-confetti)

```bash
pnpm i -S canvas-confetti && pnpm i -D @types/canvas=confetti
```

### Copy the source code

`/composables/useConfetti.ts`

::CodeCollapse

```ts [Code]
import CanvasConfetti from 'canvas-confetti'

interface ConfettiOptions extends CanvasConfetti.Options {
  particleCount?: number
  angle?: number
  spread?: number
  startVelocity?: number
  decay?: number
  gravity?: number
  drift?: number
  flat?: boolean
  ticks?: number
  origin?: { x: number; y: number }
  colors?: string[]
  shapes?: CanvasConfetti.Shape[]
  zIndex?: number
  disableForReducedMotion?: boolean
  useWorker?: boolean
  resize?: boolean
  canvas?: HTMLCanvasElement | null
  scalar?: number
}

const confetti = (options: ConfettiOptions) => {
  if (
    options.disableForReducedMotion &&
    window.matchMedia('(prefers-reduced-motion)').matches
  ) {
    return
  }

  const confettiInstance = options.canvas
    ? CanvasConfetti.create(options.canvas, {
        resize: options.resize ?? true,
        useWorker: options.useWorker ?? true
      })
    : CanvasConfetti

  confettiInstance({
    ...options
  })
}

confetti.shapeFromPath = (options: { path: string; [key: string]: any }) => {
  return CanvasConfetti.shapeFromPath({ ...options })
}

confetti.shapeFromText = (options: { text: string; [key: string]: any }) => {
  return CanvasConfetti.shapeFromText({ ...options })
}

const useConfetti = () => {
  return {
    confetti
  }
}

export { useConfetti }
```

::

::

## Examples

### Random Direction

::code-group

::div{label="Preview"}
<Playground url="/playground/confetti/RandomDirection" aspect="5/2"></Playground>
::

```vue [Code]
<template>
  <main class="w-screen h-screen flex justify-center items-center">
    <Button @click="handleClick">Run basic cannon</Button>
  </main>
</template>

<script lang="ts" setup>
import { useConfetti } from '~/composables/useConfetti'

const { confetti } = useConfetti()

const handleClick = () => {
  confetti({
    particleCount: 100,
    spread: 70
  })
}
</script>

<style scoped></style>
```

::

### Realistic Look

::code-group

::div{label="Preview"}
<Playground url="/playground/confetti/RealisticLook" aspect="5/2"></Playground>
::

```vue [Code]
<template>
  <main class="w-screen h-screen flex justify-center items-center">
    <Button @click="handleClick">Realistic Look</Button>
  </main>
</template>

<script lang="ts" setup>
import { useConfetti } from '~/composables/useConfetti'

const { confetti } = useConfetti()

const handleClick = () => {
  const count = 200
  const defaults = {
    origin: { y: 0.7 }
  }

  function fire(particleRatio: number, opts: any) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    })
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55
  })
  fire(0.2, {
    spread: 60
  })
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  })
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  })
  fire(0.1, {
    spread: 120,
    startVelocity: 45
  })
}
</script>

<style scoped></style>
```

::

### Fireworks

::code-group

::div{label="Preview"}
<Playground url="/playground/confetti/Fireworks" aspect="5/2"></Playground>
::

```vue [Code]
<template>
  <main class="w-screen h-screen flex justify-center items-center">
    <Button @click="handleClick">Fireworks</Button>
  </main>
</template>

<script lang="ts" setup>
import { useConfetti } from '~/composables/useConfetti'

const { confetti } = useConfetti()

const handleClick = () => {
  const duration = 15 * 1000
  const animationEnd = Date.now() + duration
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  const interval: NodeJS.Timeout = setInterval(function () {
    const timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) {
      return clearInterval(interval)
    }

    const particleCount = 50 * (timeLeft / duration)
    // since particles fall down, start a bit higher than random
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
    })
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
    })
  }, 250)
}
</script>

<style scoped></style>
```

::

### Stars

::code-group

::div{label="Preview"}
<Playground url="/playground/confetti/Stars" aspect="5/2"></Playground>
::

```vue [Code]
<template>
  <main class="w-screen h-screen flex justify-center items-center">
    <Button @click="handleClick">Stars</Button>
  </main>
</template>

<script lang="ts" setup>
import { useConfetti } from '~/composables/useConfetti'

const { confetti } = useConfetti()

const handleClick = () => {
  const defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
  }

  function shoot() {
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ['star']
    })

    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ['circle']
    })
  }

  setTimeout(shoot, 0)
  setTimeout(shoot, 100)
  setTimeout(shoot, 200)
}
</script>

<style scoped></style>
```

::

### Snow

::code-group

::div{label="Preview"}
<Playground url="/playground/confetti/Snow" aspect="5/2"></Playground>
::

```vue [Code]
<template>
  <main class="w-screen h-screen flex justify-center items-center">
    <Button @click="handleClick">Snow</Button>
  </main>
</template>

<script lang="ts" setup>
import { useConfetti } from '~/composables/useConfetti'

const { confetti } = useConfetti()

const handleClick = () => {
  const duration = 15 * 1000
  const animationEnd = Date.now() + duration
  let skew = 1

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  ;(function frame() {
    const timeLeft = animationEnd - Date.now()
    const ticks = Math.max(200, 500 * (timeLeft / duration))
    skew = Math.max(0.8, skew - 0.001)

    confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: ticks,
      origin: {
        x: Math.random(),
        // since particles fall down, skew start toward the top
        y: Math.random() * skew - 0.2
      },
      colors: ['#ffffff'],
      shapes: ['circle'],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4)
    })

    if (timeLeft > 0) {
      requestAnimationFrame(frame)
    }
  })()
}
</script>

<style scoped></style>
```

::

### School Pride

::code-group

::div{label="Preview"}
<Playground url="/playground/confetti/SchoolPride" aspect="5/2"></Playground>
::

```vue [Code]
<template>
  <main class="w-screen h-screen flex justify-center items-center">
    <Button @click="handleClick">School Pride</Button>
  </main>
</template>

<script lang="ts" setup>
import { useConfetti } from '~/composables/useConfetti'

const { confetti } = useConfetti()

const handleClick = () => {
  const end = Date.now() + 15 * 1000

  // go Buckeyes!
  const colors = ['#bb0000', '#ffffff']

  ;(function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    })
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    })

    if (Date.now() < end) {
      requestAnimationFrame(frame)
    }
  })()
}
</script>

<style scoped></style>
```

::

### Emoji

::code-group

::div{label="Preview"}
<Playground url="/playground/confetti/Emoji" aspect="5/2"></Playground>
::

```vue [Code]
<template>
  <main class="w-screen h-screen flex justify-center items-center">
    <Button @click="handleClick">Emoji</Button>
  </main>
</template>

<script lang="ts" setup>
import { useConfetti } from '~/composables/useConfetti'

const { confetti } = useConfetti()

const handleClick = () => {
  const scalar = 2
  const unicorn = confetti.shapeFromText({ text: '🦄', scalar })

  const defaults = {
    spread: 360,
    ticks: 60,
    gravity: 0,
    decay: 0.96,
    startVelocity: 20,
    shapes: [unicorn],
    scalar
  }

  function shoot() {
    confetti({
      ...defaults,
      particleCount: 30
    })

    confetti({
      ...defaults,
      particleCount: 5,
      flat: true
    })

    confetti({
      ...defaults,
      particleCount: 15,
      scalar: scalar / 2,
      shapes: ['circle']
    })
  }

  setTimeout(shoot, 0)
  setTimeout(shoot, 100)
  setTimeout(shoot, 200)
}
</script>

<style scoped></style>
```

::

## Inspiration

- [https://www.lemonsqueezy.com/](https://www.lemonsqueezy.com)

---
navigation.title: Particles Effect
title: Particles Effect
description: This animated floating particles component can be used as a background or to set the mood.
category: background, hero, cta
---

::code-group

::div{label="Preview"}
<Playground url="/playground/particles-effect"></Playground>
::

```vue [Code]
<template>
  <div class="h-screen w-screen overflow-hidden bg-black">
    <div
      class="relative z-0 h-screen w-screen mt-20 overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
    >
      <ParticlesEffect
        :density="1200"
        class="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
      />

      <div
        class="absolute inset-x-0 -bottom-[254px] h-full w-full rounded-[100%] bg-gradient-to-b from-white to-black"
      />
      <div
        class="absolute inset-x-0 -bottom-[256px] h-full w-full rounded-[100%] bg-neutral-950 shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff7d]"
      />
    </div>
  </div>
</template>

<script setup>
import ParticlesEffect from '@/components/stunning/ParticlesEffect/Slim.vue'
</script>
```

::

## Installation

::MSteps

### Prerequisites

This component requires the package [tsparticles](https://github.com/tsparticles/tsparticles).

::code-group

```bash [npm]
npm install @tsparticles/engine @tsparticles/slim
```

```bash [pnpm]
pnpm install @tsparticles/engine @tsparticles/slim
```

```bash [bun]
bun install @tsparticles/engine @tsparticles/slim
```

```bash [yarn]
yarn install @tsparticles/engine @tsparticles/slim
```

::

### Copy the source code

`/components/stunning/ParticlesEffect/Slim.vue`

::CodeCollapse

```vue
<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import {
  tsParticles,
  type Container,
  type ISourceOptions
} from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'
import { onMounted, onUnmounted } from 'vue'

let container: Container | undefined = undefined

const props = withDefaults(
  defineProps<{
    id: string
    size: number
    minSize: number
    density: number
    speed: number
    minSpeed: number
    opacity: number
    minOpacity: number
    color: string
    background: string
    opacitySpeed: number
    options: ISourceOptions
  }>(),
  {
    id: () => `sparkles-${Math.round(Math.random() * 9999)}`,
    size: 1.2,
    minSize: 0.4,
    density: 1000,
    speed: 1,
    minSpeed: 0,
    opacity: 1,
    minOpacity: 0.1,
    color: '#FFFFFF',
    background: 'transparent',
    opacitySpeed: 3,
    options: () => ({})
  }
)

const defaultOptions: ISourceOptions = {
  background: {
    color: {
      value: props.background
    }
  },
  fullScreen: {
    enable: false,
    zIndex: 1
  },
  fpsLimit: 120,
  particles: {
    color: {
      value: props.color
    },
    move: {
      enable: true,
      direction: 'none',
      speed: {
        min: props.minSpeed || props.speed / 10,
        max: props.speed
      },
      straight: false
    },
    number: {
      value: props.density
    },
    opacity: {
      value: {
        min: props.minOpacity || props.opacity / 10,
        max: props.opacity
      },
      animation: {
        enable: true,
        sync: false,
        speed: props.speed
      }
    },
    size: {
      value: {
        min: props.minSize || props.size / 2.5,
        max: props.size
      }
    }
  },
  detectRetina: true
}

onMounted(async () => {
  await loadSlim(tsParticles)

  const customOptions = props.options

  container = await tsParticles.load({
    id: props.id,
    options:
      Object.keys(customOptions).length > 0 ? customOptions : defaultOptions
  })
})

onUnmounted(() => {
  if (!container) {
    return
  }

  container.destroy()
})
</script>
```

::

::

## Examples

### Star Shape

::code-group

::div{label="Preview"}
<Playground url="/playground/particles-effect/StarShape"></Playground>
::

```vue [Code]
<template>
  <div class="h-screen w-screen overflow-hidden bg-black">
    <div
      class="relative z-0 h-screen w-screen mt-20 overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
    >
      <ParticlesStarEffect
        :density="1200"
        class="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
      />

      <div
        class="absolute inset-x-0 -bottom-[254px] h-full w-full rounded-[100%] bg-gradient-to-b from-white to-black"
      />
      <div
        class="absolute inset-x-0 -bottom-[256px] h-full w-full rounded-[100%] bg-neutral-950 shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff7d]"
      />
    </div>
  </div>
</template>

<script setup>
import ParticlesStarEffect from '@/components/stunning/ParticlesStarEffect.vue'
</script>
```

::

### With Button

::code-group

::div{label="Preview"}
<Playground url="/playground/particles-effect/WithButton"></Playground>
::

```vue [Code]
<template>
  <main
    class="w-screen h-screen flex flex-col bg-gradient-to-b from-emerald-950 to-emerald-700"
  >
    <div
      class="absolute top-32 left-1/2 -translate-x-1/2 transform w-full flex flex-col items-center px-5"
    >
      <Badge> New Version 1.0 </Badge>

      <h1
        class="mt-8 bg-gradient-to-br from-emerald-300/90 via-emerald-50 to-emerald-300/90 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
      >
        Stunning UI is a better way <br />
        to build websites
      </h1>
    </div>
    <div class="absolute left-1/2 -translate-x-1/2 bottom-48">
      <GlassBorderButton
        class="z-10 w-40"
        @click="navigateTo('/components/glass-border-button')"
      >
        Start for free
      </GlassBorderButton>
    </div>
  </main>
</template>

<script lang="ts" setup>
import GlassBorderButton from '@/components/stunning/GlassBorderButton.vue'
</script>

<style scoped></style>
```

::

### With CTA

::code-group

::div{label="Preview"}
<Playground url="/playground/particles-effect/WithCTA"></Playground>
::

```vue [Code]
<template>
  <div class="h-screen w-screen overflow-hidden bg-black">
    <div
      class="relative mx-auto mt-20 mb-4 w-screen flex flex-col justify-center items-center gap-4 z-10"
    >
      <div class="w-full mx-auto flex justify-center">
        <Badge :variant="isDark ? '' : 'secondary'">Follow us on X</Badge>
      </div>

      <div class="text-center text-5xl text-white">
        <p><span class="">Be the First to get update</span></p>
        <p>by <span class="text-neon">Joining Our Waitlist!</span></p>
      </div>

      <div class="text-muted-foreground">
        Be first to experience Sparkles. Join our waitlist for exclusive
        benefits and revolutionary automation solutions.
      </div>

      <div class="w-full flex flex-col justify-center items-center gap-8">
        <div
          class="max-w-sm mx-auto flex justify-center items-center gap-2 mb-12"
        >
          <Input id="email" type="email" placeholder="Email" />
          <Button :variant="isDark ? '' : 'secondary'"> Join Waitlist </Button>
        </div>
      </div>
    </div>

    <div
      class="relative z-0 -mt-32 h-[400px] w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
    >
      <ParticlesEffect
        :density="1200"
        class="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
      />
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,#5eead42e,transparent_70%)]"
      />
      <div
        class="absolute inset-x-0 -bottom-[254px] h-full w-full rounded-[100%] bg-gradient-to-b from-white to-black"
      />
      <div
        class="absolute inset-x-0 -bottom-[256px] h-full w-full rounded-[100%] bg-neutral-950 shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff7d]"
      />
    </div>
  </div>
</template>

<script setup>
import { useDarkmode } from '@/composables/useDarkmode'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const { isDark } = useDarkmode()

import ParticlesEffect from '@/components/stunning/ParticlesEffect/Slim.vue'
</script>
```

::

## Props

Checkout [tsPartical Options](https://particles.js.org/docs/interfaces/tsParticles_Engine.Options_Interfaces_IOptions.IOptions.html) for more details.

| Prop         | Type     | Description                                                                                                                 | Default             |
| :----------- | :------- | :-------------------------------------------------------------------------------------------------------------------------- | :------------------ |
| id           | string   | the uniq id of particles                                                                                                    | `sparkles-[random]` |
| size         | number   | Max particle size                                                                                                           | 1.2                 |
| minSize      | number   | Min particle size                                                                                                           | 0.4                 |
| density      | number   | Amount of particles                                                                                                         | 1000                |
| speed        | number   | Max animation speed                                                                                                         | 1                   |
| minSpeed     | number   | Min animation speed                                                                                                         | 0                   |
| opacity      | number   | Max particle opacity                                                                                                        | 1                   |
| minOpacity   | number   | Min particle opacity                                                                                                        | 0.1                 |
| color        | string   | The Particle color                                                                                                          | '#FFFFFF'           |
| background   | string   | The Background color                                                                                                        | 'transparent'       |
| opacitySpeed | number   | Opacity animation speed                                                                                                     | 3                   |
| options      | IOptions | [tsPartical Options](https://particles.js.org/docs/interfaces/tsParticles_Engine.Options_Interfaces_IOptions.IOptions.html) | {}                  |

## Inspiration

-

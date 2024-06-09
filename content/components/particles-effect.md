---
navigation.title: Particles Effect
title: Particles Effect
description: Animated floating particles component.
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
      class="mx-auto mt-20 mb-4 w-screen flex flex-col justify-center items-center gap-4 z-1"
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
        <!-- <div class="grid grid-cols-3 gap-8 text-white">
          <simple-icons:x class="w-6 h-6" />
          <simple-icons:github class="w-6 h-6" />
          <simple-icons:producthunt class="w-6 h-6" />
        </div> -->
      </div>
    </div>

    <div
      class="relative z-0 -mt-16 h-[400px] w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
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

import ParticlesEffect from '@/components/stunning/ParticlesEffect.vue'
</script>
```

::

## Installation

::steps

### Prerequisites

This component requires the package [typed.js](https://github.com/mattboldt/typed.js).

```bash
pnpm i @tsparticles/react @tsparticles/slim
```

### Copy the source code

`/components/stunning/ParticlesEffect.vue`

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

const props = defineProps({
  id: {
    type: String,
    default: () => `sparkles-${Math.round(Math.random() * 9999)}`
  },
  size: {
    type: Number,
    default: 1
  },
  minSize: {
    type: Number,
    default: 0.4
  },
  density: {
    type: Number,
    default: 800
  },
  speed: {
    type: Number,
    default: 1
  },
  minSpeed: {
    type: Number,
    required: false
  },
  minOpacity: {
    type: Number,
    default: 1
  },
  opacity: {
    type: Number,
    default: 1
  },
  opacitySpeed: {
    type: Number,
    default: 3
  },
  color: {
    type: String,
    default: '#FFFFFF'
  },
  background: {
    type: String,
    default: 'transparent'
  },
  options: {
    type: Object,
    required: false
  }
})

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
        speed: props.opacitySpeed
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

const loadParticles = async () => {
  //
}

onMounted(async () => {
  await loadSlim(tsParticles)

  container = await tsParticles.load({
    id: props.id,
    options: props.options || defaultOptions
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

## Props

| Prop      | Type     | Description                | Default |
| :-------- | :------- | :------------------------- | :------ |
| words     | String[] | the words to be typed      | `[]`    |
| typeSpeed | number   | type speed in milliseconds | 150     |

## Inspiration

-

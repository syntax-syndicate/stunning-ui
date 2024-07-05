---
navigation.title: Tyndall Effect
title: Tyndall Effect
description: Tyndall effect is light scattering by particles, used in the hero as a background.
category: background, hero
---

::code-group

::div{label="Preview"}
<Playground url="/playground/tyndall-effect"></Playground>
::

```vue [Code]
<template>
  <main class="w-full h-full bg-black">
    <TyndallEffect
      class=" min-h-screen bg-gradient-to-br from-black/50 to-white/30"
    >
      <div
        class="absolute top-48 left-1/2 -translate-x-1/2 transform w-full flex flex-col items-center px-5"
      >
        <Badge>New Version 1.0</Badge>

        <h1
          class="mt-8 bg-gradient-to-br from-stone-200/90 via-stone-50 to-white bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
        >
          Stunning UI is a better way <br />
          to build websites
        </h1>

        <GlassBorderButton class="z-10 w-40 mt-12">
          Start for free
        </GlassBorderButton>
      </div>
      <template #particles>
        <ParticlesEffect
          :density="256"
          :size="1.5"
          class="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)] z-10"
        />
      </template>
    </TyndallEffect>
  </main>
</template>

<script lang="ts" setup>
import TyndallEffect from '@/components/stunning/TyndallEffect.vue'
import ParticlesEffect from '@/components/stunning/ParticlesEffect/Slim.vue'
import GlassBorderButton from '@/components/stunning/GlassBorderButton.vue'
</script>

<style scoped></style>
```

::

## Installation

::MSteps

### Prerequisites

This component requires the package [@vueuse/motion](https://motion.vueuse.org/).

::code-group

```bash [npm]
npm install @vueuse/motion
```

```bash [pnpm]
pnpm install @vueuse/motion
```

```bash [bun]
bun install @vueuse/motion
```

```bash [yarn]
yarn install @vueuse/motion
```

::

### Copy the source code

`/components/stunning/TyndallEffect.vue`

::CodeCollapse

```vue
<template>
  <div
    class="sui-tyndall-effect relative flex gap-10 min-h-screen overflow-hidden h-auto w-full justify-start items-center"
    :style="wrapperStyle"
  >
    <div
      class="streak flex-none mix-blend-overlay overflow-hidden pointer-events-none absolute w-[200%] lg:w-[150%] h-24 lg:h-56 left-[-64vw] top-[48vw] lg:left-[-28vw] lg:top-[32vw] xl:left-[-16vw] xl:top-[21vw]"
      v-motion
      :initial="{ opacity: 0, rotate: '40deg', scaleY: 0.5 }"
      :enter="{ opacity: 0.8, rotate: '40deg', scaleY: 1 }"
      :duration="2000"
    />
    <div
      class="streak flex-none mix-blend-overlay overflow-hidden pointer-events-none absolute w-[200%] lg:w-[150%] h-12 lg:h-24 left-[-60vw] top-[40vw] lg:left-[-32vw] lg:top-[24vw] xl:left-[-12vw] xl:top-[17vw]"
      v-motion
      :initial="{ opacity: 0, rotate: '32deg', scaleY: 0.5 }"
      :enter="{ opacity: 0.92, rotate: '32deg', scaleY: 1 }"
      :duration="2000"
    />
    <div
      class="streak flex-none mix-blend-overlay overflow-hidden pointer-events-none absolute w-[200%] lg:w-[150%] h-20 lg:h-48 left-[-32vw] top-[32vw] lg:left-[-12vw] lg:top-[18vw] xl:left-[-10vw] xl:top-[10vw]"
      v-motion
      :initial="{ opacity: 0, rotate: '24deg', scaleY: 0.5 }"
      :enter="{ opacity: 1, rotate: '24deg', scaleY: 1 }"
      :duration="2000"
    />
    <div
      class="overlay h-56 flex-none absolute left-0 right-0 top-0 z-10 overflow-hidden pointer-events-none"
    ></div>
    <div
      class="particles-effect flex-none h-screen absolute left-0 top-0 right-0"
      v-if="$slots.particles"
    >
      <slot name="particles" />
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    streakColor: string
  }>(),
  {
    streakColor: 'rgb(255, 255, 255)'
  }
)

const { streakColor } = toRefs(props)

const wrapperStyle = computed(() => {
  return {
    '--streak-color': streakColor.value
  }
})
</script>

<style scoped>
.sui-tyndall-effect {
  --streak-color: rgb(0, 225, 255);
}

.sui-tyndall-effect .overlay {
  background: linear-gradient(
    180deg,
    #000000 0%,
    rgba(0, 0, 0, 0.32) 43%,
    rgba(0, 0, 0, 0.12) 70%,
    rgba(0, 0, 0, 0) 100%
  );
}

.sui-tyndall-effect .streak {
  background: linear-gradient(
    90deg,
    var(--streak-color) 16%,
    rgba(255, 255, 255, 0) 100%
  );
  mask: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 35%,
    rgba(0, 0, 0, 0.5) 64%,
    rgba(0, 0, 0, 0) 100%
  );
}

.sui-tyndall-effect .particles-effect {
  mask: linear-gradient(
    225deg,
    rgba(0, 0, 0, 0) 30%,
    rgb(0, 0, 0) 36%,
    rgb(0, 0, 0) 63%,
    rgba(0, 0, 0, 0) 76%
  );
}
</style>
```

::

::

## Example

### Colors

::code-group

::div{label="Preview"}
<Playground url="/playground/tyndall-effect/WithTheme" ></Playground>
::

```vue [Code]
<template>
  <main class="w-full h-full bg-black">
    <TyndallEffect
      streak-color="#8ff"
      class=" min-h-screen bg-gradient-to-br from-blue-800/50 to-sky-200/20"
    >
      <div
        class="absolute top-48 left-1/2 -translate-x-1/2 transform w-full flex flex-col items-center px-5"
      >
        <p
          class="rounded-full border border-white/50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white opacity-50"
        >
          New Version 1.0
        </p>

        <h1
          class="mt-8 bg-gradient-to-br from-sky-200/90 via-sky-50 to-white bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
        >
          Stunning UI is a better way <br />
          to build websites
        </h1>
      </div>
      <template #particles>
        <ParticlesEffect
          :density="256"
          class="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)] z-10"
        />
      </template>
    </TyndallEffect>
  </main>
</template>

<script lang="ts" setup>
import TyndallEffect from '@/components/stunning/TyndallEffect.vue'
import ParticlesEffect from '@/components/stunning/ParticlesEffect/Slim.vue'
</script>

<style scoped></style>
```

::

## Props

| Prop        | Type   | Description                                                   | Default              |
| :---------- | :----- | :------------------------------------------------------------ | :------------------- |
| streakColor | string | The color used in the streak light, specified as an RGB value | `rgb(255, 255, 255)` |

## Inspiration

- [https://www.framer.com/](https://www.framer.com/)

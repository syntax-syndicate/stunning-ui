---
navigation.title: Light Bar
title: Light Bar
description: Typically used to display dynamic text changes in the Hero Section.
category: pricing, cta
---

## Preview

<Playground url="/playground/light-bar"></Playground>

## Installation

### Prerequisites

This component requires animation to be added in the `tailwind.config.ts` file for Tailwind CSS.

```ts
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'gradient-conic':
          'conic-gradient(var(--conic-position, from 45deg), var(--tw-gradient-stops))'
      }
    }
  }
}
```

### Copy the utils code

`/lib/tailwind-theme.ts`

```ts
import tailwindColors from 'tailwindcss/colors'
import type { DefaultColors } from 'tailwindcss/types/generated/colors'

export type ColorType = keyof DefaultColors

export const formatThemeColors = (color: ColorType) => {
  return tailwindColors[color]
}
```

### Copy the source code

`/components/stunning/LightBar.vue`

<CollapseCodeWrapper>

```vue
<template>
  <div
    class="light-bar relative flex min-h-screen flex-col items-center justify-center bg-black overflow-hidden z-0"
  >
    <div
      class="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0"
    >
      <div
        class="absolute inset-auto right-1/2 h-56 w-[30rem] bg-gradient-conic from-emerald-500 via-black to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        :style="leftStyle"
      />
      <div
        class="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-black to-emerald-500 text-white [--conic-position:from_290deg_at_center_top]"
        :style="rightStyle"
      />
      <div
        class="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"
      />
      <div
        class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"
      />
      <div
        class="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full opacity-50 blur-3xl bg-[var(--sui-light-bar-bg)]"
        :style="topStyle"
      />
      <div
        class="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full blur-2xl"
        :style="bottomStyle"
      />
      <div
        class="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] blur-sm"
        :style="bottomStyle"
      />

      <div
        class="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { formatThemeColors, type colorType } from '~/lib/tailwind-theme'

const props = withDefaults(defineProps<{ theme?: colorType }>(), {
  theme: 'emerald'
})

const { theme } = toRefs(props)

const topStyle = computed(() => {
  return {
    backgroundColor: formatThemeColors(theme.value)['500']
  }
})
const bottomStyle = computed(() => {
  return {
    backgroundColor: formatThemeColors(theme.value)['400']
  }
})
const leftStyle = computed(() => {
  return {
    '--tw-gradient-from': `${
      formatThemeColors(theme.value)['500']
    } var(--tw-gradient-from-position)`
  }
})
const rightStyle = computed(() => {
  return {
    '--tw-gradient-to': `${
      formatThemeColors(theme.value)['500']
    } var(--tw-gradient-to-position)`
  }
})
</script>

<style scoped></style>
```

</CollapseCodeWrapper>

## Usage

```vue
<template>
  <LightBar />
</template>
```

</CollapseCodeWrapper>

## Examples

### Themes

```vue
<template>
  <LightBar theme="pink" />
</template>
```

<Playground url="/playground/light-bar-theme" ></Playground>

### With Paticles Effect

```vue
<template>
  <LightBar />
  <ParticlesEffect
    :density="1200"
    class="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
  />
</template>
```

<Playground url="/playground/light-bar-paticles" ></Playground>

## Inspiration

- [https://www.animstats.com/](https://www.animstats.com/)

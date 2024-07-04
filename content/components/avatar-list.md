---
navigation.title: Avatar List
title: Avatar List
description: A component that displays list of user's avatar
category: testimonals
---

::code-group

::div{label="Preview"}
<Playground url="/playground/avatar-list" aspect='5/2'></Playground>
::

```vue [Code]
<template>
  <main
    class="w-screen h-screen flex flex-col justify-center items-center bg-dots"
  >
    <AvatarList :list="reviews" />
  </main>
</template>

<script lang="ts" setup>
import AvatarList from '~/components/stunning/AvatarList.vue'
import { reviews } from '@/lib/constants'
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
        'bg-position': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        'bg-position': 'bg-position 3s infinite alternate'
      }
    }
  }
}
```

### Copy the source code

`/components/stunning/GodRay.vue`

::CodeCollapse

```vue
<template>
  <div :class="cn('flex py-12')">
    <template v-for="item in list" :key="item.name">
      <div
        class="group relative z-0 -ml-4 flex scale-100 items-center transition-all duration-200 ease-in-out hover:z-10 hover:scale-110"
      >
        <div class="relative overflow-hidden rounded-full bg-background">
          <div
            class="pointer-events-none absolute h-full w-full animate-bg-position from-violet-500 from-30% via-cyan-400 via-50% to-pink-500 to-80% bg-[length:300%_auto] opacity-15 group-hover:bg-gradient-to-r"
          />
          <div class="z-1 blur-lg" />
          <img
            :src="item.image"
            :alt="item.name"
            :class="
              cn('rounded-full object-cover', sizeVariant[size] ?? sizes.md)
            "
          />
        </div>
        <div
          class="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-2 transform whitespace-nowrap rounded bg-neutral-900 p-2 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:opacity-100 dark:bg-neutral-100 dark:text-neutral-900"
        >
          <div class="text-sm font-semibold">{{ item.name }}</div>
          <div class="text-sm">{{ item.position }}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

const props = withDefaults(
  defineProps<{
    list: { image: string; name: string; position: string }[]
    size: 'sm' | 'md' | 'lg'
  }>(),
  {
    list: [],
    size: 'md'
  }
)

const sizeVariant: Record<'sm' | 'md' | 'lg', string> = {
  lg: 'm-3 size-12',
  md: 'm-2 size-8',
  sm: 'm-1 size-6'
}
</script>

<style lang="scss" scoped></style>
```

::

::

## Props

| Prop     | Type       | Description                                                                    | Default |
| :------- | :--------- | :----------------------------------------------------------------------------- | :------ |
| size     | string     | The avatar size can be 'sm', 'md', or 'lg'.                                    | 'md'    |
| list     | Record\[\] | The Avatar List                                                                | `[]`    |
| listItem | Object     | The Avatar List item meta, `{ image: string; name: string; position: string }` | `{}`    |

## Inspiration

-

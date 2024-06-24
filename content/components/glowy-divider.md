---
navigation.title: Glowy Divider
title: Glowy Divider
description: Used for dividing sections on a page
category: wireframe, line, divider
---

::code-group

::div{label="Preview"}
<Playground url="/playground/glowy-divider"></Playground>
::

```vue [Code]
<template>
  <main class="w-screen h-screen flex flex-col items-center justify-center">
    <div class="flex flex-col md:items-center">
      <span class="font-mono text-sm tracking-tight text-neon">
        Section A
      </span>
    </div>

    <GlowyDivider direction="top" class="lg:px-24" />

    <div class="flex flex-col md:items-center">
      <span class="font-mono text-sm tracking-tight text-neon">
        Section B
      </span>
    </div>
  </main>
</template>

<script lang="ts" setup>
import GlowyDivider from '@/components/stunning/GlowyDivider.vue'
</script>

<style scoped></style>
```

::

## Installation

::MSteps

### Copy the source code

`/components/stunning/GlowyDivider.vue`

::CodeCollapse

```vue
<template>
  <div class="relative py-32 w-full">
    <div
      class="absolute left-0 h-full w-full"
      :class="
        cn(
          direction === 'bottom'
            ? 'top-1/2 dark:bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.neutral[950]/5%),transparent)]'
            : '-top-1/2 dark:bg-[radial-gradient(35%_128px_at_50%_100%,theme(backgroundColor.white/8%),transparent)] bg-[radial-gradient(35%_128px_at_50%_100%,theme(backgroundColor.neutral[950]/5%),transparent)]'
        )
      "
    ></div>
    <!-- the line -->
    <div
      class="absolute inset-x-12 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent dark:via-white/30 via-neutral-950/30 to-transparent"
    />
    <div
      class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-950 p-1.5"
      v-if="showBuckle"
    >
      <div class="h-1.5 w-8 rounded-lg bg-neutral-950/90 dark:bg-white"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

withDefaults(
  defineProps<{
    showBuckle?: boolean
    direction?: 'top' | 'bottom'
  }>(),
  {
    showBuckle: false,
    direction: 'bottom'
  }
)
</script>

<style scoped></style>
```

::

::

## Examples

### Glowy on Top

::code-group

::div{label="Preview"}
<Playground url="/playground/glowy-divider/GlowyTop" aspect="5/2"></Playground>
::

```vue [Code]

```

::

### Glowy on Bottom

::code-group

::div{label="Preview"}
<Playground url="/playground/glowy-divider/GlowyBottom" aspect="5/2"></Playground>
::

```vue [Code]

```

::

### Show Buckle on Middle

::code-group

::div{label="Preview"}
<Playground url="/playground/glowy-divider/GlowyWithBuckle" aspect="5/2"></Playground>
::

```vue [Code]

```

::

## Props

| Prop       | Type              | Description                                   | Default |
| :--------- | :---------------- | :-------------------------------------------- | :------ |
| showBuckle | Boolean           | Whether show the buckle in the middle of line | false   |
| direction  | `top` \| `bottom` | the direction of the glowy light              | bottom  |

## Inspiration

-

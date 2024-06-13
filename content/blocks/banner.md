---
navigation.title: Banner
title: Banner
description: A banner on a landing page is a prominent section that captures attention with key information and a call to action to engage visitors.
category: banner, cta
---

## Default

::code-group

::div{label="Preview"}
<Playground url="/landing/banner" aspect="5/1"></Playground>
::

```vue [Code]
<template>
  <main class="w-full h-full">
    <Banner class="bg-emerald-300 dark:bg-emerald-500">
      <div>
        Stunning UI 1.0 is here. Create stunning website that stand out!
      </div>
      <div>
        <Button size="xs" class="gap-2">
          <ri:sparkling-2-line />
          <span>Getting Started</span>
        </Button>
      </div>
    </Banner>
  </main>
</template>

<script lang="ts" setup>
import Banner from '@/components/blocks/banner/Banner.vue'
</script>

<style scoped></style>
```

::

## With Gradient

::code-group

::div{label="Preview"}
<Playground url="/landing/banner/Gradient" aspect="5/1"></Playground>
::

```vue [Code]
<template>
  <main class="w-full h-full">
    <Banner class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      <div>
        Stunning UI 1.0 is here. Create stunning website that stand out!
      </div>
      <div>
        <Button size="xs" class="gap-2">
          <ri:sparkling-2-line />
          <span>Getting Started</span>
        </Button>
      </div>
    </Banner>
  </main>
</template>

<script lang="ts" setup>
import Banner from '@/components/blocks/banner/Banner.vue'
</script>

<style scoped></style>
```

::

## Glowy Pulse

::code-group

::div{label="Preview"}
<Playground url="/landing/banner/GlowyPulse" aspect="5/1"></Playground>
::

```vue [Code]
<template>
  <main class="w-full h-full">
    <Banner
      class="bg-neutral-950 before:content-[''] before:absolute before:w-2/5 before:h-full before:bg-gradient-radial before:from-emerald-700 before:to-transparent before:scale-150 before:top-[-50%] before:animate-pulse before:duration-[10000ms] before:z-[-1]"
    >
      <div>
        Stunning UI 1.0 is here. Create stunning website that stand out!
      </div>
      <div>
        <Button size="xs" class="gap-2">
          <ri:sparkling-2-line />
          <span>Register Now</span>
        </Button>
      </div>
    </Banner>
  </main>
</template>

<script lang="ts" setup>
import Banner from '@/components/blocks/banner/Banner.vue'
</script>

<style scoped></style>
```

::

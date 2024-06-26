---
navigation.title: Stunning UI | Banner
title: Stunning UI | Banner
description: A banner on a landing page is a prominent section that captures attention with key information and a call to action to engage visitors.
category: banner, button, link, cta
---

## Minimal

::code-group

::div{label="Preview"}
<Playground url="/landing/banner" aspect="5/1"></Playground>
::

```vue [Code]
<template>
  <main class="w-full h-full">
    <LandingBanner class="bg-emerald-300 dark:bg-emerald-500">
      <div>
        Stunning UI 1.0 is here. Create stunning website that stand out!
      </div>
      <div>
        <Button size="xs" class="gap-2">
          <Icon name="ri:sparkling-2-line" />
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
<Playground url="/landing/banner/BannerGradient" aspect="5/1"></Playground>
::

```vue [Code]
<template>
  <main class="w-full h-full">
    <LandingBanner class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      <div>
        Stunning UI 1.0 is here. Create stunning website that stand out!
      </div>
      <div>
        <Button size="xs" class="gap-2">
          <Icon name="ri:sparkling-2-line" />
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
<Playground url="/landing/banner/BannerGlowyPulse" aspect="5/1"></Playground>
::

```vue [Code]
<template>
  <main class="w-screen h-screen bg-dots">
    <LandingBanner
      :class="
        cn(
          'dark:bg-neutral-950 bg-neutral-50 border-b border-neutral-100/50 dark:border-neutral-900/90',
          'dark:hover:bg-neutral-900 hover:bg-white',
          'before:content-normal before:absolute before:w-2/5 before:h-full before:bg-gradient-radial before:from-emerald-300 before:dark:from-emerald-700 before:to-transparent before:scale-150 before:top-[-50%] before:animate-pulse before:duration-[10000ms] before:z-[-1]'
        )
      "
    >
      <div>
        Stunning UI 1.0 is here. Create stunning website that stand out!
      </div>
      <div>
        <Button size="xs" class="gap-2">
          <Icon name="ri:sparkling-2-line" />
          <span>Getting Started</span>
        </Button>
      </div>
    </Banner>
  </main>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
import Banner from '@/components/blocks/banner/Banner.vue'
</script>

<style scoped></style>
```

::

## Spotlight

::code-group

::div{label="Preview"}
<Playground url="/landing/banner/BannerSpotlight" aspect="5/1"></Playground>
::

```vue [Code]
<template>
  <main class="w-screen h-screen bg-dots">
    <LandingBanner
      :class="
        cn(
          'px-paddings relative z-40 overflow-hidden leading-none transition-colors duration-200 dark:bg-neutral-950 dark:hover:bg-neutral-new-8 bg-[#F5FBFD] hover:bg-[#f1fcff]',
          'before:content-normal before:absolute before:inset-x-0 before:bottom-0 before:z-10 before:block before:h-px before:w-full before:mix-blend-overlay before:dark:bg-white',
          'after:content-normal after:absolute after:left-1/2 after:top-1/2 after:-z-10 after:h-[188px] after:w-[60px] after:origin-center after:-translate-y-[43%] after:translate-x-[-290px] after:rotate-[226deg] after:rounded-[100%] after:bg-gradient-to-r after:from-green-300 after:via-blue-500 after:to-purple-600 after:mix-blend-plus-lighter after:blur-2xl after:dark:opacity-100 after:sm:left-[30%] after:sm:translate-x-0 after:opacity-70'
        )
      "
    >
      <div>
        Stunning UI 1.0 is here. Create stunning website that stand out!
      </div>
      <div>
        <Button size="xs" class="gap-2">
          <Icon name="ri:sparkling-2-line" />
          <span>Getting Started</span>
        </Button>
      </div>
    </Banner>
  </main>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
import Banner from '@/components/blocks/banner/Banner.vue'
</script>

<style scoped></style>
```

::

## Marquee

::code-group

::div{label="Preview"}
<Playground url="/landing/banner/BannerMarquee" aspect="5/1"></Playground>
::

```vue [Code]
<template>
  <main class="w-full h-full">
    <LandingBanner class="bg-emerald-300 dark:bg-emerald-500">
      <div>
        Stunning UI 1.0 is here. Create stunning website that stand out!
      </div>
      <div>
        <Button size="xs" class="gap-2">
          <Icon name="ri:sparkling-2-line" />
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

---

::MAlert{type=info icon=lucide:lightbulb}
More coming soon, stay tuned.
::

---
navigation.title: Call to Action
title: Call to Action
description: A button or link prompting actions like "Sign Up," "Learn More," or "Buy Now."
category: cta, button, link
---

## Minimal

::code-group

::div{label="Preview"}
<Playground url="/landing/call-to-action"></Playground>
::

```vue [Code]
<template>
  <div class="py-12 flex items-center justify-center flex-col h-full">
    <div
      class="container px-4 py-12 mx-auto sm:py-16 sm:px-24 sm:flex sm:items-end sm:justify-between"
    >
      <h3
        class="text-4xl font-extrabold tracking-tight text-primary leading-9 sm:text-5xl sm:leading-10"
      >
        <span>Launch your SaaS</span>
        <br />
        <span class="text-neon"> in days, not weeks. </span>
      </h3>
      <div class="flex mt-8 sm:flex-shrink-0 sm:mt-0 gap-4">
        <Button variant="brand" @click="navigateTo('/')"> Get started </Button>
        <Button @click="navigateTo('/')"> Live demo </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
```

::

## Center Layout

::code-group

::div{label="Preview"}
<Playground url="/landing/call-to-action/CTACenterLayout"></Playground>
::

```vue [Code]
<template>
  <div class="py-12 flex items-center justify-center flex-col h-full">
    <div
      class="container px-4 py-12 mx-auto sm:py-16 sm:px-24 sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-8"
    >
      <h2
        class="text-4xl font-extrabold tracking-tight text-primary text-center leading-9 sm:text-5xl sm:leading-10"
      >
        <span class="text-neon"> Start your free trial today </span>
      </h2>
      <h3 class="text-muted-foreground text-center">
        <p>Celebrate the joy of accomplishment with an app designed</p>
        <p>to track your progress and motivate your efforts.</p>
      </h3>
      <div class="flex mt-8 sm:flex-shrink-0 sm:mt-0 gap-4">
        <Button variant="brand" @click="navigateTo('/')"> Get started </Button>
        <Button @click="navigateTo('/')"> Learn more </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
```

::

## With Particles Effect

::code-group

::div{label="Preview"}
<Playground url="/landing/call-to-action/CTAWithParticlesEffect"></Playground>
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

import ParticlesEffect from '@/components/stunning/ParticlesEffect.vue'
</script>
```

::

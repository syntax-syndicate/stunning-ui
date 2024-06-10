---
navigation.title: Glowy Spotlight Cards
title: Glowy Spotlight Cards
description: The glowing card effect is typically used to highlight feature cards when they are hovered over.
category: cards, glowy, features
---

::code-group

::div{label="Preview"}
<Playground url="/playground/glowy-spotlight-cards"></Playground>
::

```vue [Code]
<template>
  <main class="w-full flex flex-col justify-center items-center h-full px-8">
    <GlowyCardWrapper class="grid grid-cols-12 gap-4">
      <GlowyCard class="col-span-8 rounded-lg">
        <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
          <ri:magic-line class="w-8 h-8" />

          <h1 class="font-medium text-2xl">Hover me</h1>

          <p class="line-clamp-4 text-neon-p">
            {{ paragraphPlaceholder }}
          </p>
        </div>
      </GlowyCard>
      <GlowyCard class="col-span-4 rounded-lg">
        <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
          <ri:stack-line class="w-8 h-8" />

          <h1 class="font-medium text-2xl">Hover me</h1>

          <p class="line-clamp-4 text-neon-p">
            {{ paragraphPlaceholder }}
          </p>
        </div>
      </GlowyCard>
      <GlowyCard class="col-span-4 rounded-lg">
        <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
          <ri:cake-2-line class="w-8 h-8" />

          <h1 class="font-medium text-2xl">Hover me</h1>

          <p class="line-clamp-4 text-neon-p">
            {{ paragraphPlaceholder }}
          </p>
        </div>
      </GlowyCard>
      <GlowyCard class="col-span-8">
        <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
          <ri:vip-crown-line class="w-8 h-8" />

          <h1 class="font-medium text-2xl">Hover me</h1>

          <p class="line-clamp-4 text-neon-p">
            {{ paragraphPlaceholder }}
          </p>
        </div>
      </GlowyCard>
    </GlowyCardWrapper>
  </main>
</template>

<script lang="ts" setup>
import GlowyCardWrapper from '~/components/stunning/GlowyCard/GlowyCardWrapper.vue'
import GlowyCard from '~/components/stunning/GlowyCard/GlowyCard.vue'
import { paragraphPlaceholder } from '~/lib/constants'
</script>

<style scoped></style>
```

::

## Installation

::MSteps

### Prerequisites

This component consists of two parts，`GlowyCardWrapper` + `GlowyCard`

### Copy the source code

`/components/stunning/GlowyCardWrapper.vue`

::CodeCollapse

```vue [Code]
<template>
  <main class="sui-glow-card-wrapper" ref="glowCardWrapper">
    <slot />
  </main>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    hue: number
    size: number
    border: number
    radius: number
  }>(),
  {
    hue: 120,
    size: 200,
    border: 2,
    radius: 10
  }
)

const { hue, size, border, radius } = toRefs(props)

const glowCardWrapper = ref<HTMLElement | null>(null)

const syncPointer = ({ x, y }: { x: number; y: number }) => {
  if (glowCardWrapper.value) {
    glowCardWrapper.value.style.setProperty('--x', x.toFixed(2))
    glowCardWrapper.value.style.setProperty(
      '--xp',
      (x / window.innerWidth).toFixed(2)
    )

    glowCardWrapper.value.style.setProperty('--y', y.toFixed(2))
    glowCardWrapper.value.style.setProperty(
      '--yp',
      (y / window.innerHeight).toFixed(2)
    )
  }
}

const leaveWrapper = () => {
  if (glowCardWrapper.value) {
    glowCardWrapper.value.style.setProperty('--x', '0')
    glowCardWrapper.value.style.setProperty('--y', '0')
  }
}

const initialVariables = () => {
  if (glowCardWrapper.value) {
    glowCardWrapper.value.addEventListener('pointermove', syncPointer)
    glowCardWrapper.value.addEventListener('pointerleave', leaveWrapper)
  }
}

watch(
  () => hue,
  () => {
    nextTick(() => {
      glowCardWrapper.value?.style.setProperty('--hue', hue.toString())
    })
  },
  {
    deep: true,
    immediate: true
  }
)
watch(
  () => size,
  () => {
    nextTick(() => {
      glowCardWrapper.value?.style.setProperty('--size', size.toString())
    })
  },
  {
    deep: true,
    immediate: true
  }
)
watch(
  () => border,
  () => {
    nextTick(() => {
      glowCardWrapper.value?.style.setProperty('--border', border.toString())
    })
  },
  {
    deep: true,
    immediate: true
  }
)
watch(
  () => radius,
  () => {
    nextTick(() => {
      glowCardWrapper.value?.style.setProperty('--radius', radius.toString())
    })
  },
  {
    deep: true,
    immediate: true
  }
)

onMounted(() => {
  initialVariables()
})
</script>

<style scoped>
.sui-glow-card-wrapper {
  --backdrop: hsl(0 0% 60% / 0.12);
  --radius: 12;
  --border: 2;
  --backup-border: var(--backdrop);
  --size: 200;
  --hue: 120;
}
</style>
```

::

`/components/stunning/GlowyCard.vue`

::CodeCollapse

```vue
<template>
  <section class="sui-glow-card" data-glow>
    <div data-glow></div>
    <slot />
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
.sui-glow-card:first-of-type {
  --base: 80;
  --spread: 500;
  --outer: 1;
}
.sui-glow-card:last-of-type {
  --outer: 1;
  --base: 220;
  --spread: 200;
}

.sui-glow-card {
  position: relative;
  border-radius: calc(var(--radius) * 1px);
  box-shadow: 0 1rem 2rem -1rem black;
  backdrop-filter: blur(calc(var(--cardblur, 5) * 1px));
}

/* Glow specific styles, if set the --hue a constant, it's a constant glow */
/*  --hue: calc(var(--base) + (var(--xp, 0) * var(--spread, 0))); */
[data-glow] {
  --border-size: calc(var(--border, 2) * 1px);
  --spotlight-size: calc(var(--size, 150) * 1px);
  background-image: radial-gradient(
    var(--spotlight-size) var(--spotlight-size) at calc(var(--x, 0) * 1px) calc(
        var(--y, 0) * 1px
      ),
    hsl(
      var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(
          var(--lightness, 70) * 1%
        ) / var(--bg-spot-opacity, 0.1)
    ),
    transparent
  );
  background-color: var(--backdrop, transparent);
  background-size: calc(100% + (2 * var(--border-size))) calc(
      100% + (2 * var(--border-size))
    );
  background-position: 50% 50%;
  background-attachment: fixed;
  border: var(--border-size) solid var(--backup-border);
  position: relative;
  touch-action: none;
}

[data-glow]::before,
[data-glow]::after {
  pointer-events: none;
  content: '';
  position: absolute;
  inset: calc(var(--border-size) * -1);
  border: var(--border-size) solid transparent;
  border-radius: calc(var(--radius) * 1px);
  background-attachment: fixed;
  background-size: calc(100% + (2 * var(--border-size))) calc(
      100% + (2 * var(--border-size))
    );
  background-repeat: no-repeat;
  background-position: 50% 50%;
  mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
  mask-clip: padding-box, border-box;
  mask-composite: intersect;
}

/* This is the emphasis light */
[data-glow]::before {
  background-image: radial-gradient(
    calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
    hsl(
      var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(
          var(--lightness, 50) * 1%
        ) / var(--border-spot-opacity, 1)
    ),
    transparent 100%
  );
  filter: brightness(2);
}
/* This is the spotlight */
[data-glow]::after {
  background-image: radial-gradient(
    calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at calc(
        var(--x, 0) * 1px
      ) calc(var(--y, 0) * 1px),
    hsl(0 100% 100% / var(--border-light-opacity, 1)),
    transparent 100%
  );
}
[data-glow] [data-glow] {
  position: absolute;
  inset: 0;
  will-change: filter;
  opacity: var(--outer, 1);
}
[data-glow] > [data-glow] {
  border-radius: calc(var(--radius) * 1px);
  border-width: calc(var(--border-size) * 20);
  filter: blur(calc(var(--border-size) * 10));
  background: none;
  pointer-events: none;
}
[data-glow] > [data-glow]::before {
  inset: -10px;
  border-width: 10px;
}
[data-glow] [data-glow] {
  border: none;
}
[data-glow] :is(a, button) {
  border-radius: calc(var(--radius) * 1px);
  border: var(--border-size) solid transparent;
}
[data-glow] :is(a, button) [data-glow] {
  background: none;
}
[data-glow] :is(a, button) [data-glow]::before {
  inset: calc(var(--border-size) * -1);
  border-width: calc(var(--border-size) * 1);
}
</style>
```

::

::

## Inspiration

-

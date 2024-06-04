---
navigation.title: Sticky Stack Blocks
title: Sticky Stack Blocks
description: Sticky stack blocks are commonly used as visually fixed elements to introduce key features on a website while scrolling.
category: scroll, blocks, features
---

## Preview

<Playground url="/playground/sticky-stack-blocks" aspect="1/1"></Playground>

## Installation

### Copy the source code

`/components/stunning/StickyStackBlock.vue`

<CollapseCodeWrapper>

```vue
<template>
  <div
    class="sui-sticky-stack sticky top-0 min-h-[100vh] flex-center flex-col w-full"
    ref="stickyCardWrapper"
  >
    <div class="sui-sticky-stack-card w-full mx-auto flex-center flex-col">
      <slot name="card" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    maxHeight?: number
  }>(),
  {
    maxHeight: 90
  }
)

const stickyCardWrapper = ref<HTMLDivElement | null>(null)

watch(
  () => props.maxHeight,
  (h) => {
    nextTick(() => {
      stickyCardWrapper.value?.style.setProperty('--max-height', `${h}vh`)
    })
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<style scoped>
.sui-sticky-stack {
  --max-height: 90vh;
}

.sui-sticky-stack-card {
  height: var(--max-height);
}
</style>
```

</CollapseCodeWrapper>

## Usage

```vue
<template>
  <StickyStackBlock :maxHeight="80">
    <template v-slot:card>
      <div
        class="h-full bg-gradient-to-br from-emerald-700 to-emerald-300 border-2 border-emerald-600 rounded-2xl flex"
      >
        <div class="w-1/2 p-16 flex gap-2 justify-center flex-col">
          <ri:magic-line class="w-8 h-8" />

          <h1 class="font-medium text-2xl">Section 1</h1>

          <p class="line-clamp-5 text-secondary-foreground">
            {{ paragraphPlaceholder }}
          </p>
        </div>
        <div
          class="w-1/2 bg-neutral-950/80 flex-center rounded-tr-2xl rounded-br-2xl"
        >
          <div class="w-64">
            <div
              class="relative flex flex-col h-full space-y-5 overflow-hidden rounded-2xl bg-white/5 p-8 shadow-xl shadow-black/5"
            >
              <div class="h-24 rounded-lg bg-white/5"></div>
              <div class="space-y-3">
                <div class="h-3 w-3/5 rounded-lg bg-white/5"></div>
                <div class="h-3 w-4/5 rounded-lg bg-white/10"></div>
                <div class="h-3 w-2/5 rounded-lg bg-white/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </StickyStackBlock>
</template>
```

## Props

| Prop      | Type   | Description   | Default |
| :-------- | :----- | :------------ | :------ |
| maxHeight | number | the vh height | 90      |

## Inspiration

- [https://www.superlist.com/](https://www.superlist.com/)
- [https://www.limitless.ai/](https://www.limitless.ai/)

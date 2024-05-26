# Marquee

An infinite scrolling component that can be used to display text, images, or cards.

## Preview

<!-- <Playground url="https://stunning-dev.vercel.app/components/text-reveal"></Playground> -->

<Playground url="/playground/marquee"></Playground>

## Installation

### Prerequisites

This component requires animation to be added in the `tailwind.config.ts` file for Tailwind CSS.

```ts
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' }
        }
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
      }
    }
  }
}
```

### Copy the source code

<CollapseCodeWrapper>

```vue
<!-- /components/Marquee.vue -->
<template>
  <div
    v-bind="props"
    :class="[
      'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
      { 'flex-row': !vertical, 'flex-col': vertical }
    ]"
  >
    <div
      v-for="i in repeat"
      :key="i"
      :class="[
        'flex shrink-0 justify-around [gap:var(--gap)]',
        {
          'animate-marquee flex-row': !vertical,
          'animate-marquee-vertical flex-col': vertical,
          'group-hover:[animation-play-state:paused]': pauseOnHover,
          '![animation-direction:reverse]': reverse
        }
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  reverse: {
    type: Boolean,
    default: false
  },
  pauseOnHover: {
    type: Boolean,
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  },
  repeat: {
    type: Number,
    default: 4
  }
})
</script>

<style scoped></style>
```

</CollapseCodeWrapper>

## Usage

<CollapseCodeWrapper>

```vue
<template>
  <div
    class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-20 md:shadow-xl"
  >
    <Marquee pauseOnHover class="[--duration:20s]">
      <template v-for="item in firstRow">
        <figure
          class="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        >
          <div class="flex flex-row items-center gap-2">
            <img
              class="rounded-full"
              width="32"
              height="32"
              alt=""
              :src="item.img"
            />
            <div class="flex flex-col">
              <figcaption class="text-sm font-medium dark:text-white">
                {{ item.name }}
              </figcaption>
              <p class="text-xs font-medium dark:text-white/40">
                {{ item.username }}
              </p>
            </div>
          </div>
          <blockquote class="mt-2 text-sm">{{ item.body }}</blockquote>
        </figure>
      </template>
    </Marquee>
    <Marquee reverse pauseOnHover class="[--duration:20s]">
      <template v-for="item in secondRow">
        <figure
          class="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        >
          <div class="flex flex-row items-center gap-2">
            <img
              class="rounded-full"
              width="32"
              height="32"
              alt=""
              :src="item.img"
            />
            <div class="flex flex-col">
              <figcaption class="text-sm font-medium dark:text-white">
                {{ item.name }}
              </figcaption>
              <p class="text-xs font-medium dark:text-white/40">
                {{ item.username }}
              </p>
            </div>
          </div>
          <blockquote class="mt-2 text-sm">{{ item.body }}</blockquote>
        </figure>
      </template>
    </Marquee>
    <div
      class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
    ></div>
    <div
      class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
    ></div>
  </div>
</template>

<script lang="ts" setup>
const reviews = [
  {
    name: 'Jack',
    username: '@jack',
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: 'https://avatar.vercel.sh/jack'
  },
  {
    name: 'Jill',
    username: '@jill',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: 'https://avatar.vercel.sh/jill'
  },
  {
    name: 'John',
    username: '@john',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/john'
  },
  {
    name: 'Jane',
    username: '@jane',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jane'
  },
  {
    name: 'Jenny',
    username: '@jenny',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jenny'
  },
  {
    name: 'James',
    username: '@james',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/james'
  }
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)
</script>
```

</CollapseCodeWrapper>

## Examples

### Vertical

<Playground url="/playground/marquee-vertical"></Playground>

## Props

| Prop         | Type    | Description                                                                  | Default |
| :----------- | :------ | :--------------------------------------------------------------------------- | :------ |
| reverse      | Boolean | Whether or not to reverse the direction of the marquee.                      | false   |
| pauseOnHover | Boolean | Whether or not to pause the marquee when the user hovers over the component. | false   |
| vertical     | Boolean | Whether or not to display the marquee vertically.                            | false   |
| repeat       | Number  | The number of times to repeat the content.                                   | 1       |

## Inspiration

- [https://midday.ai/](https://midday.ai/)

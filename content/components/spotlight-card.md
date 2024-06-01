---
navigation.title: Spotlight Card
title: Spotlight Card
description: Typically used to display dynamic text changes in the Hero Section.
category: card, feature, overview, hover
---

## Preview

<Playground url="/playground/spotlight-card"></Playground>

## Usage

```vue
<template>
  <SpotlightCard>
    <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
      <ri:vip-crown-line class="w-8 h-8" />

      <h1 class="font-medium text-2xl">Hover me</h1>

      <p class="line-clamp-4 text-neon-p">
        {{ paragraphPlaceholder }}
      </p>
    </div>
  <SpotlightCard>
</template>
```

## Props

| Prop  | Type   | Description                    | Default                  |
| :---- | :----- | :----------------------------- | :----------------------- |
| color | string | The linear color stops's color | rgba(255, 255, 255, 0.1) |
| size  | number | The Spotlight circle size      | 300                      |

## Inspiration

-

---
navigation.title: Grid Pattern
title: Grid Pattern
description: A background grid pattern made with SVGs, fully customizable using Tailwind CSS.
category: background, hero, pattern
---

::code-group

::div{label="Preview"}
<Playground url="/playground/grid-pattern"></Playground>
::

```vue [Code]
<template>
  <GridPattern
    :width="20"
    :height="20"
    :x="-1"
    :y="-1"
    class="[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
  />
</template>
```

::

## Props

| Prop            | Type             | Description                                   | Default |
| :-------------- | :--------------- | :-------------------------------------------- | :------ |
| width           | string \/ number | Width of the grid pattern                     | 40      |
| height          | string \/ number | Height of the grid pattern                    | 40      |
| x               | string \/ number | X offset of the pattern                       | -1      |
| y               | string \/ number | Y offset of the pattern                       | -1      |
| squares         | number[][]       | X Y coordinates of filled squares as 2D array | null    |
| strokeDasharray | string \/ number | Stroke dash array for the pattern             | 1       |

## Inspiration

-

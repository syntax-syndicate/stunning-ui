---
navigation.title: Dot Pattern
title: Dot Pattern
description: A background dot pattern made with SVGs, fully customizable using Tailwind CSS.
category: background, hero, pattern
---

::code-group

::div{label="Preview"}
<Playground url="/playground/dot-pattern"></Playground>
::

```vue [Code]
<template>
  <DotPattern
    :width="20"
    :height="20"
    :cx="1"
    :cy="1"
    :cr="1"
    class="[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
  />
</template>
```

::

## Props

| Prop   | Type             | Description               | Default |
| :----- | :--------------- | :------------------------ | :------ |
| width  | string \/ number | Width of the dot pattern  | 16      |
| height | string \/ number | Height of the dot pattern | 16      |
| x      | string \/ number | X position of the dot     | 0       |
| y      | string \/ number | Y position of the dot     | 0       |
| cx     | string \/ number | X position of the circle  | 1       |
| cy     | string \/ number | Y position of the dot     | 1       |
| cr     | string \/ number | Radius of the circle      | 1       |

## Inspiration

-

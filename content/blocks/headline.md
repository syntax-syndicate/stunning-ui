---
navigation.title: Headline
title: Headline
description: A prominent top area with a bold headline that captures the visitor’s attention by communicating the main message or value proposition.
category: features, headline
---

The `Headline` component is consisting of a `section`, `title`, `description` and `key points`.

## Minimal

::code-group

::div{label="Preview"}
<Playground url="/landing/headline" aspect="5/2"></Playground>
::

```vue [Code]

```

::

## Custom Section with `Badge`

::code-group

::div{label="Preview"}
<Playground url="/landing/headline/HeadlineWithBadge" aspect="5/2"></Playground>
::

```vue [Code]

```

::

## Custom Section with `Icon`

::code-group

::div{label="Preview"}
<Playground url="/landing/headline/HeadlineWithIcon" aspect="5/2"></Playground>
::

```vue [Code]

```

::

## Custom Title

::code-group

::div{label="Preview"}
<Playground url="/landing/headline/HeadlineCustomTitle" aspect="5/2"></Playground>
::

```vue [Code]

```

::

## Align Left

::code-group

::div{label="Preview"}
<Playground url="/landing/headline/HeadlineAlignLeft" aspect="5/2"></Playground>
::

```vue [Code]

```

::

## Props

| Prop        | Type              | Description                | Default  |
| :---------- | :---------------- | :------------------------- | :------- |
| align       | left/center/right | The text align of headline | 'center' |
| section     | String/Component  | The headline section       | ''       |
| title       | String/Component  | The headline title         | ''       |
| description | String            | The headline description   | ''       |

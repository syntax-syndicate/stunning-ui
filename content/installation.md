---
navigation.title: Installation
title: Installation
description: Install and configure Stunning UI Components
category: ''
---

::steps

### Overview

Stunning UI Components are designed specifically for `Vue` and developed using `TypeScript`. They utilize `TailwindCSS` for styling and `gsap` along with CSS for animations.

While Stunning UI Components seamlessly integrate with the shadcn ecosystem built on top of `shadcn-vue`, shadcn is not mandatory for their use, though some examples may include shadcn components.

### Prerequisites

To get stared, ensure you have the following dependencies installed:

```bash
pnpm i -D tailwindcss clsx tailwind-merge
```

Next, integrate the utility function by add the follwing code to your project:

```ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### Component installation

You're ready to go! Visit any component page and follow the provided instructions.

Stylish UI components can be customized to your liking. Simply copy the source code and integrate it into your project for a polished look, without the hassle of creating animations.

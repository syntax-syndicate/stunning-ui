---
navigation.title: FAQ
title: FAQ
description: The FAQ section on a landing page provides answers to common questions to help visitors quickly find important information and resolve their queries.
category: faq, cta, accordion
---

## Minimal

::code-group

::div{label="Preview"}
<Playground url="/landing/faq" aspect="5/2"></Playground>
::

```vue [Code]
<template>
  <main class="w-screen h-screen bg-dots">
    <section id="faq" class="container md:w-[700px] py-24 sm:py-32">
      <div class="text-center mb-8">
        <h2
          class="text-3xl text-primary font-semibold text-center mb-2 tracking-wider"
        >
          Frequently Asked Questions
        </h2>
        <p
          class="text-lg text-muted-foreground text-center mb-2 tracking-wider"
        >
          Everything you need to know.
        </p>
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="{ question, answer, value } in FAQList"
          :key="value"
          :value="value"
        >
          <AccordionTrigger class="text-left">
            {{ question }}
          </AccordionTrigger>

          <AccordionContent>{{ answer }}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </main>
</template>

<script lang="ts" setup>
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { FAQList } from '~/lib/constants'
</script>

<style scoped></style>
```

::

## Cross Icon

::code-group

::div{label="Preview"}
<Playground url="/landing/faq/FAQCross" aspect="5/2"></Playground>
::

```vue [Code]
<template>
  <main class="w-screen h-screen bg-dots">
    <section id="faq" class="container md:w-[700px] py-24 sm:py-32">
      <div class="text-center mb-8">
        <h2
          class="text-3xl text-primary font-semibold text-center mb-2 tracking-wider"
        >
          Frequently Asked Questions
        </h2>
        <p
          class="text-lg text-muted-foreground text-center mb-2 tracking-wider"
        >
          Everything you need to know.
        </p>
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="{ question, answer, value } in FAQList"
          :key="value"
          :value="value"
        >
          <AccordionTrigger variant="cross" class="text-left">
            {{ question }}
          </AccordionTrigger>

          <AccordionContent>{{ answer }}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </main>
</template>

<script lang="ts" setup>
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { FAQList } from '~/lib/constants'
</script>

<style scoped></style>
```

::

## Left Aligned

::code-group

::div{label="Preview"}
<Playground url="/landing/faq/FAQDoubleColumnLayout" aspect="5/2"></Playground>
::

```vue [Code]
<template>
  <NuxtLayout name="playground" class="bg-dots">
    <main class="w-screen h-screen">
      <section
        id="faq"
        class="container px-24 py-24 sm:py-32 sm:px-16 grid grid-cols-2 gap-8 w-full"
      >
        <div class="mb-8">
          <h2 class="text-3xl text-primary font-semibold mb-2 tracking-wider">
            Frequently Asked Questions
          </h2>
          <p class="text-lg text-muted-foreground mb-2 tracking-wider">
            Everything you need to know.
          </p>
        </div>

        <Accordion type="single" collapsible>
          <AccordionItem
            v-for="{ question, answer, value } in FAQList"
            :key="value"
            :value="value"
          >
            <AccordionTrigger variant="cross" class="text-left">
              {{ question }}
            </AccordionTrigger>

            <AccordionContent>{{ answer }}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { FAQList } from '~/lib/constants'
</script>

<style scoped></style>
```

::

---

::MAlert{type=info icon=lucide:lightbulb}
More coming soon, stay tuned.
::

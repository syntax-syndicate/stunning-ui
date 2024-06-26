<template>
  <main class="w-screen h-screen bg-dots">
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

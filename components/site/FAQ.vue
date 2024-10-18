<template>
  <!-- FAQ -->
  <section class="container max-w-screen-md py-24 sm:py-32">
    <LandingHeadline
      section="FAQ"
      title="Frequently Asked Questions"
      description="Everything you need to know."
    />
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
</template>

<script lang="ts" setup>
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { FAQList as defaultFAQList } from '@/lib/constants/landing'

interface FAQItem {
  question: string
  answer: string
  value: string
}

const FAQList: FAQItem[] = [
  {
    question: 'What is Stunning UI?',
    answer: `Stunning UI is a collection of interactive Tailwind CSS components, blocks, templates built
      for Vue and Nuxt, help your build stunning websites fast.`,
    value: 'item-0.1'
  },

  {
    question: 'Which frameworks are supported?',
    answer: `You can use any framework that supports Vue, Nuxt.`,
    value: 'item-0.2'
  },

  ...defaultFAQList
]
</script>

<style scoped></style>

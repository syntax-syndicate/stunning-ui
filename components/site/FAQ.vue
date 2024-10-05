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

interface FAQItem {
  question: string
  answer: string
  value: string
}

const FAQList: FAQItem[] = [
  {
    question: 'What is Stunning UI Pro?',
    answer: `Stunning UI is a collection of interactive Tailwind CSS components, blocks, templates built
      for Vue and Nuxt, help your build stunning websites fast.`,
    value: 'item-1'
  },

  {
    question: 'Which frameworks are supported?',
    answer: `You can use any framework that supports Vue, Nuxt etc.`,
    value: 'item-2'
  },

  {
    question: 'Is this a one time payment or a subscription？',
    answer:
      'This is a one time payment. Pay once to get access to the entire pro blocks/templates + get lifetime updates',
    value: 'item-3'
  },

  {
    question: 'How do I access after purchasing？',
    answer: `After purchasing, you will be redirected to a page where you will be
askea to sign up with your license key. After which, you will be able to
access everything on the site.`,
    value: 'item-4'
  },

  {
    question: 'Do you offer refunds?',
    answer: `Due to the nature of digital products, we do not offer refunds. If you have any questions, please contact us at support@stunning.dev`,
    value: 'item-5'
  }
]
</script>

<style scoped></style>

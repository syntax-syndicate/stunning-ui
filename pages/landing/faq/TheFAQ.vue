<template>
  <section class="container max-w-screen-md py-24 sm:py-32">
    <LandingHeadline
      section="FAQs"
      title="Frequently Asked Questions"
      description="Everything you need to know."
    />

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

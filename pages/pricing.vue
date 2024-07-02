<template>
  <div class="bg-background w-full h-screen">
    <ClientOnly>
      <SiteHeader />
    </ClientOnly>
    <main
      class="container mx-auto max-w-screen-2xl flex-center flex-col mt-20 mb-40"
    >
      <section class="container max-w-screen-lg py-24 sm:py-32">
        <LandingHeadline
          section="Pricing"
          title="One-time Purchase, Lifetime Access"
          description="Get lifetime access to our Stunning UI component library, along with any future updates, for a one-time price. Create beautiful websites with our intuitive blocks."
        />
        <GlowyCardWrapper
          class="grid grid-cols-3 gap-4 h-full mt-16"
          :size="320"
        >
          <GlowyCard
            class="rounded-lg p-6 lg:p-4 flex flex-col gap-2"
            v-for="{
              icon,
              title,
              popular,
              price,
              originalPrice,
              description,
              buttonText,
              benefitList
            } in plans"
          >
            <div class="relative h-full px-4 pb-2 pt-4 text-neon-wb">
              <div class="pb-2">
                <Icon :name="icon" class="text-brand-500 w-6 h-6" />
              </div>
              <div class="pb-2 flex items-center justify-between">
                <span class="font-semibold text-lg">
                  {{ title }}
                </span>
                <Badge variant="brand" class="font-light" v-if="popular">
                  Most Popular
                </Badge>
              </div>

              <div class="pt-2 pb-6 text-sm">{{ description }}</div>

              <div>
                <span class="text-3xl font-bold">${{ price }}</span>
                <span class="text-3xl text-muted-foreground line-through ml-2">
                  ${{ originalPrice }}
                </span>
              </div>

              <div class="my-8">
                <Button :variant="'brand'" class="w-full">
                  {{ buttonText }}
                </Button>
              </div>

              <div class="flex">
                <div class="space-y-4">
                  <span
                    v-for="benefit in benefitList"
                    :key="benefit"
                    class="flex items-center gap-2 text-sm dark:text-muted-foreground"
                  >
                    <Icon name="lucide:check" class="text-brand-500" />
                    {{ benefit }}
                  </span>
                </div>
              </div>
            </div>
          </GlowyCard>
        </GlowyCardWrapper>
      </section>

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
    </main>
    <SiteFooter />
  </div>
</template>

<script lang="ts" setup>
import GlowyCardWrapper from '~/components/stunning/GlowyCard/GlowyCardWrapper.vue'
import GlowyCard from '~/components/stunning/GlowyCard/GlowyCard.vue'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

interface PlanProps {
  icon: string
  title: string
  popular: boolean
  price: number
  originalPrice: number
  description: string
  buttonText: string
  benefitList: string[]
}

const plans: PlanProps[] = [
  {
    icon: 'ri:user-line',
    title: 'Pro',
    popular: false,
    price: 49,
    originalPrice: 99,
    description: 'Includes 1 license, Perfect for individuals.',
    buttonText: 'Get lifetime Access',
    benefitList: [
      '1 user license',
      '30+ components (100 expected)',
      '50+ blocks (300 expected)',
      'Access to all blocks/templates',
      'Commercial License Only',
      'Lifetime access/updates',
      'Use for unlimited projects',
      'Request Components & blocks',
      'Basic support'
    ]
  },
  {
    icon: 'ri:team-line',
    title: 'Pro Teams',
    popular: true,
    price: 199,
    originalPrice: 299,
    description:
      'Includes up to 5 licenses, Ideal for small teams, startups and agencies.',
    buttonText: 'Get lifetime Access',
    benefitList: [
      '5 user license',
      '30+ components (100 expected)',
      '50+ blocks (300 expected)',
      'Access to all blocks/templates',
      'Commercial License Only',
      'Lifetime access/updates',
      'Use for unlimited projects',
      'Request Components & blocks',
      'Priority support'
    ]
  },
  {
    icon: 'ri:building-line',
    title: 'Pro Enterprise',
    popular: false,
    price: 699,
    originalPrice: 999,
    description:
      'Includes up to 25 licenses, suited for large organizations and companies.',
    buttonText: 'Get lifetime Access',
    benefitList: [
      'Up to 25 team member',
      '30+ components (100 expected)',
      '50+ blocks (300 expected)',
      'Access to all blocks/templates',
      'Commercial License Only',
      'Lifetime access/updates',
      'Use for unlimited projects',
      'Request Components & blocks',
      'Priority support'
    ]
  }
]

interface FAQItem {
  question: string
  answer: string
  value: string
}

const FAQList: FAQItem[] = [
  {
    question: 'What is Stunning UI Pro?',
    answer: `Stunning UI is a collection of interactive Tailwind CSS components, blocks, templates built
      for Vue.js/React, help your build stunning websites fast.`,
    value: 'item-1'
  },

  {
    question: 'Which frameworks are supported?',
    answer: `You can use any framework that supports React/Vue. Next.js, Astro, Remix, Gatsby, Nuxt.js etc.`,
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

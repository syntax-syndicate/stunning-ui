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
          title="Get lifetime access"
          description="Create stunning websites using stunning blocks, Save hours & money!"
        />
        <GlowyCardWrapper
          class="grid grid-cols-3 gap-4 h-full mt-8"
          :size="320"
        >
          <GlowyCard
            class="rounded-lg p-6 lg:p-4 flex flex-col gap-2"
            v-for="{
              title,
              popular,
              price,
              originalPrice,
              description,
              buttonText,
              benefitList
            } in plans"
          >
            <div class="relative h-full px-4 pb-2 pt-4 text-neon-p">
              <div class="pb-2 flex items-center justify-between">
                <span>
                  {{ title }}
                </span>
                <Badge variant="brand" class="font-light" v-if="popular"
                  >Most Popular</Badge
                >
              </div>

              <div class="pb-4">{{ description }}</div>

              <div>
                <span class="text-3xl font-bold">${{ price }}</span>
                <span class="text-3xl text-muted-foreground line-through ml-2">
                  ${{ originalPrice }}
                </span>
              </div>

              <div class="my-8">
                <Button :variant="popular ? 'brand' : 'default'" class="w-full">
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
    title: 'Pro',
    popular: false,
    price: 49,
    originalPrice: 129,
    description: 'Perfect for individuals.',
    buttonText: 'Get lifetime Access',
    benefitList: [
      '1 developer',
      '50+ blocks (300 expected)',
      '2 Premium templates （5 expected）',
      'Commercial License Only',
      'Lifetime access/updates',
      'Use for unlimited projects',
      'Request Components & blocks',
      'Basic support'
    ]
  },
  {
    title: 'Pro Teams',
    popular: true,
    price: 299,
    originalPrice: 499,
    description: 'Ideal for small teams, startups.',
    buttonText: 'Get lifetime Access',
    benefitList: [
      'Up to 10 team member',
      '50+ blocks (300 expected)',
      '2 Premium templates （5 expected）',
      'Commercial License Only',
      'Lifetime access/updates',
      'Use for unlimited projects',
      'Request Components & blocks',
      'Priority support'
    ]
  },
  {
    title: 'Pro Enterprise',
    popular: false,
    price: 799,
    originalPrice: 1199,
    description: 'Designed for large organizations.',
    buttonText: 'Contact US',
    benefitList: [
      'Up to 25 team member',
      '50+ blocks (300 expected)',
      '2 Premium templates （5 expected）',
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
    question: 'What is Stunning UI Pro',
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

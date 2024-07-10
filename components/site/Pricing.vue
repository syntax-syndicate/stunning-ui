<template>
  <!-- Pricing -->
  <section class="container max-w-screen-lg py-24 sm:py-32">
    <LandingHeadline
      section="Pricing"
      title="One-time Purchase, Lifetime Access"
      description="Get lifetime access to our Stunning UI component library, along with any future updates, for a one-time price. Create beautiful websites with our intuitive blocks."
    />
    <GlowyCardWrapper class="grid grid-cols-3 gap-4 h-full mt-16" :size="320">
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
          buttonLink,
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
            <Button
              :variant="'brand'"
              class="w-full"
              @click="
                navigateTo(buttonLink, {
                  external: true
                })
              "
            >
              {{ buttonText }}
            </Button>
          </div>

          <div class="flex">
            <div class="space-y-4">
              <span
                v-for="(benefit, index) in benefitList"
                :key="benefit"
                class="flex items-center gap-2 text-sm"
                :class="
                  index === 0 ? 'text-neon' : 'dark:text-muted-foreground'
                "
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
</template>

<script lang="ts" setup>
import GlowyCardWrapper from '~/components/stunning/GlowyCard/GlowyCardWrapper.vue'
import GlowyCard from '~/components/stunning/GlowyCard/GlowyCard.vue'

interface PlanProps {
  icon: string
  title: string
  popular: boolean
  price: number
  originalPrice: number
  description: string
  buttonText: string
  buttonLink: string
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
    buttonLink:
      'https://stunning-ui.lemonsqueezy.com/buy/b5da2b4c-e7b3-48e5-a18b-714c4e01f289',
    benefitList: [
      'Vue Only',
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
    title: 'Pro Plus',
    popular: true,
    price: 69,
    originalPrice: 139,
    description: 'Includes 1 license, Perfect for individuals.',
    buttonText: 'Get lifetime Access',
    buttonLink: '',
    benefitList: [
      'Vue + React',
      '1 user license',
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
    title: 'Pro Teams',
    popular: false,
    price: 249,
    originalPrice: 349,
    description:
      'Includes up to 5 licenses, Ideal for small teams, startups and agencies.',
    buttonText: 'Get lifetime Access',
    buttonLink: '',
    benefitList: [
      'Vue + React',
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
  }
  // {
  //   icon: 'ri:building-line',
  //   title: 'Pro Enterprise',
  //   popular: false,
  //   price: 699,
  //   originalPrice: 999,
  //   description:
  //     'Includes up to 25 licenses, suited for large organizations and companies.',
  //   buttonText: 'Get lifetime Access',
  //   benefitList: [
  //     'Up to 25 team member',
  //     '30+ components (100 expected)',
  //     '50+ blocks (300 expected)',
  //     'Access to all blocks/templates',
  //     'Commercial License Only',
  //     'Lifetime access/updates',
  //     'Use for unlimited projects',
  //     'Request Components & blocks',
  //     'Priority support'
  //   ]
  // }
]
</script>

<style scoped></style>

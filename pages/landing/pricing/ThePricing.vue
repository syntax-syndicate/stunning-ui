<template>
  <section class="container max-w-screen-lg py-24 sm:py-32">
    <h2
      class="text-5xl font-semibold text-primary text-center mb-4 tracking-wider"
    >
      Pricing
    </h2>

    <h2 class="text-base text-center mb-16">
      <p>Free forever. Upgrade for unlimited tasks,</p>
      <p>better security, and exclusive features.</p>
    </h2>

    <div class="grid grid-cols-3 gap-8 lg:gap-4">
      <Card
        v-for="{
          title,
          popular,
          price,
          description,
          buttonText,
          benefitList
        } in plans"
        :key="title"
        :class="
          cn(
            popular
              ? `drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-emerald-500 scale-[1.1] after:bg-radial-card`
              : '-mx-2'
          )
        "
      >
        <CardHeader>
          <CardTitle class="pb-2 flex items-center justify-between">
            <span>
              {{ title }}
            </span>
            <Badge variant="brand" class="font-light" v-if="popular"
              >Most Popular</Badge
            >
          </CardTitle>

          <CardDescription class="pb-4">{{ description }}</CardDescription>

          <div>
            <span class="text-3xl font-bold">${{ price }}</span>
            <span class="text-muted-foreground"> /month</span>
          </div>
        </CardHeader>

        <CardContent class="flex">
          <div class="space-y-4">
            <span
              v-for="benefit in benefitList"
              :key="benefit"
              class="flex items-center gap-2 text-sm dark:text-muted-foreground"
            >
              <lucide:check class="text-brand-500" />
              {{ benefit }}
            </span>
          </div>
        </CardContent>

        <CardFooter>
          <Button :variant="popular ? 'brand' : 'default'" class="w-full">
            {{ buttonText }}
          </Button>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>

<script setup lang="ts">
import { cn } from '~/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

interface PlanProps {
  title: string
  popular: boolean
  price: number
  description: string
  buttonText: string
  benefitList: string[]
}

const plans: PlanProps[] = [
  {
    title: 'Free',
    popular: false,
    price: 0,
    description: 'Perfect for individuals.',
    buttonText: 'Get started for free',
    benefitList: [
      '1 team member',
      '1000 tasks and projects',
      '1GB storage',
      'Integrations',
      'Basic support'
    ]
  },
  {
    title: 'Premium',
    popular: true,
    price: 49,
    description: 'Ideal for small teams.',
    buttonText: 'Get starterd',
    benefitList: [
      'Up to 5 team member',
      'Unlimited tasks and projects',
      '8GB storage',
      'Integrations',
      'Priority support'
    ]
  },
  {
    title: 'Enterprise',
    popular: false,
    price: 129,
    description: 'Designed for large organizations.',
    buttonText: 'Contact US',
    benefitList: [
      'Unlimited team members',
      'Unlimited tasks and projects',
      '50GB storage',
      'Integrations',
      'Priority support'
    ]
  }
]
</script>

<style></style>

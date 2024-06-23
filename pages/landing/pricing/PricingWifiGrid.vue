<template>
  <NuxtLayout name="playground" class="bg-dots">
    <section
      class="container flex flex-col justify-center items-center py-24 sm:py-32"
    >
      <LandingHeadline
        section="Pricing"
        description="Free forever. Upgrade for unlimited tasks, better security, and exclusive features."
      >
        <template #title>
          <span class="text-muted-foreground">Simple, transparent pricing</span>
          <br />
          <span class="text-foreground">for everyone</span>
        </template>
      </LandingHeadline>

      <div class="w-full flex justify-center">
        <Tabs default-value="yearly" v-model="planType">
          <TabsList>
            <TabsTrigger value="yearly"> Yearly Billing </TabsTrigger>
            <TabsTrigger value="monthly"> Monthly Billing </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div
        class="relative flex flex-none flex-wrap justify-center items-end gap-8 lg:gap-4 h-min w-full mt-16"
      >
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
              'min-w-60 xl:min-w-80 rounded-2xl',
              popular &&
                `drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-emerald-500 after:bg-radial-card`
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
              <span class="text-3xl font-bold"
                >${{
                  planType === 'yearly'
                    ? (price * YEARLY_DISCOUNT).toFixed(0).toString()
                    : price
                }}</span
              >
              <span class="text-muted-foreground"> /month</span>
            </div>
          </CardHeader>

          <CardContent>
            <Button :variant="popular ? 'brand' : 'default'" class="w-full">
              {{ buttonText }}
            </Button>
          </CardContent>

          <CardFooter>
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
          </CardFooter>
        </Card>
      </div>
    </section>
  </NuxtLayout>
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
import { plans, YEARLY_DISCOUNT } from '@/lib/constants'

const planType = ref('yearly')
</script>

<style></style>

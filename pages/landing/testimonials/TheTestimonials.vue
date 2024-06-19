<template>
  <section class="container max-w-screen-lg py-24 sm:py-32">
    <LandingHeadlineBicolor
      section="Testimonials"
      description="Don't just take our word for it. Read what others say about Stunning UI."
    >
      <template #title>
        <span class="text-muted-foreground">Trusted by the experts,</span>
        <br />
        <span class="text-foreground">used by the leaders</span>
      </template>
    </LandingHeadlineBicolor>

    <Carousel
      :opts="{
        align: 'start'
      }"
      class="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto py-16"
    >
      <CarouselContent>
        <CarouselItem
          v-for="review in reviews"
          :key="review.name"
          class="md:basis-1/2 lg:basis-1/3"
        >
          <Card class="bg-muted/50 dark:bg-card">
            <CardContent class="pt-6 pb-0">
              <div class="flex gap-1 pb-6">
                <Icon
                  name="lucide:star"
                  class="size-4 fill-brand-500 text-brand-500"
                />
                <Icon
                  name="lucide:star"
                  class="size-4 fill-brand-500 text-brand-500"
                />
                <Icon
                  name="lucide:star"
                  class="size-4 fill-brand-500 text-brand-500"
                />
                <Icon
                  name="lucide:star"
                  class="size-4 fill-brand-500 text-brand-500"
                />
                <Icon
                  name="lucide:star"
                  class="size-4 fill-brand-500 text-brand-500"
                />
              </div>

              "{{ review.body }}"
            </CardContent>

            <CardHeader>
              <div class="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage :src="review.img" :alt="review.name" />
                  <AvatarFallback>user</AvatarFallback>
                </Avatar>

                <div class="flex flex-col">
                  <CardTitle class="text-lg">{{ review.name }}</CardTitle>
                  <CardDescription>{{ review.userName }}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </section>
</template>

<script lang="ts" setup>
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

import { reviews } from '~/lib/constants'

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)
</script>

<style scoped></style>

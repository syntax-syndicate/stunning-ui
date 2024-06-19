<template>
  <main class="w-screen h-screen">
    <section id="testimonials" class="container py-24 sm:py-32">
      <div class="text-left md:text-center mb-8">
        <span class="font-mono text-sm tracking-tight text-neon">
          Testimonials
        </span>
        <h2
          class="mt-4 text-left font-display text-2xl font-light leading-[1.125] text-muted-foreground md:text-center md:text-4xl lg:text-5xl"
        >
          Trusted by the experts, <br />
          <span class="text-foreground">used by the leaders</span>
        </h2>
        <p
          class="mx-auto mt-4 text-left leading-relaxed text-muted-foreground md:max-w-2xl md:text-center lg:mt-8"
        >
          Don't just take our word for it. Read what others say about Stunning
          UI.
        </p>
      </div>

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
  </main>
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

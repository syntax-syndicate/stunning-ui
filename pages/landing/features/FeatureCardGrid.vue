<template>
  <NuxtLayout name="playground" class="bg-dots">
    <section
      class="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col py-20"
    >
      <div class="text-left md:text-center mb-8">
        <span class="font-mono text-sm tracking-tight text-neon">
          Overview
        </span>
        <h2
          class="mt-4 text-left font-display text-2xl font-light leading-[1.125] md:text-center md:text-4xl lg:text-5xl"
        >
          Why choose our service?
        </h2>
        <p
          class="mx-auto mt-4 text-left leading-relaxed text-muted-foreground md:max-w-2xl md:text-center lg:mt-8 line-clamp-2"
        >
          {{ paragraphPlaceholder }}
        </p>
      </div>
      <GlowyDivider direction="top" class="lg:px-24" />
      <GlowyCardWrapper class="grid grid-cols-3 gap-4">
        <GlowyCard class="rounded-lg">
          <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
            <Icon name="ri:magic-line" class="w-8 h-8" />

            <h1 class="font-medium text-xl">Easy to use</h1>

            <p class="line-clamp-4 dark:text-muted-foreground">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </GlowyCard>
        <GlowyCard class="rounded-lg">
          <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
            <Icon name="ri:check-line" class="w-8 h-8" />

            <h1 class="font-medium text-xl">Reliable</h1>

            <p class="line-clamp-4 dark:text-muted-foreground">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </GlowyCard>
        <GlowyCard class="rounded-lg">
          <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
            <Icon name="ri:lock-2-line" class="w-8 h-8" />

            <h1 class="font-medium text-xl">Secure</h1>

            <p class="line-clamp-4 dark:text-muted-foreground">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </GlowyCard>
        <GlowyCard class="rounded-lg">
          <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
            <Icon name="ri:rocket-2-line" class="w-8 h-8" />

            <h1 class="font-medium text-xl">Fast</h1>

            <p class="line-clamp-4 dark:text-muted-foreground">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </GlowyCard>
        <GlowyCard class="rounded-lg">
          <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
            <Icon name="ri:money-dollar-circle-line" class="w-8 h-8" />

            <h1 class="font-medium text-xl">Affordable</h1>

            <p class="line-clamp-4 dark:text-muted-foreground">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </GlowyCard>
        <GlowyCard class="rounded-lg">
          <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
            <Icon name="ri:bar-chart-2-line" class="w-8 h-8" />

            <h1 class="font-medium text-xl">Scalable</h1>

            <p class="line-clamp-4 dark:text-muted-foreground">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </GlowyCard>
      </GlowyCardWrapper>
    </section>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import GlowyCardWrapper from '~/components/stunning/GlowyCard/GlowyCardWrapper.vue'
import GlowyCard from '~/components/stunning/GlowyCard/GlowyCard.vue'
import GlowyDivider from '~/components/stunning/GlowyDivider.vue'
import { paragraphPlaceholder } from '~/lib/constants'
</script>

<style scoped></style>

<template>
  <section class="container max-w-screen-lg py-24 sm:py-32">
    <div
      class="relative mx-auto px-4 sm:px-6 lg:px-8 gap-16 lg:gap-20 flex flex-col"
    >
      <LandingHeadlineBicolor
        section="Overview"
        title="Why choose our service?"
        description="Don't just take our word for it. Read what others say about Stunning UI."
      />
      <div class="grid grid-cols-3 gap-4">
        <div class="rounded p-6 lg:p-8 flex flex-col gap-x-2 gap-y-3">
          <Icon name="ri:magic-line" class="w-8 h-8" />

          <h1 class="font-medium text-xl">Easy to use</h1>

          <p class="line-clamp-2 dark:text-muted-foreground">
            {{ paragraphPlaceholder }}
          </p>

          <a
            href="#"
            class="group flex items-center gap-1 hover:dark:text-muted-foreground"
          >
            <span>Learn more</span>
            <Icon
              name="ri:arrow-right-line"
              class="w-4 h-4 ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </a>
        </div>
        <div class="rounded p-6 lg:p-8 flex flex-col gap-x-2 gap-y-3">
          <Icon name="ri:check-line" class="w-8 h-8" />

          <h1 class="font-medium text-xl">Reliable</h1>

          <p class="line-clamp-2 dark:text-muted-foreground">
            {{ paragraphPlaceholder }}
          </p>

          <a
            href="#"
            class="group flex items-center gap-1 hover:dark:text-muted-foreground"
          >
            <span>Learn more</span>
            <Icon
              name="ri:arrow-right-line"
              class="w-4 h-4 ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </a>
        </div>
        <div class="rounded p-6 lg:p-8 flex flex-col gap-x-2 gap-y-3">
          <Icon name="ri:lock-2-line" class="w-8 h-8" />

          <h1 class="font-medium text-xl">Secure</h1>

          <p class="line-clamp-2 dark:text-muted-foreground">
            {{ paragraphPlaceholder }}
          </p>

          <a
            href="#"
            class="group flex items-center gap-1 hover:dark:text-muted-foreground"
          >
            <span>Learn more</span>
            <Icon
              name="ri:arrow-right-line"
              class="w-4 h-4 ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </a>
        </div>
        <div class="rounded p-6 lg:p-8 flex flex-col gap-x-2 gap-y-3">
          <Icon name="ri:rocket-2-line" class="w-8 h-8" />

          <h1 class="font-medium text-xl">Fast</h1>

          <p class="line-clamp-2 dark:text-muted-foreground">
            {{ paragraphPlaceholder }}
          </p>

          <a
            href="#"
            class="group flex items-center gap-1 hover:dark:text-muted-foreground"
          >
            <span>Learn more</span>
            <Icon
              name="ri:arrow-right-line"
              class="w-4 h-4 ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </a>
        </div>
        <div class="rounded p-6 lg:p-8 flex flex-col gap-x-2 gap-y-3">
          <Icon name="ri:money-dollar-circle-line" class="w-8 h-8" />

          <h1 class="font-medium text-xl">Affordable</h1>

          <p class="line-clamp-2 dark:text-muted-foreground">
            {{ paragraphPlaceholder }}
          </p>

          <a
            href="#"
            class="group flex items-center gap-1 hover:dark:text-muted-foreground"
          >
            <span>Learn more</span>
            <Icon
              name="ri:arrow-right-line"
              class="w-4 h-4 ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </a>
        </div>
        <div class="rounded p-6 lg:p-8 flex flex-col gap-x-2 gap-y-3">
          <Icon name="ri:bar-chart-2-line" class="w-8 h-8" />

          <h1 class="font-medium text-xl">Scalable</h1>

          <p class="line-clamp-2 dark:text-muted-foreground">
            {{ paragraphPlaceholder }}
          </p>

          <a
            href="#"
            class="group flex items-center gap-1 hover:dark:text-muted-foreground"
          >
            <span>Learn more</span>
            <Icon
              name="ri:arrow-right-line"
              class="w-4 h-4 ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import GlowyCardWrapper from '~/components/stunning/GlowyCard/GlowyCardWrapper.vue'
import GlowyCard from '~/components/stunning/GlowyCard/GlowyCard.vue'
import GlowyDivider from '~/components/stunning/GlowyDivider.vue'
import { paragraphPlaceholder } from '~/lib/constants'
</script>

<style scoped></style>

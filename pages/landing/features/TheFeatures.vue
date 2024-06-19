<template>
  <section class="container max-w-screen-lg py-24 sm:py-32">
    <div
      class="relative mx-auto px-4 sm:px-6 lg:px-8 gap-16 lg:gap-20 flex flex-col"
    >
      <div class="text-center flex flex-col items-center">
        <Badge variant="brand">Overview</Badge>
        <h2
          class="my-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
        >
          Why choose our service?
        </h2>
        <div class="text-lg/8 text-gray-600 dark:text-gray-300 line-clamp-2">
          {{ paragraphPlaceholder }}
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div class="rounded p-6 lg:p-8 flex flex-col gap-x-2 gap-y-3">
          <ri:magic-line class="w-8 h-8" />

          <h1 class="font-medium text-xl">Easy to use</h1>

          <p class="line-clamp-2 dark:text-muted-foreground">
            {{ paragraphPlaceholder }}
          </p>

          <a
            href="#"
            class="group flex items-center gap-1 hover:dark:text-muted-foreground"
          >
            <span>Learn more</span>
            <ri:arrow-right-line
              class="w-4 h-4 ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </a>
        </div>
        <div class="rounded p-6 lg:p-8 flex flex-col gap-x-2 gap-y-3">
          <ri:check-line class="w-8 h-8" />

          <h1 class="font-medium text-xl">Reliable</h1>

          <p class="line-clamp-2 dark:text-muted-foreground">
            {{ paragraphPlaceholder }}
          </p>

          <a
            href="#"
            class="group flex items-center gap-1 hover:dark:text-muted-foreground"
          >
            <span>Learn more</span>
            <ri:arrow-right-line
              class="w-4 h-4 ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </a>
        </div>
        <div class="rounded p-6 lg:p-8 flex flex-col gap-x-2 gap-y-3">
          <ri:lock-2-line class="w-8 h-8" />

          <h1 class="font-medium text-xl">Secure</h1>

          <p class="line-clamp-2 dark:text-muted-foreground">
            {{ paragraphPlaceholder }}
          </p>

          <a
            href="#"
            class="group flex items-center gap-1 hover:dark:text-muted-foreground"
          >
            <span>Learn more</span>
            <ri:arrow-right-line
              class="w-4 h-4 ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </a>
        </div>
        <div class="rounded p-6 lg:p-8 flex flex-col gap-x-2 gap-y-3">
          <ri:rocket-2-line class="w-8 h-8" />

          <h1 class="font-medium text-xl">Fast</h1>

          <p class="line-clamp-2 dark:text-muted-foreground">
            {{ paragraphPlaceholder }}
          </p>

          <a
            href="#"
            class="group flex items-center gap-1 hover:dark:text-muted-foreground"
          >
            <span>Learn more</span>
            <ri:arrow-right-line
              class="w-4 h-4 ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </a>
        </div>
        <div class="rounded p-6 lg:p-8 flex flex-col gap-x-2 gap-y-3">
          <ri:money-dollar-circle-line class="w-8 h-8" />

          <h1 class="font-medium text-xl">Affordable</h1>

          <p class="line-clamp-2 dark:text-muted-foreground">
            {{ paragraphPlaceholder }}
          </p>

          <a
            href="#"
            class="group flex items-center gap-1 hover:dark:text-muted-foreground"
          >
            <span>Learn more</span>
            <ri:arrow-right-line
              class="w-4 h-4 ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </a>
        </div>
        <div class="rounded p-6 lg:p-8 flex flex-col gap-x-2 gap-y-3">
          <ri:bar-chart-2-line class="w-8 h-8" />

          <h1 class="font-medium text-xl">Scalable</h1>

          <p class="line-clamp-2 dark:text-muted-foreground">
            {{ paragraphPlaceholder }}
          </p>

          <a
            href="#"
            class="group flex items-center gap-1 hover:dark:text-muted-foreground"
          >
            <span>Learn more</span>
            <ri:arrow-right-line
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

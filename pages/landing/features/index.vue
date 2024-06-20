<template>
  <NuxtLayout name="playground" class="bg-dots">
    <section
      class="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 lg:gap-20 flex flex-col py-20"
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
    </section>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { paragraphPlaceholder } from '~/lib/constants'
</script>

<style scoped></style>

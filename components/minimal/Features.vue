<template>
  <section class="container max-w-screen-xl py-24 sm:py-32">
    <div
      class="relative mx-auto px-4 sm:px-6 lg:px-8 gap-16 lg:gap-20 flex flex-col"
    >
      <LandingHeadline
        section="Overview"
        title="Why choose our service?"
        description="Stunning UI Pro is awesome premium library. Build better, faster with Stunning UI."
      />
      <div class="relative grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          class="absolute hidden sm:block inset-x-12 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent dark:via-white/20 via-neutral-950/30 to-transparent"
        />
        <div
          class="absolute hidden sm:block left-1/3 top-1/2 -translate-y-1/2 w-px h-[110%] bg-gradient-to-b from-transparent dark:via-white/20 via-neutral-950/30 to-transparent"
        />
        <div
          class="absolute hidden sm:block left-2/3 top-1/2 -translate-y-1/2 w-px h-[110%] bg-gradient-to-b from-transparent dark:via-white/20 via-neutral-950/30 to-transparent"
        />
        <div class="rounded p-2 sm:p-6 lg:p-8 flex flex-col gap-x-2 gap-y-3">
          <Icon name="ri:magic-line" class="w-8 h-8 text-emerald-500" />

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
        <div class="rounded p-2 sm:p-6 lg:p-8 flex flex-col gap-x-2 gap-y-3">
          <Icon name="ri:check-line" class="w-8 h-8 text-emerald-500" />

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
        <div class="rounded p-2 sm:p-6 lg:p-8 flex flex-col gap-x-2 gap-y-3">
          <Icon name="ri:lock-2-line" class="w-8 h-8 text-emerald-500" />

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
        <div class="rounded p-2 sm:p-6 lg:p-8 flex flex-col gap-x-2 gap-y-3">
          <Icon name="ri:rocket-2-line" class="w-8 h-8 text-emerald-500" />

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
        <div class="rounded p-2 sm:p-6 lg:p-8 flex flex-col gap-x-2 gap-y-3">
          <Icon
            name="ri:money-dollar-circle-line"
            class="w-8 h-8 text-emerald-500"
          />

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
        <div class="rounded p-2 sm:p-6 lg:p-8 flex flex-col gap-x-2 gap-y-3">
          <Icon name="ri:bar-chart-2-line" class="w-8 h-8 text-emerald-500" />

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
import { paragraphPlaceholder } from '~/lib/constants'
</script>

<style scoped></style>

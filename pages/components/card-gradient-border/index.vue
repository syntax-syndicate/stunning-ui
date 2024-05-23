<template>
  <NuxtLayout name="component">
    <div class="">
      <header class="space-y-2">
        <h1 class="text-3xl text-primary">Card Gradient Border</h1>
        <p class="text-secondary-foreground">Scrolling text reveal</p>
      </header>
      <main class="w-full mt-8">
        <div class="border border-border relative w-full rounded-2xl">
          <div class="flex flex-col p-8">
            <div className="pb-12 flex justify-center w-full">
              <span class="text-neon-wb text-2xl text-white/30">
                Hover the card
              </span>
            </div>

            <div class="grid grid-cols-12 gap-4">
              <GradientBorder class="col-span-8">
                <div class="rounded p-4 flex flex-col gap-2">
                  <ri:magic-line class="w-8 h-8" />

                  <h1 class="font-medium text-2xl">Hover me</h1>

                  <p class="line-clamp-5 text-secondary-foreground">
                    {{ paragraphPlaceholder }}
                  </p>
                </div>
              </GradientBorder>
              <GradientBorder class="col-span-4">
                <div class="rounded p-4 flex flex-col gap-2">
                  <ri:stack-line class="w-8 h-8" />

                  <h1 class="font-medium text-2xl">Hover me</h1>

                  <p class="line-clamp-5 text-secondary-foreground">
                    {{ paragraphPlaceholder }}
                  </p>
                </div>
              </GradientBorder>
              <GradientBorder class="col-span-4">
                <div class="rounded p-4 flex flex-col gap-2">
                  <ri:database-2-line class="w-8 h-8" />

                  <h1 class="font-medium text-2xl">Hover me</h1>

                  <p class="line-clamp-5 text-secondary-foreground">
                    {{ paragraphPlaceholder }}
                  </p>
                </div>
              </GradientBorder>
              <GradientBorder class="col-span-4">
                <div class="rounded p-4 flex flex-col gap-2">
                  <ri:edit-2-line class="w-8 h-8" />

                  <h1 class="font-medium text-2xl">Hover me</h1>

                  <p class="line-clamp-5 text-secondary-foreground">
                    {{ paragraphPlaceholder }}
                  </p>
                </div>
              </GradientBorder>
              <GradientBorder class="col-span-4">
                <div class="rounded p-4 flex flex-col gap-2">
                  <ri:search-line class="w-8 h-8" />

                  <h1 class="font-medium text-2xl">Hover me</h1>

                  <p class="line-clamp-5 text-secondary-foreground">
                    {{ paragraphPlaceholder }}
                  </p>
                </div>
              </GradientBorder>
              <GradientBorder class="col-span-8">
                <div class="rounded p-4 flex flex-col gap-2">
                  <ri:cake-2-line class="w-8 h-8" />

                  <h1 class="font-medium text-2xl">Hover me</h1>

                  <p class="line-clamp-5 text-secondary-foreground">
                    {{ paragraphPlaceholder }}
                  </p>
                </div>
              </GradientBorder>
              <GradientBorder
                class="col-span-4"
                :style="{
                  '--sui-gb-from-color': '#4fa',
                  '--sui-gb-via-color': '#4af',
                  '--sui-gb-to-color': '#f4a'
                }"
              >
                <div class="rounded p-4 flex flex-col gap-2">
                  <ri:vip-crown-line class="w-8 h-8" />

                  <h1 class="font-medium text-2xl">Hover me</h1>

                  <p class="line-clamp-5 text-secondary-foreground">
                    {{ paragraphPlaceholder }}
                  </p>
                </div>
              </GradientBorder>
            </div>
          </div>
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup></script>

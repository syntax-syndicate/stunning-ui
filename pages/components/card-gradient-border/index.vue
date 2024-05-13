<template>
  <NuxtLayout name="component">
    <div class="">
      <header class="space-y-2">
        <h1 class="text-3xl text-primary">Card Gradient Border</h1>
        <p class="text-secondary">Scrolling text reveal</p>
      </header>
      <main class="w-full mt-8">
        <div class="border border-neutral-800 relative w-full rounded-2xl">
          <div class="flex flex-col p-8">
            <div className="pb-12 flex justify-center w-full">
              <span class="text-neon-wb text-2xl text-white/30">
                Hover the card
              </span>
            </div>

            <div class="grid grid-cols-12 gap-4">
              <GradientBorder class="col-span-8">
                <div class="rounded p-4 flex flex-col gap-2">
                  <h1 class="font-medium text-2xl">Hover me</h1>

                  <p>{{ paragraphPlaceholder }}</p>
                </div>
              </GradientBorder>
              <GradientBorder class="col-span-4">
                <div class="rounded p-4 flex flex-col gap-2">
                  <h1 class="font-medium text-2xl">Hover me</h1>

                  <p>{{ paragraphPlaceholder }}</p>
                </div>
              </GradientBorder>
              <GradientBorder class="col-span-4">
                <div class="rounded p-4 flex flex-col gap-2">
                  <h1 class="font-medium text-2xl">Hover me</h1>

                  <p>{{ paragraphPlaceholder }}</p>
                </div>
              </GradientBorder>
              <GradientBorder class="col-span-4">
                <div class="rounded p-4 flex flex-col gap-2">
                  <h1 class="font-medium text-2xl">Hover me</h1>

                  <p>{{ paragraphPlaceholder }}</p>
                </div>
              </GradientBorder>
              <GradientBorder class="col-span-4">
                <div class="rounded p-4 flex flex-col gap-2">
                  <h1 class="font-medium text-2xl">Hover me</h1>

                  <p>{{ paragraphPlaceholder }}</p>
                </div>
              </GradientBorder>
              <GradientBorder class="col-span-8">
                <div class="rounded p-4 flex flex-col gap-2">
                  <h1 class="font-medium text-2xl">Hover me</h1>

                  <p>{{ paragraphPlaceholder }}</p>
                </div>
              </GradientBorder>
              <GradientBorder class="col-span-4">
                <div class="rounded p-4 flex flex-col gap-2">
                  <h1 class="font-medium text-2xl">Hover me</h1>

                  <p>{{ paragraphPlaceholder }}</p>
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

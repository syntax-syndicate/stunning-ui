<template>
  <NuxtLayout name="component">
    <div class="">
      <header class="space-y-2">
        <h1 class="text-3xl text-primary">Glowy Spotlight Cards</h1>
        <p class="text-secondary">
          The glowing card effect is typically used to highlight feature cards
          when they are hovered over.
        </p>
      </header>
      <main class="w-full mt-8">
        <div
          class="border border-neutral-800 relative w-full h-240 rounded-2xl overflow-hidden p-8"
        >
          <div className="pb-12 flex justify-center w-full">
            <span class="text-neon-wb text-2xl text-white/30">
              Hover the card
            </span>
          </div>
          <GlowCardWrapper
            class="grid grid-cols-12 gap-4"
            :hue="120"
            :size="160"
          >
            <GlowCard class="col-span-8 rounded-lg">
              <div class="rounded p-4 flex flex-col gap-2">
                <ri:magic-line class="w-8 h-8" />

                <h1 class="font-medium text-2xl">Hover me</h1>

                <p class="line-clamp-5 text-neon-p">
                  {{ paragraphPlaceholder }}
                </p>
              </div>
            </GlowCard>
            <GlowCard class="col-span-4 rounded-lg">
              <div class="rounded p-4 flex flex-col gap-2">
                <ri:stack-line class="w-8 h-8" />

                <h1 class="font-medium text-2xl">Hover me</h1>

                <p class="line-clamp-5 text-neon-p">
                  {{ paragraphPlaceholder }}
                </p>
              </div>
            </GlowCard>
            <GlowCard class="col-span-4 rounded-lg">
              <div class="rounded p-4 flex flex-col gap-2">
                <ri:database-2-line class="w-8 h-8" />

                <h1 class="font-medium text-2xl">Hover me</h1>

                <p class="line-clamp-5 text-neon-p">
                  {{ paragraphPlaceholder }}
                </p>
              </div>
            </GlowCard>
            <GlowCard class="col-span-4 rounded-lg">
              <div class="rounded p-4 flex flex-col gap-2">
                <ri:edit-2-line class="w-8 h-8" />

                <h1 class="font-medium text-2xl">Hover me</h1>

                <p class="line-clamp-5 text-neon-p">
                  {{ paragraphPlaceholder }}
                </p>
              </div>
            </GlowCard>
            <GlowCard class="col-span-4 rounded-lg">
              <div class="rounded p-4 flex flex-col gap-2">
                <ri:search-line class="w-8 h-8" />

                <h1 class="font-medium text-2xl">Hover me</h1>

                <p class="line-clamp-5 text-neon-p">
                  {{ paragraphPlaceholder }}
                </p>
              </div>
            </GlowCard>
            <GlowCard class="col-span-8 rounded-lg">
              <div class="rounded p-4 flex flex-col gap-2">
                <ri:cake-2-line class="w-8 h-8" />

                <h1 class="font-medium text-2xl">Hover me</h1>

                <p class="line-clamp-5 text-neon-p">
                  {{ paragraphPlaceholder }}
                </p>
              </div>
            </GlowCard>
            <GlowCard
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

                <p class="line-clamp-5 text-neon-p">
                  {{ paragraphPlaceholder }}
                </p>
              </div>
            </GlowCard>
          </GlowCardWrapper>
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup></script>

<style scoped></style>

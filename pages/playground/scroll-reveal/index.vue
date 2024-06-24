<template>
  <div class="min-h-screen w-screen py-12">
    <div
      className="w-full h-screen pb-16 flex flex-col items-center justify-between"
    >
      <span class="text-neon-wb text-2xl text-white/30">
        Scroll-driven Section Reveal
      </span>
      <Button
        size="icon"
        class="rounded-full animate-bounce"
        @click="handleScroll"
      >
        <Icon name="ri:arrow-down-line" />
      </Button>
    </div>

    <ScrollReveal
      v-slot="{ isActive }"
      :offset="200"
      class="max-w-screen-md flex flex-col mx-auto"
      :style="{
        '--duration': '500ms'
      }"
    >
      <div
        :class="{ 'translate-y-8 opacity-0': !isActive }"
        class="flex justify-center transition-[transform,opacity] [transition-delay:100ms] duration-500"
      >
        <div class="rounded-full font-mono text-sm tracking-tight text-neon">
          Features
        </div>
      </div>

      <h2
        :class="{ 'translate-y-8 opacity-0': !isActive }"
        class="mt-4 text-left font-display text-2xl font-light leading-[1.125] md:text-3xl lg:text-4xl transition-[transform,opacity] [transition-delay:100ms] duration-500"
      >
        Why choose our service?
      </h2>

      <h3
        :class="{ 'translate-y-8 opacity-0': !isActive }"
        class="mx-auto mt-4 text-center leading-relaxed text-muted-foreground md:max-w-2xl lg:mt-8 transition-[transform,opacity] [transition-delay:100ms] duration-500"
      >
        Stunning UI Pro is awesome premium library.
        <br class="hidden md:block" />
        Build better, faster with Stunning UI.
      </h3>

      <div
        class="mt-6 transition-[transform,opacity] duration-[var(--duration)] md:mt-12"
      >
        <div class="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 md:gap-y-8">
          <div
            :style="{ '--delay': `${250}ms` }"
            :class="{
              'translate-y-8 opacity-0': !isActive,
              'delay-[var(--delay)]': isActive
            }"
            class="space-y-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 transition-[transform,opacity] [transition-delay:250ms] duration-500"
          >
            <Icon name="ri:magic-line" class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-neon-p text-lg">
              {{ paragraphPlaceholder }}
            </p>
          </div>
          <div
            :style="{ '--delay': `${500}ms` }"
            :class="{
              'translate-y-8 opacity-0': !isActive,
              'delay-[var(--delay)]': isActive
            }"
            class="space-y-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 transition-[transform,opacity] [transition-delay:500ms] duration-500"
          >
            <Icon name="ri:magic-line" class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-neon-p text-lg">
              {{ paragraphPlaceholder }}
            </p>
          </div>
          <div
            :style="{ '--delay': `${750}ms` }"
            :class="{
              'translate-y-8 opacity-0': !isActive,
              'delay-[var(--delay)]': isActive
            }"
            class="space-y-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 transition-[transform,opacity] [transition-delay:750ms] duration-500"
          >
            <Icon name="ri:magic-line" class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-neon-p text-lg">
              {{ paragraphPlaceholder }}
            </p>
          </div>
          <div
            :style="{ '--delay': `${1000}ms` }"
            :class="{
              'translate-y-8 opacity-0': !isActive,
              'delay-[var(--delay)]': isActive
            }"
            class="space-y-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 transition-[transform,opacity] [transition-delay:1000ms] duration-500"
          >
            <Icon name="ri:magic-line" class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-neon-p text-lg">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>

    <div ref="screenBottom" class="my-12"></div>
  </div>
</template>

<script setup lang="ts">
import ScrollReveal from '@/components/stunning/ScrollReveal.vue'
import { paragraphPlaceholder } from '~/lib/constants'

const screenBottom = ref<HTMLDivElement | null>(null)

const handleScroll = () => {
  screenBottom.value?.scrollIntoView({ behavior: 'smooth', block: 'end' })
}
</script>

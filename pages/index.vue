<template>
  <div class="bg-background">
    <LandingBanner
      :class="
        cn(
          'hidden lg:blockpx-paddings relative z-40 overflow-hidden leading-none transition-colors duration-200 dark:bg-neutral-950 dark:hover:bg-neutral-new-8 bg-[#F5FBFD] hover:bg-[#f1fcff]',
          'before:content-normal before:absolute before:inset-x-0 before:bottom-0 before:z-10 before:block before:h-px before:w-full before:mix-blend-overlay before:dark:bg-white',
          'after:content-normal after:absolute after:left-1/2 after:top-1/2 after:-z-10 after:h-[188px] after:w-[60px] after:origin-center after:-translate-y-[43%] after:translate-x-[-290px] after:rotate-[226deg] after:rounded-[100%] after:bg-gradient-to-r after:from-white after:via-white/50 after:to-white/80 after:mix-blend-plus-lighter after:blur-2xl after:dark:opacity-100 after:sm:left-[40%] after:sm:translate-x-0 after:opacity-70'
        )
      "
    >
      <div>
        Stunning UI Beta is here. Create stunning website that stand out!
      </div>
      <div>
        <Button size="xs" class="gap-2" @click="navigateTo('/components')">
          <Icon name="ri:sparkling-2-line" />
          <span>Getting Started</span>
        </Button>
      </div>
    </LandingBanner>
    <ClientOnly>
      <SiteHeader />
    </ClientOnly>
    <SiteHero />

    <StunningGlowyDivider />

    <section class="container max-w-screen-2xl py-24 sm:py-32 mt-[-120px]">
      <LandingHeadline
        section="Features"
        title="Components are building blocks"
        description="30+ free open-source components that you can copy and paste into your next project."
      />
      <GlowyCardWrapper
        class="grid grid-cols-1 sm:grid-cols-3 gap-4"
        :size="240"
      >
        <GlowyCard
          v-for="(item, index) in featureList"
          class="group/card rounded-lg p-4 lg:p-4 flex flex-col gap-2 cursor-pointer"
          :href="item.path"
        >
          <div class="bg-neutral-900/5 dark:bg-white/5 rounded-[8px]">
            <div
              class="aspect-video rounded-[8px] relative overflow-hidden border-neutral-900/10 dark:border-white/10"
            >
              <img
                v-if="index === 0"
                :src="LightBar"
                class="my-0 rounded-lg group-hover/card:scale-[1.02] transition-all duration-200"
              />

              <img
                v-if="index === 1"
                :src="BlocksFeatures"
                class="my-0 rounded-lg group-hover/card:scale-[1.02] transition-all duration-200"
              />

              <img
                v-if="index === 2"
                :src="TemplateMinimal"
                class="my-0 rounded-lg group-hover/card:scale-[1.02] transition-all duration-200"
              />
            </div>
          </div>

          <div class="flex items-center gap-4">
            <div
              class="rounded-md p-2 inline-flex ring-inset ring-1 bg-neutral-50/50 dark:bg-neutral-800/50 ring-neutral-300 dark:ring-neutral-700 group-hover:dark:bg-emerald-800/50 group-hover:ring-emerald-300 group-hover:dark:ring-emerald-600"
            >
              <Icon :name="item.icon" class="size-8 text-emerald-500" />
            </div>
            <div class="relative text-neon-wb flex-1">
              <h1 class="font-medium text-lg mb-1">{{ item.name }}</h1>
              <span class="line-clamp-3 text-sm">{{ item.desc }}</span>
            </div>
          </div>
        </GlowyCard>
      </GlowyCardWrapper>
    </section>

    <StunningGlowyDivider />
    <SiteFAQ />
    <StunningGlowyDivider direction="top" />
    <SiteCTA />
    <SiteFooter />
  </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
import { Button } from '~/components/ui/button'

import TemplateMinimal from '@/assets/images/template_minimal.webp'
import LightBar from '@/assets/gifs/light-bar.gif'
import BlocksFeatures from '@/assets/images/blocks_features.webp'
import GlowyCardWrapper from '~/components/stunning/GlowyCard/GlowyCardWrapper.vue'
import GlowyCard from '~/components/stunning/GlowyCard/GlowyCard.vue'

const featureList = [
  {
    name: 'Components Library',
    desc: '30+ free open-source components that you can copy and paste into your next project.',
    path: '/blocks/banner',
    icon: 'lucide:box',
    status: 'finished'
  },
  {
    name: 'Blocks Library',
    desc: 'Segmented and customizable blocks for creating various types of website pages.',
    path: '/blocks/navigation',
    icon: 'lucide:blocks',
    status: 'finished'
  },
  {
    name: 'Production-ready Templates',
    desc: 'Pre-made, ready to use templates for startups and small businesses.',
    path: '/blocks/callout',
    icon: 'lucide:layout-template',
    status: 'finished'
  }
]
</script>

<style></style>

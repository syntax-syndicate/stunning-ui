<template>
  <div class="bg-background">
    <LandingBanner
      :class="
        cn(
          'px-paddings relative z-40 overflow-hidden leading-none transition-colors duration-200 dark:bg-neutral-950 dark:hover:bg-neutral-new-8 bg-[#F5FBFD] hover:bg-[#f1fcff]',
          'before:content-normal before:absolute before:inset-x-0 before:bottom-0 before:z-10 before:block before:h-px before:w-full before:mix-blend-overlay before:dark:bg-white',
          'after:content-normal after:absolute after:left-1/2 after:top-1/2 after:-z-10 after:h-[188px] after:w-[60px] after:origin-center after:-translate-y-[43%] after:translate-x-[-290px] after:rotate-[226deg] after:rounded-[100%] after:bg-gradient-to-r after:from-white after:via-white/50 after:to-white/80 after:mix-blend-plus-lighter after:blur-2xl after:dark:opacity-100 after:sm:left-[40%] after:sm:translate-x-0 after:opacity-70'
        )
      "
    >
      <div>
        Stunning UI beta is here. Create stunning website that stand out!
      </div>
      <div>
        <Button size="xs" class="gap-2">
          <Icon name="ri:sparkling-2-line" />
          <span>Getting Started</span>
        </Button>
      </div>
    </LandingBanner>
    <ClientOnly>
      <SiteHeader />
    </ClientOnly>
    <TyndallEffect class="min-h-[80vh]">
      <div
        class="absolute top-48 left-1/2 -translate-x-1/2 transform w-full flex flex-col items-center px-5"
      >
        <div
          class="group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        >
          <ShimmerText
            class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
          >
            ✨ Stunning UI Version 1.0
            <Icon
              name="ri:arrow-right-line"
              class="w-4 h-4 ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </ShimmerText>
        </div>

        <h1
          class="mt-8 bg-gradient-to-br from-stone-200/90 via-stone-50 to-white bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
        >
          Create Stunning Websites <br />
          That Stand Out
        </h1>

        <p class="text-neutral-500 dark:text-neutral-400 text-xl mt-4">
          Stunning UI is a collection of interactive Tailwind CSS components
          built for Vue.js/React.
        </p>

        <GlassBorderButton
          class="z-10 w-40 mt-12"
          @click="navigateTo('/components')"
        >
          Start for free
        </GlassBorderButton>

        <div class="stacks grid grid-cols-6 gap-8 mt-24">
          <template v-for="item in frameworkList">
            <div
              class="group relative flex items-center gap-2 text-muted-foreground"
            >
              <Icon
                :name="item.icon"
                class="w-8 h-8 grayscale group-hover:grayscale-0"
              />
              <div
                class="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-2 transform whitespace-nowrap rounded bg-neutral-900 p-2 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:opacity-100 dark:bg-neutral-100 dark:text-neutral-900"
              >
                <div class="text-sm font-semibold">{{ item.name }}</div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <template #particles>
        <ParticlesEffect
          :density="256"
          :size="1.5"
          class="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)] z-10"
        />
      </template>
    </TyndallEffect>
    <section class="container max-w-screen-xl py-24 sm:py-32 mt-[-120px]">
      <LandingHeadline
        section="Features"
        title="Components are building blocks"
        description="Components are building blocks, blocks are building templates."
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
          <template v-if="item.image">
            <img
              :src="item.image"
              class="my-0 rounded-lg group-hover/card:scale-[1.02] transition-all duration-200"
            />
          </template>

          <div
            class="bg-neutral-900/5 dark:bg-white/5 ring-1 ring-inset ring-neutral-900/10 dark:ring-white/10 rounded-[8px] p-3"
            v-else
          >
            <div
              class="aspect-[4/3] rounded-[8px] relative overflow-hidden border border-dashed border-neutral-900/10 dark:border-white/10"
            >
              <ImagePlaceholder />
            </div>
          </div>

          <div class="relative pt-2 text-neon-wb">
            <h1 class="font-medium text-lg mb-1">{{ item.name }}</h1>
            <span class="line-clamp-3 text-sm">{{ item.desc }}</span>
          </div>
        </GlowyCard>
      </GlowyCardWrapper>
    </section>
    <StunningGlowyDivider />
    <SiteFAQ />
    <StunningGlowyDivider />
  </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
import { Button } from '~/components/ui/button'
import TyndallEffect from '~/components/stunning/TyndallEffect.vue'
import ParticlesEffect from '~/components/stunning/ParticlesEffect/Slim.vue'
import GlassBorderButton from '~/components/stunning/GlassBorderButton.vue'
import ShimmerText from '~/components/stunning/ShimmerText.vue'
import GlowyCardWrapper from '~/components/stunning/GlowyCard/GlowyCardWrapper.vue'
import GlowyCard from '~/components/stunning/GlowyCard/GlowyCard.vue'

import { paragraphPlaceholder } from '~/lib/constants'

const frameworkList = [
  {
    name: 'Nuxt 3',
    icon: 'logos:nuxt-icon'
  },
  {
    name: 'Vue 3',
    icon: 'logos:vue'
  },
  {
    name: 'VueUse',
    icon: 'logos:vueuse'
  },
  {
    name: 'Shadcn Vue',
    icon: 'simple-icons:shadcnui'
  },
  {
    name: 'Tailwind CSS',
    icon: 'logos:tailwindcss-icon'
  },
  {
    name: 'GSAP',
    icon: 'logos:greensock-icon'
  }
]

const featureList = [
  {
    name: 'Components Libaray',
    desc: 'A landing page banner captures attention with key info and a call to action to engage visitors.',
    path: '/blocks/banner',
    status: 'finished'
  },
  {
    name: 'Blocks for Landing Page',
    desc: 'A menu or set of links that assists visitors in navigating the website to locate information.',
    path: '/blocks/navigation',
    status: 'finished'
  },
  {
    name: 'Production-ready Templates',
    desc: 'A highlighted area designed to draw attention to key information or features, using distinct styling or graphics to stand out.',
    path: '/blocks/callout',
    status: 'finished'
  }
]

const { isDark } = useDarkmode()
</script>

<style></style>

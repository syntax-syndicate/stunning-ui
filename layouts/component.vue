<template>
  <div class="bg-neutral-950 w-full h-screen">
    <ClientOnly>
      <SiteHeader />
    </ClientOnly>

    <main class="container max-w-screen-xl my-12 mx-auto sm:rounded">
      <div class="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-3">
          <aside
            class="hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:sticky lg:top-[--header-height] lg:px-4 lg:-mx-4"
          >
            <div class="relative">
              <div class="space-y-3 mb-3 lg:mb-6 -mx-1 lg:mx-0">
                <NuxtLink href="/getting-started">Getting Started</NuxtLink>
              </div>
              <div class="space-y-3 mb-3 lg:mb-6 -mx-1 lg:mx-0">
                <NuxtLink href="/installation">Installation</NuxtLink>
              </div>
              <div class="space-y-3 mb-3 lg:mb-6 -mx-1 lg:mx-0">
                <NuxtLink href="/installation">Installation</NuxtLink>
              </div>
            </div>
            <div class="h-[1px] w-full bg-neutral-800 my-8"></div>
            <nav class="relative space-y-6">
              <template v-for="group in componentList">
                <section>
                  <h3 class="mb-3 text-sm font-semibold">
                    {{ group.category }}
                  </h3>
                  <div class="flex flex-col text-sm">
                    <NuxtLink
                      v-for="item in group.components"
                      :href="item.path"
                      class="border-l pl-4 py-1"
                      :class="
                        route.path === item.path
                          ? 'text-emerald-500 font-semibold border-emerald-500'
                          : 'text-secondary border-neutral-700'
                      "
                    >
                      {{ item.name }}
                    </NuxtLink>
                  </div>
                </section>
              </template>
            </nav>
          </aside>
        </div>
        <div class="lg:col-span-9">
          <section>
            <slot />
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const componentList = [
  {
    category: 'Background',
    components: [
      {
        name: 'Morphing Gradient Animation',
        path: '/components/morphing-gradient-animation',
        desc: 'An elegant animation with a shifting background gradient.'
      },
      {
        name: 'Meteor Grid Animation',
        path: '/components/meteor-grid-animation',
        desc: 'An elegant animation with a shifting background gradient.'
      },
      {
        name: 'God Ray',
        path: '/components/god-ray',
        desc: 'Commonly used for the background in the Page header'
      }
    ]
  },
  {
    category: 'Bento Grid',
    components: [
      {
        name: 'Gravity Elements',
        path: '/components/gravity-elements',
        desc: 'An elegant animation with a shifting background gradient.'
      }
    ]
  },
  {
    category: 'Paragraph',
    components: [
      {
        name: 'Typed Text',
        path: '/components/typed-text',
        desc: 'Typically used to display dynamic text changes in the Hero Section.'
      },

      {
        name: 'Collapsible Details',
        path: '/components/collapsible-details',
        desc: 'Typically used to display dynamic text changes in the Hero Section.'
      },
      {
        name: 'Digital Animation',
        path: '/components/digital-animation',
        desc: 'Typically used to display dynamic text changes in the Hero Section.'
      },
      {
        name: 'Streaming Text',
        path: '/components/streaming-text',
        desc: 'Typically used to display dynamic text changes in the Hero Section.'
      }
    ]
  },
  {
    category: 'Card',
    components: [
      {
        name: 'Card Spotlight',
        path: '/components/card-spotlight',
        desc: 'Typically used to display dynamic text changes in the Hero Section.'
      },
      {
        name: 'Glowy Spotlight Cards',
        path: '/components/glowy-spotlight-cards',
        desc: 'Typically used to display dynamic text changes in the Hero Section.'
      },
      {
        name: 'Card Gradient Border',
        path: '/components/card-gradient-border',
        desc: 'Typically used to display dynamic text changes in the Hero Section.'
      },
      {
        name: 'Animated Gradient Border',
        path: '/components/animated-gradient-border',
        desc: 'Typically used to display dynamic text changes in the Hero Section.'
      },
      {
        name: 'Marquee Card',
        path: '/components/marquee-card',
        desc: 'Typically used to display dynamic text changes in the Hero Section.'
      }
    ]
  },
  {
    category: 'Scroll Animation',
    components: [
      {
        name: 'Text Reveal',
        path: '/components/text-reveal',
        desc: 'Typically used to display dynamic text changes in the Hero Section.'
      },
      {
        name: 'Blurry Text Reveal',
        path: '/components/blurry-text-reveal',
        desc: 'Typically used to display dynamic text changes in the Hero Section.'
      },
      {
        name: 'Sticky Stack Block',
        path: '/components/blurry-text-reveal',
        desc: 'Typically used to display dynamic text changes in the Hero Section.'
      }
    ]
  }
]

console.log(route.path)
</script>

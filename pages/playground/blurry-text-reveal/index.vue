<template>
  <main class="w-screen px-24 py-12 h-[400vh]">
    <div
      className="w-full h-screen pb-16 flex flex-col items-center justify-between"
    >
      <span class="text-neon-wb text-2xl text-white/30">
        Scroll-driven Blurry Text Reveal
      </span>
      <Button
        size="icon"
        class="rounded-full animate-bounce"
        @click="handleScroll"
      >
        <Icon name="ri:arrow-down-line" />
      </Button>
    </div>
    <section
      class="max-w-[60rem] min-h-[100vh] flex items-center justify-center flex-col gap-32"
    >
      <div>Feature 1</div>
      <BlurryTextReveal class="text-4xl" :text="paragraphPlaceholder" />
    </section>
    <section
      class="max-w-[60rem] min-h-[100vh] flex items-center justify-center flex-col gap-16"
    >
      <div>Feature 2</div>
      <BlurryTextReveal class="text-4xl" :text="paragraphPlaceholder" />
    </section>
  </main>
</template>

<script lang="ts" setup>
import BlurryTextReveal from '@/components/stunning/BlurryTextReveal.vue'
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import { paragraphPlaceholder } from '@/lib/constants'

const text1 =
  'Stunning UI is Designed for Developers、Designers、Creators、Indie Hackers'
const text2 =
  'Stunning UI lets you easily copy and paste code into your projects, enabling you to create an impressive website quickly.'

useSmoothScroll()

const handleScroll = () => {
  window.scrollTo({ top: document.body.scrollHeight / 4, behavior: 'smooth' })
}
</script>

<style scoped></style>

<template>
  <NuxtLayout name="playground">
    <main class="w-full my-16 flex flex-col px-8 py-16 h-[400vh]">
      <section className="w-full h-screen mx-auto text-center">
        <span class="inline-block text-neon-wb text-2xl text-white/30">
          Scroll-driven Blurry Text Reveal
        </span>
      </section>
      <section
        class="max-w-[60rem] min-h-[100vh] flex items-center justify-center flex-col gap-32"
      >
        <div>Feature 1</div>
        <BlurryTextReveal :text="text1" />
      </section>
      <section
        class="max-w-[60rem] min-h-[100vh] flex items-center justify-center flex-col gap-16"
      >
        <div>Feature 2</div>
        <BlurryTextReveal :text="text2" />
      </section>
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import BlurryTextReveal from '@/components/stunning/BlurryTextReveal.vue'

const text1 =
  'Stunning UI is Designed for Developers、Designers、Creators、Indie Hackers'
const text2 =
  'Stunning UI lets you easily copy and paste code into your projects, enabling you to create an impressive website quickly.'
</script>

<style scoped></style>

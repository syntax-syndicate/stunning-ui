<template>
  <div ref="textRef" class="flex justify-center items-center">
    <p class="font-semibold sui-blurry-text" ref="blurryText">
      {{ text }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import TextSplitter from '~/lib/TextSplitter'

defineProps({
  text: {
    type: String,
    required: true
  }
})

const textRef = ref(null)
const blurryText = ref<HTMLParagraphElement | null>(null)
const revealText = ref()

onMounted(() => {
  const scroll = (e: HTMLParagraphElement) => {
    const splitter = new TextSplitter(e, {
      resizeCallback: () => scroll(e),
      splitTypeTypes: 'words,chars'
    })

    revealText.value = ScrollTrigger.create({
      trigger: textRef.value,
      start: 'top top'
    })

    const chars = splitter.getChars()
    gsap.fromTo(
      chars,
      {
        opacity: 0,
        filter: 'blur(10px) brightness(0%)',
        willChange: 'filter'
      },
      {
        backgroundPositionX: 0,
        ease: 'none',
        opacity: 1,
        filter: 'blur(0px) brightness(100%)',
        stagger: 0.05,
        scrollTrigger: {
          trigger: blurryText.value,
          // markers: true,
          scrub: true,
          start: 'top bottom-=15%',
          end: 'bottom center+=15%'
        }
      }
    )
  }

  if (blurryText.value) {
    scroll(blurryText.value)
  }
})

onUnmounted(() => {
  // revealText.value.kill()
})
</script>

<style scoped></style>

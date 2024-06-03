<template>
  <div ref="textRef" class="flex justify-center items-center" :class="clasName">
    <p class="font-semibold sui-blurry-text" ref="blurryText">
      {{ text }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import TextSplitter from '~/lib/TextSplitter'

defineProps({
  text: {
    type: String,
    required: true
  },
  clasName: {
    type: String,
    default: 'text-5xl'
  }
})

const textRef = ref(null)
const blurryText = ref<HTMLParagraphElement | null>(null)

onMounted(() => {
  const scroll = (e: HTMLParagraphElement) => {
    const splitter = new TextSplitter(e, {
      resizeCallback: () => scroll(e),
      splitTypeTypes: 'words,chars'
    })

    const chars = splitter.getChars()
    gsap.fromTo(
      chars,
      {
        filter: 'blur(10px) brightness(0%)',
        willChange: 'filter'
      },
      {
        ease: 'none',
        filter: 'blur(0px) brightness(100%)',
        stagger: 0.05,
        scrollTrigger: {
          trigger: blurryText.value,
          start: 'top bottom-=15%',
          end: 'bottom center+=15%',
          scrub: true
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

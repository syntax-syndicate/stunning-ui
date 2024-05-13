<template>
  <div
    ref="textRef"
    class="max-w-[60rem] min-h-[100vh] items-center flex justify-center"
    :class="clasName"
  >
    <p class="font-semibold sui-blurry-text" ref="blurryText">
      {{ text }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import TextSplitter from '~/utils/TextSplitter'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
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
const blurryText = ref(null)

onMounted(() => {
  const scroll = () => {
    const splitter = new TextSplitter(blurryText.value, {
      resizeCallback: () => scroll(),
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
    scroll()
  }
})

onUnmounted(() => {
  // revealText.value.kill()
})
</script>

<style scoped></style>

<template>
  <div
    ref="textRef"
    class="max-w-[60rem] min-h-[100vh] items-center flex justify-center text-5xl"
  >
    <p class="transform-gpu" :class="textClass" ref="textTarget">
      {{ text }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import TextSplitter from '~/lib/TextSplitter'

gsap.registerPlugin(ScrollTrigger)

const props = withDefaults(
  defineProps<{
    text: string
    textClass?: string
    fromVars?: Record<string, any>
    toVars?: Record<string, any>
    splittingBy?: 'words' | 'chars'
  }>(),
  {
    text: '',
    textClass: '',
    fromVars: () => ({}),
    toVars: () => ({}),
    splittingBy: 'words'
  }
)

const { splittingBy, fromVars, toVars } = toRefs(props)

const textRef = ref(null)
const textTarget = ref(null)
const revealText = ref()

onMounted(() => {
  const scroll = (e: HTMLParagraphElement) => {
    const splitter = new TextSplitter(e, {
      resizeCallback: () => scroll(e),
      splitTypeTypes: splittingBy.value
    })

    revealText.value = ScrollTrigger.create({
      trigger: textRef.value,
      start: 'top top'
    })

    let animateTarget =
      splittingBy.value === 'words' ? splitter.getWords() : splitter.getChars()

    gsap.fromTo(
      animateTarget,
      {
        opacity: 0.3,
        ...fromVars.value
      },
      {
        backgroundPositionX: 0,
        ease: 'none',
        opacity: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: textRef.value,
          // markers: true,
          pin: true,
          scrub: true,
          start: 'top',
          end: 'center'
        },
        ...toVars.value
      }
    )
  }
  if (textTarget.value) {
    scroll(textTarget.value)
  }
})

onUnmounted(() => {
  revealText.value.kill()
})
</script>

<style scoped></style>

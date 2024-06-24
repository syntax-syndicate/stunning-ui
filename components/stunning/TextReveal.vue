<template>
  <div
    ref="textRef"
    class="max-w-[60rem] min-h-[100vh] items-center flex justify-center text-5xl"
  >
    <p :class="textClass" ref="textTarget">
      {{ text }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Splitting from 'splitting'

gsap.registerPlugin(ScrollTrigger)

const props = withDefaults(
  defineProps<{
    text: string
    textClass: string
    splittingBy: 'words' | 'chars'
  }>(),
  {
    text: '',
    textClass: '',
    hightClass: '',
    splittingBy: 'words'
  }
)

const { splittingBy } = toRefs(props)

const textRef = ref(null)
const textTarget = ref(null)
const revealText = ref()

onMounted(() => {
  const results = Splitting({
    target: textTarget.value!,
    by: splittingBy.value
  })
  revealText.value = ScrollTrigger.create({
    trigger: textRef.value,
    start: 'top top'
  })

  results.forEach((target) => {
    let animateTarget =
      splittingBy.value === 'words' ? target.words : target.chars

    gsap.set(animateTarget!, {
      opacity: 0.3
    })
    gsap.to(animateTarget!, {
      backgroundPositionX: 0,
      ease: 'none',
      opacity: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: textRef.value,
        // markers: true,
        pin: true,
        scrub: true,
        start: 'top',
        end: 'center'
      }
    })
  })
})

onUnmounted(() => {
  revealText.value.kill()
})
</script>

<style scoped></style>

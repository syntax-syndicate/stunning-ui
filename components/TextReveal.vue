<template>
  <div
    ref="textRef"
    class="max-w-[60rem] h-[100vh] items-center flex justify-center"
    :class="clasName"
  >
    <p class="font-semibold">
      <template v-for="(word, index) in words" :key="index">
        <span class="opacity-30 sui-text-reveal">
          {{ `${word} ` }}
        </span>
      </template>
    </p>
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

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
const revealText = ref()
const words = props.text.split(' ')

onMounted(() => {
  revealText.value = ScrollTrigger.create({
    trigger: textRef.value,
    start: 'top top',
    pin: true
  })

  gsap.to('.sui-text-reveal', {
    opacity: 1,
    stagger: 1,
    scrollTrigger: {
      scrub: true,
      trigger: textRef.value,
      start: 'top',
      end: 'center'
    }
  })
})

onUnmounted(() => {
  revealText.value.kill()
})
</script>

<style scoped></style>

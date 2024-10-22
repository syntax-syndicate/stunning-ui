<template>
  <div
    ref="textRef"
    class="max-w-[60rem] min-h-[100vh] items-center flex justify-center"
  >
    <p class="transform-gpu" :class="textClass" ref="textTarget">
      {{ text }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import TextSplitter from '~/lib/TextSplitter'

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
  const streaming = (e: HTMLParagraphElement) => {
    // Split the text by words or chars
    const splitter = new TextSplitter(e, {
      resizeCallback: () => streaming(e),
      splitTypeTypes: splittingBy.value
    })

    let animateTarget =
      splittingBy.value === 'words' ? splitter.getWords() : splitter.getChars()

    // Add animation for streaming text
    gsap.fromTo(
      animateTarget,
      {
        opacity: 0,
        ...fromVars.value
      },
      {
        opacity: 1,
        stagger: 0.05,
        ...toVars.value,
        onComplete: () => {
          // Replace the animated spans with the original text
          e.innerHTML = props.text
        }
      }
    )
  }
  if (textTarget.value) {
    streaming(textTarget.value)
  }
})

onUnmounted(() => {
  revealText.value.kill()
})
</script>

<style scoped></style>

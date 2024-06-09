<template>
  <main class="w-screen h-screen flex justify-center items-center">
    <Button @click="handleClick">School Pride</Button>
  </main>
</template>

<script lang="ts" setup>
import { useConfetti } from '~/composables/useConfetti'

const { confetti } = useConfetti()

const handleClick = () => {
  const end = Date.now() + 15 * 1000

  // go Buckeyes!
  const colors = ['#bb0000', '#ffffff']

  ;(function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    })
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    })

    if (Date.now() < end) {
      requestAnimationFrame(frame)
    }
  })()
}
</script>

<style scoped></style>

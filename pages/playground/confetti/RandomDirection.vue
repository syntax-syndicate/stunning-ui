<template>
  <main class="w-screen h-screen flex justify-center items-center">
    <Button @click="handleClick">Random Direction</Button>
  </main>
</template>

<script lang="ts" setup>
import { useConfetti } from '~/composables/useConfetti'

const { confetti } = useConfetti()

const handleClick = () => {
  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { y: 0.6 }
  })
}
</script>

<style scoped></style>

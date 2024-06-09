<template>
  <main class="w-screen h-screen flex justify-center items-center">
    <Button @click="handleClick">Run basic cannon</Button>
  </main>
</template>

<script lang="ts" setup>
import { useConfetti } from '~/composables/useConfetti'

const { confetti } = useConfetti()

const handleClick = () => {
  confetti({
    particleCount: 100,
    spread: 70
  })
}
</script>

<style scoped></style>

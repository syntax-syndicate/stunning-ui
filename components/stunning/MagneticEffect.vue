<template>
  <div
    ref="magneticEffectRef"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'

const magneticEffectRef = ref<HTMLDivElement | null>(null)

const handleMouseMove = (e: MouseEvent) => {
  if (magneticEffectRef.value) {
    let boundingRect = magneticEffectRef.value.getBoundingClientRect()
    const mousePosX = e.x - boundingRect.left
    const mousePosY = e.y - boundingRect.top

    gsap.to(magneticEffectRef.value, {
      x: (mousePosX - boundingRect.width / 2) * 0.4,
      y: (mousePosY - boundingRect.height / 2) * 0.4,
      duration: 0.8,
      ease: 'power3.out'
    })
  }
}

const handleMouseLeave = () => {
  gsap.to(magneticEffectRef.value, {
    x: 0,
    y: 0,
    duration: 0.8,
    ease: 'elastic.out(1,0.3)'
  })
}
</script>

<style scoped></style>

<template>
  <div
    class="[--rotate:1] relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background"
  >
    <div
      class="skewed-view-wrapper w-full [container-type:inline-size] [transform-style:preserve-3d]"
    >
      <div
        class="skewed-view [transform-style:preserve-3d] h-full w-full transform-gpu"
      >
        <slot name="content" />
      </div>
    </div>

    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white dark:from-background"
    />
    <div
      class="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-background"
    />
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white dark:from-background"
    />
    <div
      class="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-background"
    />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.skewed-view {
  /*	3D translation */
  transform: rotateX(calc(var(--rotate, 0) * 20deg))
    rotateZ(calc(var(--rotate, 0) * -20deg))
    skewX(calc(var(--rotate, 0) * 20deg));
}
</style>

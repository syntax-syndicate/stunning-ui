<template>
  <div
    class="sm:flex-row sm:gap-8 lg:gap-10 flex flex-col items-center justify-center gap-6"
  >
    <button
      class="group relative z-[1] bg-transparent text-gray-100 hover:text-gray-100 hover:no-underline"
    >
      <div
        class="absolute -left-[1.5px] -top-[1.5px] z-[-1] h-[calc(100%+2.5px)] w-[calc(100%+2.5px)] overflow-hidden rounded-lg"
      >
        <div
          class="animate-spin-slow absolute left-[-12.5%] top-[-40px] aspect-square h-auto w-[125%] bg-conic-gradient"
        ></div>
      </div>
      <div
        class="rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-800 px-4 py-1"
      >
        <div
          class="flex items-center justify-center gap-2 transition-transform duration-100 ease-in-out group-hover:scale-105"
        >
          <slot />
        </div>
      </div>
    </button>
  </div>
</template>

<script lang="ts" setup>
// const { color = '#ffffff' } = defineProps<{
//   color: string
// }>()

// const conicGraident = computed(() => {
//   const alphaColor = `${color}40`
//   return `conic-gradient(from 90deg at 50% 50%, ${alphaColor} 0, ${alphaColor} 10%, ${color} 20%, ${alphaColor} 30%, ${alphaColor} 60%, ${color} 70%, ${alphaColor} 80%, ${alphaColor} 100%)`
// })
</script>

<style scoped>
@keyframes spin-slow {
  100% {
    transform: rotate(1turn);
  }
}
.animate-spin-slow {
  animation: spin-slow 6s linear infinite;
}

.bg-conic-gradient {
  background-image: conic-gradient(
    from 90deg at 50% 50%,
    #ffffff40 0,
    #ffffff40 10%,
    #ffffff 20%,
    #ffffff40 30%,
    #ffffff40 60%,
    #ffffff 70%,
    #ffffff40 80%,
    #ffffff40 100%
  );
}
</style>

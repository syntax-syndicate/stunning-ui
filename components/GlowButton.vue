<template>
  <div
    class="landing-sm:flex-row landing-sm:gap-8 landing-lg:gap-10 flex flex-col items-center justify-center gap-6"
  >
    <button
      class="group relative z-[1] bg-transparent text-gray-100 hover:text-gray-100 hover:no-underline"
    >
      <div
        class="absolute -left-[1.5px] -top-[1.5px] z-[-1] h-[calc(100%+2.5px)] w-[calc(100%+2.5px)] overflow-hidden rounded-lg"
      >
        <div
          class="animate-spin-slow absolute left-[-12.5%] top-[-40px] aspect-square h-auto w-[125%] bg-landing-ghost"
        ></div>
      </div>
      <div
        class="rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-800 px-4 py-1"
      >
        <div
          class="flex items-center justify-center gap-2 transition-transform duration-100 ease-in-out group-hover:scale-105"
        >
          <span class="text-sm font-semibold">Sign in</span>
        </div>
      </div>
    </button>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
@keyframes spin-slow {
  100% {
    transform: rotate(1turn);
  }
}
.animate-spin-slow {
  animation: spin-slow 6s linear infinite;
}

.bg-landing-ghost {
  background-image: conic-gradient(
    from 90deg at 50% 50%,
    #ffffff40 0,
    #ffffff40 10%,
    #fff 20%,
    #ffffff40 30%,
    #ffffff40 60%,
    #fff 70%,
    #ffffff40 80%,
    #ffffff40 100%
  );
}
</style>

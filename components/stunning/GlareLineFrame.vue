<template>
  <div
    class="group relative flex min-h-screen flex-col justify-center overflow-hidden bg-neutral-950 py-6 text-neutral-50 sm:py-12"
  >
    <div
      class="relative bg-neutral-50/5 p-2 shadow-xl outline outline-1 -outline-offset-1 outline-neutral-50/5 sm:mx-auto sm:rounded-lg lg:rounded-3xl"
    >
      <div
        class="absolute bottom-auto left-0 right-0 top-0 z-10 -mb-[1px] h-[1px] bg-gradient-to-r from-neutral-950 from-5% via-white/60 group-hover:via-white via-50% to-neutral-950 to-95%"
      />
      <div
        class="relative flex overflow-hidden rounded-2xl border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-950 px-8 pt-9 transition-all ease-linear hover:border-neutral-500/80 sm:h-[270px] sm:w-[480px] md:h-[360px] md:w-[640px] lg:h-[450px] lg:w-[800px]"
      >
        <div
          class="bg-gradient-to-r from-neutral-950 from-20% via-white/80 group-hover:via-white via-50% to-neutral-950 to-80% absolute bottom-auto left-0 right-0 top-0 z-10 -mb-[1px] h-[1px]"
        />
        <slot />
        <div
          class="bg-[radial-gradient(circle_at_50%_0,_rgba(128,128,128,_.2),_rgba(0,_0,_0,_0)_80%),_radial-gradient(circle_at_50%_0,_#181818,_rgba(0,_0,_0,_0))] absolute bottom-0 left-0 right-0 top-0 z-0 opacity-0 transition-all ease-linear group-hover:opacity-100"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>

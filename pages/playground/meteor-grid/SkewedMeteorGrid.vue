<template>
  <main class="w-screen h-screen relative flex items-center justify-center">
    <div class="absolute flex h-full w-full items-center justify-center">
      <p
        className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"
      >
        Skewed Meteor Grid
      </p>
    </div>
    <SkewedWrapper class="![--rotate:-1]">
      <template #content>
        <div class="relative w-[150vh] h-[150vh]">
          <MeteorGrid>
            <Meteor
              class="left-[60px]"
              starClass="from-sky-300/10 via-sky-500 to-sky-900/80 dark:to-sky-200 shadow-sky-500/50 [animation-delay:240ms]"
              bgClass="from-sky-500/60 via-sky-300/10 [animation-delay:240ms]"
            />
            <Meteor
              class="left-[180px]"
              starClass="from-indigo-300/10 via-indigo-500 to-indigo-900/80 dark:to-indigo-200 shadow-indigo-500/50 [animation-delay:740ms]"
              bgClass="from-indigo-500/60 via-indigo-300/10 [animation-delay:740ms]"
            />
            <Meteor
              class="left-[180px]"
              starClass="from-indigo-300/10 via-indigo-500 to-indigo-900/80 dark:to-indigo-200 shadow-indigo-500/50"
              bgClass="from-indigo-500/60 via-indigo-300/10"
            />
            <Meteor
              class="left-[300px]"
              starClass="from-blue-300/10 via-blue-500 to-blue-900/80 dark:to-blue-200 shadow-blue-500/50 [animation-delay:1040ms]"
              bgClass="from-blue-500/60 via-blue-300/10 [animation-delay:1040ms]"
            />
            <Meteor
              class="left-[480px]"
              starClass="from-yellow-300/10 via-yellow-500 to-yellow-900/80 dark:to-yellow-200 shadow-yellow-500/50 [animation-delay:860ms]"
              bgClass="from-yellow-500/60 via-yellow-300/10 [animation-delay:860ms]"
            />
            <Meteor
              class="left-[600px]"
              starClass="from-emerald-300/10 via-emerald-500 to-emerald-900/80 dark:to-emerald-200 shadow-emerald-500/50 [animation-delay:1440ms]"
              bgClass="from-emerald-500/60 via-emerald-300/10 [animation-delay:1440ms]"
            />
            <Meteor
              class="left-[720px]"
              starClass="from-white/10 via-white to-white/80 dark:to-white shadow-white/50 [animation-delay:3000ms]"
              bgClass="from-white/60 via-white/10 [animation-delay:3000ms]"
            />
            <Meteor
              class="left-[900px]"
              starClass="from-violet-300/10 via-violet-500 to-violet-900/80 dark:to-violet-200 shadow-violet-500/50 [animation-delay:2200ms]"
              bgClass="from-violet-500/60 via-violet-300/10 [animation-delay:2200ms]"
            />
          </MeteorGrid>
        </div>
      </template>
    </SkewedWrapper>
  </main>
</template>

<script lang="ts" setup>
import SkewedWrapper from '~/components/stunning/SkewedWrapper.vue'
import MeteorGrid from '~/components/stunning/MeteorGrid/MeteorGrid.vue'
import Meteor from '~/components/stunning/MeteorGrid/Meteor.vue'
</script>

<style scoped></style>

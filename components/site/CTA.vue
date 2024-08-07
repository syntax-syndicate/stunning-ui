<template>
  <section
    class="relative container mx-auto max-w-screen-lg py-24 sm:py-32 flex flex-col justify-center items-center"
  >
    <div class="flex flex-col justify-center items-center gap-8 z-10">
      <div class="w-full mx-auto flex justify-center">
        <Badge :variant="isDark ? 'default' : 'secondary'"
          >Follow us on X</Badge
        >
      </div>

      <div class="text-center text-5xl">
        <p class="text-foreground"><span>Started building</span></p>
        <p class="text-foreground">
          <span class="text-neon"> Stunning</span> websites
        </p>
      </div>

      <div class="text-muted-foreground text-center">
        <p>
          Over 50 ready-to-use variations of blocks, components, templates,
          interactions, and animations.
        </p>
        <p>
          Save thousands of hours, design a stunning landing page, and turn
          visitors into customers.
        </p>
      </div>

      <div class="w-full flex flex-col justify-center items-center gap-8">
        <div
          class="max-w-sm mx-auto flex justify-center items-center gap-2 mb-12"
        >
          <GlassBorderButton @click="navigateTo('/components')">
            Get Pro Access
          </GlassBorderButton>
        </div>
      </div>
    </div>

    <div
      class="relative z-0 -mt-64 h-[400px] w-[80vw] overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
    >
      <ParticlesEffect
        :density="1200"
        class="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
      />
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,#5eead42e,transparent_70%)]"
      />
      <div
        class="absolute inset-x-0 -bottom-[254px] h-full w-full rounded-[100%] bg-gradient-to-b from-neutral-300 to-white dark:from-white dark:to-black"
      />
      <div
        class="absolute inset-x-0 -bottom-[256px] h-full w-full rounded-[100%] bg-neutral-200 dark:bg-neutral-950 shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff7d]"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useDarkmode } from '@/composables/useDarkmode'
import { Badge } from '@/components/ui/badge'

const { isDark } = useDarkmode()

import ParticlesEffect from '@/components/stunning/ParticlesEffect/Slim.vue'
import GlassBorderButton from '@/components/stunning/GlassBorderButton.vue'
</script>

<style scoped></style>

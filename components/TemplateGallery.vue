<template>
  <main class="w-full h-full">
    <h2>Landing Page</h2>
    <div class="grid grid-cols-3 gap-4">
      <AnimatedGradientBorder
        class="group/card rounded-lg flex flex-col gap-2 cursor-pointer"
        @click="
          navigateTo('/templates/minimal', {
            open: {
              target: '_blank'
            }
          })
        "
      >
        <img
          :src="TemplateMinimal"
          class="my-0 rounded-tr-md rounded-tl-md brightness-90 group-hover/card:brightness-100 transition-all duration-200"
        />

        <div class="relative p-4">
          <h1 class="font-medium text-lg mb-1">Minimal Template</h1>
          <span class="text-neon-wb">Simple, minimal SaaS website</span>
        </div>
      </AnimatedGradientBorder>
    </div>
  </main>
</template>

<script lang="ts" setup>
import AnimatedGradientBorder from '~/components/stunning/AnimatedGradientBorder.vue'
import TemplateMinimal from '@/assets/images/template_minimal.webp'
</script>

<style scoped></style>

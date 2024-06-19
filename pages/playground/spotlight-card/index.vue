<template>
  <NuxtLayout name="playground">
    <main class="w-full h-full flex flex-col justify-center items-center px-8">
      <div class="grid grid-cols-12 gap-4">
        <SpotlightCard class="col-span-8" :color="spotColor">
          <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
            <Icon name="ri:magic-line" class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-neon-p">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </SpotlightCard>
        <SpotlightCard class="col-span-4" :color="spotColor">
          <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
            <Icon name="ri:stack-line" class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-neon-p">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </SpotlightCard>
        <SpotlightCard class="col-span-4" :color="spotColor">
          <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
            <Icon name="ri:cake-2-line" class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-neon-p">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </SpotlightCard>
        <SpotlightCard class="col-span-8" :color="spotColor">
          <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
            <Icon name="ri:vip-crown-line" class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-neon-p">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </SpotlightCard>
      </div>
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import SpotlightCard from '~/components/stunning/SpotlightCard.vue'
import { paragraphPlaceholder } from '~/lib/constants'
import { useDarkmode } from '~/composables/useDarkmode'

const { isDark } = useDarkmode()

const spotColor = computed(() => {
  return isDark.value ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'
})
</script>

<style scoped></style>

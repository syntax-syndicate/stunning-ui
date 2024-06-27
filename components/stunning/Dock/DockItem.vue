<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <a href="#">
          <div
            class="dock-item"
            v-motion
            :initial="{
              width: 80,
              height: 80
            }"
            :visible="{
              width: 80,
              height: 80
            }"
            :hovered="{
              width: 92,
              height: 92
            }"
          >
            <img
              v-motion
              :initial="{
                width: 80,
                height: 80,
                y: 0
              }"
              :visible="{
                width: 80,
                height: 80,
                y: 0
              }"
              :hovered="{
                width: 92,
                height: 92,
                y: -12
              }"
              :enter="{
                transition: {
                  type: 'spring',
                  damping: 60,
                  stiffness: 500,
                  mass: 1
                }
              }"
              :alt="`${app.name} app icon`"
              class="absolute border-none w-[92px] h-[92px]"
              :src="app.iconUrl"
            />
          </div>
        </a>
      </TooltipTrigger>
      <TooltipContent class="z-20">
        {{ app.name }}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>

<script lang="ts" setup>
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '~/components/ui/tooltip'

export interface App {
  name: string
  iconUrl: string
}

withDefaults(
  defineProps<{
    app: App
  }>(),
  {
    app: () => ({
      name: '',
      iconUrl: ''
    })
  }
)

const variants = {
  hovered: {
    width: 92,
    height: 92
  },
  initial: {
    width: 80,
    height: 80
  },
  visible: {
    width: 80,
    height: 80
  }
}
</script>

<style scoped></style>

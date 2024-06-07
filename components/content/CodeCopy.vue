<template>
  <span>
    <Transition name="fade" mode="out-in">
      <lucide:copy
        v-if="copied === false"
        class="self-center cursor-pointer text-muted-foreground hover:text-primary"
        @click="copyCode"
      />
      <lucide:check
        v-else
        class="self-center cursor-pointer text-muted-foreground hover:text-primary"
      />
    </Transition>
  </span>
</template>

<script setup lang="ts">
import { useClipboard, onClickOutside } from '@vueuse/core'

const props = defineProps<{
  code: string
}>()

const { copy } = useClipboard({ source: props.code })
const copied = ref(false)
function copyCode() {
  copy(props.code).then(() => {
    copied.value = true
  })
}
const checkIconRef = ref<HTMLElement>()
onClickOutside(checkIconRef, () => {
  copied.value = false
})
</script>

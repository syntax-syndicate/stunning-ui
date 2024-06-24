<template>
  <div ref="checkIconRef">
    <Transition name="fade" mode="out-in">
      <Icon
        name="lucide:copy"
        v-if="copied === false"
        class="self-center cursor-pointer text-muted-foreground hover:text-primary"
        @click="copyCode"
      />
      <Icon
        name="lucide:check"
        v-else
        class="self-center cursor-pointer text-muted-foreground hover:text-primary"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useClipboard, onClickOutside } from '@vueuse/core'

const props = defineProps<{
  code: string
}>()

const { copy } = useClipboard({ source: props.code })

const checkIconRef = ref<HTMLElement>()
const copied = ref(false)

const copyCode = async () => {
  await copy(props.code)
  copied.value = true
}

onClickOutside(checkIconRef, () => {
  copied.value = false
})
</script>

<template>
  <Tabs
    v-if="variant === 'separate'"
    class="[&:not(:first-child)]:mt-5"
    :default-value="label(($slots.default?.() ?? [])[0]?.props)"
  >
    <TabsList>
      <TabsTrigger
        v-for="(slot, i) in $slots.default?.() ?? []"
        :key="`${i}${label(slot.props)}`"
        :value="label(slot.props)"
      >
        <!-- <Icon
          v-if="icon(slot?.props)"
          :name="icon(slot?.props)!"
          class="self-center mr-1.5"
        /> -->
        {{ label(slot.props) }}
      </TabsTrigger>
    </TabsList>

    <TabsContent
      v-for="(slot, i) in $slots.default?.() ?? []"
      :key="`${i}${label(slot.props)}`"
      :value="label(slot.props)"
    >
      <component :is="slot" />
    </TabsContent>
  </Tabs>

  <Card
    v-else-if="variant === 'card'"
    class="sui-card [&:not(:first-child)]:mt-5"
  >
    <ScrollArea>
      <div class="border-b p-0.5 flex text-sm relative overflow-x-auto">
        <div class="flex p-1">
          <div
            v-for="(slot, i) in $slots.default?.() ?? []"
            :key="`${i}${label(slot.props)}`"
            :value="label(slot.props)"
            class="flex px-3 py-1.5 rounded-md text-muted-foreground transition-all duration-75 cursor-pointer"
            :class="[activeTabIndex === i && 'bg-muted text-primary']"
            @mousedown.left="activeTabIndex = i"
          >
            <!-- <Icon
              v-if="icon(slot?.props)"
              :name="icon(slot?.props)!"
              class="self-center mr-1.5"
            /> -->
            {{ label(slot.props) }}
          </div>
        </div>
        <CopyButton
          v-if="$slots.default?.()[activeTabIndex]?.props?.code"
          class="self-center ml-auto mr-3 pl-2"
          :code="$slots.default?.()[activeTabIndex]?.props?.code"
        />
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>

    <div
      v-for="(slot, i) in $slots.default?.() ?? []"
      v-show="activeTabIndex === i"
      :key="`${i}${label(slot.props)}`"
      :value="label(slot.props)"
      class="mt-0"
      :class="[padded && ($slots.default?.()[activeTabIndex]?.type as any).tag !== 'pre' && 'p-0', label(slot.props) === 'Code' ? 'w-full overflow-auto max-h-[640px]' : '']"
    >
      <component :is="slot" :in-group="true" />
    </div>
  </Card>
</template>

<script setup lang="ts">
import ScrollBar from '../ui/scroll-area/ScrollBar.vue'
import ScrollArea from '../ui/scroll-area/ScrollArea.vue'
import Tabs from '../ui/tabs/Tabs.vue'
import TabsList from '../ui/tabs/TabsList.vue'
import TabsContent from '../ui/tabs/TabsContent.vue'
import TabsTrigger from '../ui/tabs/TabsTrigger.vue'
import CopyButton from './CopyButton.vue'

withDefaults(
  defineProps<{
    variant?: 'separate' | 'card'
    padded?: boolean
  }>(),
  {
    variant: 'separate',
    padded: true
  }
)

const activeTabIndex = ref(0)

// const iconMap = new Map(Object.entries(useConfig().value.main.codeIcon))
// function icon(props: any) {
//   return (
//     props?.icon ||
//     iconMap.get(props?.filename?.toLowerCase()) ||
//     iconMap.get(props?.language)
//   )
// }

function label(props: any) {
  return props?.label || props?.filename
}
</script>

<style>
.prose .sui-card :where(pre) {
  @apply border-none;
}

.sui-card .blocks-playground {
  @apply border-none m-0;
}
</style>

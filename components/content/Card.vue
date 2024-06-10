<template>
  <div class="[&:not(:first-child)]:mt-5 group-has-[div]:mt-0">
    <NuxtLink :to="to" :target="target">
      <Card class="transition-all relative" :class="[to && 'hover:bg-muted']">
        <CardHeader
          v-if="title || $slots.title || description || $slots.description"
        >
          <!-- <Icon v-if="icon" class="mb-2" :name="icon" size="24" /> -->
          <CardTitle v-if="title || $slots.title">
            <ContentSlot :use="$slots.title" unwrap="p" />
            {{ title }}
          </CardTitle>
          <CardDescription v-if="description || $slots.description">
            <ContentSlot :use="$slots.description" unwrap="p" />
            {{ description }}
          </CardDescription>
        </CardHeader>
        <CardContent v-if="content || $slots.content || $slots.default">
          <ContentSlot :use="$slots.content" unwrap="p" />
          <ContentSlot unwrap="p" />
        </CardContent>
        <CardFooter v-if="footer || $slots.footer">
          <ContentSlot :use="$slots.footer" unwrap="p" />
          {{ footer }}
        </CardFooter>
        <!-- <Icon v-if="to" name="lucide:arrow-up-right" class="absolute right-4 top-4" /> -->
      </Card>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter
} from '@/components/ui/card'

defineProps<{
  title?: string
  description?: string
  footer?: string
  content?: string
  to?: string
  target?: string
  icon?: string
}>()
</script>

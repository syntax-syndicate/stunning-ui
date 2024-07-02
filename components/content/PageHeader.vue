<template>
  <header class="mb-8 gap-16">
    <div class="header-text">
      <h1 class="mb-4">{{ page.navigation.title }}</h1>
      <span class="text-muted-foreground">{{ page.description }}</span>
      <div class="font-semibold my-4 space-x-2" v-if="categoryList.length > 1">
        <Badge v-for="item in categoryList" :key="item" variant="secondary">
          {{ item }}
        </Badge>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Badge from '../ui/badge/Badge.vue'

const { path } = useRoute()

const content = await queryContent().find()
const idx = content.findIndex((item) => item._path === path)
const page = content[idx]

useContentHead(page)

const categoryList = computed(() => {
  return page?.category.split(',').map((item: string) => item.trim())
})
</script>

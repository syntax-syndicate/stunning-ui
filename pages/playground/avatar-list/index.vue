<template>
  <main
    class="w-screen h-screen flex flex-col justify-center items-center bg-dots"
  >
    <AvatarList :list="reviews" />
  </main>
</template>

<script lang="ts" setup>
import AvatarList from '~/components/stunning/AvatarList.vue'
import { reviews } from '~/lib/constants'
</script>

<style scoped></style>

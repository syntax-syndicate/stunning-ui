<template>
  <NuxtLayout
    name="playground"
    class="container max-w-screen-md flex items-center justify-center"
  >
    <LandingHeadline
      section="Overview"
      title="Why choose our service?"
      :description="paragraphPlaceholder"
    />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { paragraphPlaceholder } from '~/lib/constants'
</script>

<style scoped></style>

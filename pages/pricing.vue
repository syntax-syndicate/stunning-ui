<template>
  <div class="bg-background w-full h-screen">
    <ClientOnly>
      <SiteHeader />
    </ClientOnly>
    <main
      class="container mx-auto max-w-screen-2xl flex-center flex-col mt-20 mb-40"
    >
      <!-- Pricing -->
      <SitePricing />

      <!-- FAQ -->
      <SiteFAQ />
    </main>
    <SiteFooter />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>

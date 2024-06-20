<template>
  <div>
    <ClientOnly>
      <SiteHeader />
    </ClientOnly>
    <main
      class="container max-w-screen-2xl mx-auto h-[calc(100vh-4rem)] sm:rounded"
    >
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>

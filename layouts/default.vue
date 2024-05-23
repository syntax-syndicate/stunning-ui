<template>
  <div>
    <ClientOnly>
      <SiteHeader />
    </ClientOnly>
    <main class="container max-w-screen-2xl my-12 mx-auto sm:rounded">
      <div class="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8">
        <slot />
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>

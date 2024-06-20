<template>
  <NuxtLayout name="playground" class="bg-dots">
    <div class="py-12 flex items-center justify-center flex-col h-full">
      <div
        class="container bg-neutral-50/90 dark:bg-neutral-900/90 border dark:border-neutral-800 rounded-lg max-w-screen-lg relative px-4 py-12 mx-auto sm:py-16 sm:px-16 sm:flex sm:items-end sm:justify-between"
      >
        <h3
          class="text-4xl font-extrabold tracking-tight text-primary leading-9 sm:text-5xl sm:leading-10"
        >
          <span>Launch your SaaS</span>
          <br />
          <span class="text-neon"> in days, not weeks. </span>
        </h3>
        <div class="flex mt-8 sm:flex-shrink-0 sm:mt-0 gap-4">
          <Button variant="brand" @click="navigateTo('/')">
            Get started
          </Button>
          <Button @click="navigateTo('/')"> Live demo </Button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup></script>

<style scoped></style>

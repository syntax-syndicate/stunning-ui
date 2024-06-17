<template>
  <NuxtLayout name="playground" class="bg-dots">
    <div class="py-12 flex items-center justify-center flex-col h-full">
      <div
        class="container px-4 py-12 mx-auto sm:py-16 sm:px-24 sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-8"
      >
        <h2
          class="text-4xl font-extrabold tracking-tight text-primary text-center leading-9 sm:text-5xl sm:leading-10"
        >
          <span class="text-neon"> Start your free trial today </span>
        </h2>
        <h3 class="text-muted-foreground text-center">
          <p>Celebrate the joy of accomplishment with an app designed</p>
          <p>to track your progress and motivate your efforts.</p>
        </h3>
        <div class="flex mt-8 sm:flex-shrink-0 sm:mt-0 gap-4">
          <Button variant="brand" @click="navigateTo('/')">
            Get started
          </Button>
          <Button @click="navigateTo('/')"> Learn more </Button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup></script>

<style scoped></style>

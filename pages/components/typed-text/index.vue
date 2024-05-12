<template>
  <NuxtLayout name="component">
    <div class="">
      <header class="space-y-2">
        <h1 class="text-3xl text-primary">Typed Text</h1>
        <p class="text-secondary">
          Typically used to display dynamic text changes in the Hero Section.
        </p>
      </header>
      <main class="w-full mt-8">
        <div
          class="border border-neutral-800 relative w-full h-80 rounded-2xl overflow-hidden"
        >
          <div class="flex-center flex-col h-full text-5xl font-semibold">
            <p class="text-center">
              <span class="text-neon">Stunning UI</span> is designed for
            </p>
            <p>
              <TypedText
                :words="[
                  'Designers',
                  'Developers',
                  'Creators',
                  'Indie Hackers'
                ]"
                class="ml-2 text-neon"
                :typeSpeed="75"
              />
            </p>
          </div>
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup></script>

<style scoped></style>

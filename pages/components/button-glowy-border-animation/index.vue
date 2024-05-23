<template>
  <NuxtLayout name="component">
    <div class="">
      <header class="space-y-2">
        <h1 class="text-3xl text-primary">Glowy Border Animation</h1>
        <p class="text-secondary-foreground">
          Commonly used for the background in the Page header
        </p>
      </header>
      <main class="w-full mt-8">
        <div
          class="border border-border relative w-full h-32 flex-center flex-col gap-2 rounded-2xl overflow-hidden"
        >
          <ButtonGlowyBorder>
            <span>Sign in</span>
          </ButtonGlowyBorder>
          <!-- <ButtonGlowyBorder color="#6ee7b7">
            <span>Sign in</span>
          </ButtonGlowyBorder> -->
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup></script>

<style scoped></style>

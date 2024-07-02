<template>
  <header
    class="flex h-16 items-center mx-auto bg-background/60 backdrop-blur fixed w-full top-0 sm:top-10 z-50 border-b dark:border-neutral-800"
  >
    <div class="container max-w-screen-xl flex justify-between px-4 sm:px-8">
      <div class="mr-4">
        <a
          class="flex items-center justify-center space-x-3 text-lg font-semibold py-6 text-center text-neutral-600 dark:text-neutral-100 selection:bg-emerald-500 mr-10"
          href="/"
        >
          <div
            class="relative h-8 w-8 md:h-6 md:w-6 bg-background text-white flex items-center justify-center rounded-md text-sm antialiased"
          >
            <div class="text-sm text-emerald-500 relative z-20">
              <MinimalLogo class="w-6 h-6" />
            </div>
          </div>
          <div class="flex items-center gap-2">
            <h1 class="text-primary text-xl">Acme</h1>
          </div>
        </a>
      </div>
      <div class="flex items-center gap-4">
        <nav class="items-center space-x-2 text-sm font-medium hidden xl:flex">
          <Button variant="link" @click="navigateTo('/')"> Features </Button>
          <Button variant="link" @click="navigateTo('/')"> Pricing </Button>
          <Button variant="link" @click="navigateTo('/')"> FAQ </Button>
        </nav>
        <div
          class="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end"
        >
          <Button size="sm" variant="ghost"> Sign in </Button>
          <Button size="sm" variant="brand"> Get started free </Button>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style scoped></style>

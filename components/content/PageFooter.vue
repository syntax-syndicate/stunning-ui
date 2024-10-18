<template>
  <footer
    class="w-full space-y-10 pb-16 border-t border-neutral-900/5 dark:border-white/5"
  >
    <div
      class="container max-w-screen-2xl flex flex-col items-center justify-between gap-5 pt-8 sm:flex-row"
    >
      <p class="text-xs text-neutral-600 dark:text-neutral-500">
        Building in public by
        <NuxtLink
          target="_blank"
          class="underline"
          href="https://github.com/robert_shaw_x"
        >
          Robert Shaw
        </NuxtLink>
      </p>
      <div class="flex gap-4">
        <NuxtLink
          target="_blank"
          class="group underline"
          href="https://twitter.com/robert_shaw_x"
        >
          <span class="sr-only">Follow me on X</span>
          <Icon
            name="ri:twitter-x-line"
            class="h-5 w-5 text-neutral-500 transition group-hover:text-neutral-900 dark:group-hover:text-neutral-300"
          />
        </NuxtLink>
        <NuxtLink
          target="_blank"
          class="group underline"
          href="https://github.com/xiaoluoboding/stunning-ui"
        >
          <span class="sr-only">Follow me on GitHub</span>
          <Icon
            name="ri:github-fill"
            class="h-5 w-5 text-neutral-500 transition group-hover:text-neutral-900 dark:group-hover:text-neutral-300"
          />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped></style>

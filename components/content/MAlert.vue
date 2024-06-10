<template>
  <div class="alert info">
    <div class="alert-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.alert {
  @apply border border-sky-500/50;
  @apply my-8 py-1 px-5 rounded-lg;
}

.info {
  @apply bg-sky-200 dark:bg-sky-700/50;
}

.info p {
  @apply text-sky-800 dark:text-sky-300;
}

.alert-content p {
  @apply m-0;
}
</style>

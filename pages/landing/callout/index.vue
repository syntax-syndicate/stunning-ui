<template>
  <NuxtLayout name="playground">
    <main class="w-full h-full flex flex-col justify-center items-center px-8">
      <div
        class="group rounded-full border border-black/5 bg-neutral-100 text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
      >
        <Badge variant="secondary" class="rounded-full flex px-2 gap-2">
          😻 Stunning UI is on Product Hunt today
          <div class="text-muted-foreground group-hover:text-foreground">
            <span>Support us</span>
            <Icon
              name="ri:arrow-right-line"
              class="w-4 h-4 ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </div>
        </Badge>
      </div>
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup></script>

<style scoped></style>

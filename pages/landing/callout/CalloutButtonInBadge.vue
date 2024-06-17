<template>
  <NuxtLayout name="playground">
    <main class="w-full h-full flex flex-col justify-center items-center px-8">
      <div
        class="group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
      >
        <Badge
          variant="secondary"
          class="rounded-full flex pl-2 pr-[1px] gap-2"
        >
          Join 3K+ members
          <Button size="xs" class="rounded-full" variant="brand">
            Join Waitlist
            <ri:arrow-right-line
              class="w-4 h-4 ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </Button>
        </Badge>
      </div>
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup></script>

<style scoped></style>

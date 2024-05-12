<template>
  <NuxtLayout name="component">
    <div class="">
      <header class="space-y-2">
        <h1 class="text-3xl text-primary">Text Reveal</h1>
        <p class="text-secondary">Scrolling text reveal</p>
      </header>
      <main class="w-full mt-8">
        <div
          class="border border-neutral-800 relative w-full h-[200rem] rounded-2xl overflow-hidden"
        >
          <div class="flex flex-col h-full p-8">
            <div className="pb-24 flex-center w-full text-sm text-white/30">
              Scroll down
            </div>
            <TextReveal :text="text" />
          </div>
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const text =
  'Public opinion is the aggregate result of individual opinions—now uniform, now conflicting—of the men and women who make up society or any group of society. In order to understand public opinion, one must go back to the individual who makes up the group.'
</script>

<style scoped></style>

<template>
  <main class="w-screen h-screen flex flex-col justify-center items-center">
    <div
      className="absolute top-0 right-0 inset-0 z-0 h-screen w-screen bg-white p-2 bg-[url('/assets/wallpaper-small.jpg')] bg-cover bg-center"
    ></div>
    <div class="absolute bottom-10 max-w-full px-4 lg:px-8">
      <DockBar :appList="appList" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import DockBar from '~/components/stunning/Dock/DockBar.vue'

const appList = [
  {
    name: 'Launchpad',
    iconUrl: '/assets/launchpad.webp'
  },
  {
    name: 'Arc',
    iconUrl: '/assets/arc.webp'
  },
  {
    name: 'Spark',
    iconUrl: '/assets/spark.webp'
  },
  {
    name: 'Spotify',
    iconUrl: '/assets/spotify.webp'
  },
  {
    name: 'Notion',
    iconUrl: '/assets/notion.webp'
  },
  {
    name: 'Telegram',
    iconUrl: '/assets/telegram.webp'
  },
  {
    name: 'VSCode',
    iconUrl: '/assets/vscode.webp'
  },
  {
    name: 'iTerm2',
    iconUrl: '/assets/iterm.webp'
  },
  {
    name: 'Figma',
    iconUrl: '/assets/figma.webp'
  },

  {
    name: 'Linear',
    iconUrl: '/assets/linear.webp'
  }
]
</script>

<style scoped></style>

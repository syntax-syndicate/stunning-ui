<template>
  <main class="w-screen h-screen px-24 relative">
    <StreamingText :text="text" />

    <Button
      class="rounded-full absolute left-1/2 -translate-x-1/2 bottom-12"
      @click="handleReplay"
    >
      <Icon name="ri:refresh-line" class="mr-2" />
      Replay
    </Button>
  </main>
</template>

<script lang="ts" setup>
import StreamingText from '@/components/stunning/StreamingText.vue'

const text = `In the music-loving city of Harmonia, a humble shoe cobbler named Elias, with a gift for singing, shares his beautiful voice only with the confines of his shop. One day, a poor, old woman, Nelda, enters his shop and upon hearing him sing, offers to teach him music in return for shoes. Nelda trains Elias and encourages him to enter a city music festival. Overcoming his fears, Elias performs, his voice enchants the entire city, and he wins the competition. He becomes famous but stays grounded, continuing his trade as a cobbler, while his extraordinary voice adds a new melody to the city's music.`

const handleReplay = () => {
  window.location.reload()
}
</script>

<style scoped></style>

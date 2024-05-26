<template>
  <div class="blocks-playground border border-neutral-700 rounded-lg">
    <iframe
      :src="url"
      class="w-full aspect-video rounded-lg"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>
<script>
export default {
  props: {
    url: String
  },
  fetchOnServer: false
}
</script>

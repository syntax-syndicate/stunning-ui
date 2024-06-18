<template>
  <main class="w-screen h-screen">
    <TheBanner />
    <TheNavigation />
    <TheHero />
    <TheLogoCloud />
    <TheFeatures />
    <ThePricing />
    <TheTestimonials />
    <TheFAQ />
    <TheCTA />
    <TheFooter />
  </main>
</template>

<script lang="ts" setup>
import TheBanner from '../banner/TheBanner.vue'
import TheNavigation from '../navigation/TheNavigation.vue'
import TheHero from '../hero/TheHero.vue'
import TheLogoCloud from '../logo-cloud/TheLogoCloud.vue'
import TheFeatures from '../features/TheFeatures.vue'
import ThePricing from '../pricing/ThePricing.vue'
import TheTestimonials from '../testimonials/TheTestimonials.vue'
import TheFAQ from '../faq/TheFAQ.vue'
import TheCTA from '../call-to-action/TheCTA.vue'
import TheFooter from '../footer/TheFooter.vue'
</script>

<style scoped></style>

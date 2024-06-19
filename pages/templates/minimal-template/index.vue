<template>
  <main class="w-screen h-screen">
    <TheBanner />
    <TheNavigation />
    <TheHero />
    <TheLogoCloud />

    <GlowyDivider />

    <TheFeatures />

    <GlowyDivider />

    <TheTestimonials />

    <GlowyDivider />

    <ThePricing />

    <GlowyDivider />

    <TheFAQ />

    <GlowyDivider direction="top" />

    <TheCTA />

    <TheFooter />
  </main>
</template>

<script lang="ts" setup>
import GlowyDivider from '~/components/stunning/GlowyDivider.vue'

import TheBanner from '../../landing/banner/TheBanner.vue'
import TheNavigation from '../../landing/navigation/TheNavigation.vue'
import TheHero from '../../landing/hero/TheHero.vue'
import TheLogoCloud from '../../landing/logo-cloud/TheLogoCloud.vue'
import TheFeatures from '../../landing/features/TheFeatures.vue'
import ThePricing from '../../landing/pricing/ThePricing.vue'
import TheTestimonials from '../../landing/testimonials/TheTestimonials.vue'
import TheFAQ from '../../landing/faq/TheFAQ.vue'
import TheCTA from '../../landing/call-to-action/TheCTA.vue'
import TheFooter from '../../landing/footer/TheFooter.vue'
</script>

<style scoped></style>

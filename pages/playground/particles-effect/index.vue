<template>
  <div class="h-screen w-screen overflow-hidden bg-black">
    <div
      class="mx-auto mt-20 mb-4 w-screen flex flex-col justify-center items-center gap-4 z-1"
    >
      <div class="w-full mx-auto flex justify-center">
        <Badge :variant="isDark ? '' : 'secondary'">Follow us on X</Badge>
      </div>

      <div class="text-center text-5xl text-white">
        <p><span class="">Be the First to get update</span></p>
        <p>by <span class="text-neon">Joining Our Waitlist!</span></p>
      </div>

      <div class="text-muted-foreground">
        Be first to experience Sparkles. Join our waitlist for exclusive
        benefits and revolutionary automation solutions.
      </div>

      <div class="w-full flex flex-col justify-center items-center gap-8">
        <div class="max-w-sm mx-auto flex justify-center items-center gap-2">
          <Input id="email" type="email" placeholder="Email" />
          <Button :variant="isDark ? '' : 'secondary'"> Join Waitlist </Button>
        </div>
        <div class="grid grid-cols-3 gap-8 text-white">
          <simple-icons:x class="w-6 h-6" />
          <simple-icons:github class="w-6 h-6" />
          <simple-icons:producthunt class="w-6 h-6" />
        </div>
      </div>
    </div>

    <div
      class="relative z-0 -mt-20 h-[400px] w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
    >
      <ParticlesEffect
        :density="1200"
        class="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
      />
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,#5eead42e,transparent_70%)]"
      />
      <div
        class="absolute inset-x-0 -bottom-[254px] h-full w-full rounded-[100%] bg-gradient-to-b from-white to-black"
      />
      <div
        class="absolute inset-x-0 -bottom-[256px] h-full w-full rounded-[100%] bg-neutral-950 shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff7d]"
      />
    </div>
  </div>
</template>

<script setup>
import { useDarkmode } from '@/composables/useDarkmode'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const { isDark } = useDarkmode()

import ParticlesEffect from '@/components/stunning/ParticlesEffect.vue'
</script>

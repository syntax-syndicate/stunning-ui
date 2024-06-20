<template>
  <NuxtLayout>
    <div class="flex justify-center items-center h-full">
      <div class="mx-auto flex max-w-sm flex-col items-center text-center">
        <p
          class="rounded-full bg-blue-50 p-3 text-sm font-medium dark:bg-neutral-800"
        >
          <Icon name="ri:alarm-warning-line" class="h-6 w-6" />
        </p>
        <h1
          class="mt-3 text-2xl font-semibold text-neutral-800 dark:text-white md:text-3xl"
        >
          Page not found
        </h1>
        <p class="mt-4 text-neutral-500 dark:text-neutral-400">
          The page you are looking for doesn&apos;t exist.
        </p>

        <div
          class="group mt-6 flex w-full shrink-0 items-center gap-x-3 sm:w-auto"
        >
          <Button
            @click="() => router.back()"
            :class="buttonVariants({ variant: 'secondary' })"
          >
            <Icon
              name="ri:arrow-left-line"
              class="h-4 w-4 transition-transform group-hover:-translate-x-1 mr-1"
            />
            <span>Go back</span>
          </Button>

          <NuxtLink href="/" :class="buttonVariants({ variant: 'default' })">
            Take me home
          </NuxtLink>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'
import { buttonVariants } from '@/components/ui/button'

const router = useRouter()

defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <header
    class="flex h-16 items-center mx-auto bg-background/75 backdrop-blur sticky top-0 z-50 border-b dark:border-neutral-800"
  >
    <div class="container max-w-screen-2xl px-4 sm:px-6 md:px-8 py-4">
      <div
        class="relative flex items-center justify-between font-semibold leading-6"
      >
        <div class="mr-4 md:flex">
          <a
            class="flex items-center justify-center space-x-3 text-lg font-semibold py-6 text-center text-neutral-600 dark:text-neutral-100 selection:bg-emerald-500 mr-10"
            href="/"
          >
            <div
              class="relative h-8 w-8 md:h-6 md:w-6 bg-background text-white flex items-center justify-center rounded-md text-sm antialiased"
            >
              <div class="text-sm text-emerald-500 relative z-20">
                <SiteLogo class="w-8 h-8" />
              </div>
            </div>
            <div class="flex items-center gap-2">
              <h1 class="text-primary text-xl">Stunning UI</h1>
              <Badge variant="brand">beta</Badge>
            </div>
          </a>
        </div>
        <nav
          class="hidden lg:flex items-center space-x-2 text-sm font-medium xl:flex"
        >
          <Button variant="link" @click="navigateTo('/components')">
            Components
          </Button>
          <Button variant="link" @click="navigateTo('/blocks')">
            Blocks
          </Button>
          <Button variant="link" @click="navigateTo('/templates')">
            Templates
          </Button>
          <!-- <Button variant="link" @click="navigateTo('/pricing')">
          Pricing
        </Button> -->
          <Button
            variant="link"
            @click="
              navigateTo('https://stunningui.featurebase.app/roadmap', {
                external: true,
                open: { target: '_blank' }
              })
            "
          >
            Roadmap
          </Button>
        </nav>
        <div
          class="hidden lg:flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end"
        >
          <ToggleDarkmode />

          <Button
            variant="ghost"
            size="icon"
            @click="
              navigateTo(
                'https://x.com/robert_shaw_x/status/1847189626630689064',
                {
                  external: true,
                  open: { target: '_blank' }
                }
              )
            "
          >
            <Icon name="ri:twitter-x-line" class="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            @click="
              navigateTo('https://github.com/xiaoluoboding/stunning-ui', {
                external: true,
                open: { target: '_blank' }
              })
            "
          >
            <Icon name="ri:github-fill" class="h-6 w-6" />
          </Button>
        </div>
        <div
          id="hamburger"
          class="lg:hidden"
          :class="{ open: isOpenMobileMenu }"
          @click="toggleMobileMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <!-- mobile menu - begin -->
    <Teleport to="body">
      <div id="menu-mobile" class="block lg:hidden">
        <div class="menu-mobile-bg"></div>

        <ul class="menu-mobile-list">
          <li class="menu-mobile-item" @click="(e) => toggleDarkmode()">
            <button
              class="flex items-center text-neutral-900 dark:text-white hover:text-neutral-500 dark:hover:text-emerald-500"
            >
              <Icon name="lucide:moon" class="h-5 w-5" v-if="isDark" />
              <Icon name="lucide:sun" class="h-5 w-5" v-else />
              <span class="ml-2">Dark Mode</span>
            </button>
          </li>
          <li class="menu-mobile-item">
            <a
              href="https://x.com/robert_shaw_x/status/1847189626630689064"
              target="_blank"
              class="flex items-center text-neutral-900 dark:text-white hover:text-neutral-500 dark:hover:text-emerald-500"
            >
              <span class="sr-only hidden">Stunning UI on Twitter</span>
              <Icon name="mdi:twitter" class="h-5 w-5" />
              <span class="ml-4">Twitter</span>
            </a>
          </li>
          <li class="menu-mobile-item">
            <a
              href="https://github.com/xiaoluoboding/stunning-ui"
              target="_blank"
              class="flex items-center text-neutral-900 dark:text-white hover:text-neutral-500 dark:hover:text-emerald-500"
            >
              <span class="sr-only hidden">Stunning UI on GitHub</span>
              <Icon name="mdi:github" class="h-5 w-5" />
              <span class="ml-4">GitHub</span>
            </a>
          </li>

          <li class="menu-mobile-item">
            <a
              href="/components"
              class="flex items-center text-neutral-900 dark:text-white hover:text-neutral-500 dark:hover:text-emerald-500"
            >
              <Icon name="lucide:box" class="h-5 w-5" />
              <span class="ml-4">Components</span>
            </a>
          </li>
          <li class="menu-mobile-item">
            <a
              href="/blocks"
              class="flex items-center text-neutral-900 dark:text-white hover:text-neutral-500 dark:hover:text-emerald-500"
            >
              <Icon name="lucide:blocks" class="h-5 w-5" />
              <span class="ml-4">Blocks</span>
            </a>
          </li>
          <li class="menu-mobile-item">
            <a
              href="/templates"
              target="_blank"
              class="flex items-center text-neutral-900 dark:text-white hover:text-neutral-500 dark:hover:text-emerald-500"
            >
              <Icon name="lucide:layout-template" class="h-5 w-5" />
              <span class="ml-2">Templates</span>
            </a>
          </li>
        </ul>
      </div>
    </Teleport>
    <!-- mobile menu - end -->
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import gsap from 'gsap'

import { useDarkmode } from '~/composables/useDarkmode'

const { isDark, toggleDarkmode } = useDarkmode()

const isOpenMobileMenu = ref(false)

const toggleMobileMenu = () => {
  if (!isOpenMobileMenu.value) {
    gsap.to('.menu-mobile-bg', {
      duration: 0.66,
      x: '-100vw',
      ease: 'expo.inOut'
    })

    const menuItemsRef = document.querySelectorAll('.menu-mobile-item')

    menuItemsRef.forEach((item, idx) => {
      gsap.to(item, {
        duration: 0.88,
        x: '-100vw',
        scaleX: 1,
        delay: idx * 0.04,
        ease: 'expo.inOut'
      })
    })
  } else {
    gsap.to('.menu-mobile-bg', {
      duration: 0.88,
      x: 0,
      ease: 'expo.inOut'
    })

    const menuItemsRef = document.querySelectorAll('.menu-mobile-item')

    menuItemsRef.forEach((item, idx) => {
      gsap.to(item, {
        duration: 0.66,
        x: 0,
        delay: idx * 0.02,
        ease: 'expo.inOut'
      })
    })
  }
  isOpenMobileMenu.value = !isOpenMobileMenu.value
  document.body.classList.toggle('overflow-hidden')
}
</script>

<style scoped>
#hamburger {
  width: 24px;
  height: 18px;
  position: relative;
  cursor: pointer;
  position: absolute;
  right: 0;
  background-color: transparent;
}

#hamburger:hover span:nth-child(1) {
  top: -2px;
  transition: 0.2s ease-in-out;
}

#hamburger:hover span:nth-child(3) {
  top: 18px;
  transition: 0.16s ease-in-out;
}

#hamburger span {
  z-index: 3;
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  border-radius: 5px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
  @apply bg-neutral-900 dark:bg-neutral-50;
}

#hamburger span:nth-child(1) {
  top: 0px;
}

#hamburger span:nth-child(2) {
  top: 8px;
}

#hamburger span:nth-child(3) {
  top: 16px;
}

#hamburger.open span:nth-child(1) {
  top: 8px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
  @apply bg-neutral-900 dark:bg-neutral-50;
}

#hamburger.open span:nth-child(2) {
  opacity: 0;
  left: -30px;
  transition: 0.16s ease-in-out;
}

#hamburger.open span:nth-child(3) {
  top: 8px;
  transform: rotate(-135deg);
  @apply bg-neutral-900 dark:bg-neutral-50;
}

.menu-mobile-bg {
  @apply w-full h-full fixed top-16 right-[-100%] bg-neutral-50 dark:bg-neutral-900 z-[100] will-change-transform;
}

.menu-mobile-list {
  @apply z-[101] fixed top-20 left-0 text-white w-full list-none;
}

.menu-mobile-list .menu-mobile-item {
  @apply relative left-full cursor-pointer text-base text-white font-normal py-4 px-9;
  @apply hover:text-emerald-500;
  @apply border-b border-neutral-300 dark:border-neutral-700;
  @apply will-change-transform;
}

.menu-mobile-list .menu-mobile-item:hover {
  transition: all 0.1s ease-in-out;
}
</style>

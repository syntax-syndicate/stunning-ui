<template>
  <main class="w-screen h-screen relative bg-dots flex flex-col">
    <footer class="absolute bottom-0 left-0 w-full bg-background">
      <div class="border-t border-neutral-200 dark:border-neutral-800">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl py-8 lg:py-16">
          <div class="lg:grid lg:grid-cols-3 lg:gap-8">
            <div
              class="flex flex-col lg:grid grid-flow-col auto-cols-fr gap-8 lg:col-span-2"
            >
              <div>
                <h3
                  class="text-sm/6 font-semibold text-neutral-900 dark:text-white"
                >
                  Resources
                </h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <Button
                      variant="link"
                      type="button"
                      class="text-sm p-0 relative text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                    >
                      Help center
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="link"
                      type="button"
                      class="text-sm p-0 relative text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                    >
                      Docs
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="link"
                      type="button"
                      class="text-sm p-0 relative text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                    >
                      Roadmap
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="link"
                      type="button"
                      class="text-sm p-0 relative text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                    >
                      Changelog
                    </Button>
                  </li>
                </ul>
              </div>
              <div>
                <h3
                  class="text-sm/6 font-semibold text-neutral-900 dark:text-white"
                >
                  Features
                </h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <Button
                      variant="link"
                      type="button"
                      class="text-sm p-0 relative text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                    >
                      Affiliates
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="link"
                      type="button"
                      class="text-sm p-0 relative text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                    >
                      Portal
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="link"
                      type="button"
                      class="text-sm p-0 relative text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                    >
                      Jobs
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="link"
                      type="button"
                      class="text-sm p-0 relative text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                    >
                      Sponsors
                    </Button>
                  </li>
                </ul>
              </div>
              <div>
                <h3
                  class="text-sm/6 font-semibold text-neutral-900 dark:text-white"
                >
                  Company
                </h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <Button
                      variant="link"
                      type="button"
                      class="text-sm p-0 relative text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                    >
                      About
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="link"
                      type="button"
                      class="text-sm p-0 relative text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                    >
                      Pricing
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="link"
                      type="button"
                      class="text-sm p-0 relative text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                    >
                      Careers
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="link"
                      type="button"
                      class="text-sm p-0 relative text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                    >
                      Blog
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
            <div class="mt-10 lg:mt-0">
              <form>
                <div class="">
                  <div class="">
                    <div
                      class="flex content-center items-center justify-between text-sm"
                    >
                      <label
                        class="block font-medium text-neutral-700 dark:text-neutral-200"
                        >Subscribe to our newsletter</label
                      >
                    </div>
                  </div>
                  <div class="relative mt-3">
                    <div class="relative max-w-sm">
                      <input
                        type="email"
                        class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input placeholder-neutral-400 dark:placeholder-neutral-500 text-base px-3.5 py-2.5 shadow-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 pe-12 rounded-full"
                        placeholder="Enter your email"
                      />
                      <span
                        class="absolute inset-y-0 end-0 flex items-center px-3.5"
                      >
                        <Button variant="brand" size="xs" class="rounded-2xl">
                          Subscribe
                        </Button>
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="border-t border-neutral-200 dark:border-neutral-800">
        <div
          class="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3"
        >
          <div
            class="lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3"
          >
            <div
              class="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end"
            >
              <Button
                variant="ghost"
                size="icon"
                @click="navigateTo('https://x.com/robert_shaw_x')"
              >
                <Icon name="ri:twitter-x-line" class="h-[1.2rem] w-[1.2rem]" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                @click="navigateTo('https://github.com/xiaoluoboding')"
              >
                <Icon name="ri:github-fill" class="h-6 w-6" />
              </Button>
              <ToggleDarkmode />
            </div>
          </div>
          <div
            class="mt-3 lg:mt-0 lg:order-2 flex items-center justify-center"
          ></div>
          <div
            class="flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1"
          >
            <div class="mr-4 hidden md:flex items-center">
              <a
                class="flex items-center justify-center space-x-3 text-lg font-semibold text-center text-neutral-600 dark:text-neutral-100 selection:bg-emerald-500 mr-10"
                href="/"
              >
                <div
                  class="relative h-8 w-8 md:h-6 md:w-6 bg-background text-white flex items-center justify-center rounded-md text-sm antialiased"
                >
                  <div class="text-sm text-emerald-500 relative z-20">
                    <MinimalLogo class="w-6 h-6" />
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <h1 class="text-primary text-xl">Acme</h1>
                </div>
              </a>
              <p class="text-neutral-500 dark:text-neutral-400 text-sm">
                Copyright © {{ new Date().getFullYear() }}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>

<script lang="ts" setup></script>

<style scoped></style>

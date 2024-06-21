<template>
  <main class="bg-dots">
    <header
      class="flex h-16 items-center mx-auto bg-background/75 backdrop-blur sticky top-0 z-50 border-b dark:border-neutral-800"
    >
      <div class="container max-w-screen-2xl flex">
        <div class="mr-4 hidden md:flex">
          <a
            class="flex items-center justify-center space-x-3 text-lg font-semibold py-6 text-center text-neutral-600 dark:text-gray-100 selection:bg-emerald-500 mr-10"
            href="/"
          >
            <div
              class="relative h-8 w-8 md:h-6 md:w-6 bg-background text-white flex items-center justify-center rounded-md text-sm antialiased"
            >
              <div class="text-sm text-emerald-500 relative z-20">
                <SiteLogo class="w-6 h-6" />
              </div>
            </div>
            <div class="flex items-center gap-2">
              <h1 class="text-primary text-xl">Acme</h1>
            </div>
          </a>
        </div>
        <nav class="flex items-center space-x-2 text-sm font-medium xl:flex">
          <NavigationMenu class="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger class="bg-card">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div class="w-80 gap-5 p-4">
                    <ul class="flex flex-col gap-2">
                      <li
                        v-for="{ icon, title, description } in featureList"
                        :key="title"
                        class="rounded-md p-3 text-sm hover:bg-muted flex items-start gap-4"
                      >
                        <div>
                          <Icon :name="icon" class="size-6" />
                        </div>
                        <div>
                          <p
                            class="mb-1 font-semibold leading-none text-foreground"
                          >
                            {{ title }}
                          </p>
                          <p class="line-clamp-2 text-muted-foreground">
                            {{ description }}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Button
                    v-for="{ href, label } in routeList"
                    :key="label"
                    as-child
                    variant="ghost"
                    class="justify-start"
                  >
                    <a :href="href">
                      {{ label }}
                    </a>
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div
          class="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end"
        >
          <Button size="sm" variant="ghost"> Sign in </Button>
          <Button size="sm"> Sign up </Button>
        </div>
      </div>
    </header>
  </main>
</template>

<script lang="ts" setup>
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'

interface RouteProps {
  href: string
  label: string
}

interface FeatureProps {
  icon: string
  title: string
  description: string
}

const featureList: FeatureProps[] = [
  {
    icon: 'lucide:target',
    title: 'Task',
    description:
      'Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.'
  },
  {
    icon: 'lucide:layers',
    title: 'Dashboard',
    description:
      'Gain valuable insights into your productivity with detailed reports that help you understand your habits.'
  },
  {
    icon: 'lucide:blocks',
    title: 'Integrations',
    description:
      'Effortlessly manage and prioritize your tasks using Stunning UI`s intuitive interface, keeping your workload organized.'
  }
]

const routeList: RouteProps[] = [
  {
    href: '#pricing',
    label: 'Pricing'
  },
  {
    href: '#faq',
    label: 'FAQ'
  }
]
</script>

<style scoped></style>

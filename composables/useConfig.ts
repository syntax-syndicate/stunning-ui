import { defu } from 'defu'

export function useConfig() {
  const appConfig = computed(() => useAppConfig()?.stunning || {})

  const { navKeyFromPath } = useContentHelpers()
  const { navigation, page } = useContent()
  const route = useRoute()

  return computed(() => {
    const processedConfig = defu(appConfig.value)
    const header = processedConfig.header
    const main = processedConfig.main
    const aside = processedConfig.aside
    const footer = processedConfig.footer
    const toc = processedConfig.toc

    return {
      ...appConfig.value,
      ...processedConfig,
      header: {
        ...header,
        ...navKeyFromPath(route.path, 'header', navigation.value || []),
        ...page.value?.header
      } as typeof header,
      main: {
        ...main,
        ...navKeyFromPath(route.path, 'main', navigation.value || []),
        ...page.value?.main
      } as typeof main,
      aside: {
        ...aside,
        ...navKeyFromPath(route.path, 'aside', navigation.value || []),
        ...page.value?.aside
      } as typeof aside,
      toc: {
        ...toc,
        ...navKeyFromPath(route.path, 'toc', navigation.value || []),
        ...page.value?.toc
      } as typeof toc,
      footer: {
        ...footer,
        ...navKeyFromPath(route.path, 'footer', navigation.value || []),
        ...page.value?.footer
      } as typeof footer
    }
  })
}

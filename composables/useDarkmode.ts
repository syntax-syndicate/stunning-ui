const useDarkmode = () => {
  const colorMode = useColorMode()

  const toggleDarkmode = () => {
    colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
  }

  const isDark = computed(() => colorMode.value === 'dark')

  return {
    isDark,
    toggleDarkmode
  }
}

export { useDarkmode }

import tailwindColors from 'tailwindcss/colors'
import type { DefaultColors } from 'tailwindcss/types/generated/colors'

export type ColorType = keyof DefaultColors

export const formatThemeColors = (color: ColorType) => {
  return tailwindColors[color]
}

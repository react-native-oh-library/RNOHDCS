import matrices from '@react-native-oh-tpl/react-native-color-matrix-image-filters/rn-color-matrices'
import { concatColorMatrices } from '@react-native-oh-tpl/react-native-color-matrix-image-filters'

export const ColorMatrices = {
  matrices,
  concatColorMatrices
} as const

export type ColorMatrices = typeof ColorMatrices

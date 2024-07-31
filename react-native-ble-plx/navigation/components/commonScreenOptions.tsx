/* eslint-disable prettier/prettier */
import type { StackNavigationOptions } from '@react-navigation/stack'
import { useTheme } from 'styled-components'

export const useCommonScreenOptions: () => StackNavigationOptions = () => {
  const theme = useTheme()

  return {
    headerShadowVisible: false,
    headerTitleStyle: {
      fontSize: 22
    },
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
    orientation: 'portrait',
    title: '',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: theme.colors.mainRed
    }
  }
}

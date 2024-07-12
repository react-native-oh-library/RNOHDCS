/* eslint-disable prettier/prettier */
// import { SafeAreaView } from 'react-native-safe-area-context'
import { SafeAreaView } from 'react-native'
import styled, { css } from 'styled-components'

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    flex: 1;
    padding: ${theme.sizes.defaultScreenPadding}px;
  `}
`

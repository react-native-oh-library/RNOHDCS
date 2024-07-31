/* eslint-disable prettier/prettier */
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components'

export const Container = styled(TouchableOpacity)`
  ${({ theme }) => css`
    border-color: '#ff304d';
    border-width: 1px;
    padding: 12px;
    border-radius: 12px;
    margin-top: 12px;
  `}
`

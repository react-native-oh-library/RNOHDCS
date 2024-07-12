/* eslint-disable prettier/prettier */
import React from 'react'
import type { TestStateType } from '../../../types'
// import { AppText } from '../AppText/AppText'
import { Container, Header, Label } from './TestStateDisplay.styled'
import { StyleSheet, Text, View } from 'react-native'

export type TestStateDisplayProps = {
  label?: string
  state?: TestStateType
  value?: string
}

const marks: Record<TestStateType, string> = {
  DONE: '\u2705',
  ERROR: '\u274C',
  WAITING: '\u231B',
  IN_PROGRESS: '\u260E'
}

export function TestStateDisplay({ label, state, value }: TestStateDisplayProps) {
  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.Text}>{label}</Text>
        {!!state && <Text>{marks[state]}</Text>}
      </View> 
      {!!value && <Text>{value}</Text>}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#ff304d',
    borderBottomWidth:1,
    paddingBottom:5,
    margin: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  
  Text: {
    color: 'grey',
    fontSize: 16,
  },
});

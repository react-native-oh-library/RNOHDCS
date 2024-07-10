/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import { Container, StyledTitleText, StyledValueText } from './DeviceProperty.styled'

interface DevicePropertyProps {
  name: string
  value?: number | string | null
}

export const DeviceProperty: React.FC<DevicePropertyProps>=({ name, value }) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.titleText}>{name}:</Text>
      <Text style = {styles.valueText}>{value || '-'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    flexWrap:'wrap'
  },
  titleText: {
    fontWeight:'800'
  },
  valueText: {
    fontWeight:'500'
  },
  
});

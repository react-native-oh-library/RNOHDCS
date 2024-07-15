/* eslint-disable prettier/prettier */
import React from 'react'
import type { StackScreenProps } from '@react-navigation/stack'
import { ScrollView, Text, View } from 'react-native'
// import { ScreenDefaultContainer } from '../../../components/atoms'
import type { MainStackParamList } from '../../../navigation/navigators'
import { BLEService } from '../../../services'

type DeviceDetailsScreenProps = StackScreenProps<MainStackParamList, 'DEVICE_DETAILS_SCREEN'>

export function DeviceScreen(_props: DeviceDetailsScreenProps) {
  const connectedDevice = BLEService.getDevice()
  return (
    <View>
      <ScrollView>
        <Text>{JSON.stringify(connectedDevice, null, 4)}</Text>
      </ScrollView>
    </View>
  )
}

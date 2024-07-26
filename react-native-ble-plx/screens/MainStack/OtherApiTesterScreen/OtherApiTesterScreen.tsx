/* eslint-disable prettier/prettier */
import React from 'react'
import type { StackScreenProps } from '@react-navigation/stack'
import { ScrollView, Text, View } from 'react-native'
// import { ScreenDefaultContainer } from '../../../components/atoms'
import type { MainStackParamList } from '../../../navigation/navigators'
import { BLEService } from '../../../services'
import { AppButton } from '../../../components/atoms'

type OtherApiTesterScreenProps = StackScreenProps<MainStackParamList, 'OTHER_API_TESTER_SCREEN'>

export function OtherScreen(_props: OtherApiTesterScreenProps) {
  return (
    <View>
      <ScrollView>
        <AppButton
        label="destory"
        onPress={() => BLEService.destory()}
        />
      </ScrollView>
    </View>
  )
}

import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import {ScrollView, View } from 'react-native';
import NativeDatePickerView from 'react-native-date-picker/src/NativeDatePickerView'
export function NativeDatePickerViewCom() {
  return (
    <Tester>
      <TestSuite name='DatePickerDemo'>
        <TestCase itShould='date' tags={['C_API']}>
          <ScrollView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column' }}>
              {/*  */}
              <NativeDatePickerView
                style={{ height: 100, width: '100%', marginTop: 100 }}
                mode='date'
                onConfirm={() => {
                  console.log(1111111111111111111111111111111)
                }}
              />
            </View>
          </ScrollView>
        </TestCase>
        <TestCase itShould='time' tags={['C_API']}>
          <ScrollView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column' }}>
              {/*  */}
              <NativeDatePickerView
                style={{ height: 100, width: '100%', marginTop: 100 }}
                mode='time'
                onConfirm={() => {
                  console.log(1111111111111111111111111111111)
                }}
              />
            </View>
          </ScrollView>
        </TestCase>
        <TestCase itShould='datetime' tags={['C_API']}>
          <ScrollView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column' }}>
              {/*  */}
              <NativeDatePickerView
                style={{ height: 100, width: '100%', marginTop: 100 }}
                mode='datetime'
                onConfirm={() => {
                  console.log(1111111111111111111111111111111)
                }}
              />
            </View>
          </ScrollView>
        </TestCase>
      </TestSuite>
    </Tester>
  )
}
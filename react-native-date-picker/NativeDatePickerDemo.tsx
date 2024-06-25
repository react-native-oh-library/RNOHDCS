import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import { ScrollView, StyleSheet } from 'react-native';
import NativeDatePickerView from 'react-native-date-picker/src/NativeDatePickerView'
export function NativeDatePickerViewCom() {
  return (
    <Tester>
      <ScrollView style={styles.container}>
      <TestSuite name='DatePickerDemo'>
        <TestCase itShould='date' tags={['C_API']}>
          <NativeDatePickerView
            style={{ height: 300, width: '100%', }}
            mode='date'
            open
            date={new Date().toDateString()}
            onConfirm={() => {
              console.log(1111111111111111111111111111111)
            }}
            onCancel={() => {

            }}
          />
        </TestCase>
        <TestCase itShould='date -modal' tags={['C_API']}>
          <NativeDatePickerView
            style={{ height: 40, width: '100%', }}
            mode='date'
            modal
            date={new Date().toDateString()}
            onConfirm={() => {
              console.log(1111111111111111111111111111111)
            }}
            onCancel={() => {

            }}
          />
        </TestCase>
        <TestCase itShould='time' tags={['C_API']}>
          <NativeDatePickerView
            style={{ height: 300, width: '100%' }}
            mode='time'
            date={new Date().toDateString()}
            onConfirm={() => {
              console.log(1111111111111111111111111111111)
            }}
            onCancel={() => {

            }}
          />
        </TestCase>
        <TestCase itShould='time - modal' tags={['C_API']}>
          <NativeDatePickerView
            style={{ height: 40, width: '100%' }}
            mode='time'
            modal
            date={new Date().toDateString()}
            onConfirm={() => {
              console.log(1111111111111111111111111111111)
            }}
            onCancel={() => {

            }}
          />
        </TestCase>
        <TestCase itShould='datetime -modal' tags={['C_API']}>
          <NativeDatePickerView
            style={{ height: 40, width: '100%' }}
            mode='datetime'
            date={new Date().toDateString()}
            onConfirm={() => {
              console.log(1111111111111111111111111111111)
            }}
            modal
            onCancel={() => {

            }}
          />
        </TestCase>
        <TestCase itShould='datetime - modal -max' tags={['C_API']}>
          <NativeDatePickerView
            style={{ height: 40, width: '100%' }}
            mode='datetime'
            date={new Date().toDateString()}
            onConfirm={() => {
              console.log(1111111111111111111111111111111)
            }}
            maximumDate={'2024-06-24'}
            minimumDate={'2024-06-24'}
            modal
            onCancel={() => {

            }}
          />
        </TestCase>
      </TestSuite>
      </ScrollView>
    </Tester>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#333',
  },
});

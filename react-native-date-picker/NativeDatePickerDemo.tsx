import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import { useState } from 'react';
import { ScrollView, StyleSheet,Button } from 'react-native';
import NativeDatePickerView from 'react-native-date-picker/src/NativeDatePickerView'
export function NativeDatePickerViewCom() {
  const [modalOpen,setModalOpen] = useState(false)
  const [modalTimeOpen,setModalTimeOpen] = useState(false)
  const [modalDateTimeOpen,setModalDateTimeOpen] = useState(false)
  const [modalMaxOpen1,setModalMaxOpen1] = useState(false)
  const [modalMaxOpen2,setModalMaxOpen2] = useState(false)
  const [modalMaxOpen3,setModalMaxOpen3] = useState(true)
  
  return (
    <Tester>
      <ScrollView style={styles.container}>
      <TestSuite name='DatePickerDemo'>
        <TestCase itShould='inline:date' tags={['C_API']}>
          <NativeDatePickerView
            style={{ height: 300, width: '100%', }}
            mode='date'
            open
            date={new Date().toDateString()}
            onConfirm={() => {
            }}
            onCancel={() => {
            }}
          />
        </TestCase>
        <TestCase itShould='modal:date' tags={['C_API']}>
          <ScrollView>
          <Button title='打开日期modal' onPress={()=>{
            setModalOpen(true)
          }}></Button>
          <NativeDatePickerView
            style={{ height: 20, width: '100%', }}
            mode='date'
            modal
            open={modalOpen}
            date={new Date().toDateString()}
            onConfirm={() => {
              setModalOpen(false)
            }}
            onCancel={() => {
              setModalOpen(false)
            }}
          />
          </ScrollView>
        </TestCase>
        <TestCase itShould='inline:time' tags={['C_API']}>
          <NativeDatePickerView
            style={{ height: 300, width: '100%' }}
            mode='time'
            date={new Date().toDateString()}
            onConfirm={() => {
              
            }}
            onCancel={() => {

            }}
          />
        </TestCase>
        <TestCase itShould='modal:time' tags={['C_API']}>
          <ScrollView>
            <Button title="打开时间modal" onPress={()=>{
              setModalTimeOpen(true)
            }}></Button>
          <NativeDatePickerView
            style={{ height: 20, width: '100%' }}
            mode='time'
            modal
            open={modalTimeOpen}
            date={new Date().toDateString()}
            onConfirm={() => { 
              setModalTimeOpen(false)
            }}
            onCancel={() => {
              setModalTimeOpen(false)
            }}
          />
          </ScrollView>
        </TestCase>
        <TestCase itShould='modal:datetime' tags={['C_API']}>
        <ScrollView>
            <Button title="打开时间modal" onPress={()=>{
              setModalDateTimeOpen(true)
            }}></Button>
          <NativeDatePickerView
            style={{ height: 20, width: '100%' }}
            mode='datetime'
            open={modalDateTimeOpen}
            date={new Date().toDateString()}
            onConfirm={() => {
              setModalDateTimeOpen(false)  
            }}
            modal
            onCancel={() => {
              setModalDateTimeOpen(false)
            }}
          />
          </ScrollView>
        </TestCase>
        <TestCase itShould='modal:max1' tags={['C_API']}>
        <ScrollView>
            <Button title='打开时间modal:max1' onPress={()=>{
              setModalMaxOpen1(true)
            }}></Button>
          <NativeDatePickerView
            style={{ height: 20, width: '100%' }}
            mode='datetime'
            open={modalMaxOpen1}
            date={new Date().toDateString()}
            onConfirm={() => {
              setModalMaxOpen1(false)
            }}
            maximumDate={'2024-06-22'}
            minimumDate={'2024-06-24'}
            modal
            onCancel={() => {
              setModalMaxOpen1(false)
            }}
          />
          </ScrollView>
        </TestCase>
        <TestCase itShould='modal:max2' tags={['C_API']}>
        <ScrollView>
            <Button title='打开时间modal:max2' onPress={()=>{
              setModalMaxOpen2(true)
            }}></Button>
          <NativeDatePickerView
            style={{ height: 20, width: '100%' }}
            mode='datetime'
            open={modalMaxOpen2}
            date={new Date().toDateString()}
            onConfirm={() => {
              setModalMaxOpen2(false)
              
            }}
            maximumDate={'2023-06-22'}
            minimumDate={'2021-06-24'}
            modal
            onCancel={() => {
              setModalMaxOpen2(false)
            }}
          />
          </ScrollView>
        </TestCase>
        <TestCase itShould='modal:max3' tags={['C_API']}>
        <ScrollView>
            <Button title='打开时间modal:max3' onPress={()=>{
              setModalMaxOpen3(true)
            }}></Button>
          <NativeDatePickerView
            style={{ height: 20, width: '100%' }}
            mode='datetime'
            open={modalMaxOpen3}
            date={new Date().toDateString()}
            onConfirm={() => {
              setModalMaxOpen3(false)
            }}
            maximumDate={'2026-06-22'}
            minimumDate={'2025-06-24'}
            modal
            onCancel={() => {
              setModalMaxOpen3(false)
            }}
          />
          </ScrollView>
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

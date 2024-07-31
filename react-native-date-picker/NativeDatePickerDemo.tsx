import { TestSuite, Tester,TestCase } from '@rnoh/testerino';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text,Button } from 'react-native';
import NativeDatePickerView from 'react-native-date-picker/src/NativeDatePickerView'
export function NativeDatePickerViewCom() {
  const [modalOpen,setModalOpen] = useState(false)
  const [modalOpenText,setModalOpenText] = useState('')
  const [modalTimeOpen,setModalTimeOpen] = useState(false)
  const [modalTimeText,setModalTimeText] = useState('')
  const [modalDateTimeOpen,setModalDateTimeOpen] = useState(false)
  const [modalDateTimeText,setModalDateTimeText] = useState('')
  const [modalMaxOpen1,setModalMaxOpen1] = useState(false)
  const [modalMaxOpen1Text,setModalMaxOpen1Text] = useState('')
  const [modalMaxOpen2,setModalMaxOpen2] = useState(false)
  const [modalMaxOpen2Text,setModalMaxOpen2Text] = useState('')
  const [modalMaxOpen3,setModalMaxOpen3] = useState(false) 
  const [modalMaxOpen3Text,setModalMaxOpen3Text] = useState('')
  const [dateText,setDateText] = useState('')
  const [dateTimeText,setDateTimeText] = useState('')
  const [timeText,setTimeText] = useState('')
  return (
    <Tester>
      <ScrollView style={styles.container}>
      <TestSuite name='DatePickerDemo'>
        <TestCase itShould='{modal:false,mode:date}'>
        <ScrollView>
          <NativeDatePickerView
            style={{ height: 200, width: '100%', }}
            mode='date'
            modal={false}
            onDateChange={e => {
              // time is Change
              setDateText(e.nativeEvent.timestamp)
            }}
          />
          </ScrollView>
        </TestCase>
        <Text style={{color: '#ffff'}}>{dateText}</Text>
        <TestCase itShould='{modal:false,mode:datetime}'>
        <ScrollView>
          <NativeDatePickerView
            style={{ height: 200, width: '100%', }}
            mode={'datetime'}
            modal={false}
            onDateChange={e => {
              // time is Change
              setDateTimeText(e.nativeEvent.timestamp)
            }}
          />
          </ScrollView>
        </TestCase>
        <Text style={{color: '#ffff'}}>{dateTimeText}</Text>
        <TestCase itShould='modal:false,mode:time'>
        <ScrollView>
          <NativeDatePickerView
            style={{ height: 200, width: '100%' }}
            mode='time'
            modal={false}
            onDateChange={e => {
              // time is Change
              setTimeText(e.nativeEvent.timestamp)
            }}
          />
          </ScrollView>
        </TestCase>
        <Text style={{color: '#ffff'}}>{timeText}</Text>
        <TestCase itShould='{modal:ture,mode:date}'>
          <ScrollView>
          <Button title='打开日期modal,mode:date' onPress={()=>{
            setModalOpen(true)
          }}></Button>
          <NativeDatePickerView
            style={{ height: 'auto', width: '100%', }}
            mode='date'
            modal
            open={modalOpen}
            date={new Date().toDateString()}
            onConfirm={e => {
              // onConfirm is clicked。
              setModalOpenText(e?.nativeEvent.timestamp)
              setModalOpen(false)
            }}
            onDateChange={e => {
              // time is Change
              setModalOpenText(e.nativeEvent.timestamp)
            }}
            onCancel={() => {
              // onCancel is clicked。
              setModalOpen(false)
            }}
          />
          </ScrollView>
        </TestCase>
        <Text style={{color: '#ffff'}}>{modalOpenText}</Text>
        <TestCase itShould='modal:true,mode:time'>
          <ScrollView>
            <Button title="打开时间modal,mode:time" onPress={()=>{
              setModalTimeOpen(true)
            }}></Button>
          <NativeDatePickerView
            style={{ height: 'auto', width: '100%' }}
            mode='time'
            modal
            open={modalTimeOpen}
            date={new Date().toDateString()}
            onConfirm={e => {
              // onConfirm is clicked。
              setModalTimeText(e?.nativeEvent?.timestamp)
              setModalTimeOpen(false)
            }}
            onDateChange={e => {
              // time is Change
              setModalTimeText(e.nativeEvent.timestamp)
            }}
            onCancel={() => {
              // onCancel is clicked。
              setModalTimeOpen(false)
            }}
          />
         
          </ScrollView>
        </TestCase>
        <Text style={{color: '#ffff'}}>{modalTimeText}</Text>
        <TestCase itShould='modal:true,mode:datetime'>
        <ScrollView>
            <Button title="打开时间modal,mode:datetime" onPress={()=>{
              setModalDateTimeOpen(true)
            }}></Button>
          <NativeDatePickerView
            style={{ height: 'auto', width: '100%' }}
            mode={'datetime'}
            open={modalDateTimeOpen}
            date={new Date().toDateString()}
            modal
            onConfirm={e => {
              // onConfirm is clicked。
              setModalDateTimeText(e.nativeEvent.timestamp)
              setModalDateTimeOpen(false)  
            }}
            onDateChange={e => {
              // time is Change
              setModalDateTimeText(e.nativeEvent.timestamp)
            }}
            onCancel={() => {
              // onCancel is clicked。
              setModalDateTimeOpen(false)
            }}
          />
          
          </ScrollView>
        </TestCase>
        <Text style={{color: '#ffff'}}>{modalDateTimeText}</Text>
        <TestCase itShould='modal:true,mode:datetime,maximumDate:2024-06-24,minimumDate:2024-06-22'>
        <ScrollView>
            <Button title='打开时间modal,mode:datetime,maximumDate' onPress={()=>{
              setModalMaxOpen1(true)
            }}></Button>
          <NativeDatePickerView
            style={{ height: 'auto', width: '100%' }}
            mode={'datetime'}
            open={modalMaxOpen1}
            date={new Date().toDateString()}
            maximumDate={'2024-06-24'}
            minimumDate={'2024-06-22'}
            modal
            onConfirm={e => {
              // onConfirm is clicked。
              setModalMaxOpen1Text(e.nativeEvent.timestamp)
              setModalMaxOpen1(false)
            }}
            onDateChange={e => {
              // time is Change
              setModalMaxOpen1Text(e.nativeEvent.timestamp)
            }}
            onCancel={() => {
              // onCancel is clicked。
              setModalMaxOpen1(false)
            }}
          /> 
          </ScrollView>
        </TestCase>
        <Text style={{color: '#ffff'}}>{modalMaxOpen1Text}</Text>
        <TestCase itShould='modal:true,mode:datetime,maximumDate:2023-06-22,minimumDate:2021-06-24'>
        <ScrollView>
            <Button title='打开时间modal,mode:datetime,maximumDate' onPress={()=>{
              setModalMaxOpen2(true)
            }}></Button>
          <NativeDatePickerView
            style={{ height: 'auto', width: '100%' }}
            mode={'datetime'}
            open={modalMaxOpen2}
            date={new Date().toDateString()}
            maximumDate={'2023-06-22'}
            minimumDate={'2021-06-24'}
            modal
            onConfirm={e => {
              // onConfirm is clicked。
              setModalMaxOpen2Text(e.nativeEvent.timestamp)
              setModalMaxOpen2(false)
            }}
            onDateChange={e => {
              // time is Change
              setModalMaxOpen2Text(e.nativeEvent.timestamp)
            }}
            onCancel={() => {
              // onCancel is clicked。
              setModalMaxOpen2(false)
            }}
          />
          
          </ScrollView>
        </TestCase>
        <Text style={{color: '#ffff'}}>{modalMaxOpen2Text}</Text>
        <TestCase itShould='modal:true,mode:datetime,maximumDate:2026-06-22,minimumDate:2025-06-24'>
        <ScrollView>
            <Button title='打开时间modal,mode:datetime,maximumDate' onPress={()=>{
              setModalMaxOpen3(true)
            }}></Button>
          <NativeDatePickerView
            style={{ height: 'auto', width: '100%' }}
            mode={'datetime'}
            open={modalMaxOpen3}
            date={new Date().toDateString()}
            maximumDate={'2026-06-22'}
            minimumDate={'2025-06-24'}
            modal
            onConfirm={e => {
              // onConfirm is clicked。
              setModalMaxOpen3Text(e.nativeEvent.timestamp)
              setModalMaxOpen3(false)
            }}
            onDateChange={e => {
              // time is Change
              setModalMaxOpen3Text(e.nativeEvent.timestamp)
            }}
            onCancel={() => {      
              // onCancel is clicked。
              setModalMaxOpen3(false)
            }}
          />
     
          </ScrollView>
        </TestCase> 
        <Text style={{color: '#ffff'}}>{modalMaxOpen3Text}</Text>
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

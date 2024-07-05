import { TestSuite, Tester } from '@rnoh/testerino';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import {Button, TestCase} from '../components';
import NativeDatePickerView from 'react-native-date-picker/src/index.js'
export function NativeDatePickerViewCom() {
  const [modalOpen,setModalOpen] = useState(false)
  const [modalTimeOpen,setModalTimeOpen] = useState(false)
  const [modalDateTimeOpen,setModalDateTimeOpen] = useState(false)
  const [modalMaxOpen1,setModalMaxOpen1] = useState(false)
  const [modalMaxOpen2,setModalMaxOpen2] = useState(false)
  const [modalMaxOpen3,setModalMaxOpen3] = useState(false) 
  
  return (
    <Tester>
      <ScrollView style={styles.container}>
      <TestSuite name='DatePickerDemo'>
        <TestCase.Manual
          itShould="trigger onShow event after modal is shown"
          initialState={false}
          arrange={({setState}) => (
            <>
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
                onRequestClose={() => {
                  setModalMaxOpen3(!modalMaxOpen3);
                }}
                onShow={() => {
                  setState(true);
                }}
                onConfirm={() => {
                  // onConfirm is clicked。
                  setModalMaxOpen3(false)
                }}
                onCancel={() => {      
                  // onCancel is clicked。
                  setModalMaxOpen3(false)
                }}
              />
          </>
            // <ModalExample
            //   onShow={() => {
            //     setState(true);
            //   }}
            // />
          )}
          assert={({state, expect}) => {
            expect(state).to.be.true;
          }}
        />
        {/* <TestCase.Manual itShould='{modal:false,mode:date}'>
        <ScrollView>
          <NativeDatePickerView
            style={{ height: 200, width: '100%', }}
            mode={'date'}
            modal={false}
          />
          </ScrollView>
        </TestCase.Manual>
        <TestCase.Manual itShould='{modal:false,mode:datetime}'>
        <ScrollView>
          <NativeDatePickerView
            style={{ height: 200, width: '100%', }}
            mode={'datetime'}
            modal={false}
          />
          </ScrollView>
        </TestCase.Manual>
        <TestCase.Manual itShould='modal:false,mode:time'>
        <ScrollView>
          <NativeDatePickerView
            style={{ height: 200, width: '100%' }}
            mode={'time'}
            modal={false}
          />
          </ScrollView>
        </TestCase.Manual>time
        <TestCase.Manual itShould='{modal:ture,mode:date}'>
          <ScrollView>
          <Button title='打开日期modal,mode:date' onPress={()=>{
            setModalOpen(true)
          }}></Button>
          <NativeDatePickerView
            style={{ height: 'auto', width: '100%', }}
            mode={'date'}
            modal
            open={modalOpen}
            date={new Date().toDateString()}
            onConfirm={e => {
              // onConfirm is clicked。
              setModalOpen(false)
            }}
            onCancel={() => {
              // onCancel is clicked。
              setModalOpen(false)
            }}
          />
          </ScrollView>
        </TestCase.Manual>
        <TestCase.Manual itShould='modal:true,mode:time'>
          <ScrollView>
            <Button title="打开时间modal,mode:time" onPress={()=>{
              setModalTimeOpen(true)
            }}></Button>
          <NativeDatePickerView
            style={{ height: 'auto', width: '100%' }}
            mode={'time'}
            modal
            open={modalTimeOpen}
            date={new Date().toDateString()}
            onConfirm={() => {
              // onConfirm is clicked。
              setModalTimeOpen(false)
            }}
            onCancel={() => {
              // onCancel is clicked。
              setModalTimeOpen(false)
            }}
          />
          </ScrollView>
        </TestCase.Manual>
        <TestCase.Manual itShould='modal:true,mode:datetime'>
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
            onConfirm={() => {
              // onConfirm is clicked。
              setModalDateTimeOpen(false)  
            }}
            onCancel={() => {
              // onCancel is clicked。
              setModalDateTimeOpen(false)
            }}
          />
          </ScrollView>
        </TestCase.Manual>
        <TestCase.Manual itShould='modal:true,mode:datetime,maximumDate:2024-06-24,minimumDate:2024-06-22'>
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
            onConfirm={() => {
              // onConfirm is clicked。
              setModalMaxOpen1(false)
            }}
            onCancel={() => {
              // onCancel is clicked。
              setModalMaxOpen1(false)
            }}
          />
          </ScrollView>
        </TestCase.Manual>
        <TestCase.Manual itShould='modal:true,mode:datetime,maximumDate:2023-06-22,minimumDate:2021-06-24'>
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
            onConfirm={() => {
              // onConfirm is clicked。
              setModalMaxOpen2(false)
            }}
            onCancel={() => {
              // onCancel is clicked。
              setModalMaxOpen2(false)
            }}
          />
          </ScrollView>
        </TestCase.Manual>
        <TestCase.Manual itShould='modal:true,mode:datetime,maximumDate:2026-06-22,minimumDate:2025-06-24'>
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
            onConfirm={() => {
              // onConfirm is clicked。
              setModalMaxOpen3(false)
            }}
            onCancel={() => {      
              // onCancel is clicked。
              setModalMaxOpen3(false)
            }}
          />
          </ScrollView>
        </TestCase.Manual> */}
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

import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, Button, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
export function NativeDropDownPickerCom() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(
    [
      { label: 'Apple', value: 'apple', parent: "banana" },
      { label: 'Banana', value: 'banana' },
      { label: 'Pear', value: 'pear' },
    ]
  );
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState(null);
  const [open4, setOpen4] = useState(false);
  const [value4, setValue4] = useState(null);
  const [open5, setOpen5] = useState(false);
  const [value5, setValue5] = useState(null);
  const [open6, setOpen6] = useState(false);
  const [value6, setValue6] = useState(null);
  const [open7, setOpen7] = useState(false);
  const [value7, setValue7] = useState(null);
  const [open8, setOpen8] = useState(false);
  const [value8, setValue8] = useState(null);
  const [open9, setOpen9] = useState(false);
  const [value9, setValue9] = useState(null);
  const [open10, setOpen10] = useState(false);
  const [value10, setValue10] = useState(null);
  const [open11, setOpen11] = useState(false);
  const [value11, setValue11] = useState(null);
  const [open12, setOpen12] = useState(false);
  const [value12, setValue12] = useState(null);
  const [open13, setOpen13] = useState(false);
  const [value13, setValue13] = useState(null); 
   const [open14, setOpen14] = useState(false);
  const [value14, setValue14] = useState(null);
  const [open15, setOpen15] = useState(false);
  const [value15, setValue15] = useState(null); 
   const [open16, setOpen16] = useState(false);
  const [value16, setValue16] = useState(null);
  const [open17, setOpen17] = useState(false);
  const [value17, setValue17] = useState(null);
  const [open18, setOpen18] = useState(false);
  const [value18, setValue18] = useState(null);
  return (
    <Tester>
      <ScrollView style={styles.container}>
        <TestSuite name='DropDownPickerDemo'>
          <TestCase itShould='{mode:"SIMPLE"}'>
            <ScrollView   style={{height:250,width:'100%'}}>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={(e) => {
                  setValue(e)
                }}
                setItems={setItems}
                mode={"SIMPLE"}
              />
            </ScrollView>
          </TestCase>
          <TestCase itShould='{language:"AR"}'>
            <ScrollView   style={{height:250,width:'100%'}}>
              <DropDownPicker
                open={open1}
                value={value1}
                items={items}
                setOpen={setOpen1}
                setValue={(e) => {
                  setValue1(e)
                }}
                setItems={setItems} 
                language={"AR"}
              />
            </ScrollView>
          </TestCase>
          <TestCase itShould='{placeholder:Choose a fruit,placeholderStyle:color:"red"}'>
            <ScrollView   style={{height:250,width:'100%'}}>
              <DropDownPicker
                open={open2}
                value={value2}
                items={items}
                setOpen={setOpen2}
                setValue={(e) => {
                  setValue2(e)
                }}
                setItems={setItems}
                modalAnimationType={'fade'}
                placeholder={'Choose a fruit.'}
                placeholderStyle={{color:'red'}}
              />
            </ScrollView>
          </TestCase>
          <TestCase itShould='{multiple:true}'>
            <ScrollView   style={{height:250,width:'100%'}}>
              <DropDownPicker
                open={open7}
                value={value7}
                items={items}
                setOpen={setOpen7}
                setValue={(e) => {
                  setValue7(e)
                }}
                setItems={setItems}
                multiple={true}
              />
            </ScrollView>
          </TestCase>
          <TestCase itShould='{theme:"DARK"}'>
            <ScrollView   style={{height:250,width:'100%'}}>
              <DropDownPicker
                open={open9}
                value={value9}
                items={items}
                setOpen={setOpen9}
                setValue={(e) => {
                  setValue9(e)
                }}
                setItems={setItems}
                theme={"DARK"}
              />
            </ScrollView>
          </TestCase>
          <TestCase itShould='{disableBorderRadius:true}'>
            <ScrollView   style={{height:250,width:'100%'}}>
              <DropDownPicker
                open={open13}
                value={value13}
                items={items}
                setOpen={setOpen13}
                setValue={(e) => {
                  setValue13(e)
                }}
                setItems={setItems}
                disableBorderRadius={true}
              />
            </ScrollView>
          </TestCase>
          <TestCase itShould='{maxHeight:100}'>
            <ScrollView   style={{height:250,width:'100%'}}>
              <DropDownPicker
                open={open15}
                value={value15}
                items={items}
                setOpen={setOpen15}
                setValue={(e) => {
                  setValue15(e)
                }}
                setItems={setItems}
                maxHeight={100}
              />
            </ScrollView>
          </TestCase>
          <TestCase itShould='{disabled:true}'>
            <ScrollView   style={{height:250,width:'100%'}}>
              <DropDownPicker
                open={open16}
                value={value16}
                items={items}
                setOpen={setOpen16}
                setValue={(e) => {
                  setValue16(e)
                }}
                setItems={setItems}
                disabled={true}
              />
            </ScrollView>
          </TestCase>
          <TestCase itShould='{textStyle:fontSize:20}'>
            <ScrollView   style={{height:250,width:'100%'}}>
              <DropDownPicker
                open={open18}
                value={value18}
                items={items}
                setOpen={setOpen18}
                setValue={(e) => {
                  setValue18(e)
                }}
                setItems={setItems}
                textStyle={{fontSize:20}}
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

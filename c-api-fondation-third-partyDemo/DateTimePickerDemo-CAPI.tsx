import React from 'react';
///import * as React from 'react';
import {View, Pressable, ScrollView, StyleSheet, Text, TextInput, Platform, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import DateTimePicker from '@react-native-oh-tpl/datetimepicker';
//import {HMLog } from '../Log';


function DateTimePickerDemo() {
  const scrollRef = React.useRef<ScrollView>(null);
  // const [interval, setInterval] = React.useState(1);
  const [valueCs, setValueCs] = React.useState(new Date(2023, 11, 23));
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [maximumDateCs, setMaximumDateCs] = React.useState('2100, 7, 25');
  const [minimumDateCs, setMinimumDateCs] = React.useState('1910,2,8');
  const [textColorCs, setTextColorCs] = React.useState('green');
  const [widthCs, setWidthCs] = React.useState(150);
  const [minHeightCs, setMinHeightCs] = React.useState(180);
  // const [opacityCs, setopacityCs] = React.useState(1);
  const [is24HourCs, setIs24HourCs] = React.useState(true);
  const [compactCs, setCompactCs] = React.useState('compact');

  /*const onTimeChange = (event: any, newTime?: Date) => {
    HMLog('onTimeChange fun,evtype:' + event.type)
    HMLog('onTimeChange,os out:' + Platform.OS)
    HMLog('onTimeChange ,selectdate out:' + newTime)
    HMLog('onTimeChange ,event out:' + JSON.stringify(event.nativeEvent))
  };*/
  const dateChange = (str: string) => {
    const dateArr = str.split(",")
    const year = parseInt(dateArr[0]) ? parseInt(dateArr[0]) : 1900
    const month = parseInt(dateArr[1]) ? parseInt(dateArr[1]) : 1
    const day = parseInt(dateArr[2]) ? parseInt(dateArr[2]) : 1
    const date = new Date(year, month, day)
    return date
  }


  return (
    <ScrollView style={styles.container} ref={scrollRef}>
      <Text style={styles.top_title_center}>Demo mode=date </Text>
      <Text style={styles.footer_left}>验证字段:mode,onchange,display,value,</Text>

      <Text style={styles.footer_right}>mode="date"  display="compact"</Text>

      <View>
        <Text style={styles.footer_left}>style修改width</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 100 }}
          placeholderTextColor='150'
          onChangeText={(text) => {
            setWidthCs(JSON.parse(text))
          }}
        ></TextInput>
        <Text style={styles.footer_left}>修改textColor</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 100 }}
          onChangeText={(text) => {
            setTextColorCs(text)
          }}
        ></TextInput>
        <Text style={styles.footer_left}>修改display</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 100 }}
          placeholder='compact'
          onChangeText={(text) => {
            setCompactCs(text)
          }}
        ></TextInput>
      </View>
      <Text style={styles.footer_left}>修改value</Text>
      <Button title='改value为2030,7,16'onPress={()=>{
        setValueCs(new Date(2030,7,16))
      }}
      ></Button>
      <TextInput value={"设置后的value: " + valueCs}></TextInput>
      <View style={{minHeight:65}}>
      <DateTimePicker 
        mode = 'date'
        display = {compactCs}
        value = {new Date(1701658653897)}
        disabled = {isDisabled}
        style = {{width:widthCs,opacity:1,height:65,marginTop:0}}
        //onChange={onTimeChange}
        textColor={textColorCs}
        minimumDate={new Date(1999,0,2)}
        maximumDate={new Date(2023,0,25)}
      />
      </View>

      <Text style={styles.footer_right}>mode="date" display="spinner"</Text>
      <Text style={styles.footer_left}>修改minimumDate</Text>
      <TextInput 
        style={{height:40,borderColor:'gray',borderWidth:1,width:100}}
        placeholder='1900,1,3'
        onChangeText={(text) => {
          setMinimumDateCs(text)
        }}
      ></TextInput>
      <Text style={styles.footer_left}>修改maximumDate</Text>
      <TextInput 
        style={{height:40,borderColor:'gray',borderWidth:1,width:100}}
        placeholder='2023,12,3'
        onChangeText = {(text) => {
          setMaximumDateCs(text)
        }}
      ></TextInput>
      <TextInput value = {JSON.stringify(maximumDateCs)}></TextInput>
      <View style = {{minHeight:minHeightCs}}>
        <DateTimePicker
          style = {{flex:1}}
          value = {valueCs}
          mode = "date"
          display = "spinner"
          disabled = {isDisabled}
          textColor = {textColorCs}
          //onChange = {onTimeChange}
          minimumDate = {dateChange(minimumDateCs)}
          maximumDate = {dateChange(maximumDateCs)}
        />
      </View>
      <Text style = {styles.footer_left}>验证字段:</Text>
      <Text style = {styles.footer_right}>mode="time"</Text>
      <Button title='is24Hour' onPress={()=> {
        is24HourCs? setIs24HourCs(false) : setIs24HourCs(true)
      }}></Button>
      <DateTimePicker 
        mode = "time"
        is24Hour = {is24HourCs}
        value = {new Date()}
        textColor = {textColorCs}
        style = {{width:140,opacity:1,height:45,marginTOP:0}}
        //onChange = {onTimeChange}
        />
        </ScrollView>
)}

const styles = StyleSheet.create({
  gradient:{
    width: 60,
    height: 60,
    padding: 10,
  },
  prop_out_text:{
    height: 40,
    textAlign: 'left',
    color: '#000000',
  },
  prop_input:{
    width: 120,
    height: 40,
    borderWidth: 1,
    color: "black",
  },
  footer_row:{
    flexDirection: "row",
    height: 40,
    padding: 0,
    marginTop: 10,
  },
  footer_label:{
    color: '#000',
    height: 30,
    fontSize: 20,
    paddingRight: 12,
    textAlign: 'left',
  },
  top_title_center:{
    color: '#000',
    height: 40,
    fontSize: 25,
    fontWeight: '600',
    paddingRight: 12,
    textAlign: 'center',
  },
  footer_center:{
    color: '#000',
    fontSize: 12,
    width: '100%',
    fontWeight: '600',
    paddingRight: 12,
    textAlign: 'center',
  },
  footer_left:{
    fontSize: 12,
    height:40,
    paddingRight: 12,
    marginTop: 10,
    textAlign: 'left',
  },
  footer_right:{
    height:40,
    fontSize: 12,
    fontWeight: '600',
    paddingRight: 12,
    textAlign: 'right',
  },
  container:{
    width: '100%',
    height: '100%',
  },
  innerText:{
    width: 50,
    height: 50,
    fontWeight: 'bold',
  },
  button:{
    borderRadius: 5,
    margin: 4,
    paddingHorizontal: 15,
  },
  buttonText:{
    color: '#ffffff',
    fontFamily: 'normal',
    fontSize: 18,
    margin: 10,
  },
  buttonContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default DateTimePickerDemo;
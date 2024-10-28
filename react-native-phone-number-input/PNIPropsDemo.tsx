import React, {useState, useRef} from 'react';
import {StyleSheet, View, ScrollView, Text, Image, Button} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

export const PNIPropsDemo = () => {
  const [valuetext, setValuetext] = useState('');
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [formattedValue1, setFormattedValue1] = useState('');
  const [valid, setValid] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  const [valuea, setValuea] = useState('');
  const [valueapi, setValueapi] = useState('');
  const [countryCodeapi, setCountryCodeapi] = useState('');
  const [formattedValueapi, setFormattedValueapi] = useState('');
  const phoneInput1 = useRef<PhoneInput>(null);
  const phoneInput2 = useRef<PhoneInput>(null);
  const phoneInput3 = useRef<PhoneInput>(null);
  const phoneInput4 = useRef<PhoneInput>(null);

  return (
    <ScrollView>
      <View style={styles.containers}>
        <Tester>
          <TestSuite name="autoFocus(进入页面是否自动跳出键盘)">
            <TestCase tags={['C_API']} itShould="autoFocus: true">
              <PhoneInput autoFocus={true} />
            </TestCase>
            <TestCase tags={['C_API']} itShould="autoFocus: false">
              <PhoneInput autoFocus={false} />
            </TestCase>
          </TestSuite>
          <TestSuite name="defaultCode(选择默认的国家)">
            <TestCase tags={['C_API']} itShould="defaultCode:'HK'">
              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow
              />
            </TestCase>
            <TestCase tags={['C_API']} itShould="defaultCode:'CH'">
              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                disableArrowIcon={true}
                defaultCode="CH"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="withDarkTheme(国家选择器主题色)">
            <TestCase tags={['C_API']} itShould="withDarkTheme:true">
              <PhoneInput withDarkTheme={true} />
            </TestCase>
            <TestCase tags={['C_API']} itShould="withDarkTheme:false">
              <PhoneInput withDarkTheme={false} />
            </TestCase>
          </TestSuite>
          <TestSuite name="withShadow(组件是否有阴影)">
            <TestCase tags={['C_API']} itShould="withShadow: true">
              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow={true}
              />
            </TestCase>
            <TestCase tags={['C_API']} itShould="withShadow: false">
              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow={false}
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="defaultValue(默认的输入值)">
            <TestCase tags={['C_API']} itShould="defaultValue: 20242024">
              <PhoneInput
                ref={phoneInput}
                defaultValue={'20242024'}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow={false}
              />
            </TestCase>
            <TestCase tags={['C_API']} itShould="defaultValue: 20252025">
              <PhoneInput
                ref={phoneInput}
                defaultValue={'20252025'}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow={false}
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="value(输入值)">
            <TestCase tags={['C_API']} itShould="value: 20232023">
              <PhoneInput
                ref={phoneInput}
                value="20232023"
                defaultValue={'20242024'}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow={false}
              />
            </TestCase>
            <TestCase tags={['C_API']} itShould="value: 20222022">
              <PhoneInput
                ref={phoneInput}
                value="20222022"
                defaultValue={'20252025'}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow={false}
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="disableArrowIcon(是否有箭头图标)">
            <TestCase tags={['C_API']} itShould="disableArrowIcon: true">
              <PhoneInput
                ref={phoneInput}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow={false}
              />
            </TestCase>
            <TestCase tags={['C_API']} itShould="disableArrowIcon: false">
              <PhoneInput
                ref={phoneInput}
                disableArrowIcon={false}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow={false}
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="placeholder(显示占位符)">
            <TestCase tags={['C_API']} itShould="placeholder: 请输入电话号码">
              <PhoneInput
                ref={phoneInput}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow={false}
                placeholder={'请输入电话号码'}
              />
            </TestCase>
            <TestCase tags={['C_API']} itShould="placeholder: please input">
              <PhoneInput
                ref={phoneInput}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow={false}
                placeholder={'please input'}
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="onChangeCountry(国家选择事件)">
            <TestCase
              tags={['C_API']}
              itShould="onChangeCountry(返回的当前国家)">
              <Text>当前国家为：{valuea}</Text>
              <PhoneInput
                onChangeCountry={valuea => {
                  setValuea(valuea.cca2);
                }}
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="onChangeText(输入文本的事件)">
            <TestCase tags={['C_API']} itShould="onChangeText">
              <View style={{height: 150}}>
                <Text style={{height: 40, fontSize: 20}}>
                  输入文本：{`${valuetext}`}
                </Text>
                <PhoneInput
                  withDarkTheme={true}
                  onChangeText={text => {
                    setValuetext(text);
                  }}
                />
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="onChangeFormattedText(生成格式化文本的事件)">
            <TestCase tags={['C_API']} itShould="onChangeFormattedText">
              <Text
                style={{
                  height: 40,
                  marginLeft: 100,
                  lineHeight: 40,
                }}>
                {'value:' + `${formattedValue1}`}
              </Text>
              <PhoneInput
                ref={phoneInput}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue1(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue1(text);
                  //   setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow={false}
                placeholder={'请输入电话号码'}
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="containerStyle(组件的样式)">
            <TestCase
              tags={['C_API']}
              itShould="containerStyle: {{backgroundColor: 'red', marginLeft: 20,height:100}}">
              <PhoneInput
                ref={phoneInput}
                containerStyle={{
                  backgroundColor: 'red',
                  marginLeft: 20,
                  height: 100,
                }}
                textContainerStyle={{height: 10}}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow={false}
                placeholder={'请输入电话号码'}
              />
            </TestCase>
            <TestCase
              tags={['C_API']}
              itShould="containerStyle: {{backgroundColor:'pink',marginTop:20}}">
              <PhoneInput
                ref={phoneInput}
                containerStyle={{backgroundColor: 'pink', marginTop: 20}}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow={false}
                placeholder={'please input'}
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="textContainerStyle(组件文本的样式)">
            <TestCase
              tags={['C_API']}
              itShould="textContainerStyle: {{backgroundColor:'pink',marginLeft:20,marginTop:20,height:10}}">
              <PhoneInput
                containerStyle={{backgroundColor: 'red'}}
                textContainerStyle={{
                  backgroundColor: 'pink',
                  marginLeft: 20,
                  marginTop: 20,
                  height: 10,
                }}
                ref={phoneInput}
                defaultValue={value}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow
              />
            </TestCase>
            <TestCase
              tags={['C_API']}
              itShould="textContainerStyle: {{backgroundColor:'green'}}">
              <PhoneInput
                containerStyle={{backgroundColor: 'pink'}}
                textContainerStyle={{backgroundColor: 'green'}}
                ref={phoneInput}
                defaultValue={value}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="renderDropdownImage(箭头图标的替换)">
            <TestCase
              tags={['C_API']}
              itShould="renderDropdownImage(引入Image组件，导入图片作为角标icon)">
              <PhoneInput
                renderDropdownImage={
                  <Image
                    source={{
                      uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAi0lEQVRYR+3WuQ6AIBRE0eHL1T83FBqU5S1szdiY2NyTKcCAzU/Y3AcBXIALcIF0gRPAsehgugDEXnYQrUC88RIgfpuJ+MRrgFmILN4CjEYU4xJgFKIa1wB6Ec24FuBFiHELwIpQxa0ALUId9wAkhCnuBdQQ5ngP4I9wxXsBDyJ9m+8y/g9wAS7ABW4giBshQZji3AAAAABJRU5ErkJggg==',
                    }}
                    style={{height: 10, width: 10}}
                  />
                }
                ref={phoneInput}
                defaultValue={value}
                disableArrowIcon={false}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow
              />
            </TestCase>
            <TestCase
              tags={['C_API']}
              itShould="renderDropdownImage = {<Text style={{backgroundColor:'red'}}>角标</Text>}">
              <PhoneInput
                renderDropdownImage={
                  <Text style={{backgroundColor: 'red'}}>角标</Text>
                }
                ref={phoneInput}
                defaultValue={value}
                disableArrowIcon={false}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="textInputProps(文本输入框的属性样式)">
            <TestCase
              tags={['C_API']}
              itShould="textInputProps = {{maxLength:8,placeholderTextColor:'red',selectionColor:'green'}}">
              <PhoneInput
                textInputProps={{
                  maxLength: 8,
                  placeholderTextColor: 'red',
                  selectionColor: 'green',
                }}
                ref={phoneInput}
                defaultValue={value}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow
              />
            </TestCase>
            <TestCase
              tags={['C_API']}
              itShould="textInputProps={{selectionColor: 'red',style:{color:'green',width: 200,}}}">
              <PhoneInput
                textInputProps={{
                  selectionColor: 'red',
                  style: {
                    color: 'green',
                    width: 200,
                  },
                }}
                ref={phoneInput}
                defaultValue={value}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="textInputStyle(文本输入框的样式)">
            <TestCase
              tags={['C_API']}
              itShould="textInputStyle:{{color:'red',fontSize:20}}">
              <PhoneInput
                textInputStyle={{color: 'red', fontSize: 20}}
                ref={phoneInput}
                defaultValue={value}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow
              />
            </TestCase>
            <TestCase
              tags={['C_API']}
              itShould="textInputStyle:{{color:'green',fontSize:15}}">
              <PhoneInput
                textInputStyle={{color: 'green', fontSize: 15}}
                ref={phoneInput}
                defaultValue={value}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="codeTextStyle(国家电话区号的样式)">
            <TestCase
              tags={['C_API']}
              itShould="codeTextStyle = {{color:'red',fontSize:20}}">
              <PhoneInput
                codeTextStyle={{color: 'red', fontSize: 20}}
                ref={phoneInput}
                defaultValue={value}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow
              />
            </TestCase>
            <TestCase
              tags={['C_API']}
              itShould="codeTextStyle = {{color:'green',fontSize:15}}">
              <PhoneInput
                codeTextStyle={{color: 'green', fontSize: 15}}
                ref={phoneInput}
                defaultValue={value}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="flagButtonStyle(标志按钮的样式)">
            <TestCase
              tags={['C_API']}
              itShould="flagButtonStyle = {{backgroundColor:'red',marginRight:20}}">
              <PhoneInput
                flagButtonStyle={{
                  backgroundColor: 'red',
                  marginRight: 20,
                }}
                textContainerStyle={{backgroundColor: 'green'}}
                ref={phoneInput}
                defaultValue={value}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow
              />
            </TestCase>
            <TestCase
              tags={['C_API']}
              itShould="flagButtonStyle = {{backgroundColor:'red',marginTop:20}}">
              <PhoneInput
                flagButtonStyle={{backgroundColor: 'red', marginTop: 20}}
                textContainerStyle={{backgroundColor: 'green'}}
                ref={phoneInput}
                defaultValue={value}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="countryPickerButtonStyle(国家选择器按钮的样式)">
            <TestCase
              tags={['C_API']}
              itShould="countryPickerButtonStyle = {{backgroundColor:'red',marginRight:20,marginTop:20}}">
              <PhoneInput
                countryPickerButtonStyle={{
                  backgroundColor: 'red',
                  marginRight: 20,
                  marginTop: 20,
                }}
                ref={phoneInput}
                defaultValue={value}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow
              />
            </TestCase>
            <TestCase
              tags={['C_API']}
              itShould="countryPickerButtonStyle = {{backgroundColor:'red',marginRight:20,height:30}}">
              <PhoneInput
                countryPickerButtonStyle={{
                  backgroundColor: 'red',
                  marginRight: 20,
                  height: 30,
                }}
                ref={phoneInput}
                defaultValue={value}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="layout(组件的布局，是否有国家icon)">
            <TestCase tags={['C_API']} itShould=" layout=first">
              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow
              />
            </TestCase>
            <TestCase tags={['C_API']} itShould="layout=second">
              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                disableArrowIcon={true}
                defaultCode="HK"
                layout="second"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="filterProps(国家选择器入参筛选)">
            <TestCase
              tags={['C_API']}
              itShould="filterProps={{placeholder: 'Enter '}}">
              <PhoneInput filterProps={{placeholder: 'Enter'}} />
            </TestCase>
          </TestSuite>
          <TestSuite name="countryPickerProps(国家选择器入参)">
            <TestCase
              tags={['C_API']}
              itShould="countryPickerProps={{withAlphaFilter: true}}(国家选择器有索引)">
              <PhoneInput countryPickerProps={{withAlphaFilter: true}} />
            </TestCase>
            <TestCase
              tags={['C_API']}
              itShould="countryPickerProps={{withAlphaFilter: false}}(国家选择器无索引)">
              <PhoneInput countryPickerProps={{withAlphaFilter: false}} />
            </TestCase>
          </TestSuite>
          <TestSuite name="API">
            <TestCase tags={['C_API']} itShould="getCountryCode(获取国家代码)">
              <>
                <PhoneInput
                  ref={phoneInput1}
                  defaultValue={value}
                  disableArrowIcon={true}
                  defaultCode="AX"
                  layout="first"
                  onChangeText={text => {
                    setValue(text);
                  }}
                  onChangeFormattedText={text => {
                    setFormattedValueapi(text);
                    setCountryCodeapi(
                      phoneInput1.current?.getCountryCode() || '',
                    );
                  }}
                  countryPickerProps={{withAlphaFilter: true}}
                  disabled={disabled}
                  withDarkTheme={false}
                  withShadow={false}
                  renderDropdownImage={<h1>Hello, world!</h1>}
                />
                <Text>{phoneInput1.current?.getCountryCode()}</Text>
              </>
            </TestCase>
            <TestCase
              tags={['C_API']}
              itShould="getCallingCode(获取国家电话区号，如+86)">
              <>
                <PhoneInput
                  ref={phoneInput2}
                  defaultValue={value}
                  disableArrowIcon={true}
                  defaultCode="AX"
                  layout="first"
                  onChangeText={text => {
                    setValueapi(text);
                  }}
                  onChangeFormattedText={text => {
                    setFormattedValueapi(text);
                    setCountryCodeapi(
                      phoneInput2.current?.getCountryCode() || '',
                    );
                  }}
                  countryPickerProps={{withAlphaFilter: true}}
                  disabled={disabled}
                  withDarkTheme={false}
                  withShadow={false}
                  renderDropdownImage={<h1>Hello, world!</h1>}
                />
                <Text>{phoneInput2.current?.getCallingCode()}</Text>
              </>
            </TestCase>
            <TestCase
              tags={['C_API']}
              itShould="getNumberAfterPossiblyEliminatingZero(获取输入的电话号码和加了区号的电话号码)">
              <>
                <PhoneInput
                  ref={phoneInput3}
                  defaultValue={value}
                  disableArrowIcon={true}
                  defaultCode="AX"
                  layout="first"
                  onChangeText={text => {
                    setValueapi(text);
                  }}
                  onChangeFormattedText={text => {
                    setFormattedValueapi(text);
                    setCountryCodeapi(
                      phoneInput3.current?.getCountryCode() || '',
                    );
                  }}
                  countryPickerProps={{withAlphaFilter: true}}
                  disabled={disabled}
                  withDarkTheme={false}
                  withShadow={false}
                  renderDropdownImage={<h1>Hello, world!</h1>}
                />
                <Text>
                  {JSON.stringify(
                    phoneInput3.current?.getNumberAfterPossiblyEliminatingZero(),
                  )}
                </Text>
                {/* <Text>{phoneInput3.current?.getNumberAfterPossiblyEliminatingZero()}</Text> */}
              </>
            </TestCase>

            <TestCase
              tags={['C_API']}
              itShould="isValidNumber(校验生成的电话号码)"
              initialState={false}
              arrange={({setState, reset}) => (
                <>
                  <PhoneInput
                    ref={phoneInput4}
                    defaultValue={value}
                    disableArrowIcon={true}
                    defaultCode="AX"
                    layout="first"
                    onChangeText={text => {
                      setValueapi(text);
                    }}
                    onChangeFormattedText={text => {
                      setFormattedValueapi(text);
                      setCountryCodeapi(
                        phoneInput4.current?.getCountryCode() || '',
                      );
                    }}
                    countryPickerProps={{withAlphaFilter: true}}
                    disabled={disabled}
                    withDarkTheme={false}
                    withShadow={false}
                    renderDropdownImage={<h1>Hello, world!</h1>}
                  />
                  <View style={styles.view}>
                    <Button
                      title="调用isValidNumber接口"
                      onPress={() => {
                        if (phoneInput4.current?.isValidNumber(valueapi)) {
                          setState(true);
                        }
                      }}
                    />
                    <Button title="reset" onPress={reset} />
                  </View>
                </>
              )}
              assert={({state, expect}) => {
                expect(state).to.be.true;
              }}
            />
          </TestSuite>
        </Tester>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containers: {
    width: '100%',
    backgroundColor: '#333',
    flex: 1,
  },
  container: {
    flex: 1,
  },
  view: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

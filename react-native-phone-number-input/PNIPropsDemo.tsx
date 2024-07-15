import React, {useState, useRef} from 'react';
import {StyleSheet, View, ScrollView, Text, Image} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

export const PNIPropsDemo = () => {
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [formattedValue1, setFormattedValue1] = useState('');
  const [valid, setValid] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.containers}>
        <Tester>
          <TestSuite name="测试defaultCode属性，选择默认的国家">
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
                autoFocus
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
                autoFocus
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="测试withShadow属性，组件是否有阴影">
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
                autoFocus
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
                autoFocus
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="测试autoFocus属性，是否自动跳出键盘">
            <TestCase tags={['C_API']} itShould="autoFocus: true">
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
                autoFocus={true}
              />
            </TestCase>
            <TestCase tags={['C_API']} itShould="autoFocus: false">
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
                autoFocus={false}
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="测试defaultValue属性，默认的输入值">
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
                autoFocus={false}
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
                autoFocus={false}
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="测试value属性，输入值">
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
                autoFocus={false}
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
                autoFocus={false}
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="测试disableArrowIcon属性，是否有箭头图标">
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
                autoFocus={false}
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
                autoFocus={false}
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="测试placeholder属性，显示占位符">
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
                autoFocus={false}
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
                autoFocus={false}
                placeholder={'please input'}
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="测试onChangeText属性，输入文本的事件">
            <TestCase tags={['C_API']} itShould="onChangeText">
              <Text
                style={{
                  height: 40,
                  marginLeft: 100,
                  lineHeight: 40,
                }}>
                {'value:' + `${value1}`}
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
                  setFormattedValue(text);
                  setCountryCode(phoneInput.current?.getCountryCode() || '');
                }}
                countryPickerProps={{withAlphaFilter: true}}
                disabled={disabled}
                withDarkTheme
                withShadow={false}
                autoFocus={false}
                placeholder={'请输入电话号码'}
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="测试onChangeFormattedText属性，生成格式化文本的事件">
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
                autoFocus={false}
                placeholder={'请输入电话号码'}
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="测试containerStyle属性，组件的样式">
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
                autoFocus={false}
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
                autoFocus={false}
                placeholder={'please input'}
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="测试textContainerStyle属性，组件文本的样式">
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
                autoFocus
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
                autoFocus
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="测试renderDropdownImage属性，箭头图标的替换">
            <TestCase
              tags={['C_API']}
              itShould="renderDropdownImage,引入Image组件，导入图片作为角标icon">
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
                autoFocus
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
                autoFocus
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="测试textInputProps属性，文本输入框的属性样式">
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
                autoFocus
              />
            </TestCase>
            <TestCase
              tags={['C_API']}
              itShould="textInputProps={{selectionColor: 'red',style:{color:'green'}}}">
              <PhoneInput
                textInputProps={{
                  selectionColor: 'red',
                  style: {
                    color: 'green',
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
                autoFocus
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="测试textInputStyle属性，文本输入框的样式">
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
                autoFocus
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
                autoFocus
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="测试codeTextStyle属性，国家电话区号的样式">
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
                autoFocus
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
                autoFocus
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="测试flagButtonStyle属性，标志按钮的样式">
            <TestCase
              tags={['C_API']}
              itShould="flagButtonStyle = {{backgroundColor:'red',marginRight:20}}">
              <PhoneInput
                flagButtonStyle={{
                  backgroundColor: 'red',
                  marginRight: 20,
                  height: 30,
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
                autoFocus
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
                autoFocus
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="测试countryPickerButtonStyle属性，国家选择器按钮的样式">
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
                autoFocus
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
                autoFocus
              />
            </TestCase>
          </TestSuite>
          <TestSuite name="测试layout属性，组件的布局，是否有国家icon">
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
                autoFocus
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
                autoFocus
              />
            </TestCase>
          </TestSuite>
        </Tester>
      </ScrollView>
    </View>
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
    backgroundColor: Colors.lighter,
  },
});

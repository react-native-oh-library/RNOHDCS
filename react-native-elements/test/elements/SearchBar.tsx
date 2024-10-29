import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { SearchBar, Icon } from '@rneui/themed';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { Button } from '@rneui/base';

type SearchBarComponentProps = {};

const dummySearchBarProps = {
  cancelButtonProps: {},
  showLoading: true,
  onFocus: () => console.log('focus'),
  onBlur: () => console.log('blur'),
  onCancel: () => console.log('cancel'),
  onClear: () => console.log('cleared'),
};
const SearchBarCustom = props => {
  const [value, setValue] = useState('');
  return <SearchBar value={value} onChangeText={setValue} {...props} />;
};
const InputFieldsStyle = {
  borderWidth: 0,
  backgroundColor: 'white',
};
const SearchBarTest: React.FunctionComponent<SearchBarComponentProps> = () => {
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');
  const [value7, setValue7] = useState('');
  const [value8, setValue8] = useState('');
  const [value9, setValue9] = useState('');
  const [value10, setValue10] = useState('');
  const [value11, setValue11] = useState('');
  const [value12, setValue12] = useState('');
  const [value13, setValue13] = useState('');
  const [value14, setValue14] = useState('');
  const [value15, setValue15] = useState('');
  const [value16, setValue16] = useState('');
  const [value17, setValue17] = useState('');
  const [value18, setValue18] = useState('');
  const [value19, setValue19] = useState('');
  const [value20, setValue20] = useState('');
  return (
    <Tester>
      <ScrollView style={{ ...styles.viewContainer }}>
        {/* <TestSuite name="SearchBar属性cancelButtonProps  设置cancelButtonProps 背景颜色 宽度高度 字体颜色 均无效">
          <TestCase itShould="cancelButtonProps" tags={['C_API']}>
            <SearchBar
              autoFocus={true}
              cancelButtonProps={{
                buttonStyle: {backgroundColor: 'red', width: 100, height: 100},
                buttonTextStyle: {color: 'green'},
              }}
              cancelIcon={
                <Icon
                  name="home"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              cancelButtonTitle="取消"
              showCancel={true}
              value={value}
              onChangeText={value => setValue(value)}
              onCancel={() => {}}
            />
          </TestCase>
        </TestSuite> */}
        {/* <TestSuite name="SearchBar属性cancelButtonTitle 设置cancelButtonTitle值为文本字符串 无效">
          <TestCase itShould="cancelButtonProps" tags={['C_API']}>
            <SearchBar
              autoFocus={true}
              cancelButtonProps={{
                buttonStyle: {backgroundColor: 'red', width: 100, height: 100},
                buttonTextStyle: {color: 'green'},
              }}
              cancelIcon={
                <Icon
                  name="home"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              cancelButtonTitle="取消"
              showCancel={true}
              value={value1}
              onChangeText={value => setValue1(value)}
              onCancel={() => {}}
            />
          </TestCase>
        </TestSuite> */}
        <TestSuite name="SearchBar属性 cancelIcon 设置cancelIcon 一个小图标无效">
          <TestCase itShould="cancelButtonProps" tags={['C_API']}>
            <SearchBar
              autoFocus={true}
              cancelButtonProps={{
                buttonStyle: { backgroundColor: 'red', width: 100, height: 100 },
                buttonTextStyle: { color: 'green' },
              }}
              cancelIcon={
                <Icon
                  name="home"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              cancelButtonTitle="取消"
              showCancel={true}
              value={value2}
              onChangeText={value => setValue2(value)}
              onCancel={() => { }}
            />
          </TestCase>
        </TestSuite>
        {/* 已解决 */}
        <TestSuite name="SearchBar属性clearIcon  设置clearIcon 输入后显示删除按钮 ">
          <TestCase itShould="clearIcon" tags={['C_API']}>
            <SearchBar
              value={value4}
              onChangeText={value => {
                setValue4(value);
              }}
              inputMode='numeric'
              placeholder="请输入"
              placeholderTextColor={'green'}
              onClear={() => {
                
              }}
              clearIcon={
                <Button onPress={()=>{
                  setValue4('')
                }} buttonStyle={{backgroundColor:'transparent'}} icon={{
                  name: "remove",
                  type: "font-awesome",
                  color: "red"

                }} />
                // <Icon
                //   name="remove"
                //   type="font-awesome"
                //   color="red"
                //   size={20}></Icon>
              }
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="SearchBar属性containerStyle  设置containerStyle容器样式">
          <TestCase itShould="containerStyle" tags={['C_API']}>
            <SearchBar
              containerStyle={{
                backgroundColor: 'yellow',
                borderRadius: 20,
                width: 300,
                alignSelf: 'center',
              }}
              value={value5}
              onChangeText={(value) => setValue5(value)}
              clearIcon={
                <Icon
                  name="remove"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="SearchBar属性inputContainerStyle  设置inputContainerStyle容器样式">
          <TestCase itShould="inputContainerStyle" tags={['C_API']}>
            <SearchBar
              value={value6}
              onChangeText={(value) => setValue6(value)}
              inputContainerStyle={{ backgroundColor: 'pink' }}
              clearIcon={
                <Icon
                  name="remove"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="SearchBar属性inputStyle  设置inputStyle">
          <TestCase itShould="inputStyle" tags={['C_API']}>
            <SearchBar
              value={value7}
              onChangeText={(value) => setValue7(value)}
              inputStyle={{ backgroundColor: 'yellow' }}
              clearIcon={
                <Icon
                  name="remove"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="SearchBar属性leftIconContainerStyle 设置leftIconContainerStyle 左边icon容器样式">
          <TestCase itShould="leftIconContainerStyle" tags={['C_API']}>
            <SearchBar
              leftIconContainerStyle={{
                width: 50,
                height: 50,
                backgroundColor: 'red',
              }}
              inputStyle={{ backgroundColor: 'yellow' }}
              value={value8}
              onChangeText={value => setValue8(value)}
            />
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="SearchBar属性lightTheme 设置lightTheme为true和false均无效">
          <TestCase itShould="lightTheme" tags={['C_API']}>
            <SearchBar
              lightTheme={true}
              leftIconContainerStyle={{
                width: 50,
                height: 50,
                backgroundColor: 'red',
              }}
              value={value9}
              onChangeText={(value)=>setValue9(value)}
              inputStyle={{backgroundColor: 'yellow'}}
            />
          </TestCase>
        </TestSuite> */}
        <TestSuite name="SearchBar属性loadingProps 设置loadingProps 接受loading属性">
          <TestCase itShould="loadingProps" tags={['C_API']}>
            <SearchBar
              showLoading={true}
              loadingProps={{ animating: true, size: 20, color: 'red' }}
              leftIcon={
                <Icon
                  name="home"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              value={value10}
              onChangeText={(value) => setValue10(value)}
              leftIconContainerStyle={{ width: 50, height: 50 }}
              inputStyle={{ backgroundColor: 'yellow' }}
            />
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="SearchBar属性onCancel 设置onCancel无效 cancel组件显示不出来 ">
          <TestCase itShould="onCancel" tags={['C_API']}>
            <SearchBar
              value={value11}
              onChangeText={value => setValue11(value)}
              cancelButtonProps={{
                buttonStyle: {backgroundColor: 'red', width: 100, height: 50},
                buttonTextStyle: {color: 'green'},
              }}
              cancelIcon={
                <Icon
                  name="home"
                  type="font-awesome"
                  color="red"
                  size={100}></Icon>
              }
              cancelButtonTitle="取消"
              inputStyle={{backgroundColor: 'yellow'}}
              showCancel={true}
              onCancel={() => {}}
            />
          </TestCase>
        </TestSuite> */}
        {/* <TestSuite name="SearchBar属性onClear 设置onClear  删除的回调事件 设置无效">
          <TestCase itShould="onClear" tags={['C_API']}>
            <SearchBar
              cancelButtonProps={{
                buttonStyle: {backgroundColor: 'red'},
                buttonTextStyle: {color: 'green'},
              }}
              cancelIcon={
                <Icon
                  name="home"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              cancelButtonTitle="取消"
              showCancel={true}
              onCancel={() => {}}
              value={value12}
              onChangeText={value => setValue12(value)}
              clearIcon={
                <Icon
                  name="remove"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              onClear={() => {setValue12('')}}
            />
          </TestCase>
        </TestSuite> */}
        {/* <TestSuite name="SearchBar属性platform 设置platform为default无效">
          <TestCase itShould="platform" tags={['C_API']}>
            <SearchBar
              // cancelButtonProps={{ buttonStyle: { backgroundColor: 'red' }, buttonTextStyle: { color: 'green' } }}
              // cancelIcon={<Icon name='home' type='font-awesome' color='red' size={20}></Icon>}
              // cancelButtonTitle='取消'
              // showCancel={true}
              // onCancel={()=>{}}
              value={value13}
              onChangeText={value => setValue13(value)}
              platform="default"
              clearIcon={
                <Icon
                  name="remove"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              onClear={() => {}}
            />
          </TestCase>
        </TestSuite> */}
        <TestSuite name="SearchBar属性rightIconContainerStyle 设置rightIconContainerStyle 右边的icon容器样式">
          <TestCase itShould="rightIconContainerStyle" tags={['C_API']}>
            <SearchBar
              rightIconContainerStyle={{
                width: 50,
                height: 50,
                backgroundColor: 'yellow',
              }}
              rightIcon={
                <Icon
                  name="save"
                  type="font-awesome"
                  color="red"
                  size={100}></Icon>
              }
              value={value14}
              onChangeText={value => setValue14(value)}
              cancelButtonProps={{
                buttonStyle: { backgroundColor: 'red' },
                buttonTextStyle: { color: 'green' },
              }}
              cancelIcon={
                <Icon
                  name="home"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              cancelButtonTitle="取消"
              showCancel={true}
              onCancel={() => { }}
              clearIcon={
                <Icon
                  name="remove"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              onClear={() => { }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="SearchBar属性round 设置round圆角">
          <TestCase itShould="round" tags={['C_API']}>
            <SearchBar
              round={true}
              value={value15}
              onChangeText={value => setValue15(value)}
              rightIconContainerStyle={{ width: 50, height: 50 }}
              rightIcon={
                <Icon
                  name="save"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              cancelButtonProps={{
                buttonStyle: { backgroundColor: 'red' },
                buttonTextStyle: { color: 'green' },
              }}
              cancelIcon={
                <Icon
                  name="home"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              cancelButtonTitle="取消"
              showCancel={true}
              onCancel={() => { }}
              clearIcon={
                <Icon
                  name="remove"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              onClear={() => { }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="SearchBar属性searchIcon 设置searchIcon">
          <TestCase itShould="searchIcon" tags={['C_API']}>
            <SearchBar
              value={value16}
              onChangeText={value => setValue16(value)}
              searchIcon={
                <Icon
                  name="search"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              round={true}
              rightIconContainerStyle={{ width: 50, height: 50 }}
              rightIcon={
                <Icon
                  name="save"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              cancelButtonProps={{
                buttonStyle: { backgroundColor: 'red' },
                buttonTextStyle: { color: 'green' },
              }}
              cancelIcon={
                <Icon
                  name="home"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              cancelButtonTitle="取消"
              showCancel={true}
              onCancel={() => { }}
              clearIcon={
                <Icon
                  name="remove"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              onClear={() => { }}
            />
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="SearchBar属性showCancel  设置showCancel为true或false 都不会出现cancel组件 无效">
          <TestCase itShould="showCancel " tags={['C_API']}>
            <SearchBar
              onChangeText={value => {
                setValue17(value);
              }}
              value={value17}
              searchIcon={
                <Icon
                name="search"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              round={true}
              rightIconContainerStyle={{width: 50, height: 50}}
              rightIcon={
                <Icon
                  name="save"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              cancelButtonProps={{
                buttonStyle: {backgroundColor: 'red'},
                buttonTextStyle: {color: 'green'},
              }}
              cancelIcon={
                <Icon
                  name="home"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              cancelButtonTitle="取消"
              showCancel={true}
              onCancel={() => {}}
              clearIcon={
                <Icon
                  name="remove"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              onClear={() => {}}
            />
          </TestCase>
        </TestSuite> */}
        <TestSuite name="SearchBar属性showLoading  设置showLoading">
          <TestCase itShould="showLoading" tags={['C_API']}>
            <SearchBar
              showLoading={true}
              loadingProps={{ animating: true, size: 20, color: 'red' }}
              onChangeText={value => {
                setValue18(value);
              }}
              value={value18}
              searchIcon={
                <Icon
                  name="search"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              round={true}
              rightIconContainerStyle={{ width: 50, height: 50 }}
              rightIcon={
                <Icon
                  name="save"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              cancelButtonProps={{
                buttonStyle: { backgroundColor: 'red' },
                buttonTextStyle: { color: 'green' },
              }}
              cancelIcon={
                <Icon
                  name="home"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              cancelButtonTitle="取消"
              showCancel={true}
              onCancel={() => { }}
              clearIcon={
                <Icon
                  name="remove"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              onClear={() => { }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="SearchBar属性inputStyle 接收Input组件属性inputStyle">
          <TestCase itShould="设置SearchBar的inputStyle" tags={['C_API']}>
            <SearchBar
              showLoading={true}
              loadingProps={{ animating: true, size: 20, color: 'red' }}
              onChangeText={value => {
                setValue19(value);
              }}
              inputStyle={{ color: 'black', fontSize: 20, fontWeight: '400' }}
              value={value19}
              searchIcon={
                <Icon
                  name="search"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              round={true}
              rightIconContainerStyle={{ width: 50, height: 50 }}
              rightIcon={
                <Icon
                  name="save"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              cancelButtonProps={{
                buttonStyle: { backgroundColor: 'red' },
                buttonTextStyle: { color: 'green' },
              }}
              cancelIcon={
                <Icon
                  name="home"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              cancelButtonTitle="取消"
              showCancel={true}
              onCancel={() => { }}
              clearIcon={
                <Icon
                  name="remove"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              onClear={() => { }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="SearchBar属性editable 接收Input组件属性editable">
          <TestCase itShould="设置ListItem.Input的editable" tags={['C_API']}>
            <SearchBar
              showLoading={true}
              loadingProps={{ animating: true, size: 20, color: 'red' }}
              onChangeText={value => {
                setValue20(value);
              }}
              inputStyle={{ color: 'black', fontSize: 20, fontWeight: '400' }}
              value={value20}
              editable={false}

              round={true}
              rightIconContainerStyle={{ width: 50, height: 50 }}
              rightIcon={
                <Icon
                  name="save"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              cancelButtonProps={{
                buttonStyle: { backgroundColor: 'red' },
                buttonTextStyle: { color: 'green' },
              }}
              cancelIcon={
                <Icon
                  name="home"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              cancelButtonTitle="取消"
              showCancel={true}
              onCancel={() => { }}
              clearIcon={
                <Icon
                  name="remove"
                  type="font-awesome"
                  color="red"
                  size={20}></Icon>
              }
              onClear={() => { }}
            />
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};
const styles = StyleSheet.create({
  headingContainer: {
    paddingTop: 50,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
    color: '#27ae60',
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    color: '#34495e',
  },
  viewContainer: {
    // flex: 1,
  },
  rating: {
    paddingVertical: 10,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default SearchBarTest;

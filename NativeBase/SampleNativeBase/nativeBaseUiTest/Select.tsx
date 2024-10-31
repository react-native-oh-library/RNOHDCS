import {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  Alert,
} from 'react-native';
import {
  Select,
  Center,
  Box,
  FormControl,
  CheckIcon,
  WarningOutlineIcon,
  Button,
  Icon,
} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

const SelectTest = () => {
  const [service, setService] = useState('');
  const [serviceaccessibilityLabel, setServiceaccessibilityLabel] =
    useState('');
  const [serviceaccessibilityLabel1, setServiceaccessibilityLabel1] =
    useState('');
  const [serviceaccessibilityLabel2, setServiceaccessibilityLabel2] =
    useState('');
  const [serviceaccessibilityLabel3, setServiceaccessibilityLabel3] =
    useState('');

  const [service1, setService1] = useState('');
  const [service2, setService2] = useState('');
  const [service3, setService3] = useState('');
  const [service4, setService4] = useState('');
  const [service5, setService5] = useState('ux');
  const [service6, setService6] = useState('');
  const [service7, setService7] = useState('');
  const [service8, setService8] = useState('');
  const [service9, setService9] = useState('');
  const [service10, setService10] = useState('');
  const [service13, setService13] = useState('');
  const [service11, setService11] = useState('');
  const [service12, setService12] = useState('');

  const wrapperRef = useRef(null);
  const selectWrapperRef = useRef(null);
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="defaultValue">
            <TestCase
              itShould="defaultValue-值value=ux  lebel=UX Research"
              tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={service5}
                        minWidth="200"
                        defaultValue={'ux'}
                        accessibilityLabel="accessibilityLabel"
                        _selectedItem={{
                          bg: 'teal.600',
                        }}
                        variant="rounded"
                        onValueChange={itemValue => {
                          Alert.alert(itemValue)
                          setService5(itemValue);
                        }}
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试Select.Item的label">
            <TestCase
              itShould="label-选中之后输入框里展示的文字"
              tags={['dev']}>
              <View style={styles.section}>
                <Text>label</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={service4}
                        minWidth="200"
                        accessibilityLabel="accessibilityLabel"
                        placeholder="Choose Service"
                        _selectedItem={{
                          bg: 'teal.600',
                        }}
                        variant="rounded"
                        onValueChange={itemValue => {
                          setService4(itemValue);
                        }}
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试Select.Item的value">
            <TestCase itShould="value" tags={['dev']}>
              <View style={styles.section}>
                <Text>value</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={service3}
                        minWidth="200"
                        accessibilityLabel="accessibilityLabel"
                        placeholder="Choose Service"
                        _selectedItem={{
                          bg: 'teal.600',
                        }}
                        variant="rounded"
                        onValueChange={itemValue => {
                          Alert.alert('value的值是', itemValue);
                          setService3(itemValue);
                        }}
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="wrapperRef">
            <TestCase itShould="wrapperRef-使用报错" tags={['dev']}>
              <View style={styles.section}>
                <Button
                  onPress={() =>
                    // @ts-ignore
                    selectWrapperRef.current.setNativeProps({
                      backgroundColor: '#00de0050',
                    })
                  }>
                  点击测试mywrapperRef
                </Button>
                <Text>wrapperRef</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={service3}
                        minWidth="200"
                        accessibilityLabel="accessibilityLabel"
                        placeholder="Choose Service"
                        _selectedItem={{
                          bg: 'teal.600',
                        }}
                        wrapperRef={selectWrapperRef}
                        variant="rounded"
                        onValueChange={itemValue => {
                          setService3(itemValue);
                        }}
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="variant">
            <TestCase itShould="variant" tags={['dev']}>
              <View style={styles.section}>
                <Text>variant-值rounded</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={service3}
                        minWidth="200"
                        accessibilityLabel="accessibilityLabel"
                        placeholder="Choose Service"
                        _selectedItem={{
                          bg: 'teal.600',
                        }}
                        variant="rounded"
                        wrapperRef={wrapperRef}
                        onValueChange={itemValue => {
                          setService3(itemValue);
                        }}
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
              <View style={styles.section}>
                <Text>variant-值underlined</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={service3}
                        minWidth="200"
                        accessibilityLabel="accessibilityLabel"
                        placeholder="Choose Service"
                        _selectedItem={{
                          bg: 'teal.600',
                        }}
                        variant="outline"
                        wrapperRef={wrapperRef}
                        onValueChange={itemValue => {
                          setService3(itemValue);
                        }}
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="color">
            <TestCase itShould="color-无效" tags={['dev']}>
              <View style={styles.section}>
                <Text>color</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={serviceaccessibilityLabel3}
                        minWidth="200"
                        accessibilityLabel="accessibilityLabel"
                        placeholder="Choose Service"
                        _selectedItem={{
                          bg: 'teal.600',
                          color: 'amber.700',
                        }}
                        color={'amber.900'}
                        wrapperRef={wrapperRef}
                        onValueChange={itemValue =>
                          setServiceaccessibilityLabel3(itemValue)
                        }
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试selectedValue">
            <TestCase itShould="测试selectedValue" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试selectedValue</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={serviceaccessibilityLabel1}
                        minWidth="200"
                        accessibilityLabel="accessibilityLabel"
                        placeholder="Choose Service"
                        _selectedItem={{
                          bg: 'teal.600',
                        }}
                        wrapperRef={wrapperRef}
                        onValueChange={itemValue =>
                          setServiceaccessibilityLabel1(itemValue)
                        }
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试_item">
            <TestCase
              itShould="测试_item-{
                          height: 100,
                          background:'amber.400'
                        }"
              tags={['dev']}>
              <View style={styles.section}>
                <Text>测试_item</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={serviceaccessibilityLabel2}
                        minWidth="200"
                        accessibilityLabel="accessibilityLabel"
                        placeholder="Choose Service"
                        _item={{
                          height: 100,
                          background: 'amber.400',
                        }}
                        wrapperRef={wrapperRef}
                        onValueChange={itemValue =>
                          setServiceaccessibilityLabel2(itemValue)
                        }
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="accessibilityLabel">
            <TestCase itShould="accessibilityLabel-不知道效果" tags={['dev']}>
              <View style={styles.section}>
                <Text>accessibilityLabel</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={serviceaccessibilityLabel}
                        minWidth="200"
                        accessibilityLabel="accessibilityLabel"
                        placeholder="Choose Service"
                        _selectedItem={{
                          bg: 'teal.600',
                        }}
                        wrapperRef={wrapperRef}
                        onValueChange={itemValue =>
                          setServiceaccessibilityLabel(itemValue)
                        }
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="placeholder">
            <TestCase itShould="placeholder" tags={['dev']}>
              <View style={styles.section}>
                <Text>placeholder</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={service}
                        minWidth="200"
                        accessibilityLabel="Choose Service1"
                        placeholder="placeholder"
                        _selectedItem={{
                          bg: 'teal.600',
                        }}
                        wrapperRef={wrapperRef}
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          {/* <TestSuite name="placeholderTextColor">
            <TestCase itShould="placeholderTextColor-无效" tags={['dev']}>
              <View style={styles.section}>
                <Text>placeholderTextColor</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={service}
                        minWidth="200"
                        accessibilityLabel="Choose Service1"
                        placeholder="placeholderTextColor"
                        placeholderTextColor="blueGray.50"
                        _selectedItem={{
                          bg: 'red',
                        }}
                        wrapperRef={wrapperRef}
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite> */}

          <TestSuite name="测试isDisabled">
            <TestCase itShould="测试isDisabled" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试isDisabled</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={service}
                        minWidth="200"
                        isDisabled
                        accessibilityLabel="Choose Service1"
                        placeholder="placeholder"
                        _selectedItem={{
                          bg: 'teal.600',
                        }}
                        wrapperRef={wrapperRef}
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_actionSheet">
            <TestCase itShould="_actionSheet" tags={['dev']}>
              <View style={styles.section}>
                <Text>_actionSheet</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={service}
                        minWidth="200"
                        accessibilityLabel="Choose Service"
                        placeholder="Choose Service"
                        isFocusVisible
                        isFocused
                        onValueChange={value => {
                          console.log(value, 'value');
                        }}
                        _actionSheet={{
                          bgColor: 'teal.600',
                        }}
                        onClose={() => {
                          console.log('onClose');
                        }}
                        onOpen={() => {
                          console.log('open');
                        }}
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="isFocusVisible">
            <TestCase itShould="isFocusVisible" tags={['dev']}>
              <View style={styles.section}>
                <Text>isFocusVisible-true</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={service1}
                        minWidth="200"
                        placeholder="Choose Service"
                        isFocusVisible
                        onValueChange={value => {
                          setService1(value);
                        }}
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
              <View style={styles.section}>
                <Text>isFocusVisible-false</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={service2}
                        minWidth="200"
                        placeholder="Choose Service"
                        isFocusVisible={false}
                        onValueChange={value => {
                          setService2(value);
                        }}
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="isFocused">
            <TestCase itShould="isFocused" tags={['dev']}>
              <View style={styles.section}>
                <Text>isFocused-true-外框颜色有变化</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={service}
                        minWidth="200"
                        placeholder="Choose Service"
                        isFocused
                        onValueChange={value => {
                          console.log(value, 'value');
                        }}
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
              <View style={styles.section}>
                <Text>isFocused-false</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={service}
                        minWidth="200"
                        placeholder="Choose Service"
                        isFocused={false}
                        onValueChange={value => {
                          console.log(value, 'value');
                        }}
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_actionSheetContent">
            <TestCase itShould="_actionSheetContent" tags={['dev']}>
              <View style={styles.section}>
                <Text>_actionSheetContent</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={service6}
                        minWidth="200"
                        accessibilityLabel="Choose Service"
                        placeholder="Choose Service"
                        isFocusVisible
                        isFocused
                        onValueChange={value => {
                          console.log(value, 'value');
                          setService6(value);
                        }}
                        _actionSheetContent={{
                          bg: 'amber.300',
                        }}
                        onClose={() => {
                          console.log('onClose');
                        }}
                        onOpen={() => {
                          console.log('open');
                        }}
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="onClose">
            <TestCase itShould="onClose" tags={['dev']}>
              <View style={styles.section}>
                <Text>onClose</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={service7}
                        minWidth="200"
                        accessibilityLabel="Choose Service"
                        placeholder="Choose Service"
                        isFocusVisible
                        isFocused
                        onValueChange={value => {
                          console.log(value, 'value');
                          setService7(value);
                        }}
                        _selectedItem={{
                          bg: 'teal.600',
                        }}
                        _actionSheet={{
                          bgColor: 'teal.600',
                        }}
                        _actionSheetContent={{
                          bg: 'amber.300',
                        }}
                        _actionSheetBody={{
                          bg: 'amber.900',
                        }}
                        onClose={() => {
                          Alert.alert('onClose事件');
                        }}
                        onOpen={() => {
                          console.log('open');
                        }}
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_actionSheetBody">
            <TestCase itShould="_actionSheetBody-height:200" tags={['dev']}>
              <View style={styles.section}>
                <Text>_actionSheetBody</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={service8}
                        minWidth="200"
                        accessibilityLabel="Choose Service"
                        placeholder="Choose Service"
                        isFocusVisible
                        isFocused
                        onValueChange={value => {
                          console.log(value, 'value');
                          setService8(value);
                        }}
                        _actionSheetBody={{
                          height:200,
                        }}
                        onClose={() => {}}
                        onOpen={() => {
                          console.log('open');
                        }}
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="onOpen">
            <TestCase itShould="onOpen" tags={['dev']}>
              <View style={styles.section}>
                <Text>onOpen</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={service9}
                        minWidth="200"
                        accessibilityLabel="Choose Service"
                        placeholder="Choose Service"
                        isFocusVisible
                        isFocused
                        onValueChange={value => {
                          console.log(value, 'value');
                          setService9(value);
                        }}
                        onClose={() => {
                          console.log('onClose111');
                        }}
                        onOpen={() => {
                          Alert.alert('onOpen事件');
                        }}
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="dropdownIcon">
            <TestCase itShould="dropdownIcon-初始图标" tags={['dev']}>
              <View style={styles.section}>
                <Text>dropdownIcon</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={service10}
                        minWidth="200"
                        accessibilityLabel="Choose Service"
                        placeholder="Choose Service"
                        isFocusVisible
                        isFocused
                        onValueChange={value => {
                          console.log(value, 'value');
                          setService10(value);
                        }}
                        dropdownIcon={
                          <Icon
                            as={MaterialCommunityIcons}
                            name="web"
                            color="coolGray.800"
                            _dark={{
                              color: 'warmGray.50',
                            }}
                          />
                        }
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="onValueChange">
            <TestCase itShould="onValueChange" tags={['dev']}>
              <View style={styles.section}>
                <Text>onValueChange</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={service11}
                        minWidth="200"
                        accessibilityLabel="Choose Service"
                        placeholder="Choose Service"
                        isFocusVisible
                        isFocused
                        onValueChange={value => {
                          Alert.alert(value)
                          setService11(value);
                        }}
                        onOpen={() => {
                          console.log('open');
                        }}
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_selectedItem">
            <TestCase itShould="_selectedItem" tags={['dev']}>
              <View style={styles.section}>
                <Text>_selectedItem</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={service12}
                        minWidth="200"
                        accessibilityLabel="Choose Service"
                        placeholder="Choose Service"
                        isFocusVisible
                        isFocused
                        onValueChange={value => {
                          console.log(value, 'value');
                          setService12(value);
                        }}
                        _selectedItem={{
                          bg: 'teal.600',
                        }}
                        onClose={() => {
                          console.log('onClose');
                        }}
                        onOpen={() => {
                          console.log('open');
                        }}
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="dropdownCloseIcon">
            <TestCase
              itShould="dropdownCloseIcon-值是MaterialIcons（icon）"
              tags={['dev']}>
              <View style={styles.section}>
                <Text>dropdownCloseIcon</Text>
                <View style={styles.subSection}>
                  <FormControl.Label>Choose service</FormControl.Label>
                  <Select
                    minWidth="200"
                    accessibilityLabel="Choose Service"
                    placeholder="Choose Service"
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <CheckIcon size={5} />,
                    }}
                    dropdownCloseIcon={
                      <Icon
                        as={MaterialIcons}
                        name="search"
                        color="coolGray.800"
                        _dark={{
                          color: 'warmGray.50',
                        }}
                      />
                    }
                    mt="1">
                    <Select.Item label="UX Research" value="ux" />
                    <Select.Item label="Web Development" value="web" />
                    <Select.Item
                      label="Cross Platform Development"
                      value="cross"
                    />
                    <Select.Item label="UI Designing" value="ui" />
                    <Select.Item label="Backend Development" value="backend" />
                  </Select>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="dropdownOpenIcon">
            <TestCase
              itShould="FormControlled-MaterialIcons（icon）"
              tags={['dev']}>
              <View style={styles.section}>
                <Text>dropdownOpenIcon</Text>
                <View style={styles.subSection}>
                  <Select
                    minWidth="200"
                    accessibilityLabel="Choose Service"
                    placeholder="Choose Service"
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <CheckIcon size={5} />,
                    }}
                    dropdownOpenIcon={<MaterialIcons name="mic" size={20} />}
                    mt="1">
                    <Select.Item label="UX Research" value="ux" />
                    <Select.Item label="Web Development" value="web" />
                    <Select.Item
                      label="Cross Platform Development"
                      value="cross"
                    />
                    <Select.Item label="UI Designing" value="ui" />
                    <Select.Item label="Backend Development" value="backend" />
                  </Select>
                </View>
              </View>
            </TestCase>
          </TestSuite>
        </ScrollView>
      </Tester>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
  },
  section: {
    backgroundColor: '#f2f2f2',
  },
  subSection: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 10,
    width: '100%',
    padding: 10,
  },
});

export default SelectTest;

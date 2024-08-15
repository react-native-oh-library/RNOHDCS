import React from 'react';
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import { StyleSheet, View, Switch, Text } from "react-native";
import { CreditCardInput, LiteCreditCardInput,CardView } from "react-native-credit-card-input";

export const ReactNativeLiteCreditCardInputTest = () => {

  return (
    <Tester style={{ flex: 1 }}>
      <TestSuite name="LiteCreditCardInputTest1">
        <TestCase
          tags={['C_API']}
          itShould="LiteCreditCardInput中autoFocus属性，自动聚焦到当前用例框">
          <View>
            <LiteCreditCardInput autoFocus={true} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="LiteCreditCardInputTest2">
        <TestCase
          tags={['C_API']}
          itShould="LiteCreditCardInput中 onChange 属性，获取填写数据">
          <OnChange/>
        </TestCase>
      </TestSuite>
      <TestSuite name="LiteCreditCardInputTest3">
        <TestCase
          tags={['C_API']}
          itShould="LiteCreditCardInput中 onFocus属性，获取选中字段">
          <OnFocus/>
        </TestCase>
      </TestSuite>
      <TestSuite name="LiteCreditCardInputTest4">
        <TestCase
          tags={['C_API']}
          itShould="LiteCreditCardInput中 placeholders 属性，设置默认占位值">
          <View>
            <LiteCreditCardInput placeholders={{ number: "6666 8888 1234 5678", expiry: "12/24", cvc: "121" }}/>
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="LiteCreditCardInputTest5">
        <TestCase
          tags={['C_API']}
          itShould="LiteCreditCardInput中 inputStyle 属性，设置文本框颜色为黄色">
          <View>
            <LiteCreditCardInput inputStyle={s.input} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="LiteCreditCardInputTest6">
        <TestCase
          tags={['C_API']}
          itShould="LiteCreditCardInput中 validColor 属性设置为蓝色">
          <View>
            <LiteCreditCardInput validColor={"blue"} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="LiteCreditCardInputTest7">
        <TestCase
          tags={['C_API']}
          itShould="LiteCreditCardInput中 invalidColor属性设置为蓝色">
          <View>
            <LiteCreditCardInput invalidColor={"blue"} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="LiteCreditCardInputTest8">
        <TestCase
          tags={['C_API']}
          itShould="LiteCreditCardInput中 placeholderColor 属性设置 占位符的字体颜色为黄色">
          <View>
            <LiteCreditCardInput placeholderColor={"yellow"} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="LiteCreditCardInputTest9">
        <TestCase
          tags={['C_API']}
          itShould="LiteCreditCardInput中 additionalInputsProps属性设置限制输入框输入长度">
          <View>
            <LiteCreditCardInput additionalInputsProps={addtionalInputsProps} />
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
};

addtionalInputsProps = {
  "number": {
    maxLength: 12,
  },
  "expiry": {
    maxLength: 2,
  },
  "cvc": {
    maxLength: 5,
  },
};

function OnChange(){
  const [formData,setFormData] = React.useState([])
  const _onChange = (formData) => {
    setFormData(formData)
    // console.log(JSON.stringify(formData, null, " "))
  };
  return (<View>
    <LiteCreditCardInput onChange={_onChange} />
    <Text>number:{formData.values.number}</Text>
    <Text>expiry:{formData.values.expiry}</Text>
    <Text>cvc:{formData.values.cvc}</Text>
  </View>)
}

function OnFocus(){
  const [field,setFocusing] = React.useState([])
  const _onFocus = (field) => {
    setFocusing(field)
    // console.log("focusing", field)
  };
  
  return (
    <View>
      <LiteCreditCardInput onFocus={_onFocus} />
      <Text>field:{field}</Text>
    </View>
  )
}

const s = StyleSheet.create({
  switch: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    backgroundColor: "#F5F5F5",
    marginTop: 60,
  },
  label: {
    color: "yellow",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "yellow",
  },
  inputContainerStyle: {
    borderBottomWidth: 10,
    borderBottomColor: "yellow",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'yellow',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
});
import React from 'react';
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import { StyleSheet, View, Switch, Text, ScrollView } from "react-native";
import { CreditCardInput, LiteCreditCardInput,CardView } from "react-native-credit-card-input";

export const  ReactNativeCreditCardInputTest = () => {

  return (
    <ScrollView>
      <Tester style={{ flex: 1 }}>
      <TestSuite name="CreditCardInput1">
        <TestCase
          tags={['C_API']}
          itShould="CreditCardInput中 autoFocus 属性设置，自动聚焦到当前框">
          <View>
            <CreditCardInput autoFocus={true} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CreditCardInput2">
        <TestCase
          tags={['C_API']}
          itShould="CreditCardInput中 onChange 属性，获取填写值">
          <CreditCardInputOnChange/>
        </TestCase>
      </TestSuite>
      <TestSuite name="CreditCardInput3">
        <TestCase
          tags={['C_API']}
          itShould="CreditCardInput中 labels 属性，修改labels值">
          <View>
            <CreditCardInput labels={{ number: "NUMBERTest", expiry: "Test", cvc: "Test" }} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CreditCardInput4">
        <TestCase
          tags={['C_API']}
          itShould="CreditCardInput中 placeholders 属性，设置默认占位值">
          <View>
            <CreditCardInput placeholders={{ number: "2222 2222 2222 2222", expiry: "12/12", cvc: "888" }} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CreditCardInput5">
        <TestCase
          tags={['C_API']}
          itShould="CreditCardInput中 cardScale 属性，设置卡片大小为原大小0.5">
          <View>
            <CreditCardInput cardScale={0.5} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CreditCardInput7">
        <TestCase
          tags={['C_API']}
          itShould="CreditCardInput中 cardImageFront 属性，设置正面卡片图片为新图片 ">
          <View>
            <CreditCardInput cardImageFront={require("./images/card-front.png")} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CreditCardInput8">
        <TestCase
          tags={['C_API']}
          itShould="CreditCardInput中 cardImageFront 属性，设置反面卡片图片为新图片">
          <View>
            <CreditCardInput cardImageBack={require("./images/card-back.png")} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CreditCardInput9">
        <TestCase
          tags={['C_API']}
          itShould="CreditCardInput中 labelStyle 属性，设置标签样式为黄色">
          <View>
            <CreditCardInput labelStyle={s.label} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CreditCardInput10">
        <TestCase
          tags={['C_API']}
          itShould="CreditCardInput中 inputStyle 属性，设置输入框样式为黄色">
          <View>
            <CreditCardInput inputStyle={s.input} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CreditCardInput11">
        <TestCase
          tags={['C_API']}
          itShould="CreditCardInput中 inputContainerStyle 属性，设置 borderBottomWidth: 10,borderBottomColor: yellow">
          <View>
            <CreditCardInput inputContainerStyle={s.inputContainerStyle} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CreditCardInput12">
        <TestCase
          tags={['C_API']}
          itShould="CreditCardInput中 validColor 属性设置为蓝色">
          <View>
            <CreditCardInput validColor={"blue"} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CreditCardInput13">
        <TestCase
          tags={['C_API']}
          itShould="CreditCardInput中 invalidColor 属性设置为蓝色">
          <View>
            <CreditCardInput invalidColor={"blue"} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CreditCardInput14">
        <TestCase
          tags={['C_API']}
          itShould="CreditCardInput中 placeholderColor 属性，设置占位字符颜色为黄色">
          <View>
            <CreditCardInput placeholderColor={"yellow"} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CreditCardInput15">
        <TestCase
          tags={['C_API']}
          itShould="CreditCardInput中 requiresName 属性，设置展示name输入框">
          <View>
            <CreditCardInput requiresName={true} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CreditCardInput16">
        <TestCase
          tags={['C_API']}
          itShould="CreditCardInput中 requiresCVC属性，设置不展示cvc输入框">
          <View>
            <CreditCardInput requiresCVC={false} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CreditCardInput17">
        <TestCase
          tags={['C_API']}
          itShould="CreditCardInput中 requiresPostalCode 属性，设置展示PostalCode输入框">
          <View>
            <CreditCardInput requiresPostalCode={true} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CreditCardInput18">
        <TestCase
          tags={['C_API']}
          itShould="CreditCardInput中 validatePostalCode与requiresPostalCode属性，设置校验PostalCode规则，只有输入123456为校验正确">
          <View>
            <CheckHandleFormSubmit/>
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CreditCardInput19">
        <TestCase
          tags={['C_API']}
          itShould="CreditCardInput中 allowScroll  属性，设置可以左右滚动">
          <View>
            <CreditCardInput allowScroll ={true} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CreditCardInput20">
        <TestCase
          tags={['C_API']}
          itShould="CreditCardInput中 cardBrandIcons 属性，设置master-card图片">
          <View>
            <CreditCardInput cardBrandIcons ={
              {
                "master-card": require("./icons/stp_card_cvc.png"),
              }
            } />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CreditCardInput21">
        <TestCase
          tags={['C_API']}
          itShould="CreditCardInput中 additionalInputsProps属性，设置限制输入框输入长度">
          <View>
          <CreditCardInput additionalInputsProps={addtionalInputsProps} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CardView1">
        <TestCase
          tags={['C_API']}
          itShould="CardView中 focused 属性，设置展示number字段的数据高亮">
          <View>
          <CardView focused={'number'} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CardView2">
        <TestCase
          tags={['C_API']}
          itShould="CardView中brand属性，设置展示在右上角的图片">
          <View>
          <CardView brand={'cvc'} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CardView3">
        <TestCase
          tags={['C_API']}
          itShould="CardView中  name属性，设置name默认值111111">
          <View>
          <CardView name={"111111"} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CardView4">
        <TestCase
          tags={['C_API']}
          itShould="CardView中  number 属性，设置number默认值为1111 1111 1111 1111">
          <View>
          <CardView number={"1111 1111 1111 1111"} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CardView5">
        <TestCase
          tags={['C_API']}
          itShould="CardView中  expiry 属性设置expiry 默认值 11/11">
          <View>
          <CardView expiry={"11/11"} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CardView6">
        <TestCase
          tags={['C_API']}
          itShould="CardView中  focused 与cvc 属性，设置cvc默认值为123">
          <View>
          <CardView cvc={"123"}  focused={'cvc'}/>
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CardView7">
        <TestCase
          tags={['C_API']}
          itShould="CardView中  placeholder 属性设置 设置卡片与时间，卡号默认值">
          <View>
          <CardView placeholder={{
              name: "测试test",
              number: "1234 5678 1234 5678",
              expiry: "MM/YY"
            }}/>
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CardView8">
        <TestCase
          tags={['C_API']}
          itShould="CardView中  scale 属性设置图片大小为原大小0.5">
          <View>
              <CardView scale={0.5}/>
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CardView10">
        <TestCase
          tags={['C_API']}
          itShould="CardView中  imageFront 属性设置卡正面为黑色背景图片">
          <View>
          <CardView imageFront={require("./images/black.png")}/>
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CardView11">
        <TestCase
          tags={['C_API']}
          itShould="CardView中imageBack属性设置卡背面图案为会黑色图片">
          <View>
          <CardView imageBack={require("./images/black.png")} focused={'cvc'}/>
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CardView12">
        <TestCase
          tags={['C_API']}
          itShould="CardView中customIcons属性，设置自定义右上角图片">
          <View>
          <CardView customIcons={{test: require("./icons/stp_card_cvc.png")}} brand={'test'}/>
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
    </ScrollView>
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

function CheckHandleFormSubmit(){

  const [checkIsSuccess,setCheckIsSuccess] = React.useState([])

  const handleFormSubmit = (postalCode) => {
    // 假设这里是表单提交的处理函数
    const postalCode1 = '12345'; // 假设从表单获取邮政编码
    if (postalCode1===postalCode) {
      // 邮政编码验证通过，继续提交表单或进行其他操作
      setCheckIsSuccess('通过')
    } else {
      // 邮政编码验证不通过，可能显示错误消息或者其他处理
      setCheckIsSuccess('失败')
    }
  };
  return (<View>
    <CreditCardInput validatePostalCode={handleFormSubmit} requiresPostalCode={true} />
    <Text>校验PostalCode结果:{checkIsSuccess}</Text>
  </View>)
}

function CreditCardInputOnChange(){
  const [formData,setFormData] = React.useState([])
  const _onChange = (formData) => {
    setFormData(formData)
    // console.log(JSON.stringify(formData, null, " "))
  };
  return (<View>
    <CreditCardInput onChange={_onChange} />
    <Text>number:{formData.values.number}</Text>
    <Text>expiry:{formData.values.expiry}</Text>
    <Text>cvc:{formData.values.cvc}</Text>
  </View>)
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
import React from 'react';
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import { StyleSheet, View, Switch, Text, ScrollView } from "react-native";
import { CreditCardInput,CardView } from "react-native-credit-card-input";

export const  ReactNativeCardFontFamily = () => {

  return (
    <ScrollView>
      <Tester style={{ flex: 1 }}>
      <TestSuite name="CreditCardInput6">
        <TestCase
          tags={['C_API']}
          itShould="CreditCardInput中 cardFontFamily 属性，设置卡片上number和expipy文本字体样式为Pacifico-Regular">
          <View>
            <CreditCardInput cardFontFamily="Pacifico-Regular" />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name="CardView9">
        <TestCase
          tags={['C_API']}
          itShould="CardView中  fontFamily与 placeholder属性设置卡片字体样式设置自定义样式Pacifico-Regular">
          <View>
          <CardView fontFamily='Pacifico-Regular'
          placeholder={{
              name: "测试test22211111",
              number: "1234 5678 1234 5678",
              expiry: "MM/YY"
            }}/>
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
    </ScrollView>
  );
};

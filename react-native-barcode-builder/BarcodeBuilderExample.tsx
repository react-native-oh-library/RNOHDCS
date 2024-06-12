import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Barcode from 'react-native-barcode-builder';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const BarcodeBuilderExample = () => {
  const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
  });
  useEffect(() => {}, []);
  const error = e => {
    console.log(e, 'click');
  };
  return (
    <Tester>
      <TestSuite name="barcodeBuilder">
        <TestCase itShould="barcodeBuilder" tags={['C_API']}>
            <Barcode
              value=" hello~~~" //条形码扫描结果
              format="CODE128" //条形码编码类型
              text="hello world" //条形码下方字体
              // textColor='red'  //条形码下方字体颜色
              // lineColor='blue' //条形码颜色
              // background="red"  //条形码背景颜色
              onError={error} //扫描失败回调
              width={5} // 条形码单条宽度
              height={200} //条形码单条高度
            />
            ;
         
        </TestCase>
      </TestSuite>
    </Tester>
  );
};

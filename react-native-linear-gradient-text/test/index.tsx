import React from 'react';
import {View, StyleSheet, ScrollView, Alert} from 'react-native';
import {LinearGradientText} from 'react-native-linear-gradient-text';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const LinearGradientTextTest = () => {
  return (
    <ScrollView>
      <Tester>
        <TestSuite name="colors">
          <TestCase itShould="设置颜色:渐变蓝色">
            <View style={styles.container}>
              <LinearGradientText
                colors={['#FFFFFF', '#3b5998', '#192f6a']}
                text="Hello World-123"
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="start">
          <TestCase itShould="start坐标：x:0.0 y:0.25">
            <View style={styles.container}>
              <LinearGradientText
                colors={['#E76F00', '#EA374E']}
                text="Hello World"
                start={{x: 0.0, y: 0.25}} // Optional
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="end">
          <TestCase itShould="end坐标：x:0.5 y:1.0">
            <View style={styles.container}>
              <LinearGradientText
                colors={['#E76F00', '#EA374E']}
                text="Hello World"
                end={{x: 0.5, y: 1.0}} // Optional
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="textStyle">
          <TestCase itShould="文本样式：设置字号40">
            <View style={styles.container}>
              <LinearGradientText
                colors={['#E76F00', '#EA374E']}
                text="Hello World"
                textStyle={{fontSize: 40}} // Optional
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="textProps">
          <TestCase itShould="文本props：设置点击效果">
            <View style={styles.container}>
              <LinearGradientText
                colors={['#E76F00', '#EA374E']}
                text="Hello World"
                start={{x: 0.5, y: 0}} // Optional
                end={{x: 1, y: 1}} // Optional
                textStyle={{fontSize: 16}} // Optional
                textProps={{
                  allowFontScaling: true,
                  onPress: () => Alert.alert('我被点击了'),
                }} // Optional
              />
            </View>
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
};

export default {
  displayName: 'LinearGradientTextTest',
  framework: 'React',
  category: 'UI',
  title: 'react-native-linear-gradient-text',
  documentationURL: 'https://reactnative.dev/docs/text',
  description: 'React Native text',
  examples: [
    {
      title: 'react-native-linear-gradient-text',
      render: function (): any {
        return <LinearGradientTextTest />;
      },
    },
  ]
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

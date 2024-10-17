import React from 'react';
import {StyleSheet, View, Button, Alert, ScrollView} from 'react-native';
import {LinearGradientText} from 'react-native-linear-gradient-text';
import {TestCase, Tester, TestSuite} from '@rnoh/testerino';

function cyclicReturn(arr: any) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error('Invalid input: must provide a non-empty array.');
  }
  let index = 1;

  return function () {
    const value = arr[index];
    index = (index + 1) % arr.length;
    console.log(`cyclicReturn: ${JSON.stringify(value)}`);
    return value;
  };
}

export function LinearGradientTextTest() {
  return (
    <ScrollView>
      <Tester>
        <TestSuite name="colors and text">
          <TestCase tags={['C_API']} itShould="设置文本以及颜色">
            <ShowText />
          </TestCase>
        </TestSuite>

        <TestSuite name="colors and position">
          <TestCase tags={['C_API']} itShould="设置渐变文本的起始位置">
            <ChangeColorPosition />
          </TestCase>
        </TestSuite>

        <TestSuite name="textProps">
          <TestCase tags={['C_API']} itShould="文本props,实现点击效果">
            <ChangeTextProps />
          </TestCase>
        </TestSuite>

        <TestSuite name="textStyle">
          <TestCase tags={['C_API']} itShould="文本样式,实现切换字体大小">
            <ChangeTextStyle />
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
}

const gradientColors = [
  ['#FF5733', '#33FF57'], // 从橙色到绿色
  ['#3357FF', '#FF3357'], // 从蓝色到红色
  ['#33FFC1', '#C133FF'], // 从青色到紫色
  // ['#F333FF', '#FF33F3'], // 从品红色到紫色（类似）
  // ['#33FFF3', '#F333FF'], // 从青色到品红色
  // ['#FF33C1', '#C1FF33'], // 从橙红色到黄绿色
];

const genText = cyclicReturn([
  'Hello World',
  'react-native-linear-gradient-text',
  'Harmony',
]);
const genColor = cyclicReturn(gradientColors);
const genLine = cyclicReturn([1, 2, 3]);
const genFontSize = cyclicReturn([10, 20, 30, 40]);

function ShowText() {
  const [text, setText] = React.useState('Hello World');
  const [color, setColor] = React.useState(gradientColors[0]);

  return (
    <View style={styles.container}>
      <LinearGradientText
        colors={color}
        text={text}
        textStyle={{fontSize: 20}}
      />
      <View style={styles.row}>
        <Button
          title="change text"
          onPress={() => {
            setText(genText());
          }}
        />

        <Button
          title="change color"
          onPress={() => {
            setColor(genColor());
          }}
        />
      </View>
    </View>
  );
}

function ChangeColorPosition() {
  const [startX, setStartX] = React.useState(0.5);
  const [startY, setStartY] = React.useState(0.7);
  const [endX, setEndX] = React.useState(0.2);
  const [endY, setEndY] = React.useState(0.7);
  return (
    <View style={styles.container}>
      <LinearGradientText
        colors={gradientColors[0]}
        text={'Hello World'}
        start={{x: startX, y: startY}}
        end={{x: endX, y: endY}}
        textStyle={{fontSize: 30}}
        textProps={{allowFontScaling: true, numberOfLines: 1}}
      />
      <Button
        title="change position"
        onPress={() => {
          setStartX(v => {
            return v === 0.5 ? 0.2 : 0.2;
          });
          setStartY(v => {
            return v === 0.7 ? 0.2 : 0.7;
          });
          setEndX(v => {
            return v === 0.2 ? 0.3 : 0.2;
          });
          setEndY(v => {
            return v === 0.7 ? 0.3 : 0.7;
          });
        }}
      />
    </View>
  );
}

function ChangeTextStyle() {
  const [fontSize, setFontSize] = React.useState(10);
  return (
    <View style={styles.container}>
      <LinearGradientText
        colors={['#000000', '#ff0000', '#000000']}
        text={'Hello World react-native-linear-gradient-text'}
        textStyle={{fontSize: fontSize, width: 200}}
      />
      <Button
        title="change font Size"
        onPress={() => {
          setFontSize(genFontSize());
        }}
      />
    </View>
  );
}

function ChangeTextProps() {
  const [line, setLine] = React.useState(1);
  return (
    <View style={styles.container}>
      <LinearGradientText
        colors={['#000000', '#ff0000', '#000000']}
        text={'Hello World react-native-linear-gradient-text'}
        textStyle={{fontSize: 20, width: 200}}
        textProps={{
          allowFontScaling: true,
          numberOfLines: line,
          onPress: () => Alert.alert('我被点击了'),
        }}
      />
      <Button
        title="change textProps numberOfLines"
        onPress={() => {
          setLine(genLine());
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
  },
});

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
  ],
};

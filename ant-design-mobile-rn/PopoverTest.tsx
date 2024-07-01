import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, Easing, findNodeHandle, ScrollView } from 'react-native';
import { Button, Popover, Toast } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

const Item = Popover.Item;

export default () => {

  return (
    <TestSuite name="PopoverTest">
      <TestCase itShould="render a Popover defalut">
        <PopoverDefalutTest />
      </TestCase>
      <TestCase itShould="render a Popover Customizing">
        <PopoverCustomizingTest />
      </TestCase>
      <TestCase itShould="render a Popover Animated">
        <PopoverAnimatedTest />
      </TestCase>
      <TestCase itShould="render a Popover auto postion">
        <PopoverAutoPostionTest />
      </TestCase>
    </TestSuite>
  );
};

function PopoverDefalutTest() {
  const ref = useRef(null);
  const [selected, setSelected] = useState<string>('');
  let overlay = [1, 2, 3].map((i, index) => (
    <Item key={index} value={`option ${i}`}>
      <Text>option {i}</Text>
    </Item>
  ))
  overlay = overlay.concat([
    <Item key="4" value="disabled" disabled>
      <Text style={{ color: '#ddd' }}>{'disabled opt'}</Text>
    </Item>,
    <Item key="6" value="button ct" style={{ backgroundColor: '#efeff4' }}>
      <Text>{'关闭'}</Text>
    </Item>,
  ]);

  return (
    <ScrollView>
      <Popover
        overlay={overlay}
        triggerStyle={styles.triggerStyle}
        onSelect={(v) => {
          Toast.info(`${v}被点击了`);
          setSelected(v);
        }
        }>
        <Button ref={ref}>{'菜单'}</Button>
        <Text>{`选择了:${selected}`}</Text>
      </Popover>
    </ScrollView>
  )
}

function PopoverCustomizingTest() {
  return (
    <View style={{ marginTop: 20 }}>
      <Popover
        overlay={
          <Popover.Item value={'test'}>
            <Text>自定义组件 x</Text>
          </Popover.Item>
        }
        renderOverlayComponent={(nodes) => (
          <View>
            <Text
              style={{
                paddingHorizontal: 9,
                paddingTop: 16,
                color: '#2b2b2b',
                fontWeight: 'bold',
              }}>
              我是自定义组件title
            </Text>
            {nodes}
          </View>
        )}>
        <Text
          style={{
            margin: 16,
          }}>
          自定义组件
        </Text>
      </Popover>
    </View>
  )
}

function PopoverAnimatedTest() {
  let overlay = [1, 2, 3].map((i, index) => (
    <Item key={index} value={`option ${i}`}>
      <Text>option {i}</Text>
    </Item>
  ))
  overlay = overlay.concat([
    <Item key="4" value="disabled" disabled>
      <Text style={{ color: '#ddd' }}>{'disabled opt'}</Text>
    </Item>,
    <Item key="6" value="button ct" style={{ backgroundColor: '#efeff4' }}>
      <Text>{'关闭'}</Text>
    </Item>,
  ]);
  return (
    <View style={{ marginTop: 20 }}>
      <Popover
        overlay={overlay}
        useNativeDriver
        duration={200}
        easing={(show) => (show ? Easing.in(Easing.ease) : Easing.step0)}>
        <Text
          style={{
            margin: 16,
          }}>
          自定义动画
        </Text>
      </Popover>
    </View>
  )
}

function PopoverAutoPostionTest() {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text
        style={{
          margin: 16,
          color: 'red',
        }}>
        如果你设置了 placement 属性请确保你的内容够位置显示，默认是 auto
        自动计算位置
      </Text>
      {['left', 'right', 'top', 'bottom'].map((p) => (
        <Popover
          key={p}
          overlay={
            <Popover.Item value={p}>
              <Text>自定义组件 {p}</Text>
            </Popover.Item>
          }
          placement={p as any}>
          <Text
            style={{
              margin: 16,
            }}>
            {p}
          </Text>
        </Popover>
      ))}
    </View>
  )
}


const styles = StyleSheet.create({
  triggerStyle: {
    paddingHorizontal: 6,
  },
})
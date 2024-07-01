
import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Flex, WingBlank, Button } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  return (
    <TestSuite name="FlexTest">
      <TestCase itShould="Flex direction is row" tags={['C_API']}>
        <FlexRowTest />
      </TestCase>
      <TestCase itShould="Flex direction is column" tags={['C_API']}>
        <FlexColumnTest />
      </TestCase>
      <TestCase itShould="Flex justify is start" tags={['C_API']}>
        <FlexJustifyStartTest />
      </TestCase>
      <TestCase itShould="Flex justify is center" tags={['C_API']}>
        <FlexJustifyCenterTest />
      </TestCase>
      <TestCase itShould="Flex justify is end" tags={['C_API']}>
        <FlexJustifyEndTest />
      </TestCase>
      <TestCase itShould="Flex justify is between" tags={['C_API']}>
        <FlexJustifyBetweenTest />
      </TestCase>
      <TestCase itShould="Flex justify is around" tags={['C_API']}>
        <FlexJustifyAroundTest />
      </TestCase>
      <TestCase itShould="Flex align is start" tags={['C_API']}>
        <FlexAlignStartTest />
      </TestCase>
      <TestCase itShould="Flex align is center" tags={['C_API']}>
        <FlexAlignCenterTest />
      </TestCase>
      <TestCase itShould="Flex align is end" tags={['C_API']}>
        <FlexAlignEndTest />
      </TestCase>
      <TestCase itShould="Flex align is stretch" tags={['C_API']}>
        <FlexAlignStretchTest />
      </TestCase>
      <TestCase itShould="Flex wrap" tags={['C_API']}>
        <FlexWrapTest />
      </TestCase>
      <TestCase itShould="Flex nowrap" tags={['C_API']}>
        <FlexNoWrapTest />
      </TestCase>
    </TestSuite>
  );
};

const Circle = (props: any) => {
  const size = props.size || 20
  const style = {
    borderRadius: size / 2,
    backgroundColor: '#527fe4',
    width: size,
    height: size,
    margin: 1,
  }
  return <View style={style} />
}

function FlexRowTest() {
  return (
    <View>
      <WingBlank style={{ marginTop: 20, marginBottom: 5 }}>
        <Text style={{ marginBottom: 10 }}>项目的排列方向</Text>
        <Text>direction="row":主轴为水平方向，起点在左端</Text>
      </WingBlank>
      <WingBlank style={{ marginBottom: 5 }}>
        <Flex>
          <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
            <Button size="small">按钮1</Button>
          </Flex.Item>
          <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
            <Button size="small">按钮2</Button>
          </Flex.Item>
          <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
            <Button size="small">按钮3</Button>
          </Flex.Item>
        </Flex>
      </WingBlank>
    </View>
  )
}

function FlexColumnTest() {
  return (
    <View>
      <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
        <Text>direction="column":主轴为垂直方向，起点在上沿</Text>
      </WingBlank>
      <WingBlank style={{ marginBottom: 5 }}>
        <Flex direction="column">
          <Flex.Item style={{ paddingBottom: 4 }}>
            <Button size="small">按钮1</Button>
          </Flex.Item>
          <Flex.Item style={{ paddingBottom: 4 }}>
            <Button size="small">按钮2</Button>
          </Flex.Item>
          <Flex.Item style={{ paddingBottom: 4 }}>
            <Button size="small">按钮3</Button>
          </Flex.Item>
        </Flex>
      </WingBlank>
    </View>
  )
}

function FlexJustifyStartTest() {
  return (
    <View>
      <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
        <Text style={{ marginTop: 20, marginBottom: 20 }}>
          项目在主轴上的对齐方式
        </Text>
        <Text>justify="start":左对齐</Text>
      </WingBlank>
      <WingBlank style={{ marginBottom: 5 }}>
        <Flex justify="start">
          <Circle />
          <Circle />
          <Circle />
          <Circle />
        </Flex>
      </WingBlank>
    </View>
  )
}

function FlexJustifyCenterTest() {
  return (
    <View>
      <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
        <Text>justify="center":居中</Text>
      </WingBlank>
      <WingBlank style={{ marginBottom: 5 }}>
        <Flex justify="center">
          <Circle />
          <Circle />
          <Circle />
          <Circle />
        </Flex>
      </WingBlank>
    </View>
  )
}

function FlexJustifyEndTest() {
  return (
    <View>
      <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
        <Text>justify="end":右对齐</Text>
      </WingBlank>
      <WingBlank style={{ marginBottom: 5 }}>
        <Flex justify="end">
          <Circle />
          <Circle />
          <Circle />
          <Circle />
        </Flex>
      </WingBlank>
    </View>
  )
}

function FlexJustifyBetweenTest() {
  return (
    <View>
      <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
        <Text>justify="between":两端对齐，项目之间的间隔都相等</Text>
      </WingBlank>
      <WingBlank style={{ marginBottom: 5 }}>
        <Flex justify="between">
          <Circle />
          <Circle />
          <Circle />
          <Circle />
        </Flex>
      </WingBlank>
    </View>
  )
}

function FlexJustifyAroundTest() {
  return (
    <View>
      <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
        <Text>justify="around":每个项目两侧的间隔相等</Text>
      </WingBlank>
      <WingBlank style={{ marginBottom: 5 }}>
        <Flex justify="around">
          <Circle />
          <Circle />
          <Circle />
          <Circle />
        </Flex>
      </WingBlank>
    </View>
  )
}

function FlexAlignStartTest() {
  return (
    <View>
      <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
        <Text style={{ marginTop: 20, marginBottom: 20 }}>
          项目在交叉轴上的对齐方式
        </Text>
        <Text>align="start":交叉轴的起点对齐</Text>
      </WingBlank>
      <WingBlank style={{ marginBottom: 5 }}>
        <Flex align="start" style={{ height: 30 }}>
          <Text
            style={{
              fontSize: 20,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#527fe4',
            }}>
            兜兜
          </Text>
          <Text
            style={{
              fontSize: 14,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#527fe4',
            }}>
            兜兜
          </Text>
        </Flex>
      </WingBlank>
    </View>
  )
}

function FlexAlignCenterTest() {
  return (
    <View>
      <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
        <Text>align="center":交叉轴的中点对齐</Text>
      </WingBlank>
      <WingBlank style={{ marginBottom: 5 }}>
        <Flex align="center" style={{ height: 30 }}>
          <Text
            style={{
              fontSize: 20,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#527fe4',
            }}>
            兜兜
          </Text>
          <Text
            style={{
              fontSize: 14,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#527fe4',
            }}>
            兜兜
          </Text>
        </Flex>
      </WingBlank>
    </View>
  )
}

function FlexAlignEndTest() {
  return (
    <View>
      <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
        <Text>align="end":交叉轴的终点对齐</Text>
      </WingBlank>
      <WingBlank style={{ marginBottom: 5 }}>
        <Flex align="end" style={{ height: 30 }}>
          <Text
            style={{
              fontSize: 20,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#527fe4',
            }}>
            兜兜
          </Text>
          <Text
            style={{
              fontSize: 14,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#527fe4',
            }}>
            兜兜
          </Text>
        </Flex>
      </WingBlank>
    </View>
  )
}

function FlexAlignStretchTest() {
  return (
    <View>
      <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
        <Text>
          align="stretch":如果项目未设置高度或设为auto，将占满整个容器的高度
        </Text>
      </WingBlank>
      <WingBlank style={{ marginBottom: 5 }}>
        <WingBlank>
          <Flex align="stretch" style={{ height: 70 }}>
            <Text
              style={{
                fontSize: 20,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              兜兜
            </Text>
            <Text
              style={{
                fontSize: 14,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              兜兜
            </Text>
          </Flex>
        </WingBlank>
      </WingBlank>
    </View>
  )
}

function FlexWrapTest() {
  return (
    <View>
      <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
        <Text style={{ marginBottom: 10 }}>是否折行</Text>
        <Text>wrap="wrap":换行</Text>
      </WingBlank>
      <WingBlank style={{ marginBottom: 5 }}>
        <TouchableWithoutFeedback onPress={() => ({})}>
          <Flex wrap="wrap">
            {'ooooooooooooooooooooooooooooo'.split('').map((char, i) => (
              <Circle key={`${i}-${char}`} />
            ))}
          </Flex>
        </TouchableWithoutFeedback>
      </WingBlank>
    </View>
  )
}

function FlexNoWrapTest() {
  return (
    <View>
      <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
        <Text>wrap="nowrap":不换行</Text>
      </WingBlank>
      <WingBlank style={{ marginBottom: 5 }}>
        <Flex wrap="nowrap" onPress={() => ({})}>
          {'ooooooooooooooooooooooooooooo'.split('').map((char, i) => (
            <Circle key={`${i}-${char}`} />
          ))}
        </Flex>
      </WingBlank>
    </View>
  )
}
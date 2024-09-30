import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Tooltip, Icon, List, Button, Toast} from '@ant-design/react-native';
import {TestSuite, TestCase} from '@rnoh/testerino';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default () => {
  const [clickItemStr, setClickItemStr] = React.useState('');
  const actions = [
    {key: 'scan', icon: <Icon name="scan" />, text: '扫一扫'},
    {key: 'payment', icon: <Icon name="pay-circle" />, text: '付钱/收钱'},
    {key: 'bus', icon: <Icon name="qrcode" />, text: '乘车码'},
    {key: 'assistant', icon: <Icon name="ant-design" />, text: '智能助理'},
  ];

  const actions1 = [
    {key: 'scan', icon: <Icon name="scan" />, text: '扫一扫', disabled: true},
    {key: 'payment', icon: <Icon name="pay-circle" />, text: '付钱/收钱'},
    {key: 'assistant', icon: <Icon name="ant-design" />, text: '智能助理'},
  ];

  const actions2 = [
    {key: 'scan', icon: <Icon name="scan" />, text: '扫一扫', disabled: true},
    {key: 'payment', icon: <Icon name="pay-circle" />, text: '付钱/收钱'},
    {key: 'assistant', text: '智能助理'},
  ];

  const actions4 = [
    {
      key: 'scan',
      icon: <Icon name="scan" />,
      text: '扫一扫',
      onPress: () => {console.log(123);setClickItemStr('扫一扫')},
    },
    {
      key: 'payment',
      icon: <Icon name="pay-circle" />,
      text: '付钱/收钱',
      onPress: () => setClickItemStr('付钱/收钱'),
    },
    {
      key: 'bus',
      icon: <Icon name="qrcode" />,
      text: '乘车码',
      onPress: () => setClickItemStr('乘车码'),
    },
    {
      key: 'assistant',
      icon: <Icon name="ant-design" />,
      text: '智能助理',
      onPress: () => setClickItemStr('智能助理'),
    },
  ];

  return (
    <View style={{marginBottom: 300}}>
      <TestSuite name="TooltipTest">
        <TestCase
          itShould="render Tooltip children=<Button>点我</Button>"
          tags={['C_API']}>
          <Tooltip content="Hello" trigger="onPress" placement="right">
            <Button style={{alignSelf: 'flex-start', margin: 10}}>点我</Button>
          </Tooltip>
        </TestCase>
        <TestCase
          itShould="render Tooltip content='Hello World'"
          tags={['C_API']}>
          <Tooltip content="Hello World" trigger="onPress" placement="right">
            <Button style={{alignSelf: 'flex-start', margin: 10}}>点我</Button>
          </Tooltip>
        </TestCase>
        <TestCase
          itShould="render Tooltip defaultVisible={true},defaultVisible={false}"
          tags={['C_API']}>
          <Tooltip
            content="Hello World"
            trigger="onPress"
            placement="right"
            defaultVisible={true}>
            <Button style={{alignSelf: 'flex-start', margin: 10}}>点我</Button>
          </Tooltip>
          <Tooltip
            content="Hello World"
            trigger="onPress"
            placement="right"
            defaultVisible={false}>
            <Button style={{alignSelf: 'flex-start', margin: 10}}>点我</Button>
          </Tooltip>
        </TestCase>
        <TestCase
          itShould="render Tooltip mode='dark', mode='light'"
          tags={['C_API']}>
          <Tooltip
            content="Hello World"
            trigger="onPress"
            placement="right"
            mode="dark">
            <Button style={{alignSelf: 'flex-start', margin: 10}}>点我</Button>
          </Tooltip>
          <Tooltip
            content="Hello World"
            trigger="onPress"
            placement="right"
            mode="light">
            <Button style={{alignSelf: 'flex-start', margin: 10}}>点我</Button>
          </Tooltip>
        </TestCase>
        <TestCase
          itShould="render Tooltip onVisibleChange()"
          tags={['C_API']}
          initialState={false}
          arrange={({setState}: any) => (
            <Tooltip
              content="Hello World"
              trigger="onPress"
              placement="right"
              onVisibleChange={() => {
                setState(true);
              }}>
              <Button style={{alignSelf: 'flex-start', margin: 10}}>
                点我
              </Button>
            </Tooltip>
          )}
          assert={({expect, state}) => {
            expect(state).to.be.eq(true);
          }}></TestCase>
        <TestCase itShould="render Tooltip placement='right', placement='bottom-start'">
          <Tooltip content="Hello World" trigger="onPress" placement="right">
            <Button style={{alignSelf: 'flex-start', margin: 10}}>点我</Button>
          </Tooltip>
          <Tooltip
            content="Hello World"
            trigger="onPress"
            placement="bottom-start">
            <Button style={{alignSelf: 'flex-start', margin: 10}}>点我</Button>
          </Tooltip>
        </TestCase>
        <TestCase itShould="render Tooltip styles={{tooltip:{backgroundColor:'pink'}}}">
          <Tooltip
            content="Hello World"
            trigger="onPress"
            placement="right"
            styles={{tooltip: {backgroundColor: 'pink'}}}>
            <Button style={{alignSelf: 'flex-start', margin: 10}}>点我</Button>
          </Tooltip>
        </TestCase>
        <TestCase itShould="render Tooltip trigger='onPress',trigger='onLongPress'">
          <Tooltip content="Hello World" trigger="onPress" placement="right">
            <Button style={{alignSelf: 'flex-start', margin: 10}}>点我</Button>
          </Tooltip>
          <Tooltip
            content="Hello World"
            trigger="onLongPress"
            placement="right">
            <Button style={{alignSelf: 'flex-start', margin: 10}}>点我</Button>
          </Tooltip>
        </TestCase>
        <TestCase itShould="render Tooltip  visible={true},visible={false}">
          <Tooltip
            content="Hello World"
            trigger="onPress"
            placement="right"
            visible={true}>
            <Button style={{alignSelf: 'flex-start', margin: 10}}>点我</Button>
          </Tooltip>
          <Tooltip
            content="Hello World"
            trigger="onPress"
            placement="right"
            visible={false}>
            <Button style={{alignSelf: 'flex-start', margin: 10}}>点我</Button>
          </Tooltip>
        </TestCase>
        <TestCase itShould="render Tooltip.Menu actions=['扫一扫','付钱/收钱', '乘车码', '智能助理']">
          <Tooltip.Menu actions={actions} placement="right" trigger="onPress">
            <Button style={{alignSelf: 'flex-start', margin: 10}}>点我</Button>
          </Tooltip.Menu>
        </TestCase>
        <TestCase itShould="render Tooltip.Menu maxCount={2}">
          <Tooltip.Menu
            actions={actions}
            maxCount={2}
            placement="right"
            trigger="onPress">
            <Button style={{alignSelf: 'flex-start', margin: 10}}>点我</Button>
          </Tooltip.Menu>
        </TestCase>
        <TestCase
          itShould="render Tooltip.Menu onAction()"
          initialState={false}
          arrange={({setState}: any) => (
            <Tooltip.Menu
              actions={actions}
              maxCount={2}
              onAction={() => {
                setState(true);
              }}
              placement="right"
              trigger="onPress">
              <Button style={{alignSelf: 'flex-start', margin: 10}}>
                点我
              </Button>
            </Tooltip.Menu>
          )}
          assert={({expect, state}) => {
            expect(state).to.be.eq(true);
          }}></TestCase>
        <TestCase itShould="render Tooltip.Menu Action disabled">
          <GestureHandlerRootView>
            <Tooltip.Menu
              actions={actions1}
              placement="right"
              trigger="onPress">
              <Button style={{alignSelf: 'flex-start', margin: 10}}>
                点我
              </Button>
            </Tooltip.Menu>
          </GestureHandlerRootView>
        </TestCase>
        <TestCase itShould="render Tooltip.Menu Action icon">
          <Tooltip.Menu actions={actions2} placement="right" trigger="onPress">
            <Button style={{alignSelf: 'flex-start', margin: 10}}>点我</Button>
          </Tooltip.Menu>
        </TestCase>
        <TestCase itShould="render Tooltip.Menu actions.onPress()">
          <Text>上次被点击的菜单：{JSON.stringify(clickItemStr)}</Text>
          <GestureHandlerRootView>
            <Tooltip.Menu
              actions={actions4}
              placement="right"
              trigger="onPress">
              <Button style={{alignSelf: 'flex-start', margin: 10}}>
                点我
              </Button>
            </Tooltip.Menu>
          </GestureHandlerRootView>
        </TestCase>
        <TestCase itShould="render Tooltip.Menu actions.key (无特殊视觉效果)">
          <GestureHandlerRootView>
            <Tooltip.Menu
              actions={actions4}
              placement="right"
              trigger="onPress">
              <Button style={{alignSelf: 'flex-start', margin: 10}}>
                点我
              </Button>
            </Tooltip.Menu>
          </GestureHandlerRootView>
        </TestCase>
        <TestCase itShould="render Tooltip.Menu text=['扫一扫','付钱/收钱', '乘车码', '智能助理']">
          <Tooltip.Menu actions={actions} placement="right" trigger="onPress">
            <Button style={{alignSelf: 'flex-start', margin: 10}}>点我</Button>
          </Tooltip.Menu>
        </TestCase>
      </TestSuite>
    </View>
  );
};

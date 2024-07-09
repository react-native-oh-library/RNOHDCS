
import React from 'react';
import { View, Text, Image } from 'react-native';
import { NoticeBar, Toast } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  return (
    <TestSuite name="NoticeBarTest">
      <TestCase itShould="NoticeBar mode='link'" tags={['C_API']}>
        <NoticeBar mode='link'>
          {'Notice: The arrival time of incomes and transfers of Yu E Bao will bedelayed during National Day.'}
        </NoticeBar>
      </TestCase>
      <TestCase itShould="NoticeBar mode='closable'" tags={['C_API']}>
        <NoticeBar mode='closable'>
          {'Notice: The arrival time of incomes and transfers of Yu E Bao will bedelayed during National Day.'}
        </NoticeBar>
      </TestCase>
      <TestCase itShould="NoticeBar onPress()" tags={['C_API']} initialState={undefined}
        arrange={({ setState }: any) =>
          <NoticeBar mode="link" onPress={() => { setState(true) }}>
            {"Notice: The arrival time of incomes and transfers of Yu 'E Bao will bedelayed during National Day."}
          </NoticeBar>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="NoticeBar with Icon" tags={['C_API']}>
        <NoticeBarIconTest />
      </TestCase>
      <TestCase itShould="NoticeBar with closable and action='不再提示'" tags={['C_API']}>
        <NoticeBarActionTest />
      </TestCase>
      <TestCase itShould="NoticeBar marqueeProps={loop: true, style: { fontSize: 12, color: 'blue' }}" tags={['C_API']}>
        <NoticeBar marqueeProps={{ loop: true, style: { fontSize: 12, color: 'blue' } }} mode='closable'>
          {'Notice: The arrival time of incomes and transfers of Yu E Bao will bedelayed during National Day.'}
        </NoticeBar>
      </TestCase>
      <TestCase itShould="NoticeBar with link and action='去看看'" tags={['C_API']}>
        <NoticeBarLinkAndActionTest />
      </TestCase>
    </TestSuite>
  );
};

function NoticeBarIconTest() {
  const customIcon = (
    <Image
      source={require('./assets/alipay.png')}
      style={{ width: 12, height: 12 }}
    />
  )
  return (
    <View>
      <NoticeBar mode="closable" icon={customIcon}>
        Customized icon.
      </NoticeBar>
    </View>
  )
}

function NoticeBarActionTest() {
  return (
    <View>
      <NoticeBar
        mode="closable"
        action={<Text style={{ color: '#a1a1a1' }}>不再提示</Text>}>
        Closable demo for `actionText`.
      </NoticeBar>
    </View>
  )
}

function NoticeBarLinkAndActionTest() {
  return (
    <View>
      <NoticeBar mode="link" action={<Text>去看看</Text>}>
        Link demo for `actionText`.
      </NoticeBar>
    </View>
  )
}
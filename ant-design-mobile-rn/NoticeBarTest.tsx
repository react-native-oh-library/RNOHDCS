
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
      <TestCase itShould="NoticeBar with link and action='去看看'" tags={['C_API']}>
        <NoticeBarLinkAndActionTest />
      </TestCase>
      <TestCase itShould="NoticeBar onClose()" tags={['C_API']} initialState={undefined}
        arrange={({ setState }: any) =>
          <NoticeBar mode='closable' onClose={() => { setState(true) }}>
            {'Notice: The arrival time of incomes and transfers of Yu E Bao will bedelayed during National Day.'}
          </NoticeBar>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="NoticeBar style={{backgroundColor:'pink'}}" tags={['C_API']}>
        <NoticeBar mode='closable' style={{ backgroundColor: 'pink' }}>
          {'Notice: The arrival time of incomes and transfers of Yu E Bao will bedelayed during National Day.'}
        </NoticeBar>
      </TestCase>
      <TestCase itShould="NoticeBar styles={{background:{backgroundColor:'aqua'}}}" tags={['C_API']}>
        <NoticeBar mode='closable' styles={{ background: { backgroundColor: 'aqua' } }}>
          {'Notice: The arrival time of incomes and transfers of Yu E Bao will bedelayed during National Day.'}
        </NoticeBar>
      </TestCase>
      <TestCase itShould="NoticeBar children={<Text>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</Text>}" tags={['C_API']}>
        <NoticeBar children={<Text>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</Text>} />
      </TestCase>
      <TestCase itShould="NoticeBar marqueeProps={{ loop: false, autoFill: true }}, marqueeProps={{ loop: false, autoFill: false }}" tags={['C_API']}>
        <NoticeBar marqueeProps={{ loop: false, autoFill: true }} mode='closable'>
          {'Notice: The arrival time of incomes'}
        </NoticeBar>
        <NoticeBar marqueeProps={{ loop: false, autoFill: false }} mode='closable'>
          {'Notice: The arrival time of incomes'}
        </NoticeBar>
      </TestCase>
      <TestCase itShould="NoticeBar marqueeProps={{ loop: false, direction: 'left' }}, marqueeProps={{ loop: false, direction: 'right' }}" tags={['C_API']}>
        <NoticeBar marqueeProps={{ loop: false, direction: 'left' }} mode='closable'>
          {'Notice: The arrival time of incomes and transfers of Yu E Bao will bedelayed during National Day.'}
        </NoticeBar>
        <NoticeBar marqueeProps={{ loop: false, direction: 'right' }} mode='closable'>
          {'Notice: The arrival time of incomes and transfers of Yu E Bao will bedelayed during National Day.'}
        </NoticeBar>
      </TestCase>
      <TestCase itShould="NoticeBar marqueeProps={{ loop: true, fps: 30 }}, marqueeProps={{ loop: true, fps: 80 }}" tags={['C_API']}>
        <NoticeBar marqueeProps={{ loop: true, fps: 30 }} mode='closable'>
          {'Notice: The arrival time of incomes and transfers of Yu E Bao will bedelayed during National Day.'}
        </NoticeBar>
        <NoticeBar marqueeProps={{ loop: true, fps: 80 }} mode='closable'>
          {'Notice: The arrival time of incomes and transfers of Yu E Bao will bedelayed during National Day.'}
        </NoticeBar>
      </TestCase>
      <TestCase itShould="NoticeBar marqueeProps={{ loop: true, leading: 300 }}, marqueeProps={{ loop: true, leading: 800 }}" tags={['C_API']}>
        <NoticeBar marqueeProps={{ loop: true, leading: 300 }} mode='closable'>
          {'Notice: The arrival time of incomes and transfers of Yu E Bao will bedelayed during National Day.'}
        </NoticeBar>
        <NoticeBar marqueeProps={{ loop: true, leading: 800 }} mode='closable'>
          {'Notice: The arrival time of incomes and transfers of Yu E Bao will bedelayed during National Day.'}
        </NoticeBar>
      </TestCase>
      <TestCase itShould="NoticeBar marqueeProps={{ loop: 0 }},marqueeProps={{ loop: 1 }}" tags={['C_API']}>
        <NoticeBar marqueeProps={{ loop: 0 }} mode='closable'>
          {'Notice: The arrival time of incomes and transfers of Yu E Bao will bedelayed during National Day.'}
        </NoticeBar>
        <NoticeBar marqueeProps={{ loop: 1 }} mode='closable'>
          {'Notice: The arrival time of incomes and transfers of Yu E Bao will bedelayed during National Day.'}
        </NoticeBar>
      </TestCase>
      <TestCase itShould="NoticeBar marqueeProps={{ loop: false, onFinish()}}" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <NoticeBar marqueeProps={{ loop: 2, leading: 500, trailing: 800, fps: 40, onFinish: () => setState(true) }}>
            {'Notice: The arrival time of incomes and transfers of Yu E Bao will bedelayed during National Day.'}
          </NoticeBar>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="NoticeBar marqueeProps={{ loop: true, onCycleComplete()}}" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <NoticeBar marqueeProps={{ loop: true, leading: 500, trailing: 800, fps: 40, onCycleComplete: () => setState(true) }} mode='closable'>
            {'Notice: The arrival time of incomes and transfers of Yu E Bao will bedelayed during National Day.'}
          </NoticeBar>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="NoticeBar marqueeProps={{ loop: true, play: true }}, marqueeProps={{ loop: true, play: false }}" tags={['C_API']}>
        <NoticeBar marqueeProps={{ loop: true, play: true }} mode='closable'>
          {'Notice: The arrival time of incomes and transfers of Yu E Bao will bedelayed during National Day.'}
        </NoticeBar>
        <NoticeBar marqueeProps={{ loop: true, play: false }} mode='closable'>
          {'Notice: The arrival time of incomes and transfers of Yu E Bao will bedelayed during National Day.'}
        </NoticeBar>
      </TestCase>
      <TestCase itShould="NoticeBar marqueeProps={{ loop: false, spacing: 5 }}, marqueeProps={{ loop: false, spacing: 100 }}" tags={['C_API']}>
        <NoticeBar marqueeProps={{ loop: false, autoFill: true, spacing: 5 }} mode='closable'>
          {'Notice: The arrival time of incomes'}
        </NoticeBar>
        <NoticeBar marqueeProps={{ loop: false, autoFill: true, spacing: 100 }} mode='closable'>
          {'Notice: The arrival time of incomes'}
        </NoticeBar>
      </TestCase>
      <TestCase itShould="NoticeBar marqueeProps={loop: true, style: { fontSize: 12, color: 'blue' }}, marqueeProps={{ loop: false, style: { fontSize: 16, color: 'yellow' } }}" tags={['C_API']}>
        <NoticeBar marqueeProps={{ loop: true, style: { fontSize: 12, color: 'blue' } }} mode='closable'>
          {'Notice: The arrival time of incomes and transfers of Yu E Bao will bedelayed during National Day.'}
        </NoticeBar>
        <NoticeBar marqueeProps={{ loop: true, style: { fontSize: 16, color: 'yellow' } }} mode='closable'>
          {'Notice: The arrival time of incomes and transfers of Yu E Bao will bedelayed during National Day.'}
        </NoticeBar>
      </TestCase>
      <TestCase itShould="NoticeBar marqueeProps={{ loop: true, trailing: 400 }}, marqueeProps={{ loop: true, trailing: 2000 }}" tags={['C_API']}>
        <NoticeBar marqueeProps={{ loop: true, trailing: 400 }} mode='closable'>
          {'Notice: The arrival time of incomes and transfers of Yu E Bao will bedelayed during National Day.'}
        </NoticeBar>
        <NoticeBar marqueeProps={{ loop: true, trailing: 2000 }} mode='closable'>
          {'Notice: The arrival time of incomes and transfers of Yu E Bao will bedelayed during National Day.'}
        </NoticeBar>
      </TestCase>
      <TestCase itShould="NoticeBar marqueeProps={{ loop: true, wrapStyle:{backgroundColor:'red'} }}" tags={['C_API']}>
        <NoticeBar marqueeProps={{ loop: true, wrapStyle: { backgroundColor: 'red' } }} mode='closable'>
          {'Notice: The arrival time of incomes and transfers of Yu E Bao will bedelayed during National Day.'}
        </NoticeBar>
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
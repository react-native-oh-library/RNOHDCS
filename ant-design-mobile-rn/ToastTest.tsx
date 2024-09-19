import React, { useRef, useState } from 'react';
import { ActivityIndicator, Text } from 'react-native'
import { Toast, Button } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  const handler = useRef<number>();
  const [duartion, setDuartion] = useState<number>(0);
  return (
    <TestSuite name="ToastTest">
      <TestCase itShould="render a Toast content='Toast without mask !!!'" tags={['C_API']}>
        <Button onPress={() => {
          Toast.info('Toast without mask !!!');
        }}>{'Without mask'}</Button>
      </TestCase>
      <TestCase itShould="render a Toast duration='1'" tags={['C_API']}>
        <Button onPress={() => {
          Toast.info('duration="1"', 1);
        }}>{'延时1s关闭'}</Button>
      </TestCase>
      <TestCase itShould="render a Toast onClose()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button onPress={() => {
            Toast.info('onClose()', 1, () => { setState(true) }, false);
          }}>{'onClose()'}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Toast mask=false, mask=true" tags={['C_API']}>
        <Button onPress={() => {
          Toast.info({
            content: 'mask=false',
            duration: 1,
            mask: false
          });
        }}>{'mask=false'}</Button>
        <Button onPress={() => {
          Toast.info({
            content: 'mask=true',
            duration: 1,
            mask: true
          });
        }}>{'mask=true'}</Button>
      </TestCase>
      <TestCase itShould="render a Toast stackable={true}, stackable={false}" tags={['C_API']}>
        <Button onPress={() => {
          Toast.info({
            content: 'This is a toast tips 1 !!!',
            duration: 3,
            stackable: true,
          });
          Toast.success({
            content: 'This is a toast tips 2 !!!',
            duration: 2,
            stackable: true,
          });
          Toast.fail({
            content: 'This is a toast tips 3 !!!',
            duration: 1,
            stackable: true,
          });
        }}>{'Toast duration stackable: true'}</Button>
        <Button onPress={() => {
          Toast.info({
            content: 'This is a toast tips 1 !!!',
            duration: 3,
            stackable: false,
          });
          Toast.success({
            content: 'This is a toast tips 2 !!!',
            duration: 2,
            stackable: false,
          });
          Toast.fail({
            content: 'This is a toast tips 3 !!!',
            duration: 1,
            stackable: false,
          });
        }}>{'Toast duration stackable: false'}</Button>
      </TestCase>
      <TestCase itShould="render a Toast.info()" tags={['C_API']}>
        <Button onPress={() => {
          Toast.info('info !!!', 1);
        }}>{'Info toast'}</Button>
      </TestCase>
      <TestCase itShould="render a Toast.show()" tags={['C_API']}>
        <Button onPress={() => {
          Toast.show('Toast.show()', 1);
        }}>{'Toast.show()'}</Button>
      </TestCase>
      <TestCase itShould="render a Toast.success()" tags={['C_API']}>
        <Button onPress={() => {
          Toast.success('Load success !!!', 1);
        }}>{'Success toast'}</Button>
      </TestCase>
      <TestCase itShould="render a Toast.fail()" tags={['C_API']}>
        <Button onPress={() => {
          Toast.fail('Load failed !!!', 1);
        }}>{'Failed toast'}</Button>
      </TestCase>
      <TestCase itShould="render a Toast.offline()" tags={['C_API']}>
        <Button onPress={() => {
          Toast.offline({ content: 'Network connection failed !!!', duration: 1 });
        }}>{'Network failure toast'}</Button>
      </TestCase>
      <TestCase itShould="render a Toast.loading()" tags={['C_API']}>
        <Button onPress={() => {
          Toast.loading({
            content: 'Loading...',
            duration: 1,
          });
        }}>{'Loading toast'}</Button>
      </TestCase>
      icon: <ActivityIndicator />,
      <TestCase itShould="render a Toast icon自定义图标加载中..." tags={['C_API']}>
        <Button
          onPress={() => {
            Toast.show({
              content: '上传中',
              icon: <ActivityIndicator />,
            })
          }}>
          自定义图标
        </Button>
      </TestCase>
      <TestCase itShould="render a Toast styles自定义样式" tags={['C_API']}>
        <Button
          onPress={() => { Toast.show({ content: <Text style={{ color: 'red' }}>红色</Text> }, 2) }}>
          自定义样式
        </Button>
      </TestCase>
      <TestCase itShould="render a Toast position=[顶部提示，底部提示]" tags={['C_API']}>
        <Button
          onPress={() => {
            Toast.show({
              content: 'Hello World',
              position: 'top',
            })
          }}>
          顶部提示
        </Button>
        <Button
          onPress={() => {
            Toast.show({
              content: 'Hello World',
              position: 'bottom',
            })
          }}>
          底部提示
        </Button>
      </TestCase>
      <TestCase itShould="render Toast.removeAll()" tags={['C_API']}>
        <Button
          onPress={() => {
            handler.current = Toast.show({
              content: '这条提示不会自动消失',
              duration: 0,
              mask: false,
            })
          }}>
          显示
        </Button>
        <Button
          onPress={() => {
            Toast.removeAll()
          }}>
          关闭
        </Button>
      </TestCase>
    </TestSuite>
  );
};

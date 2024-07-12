import React from 'react';
import { Text } from 'react-native';
import { Toast, Button } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
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
      <TestCase itShould="render a Toast mask=false" tags={['C_API']}>
        <Button onPress={() => {
          Toast.info({
            content: 'mask=false',
            duration: 1,
            mask: false
          });
        }}>{'mask=false'}</Button>
      </TestCase>
      <TestCase itShould="render a Toast stackable" tags={['C_API']}>
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
        }}>{'Toast duration 延时关闭'}</Button>
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
      <TestCase itShould="duration = 0 时,Toast.info 不会消失，隐藏 toast 需要手动调用 remove" tags={['C_API']}>
        <Button onPress={() => {
          const key = Toast.info('Toast with duration = 0, removed by timer', 0, () => {
            Toast.info('Toast.info onClose callback called!')
          })
          setTimeout(() => {
            Toast.remove(key);
          }, 1000);
        }}>{'Toast.info with duration = 0'}</Button>
      </TestCase>
      <TestCase itShould="提示内容设置样式" tags={['C_API']}>
        <Button onPress={() => {
          Toast.info(
            { content: <Text style={{ color: 'red' }}>Toast Custom View</Text> },
            1,
          );
          setTimeout(() => {
            Toast.success(
              { content: <Text style={{ color: 'green' }}>Toast Custom View</Text> },
              1,
            )
          }, 1500);
        }}>{'提示内容设置样式'}</Button>
      </TestCase>
    </TestSuite>
  );
};

import React from 'react';
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
    </TestSuite>
  );
};

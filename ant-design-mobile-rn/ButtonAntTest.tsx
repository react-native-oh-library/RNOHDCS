import React from 'react';
import { View } from 'react-native';
import { Button } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  const [pressCounter, setPressCounter] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);
  const [size, setSize] = React.useState<any>('small');

  return (
    <TestSuite name="ButtonAntTest">
      <TestCase itShould="button onPress()" tags={['C_API']} initialState={undefined}
        arrange={({ setState }: any) =>
          <Button
            onPress={() => {
              setPressCounter(count => count + 1);
              setState(100);
            }}
          >{`Pressed ${pressCounter} times`}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(100);
        }}
      >
      </TestCase>
      <TestCase itShould="button disabled" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button
            disabled={disabled}
            onPress={() => {
              setDisabled(!disabled);
              setState(true);
            }}
          >{!disabled ? 'Enable button click' : 'Disable button click'}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}
      >
      </TestCase>
      <TestCase itShould="button type" tags={['C_API']}>
        <Button type='primary'>{'primary'}</Button>
        <Button type='ghost'>{'ghost'}</Button>
        <Button type='warning'>{'warning'}</Button>
      </TestCase>
      <TestCase itShould="button size" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button
            type='primary'
            size={size}
            onPress={() => {
              setSize(size === 'small' ? 'large' : 'small');
              setState(true);
            }}
          >{size === 'small' ? 'small button' : 'large button'}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}
      >
      </TestCase>
      <TestCase itShould="button activeStyle" tags={['C_API']} >
        <ButtonStyle />
      </TestCase>
      <TestCase itShould="button onPressIn()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button type='primary' onPressIn={() => { setState(true) }}>{'onPressIn()'}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="button onPressOut()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button type='primary' onPressOut={() => { setState(true) }}>{'onPressOut()'}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="button onShowUnderlay()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button type='primary' onShowUnderlay={() => { setState(true) }}>{'onShowUnderlay()'}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="button onHideUnderlay()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button type='primary' onHideUnderlay={() => { setState(true) }}>{'onHideUnderlay()'}</Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="button style={{ backgroundColor: 'pink' }}" tags={['C_API']}>
        <Button style={{ backgroundColor: 'pink' }}>{'style'}</Button>
      </TestCase>
    </TestSuite>
  );
};

// 按钮点击样式
function ButtonStyle() {
  return (
    <View>
      <View>
        <Button activeStyle={false} type='primary'>{'No click feedback'}</Button>
        <Button activeStyle={{ backgroundColor: 'red' }} type='primary'>{'Click with feedback'}</Button>
      </View>
    </View>
  );
}
import React, { useState } from 'react';
import { View, StyleSheet, Text, Easing } from 'react-native';
import { Popover } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

const Item = Popover.Item;

export default () => {
  const [selected, setSelected] = useState<any>('');
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
    </Item>
  ]);

  return (
    <TestSuite name="PopoverTest">
      <TestCase itShould="render a Popover overlay" tags={['C_API']}>
        <PopoverOverlayTest />
      </TestCase>
      <TestCase itShould="render a Popover onSelect()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <React.Fragment>
            <View style={{ alignItems: 'center' }}>
              <Popover
                overlay={overlay}
                onSelect={(value: any) => {
                  setSelected(value);
                  setState(true);
                }}
              >
                <Text style={{ margin: 10 }}>{'onSelect()'}</Text>
              </Popover>
              <Text>选择了:{selected}</Text>
            </View>
          </React.Fragment>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Popover triggerStyle={{backgroundColor:'pink'}}" tags={['C_API']}>
        <PopoverTriggerStyleTest />
      </TestCase>
      <TestCase itShould="render a Popover renderOverlayComponent={我是自定义组件title}" tags={['C_API']}>
        <PopoverCustomizingTest />
      </TestCase>
      <TestCase itShould="render a Popover duration={2000}" tags={['C_API']}>
        <PopoverDurationTest />
      </TestCase>
      <TestCase itShould="render a Popover easing={(show) => (show ? Easing.in(Easing.ease) : Easing.step0)}" tags={['C_API']}>
        <PopoverEasingTest />
      </TestCase>
      <TestCase itShould="render a Popover useNativeDriver={true}" tags={['C_API']}>
        <PopoverUseNativeDriverTest />
      </TestCase>
      <TestCase itShould="render a Popover onDismiss()" initialState={false}
        arrange={({ setState }: any) =>
          <React.Fragment>
            <View style={{ alignItems: 'center' }}>
              <Popover
                overlay={overlay}
                duration={1000}
                onDismiss={() => { setState(true); }}
              >
                <Text
                  style={{
                    margin: 16,
                  }}>
                  {'onDismiss()'}
                </Text>
              </Popover>
            </View>
          </React.Fragment>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Popover.Item disabled" tags={['C_API']}>
        <PopoverDisabledTest />
      </TestCase>
      <TestCase itShould="render a Popover.Item itemStyle={{ backgroundColor: '#efeff4' }}" tags={['C_API']}>
        <PopoverItemStyleTest />
      </TestCase>
      <TestCase itShould="render a Popover.Item value" tags={['C_API']}>
        <PopoverItemValueTest />
      </TestCase>
      <TestCase itShould="render a Popover placement=['top', 'bottom']" tags={['C_API']}>
        <PopoverPlacementTest />
      </TestCase>
    </TestSuite>
  );
};

function PopoverOverlayTest() {
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
    <React.Fragment>
      <View style={{ alignItems: 'center' }}>
        <Popover
          overlay={overlay}
        >
          <Text style={{ margin: 10 }}>{'overlay'}</Text>
        </Popover>
      </View>
    </React.Fragment>

  )
}

function PopoverTriggerStyleTest() {
  let overlay = [1, 2, 3].map((i, index) => (
    <Item key={index} value={`option ${i}`}>
      <Text>option {i}</Text>
    </Item>
  ))
  overlay = overlay.concat([
    <Item key="6" value="button ct" style={{ backgroundColor: '#efeff4' }}>
      <Text>{'关闭'}</Text>
    </Item>,
  ]);

  return (
    <React.Fragment>
      <View style={{ alignItems: 'center' }}>
        <Popover
          overlay={overlay}
          triggerStyle={styles.triggerStyle}
        >
          <Text style={{ margin: 10 }}>{'triggerStyle'}</Text>
        </Popover>
      </View>
    </React.Fragment>
  )
}

function PopoverCustomizingTest() {
  return (
    <React.Fragment>
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
            margin: 10,
          }}>
          自定义组件
        </Text>
      </Popover>
    </React.Fragment>
  )
}

function PopoverDurationTest() {
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
    <React.Fragment>
      <View style={{ alignItems: 'center' }}>
        <Popover
          overlay={overlay}
          duration={1000}
        >
          <Text
            style={{
              margin: 16,
            }}>
            2s慢慢出现慢慢消失
          </Text>
        </Popover>
      </View>
    </React.Fragment>
  )
}

function PopoverEasingTest() {
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
    <React.Fragment>
      <View style={{ alignItems: 'center' }}>
        <Popover
          overlay={overlay}
          duration={500}
          easing={(show) => (show ? Easing.in(Easing.ease) : Easing.step0)}
        >
          <Text
            style={{
              margin: 16,
            }}>
            2s慢慢出现快速消失
          </Text>
        </Popover>
      </View>
    </React.Fragment>
  )
}

function PopoverUseNativeDriverTest() {
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
    <React.Fragment>
      <View style={{ alignItems: 'center' }}>
        <Popover
          overlay={overlay}
          duration={1000}
          useNativeDriver={true}
        >
          <Text
            style={{
              margin: 16,
            }}>
            {'useNativeDriver={true}'}
          </Text>
        </Popover>
      </View>
    </React.Fragment>
  )
}

function PopoverDisabledTest() {
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
    <React.Fragment>
      <View style={{ alignItems: 'center' }}>
        <Popover
          overlay={overlay}
          duration={200}
          useNativeDriver={true}
        >
          <Text
            style={{
              margin: 16,
            }}>
            {'第4个禁用'}
          </Text>
        </Popover>
      </View>
    </React.Fragment>
  )
}

function PopoverItemStyleTest() {
  let overlay = [1, 2].map((i, index) => (
    <Item key={index} value={`option ${i}`}>
      <Text>option {i}</Text>
    </Item>
  ))
  overlay = overlay.concat([
    <Item key="6" value="button ct" style={{ backgroundColor: '#efeff4' }}>
      <Text>{'关闭'}</Text>
    </Item>,
  ]);
  return (
    <React.Fragment>
      <View style={{ alignItems: 'center' }}>
        <Popover
          overlay={overlay}
          duration={200}
          useNativeDriver={true}
        >
          <Text
            style={{
              margin: 16,
            }}>
            {'关闭的ItemStyle样式为灰色'}
          </Text>
        </Popover>
      </View>
    </React.Fragment>
  )
}

function PopoverItemValueTest() {
  const [value, setvalue] = useState('');
  let overlay = [1, 2].map((i, index) => (
    <Item key={index} value={`option ${i}`}>
      <Text>option {i}</Text>
    </Item>
  ))
  overlay = overlay.concat([
    <Item key="6" value="button" style={{ backgroundColor: '#efeff4' }}>
      <Text>{'关闭'}</Text>
    </Item>,
  ]);
  return (
    <React.Fragment>
      <View style={{ alignItems: 'center' }}>
        <Popover
          overlay={overlay}
          duration={200}
          useNativeDriver={true}
          onSelect={(value: any) => { setvalue(value) }}
        >
          <Text
            style={{
              margin: 16,
            }}>
            {'PopoverItem value值'}
          </Text>
        </Popover>
        <Text>value:{value}</Text>
      </View>
    </React.Fragment>
  )
}

function PopoverPlacementTest() {
  let overlay = [1, 2].map((i, index) => (
    <Item key={index} value={`option ${i}`}>
      <Text>option {i}</Text>
    </Item>
  ))
  overlay = overlay.concat([
    <Item key="6" value="button ct" style={{ backgroundColor: '#efeff4' }}>
      <Text>{'关闭'}</Text>
    </Item>,
  ]);
  return (
    <React.Fragment>
      <View style={{ alignItems: 'center' }}>
        {['top', 'bottom'].map((p) => (
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
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  triggerStyle: {
    paddingHorizontal: 6,
    backgroundColor: 'pink'
  },
})
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ActivityIndicator, Button, Flex, WhiteSpace, WingBlank } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  const [animating, setAnimating] = useState(false);
  let timer: any = null;
  return (
    <TestSuite name="ActivityIndicatorTest">
      <TestCase itShould="render a ActivityIndicator" tags={['C_API']}>
        <ActivityIndicatorWithoutTest />
      </TestCase>
      <TestCase itShould="render a ActivityIndicator text=Loading..." tags={['C_API']}>
        <ActivityIndicatorWithTest />
      </TestCase>
      <TestCase itShould="render a ActivityIndicator color='pink'" tags={['C_API']}>
        <ActivityIndicatorBackgroundTest />
      </TestCase>
      <TestCase itShould="render a ActivityIndicator Size=Large" tags={['C_API']}>
        <ActivityIndicatorSizeTest />
      </TestCase>
      <TestCase itShould="render a ActivityIndicator Toast=false" tags={['C_API']}>
        <View style={[styles.demo]}>
          <WingBlank>
            <Flex>
              <Flex.Item>
                <Text>Toast=false</Text>
              </Flex.Item>
              <Flex.Item>
                <ActivityIndicator toast={false} />
              </Flex.Item>
            </Flex>
          </WingBlank>
          <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
        </View>
      </TestCase>
      <TestCase itShould="render a ActivityIndicator Toast" tags={['C_API']} initialState={undefined}
        arrange={({ setState }: any) =>
          <View style={{ padding: 5 }}>
            <WingBlank>
              <Button onPress={() => {
                setAnimating(true);
                setState(true)
                timer = setTimeout(() => {
                  setAnimating(false);
                  clearTimeout(timer);
                }, 2000)
              }}>{'Click to show Toast'}</Button>
            </WingBlank>
            <ActivityIndicator
              animating={animating}
              toast={true}
              size="large"
              text="Loading..."
            />
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a ActivityIndicator animating=false, animating={true}" tags={['C_API']}>
        <View style={[styles.demo]}>
          <WingBlank>
            <Flex>
              <Flex.Item>
                <Text>animating=false</Text>
              </Flex.Item>
              <Flex.Item>
                <ActivityIndicator animating={false} />
              </Flex.Item>
            </Flex>
          </WingBlank>
          <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
        </View>
        <View style={[styles.demo]}>
          <WingBlank>
            <Flex>
              <Flex.Item>
                <Text>animating=true</Text>
              </Flex.Item>
              <Flex.Item>
                <ActivityIndicator animating={true} />
              </Flex.Item>
            </Flex>
          </WingBlank>
        </View>
      </TestCase>
    </TestSuite>
  );
};

function ActivityIndicatorWithoutTest() {
  return (
    <View style={[styles.demo]}>
      <WingBlank>
        <Flex>
          <Flex.Item>
            <Text>Icon without text</Text>
          </Flex.Item>
          <Flex.Item>
            <ActivityIndicator />
          </Flex.Item>
        </Flex>
      </WingBlank>
      <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
    </View>
  )
}

function ActivityIndicatorWithTest() {
  return (
    <View style={[styles.demo]}>
      <WingBlank>
        <Flex>
          <Flex.Item>
            <Text>Icon with text</Text>
          </Flex.Item>
          <Flex.Item>
            <ActivityIndicator text="Loading..." />
          </Flex.Item>
        </Flex>
      </WingBlank>
      <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
    </View>
  )
}

function ActivityIndicatorBackgroundTest() {
  return (
    <View style={[styles.demo]}>
      <WingBlank>
        <Flex>
          <Flex.Item>
            <Text>pink</Text>
          </Flex.Item>
          <Flex.Item>
            <View style={[styles.darkBg]}>
              <ActivityIndicator color="pink" />
            </View>
          </Flex.Item>
        </Flex>
      </WingBlank>
      <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
    </View>
  )
}

function ActivityIndicatorSizeTest() {
  return (
    <View style={[styles.demo]}>
      <WingBlank>
        <Flex>
          <Flex.Item>
            <Text>Large Size</Text>
          </Flex.Item>
          <Flex.Item>
            <ActivityIndicator size="large" />
          </Flex.Item>
        </Flex>
      </WingBlank>
      <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
    </View>
  )
}


const styles = StyleSheet.create({
  demo: {
    marginTop: 20,
  },
  darkBg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 89,
    height: 89,
    backgroundColor: '#2B2F42',
  },
  gray: {
    backgroundColor: '#CCC',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
})

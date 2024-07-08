import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from '@itenl/react-native-scrollable-tabview';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

export default function ScrollableTabviewExample2() {

  const [num, setNum] = useState(0);
  const [refesh, setRefesh] = useState('');

  return (
    <Tester>
      <TestSuite name="TesterScrollableTabviewExample12">
        <TestCase
          tags={['C_API']}
          itShould="onEndReachedThreshold方法,需要配合onBeforeRefresh回调使用.'0'表示触底刷新，'1'表示非触底">
          <View style={{ width: '100%', height: 500 }}>
            <ScrollableTabView
              renderTabBar={() => <DefaultTabBar />}
              onEndReachedThreshold={num}
              onBeforeEndReached={() => {
                setRefesh('触发刷新了！')
              }}
              stacks={[
                {
                  screen: () => {
                    return (<View style={{ flex: 1, backgroundColor: 'red' }}>
                      <Button
                        title='0'
                        onPress={() => {
                          setNum(0)
                          setRefesh('')
                        }}
                      />
                      <Button
                        title='1'
                        onPress={() => {
                          setNum(1)
                          setRefesh('')
                        }}
                      />
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>第一个页面</Text>
                      <Text>到底了8</Text>
                      <Text>到底了7</Text>
                      <Text>到底了6</Text>
                      <Text>到底了5</Text>
                      <Text>到底了4</Text>
                      <Text>到底了3</Text>
                      <Text>到底了2</Text>
                      <Text>到底了1</Text>
                    </View>)
                  },
                },
              ]}
            >
            </ScrollableTabView>
          </View>
        </TestCase>
      </TestSuite>

      <TestSuite name="TesterScrollableTabviewExample12">
        <TestCase
          tags={['C_API']}
          itShould="onEndReachedThreshold方法,需要配合onBeforeRefresh回调使用">
              <Text>{refesh}</Text>

          </TestCase>
      </TestSuite>
    </Tester>
  );
}

import React, { useState, useRef } from 'react';
import { View, Text,ScrollView } from 'react-native'
import ScrollableTabView from '@itenl/react-native-scrollable-tabview';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

export default function ScrollableTabviewExample() {

  const myRef = useRef<any>(null);

  return (
    <Tester>
      <ScrollView>
      <TestSuite name="TesterScrollableTabviewExample">
        <TestCase
          tags={['C_API']}
          itShould="整体效果">
          <View style={{ width: '100%',height:500 }}>
            <ScrollableTabView
              ref={myRef}
              stacks={[
                {
                  screen: ({ onRefresh }: any) => {
                    onRefresh((toggled: (arg0: boolean) => void) => {
                    });
                    return (<View style={{ flex: 1, backgroundColor: 'white', height: 2000 }}><Text>第一个页面</Text></View>)
                  },
                }, {
                  screen: () => <View style={{ flex: 1, backgroundColor: 'grey', height: 2000 }}><Text>第二个页面</Text></View>,
                },
                {
                  screen: () => {
                    return (
                      <View
                        style={{
                          flex: 1,
                          backgroundColor: "green",
                          justifyContent: "center",
                          alignItems: "center",
                          height: 2000
                        }}
                      >
                        <Text>
                          第三个页面
                        </Text>
                      </View>
                    );
                  },
                }
              ]}
              mappingProps={{}}
              tabsStyle={{ backgroundColor: 'yellow', }}
              tabWrapStyle={{ zIndex: 1 }}
              tabInnerStyle={{ paddingLeft: 5 }}
              tabActiveOpacity={0}
              tabStyle={{ backgroundColor: 'orange', width: 100 }}
              textStyle={{ textAlign: 'center', color: 'green' }}
              textActiveStyle={{ fontSize: 30 }}
              tabUnderlineStyle={{ backgroundcolor: 'red', height: 10 }}
              firstIndex={0}
              syncToSticky={true}
              onEndReachedThreshold={0.4}
              onTabviewChanged={(index: any, tabLabel: any, isFirst: any) => {
              }}
              screenScrollThrottle={100}
              header={() => {
                return <View style={{ backgroundColor: 'pink', height: 80 }}><Text>header</Text></View>;
              }}
            ></ScrollableTabView>
          </View>
        </TestCase>
      </TestSuite>

      <TestSuite name="TesterScrollableTabviewExample2">
        <TestCase
          tags={['C_API']}
          itShould="head,可以进行下拉，模拟刷新">
          <View style={{ width: '100%' }}>
            <ScrollableTabView
              ref={myRef}
              header={() => {
                return <View style={{ backgroundColor: 'blue', height: 80 }}><Text>可以下拉，下拉模拟刷新动画</Text></View>;
              }}
            ></ScrollableTabView>
          </View>
        </TestCase>
      </TestSuite>

      <TestSuite name="TesterScrollableTabviewExample3">
        <TestCase
          tags={['C_API']}
          itShould="切换视图,并且视图可以上下滑动;切换title颜色修改">
          <View style={{ width: '100%',height:500 }}>
            <ScrollableTabView
              ref={myRef}
              stacks={[
                {
                  screen: ({ onRefresh }: any) => {
                    onRefresh((toggled: (arg0: boolean) => void) => {
                    });
                    return (<View style={{ flex: 1, backgroundColor: 'red', height: 2000 }}><Text>第一个页面</Text></View>)
                  },
                }, {
                  screen: () => <View style={{ flex: 1, backgroundColor: 'grey', height: 2000 }}><Text>第二个页面</Text></View>,
                },
                {
                  screen: () => {
                    return (
                      <View
                        style={{
                          flex: 1,
                          backgroundColor: "green",
                          justifyContent: "center",
                          alignItems: "center",
                          height: 2000
                        }}
                      >
                        <Text>
                         第三个页面
                        </Text>
                      </View>
                    );
                  },
                }
              ]}
              mappingProps={{}}
              tabsStyle={{ backgroundColor: 'black', }}
              tabWrapStyle={{ zIndex: 1 }}
              tabInnerStyle={{ paddingLeft: 5 }}
              tabActiveOpacity={0}
              tabStyle={{ backgroundColor: 'white', width: 100 }}
              textStyle={{ textAlign: 'center', color: 'blue' }}
              textActiveStyle={{ fontSize: 22 }}
              tabUnderlineStyle={{ backgroundcolor: 'red', height: 10 }}
              firstIndex={0}
              syncToSticky={true}
              onEndReachedThreshold={0.4}
              onTabviewChanged={(index: any, tabLabel: any, isFirst: any) => {
              }}
              screenScrollThrottle={100}
            ></ScrollableTabView>
          </View>
        </TestCase>
      </TestSuite>
      </ScrollView>
    </Tester>
  );
}
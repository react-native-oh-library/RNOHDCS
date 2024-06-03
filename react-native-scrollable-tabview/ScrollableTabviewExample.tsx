import React, { useState, useRef } from 'react';
import { View, Text } from 'react-native'
import ScrollableTabView from '@itenl/react-native-scrollable-tabview';
import { Tester, TestSuite } from '@rnoh/testerino';
import { TestCase } from '../components';

export default function ScrollableTabviewExample() {

  let [scrollDate, setScrollDate] = useState(Date.now())
  const myRef = useRef<any>(null);

  return (
    <Tester style={{ flex: 1 }}>
      <TestSuite name="ScrollableTabviewExample">
        <TestCase.Example
          tags={['C_API']}
          itShould="Tester Scrollable Tabview Example">
          <View style={{ width: '100%',height:500 }}>
            <ScrollableTabView
              ref={myRef}
              stacks={[
                {
                  screen: ({ onRefresh }: any) => {
                    onRefresh((toggled: (arg0: boolean) => void) => {
                      setScrollDate(Date.now())
                    });
                    return (<View style={{ flex: 1, backgroundColor: 'blue', height: 2000 }}><Text>one{scrollDate}</Text></View>)
                  },
                }, {
                  screen: () => <View style={{ flex: 1, backgroundColor: 'grey', height: 2000 }}><Text>two{scrollDate}</Text></View>,
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
                          {Date.now()} {scrollDate}
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
                setScrollDate(index + tabLabel + isFirst)
              }}
              screenScrollThrottle={100}
              header={() => {
                return <View style={{ backgroundColor: 'pink', height: 80 }}><Text>header</Text></View>;
              }}
            ></ScrollableTabView>
          </View>
        </TestCase.Example>
      </TestSuite>
    </Tester>
  );
}
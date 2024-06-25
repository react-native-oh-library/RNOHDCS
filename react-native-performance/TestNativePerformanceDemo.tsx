import { Tester, Filter, TestSuite } from '@rnoh/testerino';
import {Button, TestCase} from './components';
import React, { useState,useEffect } from 'react';
import {
  ScrollView, StyleSheet, View, Text,Alert, FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import * as tests from '../tests';
import performance,{PerformanceObserver,setResourceLoggingEnabled,getReturnMsg} from '@react-native-oh-tpl/react-native-performance'
export function TestNativePerformanceDemo({ filter }: { filter: Filter }) {
  const scrollRef = React.useRef<ScrollView>(null);
  const [result1, setResult1] = React.useState(0)
  const [result2, setResult2] = React.useState('')
  const [result3, setResult3] = React.useState('')
  const [result4, setResult4] = React.useState('')
  const [result5, setResult5] = React.useState('')
  const [result6, setResult6] = React.useState('')
  const [result7, setResult7] = React.useState('')
  return (
    <Tester style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
        <TestSuite name="React Native Performance">
            <TestCase.Logical
              itShould="Convert a performance timestamp"
              fn={({expect}) => {
                performance.mark('entry');
                let entry=performance.getEntriesByName('entry')[0];
                const timestamp = Date.now() - performance.timeOrigin + entry.startTime;
                setResult1(timestamp)
                expect(timestamp).to.be.a('number');
              }}
            />
            <TestCase.Example itShould="display timestamp">
            <Text>{JSON.stringify(result1)}</Text>
          </TestCase.Example>
          <TestCase.Manual
            itShould="Basic measure example"
            initialState={false}
            arrange={({setState}) => (
              <Button
                label="measure your mark"
                onPress={() => {
                  performance.mark('myMark');
                  performance.measure('myMeasure2', 'myMark');
                  let ms=performance.getEntriesByName('myMeasure2');
                  // -> [{ name: "myMeasure2", entryType: "measure", startTime: 98, duration: 123 }]
                  let msg=getReturnMsg()
                  setResult2(JSON.stringify(msg))
                  setState(ms[0]);
                }}
              />
            )}
            assert={async ({expect,state}) => {
              expect(state).to.have.property('name', 'myMeasure2');
              expect(state).to.contains.all.keys('name','entryType','startTime','duration');
            }}
          />
          <TestCase.Example itShould="display measure">
          <Text>{result2}</Text>
          </TestCase.Example>
          <TestCase.Manual
            itShould="Meta data"
            initialState={false}
            arrange={({setState}) => (
              <Button
                label="measure your Meta data Mark"
                onPress={() => {
                  performance.mark('myMark', {
                    detail: {
                      screen: 'settings'
                    }
                  });
                  performance.measure('myMeasure3', {
                    start: 'myMark',
                    detail: {
                      category: 'render'
                    }
                  });
                  let ms=performance.getEntriesByName('myMeasure3');
                  // -> [{ name: "myMeasure3", entryType: "measure", startTime: 98, duration: 123, detail: {category: 'render'} }]
                  setResult3(JSON.stringify(ms[0]))
                  setState(ms[0]);
                }}
              />
            )}
            assert={async ({expect,state}) => {
              expect(state).to.have.property('name', 'myMeasure3');
              expect(state).to.have.property('detail');
              expect(state.detail).to.have.property('category','render');
              expect(state).to.contains.all.keys('name','entryType','startTime','duration','detail');
            }}
          />
          <TestCase.Example itShould="display measure attached meta data ">
            <Text>{result3}</Text>
          </TestCase.Example>
          <TestCase.Manual
            itShould="Subscribing to entries"
            initialState={false}
            arrange={({setState}) => (
              <Button
                label="subscribing to entries"
                onPress={() => {
                  performance.mark('newTimeMark')
                  performance.measure('newTime','newTimeMark')
                  const measureObserver = new PerformanceObserver((list, observer) => {
                    let res=[];
                    list.getEntries().forEach((entry) => {
                      res.push(entry);
                    });
                    setResult4(JSON.stringify(res[0]))
                    setState(res[0]);
                  });
                  measureObserver.observe({ type: 'measure', buffered: true });
                }}
              />
            )}
            assert={async ({expect,state}) => {
              expect(state).to.have.property('name');
              expect(state).to.contains.all.keys('name','entryType','startTime','duration');
            }}
          />
          <TestCase.Example itShould="display subscribed measure">
            <Text>{result4}</Text>
          </TestCase.Example>
          <TestCase.Manual
            itShould="Network resources"
            initialState={false}
            arrange={({setState}) => (
              <Button
                label="test network resources"
                onPress={async () => {
                  setResourceLoggingEnabled(true);
                  await fetch('https://www.baidu.com');
                  let res=performance.getEntriesByType('resource');
                  setResult5(JSON.stringify(res[0]))
                  setState(res[0]);
                  // -> [{
                  //   name: "https://www.baidu.com",
                  //   entryType: "resource",
                  //   startTime: 98,
                  //   duration: 123,
                  //   initiatorType: "xmlhttprequest", // fetch is a polyfill on top of XHR in react-native
                  //   fetchStart: 98,
                  //   responseEnd: 221,
                  //   transferSize: 456,
                  //   ...
                  // }]
                }}
              />
            )}
            assert={async ({expect,state}) => {
              expect(state).to.have.property('name','https://www.baidu.com');
              expect(state).to.have.property('initiatorType','xmlhttprequest');
              expect(state).to.contains.all.keys('name','entryType','startTime','duration');
            }}
          />
          <TestCase.Example itShould="display network resources">
            <Text>{result5}</Text>
          </TestCase.Example> 
          <TestCase.Manual
            itShould="Custom metrics"
            initialState={false}
            arrange={({setState}) => (
              <Button
                label="test custom metrics"
                onPress={async () => {
                  performance.metric('myMetric', 123);
                  let res=performance.getEntriesByType('metric');
                  setResult6(JSON.stringify(res[0]))
                  setState(res[0]);
                  // -> [{ name: "myMetric", entryType: "metric", startTime: 98, duration: 0, value: 123 }]
                }}
              />
            )}
            assert={async ({expect,state}) => {
              expect(state).to.have.property('name','myMetric');
              expect(state).to.have.property('value',123);
              expect(state).to.contains.all.keys('name','entryType','startTime','duration','value');
            }}
          />
          <TestCase.Example itShould="display custom metrics">
            <Text>{result6}</Text>
          </TestCase.Example>
          </TestSuite>
        </ScrollView>
    </Tester>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#333'
  },
  fontstyle: {
    fontSize: 32,
    fontWeight: 600
  },
  caseStyle:{
    width:'100%',
    height:50,
    lineHeight:50,
    marginBottom:20
  }
});

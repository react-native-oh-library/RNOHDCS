import React, { useState } from 'react';
import { View, ScrollView, Button, Text } from 'react-native';
import { Tester, TestCase } from '@rnoh/testerino';

import ToolTipDemo from './ToolTipDemo';

const props = [
  {
    key: 'isFirstStep:false',
    value: { isFirstStep: false },
  },
  {
    key: 'isFirstStep:true',
    value: { isFirstStep: true },
  },
  {
    key: 'isLastStep:false',
    value: { isLastStep: false },
  },
  {
    key: 'isLastStep:true',
    value: { isLastStep: true },
  },
  {
    key: 'currentStep:{name:"test_001",order:1,visible:true}',
    value: {
      currentStep: {
        name: 'test_001',
        order: 1,
        visible: true,
      }
    },
  },
  {
    key: 'labels:{skip:"跳过"}',
    value: {
      labels: { skip: '跳过' },
    },
  },
  {
    key: 'labels:{previous:"上一步"}',
    value: {
      labels: { previous: '上一步' },
    },
  },
  {
    key: 'labels:{next:"下一步"}',
    value: {
      labels: { next: '下一步' },
    },
  },
  {
    key: 'labels:{finish:"完成"}',
    value: {
      labels: { finish: '完成' },
      isLastStep: true,
    },
  },
]


export default function () {

  const [isVisible, setIsVisible] = useState(true);
  const [toolTipprops, setToolTipprops] = useState({});
  const hideVisible = () => {
    setIsVisible(false)
    let t = setTimeout(() => {
      clearTimeout(t);
      setIsVisible(true);
    }, 1000)
  };
  return (
    <Tester>
      <TestCase itShould='base demo'>
        <ToolTipDemo isVisible={isVisible} toolTipprops={toolTipprops} />
      </TestCase>
      <ScrollView style={{ marginBottom: 350 }}>
        {
          props.map(item => {
            return (
              <TestCase
                key={item.key}
                itShould={item.key}
                tags={["C_API"]}
                initialState={0}
                arrange={({ setState }) =>
                  <Button onPress={() => {
                    hideVisible();
                    setToolTipprops(item.value);
                    setState(100);
                  }} title={item.key}></Button>
                }
                assert={({ expect, state }) => {
                  expect(state).to.be.eq(100);
                }}
              />
            )
          })
        }
        <TestCase
          itShould={'handleNext方法,需要点击页面上Next'}
          tags={["C_API"]}>
          <Text>handleNext方法,需要点击页面上Next</Text>
        </TestCase>
        <TestCase
          itShould={'handlePrev方法,需要点击页面上Next'}
          tags={["C_API"]}>
          <Text>handlePrev方法,需要点击页面上Previous</Text>
        </TestCase>
        <TestCase
          itShould={'handleStop方法,需要点击页面上Skip'}
          tags={["C_API"]}>
          <Text>handleStop方法,需要点击页面上Skip</Text>
        </TestCase>
      </ScrollView>
    </Tester>
  )
};

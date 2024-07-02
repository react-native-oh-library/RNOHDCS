import React, { View, Text, useState } from 'react';
import { ScrollView, Button } from 'react-native';
import { Tester, TestCase } from '@rnoh/testerino';

import TourGuideProviderDemo from './TourGuideProviderDemo';
import ToolTipDemo from './ToolTipDemo';

const props = [
  {
    key: 'tooltipComponent={ToolTipDemo}',
    value: {
      tooltipComponent: ToolTipDemo,
    },
  },
  {
    key: 'tooltipStyle:{backgroundColor: "#9FA8DA",borderRadius: 10,paddingTop: 5,}',
    value: {
      tooltipStyle: {
        backgroundColor: '#9FA8DA',
        borderRadius: 10,
        paddingTop: 5,
      }
    }
  },
  {
    key: 'wrapperStyle:{backgroundColor:"#9FA8DA"}',
    value: {
      wrapperStyle: { 
        backgroundColor: '#9FA8DA',
      },
    }
  },
  {
    key: 'wrapperStyle:{backgroundColor:"#9FA8DA",borderWidth:10}',
    value: {
      wrapperStyle: { 
        backgroundColor: '#9FA8DA',
        borderWidth:10, 
      },
    }
  },
  {
    key: 'animationDuration:500',
    value: { animationDuration: 500 },
  },
  {
    key: 'animationDuration:1000',
    value: { animationDuration: 1000 },
  },
  {
    key: 'startAtMount:true',
    value: { startAtMount: true },
  },
  {
    key: 'startAtMount:mount_001',
    value: { startAtMount: 'mount_001' },
  },
  {
    key: 'backdropColor:red',
    value: { backdropColor: 'red' },
  },
  {
    key: 'backdropColor:rgba(0,0,0,.3)',
    value: { backdropColor: 'rgba(0,0,0,.3)' },
  },
  {
    key: 'verticalOffset:20',
    value: { verticalOffset: 20 },
  },
  {
    key: 'verticalOffset:80',
    value: { verticalOffset: 80 },
  },
  {
    key: 'maskOffset:20',
    value: { maskOffset: 20 },
  },
  {
    key: 'maskOffset:50',
    value: { maskOffset: 50 },
  },
  {
    key: 'borderRadius:10',
    value: { borderRadius: 10 },
  },
  {
    key: 'borderRadius:40',
    value: { borderRadius: 40 },
  },
  {
    key: 'dismissOnPress:false',
    value: { dismissOnPress: false },
  },
  {
    key: 'dismissOnPress:true',
    value: { dismissOnPress: true },
  },
  {
    key: 'preventOutsideInteraction:true',
    value: { preventOutsideInteraction: true },
  },
  {
    key: 'labels:{skip:"跳过"}',
    value: { labels: { skip: '跳过' } },
  },
  {
    key: 'labels:{next:"下一步"}',
    value: { labels: { next: '下一步' } },
  },
];

export default function () {

  const [isVisible, setIsVisible] = useState(false);
  const [providerprops, setProviderprops] = useState({});

  const hideVisible = () => {
    setIsVisible(false);
    let t = setTimeout(() => {
      clearTimeout(t);
      setIsVisible(true);
    }, 1000)
  };

  React.useEffect(() => {
    hideVisible();
  }, []);

  return (
    <Tester>
      <TestCase
        itShould='base demo'
        tags={["C_API"]}>
        <TourGuideProviderDemo isVisible={isVisible} providerprops={providerprops} />
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
                    hideVisible()
                    setProviderprops(item.value)
                    setState(100)
                  }} title={item.key}></Button>
                }
                assert={({ expect, state }) => {
                  expect(state).to.be.eq(100);
                }}
              />
            )
          })
        }
      </ScrollView>
    </Tester>
  )
};

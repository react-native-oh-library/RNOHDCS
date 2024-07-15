import React, { View, useState } from 'react';
import { ScrollView, Button, Text } from 'react-native';
import { Tester, TestCase } from '@rnoh/testerino';

import TourGuideProviderDemo from './TourGuideProviderDemo';

const props = [
  {
    key: 'zone:1',
    value: { zone: 1 },
  },
  {
    key: 'zone:2',
    value: { zone: 2 },
  },
  {
    key: 'tourKey:tourKey_001',
    label: 'tourKey_001',
    value: { tourKey: 'tourKey_001' },
  },
  {
    key: 'tourKey:tourKey_002',
    label: 'tourKey_002',
    value: { tourKey: 'tourKey_002' },
  },
  {
    key: 'isTourGuide:true',
    value: { isTourGuide: true },
  },
  {
    key: 'isTourGuide:false',
    value: { isTourGuide: false },
  },
  {
    key: 'top:20',
    value: { top: 20, isZone: true },
  },
  {
    key: 'top:40',
    value: { top: 40, isZone: true },
  },
  {
    key: 'left:10',
    value: { left: 20, isZone: true },
  },
  {
    key: 'left:40',
    value: { left: 40, isZone: true },
  },
  {
    key: 'right:20',
    value: { right: 20, isZone: true },
  },
  {
    key: 'right:40',
    value: { right: 40, isZone: true },
  },
  {
    key: 'bottom:100',
    value: { bottom: 100, isZone: true },
  },
  {
    key: 'bottom:200',
    value: { bottom: 200, isZone: true },
  },
  {
    key: 'width:80',
    value: { width: 80, isZone: true },
  },
  {
    key: 'width:150',
    value: { width: 150, isZone: true },
  },
  {
    key: 'height:50',
    value: { height: 50, isZone: true },
  },
  {
    key: 'height:100',
    value: { height: 100, isZone: true },
  },
  {
    key: 'shape:circle',
    value: { shape: 'circle', isZone: true },
  },
  {
    key: 'shape:rectangle',
    value: { shape: 'rectangle', isZone: true },
  },
  {
    key: 'shape:circle_and_keep',
    value: { shape: 'circle_and_keep', isZone: true },
  },
  {
    key: 'shape:rectangle_and_keep',
    value: { shape: 'rectangle_and_keep', isZone: true },
  },
  {
    key: 'borderRadiusObject:{topLeft:5, left: 20}',
    value: { borderRadiusObject: { topLeft: 5 }, left: 20, isZone: true },
  },
  {
    key: 'borderRadiusObject:{topLeft:20, left: 20}',
    value: { borderRadiusObject: { topLeft: 20 }, left: 20, isZone: true },
  },
  {
    key: 'borderRadiusObject:{topRight:5}',
    value: { borderRadiusObject: { topRight: 5 }, left: 20, isZone: true },
  },
  {
    key: 'borderRadiusObject:{topRight:20}',
    value: { borderRadiusObject: { topRight: 20 }, left: 20, isZone: true },
  },
  {
    key: 'borderRadiusObject:{bottomLeft:5}',
    value: { borderRadiusObject: { bottomLeft: 5 }, left: 20, isZone: true },
  },
  {
    key: 'borderRadiusObject:{bottomLeft:20}',
    value: { borderRadiusObject: { bottomLeft: 20 }, left: 20, left: 20, isZone: true },
  },
  {
    key: 'borderRadiusObject:{bottomRight:5}',
    value: { borderRadiusObject: { bottomRight: 5 }, left: 20, isZone: true },
  },
  {
    key: 'borderRadiusObject:{bottomRight:20}',
    value: { borderRadiusObject: { bottomRight: 20 }, left: 20, isZone: true },
  },
  {
    key: 'containerStyle:{backgroundColor:"red"}',
    value: { containerStyle: { backgroundColor: 'red' }, isZone: true },
  },
  {
    key: 'containerStyle:{backgroundColor:"blue"}',
    value: { containerStyle: { backgroundColor: 'blue' }, isZone: true },
  },
  {
    key: 'keepTooltipPosition:false',
    value: { keepTooltipPosition: false, isZone: true },
  },
  {
    key: 'keepTooltipPosition:true',
    value: { keepTooltipPosition: true, isZone: true },
  },
  {
    key: 'tooltipBottomOffset:10',
    value: { tooltipBottomOffset: 10, top: 40, isZone: true },
  },
  {
    key: 'tooltipBottomOffset:40',
    value: { tooltipBottomOffset: 40, top: 40, isZone: true },
  },
  {
    key: 'text:test_001',
    value: { text: 'test_001', isZone: true },
  },
  {
    key: 'text:test_002',
    value: { text: 'test_002', isZone: true },
  },
]

export default function () {

  const [isVisible, setIsVisible] = useState(false);
  const [currentTourKey, setCurrentTourKey] = useState('_defalut');
  const [tourGuideZoneByPositionprops, setTourGuideZoneByPositionprops] = useState({});
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
      <TestCase itShould='base demo'>
        <TourGuideProviderDemo isVisible={isVisible} tourGuideZoneByPositionprops={tourGuideZoneByPositionprops} />
      </TestCase>
      <ScrollView style={{ marginBottom: 350 }}>
        {
          props.map((item, index) => {
            return (
              <>
                {
                  index == 2 ? <TestCase
                    itShould={'显示当前tourKey'}
                    tags={["C_API"]}>
                    <Text>tourKey:{currentTourKey}</Text>
                  </TestCase> : ''
                }
                <TestCase
                  key={item.key}
                  itShould={item.key}
                  tags={["C_API"]}
                  initialState={0}
                  arrange={({ setState }) =>
                    <Button onPress={() => {
                      hideVisible()
                      setTourGuideZoneByPositionprops(item.value)
                      setState(100)
                      if (item.label) {
                        setCurrentTourKey(item.label)
                      } else {
                        setCurrentTourKey('_defalut')
                      }
                    }} title={item.key}></Button>
                  }
                  assert={({ expect, state }) => {
                    expect(state).to.be.eq(100);
                  }}
                />
              </>
            )
          })
        }
      </ScrollView>
    </Tester>
  )
};

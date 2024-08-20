import * as React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-paper';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

function IconDemo() { 
  

  const IconBProps = [
    {
      key: ' Icon style:source={"camera"}',
      value: {
        source :"camera",
        color:'red',
        size:40
      }
    },
    {
      key: ' Icon style:size={"50"}',
      value: {
        source :"camera",
        color:'blue',
        size:50
      }
    },
    {
      key: ' Icon style:size={"60"}',
      value: {
        source :"camera",
        color:'blue',
        size:60
      }
    },
    {
      key: ' Icon style:color={"blue"}',
      value: {
        source :"camera",
        color:'blue',
        size:60
      }
    },
    {
      key: ' Icon style:testID={"testID"}',
      value: {
        source :"camera",
        color:'blue',
        size:60,
        testID:'Icon'
      }
    },
    {
      key: ' Icon style:testID={"testID1"}',
      value: {
        source :"camera",
        color:'blue',
        size:60,
        testID:'Icon1'
      }
    },
    {
      key: ' Icon style:theme={ colors: { primary: "green" } }',
      value: {
        source :"camera",
        size:60,
        theme:{ colors: { primary: 'green' } }
      }
    },
  ]


  return (
    <ScrollView>
    <Tester>
    <TestSuite name='Icon' >
         {IconBProps.map((item) => {
              return (
                <TestCase itShould={item.key}  key={item.key}>
                  <View>
                   <Icon {...item.value}/>
                  </View>
              </TestCase>
              );
          })},
     </TestSuite>
    </Tester>
    </ScrollView>
  )
}

const AssetIcon = ({ size, testID }: { size: number; testID: string }) => (
  <Image
    accessibilityIgnoresInvertColors
    source={require('../assets/images/paper-icon.png')}
    style={{ width: size, height: size }}
    testID={testID}
  />
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: 16,
  },
});

export default IconDemo;
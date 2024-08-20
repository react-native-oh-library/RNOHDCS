import * as React from 'react';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { MD2Colors, MD2Theme, MD3Theme, useTheme } from 'react-native-paper';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';

type SegmentedButtonValue = {
  [key: string]: string;
};

function SegmentedButtonDemo() { 
  const useExampleTheme = () => useTheme<MD2Theme | MD3Theme>();
  const theme = useExampleTheme();
  const [segmentedButtonValue, setSegmentedButtonValue] = React.useState<SegmentedButtonValue>({});
  const _getSegmentedButtonValue = (name: string) => segmentedButtonValue[name]

  const _onValueChange=(name: string) => (query: string) =>
  setSegmentedButtonValue({ ...segmentedButtonValue, [name]: query});


  const SegmentedButtonProps = [
    {
      key: ' ProgressBar style:density={"regular"}',
      value: {
        density:'regular' as 'regular' | 'small' | 'medium' | 'high',
        value:_getSegmentedButtonValue('Button1'),
        onValueChange:_onValueChange('Button1'),
        buttons:[
          {
            value: 'walk',
            label: 'Walking',
          },
          {
            value: 'train',
            label: 'Transit',
          },
          { value: 'drive', label: 'Driving' },
        ]
      },
    },
    {
      key: ' ProgressBar style:density={"small"}',
      value: {
        density:'small' as 'regular' | 'small' | 'medium' | 'high',
        value:_getSegmentedButtonValue('Button2'),
        onValueChange:_onValueChange('Button2'),
        buttons:[
          {
            value: 'walk',
            label: 'Walking',
          },
          {
            value: 'train',
            label: 'Transit',
          },
          { value: 'drive', label: 'Driving' },
        ]
      },
    },
    {
      key: ' ProgressBar style:density={"medium"}',
      value: {
        density:'medium' as 'regular' | 'small' | 'medium' | 'high',
        value:_getSegmentedButtonValue('Button3'),
        onValueChange:_onValueChange('Button3'),
        buttons:[
          {
            value: 'walk',
            label: 'Walking',
          },
          {
            value: 'train',
            label: 'Transit',
          },
          { value: 'drive', label: 'Driving' },
        ]
      },
    },
    {
      key: ' ProgressBar style:density={"high"}',
      value: {
        density:'high' as 'regular' | 'small' | 'medium' | 'high',
        value:_getSegmentedButtonValue('Button4'),
        onValueChange:_onValueChange('Button4'),
        buttons:[
          {
            value: 'walk',
            label: 'Walking',
          },
          {
            value: 'train',
            label: 'Transit',
          },
          { value: 'drive', label: 'Driving' },
        ]
      },
    },
    {
      key: ' ProgressBar style:{backgroundColor:MD2Colors.red100}',
      value: {
        value:_getSegmentedButtonValue('Button5'),
        onValueChange:_onValueChange('Button5'),
        style :{backgroundColor:MD2Colors.red100},
        buttons:[
          {
            value: 'walk',
            label: 'Walking',
          },
          {
            value: 'train',
            label: 'Transit',
          },
          { value: 'drive', label: 'Driving' },
        ]
      },
    },
    {
      key: ' ProgressBar style:theme = {theme}',
      value: {
        value:_getSegmentedButtonValue('Button6'),
        onValueChange:_onValueChange('Button6'),
        theme :theme,
        buttons:[
          {
            value: 'walk',
            label: 'Walking',
          },
          {
            value: 'train',
            label: 'Transit',
          },
          { value: 'drive', label: 'Driving' },
        ]
      },
    },
    {
      key: ' ProgressBar style:buttons ={value:"walk",label:"Walking"}',
      value: {
        value:_getSegmentedButtonValue('Button7'),
        onValueChange:_onValueChange('Button7'),
        theme :theme,
        buttons:[
          {
            value: 'walk',
            label: 'Walking',
          },
          {
            value: 'train',
            label: 'Transit',
          },
          { value: 'drive', label: 'Driving' },
        ]
      },
    },
    {
      key: ' ProgressBar style:buttons ={value:"walk",icon:"walk",label:"Walking",style:styles.button}',
      value: {
        value:_getSegmentedButtonValue('Button8'),
        onValueChange:_onValueChange('Button8'),
        theme :theme,
        buttons:[
          {
            value: 'walk',
            icon: 'walk',
            label: 'Walking',
            style: styles.button,
          },
          {
            value: 'train',
            icon: 'train',
            label: 'Transit',
            style: styles.button,
          },
          {
            value: 'drive',
            icon: 'car',
            label: 'Driving',
            style: styles.button,
          },
        ]
      },
    },
    {
      key: ' ProgressBar style:buttons ={disabled:true}',
      value: {
        value:_getSegmentedButtonValue('Button8'),
        onValueChange:_onValueChange('Button8'),
        theme :theme,
        buttons:[
          {
            value: 'walk',
            icon: 'walk',
            label: 'Walking',
            disabled:true,
            style: styles.button,
          },
          {
            value: 'train',
            icon: 'train',
            label: 'Transit',
            style: styles.button,
          },
          {
            value: 'drive',
            icon: 'car',
            label: 'Driving',
            style: styles.button,
          },
        ]
      },
    },
    {
      key: ' ProgressBar style:buttons ={disabled:false}',
      value: {
        value:_getSegmentedButtonValue('Button8'),
        onValueChange:_onValueChange('Button8'),
        theme :theme,
        buttons:[
          {
            value: 'walk',
            icon: 'walk',
            label: 'Walking',
            disabled:false,
            style: styles.button,
          },
          {
            value: 'train',
            icon: 'train',
            label: 'Transit',
            style: styles.button,
          },
          {
            value: 'drive',
            icon: 'car',
            label: 'Driving',
            style: styles.button,
          },
        ]
      },
    }  
  ]


  return (
    <ScrollView>
      <Tester>
      <TestSuite name='SegmentedButton' >
        {SegmentedButtonProps.map((item) => {
          return (
            <TestCase itShould={item.key}  key={item.key}>
              <View style={{height:60, justifyContent: 'center',}}>
                <SegmentedButtons {...item.value}/>
              </View>
            </TestCase>
          );
        })},
      </TestSuite>
    </Tester>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  group: { paddingHorizontal: 20, justifyContent: 'center' },
});

export default SegmentedButtonDemo;
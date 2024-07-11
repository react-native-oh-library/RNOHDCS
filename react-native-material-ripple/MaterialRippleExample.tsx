import React, { useState } from 'react';
import {Text, ScrollView} from 'react-native';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';
import Ripple from 'react-native-material-ripple';


export const MateriaRippleExample = () => {

  const [value1,setValue1]=useState<string>('1')
  const [value2,setValue2]=useState<string>('2')
  const [value3,setValue3]=useState<string>('3')
  const [value4,setValue4]=useState<string>('4')
  const [value5,setValue5]=useState<string>('5')
  const [value6,setValue6]=useState<string>('6')
  const [value7,setValue7]=useState<string>('7')
  const [value8,setValue8]=useState<string>('8')


  return (
    <ScrollView>
      <Tester>
        <TestSuite name="MateriaRippleDemo">
          <TestCase  itShould={`change rippleColor `} tags={['C_API']}>
            <Ripple  rippleColor="rgb(255, 0,0 )" >
              <Text style={{padding: 30}}>change rippleColor</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`change rippleOpacity `} tags={['C_API']}>
            <Ripple rippleOpacity={1}>
              <Text style={{padding: 30}}>change rippleOpacity</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`change rippleDuration `} tags={['C_API']}>
            <Ripple rippleDuration={1000}>
              <Text style={{padding: 30}}>change rippleDuration</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`change rippleSize `} tags={['C_API']}>
            <Ripple rippleSize={100}>
              <Text style={{padding: 30}}>change rippleSize</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`change rippleContainerBorderRadius `} tags={['C_API']}>
            <Ripple style={{borderRadius:40,backgroundColor:'#0288D1'}}  rippleContainerBorderRadius={40}>
              <Text style={{padding: 30}}>change rippleContainerBorderRadius</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`change rippleCentered `} tags={['C_API']}>
            <Ripple rippleCentered>
              <Text style={{padding: 30}}>change rippleCentered</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`change rippleSequential `} tags={['C_API']}>
            <Ripple  rippleSequential>
              <Text style={{padding: 30}}>change rippleSequential</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`change rippleFades `} tags={['C_API']}>
            <Ripple  rippleFades={false}>
              <Text style={{padding: 30}}>change rippleFades</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`change disabled `} tags={['C_API']}>
            <Ripple  disabled>
              <Text style={{padding: 30}}>change disabled</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`onPressIn `} tags={['C_API']}>
         
            <Ripple   onPressIn={()=>setValue1('changed')}>
              <Text style={{padding: 30}}>onPressIn touch  {value1}</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`delay 1s onPressIn `} tags={['C_API']}>
            <Ripple delayPressIn={1000}  onPressIn={()=>setValue2('changed')}>
              <Text style={{padding: 30}}>delay onPressIn touch {value2}</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`onPressOut `} tags={['C_API']}>
            <Ripple  onPressOut={()=>setValue3('changed')}>
              <Text style={{padding: 30}}>onPressOut touch {value3}</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`delay 1s onPressOut `} tags={['C_API']}>
            <Ripple delayPressOut={1000} onPressOut={()=>setValue4('changed')}>
              <Text style={{padding: 30}}>delay onPressOut {value4}</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`onPress `} tags={['C_API']}>
            <Ripple  onPress={()=>setValue5('changed')}>
              <Text style={{padding: 30}}>onPress touch {value5}</Text>
            </Ripple>
          </TestCase>
          
          
          <TestCase itShould={`onLongPress`} tags={['C_API']}>
            <Ripple  onLongPress={()=>setValue6('changed')}>
              <Text style={{padding: 30}}>onLongPress touch {value6}</Text>
            </Ripple>
          </TestCase>
          
          <TestCase itShould={`delay 1s onLongPress`} tags={['C_API']}>
            <Ripple delayLongPress={1000} onLongPress={()=>setValue7('changed')}>
              <Text style={{padding: 30}}>delay onLongPress touch {value7}</Text>
            </Ripple>
          </TestCase>
          

          <TestCase itShould={`onRippleAnimation`} tags={['C_API']}>
            <Ripple  onRippleAnimation={()=>setValue8('changed')}>
              <Text style={{padding: 30}}>onRippleAnimation touch {value8}</Text>
            </Ripple>
          </TestCase>

          
          
        </TestSuite>
      </Tester>
    </ScrollView>
  );
};

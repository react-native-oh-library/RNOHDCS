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
          <TestCase  itShould={`change rippleColor value:rgb(255, 0,0 )`} tags={['C_API']}>
            <Ripple  rippleColor="rgb(255, 0,0 )" >
              <Text style={{padding: 30}}>change rippleColor</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`change rippleOpacity value:1`} tags={['C_API']}>
            <Ripple rippleOpacity={1}>
              <Text style={{padding: 30}}>change rippleOpacity</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`change rippleDuration value:1000`} tags={['C_API']}>
            <Ripple rippleDuration={1000}>
              <Text style={{padding: 30}}>change rippleDuration</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`change rippleSize value:100`} tags={['C_API']}>
            <Ripple rippleSize={100}>
              <Text style={{padding: 30}}>change rippleSize</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`change rippleContainerBorderRadius value:40`} tags={['C_API']}>
            <Ripple style={{borderRadius:40,backgroundColor:'#0288D1'}}  rippleContainerBorderRadius={40}>
              <Text style={{padding: 30}}>change rippleContainerBorderRadius</Text>
            </Ripple>
          </TestCase>

          <TestCase  itShould={`change rippleCentered value:true`} tags={['C_API']}>
            <Ripple rippleCentered>
              <Text style={{padding: 30}}>change rippleCentered</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`change rippleSequential value:true`} tags={['C_API']}>
            <Ripple  rippleSequential>
              <Text style={{padding: 30}}>change rippleSequential</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`change rippleFades value:false`} tags={['C_API']}>
            <Ripple  rippleFades={false}>
              <Text style={{padding: 30}}>change rippleFades</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`change disabled value:true`} tags={['C_API']}>
            <Ripple  disabled>
              <Text style={{padding: 30}}>change disabled</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`Touch moved in or started callback`} tags={['C_API']}>
         
            <Ripple   onPressIn={()=>setValue1('changed')}>
              <Text style={{padding: 30}}>onPressIn touch  {value1}</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`Touch moved in or started callback delay 1000ms `} tags={['C_API']}>
            <Ripple delayPressIn={1000}  onPressIn={()=>setValue2('changed')}>
              <Text style={{padding: 30}}>delay onPressIn touch {value2}</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`Touch moved out or terminated callback`} tags={['C_API']}>
            <Ripple  onPressOut={()=>setValue3('changed')}>
              <Text style={{padding: 30}}>onPressOut touch {value3}</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`Touch moved out or terminated callback delay 1000ms `} tags={['C_API']}>
            <Ripple delayPressOut={1000} onPressOut={()=>setValue4('changed')}>
              <Text style={{padding: 30}}>delay onPressOut {value4}</Text>
            </Ripple>
          </TestCase>

          <TestCase itShould={`Touch up inside bounds callback`} tags={['C_API']}>
            <Ripple  onPress={()=>setValue5('changed')}>
              <Text style={{padding: 30}}>onPress touch {value5}</Text>
            </Ripple>
          </TestCase>
          
          
          <TestCase itShould={`Touch delayed after onPressIn callback defaultValue:340ms`} tags={['C_API']}>
            <Ripple  onLongPress={()=>setValue6('changed')}>
              <Text style={{padding: 30}}>onLongPress touch {value6}</Text>
            </Ripple>
          </TestCase>
          
          <TestCase itShould={`Touch delayed after onPressIn callback delay 1000ms `} tags={['C_API']}>
            <Ripple delayLongPress={1000} onLongPress={()=>setValue7('changed')}>
              <Text style={{padding: 30}}>delay onLongPress touch {value7}</Text>
            </Ripple>
          </TestCase>
          

          <TestCase itShould={`Animation start callback`} tags={['C_API']}>
            <Ripple  onRippleAnimation={()=>setValue8('changed')}>
              <Text style={{padding: 30}}>onRippleAnimation touch {value8}</Text>
            </Ripple>
          </TestCase>

          
          
        </TestSuite>
      </Tester>
    </ScrollView>
  );
};

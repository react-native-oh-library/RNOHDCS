import React,{useState,useRef} from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Button} from 'react-native';
import { BaseComponent } from 'react-native-pickers';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {tester_change, tester_back_string} from './utilCompant';

export class BaseComponentExample extends BaseComponent {

  constructor(props) {
    super(props);
  }

  render(){
    return <View  >
      <Tester>
        <TestSuite name='BaseComponent'>
          {tester_back_string("getSize(100):",this.getSize(100))}
        </TestSuite>
      </Tester>
    </View>
  }

};
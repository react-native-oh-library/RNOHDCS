import React,{useState,useRef} from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Button} from 'react-native';
import { CustomPicker,BaseComponent } from 'react-native-pickers';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {tester_change, tester_back_string} from './utilCompant';

export class CustomPickerExample extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      list: ['item0', 'item1', 'item2', 'item3'],
      list1: ['item10', 'item11', 'item12', 'item13']
    }
  };

  render(){
    return <>
    <Tester>
      <TestSuite name=''>
      { tester_change('list ["item0", "item1", "item2", "item3"]','list ["item0", "item1", "item2", "item3"]',()=>{ this.setState({...this.state,list:['item0', 'item1', 'item2', 'item3']});this.CustomPicker.show() })}
      { tester_change('list ["item0z", "item1z", "item2z", "item3z"]','list ["item0z", "item1z", "item2z", "item3z"]',()=>{ this.setState({...this.state,list:['item0z', 'item1z', 'item2z', 'item3z']});this.CustomPicker.show() })}
      { tester_change('list1 ["item10", "item11", "item12", "item13"]','list1["item10", "item11", "item12", "item13"]',()=>{ this.setState({...this.state,list1:['item10', 'item11', 'item12', 'item13']});this.CustomPicker.show() })}
      { tester_change('list1 ["item10q", "item11q", "item12q", "item13q"]','list1["item10q", "item11q", "item12q", "item13q"]',()=>{ this.setState({...this.state,list1:['item10q', 'item11q', 'item12q', 'item13q']});this.CustomPicker.show() })}

      </TestSuite>
    </Tester>

      <CustomPicker
        list ={this.state.list}
        list1 ={this.state.list1}
        ref={ref => this.CustomPicker = ref} />
        
    </>
  
  };
};
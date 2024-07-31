import React,{useState,useRef} from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Button} from 'react-native';
import { SimpleItemsDialog,BaseComponent } from 'react-native-pickers';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {tester_change, tester_back_string} from './utilCompant';

export class SimpleItemsDialogExample extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      items: ['a', 'b', 'c'],
      itemKey: 'key',
      itemStyle: { color: '#333333' },
      cancel: true,
      cancelText: '取消',
      cancelTextStyle: { color: '#999999' },
      onPress:'',
    };
  }

  render(){
    return <>
    <Tester>
    <ScrollView>
      <TestSuite name='SimpleItemsDialog'>
      { tester_change('items ["a", "b", "c"]','items ["a", "b", "c"]',()=>{ this.setState({...this.state,items:['a', 'b', 'c']});this.SimpleItemsDialog.show() })}
      { tester_change('items ["a", "b", "c","d"]','items ["a", "b", "c","d"]',()=>{ this.setState({...this.state,items:['a', 'b', 'c','d']});this.SimpleItemsDialog.show() })}
      { tester_change("itemKey key",'itemKey key',()=>{ this.setState({...this.state,itemKey:'key'});this.SimpleItemsDialog.show() })}
      { tester_change("itemKey key1",'itemKey key1',()=>{ this.setState({...this.state,itemKey:'key1'});this.SimpleItemsDialog.show() })}
      { tester_change("itemStyle { fontSize: 20,color: '#333333' }",'itemStyle { fontSize: 20,color: "#333333" }',()=>{ this.setState({...this.state,itemStyle:{ fontSize: 20,color: '#333333' }});this.SimpleItemsDialog.show() })}
      { tester_change("itemStyle { fontSize: 40,color: '#300333' }",'itemStyle { fontSize: 40,color: "#300333" }',()=>{ this.setState({...this.state,itemStyle:{ fontSize: 40,color: '#300333' }});this.SimpleItemsDialog.show() })}


      { tester_change('取消按钮显示 cancel true','cancel true',()=>{ this.setState({...this.state,cancel:true});this.SimpleItemsDialog.show() })}
      { tester_change('取消按钮显示 cancel false','cancel false',()=>{ this.setState({...this.state,cancel:false});this.SimpleItemsDialog.show() })}
      { tester_change(' cancelText "取消"','cancelText 取消',()=>{ this.setState({...this.state,cancelText:'取消'});this.SimpleItemsDialog.show() })}
      { tester_change(' cancelText "cancel"','cancelText cancel',()=>{ this.setState({...this.state,cancelText:'cancel'});this.SimpleItemsDialog.show() })}

      { tester_change(' cancelTextStyle','cancelTextStyle { color: "#999999" }',()=>{ this.setState({...this.state,cancelTextStyle:{ color: '#999999' }});this.SimpleItemsDialog.show() })}
      { tester_change(' cancelTextStyle','cancelTextStyle { color: "#990099" }',()=>{ this.setState({...this.state,cancelTextStyle:{ color: '#990099' }});this.SimpleItemsDialog.show() })}
      
      {tester_back_string("onPress",this.state.onPress)}


      <View style={{height:100}}></View>
      </TestSuite>
    </ScrollView>
    </Tester>

      <SimpleItemsDialog
        items= {this.state.items}
        itemKey={this.state.itemKey}
        itemStyle= {this.state.itemStyle}
        cancel= {this.state.cancel}
        cancelText= {this.state.cancelText}
        cancelTextStyle= {this.state.cancelTextStyle}
        onPress={(isOK) => { this.setState({...this.state,onPress:'pass 返回值:'+isOK}) }} 
        ref={ref => this.SimpleItemsDialog = ref} />
        
    </>
  };
};
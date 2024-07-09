import React,{useState,useRef} from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Button} from 'react-native';
import { SimpleChooseDialog,BaseComponent } from 'react-native-pickers';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {tester_change, tester_back_string} from './utilCompant';

export class SimpleChooseDialogExample extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      items: ['a', 'b', 'c'],
      itemKey: 'key',
      itemStyle: { color: '#333333' },
      selectColor: '#1097D5',
      normalColor: '#666666',
      pointSize: 18,
      pointBorderRadius: 9,
      confirmText: '确定',
      confirmBtnColor: '#1097D5',
      confirmTextColor: '#ffffff',
      onPress:'',
    };
  }

  render(){
    return <>
    <Tester>
    <ScrollView>
      <TestSuite name='SimpleChooseDialogExample'>
      { tester_change('items ["a", "b", "c"]','items ["a", "b", "c"]',()=>{ this.setState({...this.state,items:['a', 'b', 'c']});this.SimpleChooseDialog.show() })}
      { tester_change('items ["a", "b", "c","d"]','items ["a", "b", "c","d"]',()=>{ this.setState({...this.state,items:['a', 'b', 'c','d']});this.SimpleChooseDialog.show() })}
      { tester_change("itemKey key",'itemKey key',()=>{ this.setState({...this.state,itemKey:'key'});this.SimpleChooseDialog.show() })}
      { tester_change("itemKey key1",'itemKey key1',()=>{ this.setState({...this.state,itemKey:'key1'});this.SimpleChooseDialog.show() })}
      { tester_change("itemStyle { color: '#333333' }",'itemStyle { color: "#333333" }',()=>{ this.setState({...this.state,itemStyle:{ color: '#333333' }});this.SimpleChooseDialog.show() })}
      { tester_change("itemStyle { color: '#3ff333' }",'itemStyle { color: "#3ff333" }',()=>{ this.setState({...this.state,itemStyle:{ color: '#3ff333' }});this.SimpleChooseDialog.show() })}
      { tester_change("selectColor #1097D5",'selectColor #1097D5',()=>{ this.setState({...this.state,selectColor:'#1097D5'});this.SimpleChooseDialog.show() })}
      { tester_change("selectColor #ff00D5",'selectColor #ff00D5',()=>{ this.setState({...this.state,selectColor:'#ff00D5'});this.SimpleChooseDialog.show() })}
      { tester_change("normalColor #666666",'normalColor #666666',()=>{ this.setState({...this.state,normalColor:'#666666'});this.SimpleChooseDialog.show() })}
      { tester_change("normalColor #00ff66",'normalColor #00ff66',()=>{ this.setState({...this.state,normalColor:'#00ff66'});this.SimpleChooseDialog.show() })}
      { tester_change("pointSize 18",'pointSize 18',()=>{ this.setState({...this.state,pointSize:18});this.SimpleChooseDialog.show() })}
      { tester_change("pointSize 36",'pointSize 36',()=>{ this.setState({...this.state,pointSize:36});this.SimpleChooseDialog.show() })}
      { tester_change("pointBorderRadius 9",'pointBorderRadius 9',()=>{ this.setState({...this.state,pointBorderRadius:9});this.SimpleChooseDialog.show() })}
      { tester_change("pointBorderRadius 18",'pointBorderRadius 18',()=>{ this.setState({...this.state,pointBorderRadius:18});this.SimpleChooseDialog.show() })}
      { tester_change("confirmText 确定",'confirmText 确定',()=>{ this.setState({...this.state,confirmText:'确定'});this.SimpleChooseDialog.show() })}
      { tester_change("confirmText 确定1",'confirmText 确定1',()=>{ this.setState({...this.state,confirmText:'确定1'});this.SimpleChooseDialog.show() })}
      { tester_change("confirmBtnColor #1097D5",'confirmBtnColor #1097D5',()=>{ this.setState({...this.state,confirmBtnColor:'#1097D5'});this.SimpleChooseDialog.show() })}
      { tester_change("confirmBtnColor #ff00D5",'confirmBtnColor #ff00D5',()=>{ this.setState({...this.state,confirmBtnColor:'#ff00D5'});this.SimpleChooseDialog.show() })}
      { tester_change("confirmTextColor #ffffff",'confirmTextColor #ffffff',()=>{ this.setState({...this.state,confirmTextColor:'#ffffff'});this.SimpleChooseDialog.show() })}
      { tester_change("confirmTextColor #ff00ff",'confirmTextColor #ff00ff',()=>{ this.setState({...this.state,confirmTextColor:'#ff00ff'});this.SimpleChooseDialog.show() })}
      
      {tester_back_string("onPickerConfirm",this.state.onPress)}
      </TestSuite>
    </ScrollView>
    </Tester>

      <SimpleChooseDialog

        items= {this.state.items}
        itemKey={this.state.itemKey}
        itemStyle= {this.state.itemStyle}
        selectColor= {this.state.selectColor}
        normalColor= {this.state.normalColor}
        pointSize= {this.state.pointSize}
        pointBorderRadius= {this.state.pointBorderRadius}
        confirmText= {this.state.confirmText}
        confirmBtnColor= {this.state.confirmBtnColor}
        confirmTextColor= {this.state.confirmTextColor}
        onPress={(isOK) => { this.setState({...this.state,onPress:'pass 返回值:'+isOK})}} 
        ref={ref => this.SimpleChooseDialog = ref} />
        
    </>
  };
};
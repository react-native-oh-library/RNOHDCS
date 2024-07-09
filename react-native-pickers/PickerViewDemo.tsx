import React,{useState,useRef} from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Button} from 'react-native';
import { PickerView,BaseComponent } from 'react-native-pickers';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {tester_change, tester_back_string} from './utilCompant';
import PickerView_ from './util/PickerView_';

export class PickerViewExample extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      itemTextColor: 0x333333ff,
      itemSelectedColor: 0x1097D5ff,
      itemHeight: 80,
      selectedIndex: 0,
      onPickerSelected:'',
      itemWidth : 100,
    };
  }

  render(){
   return <>
    <Tester>
      <ScrollView>
      <TestSuite name='PickerView '>
      { tester_change("itemTextColor 0x333333ff",'itemTextColor 0x333333ff',()=>{ this.setState({...this.state,itemTextColor:0x333333ff}); })}
      { tester_change("itemTextColor 0x3ff333ff",'itemTextColor 0x3ff333ff',()=>{ this.setState({...this.state,itemTextColor:0x3ff333ff}); })}
      { tester_change("itemSelectedColor 0x1097D5ff",'itemSelectedColor 0x1097D5ff',()=>{ this.setState({...this.state,itemSelectedColor:0x109005ff}); })}
      { tester_change("itemSelectedColor 0x109005ff",'itemSelectedColor 0x109005ff',()=>{ this.setState({...this.state,itemSelectedColor:0x109005ff}); })}
      { tester_change("itemHeight 80",'itemHeight 80',()=>{ this.setState({...this.state,itemHeight:80}); })}
      { tester_change("itemHeight 20",'itemHeight 20',()=>{ this.setState({...this.state,itemHeight:20}); })}
      { tester_change("itemWidth 100",'itemWidth 100',()=>{ this.setState({...this.state,itemWidth:100}); })}
      { tester_change("itemWidth 200",'itemWidth 200',()=>{ this.setState({...this.state,itemWidth:200}); })}
      { tester_change("selectedIndex 2",'selectedIndex 2',()=>{ this.setState({...this.state,selectedIndex:2}); })}
      { tester_change("selectedIndex 0",'selectedIndex 0',()=>{ this.setState({...this.state,selectedIndex:0}); })}
      
      {tester_back_string("onPickerConfirm",this.state.onPickerSelected)}

      
      <View style={{ width: this.mScreenWidth, height: this.props.itemHeight * 3 + this.getSize(15), flexDirection: 'row',  }}>
      <PickerView
        key = {1}
        itemTextColor= {this.state.itemTextColor}
        itemSelectedColor={this.state.itemSelectedColor}
        itemHeight= {this.state.itemHeight}
        itemWidth={this.state.itemWidth}
        selectedIndex= {this.state.selectedIndex}
        list={['a','b','c','d','e','f','g']}
        onPickerSelected={(toValue) => { this.state.onPickerSelected = 'pass 返回值:'+toValue }}  />
      </View>
      </TestSuite>
      </ScrollView>
    </Tester>
    </>
  };
};
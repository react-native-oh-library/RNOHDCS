import {Pressable, Text, View,ScrollView,SafeAreaView} from 'react-native';
import {useRef} from 'react';
import React from 'react';
import ButtonDemo  from './button';
import SwitchDemo  from './switch';
import RadioDemo  from './radio'
import CheckboxDemo from './checkbox'
import OverlaysPosition from './overlaysPosition'
export default function AraiDemo() {
  return (
    <>
    <ScrollView>
      <View  style={{marginTop:'70',marginLeft:'15'}}>
        <Text style={{fontSize:23}}>button</Text>
        <ButtonDemo></ButtonDemo>
      </View>
      <View style={{marginTop:'70',marginLeft:'15'}}>
        <Text style={{fontSize:23}}>switch</Text>
        <SwitchDemo></SwitchDemo>
      </View>
      <View style={{marginTop:'70',marginLeft:'15'}}>
        <Text style={{fontSize:23}}>radio和radioGroup</Text>
        <RadioDemo></RadioDemo>
      </View>
      <View style={{marginTop:'70',marginLeft:'15'}}>
        <Text style={{fontSize:23}}>checkbox和checkboxGroup</Text>
        <CheckboxDemo></CheckboxDemo>
      </View>
      <View >
        <Text style={{fontSize:23}}>OverlaysPosition</Text>
        <OverlaysPosition></OverlaysPosition>
        <View style={{height:100}}></View>
      </View>
      </ScrollView>
    </>
  );
}

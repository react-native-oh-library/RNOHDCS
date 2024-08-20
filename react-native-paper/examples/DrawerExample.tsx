import React, { useState } from 'react';  
import { View,StyleSheet, ScrollView } from 'react-native';  
import {
  Drawer,
  MD2Colors,
} from 'react-native-paper';


import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

export function DrawerText() {

  const [active, setActive] = React.useState('');

  const _onPress=()=> {
    console.info('Drawer onPress');
  }

  const DrawerCollapsedItemProps = [
    {
      key: 'Drawer style:label={Inbox}',
      value: {
        focusedIcon :'inbox',
        unfocusedIcon:'inbox-outline',
        label:'Inbox'
      },
    },
    {
      key: 'Drawer style:label={Inbox1}',
      value: {
        focusedIcon :'inbox',
        unfocusedIcon:'inbox-outline',
        label:'Inbox1'
      },
    },
    {
      key: 'Drawer style:badge={44}',
      value: {
        focusedIcon :'inbox',
        unfocusedIcon:'inbox-outline',
        label:'Inbox',
        badge:44,
      },
    },
    {
      key: 'Drawer style:badge={true}',
      value: {
        focusedIcon :'inbox',
        unfocusedIcon:'inbox-outline',
        label:'Inbox',
        badge:'true'
      },
    },
    {
      key: 'Drawer style:badge={...}',
      value: {
        focusedIcon :'inbox',
        unfocusedIcon:'inbox-outline',
        label:'Inbox',
        badge:'...'
      },
    },
    {
      key: 'Drawer style:disabled={true}',
      value: {
        focusedIcon :'inbox',
        unfocusedIcon:'inbox-outline',
        label:'Inbox',
        disabled:true
      },
    },
    {
      key: 'Drawer style:disabled={false}',
      value: {
        focusedIcon :'inbox',
        unfocusedIcon:'inbox-outline',
        label:'Inbox',
        disabled:false
      },
    },
    {
      key: 'Drawer style:focusedIcon={star}',
      value: {
        label: 'Starred',
        focusedIcon: 'star',
        unfocusedIcon: 'star-outline',
      },
    },
    {
      key: 'Drawer style:unfocusedIcon={star-outline}',
      value: {
        label: 'Starred',
        focusedIcon: 'star',
        unfocusedIcon: 'star-outline',
        active:true
      },
    },
    {
      key: 'Drawer fuction:onPress',
      value: {
        label: 'Starred',
        focusedIcon: 'star',
        unfocusedIcon: 'star-outline',
        onPress:_onPress
      },
    },
    {
      key: 'Drawer style:labelMaxFontSizeMultiplier ={1}',
      value: {
        label: 'Starred',
        focusedIcon: 'star',
        unfocusedIcon: 'star-outline',
        labelMaxFontSizeMultiplier:1
      },
    },
    {
      key: 'Drawer style:labelMaxFontSizeMultiplier ={2}',
      value: {
        label: 'Starred',
        focusedIcon: 'star',
        unfocusedIcon: 'star-outline',
        labelMaxFontSizeMultiplier:2
      },
    },
    {
      key: 'Drawer style:accessibilityLabel ={accessibility Label}',
      value: {
        label: 'Starred',
        focusedIcon: 'star',
        unfocusedIcon: 'star-outline',
        style :{backgroundColor:MD2Colors.red100}
      },
    },
    {
      key: 'Drawer style:theme ={ colors: { primary: "green" } }',
      value: {
        label: 'Starred',
        focusedIcon: 'star',
        unfocusedIcon: 'star-outline',
        theme:{ colors: { primary: 'green' } }
      },
    },
    {
      key: 'Drawer style:testID= {Drawer}',
      value: {
        label: 'Starred',
        focusedIcon: 'star',
        unfocusedIcon: 'star-outline',
        testID:'Drawer'
      },
    },
    {
      key: 'Drawer style:testID= {Drawer1}',
      value: {
        label: 'Starred',
        focusedIcon: 'star',
        unfocusedIcon: 'star-outline',
        testID:'Drawer1'
      },
    },
  ]

  const DrawerItemProps = [
    {
      key: 'DrawerItem style:label={First Item}',
      value: {
        style :{ backgroundColor: '#64ffda' },
        icon:'star',
        label:'First Item'
      },
    },
    {
      key: 'DrawerItem style:label={First Item1}',
      value: {
        style :{ backgroundColor: '#64ffda' },
        icon:'star',
        label:'First Item1'
      },
    },
    {
      key: 'DrawerItem style:icon="star"',
      value: {
        icon:'star',
        label:'First Item1'
      },
    },
    {
      key: 'DrawerItem style:active={true}',
      value: {
        icon:'star',
        label:'First Item1',
        active:true
      },
    },
    {
      key: 'DrawerItem style:active={false}',
      value: {
        icon:'star',
        label:'First Item1',
        active:false
      },
    },
    {
      key: 'DrawerItem style:disabled={false}',
      value: {
        icon:'star',
        label:'First Item1',
        onPress:_onPress,
        disabled:false
      },
    },
    {
      key: 'DrawerItem style:disabled={true}',
      value: {
        icon:'star',
        label:'First Item1',
        disabled:true,
        onPress:_onPress,
      },
    },
    {
      key: 'DrawerItem fuction:onPress',
      value: {
        icon:'star',
        label:'First Item1',
        onPress:_onPress,
      },
    },
    {
      key: 'DrawerItem style:background(background属性只限于Android)',
      value: {
        icon:'star',
        label:'First Item1',
        background:{color:MD2Colors.red100},
      },
    },
    {
      key: 'DrawerItem style:accessibilityLabel={accessibility label}',
      value: {
        icon:'star',
        label:'First Item1',
        accessibilityLabel:'accessibility label',
      },
    },
    {
      key: 'DrawerItem style:accessibilityLabel={accessibility label1}',
      value: {
        icon:'star',
        label:'First Item1',
        accessibilityLabel:'accessibility label1',
      },
    },
    {
      key: 'DrawerItem style:labelMaxFontSizeMultiplier={1}',
      value: {
        icon:'star',
        label:'First Item1',
        labelMaxFontSizeMultiplier:1,
      },
    },
    {
      key: 'DrawerItem style:labelMaxFontSizeMultiplier={2}',
      value: {
        icon:'star',
        label:'First Item1',
        labelMaxFontSizeMultiplier:2,
      },
    },
    {
      key: 'DrawerItem style:rippleColor={MD2Colors.red100}',
      value: {
        icon:'star',
        label:'First Item1',
        onPress:_onPress,
        rippleColor:MD2Colors.red100
      },
    },
    {
      key: 'DrawerItem style:{ backgroundColor:"64ffda" }',
      value: {
        style :{ backgroundColor: '#64ffda' },
        icon:'star',
        label:'First Item'
      },
    },
    {
      key: 'DrawerItem style:theme = {{ colors: { primary: "green"} }}',
      value: {
        icon:'star',
        label:'First Item',
        theme:{ colors: { primary: 'green' } }
      },
    },
  ]

  const DrawerSectionProps = [
    {
      key: 'Drawer.Section style:title={Some title}',
      value: {
        title:'Some title'
      },
    },
    {
      key: 'Drawer.Section style:children =<Drawer.Item />',
      value: {
        title:'Some title'
      },
    },
    {
      key: 'Drawer.Section style:showDivider = {true}',
      value: {
        title:'Some title',
        showDivider:true,
      },
    },
    {
      key: 'Drawer.Section style:showDivider = {false}',
      value: {
        title:'Some title',
        showDivider:false,
      },
    },
    {
      key: 'Drawer.Section style:titleMaxFontSizeMultiplier = 1',
      value: {
        title:'Some title',
        titleMaxFontSizeMultiplier:1
      },
    },
    {
      key: 'Drawer.Section style:titleMaxFontSizeMultiplier = 2',
      value: {
        title:'Some title',
        titleMaxFontSizeMultiplier:2
      },
    },
    {
      key: 'Drawer.Section style:{ backgroundColor:"64ffda"}',
      value: {
        title:'Some title',
        style :{ backgroundColor: '#64ffda' },
      },
    },
    {
      key: 'Drawer.Section style:theme = {{ colors: { primary: "green"} }}',
      value: {
        title:'Some title',
        theme :{ colors: { primary: "green"} }
      },
    },
  ]

  return (
    <ScrollView>
      <Tester>
        <TestSuite name='Drawer' >
          {DrawerCollapsedItemProps.map((item) => {
            return (
              <TestCase itShould={item.key}  key={item.key}>
                <Drawer.CollapsedItem {...item.value}/>
            </TestCase>
            );
        })},
        {DrawerItemProps.map((item) => {
            return (
              <TestCase itShould={item.key}  key={item.key}>
                <Drawer.Item {...item.value}/>
            </TestCase>
            );
        })},
        {DrawerSectionProps.map((item) => {
            return (
              <TestCase itShould={item.key}  key={item.key}>
                <Drawer.Section {...item.value}>
                  <Drawer.Item
                    label="First Item"
                    active={active === 'first'}
               
                  />
                  <Drawer.Item
                    label="Second Item"
                    active={active === 'second'}
         
                  />
               </Drawer.Section>
            </TestCase>
            );
        })},
        </TestSuite>
      </Tester>
    </ScrollView>
  )
}

export default DrawerText;
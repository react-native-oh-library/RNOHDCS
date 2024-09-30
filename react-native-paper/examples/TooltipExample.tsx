import * as React from 'react';
import { Platform, StyleSheet, View, Image, ScrollView } from 'react-native';

import {
  Avatar,
  Chip,
  IconButton,
  ToggleButton,
  Tooltip,
  Card,
} from 'react-native-paper';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

function TooltipDemo() { 

  const TooltippProps = [
    {
      key: 'Tooltipp style:title={Selected Camera}',
      value: {
        title:"Selected Camera"
      }
    },
    {
      key: 'Tooltipp style:enterTouchDelay={1000}',
      value: {
        title:"Selected Camera",
        enterTouchDelay:1000,
      }
    },
    {
      key: 'Tooltipp style:enterTouchDelay={2000}',
      value: {
        title:"Selected Camera",
        enterTouchDelay:2000,
      }
    },
    {
      key: 'Tooltipp style:enterTouchDelay={1500}',
      value: {
        title:"Selected Camera",
        leaveTouchDelay:1500,
      }
    },
    {
      key: 'Tooltipp style:enterTouchDelay={3000}',
      value: {
        title:"Selected Camera",
        leaveTouchDelay:3000,
      }
    },
    {
      key: 'Tooltipp style:enterTouchDelay={1}',
      value: {
        title:"Selected Camera",
        titleMaxFontSizeMultiplier:1,
      }
    },
    {
      key: 'Tooltipp style:enterTouchDelay={2}',
      value: {
        title:"Selected Camera",
        titleMaxFontSizeMultiplier:2,
      }
    },
    {
      key: 'Tooltipp style:theme={ colors: { primary:"green"} }',
      value: {
        title:"Selected Camera",
        theme:{ colors: { primary: 'green' } },
      }
    },
  ]

  return (
    <Tester>
      <ScrollView>
      <TestSuite name='Tooltip' >
      {TooltippProps.map((item) => {
          return (
            <TestCase itShould={item.key}  key={item.key}>
              <Tooltip title="Selected Camera">
                <IconButton icon="camera" selected size={24} onPress={() => {}} />
              </Tooltip>
            </TestCase>
            );
          })},
       </TestSuite>
      </ScrollView>
    </Tester>
  )
}


export default TooltipDemo;

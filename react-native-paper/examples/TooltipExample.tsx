import * as React from 'react';
import { Platform, StyleSheet, View, Image, ScrollView, Text } from 'react-native';

import {
  Avatar,
  Chip,
  IconButton,
  ToggleButton,
  Tooltip,
  Card,
} from 'react-native-paper';
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';

function TooltipDemo() {

  const TooltippProps = [
    {
      key: 'Tooltipp style:title={Selected Camera}',
      value: {
        title: "Selected Camera"
      }
    },
    {
      key: 'Tooltipp style:enterTouchDelay={1000}',
      value: {
        title: "Selected Camera",
        enterTouchDelay: 1000,
      }
    },
    {
      key: 'Tooltipp style:enterTouchDelay={2000}',
      value: {
        title: "Selected Camera",
        enterTouchDelay: 2000,
      }
    },
    {
      key: 'Tooltipp style:leaveTouchDelay={1500}',
      value: {
        title: "Selected Camera",
        leaveTouchDelay: 1500,
      }
    },
    {
      key: 'Tooltipp style:leaveTouchDelay={3000}',
      value: {
        title: "Selected Camera",
        leaveTouchDelay: 3000,
      }
    },
    {
      key: 'Tooltipp style:theme={ colors: { primary:"green"} }',
      value: {
        title: "Selected Camera",
        theme: { colors: { onSurface: 'green' } },
      }
    },
    {
      key: 'Tooltipp style:theme={ colors: { primary:"red"} }',
      value: {
        title: "Selected Camera",
        theme: { colors: { onSurface: 'red' } },
      }
    },
    {
      key: 'Tooltipp style:titleMaxFontSizeMultiplier={0.5}',
      value: {
        title: "Selected Camera",
        allowFontScaling:true,
        titleMaxFontSizeMultiplier: 0.5,
      }
    },
    {
      key: 'Tooltipp style:titleMaxFontSizeMultiplier={1}',
      value: {
        title: "Selected Camera",
        allowFontScaling:true,
        titleMaxFontSizeMultiplier: 1,
      }
    },
    {
      key: 'Tooltipp style:children=<IconButton icon="camera" selected size={24} onPress={() => {}} />',
      value: {
        title: "Selected Camera",
      }
    },
  ]

  return (
    <Tester>
      <ScrollView>
        <TestSuite name='Tooltip' >
          {TooltippProps.map((item) => {
            return (
              <TestCase itShould={item.key} key={item.key}>
                <Tooltip {...item.value}>
                  <IconButton icon="camera" selected size={24} onPress={() => {}} />
                </Tooltip>
              </TestCase>
            );
          })}
          <Text style = {styles.tooltip}></Text>
        </TestSuite>
      </ScrollView>
    </Tester>
  )
}
const styles = StyleSheet.create({
  tooltip: {
    height: 180
  },
});

export default TooltipDemo;



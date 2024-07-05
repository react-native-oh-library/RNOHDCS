
import React from 'react';
import { SwipeAction, List, Toast } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export function SwipeActionTest() {
  const right = [
    {
      text: 'More',
      onPress: () => Toast.info('more'),
      backgroundColor: 'orange',
      color: 'white',
    },
    {
      text: 'Delete',
      onPress: () => Toast.info('delete'),
      backgroundColor: 'red',
      color: 'white',
    },
  ]
  const left = [
    {
      text: 'Read',
      onPress: () => Toast.info('read'),
      backgroundColor: 'blue',
      color: 'white',
    },
    {
      text: 'Reply',
      onPress: () => Toast.info('reply'),
      backgroundColor: 'green',
      color: 'white',
    },
  ]
  return (
    <TestSuite name="SwipeActionTest">
      <TestCase itShould="render a SwipeAction" tags={['C_API']}>
        <List>
          <SwipeAction
            right={right}
            left={left}
            onSwipeableOpen={() => Toast.info('open')}
            onSwipeableClose={() => Toast.info('close')}>
            <List.Item extra="extra content">
              {' Simple example: left and right buttons'}
            </List.Item>
          </SwipeAction>
        </List>
      </TestCase>
    </TestSuite>
  );
};


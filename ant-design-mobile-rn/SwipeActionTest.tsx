
import React from 'react';
import { Alert } from 'react-native';
import { SwipeAction, List } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';
import { GestureHandlerRootView } from "react-native-gesture-handler";

export function SwipeActionTest() {
  const right = [
    {
      text: 'More',
      backgroundColor: 'orange',
      color: 'white',
    },
    {
      text: 'Delete',
      backgroundColor: 'red',
      color: 'white',
    },
  ]
  const left = [
    {
      text: 'Read',
      backgroundColor: 'blue',
      color: 'white',
    },
    {
      text: 'Reply',
      backgroundColor: 'green',
      color: 'white',
    },
  ]

  return (
    <TestSuite name="SwipeActionTest">
      <TestCase itShould="render a SwipeAction left=['Read', 'Reply']" tags={['C_API']}>
        <SwipeActionLeftExample />
      </TestCase>
      <TestCase itShould="render a SwipeAction right=['More', 'Delete']" tags={['C_API']}>
        <BasicSwipeRightExample />
      </TestCase>
      <TestCase itShould="render a SwipeAction onSwipeableOpen()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <GestureHandlerRootView>
            <SwipeAction
              right={right}
              left={left}
              onSwipeableOpen={() => { setState(true) }}
            >
              <List.Item extra="right buttons">
                left buttons
              </List.Item>
            </SwipeAction>
          </GestureHandlerRootView>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a SwipeAction onSwipeableClose()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <GestureHandlerRootView>
            <SwipeAction
              right={right}
              left={left}
              onSwipeableClose={() => { setState(true) }}
            >
              <List.Item extra="right buttons">
                left buttons
              </List.Item>
            </SwipeAction>
          </GestureHandlerRootView>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a SwipeAction Button style={{backgroundColor:pink}}">
        <BasicSwipeButtonBackgroundColorExample />
      </TestCase>
      <TestCase itShould="render a SwipeAction Button text={操作,操作1}">
        <BasicSwipeButtonTextExample />
      </TestCase>
      <TestCase itShould="render a SwipeAction Button onPress()">
        <BasicSwipeButtonBackgroundColorExample />
      </TestCase>
    </TestSuite>
  );
};

class SwipeActionLeftExample extends React.Component<any, any> {
  render() {
    const left = [
      {
        text: 'Read',
        backgroundColor: 'blue',
        color: 'white',
      },
      {
        text: 'Reply',
        backgroundColor: 'green',
        color: 'white',
      },
    ]

    return (
      <List>
        <GestureHandlerRootView>
          <SwipeAction
            left={left}
          >
            <List.Item>
              left buttons
            </List.Item>
          </SwipeAction>
        </GestureHandlerRootView>
      </List>
    )
  }
}

class BasicSwipeRightExample extends React.Component<any, any> {
  render() {
    const right = [
      {
        text: 'More',
        backgroundColor: 'orange',
        color: 'white',
      },
      {
        text: 'Delete',
        backgroundColor: 'red',
        color: 'white',
      },
    ]

    return (
      <List>
        <GestureHandlerRootView>
          <SwipeAction
            right={right}
          >
            <List.Item extra="right buttons">
            </List.Item>
          </SwipeAction>
        </GestureHandlerRootView>
      </List>
    )
  }
}

class BasicSwipeButtonTextExample extends React.Component<any, any> {
  render() {
    const right = [
      {
        text: '操作',
        backgroundColor: 'pink',
        color: 'white',
      },
      {
        text: '操作1',
        backgroundColor: 'pink',
        color: 'white',
      },
    ]

    return (
      <List>
        <GestureHandlerRootView>
          <SwipeAction
            right={right}
          >
            <List.Item extra="right buttons">
            </List.Item>
          </SwipeAction>
        </GestureHandlerRootView>
      </List>
    )
  }
}

class BasicSwipeButtonBackgroundColorExample extends React.Component<any, any> {
  render() {
    const right = [
      {
        text: '操作',
        backgroundColor: 'pink',
        color: 'white',
        onPress: () => Alert.alert('被点击')
      },
      {
        text: '操作1',
        backgroundColor: 'pink',
        color: 'white',
        onPress: () => Alert.alert('被点击')
      },
    ]
    return (
      <List>
        <GestureHandlerRootView>
          <SwipeAction
            right={right}
          >
            <List.Item extra="right buttons">
            </List.Item>
          </SwipeAction>
        </GestureHandlerRootView>
      </List>
    )
  }
}



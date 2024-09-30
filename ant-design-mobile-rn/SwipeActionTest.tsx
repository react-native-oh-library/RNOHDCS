
import React from 'react';
import { Alert, Text, StyleSheet } from 'react-native';
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
      <TestCase itShould="render a SwipeAction closeOnAction={true},closeOnAction={false}" tags={['C_API']}>
        <GestureHandlerRootView>
          <SwipeAction
            right={right}
            left={left}
            closeOnAction={true}
          >
            <List.Item extra="right buttons">
              left buttons
            </List.Item>
          </SwipeAction>
        </GestureHandlerRootView>
        <GestureHandlerRootView>
          <SwipeAction
            right={right}
            left={left}
            closeOnAction={false}
          >
            <List.Item extra="right buttons">
              left buttons
            </List.Item>
          </SwipeAction>
        </GestureHandlerRootView>
      </TestCase>
      <TestCase itShould="render a SwipeAction closeOnTouchOutside={true},closeOnTouchOutside={false}" tags={['C_API']}>
        <GestureHandlerRootView>
          <SwipeAction
            right={right}
            left={left}
            closeOnTouchOutside={true}
          >
            <List.Item extra="right buttons">
              left buttons
            </List.Item>
          </SwipeAction>
        </GestureHandlerRootView>
        <GestureHandlerRootView>
          <SwipeAction
            right={right}
            left={left}
            closeOnTouchOutside={false}
          >
            <List.Item extra="right buttons">
              left buttons
            </List.Item>
          </SwipeAction>
        </GestureHandlerRootView>
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
      <TestCase itShould="render a SwipeAction styles={{ actionText: { fontSize: 30 } }}" tags={['C_API']}>
        <GestureHandlerRootView>
          <SwipeAction
            right={right}
            left={left}
            styles={{ actionText: { fontSize: 30 } }}
          >
            <List.Item extra="right buttons">
              left buttons
            </List.Item>
          </SwipeAction>
        </GestureHandlerRootView>
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
      <TestCase itShould="render a SwipeAction Button color='green'">
        <BasicSwipeColorExample />
      </TestCase>
      <TestCase itShould="render a SwipeAction Button backgroundColor: 'red',backgroundColor: 'blue',">
        <BasicSwipeStyleExample />
      </TestCase>
      <TestCase itShould="render a SwipeAction Button disabled={false}, disabled={true}">
        <BasicSwipeDisabledExample />
      </TestCase>
      <TestCase itShould="render a SwipeAction Button actionButtonProps:{backgroundColor: 'aqua'}">
        <BasicSwipeActionButtonPropsExample />
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

class BasicSwipeColorExample extends React.Component<any, any> {
  render() {
    const right = [
      {
        text: '操作',
        backgroundColor: 'pink',
        color: 'green',
        onPress: () => Alert.alert('被点击')
      },
      {
        text: '操作1',
        backgroundColor: 'pink',
        color: 'green',
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

class BasicSwipeStyleExample extends React.Component<any, any> {
  render() {
    const right = [
      {
        text: '操作',
        style: styles.deleteButton,
      },
      {
        text: '操作1',
        style: styles.moreButton
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

class BasicSwipeDisabledExample extends React.Component<any, any> {
  render() {
    const right = [
      {
        text: '操作',
        backgroundColor: 'pink',
        color: 'green',
        disabled: false
      },
      {
        text: '操作1',
        backgroundColor: 'pink',
        color: 'green',
        disabled: true
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

class BasicSwipeActionButtonPropsExample extends React.Component<any, any> {
  render() {
    const right = [
      {
        text: '操作',
        actionButtonProps: {
          style: styles.opeationButton,
        },
      },
      {
        text: '操作1',
        backgroundColor: 'pink',
        color: 'green',
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

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: 'red',
    color: 'white',
  },
  moreButton: {
    backgroundColor: 'blue',
    color: 'white',
  },
  opeationButton: {
    backgroundColor: 'aqua',
    color: 'blue'
  }
});

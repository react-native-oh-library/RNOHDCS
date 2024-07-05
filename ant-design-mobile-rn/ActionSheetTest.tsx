import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ActionSheet, Button } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  const [clicked, setClicked] = useState('');
  const [clicked1, setClicked1] = useState('');
  const [clicked2, setClicked2] = useState('');
  const [clicked3, setClicked3] = useState('');
  const [clicked4, setClicked4] = useState('');
  const showActionSheet = () => {
    const BUTTONS = ['足球', '篮球', '游泳', '健身', '取消',];
    ActionSheet.showActionSheetWithOptions(
      {
        options: BUTTONS,
      },
      buttonIndex => {
        setClicked(BUTTONS[buttonIndex])
      }
    );
  }

  const showActionSheet1 = () => {
    const BUTTONS = ['足球', '篮球', '游泳', '健身', '取消',];
    ActionSheet.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: 4
      },
      buttonIndex => {
        setClicked1(BUTTONS[buttonIndex])
      }
    );
  }

  const showActionSheet2 = () => {
    const BUTTONS = ['足球', '篮球', '游泳', '健身', '取消',];
    ActionSheet.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: 4,
        destructiveButtonIndex: 4
      },
      buttonIndex => {
        setClicked2(BUTTONS[buttonIndex])
      }
    );
  }

  const showActionSheet3 = () => {
    const BUTTONS = ['足球', '篮球', '游泳', '健身', '取消',];
    ActionSheet.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: 4,
        destructiveButtonIndex: 4,
        title: '兴趣爱好'
      },
      buttonIndex => {
        setClicked3(BUTTONS[buttonIndex])
      }
    );
  }

  const showActionSheet4 = () => {
    const BUTTONS = ['足球', '篮球', '游泳', '健身', '取消',];
    ActionSheet.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: 4,
        destructiveButtonIndex: 4,
        title: '兴趣爱好',
        message: '请选择兴趣爱好'
      },
      buttonIndex => {
        setClicked4(BUTTONS[buttonIndex])
      }
    );
  }
  return (
    <TestSuite name="ActionSheetTest">
      <TestCase
        itShould="ActionSheet options"
        tags={['C_API']}
        initialState={false}
        arrange={({ setState }: any) =>
          <View>
            <View style={[{ padding: 8 }]}>
              <Button onPress={() => {
                showActionSheet();
                setState(true);
              }}>{'showActionSheet'}</Button>
            </View>
            <Text style={[{ padding: 8 }]}>
              已选择: {clicked}
            </Text>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}
      >
      </TestCase>
      <TestCase
        itShould="ActionSheet cancelButtonIndex=4"
        tags={['C_API']}
        initialState={false}
        arrange={({ setState }: any) =>
          <View>
            <View style={[{ padding: 8 }]}>
              <Button onPress={() => {
                showActionSheet1();
                setState(true);
              }}>{'showActionSheet'}</Button>
            </View>
            <Text style={[{ padding: 8 }]}>
              已选择: {clicked1}
            </Text>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}
      >
      </TestCase>
      <TestCase
        itShould="ActionSheet destructiveButtonIndex=4"
        tags={['C_API']}
        initialState={false}
        arrange={({ setState }: any) =>
          <View>
            <View style={[{ padding: 8 }]}>
              <Button onPress={() => {
                showActionSheet2();
                setState(true);
              }}>{'showActionSheet'}</Button>
            </View>
            <Text style={[{ padding: 8 }]}>
              已选择: {clicked2}
            </Text>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}
      >
      </TestCase>
      <TestCase
        itShould="ActionSheet title='兴趣爱好'"
        tags={['C_API']}
        initialState={false}
        arrange={({ setState }: any) =>
          <View>
            <View style={[{ padding: 8 }]}>
              <Button onPress={() => {
                showActionSheet3();
                setState(true);
              }}>{'showActionSheet'}</Button>
            </View>
            <Text style={[{ padding: 8 }]}>
              已选择: {clicked3}
            </Text>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}
      >
      </TestCase>
      <TestCase
        itShould="ActionSheet message='请选择兴趣爱好'"
        tags={['C_API']}
        initialState={false}
        arrange={({ setState }: any) =>
          <View>
            <View style={[{ padding: 8 }]}>
              <Button onPress={() => {
                showActionSheet4();
                setState(true);
              }}>{'showActionSheet'}</Button>
            </View>
            <Text style={[{ padding: 8 }]}>
              已选择: {clicked4}
            </Text>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}
      >
      </TestCase>
    </TestSuite>
  );
};


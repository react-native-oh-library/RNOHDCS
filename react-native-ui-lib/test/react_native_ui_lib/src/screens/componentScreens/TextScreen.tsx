import {TestCase, TestSuite} from '@rnoh/testerino';
import React, {Component} from 'react';
import {Alert, Animated, ScrollView} from 'react-native';
import {View, Text, Colors} from 'react-native-ui-lib';

class TextScreen extends Component {
  private toggle = false;
  private animatedValue = new Animated.Value(0);

  animate = () => {
    this.toggle = !this.toggle;
    Animated.timing(this.animatedValue, {
      toValue: Number(this.toggle),
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  renderDivider() {
    return <View height={2} bg-grey60 />;
  }

  render() {
    return (
      <ScrollView>
        <View style={{paddingBottom: 20}}>
          <TestSuite name="Text">
            <TestCase itShould="设置color属性">
              <View padding-20>
                <View row marginT-20>
                  <Text text60 color="red">
                    color: red
                  </Text>
                  <Text text60 color="blue">
                    color: blue
                  </Text>
                  <Text text60 purple30>
                    BIG TITLE
                  </Text>
                </View>
              </View>
            </TestCase>
            <TestCase itShould="设置center，uppercase，underline属性">
              <View padding-20>
                <Text center text70 marginB-10>
                  Center Text
                </Text>
                <Text uppercase text70>
                  uppercase
                </Text>
                <Text underline text70>
                  underline
                </Text>
              </View>
            </TestCase>
            <TestCase itShould="设置HighlightString，highlightStyle属性">
              <View padding-20>
                <Text text100 marginT-20>
                  /* highlightString属性: 'da' */
                </Text>
                <Text text60R highlightString={'da'}>
                  Dancing in The Dark
                </Text>
                <Text text100 marginT-30>
                  /* highlightString属性 'the', highlightStyle属性 color: yellow
                  */
                </Text>
                <Text
                  text60R
                  highlightString={'the'}
                  highlightStyle={{color: Colors.yellow30}}>
                  Dancing in The Dark
                </Text>
                <Text text100 marginT-30>
                  /*highlightString属性 ['dancing', 'da'], highlightStyle属性
                  fontWeight: '200', color: grey */
                </Text>
                <Text
                  text60R
                  highlightString={['dancing', 'da']}
                  highlightStyle={{fontWeight: '200', color: Colors.grey20}}>
                  Dancing in The Dark
                </Text>
                <Text text100 marginT-30>
                  /* highlightString属性: 数组对象格式 Array《Object》
                  object包含 string: 匹配字符 onpress: 点击回调 style: 样式,
                  highlightStyle属性 color: green */
                </Text>
                <Text
                  text60R
                  highlightString={[
                    {
                      string: 'Dancing',
                      onPress: () => {
                        Alert.alert('Dancing is pressed!');
                      },
                      style: {
                        color: Colors.blue10,
                        backgroundColor: Colors.green50,
                      },
                    },
                    {
                      string: 'laugh',
                      onPress: () => Alert.alert('laugh is pressed!'),
                      style: {
                        color: Colors.red50,
                        textDecorationLine: 'underline',
                        textDecorationColor: Colors.blue30,
                      },
                    },
                    {
                      string: 'more',
                      onPress: () => Alert.alert('more is pressed!'),
                    },
                  ]}
                  highlightStyle={{color: Colors.green30}}>
                  Dancing in The Dark, laughing drinking and more
                </Text>
              </View>
            </TestCase>
            <TestCase
              itShould="设置animated属性"
              initialState={false}
              arrange={({setState, reset}) => (
                <View padding-20 centerH>
                  <Text
                    text70
                    animated
                    style={{
                      transform: [
                        {
                          scale: this.animatedValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 2],
                          }),
                        },
                      ],
                    }}
                    onPress={() => {
                      this.animate();
                      setState(true);
                    }}>
                    Animated Text (press)
                  </Text>
                </View>
              )}
              assert={({state, expect}) => {
                expect(state).to.be.true;
              }}
            />
          </TestSuite>
        </View>
      </ScrollView>
    );
  }
}

export default TextScreen;

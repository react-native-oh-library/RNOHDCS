import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  View,
  Text,
  PanResponder,
  Button,
  StyleSheet,
  TouchableHighlight,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import { TypingAnimation } from 'react-native-typing-animation';

const TypingAnimationDemos = () => {
  const typingAnimationProps = [
    {
      key: 'dotColor',
      value: {
        dotColor: 'green'
      }
    },
    {
      key: 'dotColor',
      value: {
        dotColor: 'red'
      }
    },
    {
      key: 'dotRadius',
      value: {
        dotRadius: 5
      }
    },
    {
      key: 'dotRadius',
      value: {
        dotRadius: 10
      }
    },
    {
      key: 'dotMargin',
      value: {
        dotMargin: 10
      }
    },
    {
      key: 'dotMargin',
      value: {
        dotMargin: 15
      }
    },
    {
      key: 'dotAmplitude',
      value: {
        dotAmplitude: 1
      }
    },
    {
      key: 'dotAmplitude',
      value: {
        dotAmplitude: 1
      }
    },
    {
      key: 'dotSpeed',
      value: {
        dotSpeed: 10
      }
    },
    {
      key: 'dotSpeed',
      value: {
        dotSpeed: 0.5
      }
    },
    {
      key: 'dotY',
      value: {
        dotY: 30
      }
    },
    {
      key: 'dotY',
      value: {
        dotY: 20
      }
    },
    {
      key: 'dotX',
      value: {
        dotX: 12
      }
    },
    {
      key: 'dotX',
      value: {
        dotX: 15
      },
    },
  ];
  return (
    <ScrollView>
      <Tester>
        {typingAnimationProps.map((item) => {
          return (

            <TestCase itShould={item.key} tags={['C_API']}>
              <View
                style={{
                  height: 30,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <TypingAnimation
                  {...item.value}
                ></TypingAnimation>
              </View>
            </TestCase>
          );
        })}
      </Tester>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  animationContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  typingAnimation: {
    flexDirection: 'row',
    backgroundColor: 'pink', // 设置为水平方向排列光标
  },
});

export default TypingAnimationDemos;

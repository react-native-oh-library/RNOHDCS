import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, TextInput, Image, Button, Animated, Easing, } from 'react-native';
import { TestSuite, TestCase, Tester} from '@rnoh/testerino';
import heartImage from './heart.png';
import MaskedView from '@react-native-masked-view/masked-view';

export const MaskedViewTest = () => {
  const openerAnim = useRef(new Animated.Value(0)).current;
  const [animDone, setAnimDone] = useState(false);

  const appOpacity = {
    opacity: openerAnim.interpolate({
      inputRange: [0, 15, 30],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    }),
  };

  const appScale = {
    transform: [
      {
        scale: openerAnim.interpolate({
          inputRange: [0, 100],
          outputRange: [1.1, 1]
        }),
      },
    ],
  };

  useEffect(() => {
    Animated.timing(
      openerAnim,
      {
        toValue: 100,
        duration: 2000,
        easing: Easing.cubic,
        useNativeDriver: true
      }
    ).start(() => {
      setAnimDone(true);
    });
  }, []);
  return (
    <Tester>
      <TestSuite name="MaskedView">
        <TestCase
          tags={['C_API']}
          itShould="MaskedView for view">
          <MaskedView
            style={styles.maskedView}
            maskElement={
              <View style={styles.maskElementView}>
                <Text style={styles.maskElementText}>Basic Mask</Text>
              </View>
            }
          >
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ width: '25%', height: '100%', backgroundColor: Colors.americanBlue }} />
              <View style={{ width: '25%', height: '100%', backgroundColor: Colors.khaki }} />
              <View style={{ width: '25%', height: '100%', backgroundColor: Colors.bittersweet }} />
              <View style={{ width: '25%', height: '100%', backgroundColor: Colors.chineseWhite }} />
            </View>
          </MaskedView>
        </TestCase>
        <TestCase
          tags={['C_API']}
          itShould="MaskedView for image">
          <MaskedView
            style={styles.maskedView}
            maskElement={
              <View style={styles.maskElementView}>
                <Text style={styles.maskElementText}>Basic Mask</Text>
              </View>
            }
          >
            <Image
              resizeMode="cover"
              source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F6651224a-b18d-4456-97b8-14c6daad236d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694154457&t=37e024c7f8fb33d10e154f32353baf4a' }}
              style={styles.image}
            />
          </MaskedView>
        </TestCase>
        <TestCase
          tags={['C_API']}
          itShould="MaskedView for test">
          <MaskedView
            style={styles.maskedView}
            maskElement={
              <View style={styles.maskElementView}>
                <Text style={styles.maskElementText}>Basic Mask</Text>
              </View>
            }
          >
            <View style={styles.textView}>
              <Text style={styles.text}>
                Dear Doctor Brown, on the night that I go back in time, you will be shot
                by terrorists. Please take whatever precautions are necessary to prevent
                this terrible disaster. Your friend, Marty. Over there, on my hope
                chest. I've never seen purple underwear before, Calvin. They're late. My
                experiment worked. They're all exactly twenty-five minutes slow. Yeah,
                gimme a Tab. Remember, fellas, the future is in your hands. If you
                believe in progress, re-elect Mayor Red Thomas, progress is his middle
                name. Mayor Red Thomas's progress platform means more jobs, better
                education, bigger civic improvements, and lower taxes. On election day,
                cast your vote for a proven leader, re-elect Mayor Red Thomas...
              </Text>
            </View>
          </MaskedView>
        </TestCase>
        <TestCase
          tags={['C_API']}
          itShould="MaskedView for animated">
          {!animDone ? <View style={[StyleSheet.absoluteFill, styles.backgroundFillBlue]}></View> : null}
          <MaskedView
            style={styles.maskedViewAnim}
            maskElement={
              <View style={styles.maskWrapper}>
                <Animated.Image source={heartImage}
                  style={[styles.mask]} />
              </View>
            }>
            {!animDone ? <View style={[StyleSheet.absoluteFill, styles.backgroundFillWhite]}></View> : null}
            <Animated.View style={[styles.loginBox, appScale, appOpacity]}>
              <TextInput
                value=""
                placeholder="Username"
                placeholderTextColor="#666"
                style={styles.input}
              />
              <TextInput
                value=""
                placeholder="Password"
                placeholderTextColor="#666"
                secureTextEntry={true}
                style={styles.input}
              />
              <View style={styles.separator} />
              <Button title="Login" />
            </Animated.View>
          </MaskedView>
        </TestCase>
      </TestSuite>
    </Tester>
  );
};
const Colors = {
  americanBlue: '#324376',
  bittersweet: '#F76C5E',
  black: 'black',
  chineseWhite: '#E1E1E1',
  darkChestnut: '#96645D',
  khaki: '#F5DD90',
};

const styles = StyleSheet.create({
  maskedView: {
    width: '100%',
    height: '80'
  },
  maskedViewAnim: {
    flex: 1,
  },
  maskElementView: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  maskElementText: {
    color: Colors.black,
    width: '100%',
    height: 80,
    fontSize: 50,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 80,
  },
  textView: {
    fontSize: 20,
    alignItems: 'center',
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: Colors.darkChestnut,
    fontSize: 8,
    width: '100%',
    height: 80,
    fontVariant: ['small-caps'],
    fontWeight: 'bold',
  },
  maskWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 4,
    padding: 12,
    marginBottom: 12,
  },
  mask: {
    width: 150,
    height: 150,
  },
  loginBox: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#eee',
    padding: 40
  },
  backgroundFillBlue: {
    backgroundColor: '#0091ff',
  },
  backgroundFillWhite: {
    backgroundColor: 'white',
  },
});
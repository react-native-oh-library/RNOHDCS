/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import {TextShadow} from 'text-shadow-component';
const dumData = [
  {
    color: '#FFFFFF',
    background: '#232323',
    textShadow:
      '0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18',
  },
  {
    color: '#FFFFFF',
    background: '#333333',
    textShadow:
      '0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00',
  },
  {
    color: '#131313',
    background: '#e7e5e4',
    textShadow:
      '1px -1px 0 #767676, -1px 2px 1px #737272, -2px 4px 1px #767474, -3px 6px 1px #787777, -4px 8px 1px #7b7a7a, -5px 10px 1px #7f7d7d, -6px 12px 1px #828181, -7px 14px 1px #868585, -8px 16px 1px #8b8a89, -9px 18px 1px #8f8e8d, -10px 20px 1px #949392, -11px 22px 1px #999897, -12px 24px 1px #9e9c9c, -13px 26px 1px #a3a1a1, -14px 28px 1px #a8a6a6, -15px 30px 1px #adabab, -16px 32px 1px #b2b1b0, -17px 34px 1px #b7b6b5, -18px 36px 1px #bcbbba, -19px 38px 1px #c1bfbf, -20px 40px 1px #c6c4c4, -21px 42px 1px #cbc9c8, -22px 44px 1px #cfcdcd, -23px 46px 1px #d4d2d1, -24px 48px 1px #d8d6d5, -25px 50px 1px #dbdad9, -26px 52px 1px #dfdddc, -27px 54px 1px #e2e0df, -28px 56px 1px #e4e3e2',
  },
  {
    color: '#444444',
    background: '#FFFFFF',
    textShadow:
      '1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC',
  },
  {
    color: '#FFFFFF',
    background: '#b8b8b8',
    textShadow: '4px 3px 0 #7A7A7A',
  },
  {
    color: '#FFFFFF',
    background: '#912C22',
    textShadow: '0 0 10px #FFFFFF',
  },
  {
    color: '#d9d9d9',
    background: '#e8e8e8',
    textShadow:
      '-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)',
  },
  {
    color: '#333333',
    background: '#FFFFFF',
    textShadow: '2px 2px 0px #FFFFFF, 5px 4px 0px rgba(0,0,0,0.15)',
  },
  {
    color: '#FFFFFF',
    background: '#F7C1C1',
    textShadow: '4px 3px 0px #7A7A7A',
  },
  {
    color: '#FFFFFF',
    background: '#ece9e9',
    textShadow: '3px 5px 2px #474747',
  },
  {
    color: '#000000',
    background: '#FFFFFF',
    textShadow: '2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c',
  },
  {
    color: '#FFFFFF',
    background: '#FFFFFF',
    textShadow: '1px 3px 0 #969696, 1px 13px 5px #aba8a8',
  },
  {
    color: '#FFFFFF',
    background: '#FFFFFF',
    textShadow:
      '2px 2px 0 #4074b5, 2px -2px 0 #4074b5, -2px 2px 0 #4074b5, -2px -2px 0 #4074b5, 2px 0px 0 #4074b5, 0px 2px 0 #4074b5, -2px 0px 0 #4074b5, 0px -2px 0 #4074b5',
  },
  {
    color: '#A7DD3C',
    background: '#FFFFFF',
    textShadow:
      '2px 0 0px #800040, 3px 2px 0px rgba(77,0,38,0.5), 3px 0 3px #FF002B, 5px 0 3px #800015, 6px 2px 3px rgba(77,0,13,0.5), 6px 0 9px #FF5500, 8px 0 9px #802A00, 9px 2px 9px rgba(77,25,0,0.5), 9px 0 18px #FFD500, 11px 0 18px #806A00, 12px 2px 18px rgba(77,66,0,0.5), 12px 0 30px #D4FF00, 14px 0 30px #6A8000, 15px 2px 30px rgba(64,77,0,0.5), 15px 0 45px #80FF00, 17px 0 45px #408000, 17px 2px 45px rgba(38,77,0,0.5)',
  },
  {
    color: '#616161',
    background: '#bababa',
    textShadow: '#e0e0e0 1px 1px 0',
  },
  {
    color: '#FFFFFF',
    background: '#0e8dbc',
    textShadow:
      '0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)',
  },
  {
    color: '#202c2d',
    background: '#FFFFFF',
    textShadow:
      '0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93, -2px 1px #cdd2d5, -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93, -4px 3px #cdd2d5, -4px 5px #808d93, -5px 4px #cdd2d5, -5px 6px #808d93, -6px 5px #cdd2d5, -6px 7px #808d93, -7px 6px #cdd2d5, -7px 8px #808d93, -8px 7px #cdd2d5',
  },
  {
    color: '#FFFFFF',
    background: '#996D6D',
    textShadow: '#474747 3px 5px 2px',
  },
  {
    color: '#005900',
    background: '#FFFCA8',
    textShadow: '#FFFCA8 2px 2px 0px, #9C9C9C 4px 4px 0px',
  },
  {
    color: '#FFFFFF',
    background: '#333333',
    textShadow:
      '#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px',
  },
  {
    color: '#bc2e1e',
    background: '#edde9c',
    textShadow:
      '0 1px 0px #378ab4, 1px 0 0px #5dabcd, 1px 2px 1px #378ab4, 2px 1px 1px #5dabcd, 2px 3px 2px #378ab4, 3px 2px 2px #5dabcd, 3px 4px 2px #378ab4, 4px 3px 3px #5dabcd, 4px 5px 3px #378ab4, 5px 4px 2px #5dabcd, 5px 6px 2px #378ab4, 6px 5px 2px #5dabcd, 6px 7px 1px #378ab4, 7px 6px 1px #5dabcd, 7px 8px 0px #378ab4, 8px 7px 0px #5dabcd',
  },
  {
    color: '#e0dfdc',
    background: '#556677',
    textShadow:
      '0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a, 0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212, 0 22px 30px rgba(0,0,0,0.9)',
  },
  {
    color: '#e0eff2',
    background: '#3a50d9',
    textShadow: '-4px 3px 0 #3a50d9, -14px 7px 0 #0a0e27',
  },
  {
    color: '#FFFFFF',
    background: '#005DFF',
    textShadow:
      '-5px 5px 0px #00e6e6, -10px 10px 0px #01cccc, -15px 15px 0px #00bdbd',
  },
  {
    color: '#92a5de',
    background: '#FF0000',
    textShadow:
      '0px 0px 0 #899CD5, 1px 1px 0 #8194CD, 2px 2px 0 #788BC4, 3px 3px 0 #6F82BB, 4px 4px 0 #677AB3, 5px 5px 0 #5E71AA, 6px 6px 0 #5568A1, 7px 7px 0 #4C5F98, 8px 8px 0 #445790, 9px 9px 0 #3B4E87, 10px 10px 0 #32457E, 11px 11px 0 #2A3D76, 12px 12px 0 #21346D, 13px 13px 0 #182B64, 14px 14px 0 #0F225B, 15px 15px 0 #071A53, 16px 16px 0 #02114A, 17px 17px 0 #0B0841, 18px 18px 0 #130039, 19px 19px 0 #1C0930, 20px 20px 0 #251227, 21px 21px 20px rgba(0,0,0,1), 21px 21px 1px rgba(0,0,0,0.5), 0px 0px 20px rgba(0,0,0,.2)',
  },
  {
    color: 'rgba(255,255,255,.3)',
    background: '#1a1a1a',
    textShadow: '0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5)',
  },
  {
    color: 'rgba(0,0,0,0.6)',
    background: '#629552',
    textShadow:
      '2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3)',
  },
  {
    color: 'rgba(0,0,0,.6)',
    background: '#6e6e6e',
    textShadow: '3px 2px 3px rgba(255,255,255,.2)',
  },
  {
    color: '#92a5de',
    background: '#ff0000',
    textShadow:
      '-4px 4px rgba(179,179,179,.4), -3px 3px rgba(153,153,153,.2), -2px 2px rgba(179,179,179,.2), -1px 1px rgba(179,179,179,.2), 0px 0px rgba(128,128,128,.5), 1px -1px rgba(77,77,77,.6), 2px -2px rgba(77,77,77,.7), 3px -3px rgba(82,82,82,.8), 4px -4px rgba(77,77,77,.9), 5px -5px rgba(77,77,77,1)',
  },
];
const App = () => {
  return (
    <Tester>
      <TestSuite name="text-shadow-component">
        <TestCase itShould="renders various text shadows">
          <ScrollView>
            {dumData.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.containerWrapper,
                  {backgroundColor: item.background},
                ]}>
                <TextShadow
                  title={'Preview'}
                  textShadow={item.textShadow}
                  titleStyle={{fontSize: 60, color: item.color}}
                />
              </View>
            ))}
          </ScrollView>
        </TestCase>
      </TestSuite>
    </Tester>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerWrapper: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerNeonShadow: {
    backgroundColor: '#232323',
  },
  containerFlame: {
    backgroundColor: '#333333',
  },
  containerFlux: {
    backgroundColor: '#e7e5e4',
  },
  containerSmooth: {
    backgroundColor: '#ffffff',
  },
  containerRetro: {
    backgroundColor: '#b8b8b8',
  },
  containerGlowing: {
    backgroundColor: '#912c22',
  },
  containerTactile: {
    backgroundColor: '#e8e8e8',
  },
  containerNews: {
    backgroundColor: '#ffffff',
  },
  containerCandy: {
    backgroundColor: '#F7C1C1',
  },
  containerFloating: {
    backgroundColor: '#ece9e9',
  },
  container80s: {
    backgroundColor: '#ffffff',
  },
  containerDistance: {
    backgroundColor: '#ffffff',
  },
  containerOutline: {
    backgroundColor: '#ffffff',
  },
  containerLove: {
    backgroundColor: '#ffffff',
  },
  containerInset: {
    backgroundColor: '#bababa',
  },
  containerBlock: {
    backgroundColor: '#0e8dbc',
  },
  containerGrave: {
    backgroundColor: '#ffffff',
  },
});

export default App;

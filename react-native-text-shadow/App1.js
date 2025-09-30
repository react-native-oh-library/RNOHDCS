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

// 基线配置：其他用例仅改动一个属性
const base = {
  title: 'Preview',
  color: '#FFFFFF',
  background: '#232323',
  textShadow: '4px 4px 6px #FF0000',
};
const App = () => {
  return (
    <Tester>
      <TestSuite name="text-shadow-component">
        <ScrollView>
          <TestCase itShould="默认效果（基线）">
            <View style={[styles.containerWrapper, { backgroundColor: base.background }]}>
              <TextShadow
                title={base.title}
                textShadow={base.textShadow}
                titleStyle={{ fontSize: 60, color: base.color }}
              />
            </View>
          </TestCase>

          <TestCase itShould="仅修改文字颜色: titleStyle.color = #ffd900ff">
            <View style={[styles.containerWrapper, { backgroundColor: base.background }]}>
              <TextShadow
                title={base.title}
                textShadow={base.textShadow}
                titleStyle={{ fontSize: 60, color: '#ffd900ff'}}
              />
            </View>
          </TestCase>

          <TestCase itShould="仅修改文字颜色: titleStyle.color=rgba(97,255,34,1)">
            <View style={[styles.containerWrapper, { backgroundColor: base.background }]}>
              <TextShadow
                title={base.title}
                textShadow={base.textShadow}
                titleStyle={{ fontSize: 60, color: 'rgba(97,255,34,1)' }}
              />
            </View>
          </TestCase>

          <TestCase itShould="仅修改文字颜色透明度: titleStyle.color=rgba(255,255,255,0.8)">
            <View style={[styles.containerWrapper, { backgroundColor: base.background }]}>
              <TextShadow
                title={base.title}
                textShadow={base.textShadow}
                titleStyle={{ fontSize: 60, color: 'rgba(255,255,255,0.8)' }}
              />
            </View>
          </TestCase>

          <TestCase itShould="仅修改文字颜色透明度: titleStyle.color=rgba(255,255,255,0.3)">
            <View style={[styles.containerWrapper, { backgroundColor: base.background }]}>
              <TextShadow
                title={base.title}
                textShadow={base.textShadow}
                titleStyle={{ fontSize: 60, color: 'rgba(255,255,255,0.3)' }}
              />
            </View>
          </TestCase>

          <TestCase itShould="仅修改容器背景: background=#F7C1C1">
            <View style={[styles.containerWrapper, { backgroundColor: '#F7C1C1' }]}>
              <TextShadow
                title={base.title}
                textShadow={base.textShadow}
                titleStyle={{ fontSize: 60, color: base.color }}
              />
            </View>
          </TestCase>

          <TestCase itShould="仅修改 textShadow: 层数=5 偏移=[(4,4),(6,6),(8,8),(10,10),(12,12)] 模糊半径=6 颜色=#FF0000">
            <View style={[styles.containerWrapper, { backgroundColor: base.background }]}>
              <TextShadow
                title={base.title}
                textShadow={'4px 4px 6px #FF0000, 6px 6px 6px #FF0000, 8px 8px 6px #FF0000, 10px 10px 6px #FF0000, 12px 12px 6px #FF0000'}
                titleStyle={{ fontSize: 60, color: base.color }}
              />
            </View>
          </TestCase>

          <TestCase itShould="仅修改 textShadow: x轴=10">
            <View style={[styles.containerWrapper, { backgroundColor: base.background }]}>
              <TextShadow
                title={base.title}
                textShadow={'10px 4px 6px #FF0000'}
                titleStyle={{ fontSize: 60, color: base.color }}
              />
            </View>
          </TestCase>

          <TestCase itShould="仅修改 textShadow: y轴=12">
            <View style={[styles.containerWrapper, { backgroundColor: base.background }]}>
              <TextShadow
                title={base.title}
                textShadow={'4px 12px 6px #FF0000'}
                titleStyle={{ fontSize: 60, color: base.color }}
              />
            </View>
          </TestCase>

          <TestCase itShould="仅修改 textShadow: 模糊半径=24">
            <View style={[styles.containerWrapper, { backgroundColor: base.background }]}>
              <TextShadow
                title={base.title}
                textShadow={'4px 4px 24px #FF0000'}
                titleStyle={{ fontSize: 60, color: base.color }}
              />
            </View>
          </TestCase>

          <TestCase itShould="仅修改 textShadow: 颜色=#FF2D95">
            <View style={[styles.containerWrapper, { backgroundColor: base.background }]}>
              <TextShadow
                title={base.title}
                textShadow={'4px 4px 6px #FF2D95'}
                titleStyle={{ fontSize: 60, color: base.color }}
              />
            </View>
          </TestCase>

          <TestCase itShould="仅修改 textShadow: 颜色=rgba(255,0,0,0.6)">
            <View style={[styles.containerWrapper, { backgroundColor: base.background }]}>
              <TextShadow
                title={base.title}
                textShadow={'4px 4px 6px rgba(255,0,0,0.6)'}
                titleStyle={{ fontSize: 60, color: base.color }}
              />
            </View>
          </TestCase>

          <TestCase itShould="仅修改 textShadow: 颜色=rgb(255,0,0)">
            <View style={[styles.containerWrapper, { backgroundColor: base.background }]}>
              <TextShadow
                title={base.title}
                textShadow={'4px 4px 6px rgb(255,0,0)'}
                titleStyle={{ fontSize: 60, color: base.color }}
              />
            </View>
          </TestCase>

          <TestCase itShould="仅修改 textShadow: 透明度=0.3">
            <View style={[styles.containerWrapper, { backgroundColor: base.background }]}>
              <TextShadow
                title={base.title}
                textShadow={'4px 4px 6px rgba(255,0,0,0.3)'}
                titleStyle={{ fontSize: 60, color: base.color }}
              />
            </View>
          </TestCase>

          <TestCase itShould="仅修改 textShadow: 透明度=0.8">
            <View style={[styles.containerWrapper, { backgroundColor: base.background }]}>
              <TextShadow
                title={base.title}
                textShadow={'4px 4px 6px rgba(255,0,0,0.8)'}
                titleStyle={{ fontSize: 60, color: base.color }}
              />
            </View>
          </TestCase>

          <TestCase itShould="仅修改文字内容: title='Hello World'">
            <View style={[styles.containerWrapper, { backgroundColor: base.background }]}>
              <TextShadow
                title={'Hello World'}
                textShadow={base.textShadow}
                titleStyle={{ fontSize: 60, color: base.color }}
              />
            </View>
          </TestCase>

          <TestCase itShould="仅修改字体大小: titleStyle.fontSize=80">
            <View style={[styles.containerWrapper, { backgroundColor: base.background }]}>
              <TextShadow
                title={base.title}
                textShadow={base.textShadow}
                titleStyle={{ fontSize: 80, color: base.color }}
              />
            </View>
          </TestCase>
        </ScrollView>
      </TestSuite>
    </Tester>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

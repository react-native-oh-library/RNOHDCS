import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AutoDragSortableView} from 'react-native-drag-sort';
import {autoDragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 属性：
 * bottomViewHeight,【底部部组件高度，支撑算法】
 */

const defaultData = generateDataSource(30, '标题');

export const API_bottomViewHeight = () => {
  return (
    <Tester>
      <TestSuite name="bottomViewHeight">
        <TestCase
          itShould={`属性bottomViewHeight：该属性用来支撑库内部拖拽排序算法，一般与renderBottomView同时使用`}>
          <View style={{height: 485}}>
            <AutoDragSortableView
              parentWidth={356}
              dataSource={defaultData}
              childrenHeight={92}
              childrenWidth={89}
              renderBottomView={
                <View
                  style={{
                    height: 40,
                    backgroundColor: '#00ff00',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>我是底部部组件</Text>
                </View>
              }
              bottomViewHeight={40}
              renderItem={item => {
                return (
                  <View key={item.id} style={styles.childView}>
                    <Text style={styles.childText}>{item.title}</Text>
                  </View>
                );
              }}
            />
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
};

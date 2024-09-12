import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AutoDragSortableView} from 'react-native-drag-sort';
import {autoDragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 属性：
 * headerViewHeight,【头部组件高度，支撑算法】
 */

const defaultData = generateDataSource(60, '标题');

export const API_headerViewHeight = () => {
  return (
    <Tester>
      <TestSuite name="headerViewHeight">
        <TestCase
          itShould={`属性headerViewHeight：该属性用来支撑库内部拖拽排序算法，一般与renderHeaderView同时使用`}>
          <View style={{height: 485}}>
            <AutoDragSortableView
              parentWidth={356}
              dataSource={defaultData}
              childrenHeight={92}
              childrenWidth={89}
              renderHeaderView={
                <View
                  style={{
                    height: 40,
                    backgroundColor: '#00ff00',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>我是头部组件</Text>
                </View>
              }
              headerViewHeight={40}
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

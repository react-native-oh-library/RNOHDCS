import React from 'react';
import {View, Text} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {DragSortableView} from 'react-native-drag-sort';
import {dragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 属性：
 * keyExtractor,【子组件key值】
 */

const defaultData = generateDataSource(20, '标题');

export const API_keyExtractor = () => {
  return (
    <Tester style={{flex: 1}}>
      <TestSuite name="keyExtractor">
        <TestCase
          itShould={`方法keyExtractor,该方法返回一个key值，用来支持库内部算法，只能纯展示`}>
          <View>
            <DragSortableView
              parentWidth={356}
              dataSource={defaultData}
              childrenHeight={90}
              childrenWidth={88}
              keyExtractor={(item, index) => {
                return item.key;
              }}
              renderItem={item => {
                return (
                  <View key={item.id} style={{...styles.childView, height: 84}}>
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

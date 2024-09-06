import React from 'react';
import {View, Text} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AutoDragSortableView} from 'react-native-drag-sort';
import {autoDragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 属性：
 * keyExtractor,【子组件key值】
 */

const defaultData = generateDataSource(30, '标题');

export const API_keyExtractor = () => {
  return (
    <Tester>
      <TestSuite name="keyExtractor">
        <TestCase
          itShould={`方法keyExtractor,该方法返回一个key值，用来支持库内部算法，只能纯展示`}>
          <View style={{height: 490}}>
            <AutoDragSortableView
              parentWidth={356}
              dataSource={defaultData}
              childrenHeight={92}
              childrenWidth={89}
              keyExtractor={(item, index) => {
                return item.key;
              }}
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

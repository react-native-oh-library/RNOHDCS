import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {DragSortableView} from 'react-native-drag-sort';
import {dragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 属性：
 * sortable,【是否可拖拽】
 */

const defaultData = generateDataSource(20, '标题');

export const API_sortable = () => {
  const [sortable, setSortable] = useState(true);
  return (
    <Tester style={{flex: 1}}>
      <TestSuite name="sortable">
        <TestCase
          key={'sortable'}
          itShould={`属性sortable 当前为${sortable}`}
          tags={['C_API']}
          initialState={false}
          arrange={({setState}) => {
            return (
              <View>
                <DragSortableView
                  parentWidth={356}
                  dataSource={defaultData}
                  childrenHeight={92}
                  childrenWidth={89}
                  sortable={sortable}
                  renderItem={item => {
                    return (
                      <View key={item.id} style={styles.childView}>
                        <Text style={styles.childText}>{item.title}</Text>
                      </View>
                    );
                  }}
                />
                <Button
                  title="修改sortable"
                  onPress={() => {
                    setSortable(!sortable);
                    setState(true);
                  }}
                />
              </View>
            );
          }}
          assert={async ({expect, state}) => {
            expect(state).to.be.true;
          }}
        />
      </TestSuite>
    </Tester>
  );
};

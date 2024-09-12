import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AutoDragSortableView} from 'react-native-drag-sort';
import {autoDragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 属性：
 * fixedItems,【下标对应组件禁止拖拽】
 */

const defaultData = generateDataSource(60, '标题');

export const API_fixedItems = () => {
  const [fixedItems, setFixedItems] = useState<number[]>([]);
  return (
    <Tester>
      <TestSuite name="fixedItems">
        <TestCase
          key={'fixedItems'}
          itShould={`属性fixedItems 当前为${JSON.stringify(fixedItems)}`}
          tags={['C_API']}
          initialState={false}
          arrange={({setState}) => {
            return (
              <View style={{height: 510}}>
                <AutoDragSortableView
                  parentWidth={356}
                  dataSource={defaultData}
                  childrenHeight={92}
                  childrenWidth={89}
                  fixedItems={fixedItems}
                  renderItem={item => {
                    return (
                      <View key={item.id} style={styles.childView}>
                        <Text style={styles.childText}>{item.title}</Text>
                      </View>
                    );
                  }}
                />
                <Button
                  title="修改fixedItems"
                  onPress={() => {
                    setFixedItems([0, 1]);
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

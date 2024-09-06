import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AutoDragSortableView} from 'react-native-drag-sort';
import {autoDragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 必填属性：
 * childrenHeight,【子组件高度】
 */

const defaultData = generateDataSource(30, '标题');

export const API_childrenHeight = () => {
  const [childrenHeight, setChildrenHeight] = useState(92);

  return (
    <Tester>
      <TestSuite name="childrenHeight">
        <TestCase
          key={'childrenHeight'}
          itShould={`必填属性childrenHeight 当前为${childrenHeight}`}
          tags={['C_API']}
          initialState={false}
          arrange={({setState}) => {
            return (
              <View style={{height: 510}}>
                <AutoDragSortableView
                  parentWidth={356}
                  dataSource={defaultData}
                  childrenHeight={childrenHeight}
                  childrenWidth={89}
                  renderItem={item => {
                    return (
                      <View
                        key={item.id}
                        style={{
                          ...styles.childView,
                          height: childrenHeight - 5,
                        }}>
                        <Text style={styles.childText}>{item.title}</Text>
                      </View>
                    );
                  }}
                />
                <Button
                  title="修改childrenHeight"
                  onPress={() => {
                    setChildrenHeight(88);
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

import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AutoDragSortableView} from 'react-native-drag-sort';
import {autoDragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 必填属性：
 * childrenWidth,【子组件宽度】
 */

const defaultData = generateDataSource(60, '标题');

export const API_childrenWidth = () => {
  const [childrenWidth, setChildrenWidth] = useState(89);

  return (
    <Tester>
      <TestSuite name="childrenWidth">
        <TestCase
          key={'childrenWidth'}
          itShould={`必填属性childrenWidth 当前为${childrenWidth}`}
          tags={['C_API']}
          initialState={false}
          arrange={({setState}) => {
            return (
              <View style={{height: 510}}>
                <AutoDragSortableView
                  parentWidth={356}
                  dataSource={defaultData}
                  childrenHeight={92}
                  childrenWidth={childrenWidth}
                  renderItem={item => {
                    return (
                      <View
                        key={item.id}
                        style={{
                          ...styles.childView,
                          width: childrenWidth - 4,
                        }}>
                        <Text style={styles.childText}>{item.title}</Text>
                      </View>
                    );
                  }}
                />
                <Button
                  title="修改childrenWidth"
                  onPress={() => {
                    setChildrenWidth(84);
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

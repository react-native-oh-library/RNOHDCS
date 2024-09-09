import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {DragSortableView} from 'react-native-drag-sort';
import {dragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 属性：
 * minOpacity,【开启拖拽后的子项引用的透明度】
 */

const defaultData = generateDataSource(20, '标题');

export const API_minOpacity = () => {
  const [minOpacity, setMinOpacity] = useState(1);
  return (
    <Tester>
      <TestSuite name="minOpacity">
        <TestCase
          key={'minOpacity'}
          itShould={`属性minOpacity 当前为${minOpacity}`}
          tags={['C_API']}
          initialState={false}
          arrange={({setState}) => {
            return (
              <View style={{height: 510}}>
                <DragSortableView
                  parentWidth={356}
                  dataSource={defaultData}
                  childrenHeight={92}
                  childrenWidth={89}
                  minOpacity={minOpacity}
                  renderItem={item => {
                    return (
                      <View key={item.id} style={styles.childView}>
                        <Text style={styles.childText}>{item.title}</Text>
                      </View>
                    );
                  }}
                />
                <Button
                  title="修改minOpacity"
                  onPress={() => {
                    setMinOpacity(0.4);
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

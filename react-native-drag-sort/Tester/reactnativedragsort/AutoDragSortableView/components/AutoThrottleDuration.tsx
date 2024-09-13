import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AutoDragSortableView} from 'react-native-drag-sort';
import {autoDragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 属性：
 * autoThrottleDuration,【子组件拖动到指定位置所用的时间】
 */

const defaultData = generateDataSource(60, '标题');

export const API_autoThrottleDuration = () => {
  const [autoThrottleDuration, setAutoThrottleDuration] = useState(10);
  return (
    <Tester>
      <TestSuite name="autoThrottleDuration">
        <TestCase
          key={'autoThrottleDuration'}
          itShould={`属性autoThrottleDuration 当前为${autoThrottleDuration}`}
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
                  autoThrottleDuration={autoThrottleDuration}
                  renderItem={item => {
                    return (
                      <View key={item.id} style={styles.childView}>
                        <Text style={styles.childText}>{item.title}</Text>
                      </View>
                    );
                  }}
                />
                <Button
                  title="修改autoThrottleDuration"
                  onPress={() => {
                    setAutoThrottleDuration(500);
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

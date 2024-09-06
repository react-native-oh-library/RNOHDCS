import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AutoDragSortableView} from 'react-native-drag-sort';
import {autoDragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 属性：
 * delayLongPress,【触发拖拽开始所用的时间】
 */

const defaultData = generateDataSource(30, '标题');

export const API_delayLongPress = () => {
  const [delayLongPress, setDelayLongPress] = useState(0);
  return (
    <Tester>
      <TestSuite name="delayLongPress">
        <TestCase
          key={'delayLongPress'}
          itShould={`属性delayLongPress 当前为${delayLongPress}`}
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
                  delayLongPress={delayLongPress}
                  renderItem={item => {
                    return (
                      <View key={item.id} style={styles.childView}>
                        <Text style={styles.childText}>{item.title}</Text>
                      </View>
                    );
                  }}
                />
                <Button
                  title="修改delayLongPress"
                  onPress={() => {
                    setDelayLongPress(1000);
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

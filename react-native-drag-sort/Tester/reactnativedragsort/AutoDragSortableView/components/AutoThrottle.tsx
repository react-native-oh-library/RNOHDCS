import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AutoDragSortableView} from 'react-native-drag-sort';
import {autoDragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 属性：
 * autoThrottle,【滚轮移动的速度】
 */

const defaultData = generateDataSource(60, '标题');

export const API_autoThrottle = () => {
  const [autoThrottle, setAutoThrottle] = useState(2);
  return (
    <Tester>
      <TestSuite name="autoThrottle">
        <TestCase
          key={'autoThrottle'}
          itShould={`属性autoThrottle 当前为${autoThrottle}`}
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
                  autoThrottle={autoThrottle}
                  renderItem={item => {
                    return (
                      <View key={item.id} style={styles.childView}>
                        <Text style={styles.childText}>{item.title}</Text>
                      </View>
                    );
                  }}
                />
                <Button
                  title="修改autoThrottle"
                  onPress={() => {
                    setAutoThrottle(5);
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

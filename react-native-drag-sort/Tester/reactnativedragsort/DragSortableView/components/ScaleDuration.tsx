import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {DragSortableView} from 'react-native-drag-sort';
import {dragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 属性：
 * scaleDuration,【长按子组件，复制引用所花费的时间】
 */

const defaultData = generateDataSource(20, '标题');

export const API_scaleDuration = () => {
  const [scaleDuration, setScaleDuration] = useState(100);
  return (
    <Tester>
      <TestSuite name="scaleDuration">
        <TestCase
          key={'scaleDuration'}
          itShould={`属性scaleDuration 当前为${scaleDuration}`}
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
                  scaleDuration={scaleDuration}
                  renderItem={item => {
                    return (
                      <View key={item.id} style={styles.childView}>
                        <Text style={styles.childText}>{item.title}</Text>
                      </View>
                    );
                  }}
                />
                <Button
                  title="修改scaleDuration"
                  onPress={() => {
                    setScaleDuration(500);
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

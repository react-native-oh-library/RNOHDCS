import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {DragSortableView} from 'react-native-drag-sort';
import {dragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 属性：
 * marginChildrenBottom,【子组件下边距】
 */

const defaultData = generateDataSource(16, '标题');

export const API_marginChildrenBottom = () => {
  const [marginChildrenBottom, setMarginChildrenBottom] = useState(0);
  return (
    <Tester>
      <TestSuite name="marginChildrenBottom">
        <TestCase
          key={'marginChildrenBottom'}
          itShould={`属性marginChildrenBottom 当前为${marginChildrenBottom}`}
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
                  marginChildrenBottom={marginChildrenBottom}
                  renderItem={item => {
                    return (
                      <View key={item.id} style={styles.childView}>
                        <Text style={styles.childText}>{item.title}</Text>
                      </View>
                    );
                  }}
                />
                <Button
                  title="修改marginChildrenBottom"
                  onPress={() => {
                    setMarginChildrenBottom(20);
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

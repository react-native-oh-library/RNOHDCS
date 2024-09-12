import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AutoDragSortableView} from 'react-native-drag-sort';
import {autoDragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 属性：
 * marginChildrenTop,【子组件上边距】
 */

const defaultData = generateDataSource(60, '标题');

export const API_marginChildrenTop = () => {
  const [marginChildrenTop, setMarginChildrenTop] = useState(0);
  return (
    <Tester>
      <TestSuite name="marginChildrenTop">
        <TestCase
          key={'marginChildrenTop'}
          itShould={`属性marginChildrenTop 当前为${marginChildrenTop}`}
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
                  marginChildrenTop={marginChildrenTop}
                  renderItem={item => {
                    return (
                      <View key={item.id} style={styles.childView}>
                        <Text style={styles.childText}>{item.title}</Text>
                      </View>
                    );
                  }}
                />
                <Button
                  title="修改marginChildrenTop"
                  onPress={() => {
                    setMarginChildrenTop(20);
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

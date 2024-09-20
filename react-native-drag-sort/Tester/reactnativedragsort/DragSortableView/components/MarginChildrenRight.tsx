import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {DragSortableView} from 'react-native-drag-sort';
import {dragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 属性：
 * marginChildrenRight,【子组件右边距】
 */

const defaultData = generateDataSource(16, '标题');

export const API_marginChildrenRight = () => {
  const [marginChildrenRight, setMarginChildrenRight] = useState(0);
  return (
    <Tester style={{flex: 1}}>
      <TestSuite name="marginChildrenRight">
        <TestCase
          key={'marginChildrenRight'}
          itShould={`属性marginChildrenRight 当前为${marginChildrenRight}`}
          tags={['C_API']}
          initialState={false}
          arrange={({setState}) => {
            return (
              <View>
                <DragSortableView
                  parentWidth={356}
                  dataSource={defaultData}
                  childrenHeight={80}
                  childrenWidth={89}
                  marginChildrenRight={marginChildrenRight}
                  renderItem={item => {
                    return (
                      <View
                        key={item.id}
                        style={{...styles.childView, height: 74}}>
                        <Text style={styles.childText}>{item.title}</Text>
                      </View>
                    );
                  }}
                />
                <Button
                  title="修改marginChildrenRight"
                  onPress={() => {
                    setMarginChildrenRight(20);
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

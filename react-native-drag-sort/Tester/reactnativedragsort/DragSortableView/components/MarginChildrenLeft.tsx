import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {DragSortableView} from 'react-native-drag-sort';
import {dragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 属性：
 * marginChildrenLeft,【子组件左边距】
 */

const defaultData = generateDataSource(16, '标题');

export const API_marginChildrenLeft = () => {
  const [marginChildrenLeft, setMarginChildrenLeft] = useState(0);
  return (
    <Tester style={{flex: 1}}>
      <TestSuite name="marginChildrenLeft">
        <TestCase
          key={'marginChildrenLeft'}
          itShould={`属性marginChildrenLeft 当前为${marginChildrenLeft}`}
          tags={['C_API']}
          initialState={false}
          arrange={({setState}) => {
            return (
              <View>
                <DragSortableView
                  parentWidth={356}
                  dataSource={defaultData}
                  childrenHeight={80}
                  childrenWidth={88}
                  marginChildrenLeft={marginChildrenLeft}
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
                  title="修改marginChildrenLeft"
                  onPress={() => {
                    setMarginChildrenLeft(15);
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

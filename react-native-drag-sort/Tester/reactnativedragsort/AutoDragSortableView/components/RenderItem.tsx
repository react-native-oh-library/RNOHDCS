import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AutoDragSortableView} from 'react-native-drag-sort';
import {autoDragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 必填属性：
 * renderItem,【渲染子组件】
 */

const defaultData = generateDataSource(30, '标题');

export const API_renderItem = () => {
  const [renderItem, setRenderItem] = useState('');

  return (
    <Tester>
      <TestSuite name="renderItem">
        <TestCase
          key={'renderItem'}
          itShould={`必填属性renderItem`}
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
                  renderItem={item => {
                    return (
                      <View
                        key={item.id}
                        style={
                          renderItem === '#ff0'
                            ? {...styles.childView, backgroundColor: '#ff0'}
                            : styles.childView
                        }>
                        <Text style={styles.childText}>{item.title}</Text>
                      </View>
                    );
                  }}
                />
                <Button
                  title="修改renderItem"
                  onPress={() => {
                    setRenderItem('#ff0');
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

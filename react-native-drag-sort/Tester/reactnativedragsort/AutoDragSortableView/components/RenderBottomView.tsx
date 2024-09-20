import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AutoDragSortableView} from 'react-native-drag-sort';
import {autoDragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 属性：
 * renderBottomView,【渲染底部组件】
 */

const defaultData = generateDataSource(60, '标题');

export const API_renderBottomView = () => {
  const [renderBottomView, setRenderBottomView] = useState<any>();
  return (
    <Tester>
      <TestSuite name="renderBottomView">
        <TestCase
          key={'renderBottomView'}
          itShould={`属性renderBottomView`}
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
                  renderBottomView={renderBottomView}
                  bottomViewHeight={renderBottomView ? 40 : 0}
                  renderItem={item => {
                    return (
                      <View key={item.id} style={styles.childView}>
                        <Text style={styles.childText}>{item.title}</Text>
                      </View>
                    );
                  }}
                />
                <Button
                  title="修改renderBottomView"
                  onPress={() => {
                    setRenderBottomView(
                      <View
                        style={{
                          height: 40,
                          backgroundColor: '#00ff00',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text>我是底部组件</Text>
                      </View>,
                    );
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

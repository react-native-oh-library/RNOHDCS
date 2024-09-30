import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AutoDragSortableView} from 'react-native-drag-sort';
import {autoDragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 属性：
 * renderHeaderView,【渲染头部组件】
 */

const defaultData = generateDataSource(60, '标题');

export const API_renderHeaderView = () => {
  const [renderHeaderView, setRenderHeaderView] = useState<any>();
  return (
    <Tester>
      <TestSuite name="renderHeaderView">
        <TestCase
          key={'renderHeaderView'}
          itShould={`属性renderHeaderView`}
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
                  renderHeaderView={renderHeaderView}
                  headerViewHeight={renderHeaderView ? 40 : 0}
                  renderItem={item => {
                    return (
                      <View key={item.id} style={styles.childView}>
                        <Text style={styles.childText}>{item.title}</Text>
                      </View>
                    );
                  }}
                />
                <Button
                  title="修改renderHeaderView"
                  onPress={() => {
                    setRenderHeaderView(
                      <View
                        style={{
                          height: 40,
                          backgroundColor: '#ffff00',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text>我是头部组件</Text>
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

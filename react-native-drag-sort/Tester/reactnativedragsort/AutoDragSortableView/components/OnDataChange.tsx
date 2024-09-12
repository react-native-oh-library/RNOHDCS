import React from 'react';
import {View, Text, Alert} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AutoDragSortableView} from 'react-native-drag-sort';
import {autoDragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 方法：
 * onDataChange,【数据改变后触发】
 */

const defaultData = generateDataSource(60, '标题');

export const API_onDataChange = () => {
  return (
    <Tester>
      <TestSuite name="onDataChange">
        <TestCase
          key={'onDataChange'}
          itShould={`方法onDataChange`}
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
                  onDataChange={() => {
                    Alert.alert('触发onDataChange', '', [
                      {text: 'OK', onPress: () => setState(true)},
                    ]);
                  }}
                  renderItem={item => {
                    return (
                      <View key={item.id} style={styles.childView}>
                        <Text style={styles.childText}>{item.title}</Text>
                      </View>
                    );
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

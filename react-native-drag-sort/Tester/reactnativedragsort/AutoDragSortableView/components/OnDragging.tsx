import React from 'react';
import {View, Text, Alert} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AutoDragSortableView} from 'react-native-drag-sort';
import {autoDragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 方法：
 * onDragging,【拖拽中】
 */

const defaultData = generateDataSource(60, '标题');

export const API_onDragging = () => {
  let count = 0;

  return (
    <Tester>
      <TestSuite name="onDragging">
        <TestCase
          key={'onDragging'}
          itShould={`方法onDragging`}
          tags={['C_API']}
          initialState={false}
          arrange={({setState, state}) => {
            return (
              <View style={{height: 510}}>
                <AutoDragSortableView
                  parentWidth={356}
                  dataSource={defaultData}
                  childrenHeight={92}
                  childrenWidth={89}
                  onDragging={() => {
                    count = count + 1;
                    count === 1 &&
                      Alert.alert('触发onDragging', '', [
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

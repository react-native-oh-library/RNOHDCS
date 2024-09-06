import React, {useState} from 'react';
import {View, Text, Alert, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AutoDragSortableView} from 'react-native-drag-sort';
import {autoDragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 方法：
 * onScrollRef,【滚轮引用】
 */

const defaultData = generateDataSource(30, '标题');

export const API_onScrollRef = () => {
  const [hasMark, setHasMark] = useState(false);
  let count = 0;
  return (
    <Tester>
      <TestSuite name="onScrollRef">
        <TestCase
          key={'onScrollRef'}
          itShould={`方法onScrollRef`}
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
                  onScrollRef={() => {
                    count = count + 1;
                    if (hasMark && count === 2) {
                      setHasMark(false);
                      Alert.alert('onScrollRef已触发', '', [
                        {
                          text: 'OK',
                          onPress: () => setState(true),
                        },
                      ]);
                    }
                  }}
                  renderItem={item => {
                    return (
                      <View key={item.id} style={styles.childView}>
                        <Text style={styles.childText}>{item.title}</Text>
                      </View>
                    );
                  }}
                />
                <Button
                  title="触发onScrollRef"
                  onPress={() => setHasMark(true)}
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

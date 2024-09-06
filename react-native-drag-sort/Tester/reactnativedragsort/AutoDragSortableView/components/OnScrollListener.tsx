import React, {useState} from 'react';
import {View, Text, Alert, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AutoDragSortableView} from 'react-native-drag-sort';
import {autoDragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 方法：
 * onScrollListener,【滚轮监听】
 */

const defaultData = generateDataSource(30, '标题');

export const API_onScrollListener = () => {
  const [hasMark, setHasMark] = useState(false);
  let count = 0;

  return (
    <Tester>
      <TestSuite name="onScrollListener">
        <TestCase
          key={'onScrollListener'}
          itShould={`方法onScrollListener`}
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
                  onScrollListener={() => {
                    count = count + 1;
                    if (hasMark && count === 2) {
                      Alert.alert('onScrollListener已触发', '', [
                        {
                          text: 'OK',
                          onPress: () => {
                            setState(true);
                            setHasMark(false);
                          },
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
                  title="触发onScrollListener"
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

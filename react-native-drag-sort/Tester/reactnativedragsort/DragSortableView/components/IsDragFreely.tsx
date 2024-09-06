import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {DragSortableView} from 'react-native-drag-sort';
import {dragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 属性：
 * isDragFreely,【是否可以自由拖拽】
 */

const defaultData = generateDataSource(16, '标题');

export const API_isDragFreely = () => {
  const [isDragFreely, setIsDragFreely] = useState(false);
  return (
    <Tester>
      <TestSuite name="isDragFreely">
        <TestCase
          key={'isDragFreely'}
          itShould={`属性isDragFreely 当前为${isDragFreely}`}
          tags={['C_API']}
          initialState={false}
          arrange={({setState}) => {
            return (
              <View style={{height: 510}}>
                <DragSortableView
                  parentWidth={356}
                  dataSource={defaultData}
                  childrenHeight={92}
                  childrenWidth={89}
                  isDragFreely={isDragFreely}
                  renderItem={item => {
                    return (
                      <View key={item.id} style={styles.childView}>
                        <Text style={styles.childText}>{item.title}</Text>
                      </View>
                    );
                  }}
                />
                <Button
                  title="修改isDragFreely"
                  onPress={() => {
                    setIsDragFreely(true);
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

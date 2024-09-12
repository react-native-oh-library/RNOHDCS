import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AutoDragSortableView} from 'react-native-drag-sort';
import {autoDragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 必填属性：
 * dataSource,【数据源】
 */

const defaultData = generateDataSource(60, '标题');

export const API_dataSource = () => {
  const [dataSource, setDataSource] = useState(defaultData);
  return (
    <Tester>
      <TestSuite name="dataSource">
        <TestCase
          key={'dataSource'}
          itShould={`必填属性dataSource`}
          tags={['C_API']}
          initialState={false}
          arrange={({setState}) => {
            return (
              <View style={{height: 510}}>
                <AutoDragSortableView
                  parentWidth={356}
                  dataSource={dataSource}
                  childrenHeight={92}
                  childrenWidth={89}
                  renderItem={item => {
                    return (
                      <View key={item.id} style={styles.childView}>
                        <Text style={styles.childText}>{item.title}</Text>
                      </View>
                    );
                  }}
                />
                <Button
                  title="修改dataSource"
                  onPress={() => {
                    setDataSource(generateDataSource(30, '活动'));
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

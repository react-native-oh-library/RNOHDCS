import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AutoDragSortableView} from 'react-native-drag-sort';
import {autoDragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 属性：
 * scrollIndicatorInsets,【滚轮偏移量】
 */

const defaultData = generateDataSource(60, '标题');

export const API_scrollIndicatorInsets = () => {
  const [scrollIndicatorInsets, setScrollIndicatorInsets] = useState({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  });

  return (
    <Tester>
      <TestSuite name="scrollIndicatorInsets">
        <TestCase
          key={'scrollIndicatorInsets'}
          itShould={`属性scrollIndicatorInsets 当前为${JSON.stringify(
            scrollIndicatorInsets,
          )}；该属性依托于ScrollVIew，而ScrollVIew上该属性仅支持iOS`}
          tags={['C_API']}
          initialState={false}
          arrange={({setState}) => {
            return (
              <View style={{height: 480}}>
                <AutoDragSortableView
                  parentWidth={356}
                  dataSource={defaultData}
                  childrenHeight={92}
                  childrenWidth={89}
                  scrollIndicatorInsets={scrollIndicatorInsets}
                  renderItem={item => {
                    return (
                      <View key={item.id} style={styles.childView}>
                        <Text style={styles.childText}>{item.title}</Text>
                      </View>
                    );
                  }}
                />
                <Button
                  title="修改scrollIndicatorInsets"
                  onPress={() => {
                    setScrollIndicatorInsets({
                      top: 10,
                      left: 10,
                      bottom: 10,
                      right: 10,
                    });
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

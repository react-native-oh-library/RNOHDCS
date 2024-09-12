import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {DragSortableView} from 'react-native-drag-sort';
import {dragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 属性：
 * scaleStatus,【被拾取的组件缩放样式】
 */

const defaultData = generateDataSource(8, '标题');

export const API_scaleStatus = () => {
  const [scaleStatusX, setScaleStatusX] = useState('scale');
  const [scaleStatusY, setScaleStatusY] = useState('scale');
  return (
    <Tester style={{flex: 1}}>
      <TestSuite name="scaleStatus">
        <TestCase
          key={'scaleStatusX'}
          itShould={`属性scaleStatus，第一个当前为${scaleStatusX} `}
          tags={['C_API']}
          initialState={false}
          arrange={({setState}) => {
            return (
              <View>
                <DragSortableView
                  parentWidth={356}
                  dataSource={defaultData}
                  childrenHeight={88}
                  childrenWidth={89}
                  maxScale={1.2}
                  scaleStatus={scaleStatusX as any}
                  renderItem={item => {
                    return (
                      <View
                        key={item.id}
                        style={{...styles.childView, height: 84}}>
                        <Text style={styles.childText}>{item.title}</Text>
                      </View>
                    );
                  }}
                />
                <Button
                  title="修改scaleStatus"
                  onPress={() => {
                    setScaleStatusX('scaleX');
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
        <TestCase
          key={'scaleStatusY'}
          itShould={`属性scaleStatus，第二个当前为${scaleStatusY} `}
          tags={['C_API']}
          initialState={false}
          arrange={({setState}) => {
            return (
              <View style={{height: 200}}>
                <DragSortableView
                  parentWidth={356}
                  dataSource={defaultData}
                  childrenHeight={88}
                  childrenWidth={89}
                  maxScale={1.2}
                  scaleStatus={scaleStatusY as any}
                  renderItem={item => {
                    return (
                      <View
                        key={item.id}
                        style={{...styles.childView, height: 84}}>
                        <Text style={styles.childText}>{item.title}</Text>
                      </View>
                    );
                  }}
                />
                <Button
                  title="修改scaleStatus"
                  onPress={() => {
                    setScaleStatusY('scaleY');
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

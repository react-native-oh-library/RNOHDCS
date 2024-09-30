import React, {useRef, useState} from 'react';
import {View, TouchableOpacity, Image, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AnySizeDragSortableView} from 'react-native-drag-sort';
import {generateDataSource} from '../../libs';
import { anySizeDragSortableVIewStyle as styles } from '../../styles';

/**
 * 必填属性：
 * renderItem,【渲染子组件】
 */

const defaultData = generateDataSource(60, '标题');

export const API_renderItem = () => {
  const ref = useRef();
  const [dataSource, setDataSource] = useState(defaultData);
  const [movedKey, setMovedKey] = useState<null | string | number>(null);
  const [suffix, setSuffix] = useState('');

  const renderItem = (item: any, index: number, isMoved: boolean) => {
    return (
      <TouchableOpacity
        onLongPress={() => {
          setMovedKey(item.id);
          ref?.current?.startTouch(item, index);
        }}
        onPressOut={() => {
          ref?.current?.onPressOut();
          setMovedKey(null);
        }}>
        <View
          style={[
            styles[`childWrap${suffix}`],
            {opacity: movedKey === item.id && !isMoved ? 1 : 1},
          ]}>
          <View
            style={[
              styles[`child${suffix}`],
              {
                width: item.width,
                height: item.height,
                backgroundColor: isMoved ? 'red' : '#f39c12',
              },
            ]}>
            {isMoved && (
              <View style={styles[`childIconSwipe${suffix}`]}>
                <Image
                  source={require('../../images/animal1.png')}
                  style={styles[`childIcon${suffix}`]}
                />
              </View>
            )}
            <View style={styles[`childTextSwipe${suffix}`]}>
              <Text style={styles[`childText${suffix}`]}>{item.title}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Tester>
      <TestSuite name="renderItem">
        <TestCase
          key={'renderItem'}
          itShould={`必填方法renderItem：渲染子组件，可自定义样式`}
          tags={['C_API']}
          initialState={false}
          arrange={({setState, state}) => {
            return (
              <View style={{height: 510}}>
                <AnySizeDragSortableView
                  ref={ref}
                  dataSource={dataSource}
                  keyExtractor={item => item.id}
                  movedWrapStyle={styles.childMoved}
                  renderItem={renderItem as any}
                  onDragEnd={() => setMovedKey(null)}
                  onDataChange={(data, callback) => {
                    setDataSource(data);
                    callback();
                  }}
                />
                <Button
                  title="修改renderItem"
                  onPress={() => {
                    if (!state) {
                      setSuffix('Change');
                      setState(true);
                    }
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

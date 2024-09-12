import React, {useRef, useState} from 'react';
import {View, TouchableOpacity, Image, Text, Alert} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AnySizeDragSortableView} from 'react-native-drag-sort';
import {generateDataSource} from '../../libs';
import { anySizeDragSortableVIewStyle as styles } from '../../styles';

/**
 * 方法：
 * onDragEnd,【拖拽结束后重置被移动的key值】
 */

const defaultData = generateDataSource(60, '标题');

export const API_onDragEnd = () => {
  const ref = useRef();
  const [dataSource, setDataSource] = useState(defaultData);
  const [movedKey, setMovedKey] = useState<null | string | number>(null);

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
            styles.childWrap,
            {opacity: movedKey === item.id && !isMoved ? 1 : 1},
          ]}>
          <View
            style={[
              styles.child,
              {
                width: item.width,
                height: item.height,
                backgroundColor: isMoved ? 'red' : '#f39c12',
              },
            ]}>
            {isMoved && (
              <View style={styles.childIconSwipe}>
                <Image
                  source={require('../../images/animal1.png')}
                  style={styles.childIcon}
                />
              </View>
            )}
            <View style={styles.childTextSwipe}>
              <Text style={styles.childText}>{item.title}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Tester>
      <TestSuite name="onDragEnd">
        <TestCase
          key={'onDragEnd'}
          itShould={`必填方法onDragEnd：拖拽结束后重置被移动的key值`}
          tags={['C_API']}
          initialState={false}
          arrange={({setState}) => {
            return (
              <View style={{height: 490}}>
                <AnySizeDragSortableView
                  ref={ref}
                  dataSource={dataSource}
                  keyExtractor={item => item.id}
                  movedWrapStyle={styles.childMoved}
                  renderItem={renderItem as any}
                  onDragEnd={() => {
                    Alert.alert('触发：onDragEnd', '', [
                      {
                        text: 'OK',
                        onPress: () => {
                          setMovedKey(null);
                          setState(true);
                        },
                      },
                    ]);
                  }}
                  onDataChange={(data, callback) => {
                    setDataSource(data);
                    callback();
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

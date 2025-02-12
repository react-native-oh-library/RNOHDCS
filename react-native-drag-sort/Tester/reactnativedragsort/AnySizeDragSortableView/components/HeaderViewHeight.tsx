import React, {useRef, useState} from 'react';
import {View, TouchableOpacity, Image, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AnySizeDragSortableView} from 'react-native-drag-sort';
import {generateDataSource} from '../../libs';
import {anySizeDragSortableVIewStyle as styles} from '../../styles';

/**
 * 属性：
 * headerViewHeight,【头部组件高度】
 */

const defaultData = generateDataSource(60, '标题');

export const API_headerViewHeight = () => {
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
      <TestSuite name="headerViewHeight">
        <TestCase
          itShould={`属性headerViewHeight：头部组件高度，用来支撑库内部算法`}>
          <View style={{height: 480}}>
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
              renderHeaderView={
                <View
                  style={{
                    height: 40,
                    backgroundColor: '#00ff00',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>我是头部组件</Text>
                </View>
              }
              headerViewHeight={40}
            />
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
};

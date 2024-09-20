import React, {useRef, useState} from 'react';
import {View, TouchableOpacity, Image, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AnySizeDragSortableView} from 'react-native-drag-sort';
import {generateDataSource} from '../../libs';
import {anySizeDragSortableVIewStyle as styles} from '../../styles';

/**
 * 属性：
 * childMarginRight ,【子组件有边距】
 */

const defaultData = generateDataSource(60, '标题');

export const API_childMarginRight = () => {
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
      <TestSuite name="childMarginRight">
        <TestCase
          itShould={`属性childMarginRight，该属性是子组件有边距，用来计算areaOverlapRatio属性，如果renderItem函数中返回的布局外容器有marginBottom，请务必填入marginBottom的值，否则areaOverlapRatio的值会不精确`}>
          <View style={{height: 450}}>
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
              childMarginRight={0}
            />
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
};

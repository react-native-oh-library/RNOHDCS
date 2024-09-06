import React, {useRef, useState} from 'react';
import {View, TouchableOpacity, Image, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AnySizeDragSortableView} from 'react-native-drag-sort';
import {generateDataSource} from '../../libs';
import {anySizeDragSortableVIewStyle as styles} from '../../styles';

/**
 * 必填属性：
 * movedWrapStyle,【指定子项的key值】
 */

const defaultData = generateDataSource(30, '标题');

export const API_movedWrapStyle = () => {
  const ref = useRef();
  const [dataSource, setDataSource] = useState(defaultData);
  const [movedWrapStyle, setMovedWrapStyle] = useState(styles.childMoved);
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
      <TestSuite name="movedWrapStyle">
        <TestCase
          key={'movedWrapStyle'}
          itShould={`必填属性movedWrapStyle：${JSON.stringify(movedWrapStyle)}`}
          tags={['C_API']}
          initialState={false}
          arrange={({setState}) => {
            return (
              <View style={{height: 480}}>
                <AnySizeDragSortableView
                  ref={ref}
                  dataSource={dataSource}
                  keyExtractor={item => item.id}
                  movedWrapStyle={movedWrapStyle}
                  renderItem={renderItem as any}
                  onDragEnd={() => setMovedKey(null)}
                  onDataChange={(data, callback) => {
                    setDataSource(data);
                    callback();
                  }}
                />
                <Button
                  title="修改movedWrapStyle"
                  onPress={() => {
                    setMovedWrapStyle(styles.childMovedChange);
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

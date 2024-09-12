import React, {useRef, useState} from 'react';
import {View, TouchableOpacity, Image, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AnySizeDragSortableView} from 'react-native-drag-sort';
import {generateDataSource} from '../../libs';
import {anySizeDragSortableVIewStyle as styles} from '../../styles';

/**
 * 属性：
 * autoThrottle,【滚轮移动的速度】
 */

const defaultData = generateDataSource(60, '标题');

export const API_autoThrottle = () => {
  const ref = useRef();
  const [dataSource, setDataSource] = useState(defaultData);
  const [movedKey, setMovedKey] = useState<null | string | number>(null);
  const [autoThrottle, setAutoThrottle] = useState(2);

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
      <TestSuite name="autoThrottle">
        <TestCase
          key={'autoThrottle'}
          itShould={`属性autoThrottle，当前为${autoThrottle}`}
          tags={['C_API']}
          initialState={false}
          arrange={({setState}) => {
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
                  autoThrottle={autoThrottle}
                />
                <Button
                  title="修改autoThrottle"
                  onPress={() => {
                    setAutoThrottle(5);
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

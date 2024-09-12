import React, {useRef, useState} from 'react';
import {View, TouchableOpacity, Image, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AnySizeDragSortableView} from 'react-native-drag-sort';
import {generateDataSource} from '../../libs';
import {anySizeDragSortableVIewStyle as styles} from '../../styles';

/**
 * 属性：
 * renderBottomView,【底部组件】
 */

const defaultData = generateDataSource(60, '标题');

export const API_renderBottomView = () => {
  const ref = useRef();
  const [dataSource, setDataSource] = useState(defaultData);
  const [movedKey, setMovedKey] = useState<null | string | number>(null);
  const [renderBottomView, setRenderBottomView] = useState<any>();

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
      <TestSuite name="renderBottomView">
        <TestCase
          key={'renderBottomView'}
          itShould={`属性renderBottomView`}
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
                  renderBottomView={renderBottomView}
                  bottomViewHeight={renderBottomView ? 40 : 0}
                />
                <Button
                  title="修改renderBottomView"
                  onPress={() => {
                    setRenderBottomView(
                      <View
                        style={{
                          height: 40,
                          backgroundColor: '#ffff00',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text>我是底部组件</Text>
                      </View>,
                    );
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

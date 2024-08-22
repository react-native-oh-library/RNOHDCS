import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Text, Button, Alert} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {AutoDragSortableView} from 'react-native-drag-sort';

const STYLES = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 5,
    backgroundColor: '#f39c12',
    height: 50,
    width: 100,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  header: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#2ecc71',
    borderBottomWidth: 2,
  },
  header_title: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

const HeaderComp = (
  <View style={{height: 30, backgroundColor: 'f0f0f0'}}>
    <Text style={{fontSize: 18, color: '#000', textAlign: 'center'}}>
      我是头部
    </Text>
  </View>
);

const FooterComp = (
  <View style={{height: 30, backgroundColor: '#f0f0f0'}}>
    <Text style={{fontSize: 18, color: '#000', textAlign: 'center'}}>
      我是底部
    </Text>
  </View>
);

interface IDataItem {
  id: number;
  title: string;
}

const GeneratingData: () => IDataItem[] = () => {
  const list: IDataItem[] = [];
  for (let i = 0; i < 6; i++) {
    list.push({id: i + 1, title: String.fromCharCode(65 + i)});
  }
  return list;
};

export const T_AutoDragSortableView = () => {
  const [marginChildrenTop, setMarginChildrenTop] = useState(0);
  const [marginChildrenBottom, setMarginChildrenBottom] = useState(0);
  const [marginChildrenLeft, setMarginChildrenLeft] = useState(0);
  const [marginChildrenRight, setMarginChildrenRight] = useState(0);
  const [scaleStatus, setScaleStatus] = useState('scale');
  const [fixedItems, setFixedItems] = useState([]);
  const [delayLongPress, setDelayLongPress] = useState(100);
  const [isDragFreely, setIsDragFreely] = useState(false);
  const [maxScale, setMaxScale] = useState(1.2);
  const [minOpacity, setMinOpacity] = useState(0.8);
  const [scaleDuration, setScaleDuration] = useState(0);
  const [slideDuration, setSlideDuration] = useState(0);
  const [sortable, setSortable] = useState(true);
  const [autoThrottle, setAutoThrottle] = useState(2);
  const [autoThrottleDuration, setAutoThrottleDuration] = useState(10);
  const [dataSource, setDataSource] = useState<IDataItem[]>([]);
  const [renderHeaderView, setRenderHeaderView] = useState(<></>);
  const [headerViewHeight, setHeaderViewHeight] = useState(0);
  const [renderBottomView, setRenderBottomView] = useState(<></>);
  const [bottomViewHeight, setBottomViewHeight] = useState(0);

  useEffect(() => {
    const list = [];
    for (let i = 1; i <= 50; i++) {
      list.push({id: i, title: `任务${i}`});
    }
    setDataSource(list);
  }, []);

  const requiredProps = {
    parentWidth: 400,
    childrenHeight: 60,
    childrenWidth: 120,
    dataSource,
  };

  return (
    <View style={{flex: 1}}>
      <Tester style={{height: 350}}>
        <ScrollView>
          <TestSuite name="react-native-drag-sort-AutoDragSort">
            <TestCase
              key={'isDragFreely'}
              itShould={`change isDragFreely 当前为${isDragFreely}`}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <Button
                    title="setIsDragFreely(true)"
                    onPress={() => {
                      setIsDragFreely(true);
                      setState(true);
                    }}
                  />
                );
              }}
              assert={async ({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={'marginChildrenTop'}
              itShould={`change marginChildrenTop 当前为${marginChildrenTop}`}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <Button
                    title="setMarginChildrenTop(5)"
                    onPress={() => {
                      setMarginChildrenTop(5);
                      setState(true);
                    }}
                  />
                );
              }}
              assert={async ({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={'marginChildrenBottom'}
              itShould={`change marginChildrenBottom 当前为${marginChildrenBottom}`}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <Button
                    title="setMarginChildrenBottom(5)"
                    onPress={() => {
                      setMarginChildrenBottom(5);
                      setState(true);
                    }}
                  />
                );
              }}
              assert={async ({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={'marginChildrenLeft'}
              itShould={`change marginChildrenLeft 当前为${marginChildrenLeft}`}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <Button
                    title="setMarginChildrenLeft(5)"
                    onPress={() => {
                      setMarginChildrenLeft(5);
                      setState(true);
                    }}
                  />
                );
              }}
              assert={async ({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={'marginChildrenRight'}
              itShould={`change marginChildrenRight 当前为${marginChildrenRight}`}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <Button
                    title="setMarginChildrenRight(5)"
                    onPress={() => {
                      setMarginChildrenRight(5);
                      setState(true);
                    }}
                  />
                );
              }}
              assert={async ({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={'fixedItems'}
              itShould={`change fixedItems 当前为${fixedItems}`}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <Button
                    title="setFixedItems([0, 1] as any)"
                    onPress={() => {
                      setFixedItems([0, 1] as any);
                      setState(true);
                    }}
                  />
                );
              }}
              assert={async ({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={'delayLongPress'}
              itShould={`change delayLongPress 当前为${delayLongPress}`}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <Button
                    title="setDelayLongPress(1000)"
                    onPress={() => {
                      setDelayLongPress(1000);
                      setState(true);
                    }}
                  />
                );
              }}
              assert={async ({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={'maxScale'}
              itShould={`change maxScale 当前为${maxScale}`}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <Button
                    title="setMaxScale(2)"
                    onPress={() => {
                      setMaxScale(2);
                      setState(true);
                    }}
                  />
                );
              }}
              assert={async ({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={'minOpacity'}
              itShould={`change minOpacity 当前为${minOpacity}`}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <Button
                    title="setMinOpacity(0.3)"
                    onPress={() => {
                      setMinOpacity(0.3);
                      setState(true);
                    }}
                  />
                );
              }}
              assert={async ({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={'scaleDuration'}
              itShould={`change scaleDuration 当前为${scaleDuration}`}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <Button
                    title="setScaleDuration(500)"
                    onPress={() => {
                      setScaleDuration(500);
                      setState(true);
                    }}
                  />
                );
              }}
              assert={async ({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={'slideDuration'}
              itShould={`change slideDuration 当前为${slideDuration}`}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <Button
                    title="setSlideDuration(1000)"
                    onPress={() => {
                      setSlideDuration(1000);
                      setState(true);
                    }}
                  />
                );
              }}
              assert={async ({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={'onClickItem'}
              itShould={'onClickItem Event'}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <AutoDragSortableView
                    {...requiredProps}
                    dataSource={GeneratingData()}
                    isDragFreely={false}
                    onClickItem={() => {
                      Alert.alert('onClickItem Event');
                      setState(true);
                    }}
                    renderItem={item => {
                      return (
                        <View key={item.id} style={STYLES.box}>
                          <Text style={STYLES.text}>{item.title}</Text>
                        </View>
                      );
                    }}
                  />
                );
              }}
              assert={async ({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={'onDataChange'}
              itShould={'onDataChange Event'}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <Button
                    title="改变数据源"
                    onPress={() => {
                      const list = [];
                      for (let index = 1; index < 27; index++) {
                        list.push({id: index, title: `活动 ${index}`});
                      }
                      setDataSource(list);
                      setState(true);
                    }}
                  />
                );
              }}
              assert={async ({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={'autoThrottle'}
              itShould={`change autoThrottle 当前为${autoThrottle}`}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <Button
                    title="setAutoThrottle(1)"
                    onPress={() => {
                      setAutoThrottle(1);
                      setState(true);
                    }}
                  />
                );
              }}
              assert={async ({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={'autoThrottleDuration'}
              itShould={`change autoThrottleDuration 当前为${autoThrottleDuration}`}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <Button
                    title="setAutoThrottleDuration(200)"
                    onPress={() => {
                      setAutoThrottleDuration(200);
                      setState(true);
                    }}
                  />
                );
              }}
              assert={async ({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={'renderHeaderView'}
              itShould={'change renderHeaderView'}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <Button
                    title="setRenderHeaderView(HeaderComp)"
                    onPress={() => {
                      setRenderHeaderView(HeaderComp);
                      setHeaderViewHeight(30);
                      setState(true);
                    }}
                  />
                );
              }}
              assert={async ({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={'renderBottomView'}
              itShould={'change renderBottomView'}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <Button
                    title="setRenderBottomView(FooterComp)"
                    onPress={() => {
                      setRenderBottomView(FooterComp);
                      setBottomViewHeight(30), setState(true);
                    }}
                  />
                );
              }}
              assert={async ({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={'onDragStart'}
              itShould={'onDragStart Event'}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <View style={{flex: 1}}>
                    <AutoDragSortableView
                      {...requiredProps}
                      dataSource={GeneratingData()}
                      isDragFreely={false}
                      onDragStart={() => {
                        Alert.alert('onDragStart事件触发');
                        setState(true);
                      }}
                      renderItem={item => {
                        return (
                          <View key={item.id} style={STYLES.box}>
                            <Text style={STYLES.text}>{item.title}</Text>
                          </View>
                        );
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
              key={'onDragEnd'}
              itShould={'onDragEnd Event'}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <View style={{flex: 1}}>
                    <AutoDragSortableView
                      {...requiredProps}
                      dataSource={GeneratingData()}
                      isDragFreely={false}
                      onDragEnd={() => {
                        Alert.alert('onDragEnd事件触发');
                        setState(true);
                      }}
                      renderItem={item => {
                        return (
                          <View key={item.id} style={STYLES.box}>
                            <Text style={STYLES.text}>{item.title}</Text>
                          </View>
                        );
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
              key={'onDragging'}
              itShould={'onDragging Event'}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <View style={{flex: 1}}>
                    <AutoDragSortableView
                      {...requiredProps}
                      dataSource={GeneratingData()}
                      isDragFreely={false}
                      onDragging={() => {
                        Alert.alert('onDragging事件触发了');
                        setState(true);
                      }}
                      renderItem={item => {
                        return (
                          <View key={item.id} style={STYLES.box}>
                            <Text style={STYLES.text}>{item.title}</Text>
                          </View>
                        );
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
              key={'scaleStatus'}
              itShould={`change scaleStatus 当前为${scaleStatus}`}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <>
                    <Button
                      title="setScaleStatus('scaleX)"
                      onPress={() => {
                        setScaleStatus('scaleX');
                        setState(true);
                      }}
                    />
                    <Button
                      title="setScaleStatus('scaleY)"
                      onPress={() => {
                        setScaleStatus('scaleY');
                        setState(true);
                      }}
                    />
                  </>
                );
              }}
              assert={async ({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={'sortable'}
              itShould={`change sortable 当前为${sortable}`}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <Button
                    title="setSortable(!sortable)"
                    onPress={() => {
                      setSortable(!sortable);
                      setState(true);
                    }}
                  />
                );
              }}
              assert={async ({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
          </TestSuite>
        </ScrollView>
      </Tester>
      <View style={{backgroundColor: '#fff', height: 360, padding: 5}}>
        <AutoDragSortableView
          {...requiredProps}
          marginChildrenTop={marginChildrenTop}
          marginChildrenBottom={marginChildrenBottom}
          marginChildrenLeft={marginChildrenLeft}
          marginChildrenRight={marginChildrenRight}
          scaleStatus={scaleStatus as any}
          fixedItems={fixedItems}
          delayLongPress={delayLongPress}
          isDragFreely={isDragFreely}
          maxScale={maxScale}
          minOpacity={minOpacity}
          scaleDuration={scaleDuration}
          slideDuration={slideDuration}
          sortable={sortable}
          autoThrottle={autoThrottle}
          autoThrottleDuration={autoThrottleDuration}
          renderHeaderView={renderHeaderView}
          headerViewHeight={headerViewHeight}
          renderBottomView={renderBottomView}
          bottomViewHeight={bottomViewHeight}
          renderItem={item => {
            return (
              <View key={item.id} style={STYLES.box}>
                <Text style={STYLES.text}>{item.title}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
export default T_AutoDragSortableView;

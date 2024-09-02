import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Button,
  RefreshControl,
  Alert,
  Text,
} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {
  LayoutProvider,
  RecyclerListView,
  WindowCorrection,
} from 'recyclerlistview';
import {dataProviderInit, width} from './data';
import {ContextProviderInstance, LayoutUtil} from './class';
import {generateArray} from './libs';
import {RowRenderer, ExternalScrollVIew} from './components';
import {ItemAnimatorInstance} from './class/itemAnimatorInstance';

const baseProps = {
  layoutProvider: LayoutUtil.getLayoutProvider(0) as LayoutProvider,
  dataProvider: dataProviderInit.cloneWithRows(generateArray(30)),
  rowRenderer: RowRenderer,
  style: {width: width - 40, height: 250},
};

const customProps = (num: number) => {
  return {dataProvider: dataProviderInit.cloneWithRows(generateArray(num))};
};

let timer;

export const RecyclerListViewTestDemo = () => {
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [onEndReachedThreshold, setOnEndReachedThreshold] = useState(0);
  const [onEndReachedThresholdRelative, setOnEndReachedThresholdRelative] =
    useState(0);
  const [onVisibleIndicesChanged, setOnVisibleIndicesChanged] = useState();
  const [showFooter, setShowFooter] = useState(false);

  const [scrollThrottle, setScrollThrottle] = useState(0);
  const [canChangeSize, setCanChangeSize] = useState(false);
  const [applyWindowCorrection, setApplyWindowCorrection] = useState();
  const [forceNonDeterministicRendering, setForceNonDeterministicRendering] =
    useState(false);
  const [extendedState, setExtendedState] = useState({});
  const [itemAnimator, setItemAnimator] = useState();
  const [loading, setLoading] = useState(false);
  const [windowCorrectionConfig, setWindowCorrectionConfig] = useState({
    applyToItemScroll: false,
    applyToInitialOffset: false,
    value: {startCorrection: 0, endCorrection: 0, windowShift: 0},
  });
  //
  const [onItemLayout, setOnItemLayout] =
    useState<(index: number) => void | undefined>();
  const contextProvider = new ContextProviderInstance({api: 'contextProvider'});

  useEffect(() => {
    return () => {
      timer && clearTimeout(timer);
    };
  });

  return (
    <Tester style={{paddingBottom: 80}}>
      <ScrollView>
        <TestSuite name="recyclerlistview">
          <TestCase
            key={'contextProvider'}
            itShould={'contextProvider'}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View>
                  <RecyclerListView
                    {...baseProps}
                    contextProvider={contextProvider}
                  />
                  <Button
                    title={'修改contextProvider'}
                    onPress={() => {
                      Alert.alert(contextProvider?.getUniqueKey());
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
          <TestCase itShould={`initialOffset 当前为：${100}`}>
            <RecyclerListView {...baseProps} initialOffset={100} />
          </TestCase>
          <TestCase itShould={`renderAheadOffset 当前为：${2}`}>
            <RecyclerListView {...baseProps} renderAheadOffset={2} />
          </TestCase>
          <TestCase
            key={'isHorizontal'}
            itShould={`isHorizontal 当前为：${isHorizontal}`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View>
                  <RecyclerListView
                    {...baseProps}
                    isHorizontal={isHorizontal}
                  />
                  <Button
                    title={'修改isHorizontal'}
                    onPress={() => {
                      setIsHorizontal(true);
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
            key={'onScroll'}
            itShould={'onScroll'}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <RecyclerListView
                  {...baseProps}
                  onScroll={() => {
                    !state && Alert.alert('onScroll');
                    setState(true);
                  }}
                />
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />
          {/* onRecreate效果未知 */}
          <TestCase itShould={'onRecreate'}>
            <RecyclerListView
              {...baseProps}
              contextProvider={new ContextProviderInstance({api: 'onRecreate'})}
              onRecreate={() => Alert.alert('onRecreate')}
            />
          </TestCase>
          <TestCase
            itShould={`externalScrollView：JSON.stringify(ExternalScrollVIew)`}>
            <RecyclerListView
              {...baseProps}
              externalScrollView={ExternalScrollVIew}
            />
          </TestCase>
          <TestCase
            key={'onEndReached'}
            itShould={`方法onEndReached`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <RecyclerListView
                  {...baseProps}
                  onEndReached={() => {
                    !state && Alert.alert('onEndReached触发');
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
            key={'onEndReachedThreshold'}
            itShould={`属性onEndReachedThreshold，当前为${onEndReachedThreshold}`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <View>
                  <RecyclerListView
                    {...baseProps}
                    onEndReached={() => Alert.alert('onEndReachedThreshold')}
                    onEndReachedThreshold={onEndReachedThreshold}
                  />
                  <Button
                    title={`修改onEndReachedThreshold`}
                    onPress={() => {
                      setOnEndReachedThreshold(600);
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
            key={'onEndReachedThresholdRelative'}
            itShould={`onEndReachedThresholdRelative 当前为：${onEndReachedThresholdRelative}`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View>
                  <RecyclerListView
                    {...baseProps}
                    onEndReached={() =>
                      Alert.alert(
                        `onEndReachedThresholdRelative：${onEndReachedThresholdRelative}`,
                      )
                    }
                    onEndReachedThresholdRelative={
                      onEndReachedThresholdRelative
                    }
                  />
                  <Button
                    title={`修改onEndReachedThresholdRelative`}
                    onPress={() => {
                      setOnEndReachedThresholdRelative(20);
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
            key={'onVisibleIndicesChanged'}
            itShould={`onVisibleIndicesChanged`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <View>
                  <RecyclerListView
                    {...baseProps}
                    onVisibleIndicesChanged={onVisibleIndicesChanged}
                  />
                  <Button
                    title="修改onVisibleIndicesChanged"
                    onPress={() => {
                      setOnVisibleIndicesChanged(
                        (all: number[], now: number[], notNow: number[]) => {
                          if (!state) Alert.alert('onVisibleIndicesChanged');
                        },
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
          <TestCase
            key={'renderFooter'}
            itShould={`renderFooter`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <View>
                  <RecyclerListView
                    {...baseProps}
                    {...customProps(3)}
                    renderFooter={
                      showFooter
                        ? () => {
                            return (
                              <View>
                                <Text>我是底部</Text>
                              </View>
                            );
                          }
                        : null
                    }
                  />
                  <Button
                    title={`修改renderFooter`}
                    onPress={() => {
                      if (!state) {
                        setShowFooter(true);
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
          <TestCase itShould={`initialRenderIndex 当前为：${5}`}>
            <RecyclerListView {...baseProps} initialRenderIndex={5} />
          </TestCase>
          <TestCase
            key={'scrollThrottle'}
            itShould={`scrollThrottle 当前为：${scrollThrottle}`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View>
                  <RecyclerListView
                    {...baseProps}
                    scrollThrottle={scrollThrottle}
                  />
                  <Button
                    title={`修改scrollThrottle`}
                    onPress={() => {
                      setScrollThrottle(500);
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
          {/* canChangeSize效果未知 */}
          <TestCase
            key={'canChangeSize'}
            itShould={`canChangeSize 当前为：${canChangeSize}`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View>
                  <RecyclerListView
                    {...baseProps}
                    canChangeSize={canChangeSize}
                  />
                  <Button
                    title={`修改canChangeSize`}
                    onPress={() => {
                      setCanChangeSize(!canChangeSize);
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
            key={'applyWindowCorrection'}
            itShould={'applyWindowCorrection'}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <View>
                  <RecyclerListView
                    {...baseProps}
                    applyWindowCorrection={applyWindowCorrection}
                  />
                  <Button
                    title="修改applyWindowCorrection"
                    onPress={() => {
                      setApplyWindowCorrection(() => {
                        if (!state) Alert.alert('applyWindowCorrection');
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
          <TestCase itShould={`disableRecycling 当前为：true`}>
            <RecyclerListView {...baseProps} disableRecycling={true} />
          </TestCase>
          <TestCase
            key={'forceNonDeterministicRendering'}
            itShould={`forceNonDeterministicRendering 当前为：${forceNonDeterministicRendering}`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <View>
                  <RecyclerListView
                    {...baseProps}
                    forceNonDeterministicRendering={
                      forceNonDeterministicRendering
                    }
                  />
                  <Button
                    title={`修改forceNonDeterministicRendering`}
                    onPress={() => {
                      if (!state) {
                        setForceNonDeterministicRendering(true);
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
          <TestCase itShould={`extendedState 当前为：{title:"标题"}`}>
            <RecyclerListView {...baseProps} extendedState={{title: '标题'}} />
          </TestCase>
          <TestCase
            key={'itemAnimator'}
            itShould={`itemAnimator`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <View>
                  <RecyclerListView
                    {...baseProps}
                    itemAnimator={itemAnimator}
                  />
                  <Button
                    title="修改itemAnimator"
                    onPress={() => {
                      if (!state) {
                        setItemAnimator(
                          new ItemAnimatorInstance({api: 'itemAnimator'}),
                        );
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
          <TestCase itShould={`scrollViewProps`}>
            <RecyclerListView
              {...baseProps}
              scrollViewProps={{
                refreshControl: (
                  <RefreshControl
                    refreshing={loading}
                    onRefresh={() => {
                      setLoading(true);
                      timer = setTimeout(() => {
                        setLoading(false);
                      }, 500);
                    }}
                  />
                ),
              }}
            />
          </TestCase>
          <TestCase itShould={'当前layoutSize为：{width:250,height:250}'}>
            <RecyclerListView
              {...baseProps}
              layoutSize={{width: 250, height: 250}}
            />
          </TestCase>
          <TestCase
            key={'onItemLayout'}
            itShould={`onItemLayout`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <View>
                  <RecyclerListView
                    {...baseProps}
                    forceNonDeterministicRendering={true}
                    onItemLayout={onItemLayout}
                  />
                  <Button
                    title="修改onItemLayout"
                    onPress={() => {
                      setOnItemLayout((index: number) => {
                        !state && Alert.alert('onVisibleIndicesChanged');
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
          <TestCase
            itShould={`windowCorrectionConfig：{applyToItemScroll: false,applyToInitialOffset: false,value: {startCorrection: 2,endCorrection: 2,windowShift: 1}}`}>
            <RecyclerListView
              {...baseProps}
              windowCorrectionConfig={{
                applyToItemScroll: false,
                applyToInitialOffset: false,
                value: {
                  startCorrection: 2,
                  endCorrection: 2,
                  windowShift: 1,
                },
              }}
            />
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

export default RecyclerListViewTestDemo;

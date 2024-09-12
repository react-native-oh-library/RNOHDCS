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
import {RecyclerListView} from 'recyclerlistview';
import {getDataProvider, width} from './data';
import {ContextProviderInstance, getLayoutProvider} from './class';
import rowRenderer from './components/rowRenderer';
import RenderFooter from './components/renderFooter';
import ExternalScrollView from './components/externalScrollView';
import {ItemAnimatorInstance} from './class/itemAnimatorInstance';

interface IExtendedState {
  title: string;
}

let timer: any;

interface ILayoutSize {
  width: number;
  height: number;
}

const defaultLayoutProvider = getLayoutProvider(0);
const defaultDataProvider = getDataProvider(30);

export const RecyclerListViewTestDemo = () => {
  const [layoutProvider, setLayoutProvider] = useState(defaultLayoutProvider);
  const [dataProvider, setDataProvider] = useState(defaultDataProvider);
  const [rendererRow, setRendererRow] = useState(defaultLayoutProvider);
  const [renderAheadOffset, setRenderAheadOffset] = useState(100);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [onRecreate, setOnRecreate] = useState<string>();
  const [externalScrollView, setExternalScrollView] = useState(false);
  const [onEndReachedThreshold, setOnEndReachedThreshold] = useState(0);
  const [onEndReachedThresholdRelative, setOnEndReachedThresholdRelative] =
    useState(0);
  const [onVisibleIndicesChanged, setOnVisibleIndicesChanged] = useState();
  const [showFooter, setShowFooter] = useState(false);
  const [scrollThrottle, setScrollThrottle] = useState(16);
  const [canChangeSize, setCanChangeSize] = useState(false);
  const [layoutCanChangeSize, setLayoutCanChangeSize] = useState<
    ILayoutSize | undefined
  >(undefined);
  const [applyWindowCorrection, setApplyWindowCorrection] = useState();
  const [disableRecycling, setDisableRecycling] = useState(false);

  const [forceNonDeterministicRendering, setForceNonDeterministicRendering] =
    useState(false);
  const [extendedState, setExtendedState] = useState<IExtendedState>();
  const [itemAnimator, setItemAnimator] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [windowCorrectionConfig, setWindowCorrectionConfig] = useState({
    applyToItemScroll: false,
    applyToInitialOffset: false,
    value: {startCorrection: 0, endCorrection: 0, windowShift: 0},
  });
  const [onItemLayout, setOnItemLayout] =
    useState<(index: number) => void | undefined>();

  const [componentStyle, setComponentStyle] = useState(width);
  const contextProvider = new ContextProviderInstance({
    api: 'contextProvider',
    key: 0,
  });
  const recreateContext = new ContextProviderInstance({
    api: 'onRecreat',
    key: 100,
  });

  useEffect(() => {
    return () => {
      timer && clearTimeout(timer);
    };
  });

  const OnVisibleIndicesChangedFUnc = (
    all: number[],
    now: number[],
    notNow: number[],
  ) => {
    Alert.alert('onVisibleIndicesChanged');
  };

  const applyWindowCorrectionFunc = () => {
    Alert.alert('applyWindowCorrection');
  };

  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestSuite name="recyclerlistview">
          <TestCase
            key="layoutProvider"
            itShould={`必填属性layoutProvider：用来定义布局`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <View style={{width: width - 40, height: 250}}>
                  <RecyclerListView
                    layoutProvider={layoutProvider as any}
                    dataProvider={defaultDataProvider}
                    rowRenderer={rowRenderer}
                  />
                  <Button
                    title="修改layoutProvider"
                    onPress={() => {
                      setLayoutProvider(getLayoutProvider(1));
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
            key="dataProvider"
            itShould={`必填属性dataProvider：用来定义每个元素数据`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <View style={{width: width - 40, height: 250}}>
                  <RecyclerListView
                    layoutProvider={defaultLayoutProvider as any}
                    dataProvider={dataProvider as any}
                    rowRenderer={rowRenderer}
                  />
                  <Button
                    title="修改dataProvider"
                    onPress={() => {
                      setDataProvider(getDataProvider(10));
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
            key="rowRenderer"
            itShould={`必填属性rowRenderer：用来渲染布局`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <View style={{width: width - 40, height: 250}}>
                  <RecyclerListView
                    layoutProvider={rendererRow as any}
                    dataProvider={defaultDataProvider}
                    rowRenderer={rowRenderer}
                  />
                  <Button
                    title="修改rowRenderer"
                    onPress={() => {
                      setRendererRow(getLayoutProvider(2));
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
            key={'contextProvider'}
            itShould={'属性contextProvider：该属性用来保存上下文信息'}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{width: width - 40, height: 250}}>
                  <RecyclerListView
                    layoutProvider={defaultLayoutProvider}
                    dataProvider={defaultDataProvider}
                    rowRenderer={rowRenderer}
                    contextProvider={contextProvider}
                  />
                  <Button
                    title={'触发contextProvider'}
                    onPress={() => {
                      Alert.alert(
                        `contextProvider保存的key值：${contextProvider?.getUniqueKey()}`,
                        '',
                        [
                          {
                            text: 'OK',
                            onPress: () => setState(true),
                          },
                        ],
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
          <TestCase itShould={'属性initialOffset 当前为100'}>
            <View style={{width: width - 40, height: 250}}>
              <RecyclerListView
                layoutProvider={defaultLayoutProvider as any}
                dataProvider={defaultDataProvider}
                rowRenderer={rowRenderer}
                initialOffset={100}
              />
            </View>
          </TestCase>
          <TestCase
            key={`renderAheadOffset`}
            itShould={`属性renderAheadOffset 当前为：${renderAheadOffset}`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{width: width - 40, height: 250}}>
                  <RecyclerListView
                    layoutProvider={defaultLayoutProvider}
                    dataProvider={defaultDataProvider}
                    rowRenderer={rowRenderer}
                    renderAheadOffset={renderAheadOffset}
                  />
                  <Button
                    title={'修改renderAheadOffset'}
                    onPress={() => {
                      setRenderAheadOffset(250);
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
            key={'isHorizontal'}
            itShould={`属性isHorizontal 当前为：${isHorizontal}`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <View style={{width: width - 40, height: 250}}>
                  <RecyclerListView
                    layoutProvider={defaultLayoutProvider}
                    dataProvider={defaultDataProvider}
                    rowRenderer={rowRenderer}
                    isHorizontal={isHorizontal}
                  />
                  <Button
                    title={'修改isHorizontal'}
                    onPress={() => {
                      if (!state) {
                        setIsHorizontal(true);
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
          <TestCase
            key={'onScroll'}
            itShould={'方法onScroll:滚动监听事件'}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <View style={{width: width - 40, height: 250}}>
                  <RecyclerListView
                    layoutProvider={defaultLayoutProvider}
                    dataProvider={defaultDataProvider}
                    rowRenderer={rowRenderer}
                    onScroll={() => {
                      if (!state) {
                        Alert.alert('onScroll');
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
          <TestCase
            itShould={`方法onRecreate，该属性依赖于contextProvider属性，用来读取contextProvider属性保存的上下文信息，无法展示效果`}>
            <View style={{width: width - 40, height: 250}}>
              <RecyclerListView
                layoutProvider={defaultLayoutProvider}
                dataProvider={defaultDataProvider}
                rowRenderer={rowRenderer}
                contextProvider={recreateContext}
                onRecreate={() => {}}
              />
            </View>
          </TestCase>
          <TestCase
            itShould={`属性externalScrollView：额外的ScrollView，会替换默认`}>
            <View style={{width: width - 40, height: 250}}>
              <RecyclerListView
                layoutProvider={defaultLayoutProvider as any}
                dataProvider={defaultDataProvider}
                rowRenderer={rowRenderer}
                externalScrollView={ExternalScrollView}
              />
            </View>
          </TestCase>
          <TestCase
            key={'onEndReached'}
            itShould={`方法onEndReached`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <View style={{width: width - 40, height: 250}}>
                  <RecyclerListView
                    layoutProvider={defaultLayoutProvider}
                    dataProvider={defaultDataProvider}
                    rowRenderer={rowRenderer}
                    onEndReached={() => {
                      !state && Alert.alert('onEndReached触发');
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
            key={'onEndReachedThreshold'}
            itShould={`属性onEndReachedThreshold，当前为${onEndReachedThreshold}`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <View style={{width: width - 40, height: 250}}>
                  <RecyclerListView
                    layoutProvider={defaultLayoutProvider}
                    dataProvider={defaultDataProvider}
                    rowRenderer={rowRenderer}
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
            itShould={`属性onEndReachedThresholdRelative 当前为：${onEndReachedThresholdRelative}`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{width: width - 40, height: 250}}>
                  <RecyclerListView
                    layoutProvider={defaultLayoutProvider}
                    dataProvider={defaultDataProvider}
                    rowRenderer={rowRenderer}
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
                      setOnEndReachedThresholdRelative(5);
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
            itShould={`方法onVisibleIndicesChanged`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <View style={{width: width - 40, height: 250}}>
                  <RecyclerListView
                    layoutProvider={defaultLayoutProvider}
                    dataProvider={defaultDataProvider}
                    rowRenderer={rowRenderer}
                    onVisibleIndicesChanged={
                      !state ? onVisibleIndicesChanged : undefined
                    }
                  />
                  <Button
                    title="修改onVisibleIndicesChanged"
                    onPress={() => {
                      setOnVisibleIndicesChanged(
                        OnVisibleIndicesChangedFUnc as any,
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
            itShould={`属性renderFooter`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <View style={{width: width - 40, height: 250}}>
                  <RecyclerListView
                    layoutProvider={defaultLayoutProvider}
                    dataProvider={defaultDataProvider}
                    rowRenderer={rowRenderer}
                    renderFooter={showFooter ? RenderFooter : undefined}
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
          <TestCase itShould={`属性initialRenderIndex 当前为：${5}`}>
            <View style={{width: width - 40, height: 250}}>
              <RecyclerListView
                layoutProvider={defaultLayoutProvider as any}
                dataProvider={defaultDataProvider}
                rowRenderer={rowRenderer}
                initialRenderIndex={5}
              />
            </View>
          </TestCase>
          {/* <TestCase
            key={'scrollThrottle'}
            itShould={`属性scrollThrottle 当前为：${scrollThrottle}`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{width: width - 40, height: 250}}>
                  <RecyclerListView
                    layoutProvider={defaultLayoutProvider}
                    dataProvider={defaultDataProvider}
                    rowRenderer={rowRenderer}
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
          /> */}
          <TestCase itShould={`属性canChangeSize`}>
            <View style={{width: width - 40, height: 250}}>
              <Text>属性canChangeSize为：true</Text>
              <RecyclerListView
                layoutProvider={getLayoutProvider(0)}
                dataProvider={defaultDataProvider}
                rowRenderer={rowRenderer}
                layoutSize={{width: 250, height: 250}}
                canChangeSize={true}
              />
            </View>
            <View style={{width: width - 40, height: 250}}>
              <Text>属性canChangeSize为：false</Text>
              <RecyclerListView
                layoutProvider={getLayoutProvider(0)}
                dataProvider={defaultDataProvider}
                rowRenderer={rowRenderer}
                layoutSize={{width: 250, height: 250}}
                canChangeSize={false}
              />
            </View>
          </TestCase>
          <TestCase
            key={'applyWindowCorrection'}
            itShould={'方法applyWindowCorrection'}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <View style={{width: width - 40, height: 250}}>
                  <RecyclerListView
                    layoutProvider={defaultLayoutProvider}
                    dataProvider={defaultDataProvider}
                    rowRenderer={rowRenderer}
                    applyWindowCorrection={
                      state ? undefined : applyWindowCorrection
                    }
                  />
                  <Button
                    title="修改applyWindowCorrection"
                    onPress={() => {
                      setApplyWindowCorrection(
                        applyWindowCorrectionFunc as any,
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
            key={'disableRecycling'}
            itShould={`属性disableRecycling 当前为：${disableRecycling}`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <View style={{width: width - 40, height: 250}}>
                  <RecyclerListView
                    layoutProvider={defaultLayoutProvider}
                    dataProvider={getDataProvider(150)}
                    rowRenderer={rowRenderer}
                    disableRecycling={false}
                  />
                  <Button
                    title="修改disableRecycling"
                    onPress={() => {
                      setDisableRecycling(true);
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
            key={'forceNonDeterministicRendering'}
            itShould={`属性forceNonDeterministicRendering 当前为：${forceNonDeterministicRendering}`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <View style={{width: width - 50, height: 250}}>
                  <RecyclerListView
                    layoutProvider={getLayoutProvider(0)}
                    dataProvider={defaultDataProvider}
                    rowRenderer={rowRenderer}
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
          <TestCase
            key={'extendedState'}
            itShould={`属性extendedState 当前为：${JSON.stringify(
              extendedState,
            )}`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <View style={{width: width - 40, height: 250}}>
                  <RecyclerListView
                    layoutProvider={defaultLayoutProvider}
                    dataProvider={defaultDataProvider}
                    rowRenderer={rowRenderer}
                    extendedState={extendedState}
                  />
                  <Button
                    title="修改extendedState"
                    onPress={() => {
                      setExtendedState({title: '标题'});
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
            key={'itemAnimator'}
            itShould={`属性itemAnimator`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <View style={{width: width - 40, height: 250}}>
                  <RecyclerListView
                    layoutProvider={defaultLayoutProvider}
                    dataProvider={defaultDataProvider}
                    rowRenderer={rowRenderer}
                    itemAnimator={
                      itemAnimator === 'itemAnimator'
                        ? new ItemAnimatorInstance({api: 'itemAnimator'})
                        : undefined
                    }
                  />
                  <Button
                    title="修改itemAnimator"
                    onPress={() => {
                      if (!state) {
                        setItemAnimator('itemAnimator');
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
          <TestCase itShould={`属性scrollViewProps`}>
            <View style={{width: width - 40, height: 250}}>
              <RecyclerListView
                layoutProvider={defaultLayoutProvider}
                dataProvider={defaultDataProvider}
                rowRenderer={rowRenderer}
                scrollViewProps={{
                  refreshControl: (
                    <RefreshControl
                      refreshing={loading}
                      onRefresh={() => {
                        setLoading(true);
                        timer = setTimeout(() => {
                          setLoading(false);
                        }, 1000);
                      }}
                    />
                  ),
                }}
              />
            </View>
          </TestCase>
          <TestCase
            itShould={`属性layoutSize 当前layoutSize为：${JSON.stringify({
              width: 250,
              height: 250,
            })}`}>
            <View style={{width: width - 40, height: 250}}>
              <RecyclerListView
                layoutProvider={getLayoutProvider(0)}
                dataProvider={defaultDataProvider}
                rowRenderer={rowRenderer}
                layoutSize={{width: 250, height: 250}}
              />
            </View>
          </TestCase>
          <TestCase
            key={'onItemLayout'}
            itShould={`属性onItemLayout`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <View style={{width: width - 40, height: 250}}>
                  <RecyclerListView
                    layoutProvider={defaultLayoutProvider}
                    dataProvider={defaultDataProvider}
                    rowRenderer={rowRenderer}
                    forceNonDeterministicRendering={true}
                    onItemLayout={onItemLayout}
                  />
                  <Button
                    title="修改onItemLayout"
                    onPress={() => {
                      setOnItemLayout((index: number) => {
                        !state &&
                          Alert.alert('onItemLayout', '', [
                            {
                              text: 'OK',
                              onPress: () => setState(true),
                            },
                          ]);
                      });
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
            key={'windowCorrectionConfig'}
            itShould={`属性windowCorrectionConfig 当前为${JSON.stringify(
              windowCorrectionConfig,
            )}`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <View style={{width: width - 40, height: 250}}>
                  <RecyclerListView
                    layoutProvider={defaultLayoutProvider}
                    dataProvider={defaultDataProvider}
                    rowRenderer={rowRenderer}
                    windowCorrectionConfig={windowCorrectionConfig}
                  />
                  <Button
                    title="修改windowCorrectionConfig"
                    onPress={() => {
                      setWindowCorrectionConfig({
                        applyToItemScroll: true,
                        applyToInitialOffset: true,
                        value: {
                          startCorrection: 0,
                          endCorrection: 0,
                          windowShift: 100,
                        },
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
            key={'style'}
            itShould={`属性style 当前为${JSON.stringify(componentStyle)}`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState, state}) => {
              return (
                <View style={{width: width - 40, height: 250}}>
                  <RecyclerListView
                    layoutProvider={defaultLayoutProvider}
                    dataProvider={defaultDataProvider}
                    rowRenderer={rowRenderer}
                    style={componentStyle}
                  />
                  <Button
                    title="修改componentStyle"
                    onPress={() => {
                      setComponentStyle({width: width - 100} as any);
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
      </ScrollView>
    </Tester>
  );
};

export default RecyclerListViewTestDemo;

import React, { createRef, Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { AnySizeDragSortableView } from "react-native-drag-sort";

const { width } = Dimensions.get('window')
const headerViewHeight = 30
const bottomViewHeight = 30

const getW = (index: number, isWidth: boolean) => isWidth ? (width - 170) / 2 : 80;

const styles = StyleSheet.create({
    item_moved: {
        opacity: 0.95,
        borderRadius: 4,
    },
    item_wrap: {
        //position: 'relative',
        marginRight: 5,
        marginTop: 5
    },
    item: {
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f39c12',
        borderRadius: 4,
    },
    item_icon_swipe: {
        width: 30,
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 30 * 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item_icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    item_text_swipe: {
        backgroundColor: '#fff',
        width: 32,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item_text: {
        color: '#444',
        fontSize: 16,
        fontWeight: 'bold',
    },
    header: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#2ecc71',
        borderBottomWidth: 2,
    },
    header_title: {
        color: '#333',
        fontSize: 24,
        fontWeight: 'bold'
    },
    aheader: {
        height: headerViewHeight,
        flexDirection: 'row',
        borderBottomColor: '#2ecc71',
        borderBottomWidth: 2,
        zIndex: 100,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    aheader_title: {
        color: '#333',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    abottom: {
        justifyContent: 'center',
        alignItems: 'center',
        height: bottomViewHeight,
        backgroundColor: '#fff',
        zIndex: 100,
        borderTopColor: '#2ecc71',
        borderTopWidth: 2,
    },
    abottom_desc: {
        color: '#333',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

const renderHeaderViewComp = <View style={styles.aheader}>
    <Text style={styles.aheader_title}>我是头部组件</Text>
</View>;
const renderBottomViewComp = <View style={styles.abottom}>
    <Text style={styles.abottom_desc}>我是底部组件</Text>
</View>;

export class T_AnySizeDragSortableViewDemo extends Component {
    constructor(props: {}) {
        super(props);
        const dataSourceA = []
        const dataSourceB = []
        const dataSourceC = []
        const dataSourceD = []
        for (let i = 0; i < 18; i++) {
            dataSourceA.push({ text: String.fromCharCode(65 + i), width: getW(i, true), height: getW(i, false) })
            dataSourceB.push({ text: String.fromCharCode(65 + i), width: getW(i, true), height: getW(i, false) })
            dataSourceC.push({ text: String.fromCharCode(65 + i), width: getW(i, true), height: getW(i, false) })
            dataSourceD.push({ text: String.fromCharCode(65 + i), width: getW(i, true), height: getW(i, false) })
        }
        this.state = {
            movedKey: null, autoThrottle: 2, areaOverlapRatio: 0.55, dataSourceA, dataSourceB, dataSourceC, dataSourceD,
            autoThrottleDuration: 10, scrollIndicatorInsets: { top: 50, left: 50, bottom: 50, right: 50 },
            childMarginTop: 0, childMarginBottom: 0, childMarginLeft: 0, childMarginRight: 0
        }
        this.sortableViewRefA = createRef()
        this.sortableViewRefB = createRef()
        this.sortableViewRefC = createRef()
        this.sortableViewRefD = createRef()
    }


    _renderItem = (item: { text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; width: any; height: any; }, index: any, isMoved: any, viewRef?: string) => {
        const { movedKey } = this.state
        return (
            <TouchableOpacity
                onLongPress={() => {
                    if (viewRef) {
                        this.setState({ movedKey: item.text })
                        this[viewRef]?.current.startTouch(item, index)
                    }
                }}
                onPressOut={() => {
                    if (viewRef) this[viewRef]?.current.onPressOut()
                }}
            >
                <View style={[styles.item_wrap, { opacity: (movedKey === item.text && !isMoved) ? 1 : 1 }]}>
                    <View style={[styles.item, { width: item.width, height: item.height - 30, backgroundColor: isMoved ? 'green' : '#f39c12' }]}>
                        {
                            isMoved ? (
                                <View style={styles.item_icon_swipe}>
                                    <Image source={{ uri: 'https://avatars0.githubusercontent.com/u/15728691?s=460&v=4' }} style={styles.item_icon} />
                                </View>
                            ) : null
                        }
                        <View style={styles.item_text_swipe}>
                            <Text style={styles.item_text}>{item.text}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


    render(): React.ReactNode {

        const { dataSourceA, dataSourceB, dataSourceC, areaOverlapRatio, autoThrottle, autoThrottleDuration, scrollIndicatorInsets, dataSourceD } = this.state;
        return <Tester>
            <TestSuite name="react-native-drag-sort-AnySizeDragSortableView">
                <TestCase
                    key={"areaOverlapRatio"}
                    itShould={`change areaOverlapRatio`}
                    tags={['C_API']}
                    initialState={false}

                    arrange={({ setState }) => {
                        return (
                            <View style={{ height: 180 }}>
                                <View style={{ height: 150 }}>
                                    <AnySizeDragSortableView
                                        ref={this.sortableViewRefA}
                                        //childMarginLeft={0}
                                        //childMarginBottom={0}
                                        childMarginTop={5}
                                        childMarginRight={5}
                                        dataSource={dataSourceA}
                                        areaOverlapRatio={areaOverlapRatio}
                                        keyExtractor={(item) => item.text}
                                        renderItem={(item, index, isMoved) => this._renderItem(item, index, isMoved, 'sortableViewRefA')}
                                        onDataChange={(data, callback) => {
                                            this.setState({ dataSourceA: data }, () => {
                                                callback()
                                            })
                                        }}
                                        renderBottomView={renderBottomViewComp}
                                        renderHeaderView={renderHeaderViewComp}
                                        headerViewHeight={headerViewHeight}
                                        bottomViewHeight={bottomViewHeight}
                                        movedWrapStyle={styles.item_moved}
                                        onDragEnd={() => this.setState({ movedKey: null })}
                                    />
                                </View>
                                <Button title='拖拽排序生效组件重叠比率为0.7' onPress={() => {
                                    this.setState({ areaOverlapRatio: 0.7 });
                                    setState(true)
                                }}></Button>
                            </View>
                        );
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                />
                <TestCase
                    key={"autoThrottleDuration"}
                    itShould={`change autoThrottleDuration`}
                    tags={['C_API']}
                    initialState={false}

                    arrange={({ setState }) => {
                        return (
                            <View style={{ height: 180 }}>
                                <View style={{ height: 150 }}>
                                    <AnySizeDragSortableView
                                        ref={this.sortableViewRefB}
                                        dataSource={dataSourceB}
                                        keyExtractor={(item) => item.text}
                                        renderItem={(item, index, isMoved) => this._renderItem(item, index, isMoved, 'sortableViewRefB')}
                                        onDataChange={(data, callback) => {
                                            this.setState({ dataSourceB: data }, () => {
                                                callback()
                                            })
                                        }}
                                        autoThrottleDuration={autoThrottleDuration}
                                        renderBottomView={renderBottomViewComp}
                                        renderHeaderView={renderHeaderViewComp}
                                        headerViewHeight={headerViewHeight}
                                        bottomViewHeight={bottomViewHeight}
                                        movedWrapStyle={styles.item_moved}
                                        onDragEnd={() => this.setState({ movedKey: null })}
                                    />
                                </View>
                                <Button title='自动滑动到指定位置的持续时间为200' onPress={() => {
                                    this.setState({ autoThrottleDuration: 200 });
                                    setState(true)
                                }}></Button>
                            </View>
                        );
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                />
                <TestCase
                    key={"autoThrottle"}
                    itShould={`change autoThrottle`}
                    tags={['C_API']}
                    initialState={false}

                    arrange={({ setState }) => {
                        return (
                            <View style={{ height: 180 }}>
                                <View style={{ height: 150 }}>
                                    <AnySizeDragSortableView
                                        ref={this.sortableViewRefC}
                                        dataSource={dataSourceC} autoThrottle={autoThrottle}
                                        keyExtractor={(item) => item.text}
                                        renderItem={(item, index, isMoved) => this._renderItem(item, index, isMoved, 'sortableViewRefC')}
                                        onDataChange={(data, callback) => {
                                            this.setState({ dataSourceC: data }, () => {
                                                callback()
                                            })
                                        }}
                                        renderBottomView={renderBottomViewComp}
                                        renderHeaderView={renderHeaderViewComp}
                                        headerViewHeight={headerViewHeight}
                                        bottomViewHeight={bottomViewHeight}
                                        movedWrapStyle={styles.item_moved}
                                        onDragEnd={() => this.setState({ movedKey: null })}
                                    />
                                </View>
                                <Button title='自动滑动到指定位置的间隔时间为1' onPress={() => {
                                    this.setState({ autoThrottle: 1 });
                                    setState(true)
                                }}></Button>
                            </View>
                        );
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                />
                {/* <TestCase
                        key={"scrollIndicatorInsets"}
                        itShould={`change scrollIndicatorInsets`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ height: 350 }}>
                                    <ScrollView style={{ height: 300 }}>
                                        <AnySizeDragSortableView
                                            ref={this.sortableViewRefD}
                                            keyExtractor={i => i.text} dataSource={dataSourceD}
                                            onDataChange={() => console.log('数据源改变回调')}
                                            onDragEnd={() => console.log('拖拽结束回调')}
                                            movedWrapStyle={styles.item_moved}
                                            scrollIndicatorInsets={scrollIndicatorInsets}
                                            renderItem={(item, index, isMoved) => this._renderItem(item, index, isMoved, 'sortableViewRefD')}

                                        />
                                    </ScrollView>
                                    <Button title='设置滚轮插入值' onPress={() => {
                                        this.setState({ scrollIndicatorInsets: { top: 20, left: 20, bottom: 20, right: 20 } }); setState(true);
                                    }}></Button>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    /> */}
            </TestSuite>
        </Tester>
    }

}
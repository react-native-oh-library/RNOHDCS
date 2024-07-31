import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, Button, Alert } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { DragSortableView } from "react-native-drag-sort";

const STYLES = StyleSheet.create({
    box: {
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 5,
        backgroundColor: "#4e71f2",
        height: 50,
        width: 100
    },
    text: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center",
    },
    header: {
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "#2ecc71",
        borderBottomWidth: 2,
    },
    header_title: {
        color: "#333",
        fontSize: 24,
        fontWeight: "bold",
    },
});

const newData = [{ id: 1, title: "活动 1" }, { id: 2, title: "活动 2" }, { id: 3, title: "活动 3" },
{ id: 4, title: "活动 4" }, { id: 3, title: "活动 5" }, { id: 4, title: "活动 6" }]

export const T_DragSort = () => {

    const [dataSource, setDataSource] = useState([
        { id: 1, title: "任务 1" }, { id: 2, title: "任务 2" }, { id: 3, title: "任务 3" },
        { id: 4, title: "任务 4" }, { id: 1, title: "任务 5" }, { id: 2, title: "任务 6" }
    ]);

    const [marginChildrenTop, setMarginChildrenTop] = useState(0);
    const [marginChildrenBottom, setMarginChildrenBottom] = useState(0);
    const [marginChildrenLeft, setMarginChildrenLeft] = useState(0);
    const [marginChildrenRight, setMarginChildrenRight] = useState(0);
    const [scaleStatus, setScaleStatus] = useState('scale');
    const [fixedItems, setFixedItems] = useState([]);
    const [delayLongPress, setDelayLongPress] = useState(100);
    const [isDragFreely, setIsDragFreely] = useState(false);
    const [maxScale, setMaxScale] = useState(1.2);
    const [minOpacity, setMinOpacity] = useState(0);
    const [scaleDuration, setScaleDuration] = useState(0);
    const [slideDuration, setSlideDuration] = useState(0);
    const [sortable, setSortable] = useState(true)


    const requiredProps = { parentWidth: 400, childrenHeight: 60, childrenWidth: 120, dataSource };

    // const AllProps = {
    //     scaleStatus: scaleStatus as any,
    //     parentWidth: 400, childrenHeight: 60, childrenWidth: 120, dataSource,
    //     marginChildrenTop, marginChildrenBottom, marginChildrenLeft, marginChildrenRight, fixedItems,
    //     delayLongPress, isDragFreely, maxScale, minOpacity, scaleDuration, slideDuration
    // };

    return (
        <Tester>
            <ScrollView >
                <TestSuite name="react-native-drag-sort">
                    <TestCase
                        key={"isDragFreely"}
                        itShould={`change isDragFreely`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <DragSortableView {...requiredProps} delayLongPress={0}
                                        isDragFreely={isDragFreely} renderItem={item => {
                                            return <View key={item.id} style={STYLES.box}>
                                                <Text style={STYLES.text}>{item.title}</Text>
                                            </View>;
                                        }}
                                    />
                                    <Button title='setIsDragFreely(true)' onPress={() => {
                                        setIsDragFreely(true); setState(true);
                                    }}></Button>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"marginChildrenTop"}
                        itShould={`change marginChildrenTop`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <DragSortableView {...requiredProps} isDragFreely={false}
                                        marginChildrenTop={marginChildrenTop} renderItem={item => {
                                            return <View key={item.id} style={STYLES.box}>
                                                <Text style={STYLES.text}>{item.title}</Text>
                                            </View>;
                                        }}
                                    />
                                    <Button title='setMarginChildrenTop(5)' onPress={() => {
                                        setMarginChildrenTop(5); setState(true);
                                    }}></Button>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"marginChildrenBottom"}
                        itShould={`change marginChildrenBottom`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <DragSortableView {...requiredProps} isDragFreely={false}
                                        marginChildrenBottom={marginChildrenBottom} renderItem={item => {
                                            return <View key={item.id} style={STYLES.box}>
                                                <Text style={STYLES.text}>{item.title}</Text>
                                            </View>;
                                        }}
                                    />
                                    <Button title='setMarginChildrenBottom(5)' onPress={() => {
                                        setMarginChildrenBottom(5); setState(true);
                                    }}></Button>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"marginChildrenLeft"}
                        itShould={`change marginChildrenLeft`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <DragSortableView {...requiredProps} isDragFreely={false}
                                        marginChildrenLeft={marginChildrenLeft} renderItem={item => {
                                            return <View key={item.id} style={STYLES.box}>
                                                <Text style={STYLES.text}>{item.title}</Text>
                                            </View>;
                                        }}
                                    />
                                    <Button title='setMarginChildrenLeft(5)' onPress={() => {
                                        setMarginChildrenLeft(5); setState(true);
                                    }}></Button>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"marginChildrenRight"}
                        itShould={`change marginChildrenRight`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <DragSortableView {...requiredProps} isDragFreely={false}
                                        marginChildrenRight={marginChildrenRight} renderItem={item => {
                                            return <View key={item.id} style={STYLES.box}>
                                                <Text style={STYLES.text}>{item.title}</Text>
                                            </View>;
                                        }}
                                    />
                                    <Button title='setMarginChildrenRight(5)' onPress={() => {
                                        setMarginChildrenRight(5); setState(true);
                                    }}></Button>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"scaleStatus"}
                        itShould={`change scaleStatus`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <DragSortableView {...requiredProps} maxScale={2} delayLongPress={200}
                                        isDragFreely={false} scaleStatus={scaleStatus as any} renderItem={item => {
                                            return <View key={item.id} style={STYLES.box}>
                                                <Text style={STYLES.text}>{item.title}</Text>
                                            </View>;
                                        }}
                                    />
                                    <Button title="setScaleStatus('scaleX)" onPress={() => {
                                        setScaleStatus('scaleX'); setState(true);
                                    }}></Button>
                                    <Button title="setScaleStatus('scaleY)" onPress={() => {
                                        setScaleStatus('scaleY'); setState(true);
                                    }}></Button>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"fixedItems"}
                        itShould={`change fixedItems`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <DragSortableView {...requiredProps} isDragFreely={false}
                                        fixedItems={fixedItems} renderItem={item => {
                                            return <View key={item.id} style={STYLES.box}>
                                                <Text style={STYLES.text}>{item.title}</Text>
                                            </View>;
                                        }}
                                    />
                                    <Button title='setFixedItems([0, 1] as any)' onPress={() => {
                                        setFixedItems([0, 1] as any); setState(true);
                                    }}></Button>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"delayLongPress"}
                        itShould={`change delayLongPress`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <DragSortableView {...requiredProps} sortable={true} maxScale={2}
                                        delayLongPress={delayLongPress} isDragFreely={false} renderItem={item => {
                                            return <View key={item.id} style={STYLES.box}>
                                                <Text style={STYLES.text}>{item.title}</Text>
                                            </View>;
                                        }}
                                    />
                                    <Button title='setDelayLongPress(1000)' onPress={() => {
                                        setDelayLongPress(1000); setState(true);
                                    }}></Button>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"maxScale"}
                        itShould={`change maxScale`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <DragSortableView {...requiredProps} delayLongPress={200}
                                        maxScale={maxScale} isDragFreely={false} renderItem={item => {
                                            return <View key={item.id} style={STYLES.box}>
                                                <Text style={STYLES.text}>{item.title}</Text>
                                            </View>;
                                        }}
                                    />

                                    <Button title='setMaxScale(2)' onPress={() => {
                                        setMaxScale(2); setState(true);
                                    }}></Button>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"minOpacity"}
                        itShould={`change minOpacity`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <DragSortableView {...requiredProps} isDragFreely={false} maxScale={1.2}
                                        minOpacity={minOpacity} renderItem={item => {
                                            return <View key={item.id} style={STYLES.box}>
                                                <Text style={STYLES.text}>{item.title}</Text>
                                            </View>;
                                        }}
                                    />
                                    <Button title='setMinOpacity(1)' onPress={() => {
                                        setMinOpacity(1); setState(true);
                                    }}></Button>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"scaleDuration"}
                        itShould={`change scaleDuration`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <DragSortableView {...requiredProps} maxScale={2} isDragFreely={false}
                                        scaleDuration={scaleDuration} renderItem={item => {
                                            return <View key={item.id} style={STYLES.box}>
                                                <Text style={STYLES.text}>{item.title}</Text>
                                            </View>;
                                        }}
                                    />
                                    <Button title='setScaleDuration(500)' onPress={() => {
                                        setScaleDuration(500); setState(true);
                                    }}></Button>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"slideDuration"}
                        itShould={`change slideDuration`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <DragSortableView {...requiredProps} maxScale={1.5} isDragFreely={false}
                                        slideDuration={slideDuration} renderItem={item => {
                                            return <View key={item.id} style={STYLES.box}>
                                                <Text style={STYLES.text}>{item.title}</Text>
                                            </View>;
                                        }}
                                    />
                                    <Button title='setSlideDuration(1000)' onPress={() => {
                                        setSlideDuration(1000); setState(true);
                                    }}></Button>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"onClickItem"}
                        itShould={`onClickItem Event`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <DragSortableView {...requiredProps} isDragFreely={false}
                                        onClickItem={() => { Alert.alert('onClickItem Event'); setState(true) }} renderItem={item => {
                                            return <View key={item.id} style={STYLES.box}>
                                                <Text style={STYLES.text}>{item.title}</Text>
                                            </View>;
                                        }}
                                    />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"onDataChange"}
                        itShould={`onDataChange Event`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <DragSortableView {...requiredProps} isDragFreely={false}
                                        onDataChange={() => { Alert.alert('onDataChange Event'); setState(true) }} renderItem={item => {
                                            return <View key={item.id} style={STYLES.box}>
                                                <Text style={STYLES.text}>{item.title}</Text>
                                            </View>;
                                        }}
                                    />
                                    <Button title='改变数据源' onPress={() => { setDataSource(newData); setState(true); }}></Button>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"sortable"}
                        itShould={`change sortable`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <DragSortableView {...requiredProps} isDragFreely={false}
                                        sortable={sortable} renderItem={item => {
                                            return <View key={item.id} style={STYLES.box}>
                                                <Text style={STYLES.text}>{item.title}</Text>
                                            </View>;
                                        }}
                                    />
                                    <Button title='setSortable(false)' onPress={() => {
                                        setSortable(false); setState(true);
                                    }}></Button>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"onDragStart"}
                        itShould={`onDragStart Event`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <DragSortableView {...requiredProps} isDragFreely={false}
                                        onDragStart={() => {
                                            Alert.alert('onDragStart事件触发')
                                            setState(true)
                                        }} renderItem={item => {
                                            return <View key={item.id} style={STYLES.box}>
                                                <Text style={STYLES.text}>{item.title}</Text>
                                            </View>;
                                        }}
                                    />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"onDragEnd"}
                        itShould={`onDragEnd Event`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <DragSortableView {...requiredProps} isDragFreely={false}
                                        onDragEnd={() => { Alert.alert('onDragEnd事件触发'); setState(true) }} renderItem={item => {
                                            return <View key={item.id} style={STYLES.box}>
                                                <Text style={STYLES.text}>{item.title}</Text>
                                            </View>;
                                        }}
                                    />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                     <TestCase
                        key={"onDragging"}
                        itShould={`onDragging Event`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <DragSortableView {...requiredProps} isDragFreely={false}
                                        onDragging={() => { console.log('onDragging事件触发了'); setState(true) }} renderItem={item => {
                                            return <View key={item.id} style={STYLES.box}>
                                                <Text style={STYLES.text}>{item.title}</Text>
                                            </View>;
                                        }}
                                    />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>
            </ScrollView>
        </Tester >
    );
}
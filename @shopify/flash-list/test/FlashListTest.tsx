import React, { useCallback, useRef, useState, useEffect } from 'react';
import {
    Animated,
    View,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    RefreshControl,
    ViewToken,
    TouchableHighlight
} from 'react-native';
import { TestCase, TestSuite, Tester } from '@rnoh/testerino';
import { FlashList, CellContainer } from '@shopify/flash-list';

ObjectDisplayer;

interface ItemData {
    title: string;
    id: string;
}

interface MessageItemData {
    textcontent: string;
    imgcontent: string;
    id: string;
    type: number;
}

const MessageDATA: MessageItemData[] = [
    {
        textcontent: 'ta',
        imgcontent: 'ia',
        id: '1',
        type: 0,
    },
    {
        textcontent: 'tb',
        imgcontent: 'ib',
        id: '2',
        type: 1,
    },
    {
        textcontent: 'tc',
        imgcontent: 'ic',
        id: '3',
        type: 0,
    },
    {
        textcontent: 'td',
        imgcontent: 'id',
        id: '4',
        type: 0,
    },
    {
        textcontent: 'te',
        imgcontent: 'ie',
        id: '5',
        type: 1,
    },
];

const generateArray = (size: number) => {
    const arr = new Array(size);
    for (let i = 0; i < size; i++) {
        arr[i] = i;
    }
    return arr;
};

const DATA: ItemData[] = [
    {
        id: 'gd5jc6gnbb2sbrz9w8z2',
        title: 'First Item',
    },
    {
        id: 'jb95igwbswt13etu073o',
        title: 'Second Item',
    },
    {
        id: 'zcp3zsdkkjmc7cx66hjl',
        title: 'Third Item',
    },
    {
        id: 'fx72rfguehrydmd4n21l',
        title: 'Fourth Item',
    },
    {
        id: '8kadvdlhtr7m3yv3fp4v',
        title: 'Fifth Item',
    },
];
type ItemProps = { title: string };
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 120,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
        height: 40,
        width: '100%',
    },
    emptyComponent: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    divider: {
        width: 1,
        height: 10,
        backgroundColor: "#DDD"
    }
});

const Item = ({ title }: ItemProps) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

function ViewabilityConfigTest({
    setObject,
}: {
    setObject: (obj: Object) => void;
}) {
    const viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 };
    const onViewableItemsChanged = useRef(
        (item: { viewableItems: Array<ViewToken>; changed: Array<ViewToken> }) => {
            setObject(item.viewableItems.map(i => i.item));
        },
    );
    return (
        <View style={{ height: 80 }}>
            <FlashList
                data={DATA}
                renderItem={renderItem}
                viewabilityConfig={viewabilityConfig}
                onViewableItemsChanged={onViewableItemsChanged.current}
            />
        </View>
    );
}

const renderItem = ({ item }: { item: ItemData }) => (
    <View
        style={{
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
        }}>
        <Text style={{ fontSize: 16 }}>{item.title}</Text>
    </View>
);

const renderMessage = ({ item }: { item: MessageItemData }) => {
    switch (item.type) {
        case 0:
            return <Text>{item.textcontent}</Text>;

        case 1:
            return <Text>{item.imgcontent}</Text>;
    }
};

const renderFooter = ({ item }: { item: ItemData }) => (
    <View
        style={{
            height: 120,
            backgroundColor: '#ccc',
            padding: 3
        }}>
        <Text style={{ fontSize: 16 }}>Footer</Text>
    </View>
);
const renderHeader = ({ item }: { item: ItemData }) => (
    <View
        style={{
            height: 120,
            backgroundColor: '#eee',
            padding: 3
        }}>
        <Text style={{ fontSize: 16 }}>Header</Text>
    </View>
);

const Empty = () => {
    const title = "List empty!"
    return (
        <View style={styles.emptyComponent}>
            <Text>{title}</Text>
        </View>
    );
};

const Divider = () => {
    return <View style={styles.divider} />;
}

const commonProps = {
    style: {
        height: 120,
    },
    data: DATA,
    nestedScrollEnabled: true,
    renderItem: ({ item }: { item: ItemData }) => <Item title={item.title} />,
    keyExtractor: ({ item }: { item: ItemData }) => item.id,
};

const overrideItemLayout = (
    layout: { span?: number; size?: number },
    item: number,
    index: number,
    maxColumns: number,
    extraData?: any,
) => {
    // 返回项布局的样式对象
    layout.size = 100;
    layout.span = index === 0 ? 2 : 1;
};

interface MultiSelectListState {
    selected: Map<string, boolean>;
}

interface SelectableListItemProps {
    id: string;
    onPressItem: (id: string) => void;
    selected: boolean;
    title: string;
}

class SelectableListItem extends React.PureComponent<SelectableListItemProps> {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        const textColor = this.props.selected ? 'red' : 'black';
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View>
                    <Text style={{ color: textColor }}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

class ExtraDataTestCase extends React.PureComponent<{}, MultiSelectListState> {
    state: MultiSelectListState = {
        selected: new Map<string, boolean>(),
    };

    _keyExtractor = (item: ItemData) => item.title;

    _onPressItem = (title: string) => {
        this.setState(state => {
            const selected = new Map(state.selected);
            selected.set(title, !selected.get(title));
            return { selected };
        });
    };

    _renderItem = ({ item }: { item: ItemData }) => (
        <SelectableListItem
            id={this._keyExtractor(item)}
            onPressItem={this._onPressItem}
            selected={!!this.state.selected.get(this._keyExtractor(item))}
            title={item.title}
        />
    );
    render() {
        return (
            <View style={{ height: 100 }}>
                <FlashList
                    data={DATA}
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

function BlankAreacase({
    setState,
}: {
    state: boolean;
    setState: (state: any) => void;
}) {
    return (
        <View style={{ height: 100 }}>
            <FlashList
                data={DATA}
                renderItem={renderItem}
                onBlankArea={(state: any) => {
                    setState(true);
                }}
            />
        </View>
    );
}

export const FlashListTest = () => {
    function ScrollToEndCase({
        state,
        setState,
    }: {
        state: boolean | undefined;
        setState: (state: any) => void;
    }) {
        const flatlistRef = useRef<FlashList>(null);
        const [error, setError] = useState('');
        return (
            <View style={{ height: 150 }}>
                <Button
                    label={'ScrollToEnd'}
                    onPress={() => {
                        flatlistRef.current?.scrollToEnd();
                        setState(true);
                    }}
                />
                <FlashList data={DATA} renderItem={renderItem} ref={flatlistRef} />
            </View>
        );
    }
    function ScrollToIndexCase({
        state,
        idx,
        setState,
    }: {
        state: boolean | undefined;
        idx: number;
        setState: (state: any) => void;
    }) {
        const flatlistRef = useRef<FlashList>(null);
        const [error, setError] = useState('');
        return (
            <View style={{ height: 150 }}>
                <Button
                    label={'ScrollToIndex'}
                    onPress={() => {
                        flatlistRef.current?.scrollToIndex({ index: idx });
                        setState(true);
                    }}
                />
                <FlashList data={DATA} renderItem={renderItem} ref={flatlistRef} />
            </View>
        );
    }

    function ScrollToItemCase({
        state,
        item,
        setState,
    }: {
        state: boolean | undefined;
        item: ItemData;
        setState: (state: any) => void;
    }) {
        const flatlistRef = useRef<FlashList>(null);
        const [error, setError] = useState('');
        return (
            <View style={{ height: 150 }}>
                <Button
                    label={'ScrollToItem'}
                    onPress={() => {
                        flatlistRef.current?.scrollToItem({ animated: true, item: item });
                        setState(true);
                    }}
                />
                <FlashList data={DATA} renderItem={renderItem} ref={flatlistRef} />
            </View>
        );
    }

    function ScrollToOffsetCase({
        state,
        offset,
        setState,
    }: {
        state: boolean | undefined;
        offset: number;
        setState: (state: any) => void;
    }) {
        const flatlistRef = useRef<FlashList>(null);
        const [error, setError] = useState('');
        return (
            <View style={{ height: 150 }}>
                <Button
                    label={'ScrollToOffset'}
                    onPress={() => {
                        flatlistRef.current?.scrollToOffset({
                            animated: true,
                            offset: offset,
                        });
                        setState(true);
                    }}
                />
                <FlashList data={DATA} renderItem={renderItem} ref={flatlistRef} />
            </View>
        );
    }

    function RecordInteractionCase({
        state,
        setState,
    }: {
        state: boolean | undefined;
        setState: (state: any) => void;
    }) {
        const flatlistRef = useRef<FlashList>(null);
        const [error, setError] = useState('');
        return (
            <View style={{ height: 150 }}>
                <Button
                    label={'recordInteraction'}
                    onPress={() => {
                        flatlistRef.current?.scrollToEnd();
                        flatlistRef.current?.recordInteraction()
                        setState(true);
                    }}
                />
                <FlashList data={DATA} renderItem={renderItem} ref={flatlistRef} />
            </View>
        );
    }

    function PrepareForLayoutAnimationRenderCase({
        state,
        setState,
    }: {
        state: boolean | undefined;
        setState: (state: any) => void;
    }) {
        const flatlistRef = useRef<FlashList>(null);
        return (
            <View style={{ height: 150 }}>
                <Button
                    label={'prepareForLayoutAnimationRender'}
                    onPress={() => {
                        if (data.length >= 2) {
                            removeItem(data.length - 1);
                            flatlistRef.current?.prepareForLayoutAnimationRender();
                            setState(true);
                        }
                    }}
                />
                <FlashList data={data} renderItem={myRenderItem} ref={flatlistRef} />
            </View>
        );
    }

    const removeItem = (item: number) => {
        setData(
            data.filter((dataItem) => {
                return dataItem !== item;
            })
        );
    };

    const myRenderItem = ({ item }: { item: number }) => {
        const backgroundColor = item % 2 === 0 ? "#00a1f1" : "#ffbb00";
        return (
            <View style={{ height: 50, backgroundColor: backgroundColor }} >
                <Text>Cell Id: {item.toString()}</Text>
            </View>
        );
    };

    const viewabilityConfigRef = useRef({
        itemVisiblePercentThreshold: 50,
        waitForInteraction: true,
    });

    const onViewableItemsChanged = () => {
        console.log('flashlist onViewableItemsChanged');
    };
    const viewabilityConfigCallbackPairs = [
        {
            viewabilityConfig: viewabilityConfigRef.current,
            onViewableItemsChanged,
        },
    ];

    const AnimatedCellContainer = Animated.createAnimatedComponent(CellContainer);
    const CustomCellRendererComponent = React.forwardRef((props: any, _) => {
        const offset = useRef(new Animated.Value(400)).current;
        const cellContainerRef = useRef<View>(null);

        useEffect(() => {
            Animated.sequence([
                Animated.delay(props.index * 50),
                Animated.spring(offset, {
                    toValue: 0,
                    useNativeDriver: true,
                }),
            ]).start();
        }, [props.index]);

        useEffect(() => {
            cellContainerRef.current?.setNativeProps({ opacity: 1 });
        });

        return (
            <AnimatedCellContainer
                ref={cellContainerRef}
                {...props}
                style={[
                    { opacity: 0 },
                    {
                        transform: [
                            {
                                translateY: offset.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -400],
                                }),
                            },
                        ],
                    },
                    props.style]}
            />
        );
    });

    CustomCellRendererComponent.displayName = "CustomCellRendererComponent";


    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState(generateArray(6))
    return (
        <Tester>
            <TestSuite name="FlashList">
                <TestCase itShould="onRefresh,refreshing">
                    <View style={{ height: 100 }}>
                        <FlashList
                            data={DATA}
                            renderItem={renderItem}
                            refreshing={refreshing}
                            onRefresh={() => {
                                setRefreshing(true);
                                setTimeout(() => {
                                    setRefreshing(false);
                                }, 2000);
                            }}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="progressViewOffset">
                    <View style={{ height: 100 }}>
                        <FlashList
                            data={DATA}
                            renderItem={renderItem}
                            refreshing={refreshing}
                            onRefresh={() => {
                                setRefreshing(true);
                                setTimeout(() => {
                                    setRefreshing(false);
                                }, 2000);
                            }}
                            progressViewOffset={50}
                        />
                    </View>
                </TestCase>
                <ScrollView>
                    <TestCase itShould="refreshControl">
                        <View style={{ height: 120 }}>
                            <FlashList data={DATA} renderItem={renderItem} refreshControl={<RefreshControl refreshing={true} />} />
                        </View>
                    </TestCase>
                    <TestCase itShould="CellRendererComponent">
                        <FlashList
                            data={DATA}
                            renderItem={renderItem}
                            CellRendererComponent={CustomCellRendererComponent}
                        />
                    </TestCase>
                    <TestCase
                        itShould="onLoad"
                        initialState={false}
                        arrange={({ state, setState }) => {
                            return (
                                <View style={{ height: 100 }}>
                                    <FlashList
                                        data={DATA}
                                        renderItem={renderItem}
                                        onLoad={(state: any) => {
                                            setState(true);
                                        }}
                                    />
                                </View>
                            );
                        }}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="scrollToEnd"
                        initialState={false}
                        arrange={({ state, setState }) => {
                            return <ScrollToEndCase state={state} setState={setState} />;
                        }}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="scrollToIndex 1"
                        initialState={false}
                        arrange={({ state, setState }) => {
                            return (
                                <ScrollToIndexCase state={state} idx={1} setState={setState} />
                            );
                        }}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="scrollToOffset 80"
                        initialState={false}
                        arrange={({ state, setState }) => {
                            return (
                                <ScrollToOffsetCase state={state} offset={80} setState={setState} />
                            );
                        }}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="scrollToItem Third Item"
                        initialState={false}
                        arrange={({ state, setState }) => {
                            return (
                                <ScrollToItemCase
                                    state={state}
                                    item={DATA[2]}
                                    setState={setState}
                                />
                            );
                        }}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="onEndReached"
                        initialState={false}
                        arrange={({ state, setState }) => {
                            return (
                                <View style={{ height: 100 }}>
                                    <FlashList
                                        data={DATA}
                                        renderItem={renderItem}
                                        onEndReached={() => {
                                            setState(true);
                                        }}
                                    />
                                </View>
                            );
                        }}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="onBlankArea"
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <View style={{ height: 100 }}>
                                    <FlashList
                                        data={DATA}
                                        style={{ height: 40 }}
                                        renderItem={renderItem}
                                        onBlankArea={(blankAreaEvent: {
                                            offsetStart: number;
                                            offsetEnd: number;
                                            blankArea: number;
                                        }) => {
                                            setState(true);
                                        }}
                                    />
                                </View>
                            );
                        }}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="viewabilityConfig,onViewableltemsChanged"
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <View style={{ height: 100 }}>
                                    <FlashList
                                        data={DATA}
                                        renderItem={renderItem}
                                        viewabilityConfig={{
                                            waitForInteraction: true,
                                            itemVisiblePercentThreshold: 10,
                                            minimumViewTime: 1000,
                                        }}
                                        onViewableItemsChanged={() => {
                                            setState(true);
                                        }}
                                    />
                                </View>
                            );
                        }}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="onEndReachedThreshold"
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <View style={{ height: 100 }}>
                                    <FlashList
                                        data={DATA}
                                        style={{ height: 40 }}
                                        renderItem={renderItem}
                                        onEndReachedThreshold={2}
                                        onEndReached={() => {
                                            setState(true);
                                        }}
                                    />
                                </View>
                            );
                        }}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase itShould="getItemType">
                        <FlashList
                            data={MessageDATA}
                            renderItem={renderMessage}
                            getItemType={item => {
                                console.log('flashlist getItemType type:' + item.type + ',id:' + item.id)
                                return item.type;
                            }}
                        />
                    </TestCase>

                    <TestCase itShould="data,renderItem">
                        <FlashList data={DATA} renderItem={renderItem} />
                    </TestCase>

                    <TestCase itShould="ListHeaderComponent">
                        <FlashList
                            data={DATA}
                            renderItem={renderItem}
                            ListHeaderComponent={renderHeader}
                        />
                    </TestCase>
                    <TestCase itShould="ListFooterComponent">
                        <FlashList
                            data={DATA}
                            renderItem={renderItem}
                            ListFooterComponent={renderFooter}
                        />
                    </TestCase>
                    <TestCase itShould="contentContainerStyle">
                        <FlashList
                            data={DATA}
                            renderItem={renderItem}
                            contentContainerStyle={{ padding: 10, backgroundColor: 'blue' }}
                        />
                    </TestCase>
                    <TestCase itShould="drawDistance">
                        <FlashList
                            data={DATA}
                            renderItem={renderItem}
                            drawDistance={30}
                        />
                    </TestCase>
                    <TestCase itShould="estimatedListSize, estimatedItemSize">
                        <FlashList
                            data={DATA}
                            renderItem={renderItem}
                            estimatedListSize={{ width: 384, height: 753 }}
                            estimatedItemSize={33}
                        />
                    </TestCase>
                    <TestCase itShould="extraData">
                        <ExtraDataTestCase />
                    </TestCase>

                    <TestCase modal itShould="display an array of fully visible items">
                        <ObjectDisplayer
                            renderContent={setObject => {
                                return <ViewabilityConfigTest setObject={setObject} />;
                            }}
                        />
                    </TestCase>
                    <TestCase itShould="horizontal">
                        <FlashList data={DATA} renderItem={renderItem} horizontal={true} />
                    </TestCase>
                    <TestCase itShould="horizontal_false">
                        <FlashList data={DATA} renderItem={renderItem} horizontal={false} />
                    </TestCase>
                    <TestCase itShould="keyExtractor">
                        <FlashList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={(item: { id: any }) => item.id}
                        />
                    </TestCase>
                    <TestCase itShould="numColumns">
                        <FlashList
                            data={DATA}
                            renderItem={renderItem}
                            horizontal={false}
                            numColumns={3}
                        />
                    </TestCase>

                    <TestCase itShould="overrideItemLayout">
                        <FlashList
                            data={DATA}
                            numColumns={3}
                            renderItem={renderItem}
                            overrideItemLayout={overrideItemLayout}
                        />
                    </TestCase>
                    <TestCase itShould="disableAutoLayout">
                        <FlashList
                            data={DATA}
                            renderItem={renderItem}
                            disableAutoLayout={true}
                        />
                    </TestCase>
                    <TestCase itShould="disableHorizontalListHeightMeasurement">
                        <FlashList
                            data={DATA}
                            renderItem={renderItem}
                            disableHorizontalListHeightMeasurement={true}
                        />
                    </TestCase>
                    <TestCase itShould="ListEmptyComponent">
                        <FlashList
                            renderItem={renderItem}
                            ListHeaderComponent={renderHeader}
                            ListFooterComponent={renderFooter}
                            ListEmptyComponent={Empty()}
                            ItemSeparatorComponent={Divider}
                            data={[]}
                            estimatedItemSize={10}
                        />
                    </TestCase>
                    <TestCase itShould="renderScrollComponent">
                        <View style={{ height: 100 }}>
                            <FlashList
                                renderItem={renderItem}
                                ItemSeparatorComponent={Divider}
                                data={DATA}
                                estimatedItemSize={40}
                                nestedScrollEnabled={true}
                                renderScrollComponent={props => {
                                    console.log('flashlist renderScrollComponent do')
                                    return (<ScrollView nestedScrollEnabled {...props} />)
                                }}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="ListHeaderComponentStyle,ItemSeparatorComponent">
                        <FlashList
                            renderItem={renderItem}
                            ListHeaderComponent={renderHeader}
                            ListHeaderComponentStyle={{ backgroundColor: 'lightblue', padding: 20 }}
                            ItemSeparatorComponent={Divider}
                            data={DATA}
                            estimatedItemSize={40}
                        />
                    </TestCase>
                    <TestCase itShould="ListFooterComponentStyle">
                        <FlashList
                            renderItem={renderItem}
                            ListFooterComponent={renderFooter}
                            ListFooterComponentStyle={{ backgroundColor: 'lightblue', padding: 20 }}
                            ItemSeparatorComponent={Divider}
                            data={DATA}
                            estimatedItemSize={40}
                        />
                    </TestCase>
                    <TestCase itShould="estimatedFirstItemOffset,initialScrollIndex">
                        <View style={{ height: 100 }}>
                            <FlashList
                                renderItem={renderItem}
                                ItemSeparatorComponent={Divider}
                                estimatedFirstItemOffset={60}
                                initialScrollIndex={1}
                                data={DATA}
                                estimatedItemSize={50}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="prepareForLayoutAnimationRender"
                        initialState={false}
                        arrange={({ state, setState }) => {
                            return <PrepareForLayoutAnimationRenderCase state={state} setState={setState} />;
                        }}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase itShould="disableHorizontalListHeightMeasurement">
                        <FlashList
                            horizontal={false}
                            data={DATA}
                            renderItem={renderItem}
                            disableHorizontalListHeightMeasurement={true}
                        />
                    </TestCase>
                    <TestCase itShould="viewabilityConfigCallbackPairs">
                        <View style={{ height: 100 }}>
                            <FlashList
                                data={DATA}
                                renderItem={renderItem}
                                viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="overrideProps">
                        <FlashList
                            data={DATA}
                            renderItem={renderItem}
                            overrideProps={{
                                contentContainerStyle: { backgroundColor: 'red' }
                            }}
                        />
                    </TestCase>
                    <TestCase
                        itShould="recordInteraction"
                        initialState={false}
                        arrange={({ state, setState }) => {
                            return <RecordInteractionCase state={state} setState={setState} />;
                        }}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase itShould="inverted">
                        <FlashList
                            data={DATA}
                            renderItem={renderItem}
                            inverted={true}
                        />
                    </TestCase>
                    <TestCase itShould="add space">
                        <View style={{ height: 800 }}>

                        </View>
                    </TestCase>

                </ScrollView>
            </TestSuite>
        </Tester>
    );
};

export function ObjectDisplayer(props: {
    renderContent: (setObject: (obj: Object) => void) => any;
}) {
    const [object, setObject] = useState<Object>();

    return (
        <View style={{ width: '100%', height: '100%' }}>
            <Text
                style={{
                    width: '100%',
                    padding: 16,
                    fontSize: 8,
                    backgroundColor: '#EEE',
                }}>
                {object === undefined ? 'undefined' : JSON.stringify(object)}
            </Text>
            {props.renderContent(setObject)}
        </View>
    );
}

export const PALETTE = {
    REACT_CYAN_LIGHT: 'hsl(193, 95%, 68%)',
    REACT_CYAN_DARK: 'hsl(193, 95%, 30%)',
};

export function Button({ label, onPress }: { onPress: () => void; label: string }) {
    return (
        <TouchableHighlight
            underlayColor={PALETTE.REACT_CYAN_DARK}
            style={{
                paddingVertical: 6,
                paddingHorizontal: 12,
                backgroundColor: PALETTE.REACT_CYAN_LIGHT,
                borderWidth: 2,
                borderColor: PALETTE.REACT_CYAN_DARK,
            }}
            onPress={onPress}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12 }}>
                {label}
            </Text>
        </TouchableHighlight>
    );
}

const styles1 = StyleSheet.create({
    item: {
        // 定义列表项的样式
        padding: 10,
        marginVertical: 2,
        backgroundColor: 'lightblue',
    },

});
import React, { useCallback, useRef, useState } from 'react';

import {
    View,
    StyleSheet,
    Text,
    FlatListProps,
    TouchableOpacity,
    ViewToken,
    ScrollViewComponent,
    ScrollResponderMixin,
    Platform,
} from 'react-native';
import { Button } from '../components/Button';
import { ObjectDisplayer } from '../components/ObjectDisplayer';

ObjectDisplayer;
import { FlashList } from '@shopify/flash-list';




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
        }}>
        <Text style={{ fontSize: 16 }}>Footer</Text>
    </View>
);
const renderHeader = ({ item }: { item: ItemData }) => (
    <View
        style={{
            height: 120,
            backgroundColor: '#eee',
        }}>
        <Text style={{ fontSize: 16 }}>Header</Text>
    </View>
);

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
                    label={'Scroll to the 3rd item at the middle'}
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
                    label={'Scroll to the 3rd item at the middle'}
                    onPress={() => {
                        flatlistRef.current?.scrollToIndex({ index: idx });
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
                    label={'Scroll to the 3rd item at the middle'}
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
                    label={'Scroll to the 3rd item at the middle'}
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
                    label={'Scroll to the 3rd item at the middle'}
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

    const [refreshing, setRefreshing] = useState(false);
    return (
        <TestSuite name="FlashList">
            <TestCase
                itShould="onRefresh"
                initialState={false}
                arrange={({ setState }) => {
                    return (
                        <View style={{ height: 300 }}>
                            <FlashList
                                data={DATA}
                                renderItem={renderItem}
                                refreshing={refreshing}
                                onRefresh={() => {
                                    setRefreshing(true);
                                    setState(true);
                                    setTimeout(() => {
                                        setRefreshing(false);
                                    }, 2000);
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
                itShould="scrollToIndex"
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
                itShould="scrollToOffset"
                initialState={false}
                arrange={({ state, setState }) => {
                    return (
                        <ScrollToOffsetCase state={state} idx={1} setState={setState} />
                    );
                }}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />

            <TestCase
                itShould="scrollToItem"
                initialState={false}
                arrange={({ state, setState }) => {
                    return (
                        <ScrollToItemCase
                            state={state}
                            item={{ id: 'zcp3zsdkkjmc7cx66hjl', title: 'Third Item' }}
                            setState={setState}
                        />
                    );
                }}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />
            <TestCase
                itShould="scrollToItem"
                initialState={false}
                arrange={({ state, setState }) => {
                    return (
                        <ScrollToItemCase
                            state={state}
                            item={{ id: 'zcp3zsdkkjmc7cx66hjl', title: 'Third Item' }}
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
                                onEndReached={(state: any) => {
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
                                onBlankArea={(item: any) => {
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
                itShould="onViewableltemsChanged"
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
                                onViewableItemsChanged={(item: any) => {
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
                                onEndReached={(item: any) => {
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
                        return item.type;
                    }}
                />
            </TestCase>

            <TestCase itShould="data,renderItem">
                <FlashList style={{ height: 120 }} data={DATA} renderItem={renderItem} />
            </TestCase>

            <TestCase itShould="ListHeaderComponent">
                <FlashList
                    style={{ height: 120 }}
                    data={DATA}
                    renderItem={renderItem}
                    ListHeaderComponent={renderHeader}
                />
            </TestCase>
            <TestCase itShould="ListFooterComponent">
                <FlashList
                    style={{ height: 120 }}
                    data={DATA}
                    renderItem={renderItem}
                    ListFooterComponent={renderFooter}
                />
            </TestCase>
            <TestCase itShould="contentContainerStyle">
                <FlashList
                    style={{ height: 120 }}
                    data={DATA}
                    renderItem={renderItem}
                    contentContainerStyle={{ padding: 10, backagroundColor: 'blue' }}
                />
            </TestCase>
            <TestCase itShould="drawDistance">
                <FlashList
                    style={{ height: 120 }}
                    data={DATA}
                    renderItem={renderItem}
                    drawDistance={30}
                />
            </TestCase>
            <TestCase itShould="estimatedListSize">
                <FlashList
                    data={DATA}
                    renderItem={renderItem}
                    estimatedListSize={{ width: 384, height: 753 }}
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
                    numColumns={2}
                />
            </TestCase>

            <TestCase itShould="overrideItemLayout">
                <FlashList
                    style={{ height: 120 }}
                    data={DATA}
                    numColumns={3}
                    renderItem={renderItem}
                    overrideItemLayout={overrideItemLayout}
                />
            </TestCase>
            <TestCase itShould="refreshControl">
                <FlashList style={{ height: 120 }} data={DATA} renderItem={renderItem} />
            </TestCase>
            <TestCase itShould="renderScrollComponent">
                <FlashList style={{ height: 120 }} data={DATA} renderItem={renderItem} />
            </TestCase>
        </TestSuite>
    );
};

import React, {useCallback, useRef, useState, useEffect} from 'react';
import {
    Animated,
    View,
    ScrollView,
    StatusBar,
    StyleSheet,
    SafeAreaView,
    Text,
    Button,
    TouchableOpacity,
    RefreshControl,
    ViewToken,
    TouchableHighlight,
    Dimensions,
    Image
} from 'react-native';
import {TestCase, TestSuite, Tester} from '@rnoh/testerino';
import {FlashList, CellContainer} from '@shopify/flash-list';
import {IColumnsHandles} from 'react-native-waterflow-list/src/Columns';
import WaterFlow from 'react-native-waterflow-list/src/';

const width = Math.round((Dimensions.get('screen').width - 30) / 2);

const getItemData = (() => {
    let id = 0;
    return () => {
        id++;
        const height = Math.ceil(Math.random() * 1000);
        return {
            id,
            text: Math.random(),
            image_path: `https://picsum.photos/${width}/${height}/?random`,
            height,
            width,
        };
    };
})();

const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const itemDataFactory = () =>
    Array(10)
        .fill('')
        .map(() => getItemData());
interface IItem {
    id: number

    [index: string]: any
}


const renderItem = item => {
    return (
        <View style={{marginHorizontal: 5, paddingTop: 10}}>
            <Image style={{height: item.height, width: `100%`}} source={{uri: item.image_path}}/>
            <Text>ID:{item.id}</Text>
            <Text>{item.text}</Text>
        </View>
    );
};


export const waterflowListTest = () => {
    const [asyncHeightForItemData, setAsyncHeightForItemData] = React.useState<IItem[]>([]);
    const [heightForItemData, setHeightForItemData] = React.useState<IItem[]>([]);
    const [columnFlatListPropsData, setColumnFlatListPropsData] = React.useState<IItem[]>([]);
    const [columnsFlatListPropsData, setColumnsFlatListPropsData] = React.useState<IItem[]>([]);
    const [numColumnData, setNumColumnData] = React.useState<IItem[]>([]);
    const [endReachedData, setEndReachedData] = React.useState<IItem[]>([]);
    const [basicsData, setBasicsData] = React.useState<IItem[]>([]);
    const [clearData, setClearData] = React.useState<IItem[]>([]);
    const [loading, setLoading] = React.useState(false)
    const WaterFlowRef = React.useRef<IColumnsHandles>()
    const onLoadMore = React.useCallback(async () => {
        setLoading(true)
        await sleep(1000);
        setLoading(false)
        return setEndReachedData(endReachedData.concat(itemDataFactory()));
    }, [endReachedData]);
    const loadData = React.useCallback(async () => {
        await sleep(1000);
        return setColumnsFlatListPropsData(itemDataFactory());
    }, [columnsFlatListPropsData])
    function Clear({
                       state,
                       setState,
                   }: {
        state: boolean | undefined;
        setState: (state: any) => void;
    }) {
        const WaterFlowRef = useRef<WaterFlow>(null);
        const [error, setError] = useState('');
        return (
            <View style={{height: 300}}>
                <Button
                    title={"clear"}
                    onPress={() => {
                        WaterFlowRef.current?.clear();
                        setState(true);
                    }}
                />
                <WaterFlow
                    ref={WaterFlowRef}
                    data={clearData}
                    numColumns={2}
                    keyForItem={item => item.id}
                    renderItem={({item, index}) => {
                        return renderItem(item);
                    }}
                /> />
            </View>
        );
    }

    React.useEffect(() => {
        setAsyncHeightForItemData(itemDataFactory());
    }, []);

    React.useEffect(() => {
        setHeightForItemData(itemDataFactory());
    }, []);

    React.useEffect(() => {
        setColumnFlatListPropsData(itemDataFactory());
    }, []);

    React.useEffect(() => {
        setColumnsFlatListPropsData(itemDataFactory());
    }, []);

    React.useEffect(() => {
        setNumColumnData(itemDataFactory());
    }, []);

    React.useEffect(() => {
        setEndReachedData(itemDataFactory());
    }, []);

    React.useEffect(() => {
        setBasicsData(itemDataFactory());
    }, []);

    React.useEffect(() => {
        setClearData(itemDataFactory());
    }, []);

    return (
        <View style={{backgroundColor: 'black'}}>
            <StatusBar barStyle="light-content"/>
            <SafeAreaView>
                <ScrollView>
                    <Tester>
                        <TestSuite name="waterflowList">
                            <TestCase itShould="load_columnsFlatListProps">
                                <View style={{height: 300}}>
                                    <WaterFlow
                                        ref={WaterFlowRef}
                                        data={columnsFlatListPropsData}
                                        //keyForItem={item => item.id}
                                        numColumns={2}
                                        columnsFlatListProps={{
                                            ListHeaderComponent: () => <View><Text>Hello</Text></View>,
                                            refreshControl: <RefreshControl
                                                style={{zIndex: 10}}
                                                refreshing={loading}
                                                onRefresh={() => {
                                                    WaterFlowRef.current?.clear()
                                                    loadData()
                                                }}
                                                tintColor={'gray'}
                                            />
                                            style: {marginHorizontal: 10}
                                        }}
                                        renderItem={({item, index}) => {
                                            return renderItem(item);
                                        }}
                                    />
                                </View>
                            </TestCase>

                            <TestCase
                                itShould="clear"
                                initialState={false}
                                arrange={({state, setState}) => {
                                    return <Clear state={state} setState={setState}/>;
                                }}
                                assert={({state, expect}) => {
                                    expect(state).to.be.true;
                                }}
                            />

                            <TestCase itShould="load_asyncHeightForItem">
                                <View style={{height: 300}}>
                                    <WaterFlow
                                        data={asyncHeightForItemData}
                                        numColumns={2}
                                        keyForItem={item => item.id}
                                        /** 允许 heightForItem 为异步函数 */
                                        asyncHeightForItem={async item => {
                                            let height = 0
                                            try {
                                                height = await (new Promise<number>((resolve, reject) => {
                                                    Image.getSize(item.image_path, (_, imageHeight) => {
                                                        resolve(imageHeight)
                                                    }, reject)
                                                }))
                                            } catch (err) {
                                                console.log({err});
                                            }
                                            return height;
                                        }}

                                        renderItem={({item, index}) => {
                                            return renderItem(item);
                                        }}
                                    />
                                </View>
                            </TestCase>

                            <TestCase itShould="load_heightForItem">
                                <View style={{height: 300}}>
                                    <WaterFlow
                                        data={heightForItemData}
                                        numColumns={2}
                                        keyForItem={item => item.id}
                                        /** 如果高度已知则传此方法 */
                                        heightForItem={item => {
                                            return item.height;
                                        }}
                                        renderItem={({item, index}) => {
                                            return renderItem(item);
                                        }}
                                    />
                                </View>
                            </TestCase>

                            <TestCase itShould="load_columnFlatListProps">
                                <View style={{height: 300}}>
                                    <WaterFlow
                                        data={columnFlatListPropsData}
                                        numColumns={2}
                                        keyForItem={item => item.id}
                                        columnFlatListProps={{
                                            style: {marginHorizontal: 5,},
                                        }}
                                        renderItem={({item, index}) => {
                                            return renderItem(item);
                                        }}
                                    />
                                </View>
                            </TestCase>

                            <TestCase itShould="load_numColumn">
                                <View style={{height: 300}}>
                                    <WaterFlow
                                        data={numColumnData}
                                        keyForItem={item => item.id}
                                        numColumns={3}
                                        renderItem={({item, index}) => {
                                            return renderItem(item);
                                        }}
                                    />
                                </View>
                            </TestCase>

                            <TestCase itShould="basics_load">
                                <View style={{height: 300}}>
                                    <WaterFlow
                                        data={basicsData}
                                        numColumns={2}
                                        keyForItem={item => item.id}
                                        renderItem={({item, index}) => {
                                            return renderItem(item);
                                        }}
                                    />
                                </View>
                            </TestCase>

                            <TestCase itShould="load_onEndReached">
                                <View style={{height: 300}}>
                                    <WaterFlow
                                        data={endReachedData}
                                        numColumns={2}
                                        keyForItem={item => item.id}
                                        onEndReached={onLoadMore}
                                        renderItem={({item, index}) => {
                                            return renderItem(item);
                                        }}
                                    />
                                </View>
                            </TestCase>
                        </TestSuite>
                    </Tester>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};


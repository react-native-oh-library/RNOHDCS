import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet, View, TextInput, FlatList, Button, FlatListComponent, VirtualizedList } from 'react-native';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino'
import { MMKVLoader, ProcessingModes, create, useMMKVRef, useMMKVStorage, useIndex, getAllMMKVInstanceIDs } from 'react-native-mmkv-storage';

const storageString = new MMKVLoader().withInstanceID('storageString').initialize();
const useStorageString = create(storageString);

const MMKVKey = new MMKVLoader().withEncryption().encryptWithCustomKey('key').initialize();
const useStorageKey = create(MMKVKey);

const storageInt = new MMKVLoader().withInstanceID('storageInt').initialize();
const useStorageInt = create(storageInt);

const storageBoolean = new MMKVLoader().withInstanceID('storageBoolean').initialize();
const useStorageBoolean = create(storageBoolean);

const storageMap = new MMKVLoader().withInstanceID('storageMap').initialize();
const useStorageMap = create(storageMap);

const storageArray = new MMKVLoader().withInstanceID('storageArray').initialize();
const useStorageArray = create(storageArray);



const storageMultipleItems = new MMKVLoader().withInstanceID('storageMultipleItems').initialize();
const useStorageMultipleItems = create(storageMultipleItems);

const storageMultipleItems2 = new MMKVLoader().withInstanceID('storageMultipleItems2').initialize();
const useStorageMultipleItems2 = create(storageMultipleItems2)

const storageRef = new MMKVLoader().withInstanceID('storageRef').initialize();
const MMKV = new MMKVLoader().initialize();



const indexMMKV = new MMKVLoader().withInstanceID('indexMMKV').initialize();
const MMKVStorageTest = () => {
    indexMMKV.transactions.register('array', 'beforewrite', ({ key, value }) => {

    });

    const [tagIndex, setTagIndex] = useMMKVStorage('index', MMKV, ['abc', '123']);
    const [posts, update, remove] = useIndex(tagIndex, "object", MMKV);

    const name = useMMKVRef("name", storageRef, "")
    const [user, setUser] = useMMKVStorage("user", MMKV, "robert"); // robert is the default value

 



    //#region State & Props & Callbacks
    //String
    const [stringTest, setStringTest] = useStorageString('stringTest', 'andrew');
    const getStringTest = useCallback(() => {
        let stringTests = ['andrew', 'robert', 'jack', 'alison'];
        //如果当前索引是最后一个元素，返回数组的第一个元素
        let _stringTest = stringTests[stringTests.indexOf(stringTest) === stringTests.length - 1 ? 0 : stringTests.indexOf(stringTest) + 1];
        return _stringTest;
    }, [stringTest]);

    //Int
    const [intTest, setIntTest] = useStorageInt('intTest', 1);
    const getIntTest = useCallback(() => {
        let intTests = [1, 2, 3, 4];
        //如果当前索引是最后一个元素，返回数组的第一个元素
        let _intTest = intTests[intTests.indexOf(intTest) === intTests.length - 1 ? 0 : intTests.indexOf(intTest) + 1];
        return _intTest;
    }, [intTest]);

    //Boolean
    const [booleanTest, setBooleanTest] = useStorageBoolean('booleanTest', true);
    const getBooleanTest = useCallback(() => {
        let booleanTests = [true, false];
        let _booleanTest = booleanTests[booleanTests.indexOf(booleanTest) === booleanTests.length - 1 ? 0 : booleanTests.indexOf(booleanTest) + 1];
        return _booleanTest;
    }, [booleanTest]);

    //Map
    const [mapTest, setMapTest] = useStorageMap('mapTest', { user: 'andrew' });

    //Array
    const [arrayTest, setArrayTest] = useStorageArray('arrayTest', ["andrew", "dosen"]);

    //MultipleItems
    const [multipleItemsTest, setMultipleItemsTest] = useStorageMultipleItems('multipleItemsTest', [['user', 'shaoen']]);

    const [multipleItemsTest2, setMultipleItemsTest2] = useStorageMultipleItems2('multipleItemsTest2', "shaoen");

    const [MMKV1, setMMKV1] = useState(Object);
    const [MMKV2, setMMKV2] = useState(Object);
    const [MMKV3, setMMKV3] = useState(Object);
    const [MMKV4, setMMKV4] = useState(Object);
    const [MMKV5, setMMKV5] = useState(Object);
    const [MMKV6, setMMKV6] = useState(Object);
    const [MMKV7, setMMKV7] = useState(Object);
    const [MMKV8, setMMKV8] = useState(Object);
    const [MMKV9, setMMKV9] = useState(Object);
    const [MMKV10, setMMKV10] = useState(Object);
    const [MMKV11, setMMKV11] = useState("");
    const [MMKV12, setMMKV12] = useState(Object);
    const [MMKV13, setMMKV13] = useState(Object);
    const [MMKV14, setMMKV14] = useState(Object);
    const [MMKV15, setMMKV15] = useState(Object);
    const [MMKV16, setMMKV16] = useState(Object);
    const [MMKV17, setMMKV17] = useState(Object);
    const [MMKV18, setMMKV18] = useState(Object);
    const [MMKV19, setMMKV19] = useState(Object);
    const [MMKV20, setMMKV20] = useState(Object);
    const [MMKV21, setMMKV21] = useState(Object);
    const [MMKV22, setMMKV22] = useState(Object);
    const [MMKV23, setMMKV23] = useState(Object);


    //#endregion
    return (
        <>
            <Tester style={{ height: '100%' }}>
                <ScrollView style={{ marginBottom: 120 }}>
                    <TestSuite name='API'>
                        <View>
                            <TestCase
                                tags={['C_API']}
                                itShould="新建一个MMKV实例: new MMKVLoader().initialize()">

                                <>
                                    <Text>{JSON.stringify(MMKV1)}</Text>
                                    <View>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                const MMKV = new MMKVLoader().initialize();
                                                setMMKV1(MMKV)
                                            }}
                                        >
                                            <Text style={styles.buttonText}>
                                                创建MMKV实例
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </>
                            </TestCase>

                            <TestCase
                                tags={['C_API']}
                                itShould="新建一个MMKV实例: new MMKVLoader().withInstanceID('id')">
                                <View>
                                    <>
                                        <Text>{JSON.stringify(MMKV2)}</Text>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                const MMKV = new MMKVLoader().withInstanceID('id');
                                                setMMKV2(MMKV.options.instanceID)
                                            }}
                                        >
                                            <Text style={styles.buttonText}>
                                                创建MMKV实例并指定应使用的ID创建MMKV实例
                                            </Text>
                                        </TouchableOpacity>
                                    </>
                                </View>
                            </TestCase>
                            <TestCase
                                tags={['C_API']}
                                itShould="新建一个MMKV实例: new MMKVLoader().withEncryption().initialize()">

                                <View>
                                    <>
                                        <Text>{JSON.stringify(MMKV3)}</Text>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                const MMKV = new MMKVLoader().withEncryption().initialize();
                                                setMMKV3(MMKV.options.initWithEncryption)

                                            }}
                                        >
                                            <Text style={styles.buttonText}>
                                                创建MMKV实例并初始化时加密MMKV实例
                                            </Text>
                                        </TouchableOpacity>
                                    </>
                                </View>
                            </TestCase>

                            <TestCase
                                tags={['C_API']}
                                itShould="新建一个MMKV实例: new MMKVLoader().encryptWithCustomKey('key').initialize()">

                                <View>
                                    <>
                                        <Text>{JSON.stringify(MMKV4)}</Text>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                const MMKV = new MMKVLoader().withEncryption().encryptWithCustomKey('key').initialize();
                                                setMMKV4(MMKV.options.key)

                                            }}
                                        >
                                            <Text style={styles.buttonText}>
                                                创建MMKV实例并指定密码来加密存储
                                            </Text>
                                        </TouchableOpacity>
                                    </>
                                </View>
                            </TestCase>

                            <TestCase
                                tags={['C_API']}
                                itShould="MMKV.clearMemoryCache();">

                                <View>
                                    <>
                                        <Text>{JSON.stringify(MMKV5)}</Text>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                let clear = storageBoolean.clearMemoryCache();
                                                setMMKV5(clear)

                                            }}
                                        >
                                            <Text style={styles.buttonText}>
                                                从内存中清除
                                            </Text>
                                        </TouchableOpacity>
                                    </>
                                </View>
                            </TestCase>

                            <TestCase
                                tags={['C_API']}
                                itShould="MMKV.removeItem(key);">

                                <View>
                                    <>
                                        <Text>{JSON.stringify(MMKV6)}</Text>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {

                                                let removeResult = storageString.removeItem('stringTest');
                                                setMMKV6(removeResult)

                                            }}
                                        >
                                            <Text style={styles.buttonText}>
                                                删除给定键的项
                                            </Text>
                                        </TouchableOpacity>
                                    </>
                                </View>
                            </TestCase>
                            <TestCase
                                tags={['C_API']}
                                itShould="MMKV.clearStore();">

                                <View>
                                    <>
                                        <Text>{JSON.stringify(MMKV7)}</Text>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                let result = storageString.clearStore();
                                                setMMKV7(result)

                                            }}
                                        >
                                            <Text style={styles.buttonText}>
                                                清仓
                                            </Text>
                                        </TouchableOpacity>
                                    </>
                                </View>
                            </TestCase>

                            <TestCase
                                tags={['C_API']}
                                itShould="MMKV.getCurrentMMKVInstances();">

                                <View>
                                    <>
                                        <Text>{JSON.stringify(MMKV9)}</Text>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                let res = storageInt.getCurrentMMKVInstanceIDs()
                                                setMMKV9(res)

                                            }}
                                        >
                                            <Text style={styles.buttonText}>
                                                获取当前初始化的实例ID
                                            </Text>
                                        </TouchableOpacity>
                                    </>
                                </View>
                            </TestCase>
                            <TestCase
                                tags={['C_API']}
                                itShould="MMKV.getKey();">

                                <View>
                                    <>
                                        <Text>{JSON.stringify(MMKV10)}</Text>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                const MMKVKey = new MMKVLoader().withEncryption().encryptWithCustomKey('key').initialize();
                                                let result = MMKVKey.getKey();
                                                setMMKV10(result)
                                            }}
                                        >
                                            <Text style={styles.buttonText}>
                                                获取当前MMKV实例的加密密钥
                                            </Text>
                                        </TouchableOpacity>
                                    </>
                                </View>
                            </TestCase>
                        </View>
                        <View>
                            <View style={styles.unitView}>
                                <Text style={styles.unitViewText}>
                                    {typeof stringTest == "object" ? JSON.stringify(stringTest) : stringTest.toString()}
                                </Text>
                            </View>
                            <TestCase tags={['C_API']} itShould='setString: 调用实例的setString方法给定的键设置存储中的字符串值'>
                                <View>
                                    <TouchableOpacity
                                        style={styles.moduleButton}
                                        onPress={() => {
                                            storageString.setString('stringTest', getStringTest());
                                        }}
                                    >
                                        <Text style={styles.buttonText}>setString</Text>
                                    </TouchableOpacity>
                                </View>
                            </TestCase>
                            <TestCase
                                tags={['C_API']}
                                itShould="getString: 调用实例的getString方法获取给定键的字符串值">

                                <View>
                                    <>
                                        <Text>{MMKV11}</Text>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                let res = storageString.getString('stringTest');
                                                setMMKV11(res)

                                            }}
                                        >
                                            <Text style={styles.buttonText}>getString</Text>
                                        </TouchableOpacity>
                                    </>
                                </View>
                            </TestCase>

                        </View>
                        <View>
                            <View style={styles.unitView}>
                                <Text style={styles.unitViewText}>
                                    {intTest}
                                </Text>
                            </View>
                            <TestCase tags={['C_API']} itShould='调用实例的setInt方法给定的键设置存储中的数字值'>
                                <View>

                                    <TouchableOpacity
                                        style={styles.moduleButton}
                                        onPress={() => {
                                            storageInt.setInt('intTest', getIntTest());
                                            // setIntTest(3);
                                        }}
                                    >
                                        <Text style={styles.buttonText}>setInt</Text>
                                    </TouchableOpacity>
                                </View>
                            </TestCase>
                            <TestCase
                                tags={['C_API']}
                                itShould="调用实例的getInt方法获取给定键的数字值">

                                <View>
                                    <>
                                        <Text>{JSON.stringify(MMKV12)}</Text>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                let res = storageInt.getInt('intTest');
                                                setMMKV12(res)

                                            }}
                                        >
                                            <Text style={styles.buttonText}>getInt</Text>
                                        </TouchableOpacity>
                                    </>
                                </View>
                            </TestCase>
                        </View>
                        <View>
                            <View style={styles.unitView}>
                                <Text style={styles.unitViewText}>
                                    {typeof booleanTest == "object" ? JSON.stringify(booleanTest) : booleanTest.toString()}
                                </Text>
                            </View>
                            <TestCase tags={['C_API']} itShould='setBool: 调用实例的setBool方法给定的键设置存储中的布尔值'>
                                <View>
                                    <TouchableOpacity
                                        style={styles.moduleButton}
                                        onPress={() => {
                                            storageBoolean.setBool('booleanTest', getBooleanTest());
                                        }}
                                    >
                                        <Text style={styles.buttonText}>setBool</Text>
                                    </TouchableOpacity>
                                </View>
                            </TestCase>
                            <TestCase
                                tags={['C_API']}
                                itShould="getBool: 调用实例的getBool方法获取给定键的布尔值">

                                <View>
                                    <>
                                        <Text>{JSON.stringify(MMKV13)}</Text>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                let res = storageBoolean.getBool('booleanTest');
                                                setMMKV13(res)

                                            }}
                                        >
                                            <Text style={styles.buttonText}>getBool</Text>
                                        </TouchableOpacity>
                                    </>
                                </View>
                            </TestCase>

                        </View>
                        <View>
                            <View style={styles.unitView}>
                                <Text style={styles.unitViewText}>
                                    {JSON.stringify(mapTest)}
                                </Text>
                            </View>
                            <TestCase tags={['C_API']} itShould='setMap: 调用实例的setMap方法给定的键设置要存储的对象'>
                                <View>
                                    <TouchableOpacity
                                        style={styles.moduleButton}
                                        onPress={() => {
                                            storageMap.setMap('mapTest', { user: "jack" });
                                        }}
                                    >
                                        <Text style={styles.buttonText}>setMap</Text>
                                    </TouchableOpacity>
                                </View>
                            </TestCase>
                            <TestCase
                                tags={['C_API']}
                                itShould="getMap: 调用实例的getMap方法从存储中获取对象">

                                <View>
                                    <>
                                        <Text>{JSON.stringify(MMKV14)}</Text>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                let res = storageMap.getMap('mapTest');
                                                setMMKV14(res)

                                            }}
                                        >
                                            <Text style={styles.buttonText}>getMap</Text>
                                        </TouchableOpacity>
                                    </>
                                </View>
                            </TestCase>
                        </View>
                        <View>
                            <View style={styles.unitView}>
                                <Text style={styles.unitViewText}>
                                    {JSON.stringify(arrayTest)}
                                </Text>
                            </View>
                            <TestCase tags={['C_API']} itShould='setArray: 调用实例的setArray方法给定的键设置存储一个数组'>
                                <View>
                                    <TouchableOpacity
                                        style={styles.moduleButton}
                                        onPress={() => {
                                            storageArray.setArray('arrayTest', ["robert", "koen"]);
                                        }}
                                    >
                                        <Text style={styles.buttonText}>setArray</Text>
                                    </TouchableOpacity>
                                </View>
                            </TestCase>
                            <TestCase
                                tags={['C_API']}
                                itShould="getArray: 调用实例的getArray方法从存储中获取一个数组">

                                <View>
                                    <>
                                        <Text>{JSON.stringify(MMKV15)}</Text>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                let res = storageArray.getArray('arrayTest');
                                                setMMKV15(res)

                                            }}
                                        >
                                            <Text style={styles.buttonText}>getArray</Text>
                                        </TouchableOpacity>
                                    </>
                                </View>
                            </TestCase>
                        </View>
                        <View>
                            <View style={styles.unitView}>
                                <Text style={styles.unitViewText}>
                                    {JSON.stringify(multipleItemsTest)}
                                </Text>
                            </View>
                            <TestCase
                                tags={['C_API']}
                                itShould="getMultipleItems: 调用实例的getMultipleItems方法从存储中获取给定键数组的多个对象">

                                <View>
                                    <>
                                        <Text>{JSON.stringify(MMKV16)}</Text>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                storageMultipleItems.setMultipleItemsAsync([['user', 'shaoen']], 'string')
                                                let res = storageMultipleItems.getMultipleItems(['user'], 'string');
                                                setMMKV16(res)

                                            }}
                                        >
                                            <Text style={styles.buttonText}>getMultipleItems</Text>
                                        </TouchableOpacity>
                                    </>
                                </View>
                            </TestCase>
                        </View>
                        <View>
                            <View style={styles.unitView}>
                                <Text style={styles.unitViewText}>
                                    {typeof stringTest == "object" ? JSON.stringify(stringTest) : stringTest.toString()}
                                </Text>
                            </View>
                            <TestCase tags={['C_API']} itShould='setStringAsync: 调用实例的setStringAsync方法给定的键设置存储中的字符串值'>
                                <View>
                                    <TouchableOpacity
                                        style={styles.moduleButton}
                                        onPress={async () => {
                                            await storageString.setString('stringTest', getStringTest());
                                        }}
                                    >
                                        <Text style={styles.buttonText}>setStringAsync</Text>
                                    </TouchableOpacity>
                                </View>
                            </TestCase>
                            <TestCase
                                tags={['C_API']}
                                itShould="getStringAsync: 调用实例的getStringAsync方法获取给定键的字符串值">

                                <View>
                                    <>
                                        <Text>{JSON.stringify(MMKV17)}</Text>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={async () => {
                                                let res = await storageString.getStringAsync('stringTest');
                                                setMMKV17(res)

                                            }}
                                        >
                                            <Text style={styles.buttonText}>getStringAsync</Text>
                                        </TouchableOpacity>
                                    </>
                                </View>

                            </TestCase>
                        </View>
                        <View>
                            <View style={styles.unitView}>
                                <Text style={styles.unitViewText}>
                                    {typeof intTest == "object" ? JSON.stringify(intTest) : intTest.toString()}
                                </Text>
                            </View>
                            <TestCase tags={['C_API']} itShould='setIntAsync: 调用实例的setIntAsync方法给定的键设置存储中的数字值'>
                                <View>
                                    <TouchableOpacity
                                        style={styles.moduleButton}
                                        onPress={async () => {
                                            await storageInt.setIntAsync('intTest', getIntTest());
                                        }}
                                    >
                                        <Text style={styles.buttonText}>setIntAsync</Text>
                                    </TouchableOpacity>
                                </View>
                            </TestCase>
                            <TestCase
                                tags={['C_API']}
                                itShould="getIntAsync: 调用实例的getIntAsync方法获取给定键的数字值">

                                <View>
                                    <>
                                        <Text>{JSON.stringify(MMKV18)}</Text>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={async () => {
                                                let res = await storageInt.getIntAsync('intTest');
                                                setMMKV18(res)

                                            }}
                                        >
                                            <Text style={styles.buttonText}>getIntAsync</Text>
                                        </TouchableOpacity>
                                    </>
                                </View>
                            </TestCase>

                        </View>
                        <View>
                            <View style={styles.unitView}>
                                <Text style={styles.unitViewText}>
                                    {typeof booleanTest == "object" ? JSON.stringify(booleanTest) : booleanTest.toString()}
                                </Text>
                            </View>
                            <TestCase tags={['C_API']} itShould='setBoolAsync: 调用实例的setBoolAsync方法给定的键设置存储中的布尔值'>
                                <View>
                                    <TouchableOpacity
                                        style={styles.moduleButton}
                                        onPress={async () => {
                                            await storageBoolean.setBoolAsync('booleanTest', getBooleanTest());
                                        }}
                                    >
                                        <Text style={styles.buttonText}>setBoolAsync</Text>
                                    </TouchableOpacity>
                                </View>
                            </TestCase>
                            <TestCase
                                tags={['C_API']}
                                itShould="getBoolAsync: 调用实例的getBoolAsync方法获取给定键的布尔值">

                                <View>
                                    <>
                                        <Text>{JSON.stringify(MMKV19)}</Text>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={async () => {
                                                let res = await storageBoolean.getBoolAsync('booleanTest');
                                                setMMKV19(res)

                                            }}
                                        >
                                            <Text style={styles.buttonText}>getBoolAsync</Text>
                                        </TouchableOpacity>
                                    </>
                                </View>
                            </TestCase>

                        </View>
                        <View>
                            <View style={styles.unitView}>
                                <Text style={styles.unitViewText}>
                                    {JSON.stringify(mapTest)};
                                </Text>
                            </View>
                            <TestCase tags={['C_API']} itShould='setMapAsync: 调用实例的setMapAsync方法给定的键设置要存储的对象'>
                                <View>
                                    <TouchableOpacity
                                        style={styles.moduleButton}
                                        onPress={async () => {
                                            await storageMap.setMapAsync('mapTest', { user: "nick" });
                                        }}
                                    >
                                        <Text style={styles.buttonText}>setMapAsync</Text>
                                    </TouchableOpacity>
                                </View>
                            </TestCase>
                            <TestCase
                                tags={['C_API']}
                                itShould="getMapAsync: 调用实例的getMapAsync方法从存储中获取对象">

                                <View>
                                    <>
                                        <Text>{JSON.stringify(MMKV20)}</Text>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={async () => {
                                                let res = await storageMap.getMapAsync('mapTest');
                                                setMMKV20(res)

                                            }}
                                        >
                                            <Text style={styles.buttonText}>getMapAsync</Text>
                                        </TouchableOpacity>
                                    </>
                                </View>
                            </TestCase>
                        </View>
                        <View>
                            <View style={styles.unitView}>
                                <Text style={styles.unitViewText}>
                                    {JSON.stringify(arrayTest)};
                                </Text>
                            </View>
                            <TestCase tags={['C_API']} itShould='setArrayAsync: 调用实例的setArrayAsync方法给定的键设置存储一个数组'>
                                <View>
                                    <TouchableOpacity
                                        style={styles.moduleButton}
                                        onPress={async () => {
                                            await storageArray.setArrayAsync('arrayTest', ["deck", "leck"]);
                                        }}
                                    >
                                        <Text style={styles.buttonText}>setArrayAsync</Text>
                                    </TouchableOpacity>
                                </View>
                            </TestCase>
                            <TestCase
                                tags={['C_API']}
                                itShould="getArrayAsync: 调用实例的getArrayAsync方法从存储中获取一个数组">

                                <View>
                                    <>
                                        <Text>{JSON.stringify(MMKV21)}</Text>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={async () => {
                                                let res = await storageArray.getArrayAsync('arrayTest');
                                                setMMKV21(res)

                                            }}
                                        >
                                            <Text style={styles.buttonText}>getArrayAsync</Text>
                                        </TouchableOpacity>
                                    </>
                                </View>
                            </TestCase>
                        </View>
                        <View>
                            <View style={styles.unitView}>
                                <Text style={styles.unitViewText}>
                                    {JSON.stringify(multipleItemsTest2)}
                                </Text>
                            </View>
                            <TestCase tags={['C_API']} itShould='setMultipleItemsAsync: 调用实例的setMultipleItemsAsync方法给定的键设置存储一个数组'>
                                <View>
                                    <TouchableOpacity
                                        style={styles.moduleButton}
                                        onPress={() => {
                                            storageMultipleItems2.setMultipleItemsAsync([['multipleItemsTest2', '123']], 'string')
                                        }}
                                    >
                                        <Text style={styles.buttonText}>setMultipleItemsAsync</Text>
                                    </TouchableOpacity>
                                </View>
                            </TestCase>
                            <TestCase
                                tags={['C_API']}
                                itShould="getMultipleItemsAsync: 调用实例的getmultipleItems方法从存储中获取给定键数组的多个对象">

                                <View>
                                    <>
                                        <Text>{JSON.stringify(MMKV22)}</Text>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={async () => {

                                                let res = await storageMultipleItems2.getMultipleItemsAsync(['multipleItemsTest2'], 'string');
                                                setMMKV22(res)

                                            }}
                                        >
                                            <Text style={styles.buttonText}>getMultipleItemsAsync</Text>
                                        </TouchableOpacity>
                                    </>
                                </View>
                            </TestCase>

                        </View>

                        <View>

                            <TestCase
                                tags={['C_API']}
                                itShould="indexer.hasKey: 检查给定键是否存在任何数据。">

                                <View>
                                    <>
                                        <Text>{JSON.stringify(MMKV23)}</Text>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {

                                                let res = storageString.indexer.hasKey("stringTest");
                                                setMMKV23(res)

                                            }}
                                        >
                                            <Text style={styles.buttonText}>indexer.hasKey</Text>
                                        </TouchableOpacity>
                                    </>
                                </View>

                            </TestCase>
                        </View>


                        <View>
                            <TestCase
                                tags={['C_API']}
                                itShould="从实例中创建MMKVRefHook">
                                <View>
                                    <TextInput style={styles.unitViewText}
                                        defaultValue={name.current}
                                        onChangeText={(value: string) => {
                                            name.current = value
                                        }}
                                    ></TextInput>
                                </View>
                            </TestCase>
                        </View>

                        <View>
                            <TestCase
                                tags={['C_API']}
                                itShould="从实例中创建MMKVStorageHook">
                                <View>
                                    <Text style={styles.unitViewText}>{user}</Text>
                                </View>
                            </TestCase>
                            <TestCase
                                tags={['C_API']}
                                itShould="验证MMKVStorageHook持久化">
                                <View>
                                    <TouchableOpacity
                                        style={styles.moduleButton}
                                        onPress={() => {
                                            setUser("Kakashi")
                                        }}
                                    >
                                        <Text style={styles.buttonText}>setUser("Kakashi")</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginTop: 2 }}>
                                    <TouchableOpacity
                                        style={styles.moduleButton}
                                        onPress={() => {
                                            setUser("Naruto")
                                        }}
                                    >
                                        <Text style={styles.buttonText}>setUser("Naruto")</Text>
                                    </TouchableOpacity>
                                </View>
                            </TestCase>
                        </View>
                    </TestSuite>
                </ScrollView>





            </Tester>
        </>
    )
}

const styles = StyleSheet.create({
    moduleButton: {
        backgroundColor: 'deepskyblue',
        height: 32,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#fff',
        textAlign: 'center',
        lineHeight: 32,
        verticalAlign: 'middle'
    },
    unitView: {
        backgroundColor: 'white',
        marginTop: 20,
        marginBottom: 10,
    },
    unitViewText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
        textAlign: 'center',
        lineHeight: 32,
        verticalAlign: 'middle'
    }
})

export default MMKVStorageTest;
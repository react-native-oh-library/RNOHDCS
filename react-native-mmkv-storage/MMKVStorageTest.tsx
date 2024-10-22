import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet, View, TextInput, FlatList, Button, FlatListComponent, VirtualizedList } from 'react-native';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino'
import { MMKVLoader, ProcessingModes, create, useMMKVRef, useMMKVStorage, useIndex, getAllMMKVInstanceIDs } from 'react-native-mmkv-storage';

const storageString = new MMKVLoader().withInstanceID('storageString').initialize();
const useStorageString = create(storageString);

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

    //#endregion
    return (
        <>
            <Tester style={{ height: '100%' }}>
                <ScrollView style={{ marginBottom:70 }}>
                    <TestSuite name='API'>
                        <View>
                            <TestCase
                                tags={['C_API']}
                                itShould="新建一个MMKV实例: new MMKVLoader().initialize()"
                                initialState={false}
                                arrange={({ setState }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                const MMKV = new MMKVLoader().initialize();
                                                if (MMKV) {
                                                    setState(true)
                                                } else {
                                                    setState(false)
                                                }
                                            }}
                                        >
                                            <Text style={styles.buttonText}>
                                                创建MMKV实例
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />

                            <TestCase
                                tags={['C_API']}
                                itShould="新建一个MMKV实例: new MMKVLoader().withInstanceID('id')"
                                initialState={false}
                                arrange={({ setState }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                const MMKV = new MMKVLoader().withInstanceID('id');
                                                if (MMKV.options.instanceID) {
                                                    setState(true)
                                                } else {
                                                    setState(false)
                                                }
                                            }}
                                        >
                                            <Text style={styles.buttonText}>
                                                创建MMKV实例并指定应使用的ID创建MMKV实例
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />

                            <TestCase
                                tags={['C_API']}
                                itShould="新建一个MMKV实例: new MMKVLoader().withEncryption().initialize()"
                                initialState={false}
                                arrange={({ setState }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                const MMKV = new MMKVLoader().withEncryption().initialize();
                                                if (MMKV.options.initWithEncryption) {
                                                    setState(true)
                                                } else {
                                                    setState(false)
                                                }
                                            }}
                                        >
                                            <Text style={styles.buttonText}>
                                                创建MMKV实例并初始化时加密MMKV实例
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />

                            <TestCase
                                tags={['C_API']}
                                itShould="新建一个MMKV实例: new MMKVLoader().encryptWithCustomKey('key').initialize()"
                                initialState={false}
                                arrange={({ setState }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                const MMKV = new MMKVLoader().withEncryption().encryptWithCustomKey('key').initialize();
                                                if (MMKV.options.initWithEncryption) {
                                                    setState(true)
                                                } else {
                                                    setState(false)
                                                }
                                            }}
                                        >
                                            <Text style={styles.buttonText}>
                                                创建MMKV实例并指定密码来加密存储
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />

                            <TestCase
                                tags={['C_API']}
                                itShould="MMKV.clearMemoryCache();"
                                initialState={false}
                                arrange={({ setState }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                if (storageBoolean.clearMemoryCache()) {
                                                    setState(true)
                                                } else {
                                                    setState(false)
                                                }
                                            }}
                                        >
                                            <Text style={styles.buttonText}>
                                                从内存中清除
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />

                            <TestCase
                                tags={['C_API']}
                                itShould="MMKV.removeItem(key);"
                                initialState={false}
                                arrange={({ setState }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                storageString.removeItem('stringTest');
                                                if (!storageString.options.key) {
                                                    setState(true)
                                                } else {
                                                    setState(false)
                                                }
                                            }}
                                        >
                                            <Text style={styles.buttonText}>
                                                删除给定键的项
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />

                            <TestCase
                                tags={['C_API']}
                                itShould="MMKV.getAllMMKVInstanceIDs();"
                                initialState={false}
                                arrange={({ setState }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                let res = getAllMMKVInstanceIDs()
                                                console.log(res);
                                                if (res) {
                                                    setState(true)
                                                } else {
                                                    setState(false)
                                                }
                                            }}
                                        >
                                            <Text style={styles.buttonText}>
                                                返回创建的所有MMKV实例ID的列表
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />

                            <TestCase
                                tags={['C_API']}
                                itShould="MMKV.getCurrentMMKVInstances();"
                                initialState={false}
                                arrange={({ setState }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                let res = storageInt.getCurrentMMKVInstanceIDs()
                                                console.log(res);
                                                if (res) {
                                                    setState(true)
                                                } else {
                                                    setState(false)
                                                }
                                            }}
                                        >
                                            <Text style={styles.buttonText}>
                                                获取当前初始化的实例ID
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />

                            <TestCase
                                tags={['C_API']}
                                itShould="MMKV.getKey();"
                                initialState={false}
                                arrange={({ setState }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                if (storageInt.getKey()) {
                                                    setState(true)
                                                } else {
                                                    setState(false)
                                                }
                                            }}
                                        >
                                            <Text style={styles.buttonText}>
                                                获取当前MMKV实例的加密密钥
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />
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
                                itShould="getString: 调用实例的getString方法获取给定键的字符串值"
                                initialState={false}
                                arrange={({ setState }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                let res = storageString.getString('stringTest');
                                                if (res === stringTest) {
                                                    setState(true)
                                                } else {
                                                    setState(false)
                                                }
                                            }}
                                        >
                                            <Text style={styles.buttonText}>getString</Text>
                                        </TouchableOpacity>
                                    </View>

                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />
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
                                itShould="调用实例的getInt方法获取给定键的数字值"
                                initialState={false}
                                arrange={({ setState }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                let res = storageInt.getInt('intTest');
                                                if (res === intTest) {
                                                    setState(true)
                                                } else {
                                                    setState(false)
                                                }
                                            }}
                                        >
                                            <Text style={styles.buttonText}>getInt</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />
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
                                itShould="getBool: 调用实例的getBool方法获取给定键的布尔值"
                                initialState={false}
                                arrange={({ setState }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                let res = storageBoolean.getBool('booleanTest');
                                                if (JSON.stringify(res) === JSON.stringify(booleanTest)) {
                                                    setState(true)
                                                } else {
                                                    setState(false)
                                                }
                                            }}
                                        >
                                            <Text style={styles.buttonText}>getBool</Text>
                                        </TouchableOpacity>
                                    </View>

                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />
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
                                itShould="getMap: 调用实例的getMap方法从存储中获取对象"
                                initialState={false}
                                arrange={({ setState }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                let res = storageMap.getMap('mapTest');
                                                if (JSON.stringify(res) === JSON.stringify(mapTest)) {
                                                    setState(true)
                                                } else {
                                                    setState(false)
                                                }
                                            }}
                                        >
                                            <Text style={styles.buttonText}>getMap</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />
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
                                itShould="getArray: 调用实例的getArray方法从存储中获取一个数组"
                                initialState={false}
                                arrange={({ setState }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                let res = storageArray.getArray('arrayTest');
                                                if (JSON.stringify(res) === JSON.stringify(arrayTest)) {
                                                    setState(true)
                                                } else {
                                                    setState(false)
                                                }
                                            }}
                                        >
                                            <Text style={styles.buttonText}>getArray</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />
                        </View>
                        <View>
                            <View style={styles.unitView}>
                                <Text style={styles.unitViewText}>
                                    {JSON.stringify(multipleItemsTest)}
                                </Text>
                            </View>
                            <TestCase
                                tags={['C_API']}
                                itShould="getMultipleItems: 调用实例的getMultipleItems方法从存储中获取给定键数组的多个对象"
                                initialState={false}
                                arrange={({ setState }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {
                                                storageMultipleItems.setMultipleItemsAsync([['user', 'shaoen']], 'string')
                                                let res = storageMultipleItems.getMultipleItems(['user'], 'string');
                                                if (JSON.stringify(res) === JSON.stringify(multipleItemsTest)) {
                                                    setState(true)
                                                } else {
                                                    setState(false)
                                                }
                                            }}
                                        >
                                            <Text style={styles.buttonText}>getMultipleItems</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />
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
                                itShould="getStringAsync: 调用实例的getStringAsync方法获取给定键的字符串值"
                                initialState={false}
                                arrange={({ setState }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={async () => {
                                                let res = await storageString.getStringAsync('stringTest');
                                                if (res === stringTest) {
                                                    await storageString.setString('stringTest', res)
                                                    setState(true)
                                                } else {
                                                    setState(false)
                                                }
                                            }}
                                        >
                                            <Text style={styles.buttonText}>getStringAsync</Text>
                                        </TouchableOpacity>
                                    </View>

                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />
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
                                itShould="getIntAsync: 调用实例的getIntAsync方法获取给定键的数字值"
                                initialState={false}
                                arrange={({ setState }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={async () => {
                                                let res = await storageInt.getIntAsync('intTest');
                                                if (res === intTest) {
                                                    await storageInt.setIntAsync('intTest', res)
                                                    setState(true)
                                                } else {
                                                    setState(false)
                                                }
                                            }}
                                        >
                                            <Text style={styles.buttonText}>getIntAsync</Text>
                                        </TouchableOpacity>
                                    </View>

                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />
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
                                itShould="getBoolAsync: 调用实例的getBoolAsync方法获取给定键的布尔值"
                                initialState={false}
                                arrange={({ setState }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={async () => {
                                                let res = await storageBoolean.getBoolAsync('booleanTest');
                                                if (JSON.stringify(res) === JSON.stringify(booleanTest)) {
                                                    setState(true)
                                                } else {
                                                    setState(false)
                                                }
                                            }}
                                        >
                                            <Text style={styles.buttonText}>getBoolAsync</Text>
                                        </TouchableOpacity>
                                    </View>

                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />
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
                                itShould="getMapAsync: 调用实例的getMapAsync方法从存储中获取对象"
                                initialState={false}
                                arrange={({ setState }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={async () => {
                                                let res = await storageMap.getMapAsync('mapTest');
                                                if (JSON.stringify(res) === JSON.stringify(mapTest)) {
                                                    setState(true)
                                                } else {
                                                    setState(false)
                                                }
                                            }}
                                        >
                                            <Text style={styles.buttonText}>getMapAsync</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />
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
                                itShould="getArrayAsync: 调用实例的getArrayAsync方法从存储中获取一个数组"
                                initialState={false}
                                arrange={({ setState }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={async () => {
                                                let res = await storageArray.getArrayAsync('arrayTest');
                                                console.log(JSON.stringify(arrayTest))
                                                console.log(JSON.stringify(res))
                                                if (JSON.stringify(res) === JSON.stringify(arrayTest)) {
                                                    setState(true)
                                                } else {
                                                    setState(false)
                                                }
                                            }}
                                        >
                                            <Text style={styles.buttonText}>getArrayAsync</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />
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
                                itShould="getMultipleItemsAsync: 调用实例的getmultipleItems方法从存储中获取给定键数组的多个对象"
                                initialState={false}
                                arrange={({ setState }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={async () => {

                                                let res = await storageMultipleItems2.getMultipleItemsAsync(['multipleItemsTest2'], 'string');
                                                console.log(multipleItemsTest2);
                                                console.log(res);

                                                if (JSON.stringify(res) === JSON.stringify([["multipleItemsTest2", `${multipleItemsTest2}`]])) {
                                                    setState(true)
                                                } else {
                                                    setState(false)
                                                }
                                            }}
                                        >
                                            <Text style={styles.buttonText}>getMultipleItemsAsync</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />
                        </View>

                        <View>
                            <TestCase
                                tags={['C_API']}
                                itShould="indexer.hasKey: 检查给定键是否存在任何数据。"
                                initialState={false}
                                arrange={({ setState }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={styles.moduleButton}
                                            onPress={() => {

                                                let res = storageString.indexer.hasKey("stringTest");
                                                console.log(res);

                                                if (res) {
                                                    setState(true)
                                                } else {
                                                    setState(false)
                                                }
                                            }}
                                        >
                                            <Text style={styles.buttonText}>indexer.hasKey</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />
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
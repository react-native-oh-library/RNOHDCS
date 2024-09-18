import React, { useCallback, useState } from 'react';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import { View, Button, ScrollView, Text, StyleSheet, TextInput } from 'react-native';
import RNDefaultPreference from 'react-native-default-preference'

export function PreferenceDemo() {
    const [resTest, setResTest] = useState('');
    const [preName, setPreName] = useState('');
    const handleSetItem = useCallback((key: string, value: string) => {
        try {
            RNDefaultPreference.set(key, value)
            if (key == 'key1') {
                setResTest('成功存入key1')
            } else {
                setResTest('成功存入key2')
            }
        } catch (error) {
            setResTest('存入失败')
        }

    }, []);

    const handleGetItem = useCallback((key: string) => {
        RNDefaultPreference.get(key).then(res => {
            setResTest(JSON.stringify(res))
        });
    }, []);

    const clear = useCallback(() => {
        try {
            RNDefaultPreference.clear('key1');
            setResTest('删除成功')
        } catch (error) {
            setResTest('删除失败')
        }
    }, [])

    const getAll = useCallback(() => {
        RNDefaultPreference.getAll().then(res => { setResTest(JSON.stringify(res)) });
    }, [])

    const clearAll = useCallback(() => {
        RNDefaultPreference.clearAll()
    }, [])

    const setMultiple = useCallback(() => {
        try {
            RNDefaultPreference.setMultiple({ key3: 'value3', key4: 'value4' })
            setResTest('成功存入')
        } catch (error) {
            setResTest('失败')
        }

    }, [])

    const getMultiple = useCallback(() => {
        RNDefaultPreference.getMultiple(['key3', 'key4']).then(res => { setResTest(JSON.stringify(res)) });
    }, [])

    const clearMultiple = useCallback(() => {
        try {
            RNDefaultPreference.clearMultiple(['key1', 'key2', 'key3', 'key4']).then(res => { setResTest(JSON.stringify(res)) });
            setResTest('全部删除成功')
        } catch (error) {
            setResTest('全部删除失败')
        }

    }, [])

    const setName = useCallback((pname: string) => {
        RNDefaultPreference.setName(pname ? pname : 'examples1')
    }, [])

    const getName = useCallback(() => {
        RNDefaultPreference.getName().then(res => {
            setResTest(res)
        })

    }, [])
    return (
        <Tester style={{ height: '100%' }}>
            <View style={styles.content}>
                <Text style={styles.contentTest}>
                    {resTest}
                </Text>
            </View>
            <ScrollView style={{ marginTop: 50 }}>
                <TestSuite name='PreferenceInfoDemo' >
                    <TestCase
                        itShould="存入键值对key:key1 value:value1"
                        tags={["dev"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={async () => {
                                try {
                                    handleSetItem('key1', 'value1')
                                    setState(true)
                                } catch {
                                    setState(false)
                                }
                            }} title={'Add item using setItem'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />

                    <TestCase
                        itShould="存入键值对key:key2 value:value2"
                        tags={["dev"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={async () => {
                                try {
                                    await handleSetItem('key2', 'value2')
                                    setState(true)
                                } catch {
                                    setState(false)
                                }
                            }} title={'Add item using setItem'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />

                    <TestCase
                        itShould="取出键值对value1"
                        tags={["dev"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={async () => {
                                try {
                                    await handleGetItem('key1')
                                    setState(true)
                                } catch {
                                    setState(false)
                                }
                            }} title={'Add item using getItem'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />

                    <TestCase
                        itShould="取出键值对value2"
                        tags={["dev"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={async () => {
                                try {
                                    await handleGetItem('key2')
                                    setState(true)
                                } catch {
                                    setState(false)
                                }


                            }} title={'Add item using getItem'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />



                    <TestCase
                        itShould="删除'key1'"
                        tags={["dev"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={async () => {
                                try {
                                    await clear()
                                    setState(true)
                                } catch {
                                    setState(false)
                                }


                            }} title={'Add item using deleteItem'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />

                    <TestCase
                        itShould="删除全部"
                        tags={["dev"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={async () => {
                                try {
                                    await clearAll()
                                    setState(true)
                                } catch {
                                    setState(false)
                                }


                            }} title={'Add item using deleteItem'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />

                    <TestCase
                        itShould="删除全部键值对"
                        tags={["dev"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={async () => {
                                try {
                                    await clearMultiple()
                                    setState(true)
                                } catch {
                                    setState(false)
                                }


                            }} title={'Add item using clearMultiple'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />


                    <TestCase
                        itShould="获取全部键值对"
                        tags={["dev"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={async () => {
                                try {
                                    await getAll()
                                    setState(true)
                                } catch {
                                    setState(false)
                                }


                            }} title={'Add item using handleGetAllItems'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />

                    <TestCase
                        itShould="存入key3：value3,key4:value4"
                        tags={["dev"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={async () => {
                                try {
                                    await setMultiple()
                                    setState(true)
                                } catch {
                                    setState(false)
                                }


                            }} title={'Add item using handleHasEnrolledFingerprints'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />

                    <TestCase
                        itShould="获取key3;key4的value值"
                        tags={["dev"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={async () => {
                                try {
                                    await getMultiple()
                                    setState(true)
                                } catch {
                                    setState(false)
                                }


                            }} title={'Add item using handleIsSensorAvailable'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />

                    <TestCase
                        itShould="存入文件名"
                        tags={["dev"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <View>
                                <Text>输入文件名</Text>
                                <TextInput
                                    style={{ borderBottomWidth: 1, marginBottom: 10 }}
                                    onChangeText={(res) => {
                                        setPreName(res)
                                    }} />
                                <Text>提交</Text>
                                <Button onPress={async () => {
                                    try {
                                        await setName(preName)
                                        setState(true)
                                    } catch {
                                        setState(false)
                                    }
                                }} title={'Add item using handlecancelFingerprintAuth'} />
                            </View>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />

                    <TestCase
                        itShould="获取文件名"
                        tags={["dev"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={async () => {
                                try {
                                    await getName()
                                    setState(true)
                                } catch {
                                    setState(false)
                                }
                            }} title={'Add item using handlecancelFingerprintAuth'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />
                </TestSuite>
            </ScrollView>
        </Tester>
    );
}
const styles = StyleSheet.create({
    content: {
        position: 'absolute',
        top: 50,
        width: '100%',
        height: 'auto',
        zIndex: 10,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
    },
    contentTest: {
        marginTop: 10,
        marginLeft: 10,
    }
});
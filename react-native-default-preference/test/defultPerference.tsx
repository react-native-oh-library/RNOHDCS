import React, { useCallback, useState } from 'react';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import { View, Alert, Button, ScrollView, Text, StyleSheet, TextInput } from 'react-native';
import RNDefaultPreference from 'react-native-default-preference'

export function Preference() {
    const [resTest, setResTest] = useState('');
    const [preName, setPreName] = useState('');
    const handleSetItem = useCallback((key: string, value: string) => {
        RNDefaultPreference.set(key, value)

    }, []);

    const handleGetItem = useCallback((key: string) => {
        RNDefaultPreference.get(key).then(res => {
            setResTest(JSON.stringify(res))
        });
    }, []);

    const clear = useCallback(() => {
        RNDefaultPreference.clear('key1');
    }, [])

    const getAll = useCallback(() => {
        RNDefaultPreference.getAll().then(res => { setResTest(JSON.stringify(res)) });
    }, [])

    const clearAll = useCallback(() => {
        RNDefaultPreference.clearAll()
    }, [])

    const setMultiple = useCallback(() => {
        RNDefaultPreference.setMultiple({ key3: 'value3', key4: 'value4' })
    }, [])

    const getMultiple = useCallback(() => {
        RNDefaultPreference.getMultiple(['key3', 'key4']).then(res => { setResTest(JSON.stringify(res)) });
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
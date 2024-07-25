import React, { useCallback, useState } from 'react';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import { View, Alert, Button, ScrollView, Text, StyleSheet } from 'react-native';
import RNDefaultPreference from 'react-native-default-preference'

export function Preference() {
    const [resTest, setResTest] = useState('');
    const handleSetItem = useCallback((key: string, value: string) => {
        Alert.alert('1234')
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
        RNDefaultPreference.setMultiple({ key1: 'value1', key2: 'value2', key3: 'value3' })
    }, [])

    const getMultiple = useCallback(() => {
        RNDefaultPreference.getMultiple(['key1', 'key2'])
    }, [])

    const setName = useCallback(() => {
        RNDefaultPreference.setName('examples1')
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
            <ScrollView >
                <TestSuite name='SensitiveInfoDemo' >

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
                        itShould="取出键值对key2"
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
                        itShould="判断指纹解锁是否可用"
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
                        itShould="获取指纹解锁权限"
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
                        itShould="取消指纹认证"
                        tags={["dev"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={async () => {
                                try {
                                    await setName()
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

                    <TestCase
                        itShould="关闭指纹权限"
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
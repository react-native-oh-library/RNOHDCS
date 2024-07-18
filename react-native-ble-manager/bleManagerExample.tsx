import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, NativeEventEmitter, NativeModules, TouchableHighlight, FlatList, Alert, Button, Platform } from 'react-native';
import { TestSuite, Tester, TestCase as _TestCase } from '@rnoh/testerino';
import { SmartManualTestCaseProps } from '@rnoh/testerino/src/react-native/ManualTestCase';
import ReactNativeBleManager from 'react-native-ble-manager';
import { Peripheral } from 'react-native-ble-manager';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const TestCase = {
    Manual: Manual,
};

type TesterTag = 'dev' | 'C_API';

type TesterHarmonySkipProp =
    | boolean
    | string
    | {
        arkTS: string | boolean;
        cAPI: string | boolean;
    };
type TesterSkipProp =
    | {
        android: string | boolean;
        harmony: TesterHarmonySkipProp;
    }
    | string;

function prepareSkipProp(
    skipProp: TesterSkipProp | undefined,
    tags: TesterTag[] | undefined,
) {
    const isCAPI =
        'rnohArchitecture' in Platform.constants &&
        Platform.constants.rnohArchitecture === 'C_API';
    if (isCAPI && !tags?.includes('C_API')) {
        return 'Not supported in C-Api architecture';
    }

    return skipProp
        ? typeof skipProp === 'string'
            ? skipProp
            : Platform.select({
                android: skipProp?.android,
                harmony: prepareHarmonySkipProp(skipProp?.harmony),
            })
        : undefined;
}

function prepareHarmonySkipProp(
    skipProp: TesterHarmonySkipProp,
): string | boolean {
    if (typeof skipProp === 'string' || typeof skipProp === 'boolean') {
        return skipProp;
    } else {
        return 'rnohArchitecture' in Platform.constants &&
            Platform.constants.rnohArchitecture === 'C_API'
            ? skipProp?.cAPI
            : skipProp?.arkTS;
    }
}

function Manual<TState = undefined>({
    itShould,
    skip,
    tags,
    modal,
    initialState,
    arrange,
    assert,
}: {
    itShould: string;
    skip?: TesterSkipProp;
    tags?: TesterTag[];
    modal?: boolean;
    initialState: TState;
    arrange: SmartManualTestCaseProps<TState>['arrange'];
    assert: SmartManualTestCaseProps<TState>['assert'];
}) {
    return (
        <_TestCase
            itShould={itShould}
            modal={modal}
            tags={tags}
            skip={prepareSkipProp(skip, tags)}
            initialState={initialState}
            arrange={arrange}
            assert={assert}
        />
    );
}

export enum BleState {
    Unknown = "unknown",
    Resetting = "resetting",
    Unsupported = "unsupported",
    Unauthorized = "unauthorized",
    On = "on",
    Off = "off",
    TurningOn = "turning_on",
    TurningOff = "turning_off",
}

export enum BleScanMatchMode {
    Aggressive = 1,
    Sticky = 2,
}

export enum BleScanMode {
    Opportunistic = -1,
    LowPower = 0,
    Balanced = 1,
    LowLatency = 2,
}

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

export default function BleManagerDemos() {

    useEffect(() => {
        listeners
    })

    const [result, setResult] = useState<string>('');
    const [deviceId, setDeviceId] = useState('')


    const [peripherals, setPeripherals] = useState(
        new Map<Peripheral['id'], Peripheral>(),
    );


    const handleDiscoverPeripheral = (peripheral: Peripheral) => {
        setResult(JSON.stringify(peripheral))
        setDeviceId(peripheral.id);
        if (!peripheral.name) {
            peripheral.name = 'NO NAME';
        }

        setPeripherals(map => {
            return new Map(map.set(peripheral.id, peripheral));
        });
    };

    const listeners = [
        bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', handleDiscoverPeripheral),
    ];

    const renderItem = ({ item }: { item: Peripheral }) => {
        return (
            <TouchableHighlight>
                <View style={[styles.row]}>
                    <Text style={styles.peripheralName}>
                        {item.name} - {item?.advertising?.localName}
                        {item.connecting && ' - Connecting...'}
                    </Text>
                    <Text style={styles.rssi}>RSSI: {item.rssi}</Text>
                    <Text style={styles.peripheralId}>{item.id}</Text>
                    <Text style={styles.peripheralId}>{`${item.advertising.isConnectable}`}</Text>
                    <TestCase.Manual
                        itShould="connect:蓝牙连接"
                        tags={["C_API"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.connect(item.id).then(() => {
                                    setState(true)
                                    setResult('connect is success')
                                });
                            }} title={'connect'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />
                    <TestCase.Manual
                        itShould="retrieveServices:发现服务"
                        tags={["C_API"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.retrieveServices(item.id, ['00001888-0000-1000-8000-00805F9B34FB']).then((res) => {
                                    setState(true)
                                    setResult('retrieveServices is success')
                                });
                            }} title={'retrieveServices'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />
                    <TestCase.Manual
                        itShould="createBond:绑定设备"
                        tags={["C_API"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.createBond(item.id).then(() => {
                                    setState(true)
                                    setResult('createBond is success')
                                }).catch(() => {
                                    setResult('createBond is bond')
                                });
                            }} title={'createBond'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />
                    <TestCase.Manual
                        itShould="getBondedPeripherals:获取绑定的设备"
                        tags={["C_API"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={async () => {
                                const res = await ReactNativeBleManager.getBondedPeripherals();
                                setState(res.length > 0 ? true : false)
                                setResult(JSON.stringify(res))
                            }} title={'getBondedPeripherals'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />
                    <TestCase.Manual
                        itShould="getConnectedPeripherals:获取连接的设备"
                        tags={["C_API"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={async () => {
                                const res = await ReactNativeBleManager.getConnectedPeripherals()
                                setState(res.length > 0 ? true : false)
                                setResult(JSON.stringify(res))
                            }} title={'getConnectedPeripherals'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />
                    <TestCase.Manual
                        itShould="getDiscoveredPeripherals:获取服务的设备"
                        tags={["C_API"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={async () => {
                                const res = await ReactNativeBleManager.getDiscoveredPeripherals();
                                setState(res.length > 0 ? true : false)
                                setResult(JSON.stringify(res))
                            }} title={'getDiscoveredPeripherals'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />
                    <TestCase.Manual
                        itShould="write:写入"
                        tags={["C_API"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.write(item.id, '00001888-0000-1000-8000-00805F9B34FB', '00001820-0000-1000-8000-00805F9B34FB', [1]).then(() => {
                                    setState(true)
                                    setResult('写入成功')
                                });
                            }} title={'write'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />
                    <TestCase.Manual
                        itShould="writeDescriptor:写入描述符"
                        tags={["C_API"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.writeDescriptor(item.id, '00001888-0000-1000-8000-00805F9B34FB', '00001820-0000-1000-8000-00805F9B34FB', '00002903-0000-1000-8000-00805F9B34FB', [0, 1]).then(() => {
                                    setState(true)
                                    setResult('成功写入描述符')
                                });
                            }} title={'writeDescriptor'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />
                    <TestCase.Manual
                        itShould="read:读取"
                        tags={["C_API"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.read(item.id, '00001888-0000-1000-8000-00805F9B34FB', '00001820-0000-1000-8000-00805F9B34FB').then((res) => {
                                    setState(res.length > 0 ? true : false)
                                    setResult(JSON.stringify(res))
                                });
                            }} title={'read'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />
                    <TestCase.Manual
                        itShould="readDescriptor:读取描述符"
                        tags={["C_API"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.readDescriptor(item.id, '00001888-0000-1000-8000-00805F9B34FB', '00001820-0000-1000-8000-00805F9B34FB', '00002903-0000-1000-8000-00805F9B34FB').then((res) => {
                                    setState(res.length > 0 ? true : false)
                                    setResult(JSON.stringify(res))
                                });
                            }} title={'readDescriptor'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />
                    <TestCase.Manual
                        itShould="readRSSI:读取蓝牙信号强度"
                        tags={["C_API"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.readRSSI(item.id).then((res) => {
                                    setState(res !== 0 ? true : false)
                                    setResult(res + '')
                                }).catch(() => {

                                });
                            }} title={'readRSSI'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />
                    <TestCase.Manual
                        itShould="requestMTU:请求MTU"
                        tags={["C_API"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.requestMTU(item.id, 10).then((res) => {
                                    setState(Math.abs(res) >= 0 ? true : false)
                                    setResult(res + '')
                                });
                            }} title={'requestMTU'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />
                    <TestCase.Manual
                        itShould="checkState:检查蓝牙状态"
                        tags={["C_API"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.checkState().then((res) => {
                                    setState(res.includes(BleState.On))
                                    setResult(JSON.stringify(res))
                                });
                            }} title={'checkState'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />
                    <TestCase.Manual
                        itShould="startNotification:发送通知"
                        tags={["C_API"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.startNotification(item.id, '00001888-0000-1000-8000-00805F9B34FB', '00001820-0000-1000-8000-00805F9B34FB').then(() => {
                                    setState(true)
                                    setResult('startNotification is success')
                                })
                            }} title={'startNotification'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />
                    <TestCase.Manual
                        itShould="isScanning:正在扫描"
                        tags={["C_API"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.isScanning().then((res) => {
                                    setState(res)
                                    setResult(JSON.stringify(res))
                                })
                            }} title={'isScanning'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />
                    <TestCase.Manual
                        itShould="isPeripheralConnected:是否连接"
                        tags={["C_API"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.isPeripheralConnected(item.id, ['00001888-0000-1000-8000-00805F9B34FB']).then((res) => {
                                    setResult(JSON.stringify(res))
                                    setState(res)
                                })

                            }} title={'isPeripheralConnected'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />
                    <TestCase.Manual
                        itShould="stopScan:停止扫描"
                        tags={["C_API"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.stopScan().then(() => {
                                    setResult('停止扫描')
                                    setState(true)
                                })
                            }} title={'stopScan'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />
                    <TestCase.Manual
                        itShould="disconnect:断开连接"
                        tags={["C_API"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.disconnect(item.id, true).then(() => {
                                    setResult('成功断开连接')
                                    setState(true)
                                })
                            }} title={'disconnect'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />
                    <TestCase.Manual
                        itShould="removePeripheral:移除设备"
                        tags={["C_API"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.removePeripheral(item.id).then(() => {
                                    setResult('removePeripheral is success')
                                    setState(true)
                                })
                            }} title={'removePeripheral'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />
                    {/* <TestCase.Manual
                        itShould="removeBond:移除绑定设备"
                        tags={["C_API"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.removeBond(item.id).then(() => {
                                    console.log('removeBond+++++')
                                    setResult('此接口为系统接口,三方库无法调用')
                                    setState(true)
                                });
                            }} title={'removeBond'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    /> */}
                </View>
            </TouchableHighlight>
        )
    }
    return (
        <View>
            <Tester>
                <View style={styles.inputArea}>
                    <Text style={styles.baseText}>
                        {result}
                    </Text>
                </View>
                <TestSuite name='Ble.manager'>
                    <TestCase.Manual
                        itShould="enableBluetooth:打开蓝牙"
                        tags={["C_API"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.enableBluetooth().then(() => {
                                    setResult('成功打开蓝牙')
                                    setState(true)
                                }).catch(() => {
                                    setResult('蓝牙已打开')
                                    setState(true)
                                });
                            }} title={'enableBluetooth'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />
                    <TestCase.Manual
                        itShould="start:初始化蓝牙"
                        tags={["C_API"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.start().then(() => {
                                    setResult('蓝牙初始化成功')
                                    setState(true)
                                });
                            }} title='start'></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />
                    <TestCase.Manual
                        itShould="scan:扫描蓝牙"
                        tags={["C_API"]}
                        initialState={false}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.scan(
                                    ['00001888-0000-1000-8000-00805F9B34FB'], 0, true, {
                                    companion: true,
                                    matchMode: BleScanMatchMode.Aggressive,
                                    scanMode: BleScanMode.Balanced,
                                    reportDelay: 1,
                                    exactAdvertisingName: ''
                                }).then(() => {
                                    setResult('扫描蓝牙中')
                                    setState(true)
                                });
                            }} title={'scan'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(true);
                        }}
                    />
                    <FlatList
                        data={Array.from(peripherals.values())}
                        contentContainerStyle={{ rowGap: 12 }}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        style={{ width: '100%', height: 300 }}
                    />
                </TestSuite>
            </Tester>
        </View>
    )
}

const boxShadow = {
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F1F3F5',
    },
    baseText: {
        width: '100%',
        height: '100%',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    titleArea: {
        width: '90%',
        height: '8%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        width: '90%',
        color: '#000000',
        textAlign: "center",
        fontSize: 30,
        border: 5,
    },
    scrollView: {
        width: '90%',
        marginHorizontal: 10,
    },

    inputArea: {
        width: '100%',
        height: '15%',
        borderWidth: 2,
        borderColor: '#000000',
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    baseArea: {
        width: '100%',
        height: 60,
        borderRadius: 4,
        borderColor: '#000000',
        marginTop: 6,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
        paddingRight: 8
    },
    engine: {
        position: 'absolute',
        right: 10,
        bottom: 0,
        color: Colors.black,
    },
    buttonGroup: {
        flexDirection: 'row',
        width: '100%'
    },
    scanButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: '#0a398a',
        margin: 10,
        borderRadius: 12,
        flex: 1,
        ...boxShadow,
    },
    scanButtonText: {
        fontSize: 16,
        letterSpacing: 0.25,
        color: Colors.white,
    },
    body: {
        backgroundColor: '#0082FC',
        flex: 1,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    peripheralName: {
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
        color: 'white'
    },
    rssi: {
        fontSize: 12,
        textAlign: 'center',
        padding: 2,
        color: 'white'
    },
    peripheralId: {
        fontSize: 12,
        textAlign: 'center',
        padding: 2,
        paddingBottom: 20,
        color: 'white'
    },
    row: {
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
        ...boxShadow,
        alignItems: 'center'
    },
    noPeripherals: {
        margin: 10,
        textAlign: 'center',
        color: Colors.white,
    },
});
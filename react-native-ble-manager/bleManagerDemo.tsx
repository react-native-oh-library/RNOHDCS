import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, NativeEventEmitter, NativeModules, TouchableHighlight, FlatList, Alert } from 'react-native';
import { TestSuite, Tester } from '@rnoh/testerino';
import { Button, TestCase } from '../components';
import ReactNativeBleManager from 'react-native-ble-manager';
import { Peripheral } from 'react-native-ble-manager';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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

    const connectPeripheral = async (peripheral: Peripheral) => {
        try {
            if (peripheral) {
                setPeripherals(map => {
                    let p = map.get(peripheral.id);
                    if (p) {
                        p.connecting = true;
                        return new Map(map.set(p.id, p));
                    }
                    return map;
                });

                await ReactNativeBleManager.connect(peripheral.id);
                console.debug(`[connectPeripheral][${peripheral.id}] connected.`);

                setPeripherals(map => {
                    let p = map.get(peripheral.id);
                    if (p) {
                        p.connecting = false;
                        p.connected = true;
                        return new Map(map.set(p.id, p));
                    }
                    return map;
                });

                const peripheralData = await ReactNativeBleManager.retrieveServices(peripheral.id);
                console.debug(
                    `[connectPeripheral][${peripheral.id}] retrieved peripheral services`,
                    peripheralData,
                );

                setPeripherals(map => {
                    let p = map.get(peripheral.id);
                    if (p) {
                        return new Map(map.set(p.id, p));
                    }
                    return map;
                });

                const rssi = await ReactNativeBleManager.readRSSI(peripheral.id);
                console.debug(
                    `[connectPeripheral][${peripheral.id}] retrieved current RSSI value: ${rssi}.`,
                );

                if (peripheralData.characteristics) {
                    for (let characteristic of peripheralData.characteristics) {
                        if (characteristic.descriptors) {
                            for (let descriptor of characteristic.descriptors) {
                                try {
                                    let data = await ReactNativeBleManager.readDescriptor(
                                        peripheral.id,
                                        characteristic.service,
                                        characteristic.characteristic,
                                        descriptor.uuid,
                                    );
                                    console.debug(
                                        `[connectPeripheral][${peripheral.id}] ${characteristic.service} ${characteristic.characteristic} ${descriptor.uuid} descriptor read as:`,
                                        data,
                                    );
                                } catch (error) {
                                    console.error(
                                        `[connectPeripheral][${peripheral.id}] failed to retrieve descriptor ${descriptor} for characteristic ${characteristic}:`,
                                        error,
                                    );
                                }
                            }
                        }
                    }
                }

                setPeripherals(map => {
                    let p = map.get(peripheral.id);
                    if (p) {
                        p.rssi = rssi;
                        return new Map(map.set(p.id, p));
                    }
                    return map;
                });
            }
        } catch (error) {
            console.error(
                `[connectPeripheral][${peripheral.id}] connectPeripheral error`,
                error,
            );
        }
    };

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
                        itShould="connect"
                        tags={["C_API"]}
                        initialState={0}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.connect(item.id);
                                setState(100)
                            }} label={'connect'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(100);
                        }}
                    />
                    <TestCase.Manual
                        itShould="createBond"
                        tags={["C_API"]}
                        initialState={0}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.createBond(item.id);
                                setState(100)
                            }} label={'createBond'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(100);
                        }}
                    />
                    <TestCase.Manual
                        itShould="retrieveServices"
                        tags={["C_API"]}
                        initialState={0}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.retrieveServices(item.id, ['00001888-0000-1000-8000-00805F9B34FB']);
                                setState(100)
                            }} label={'retrieveServices'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(100);
                        }}
                    />
                    <TestCase.Manual
                        itShould="getBondedPeripherals"
                        tags={["C_API"]}
                        initialState={0}
                        arrange={({ setState }) =>
                            <Button onPress={async () => {
                                const list = await ReactNativeBleManager.getBondedPeripherals();
                                Alert.alert(JSON.stringify(list))
                                setState(100)
                            }} label={'getBondedPeripherals'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(100);
                        }}
                    />
                    <TestCase.Manual
                        itShould="getConnectedPeripherals"
                        tags={["C_API"]}
                        initialState={0}
                        arrange={({ setState }) =>
                            <Button onPress={async () => {
                                const res = await ReactNativeBleManager.getConnectedPeripherals()
                                Alert.alert(JSON.stringify(res))
                                setState(100)
                            }} label={'getConnectedPeripherals'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(100);
                        }}
                    />
                    <TestCase.Manual
                        itShould="getDiscoveredPeripherals"
                        tags={["C_API"]}
                        initialState={0}
                        arrange={({ setState }) =>
                            <Button onPress={async () => {
                                const list =await ReactNativeBleManager.getDiscoveredPeripherals();
                                Alert.alert(JSON.stringify(list))
                                setState(100)
                            }} label={'getDiscoveredPeripherals'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(100);
                        }}
                    />
                    <TestCase.Manual
                        itShould="write"
                        tags={["C_API"]}
                        initialState={0}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.write(item.id, '00001888-0000-1000-8000-00805F9B34FB', '00001820-0000-1000-8000-00805F9B34FB', [1]);
                                setState(100)
                            }} label={'write'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(100);
                        }}
                    />
                    <TestCase.Manual
                        itShould="writeDescriptor"
                        tags={["C_API"]}
                        initialState={0}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.writeDescriptor(item.id, '00001888-0000-1000-8000-00805F9B34FB', '00001820-0000-1000-8000-00805F9B34FB', '00002903-0000-1000-8000-00805F9B34FB', [0,1]);
                                setState(100)
                            }} label={'writeDescriptor'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(100);
                        }}
                    />
                    <TestCase.Manual
                        itShould="read"
                        tags={["C_API"]}
                        initialState={0}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.read(item.id, '00001888-0000-1000-8000-00805F9B34FB', '00001820-0000-1000-8000-00805F9B34FB').then((res) => {
                                    Alert.alert(JSON.stringify(res))
                                });
                                setState(100)
                            }} label={'read'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(100);
                        }}
                    />
                    <TestCase.Manual
                        itShould="readDescriptor"
                        tags={["C_API"]}
                        initialState={0}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.readDescriptor(item.id, '00001888-0000-1000-8000-00805F9B34FB', '00001820-0000-1000-8000-00805F9B34FB', '00002903-0000-1000-8000-00805F9B34FB').then((res)=>{
                                    Alert.alert(JSON.stringify(res))
                                });
                                setState(100)
                            }} label={'readDescriptor'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(100);
                        }}
                    />
                    <TestCase.Manual
                        itShould="readRSSI"
                        tags={["C_API"]}
                        initialState={0}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.readRSSI(item.id).then((res) => {
                                    Alert.alert(res + '')
                                });
                                setState(100)
                            }} label={'readRSSI'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(100);
                        }}
                    />
                    <TestCase.Manual
                        itShould="requestMTU"
                        tags={["C_API"]}
                        initialState={0}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.requestMTU(item.id,10).then((res) => {
                                    Alert.alert(res + '')
                                });
                                setState(100)
                            }} label={'requestMTU'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(100);
                        }}
                    />
                    <TestCase.Manual
                        itShould="checkState"
                        tags={["C_API"]}
                        initialState={0}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.checkState().then((res) => {
                                    Alert.alert(JSON.stringify(res))
                                });
                                setState(100)
                            }} label={'checkState'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(100);
                        }}
                    />
                    <TestCase.Manual
                        itShould="startNotification"
                        tags={["C_API"]}
                        initialState={0}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.startNotification(item.id,'00001888-0000-1000-8000-00805F9B34FB', '00001820-0000-1000-8000-00805F9B34FB')
                                setState(100)
                            }} label={'startNotification'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(100);
                        }}
                    />
                    <TestCase.Manual
                        itShould="removePeripheral"
                        tags={["C_API"]}
                        initialState={0}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.removePeripheral(item.id)
                                setState(100)
                            }} label={'removePeripheral'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(100);
                        }}
                    />
                    <TestCase.Manual
                        itShould="isScanning"
                        tags={["C_API"]}
                        initialState={0}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.isScanning().then((res)=>{
                                    Alert.alert(JSON.stringify(res))
                                })
                                setState(100)
                            }} label={'isScanning'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(100);
                        }}
                    />
                    <TestCase.Manual
                        itShould="isPeripheralConnected"
                        tags={["C_API"]}
                        initialState={0}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.isPeripheralConnected(item.id,['00001888-0000-1000-8000-00805F9B34FB']).then((res)=>{
                                    Alert.alert(JSON.stringify(res))
                                })
                                setState(100)
                            }} label={'isPeripheralConnected'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(100);
                        }}
                    />
                     <TestCase.Manual
                        itShould="stopScan"
                        tags={["C_API"]}
                        initialState={0}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.stopScan()
                                setState(100)
                            }} label={'stopScan'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(100);
                        }}
                    />
                     <TestCase.Manual
                        itShould="disconnect"
                        tags={["C_API"]}
                        initialState={0}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.disconnect(item.id, true)
                                setState(100)
                            }} label={'disconnect'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(100);
                        }}
                    />
                    <TestCase.Manual
                        itShould="removeBond"
                        tags={["C_API"]}
                        initialState={0}
                        arrange={({ setState }) =>
                            <Button onPress={() => {
                                ReactNativeBleManager.removeBond(item.id).then(() => {
                                    Alert.alert('此接口为系统接口，三方库无法调用')
                                });
                                setState(100)
                            }} label={'removeBond'}></Button>
                        }
                        assert={({ expect, state }) => {
                            expect(state).to.be.eq(100);
                        }}
                    />
                </View>
            </TouchableHighlight>
        )
    }
    return (
        <Tester>
            <TestSuite name='Ble.manager'>
                <TestCase.Manual
                    itShould="enableBluetooth"
                    tags={["C_API"]}
                    initialState={0}
                    arrange={({ setState }) =>
                        <Button onPress={() => {
                            ReactNativeBleManager.enableBluetooth();
                            setState(100)
                        }} label={'enableBluetooth'}></Button>
                    }
                    assert={({ expect, state }) => {
                        expect(state).to.be.eq(100);
                    }}
                />
                <TestCase.Manual
                    itShould="start"
                    tags={["C_API"]}
                    initialState={0}
                    arrange={({ setState }) =>
                        <Button onPress={() => {
                            ReactNativeBleManager.start();
                            setState(100)
                        }} label={'start'}></Button>
                    }
                    assert={({ expect, state }) => {
                        expect(state).to.be.eq(100);
                    }}
                />
                <TestCase.Manual
                    itShould="scan"
                    tags={["C_API"]}
                    initialState={0}
                    arrange={({ setState }) =>
                        <Button onPress={() => {
                                ReactNativeBleManager.scan(
                                ['00001888-0000-1000-8000-00805F9B34FB'], 0, true, {
                                companion: true,
                                matchMode: BleScanMatchMode,
                                scanMode: BleScanMode,
                                reportDelay: 1,
                                exactAdvertisingName: ''
                            });
                            setState(100)
                        }} label={'scan'}></Button>
                    }
                    assert={({ expect, state }) => {
                        expect(state).to.be.eq(100);
                    }}
                />
                <FlatList
                    data={Array.from(peripherals.values())}
                    contentContainerStyle={{ rowGap: 12 }}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={{ width: '100%', height: 400 }}
                />
            </TestSuite>
        </Tester>
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
        ellipsizeMode: 'tail',
        numberOfLines: 2
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
        width: '90%',
        height: '10%',
        borderWidth: 2,
        borderColor: '#000000',
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
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
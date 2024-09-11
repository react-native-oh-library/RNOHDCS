import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Button, View, Text, NativeEventEmitter, NativeModules, TouchableHighlight, FlatList, Alert } from 'react-native';
import ReactNativeBleManager from 'react-native-ble-manager';
import { Peripheral } from 'react-native-ble-manager';
import { Colors } from 'react-native/Libraries/NewAppScreen';


declare module 'react-native-ble-manager' {
    interface Peripheral {
        connected?: boolean;
        connecting?: boolean;
    }
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

export default function BleManagerDemo() {
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
                    <View style={{ height: 50 }}>
                        <Button title='connect' onPress={() => {
                            ReactNativeBleManager.connect(item.id)
                        }}></Button>
                    </View>
                    <View style={{ height: 50, width: 120 }}>
                        <Button title='createBond' onPress={() => {
                            ReactNativeBleManager.createBond(item.id)
                        }}></Button>
                    </View>
                    <View style={{ height: 50, width: 120 }}>
                        <Button title='获取serves' onPress={() => {
                            ReactNativeBleManager.retrieveServices(item.id, ['00001888-0000-1000-8000-00805F9B34FB'])
                        }}></Button>
                    </View>
                    <View style={{ height: 50 }}>
                        <Button title='getBondedPeripherals' onPress={async () => {
                            const list = await ReactNativeBleManager.getBondedPeripherals()
                            console.log('返回已绑定的设备' + JSON.stringify(list))
                        }}></Button>
                    </View>
                    <View style={{ height: 50 }}>
                        <Button title='getConnectedPeripherals' onPress={async () => {
                            const list = await ReactNativeBleManager.getConnectedPeripherals()
                            Alert.alert(JSON.stringify(list))
                        }}></Button>
                    </View>

                    <View style={{ height: 50 }}>
                        <Button title='getDiscoveredPeripherals' onPress={async () => {
                            const list = await ReactNativeBleManager.getDiscoveredPeripherals()
                            Alert.alert(JSON.stringify(list))
                        }}></Button>
                    </View>
                    <View style={{ height: 50, width: 120 }}>
                        <Button title='写入value' onPress={() => {
                            ReactNativeBleManager.write(item.id, '00001888-0000-1000-8000-00805F9B34FB', '00001820-0000-1000-8000-00805F9B34FB', [1])
                        }}></Button>
                    </View>
                    <View style={{ height: 50, width: 120 }}>
                        <Button title='写入des' onPress={() => {
                            ReactNativeBleManager.writeDescriptor(item.id, '00001888-0000-1000-8000-00805F9B34FB', '00001820-0000-1000-8000-00805F9B34FB', '00002902-0000-1000-8000-00805F9B34FB', [1])

                        }}></Button>
                    </View>
                    <View style={{ height: 50 }}>
                        <Button title='readCharacteristicValue' onPress={() => {
                            ReactNativeBleManager.read(item.id, '00001888-0000-1000-8000-00805F9B34FB', '00001820-0000-1000-8000-00805F9B34FB').then((res)=>{
                                Alert.alert(JSON.stringify(res))
                            })

                        }}></Button>
                    </View>
                    <View style={{ height: 50 }}>
                        <Button title='readDescriptor' onPress={() => {
                            ReactNativeBleManager.readDescriptor(item.id, '00001888-0000-1000-8000-00805F9B34FB', '00001820-0000-1000-8000-00805F9B34FB', '00002902-0000-1000-8000-00805F9B34FB')

                        }}></Button>
                    </View>
                    <View style={{ height: 50, width: 120 }}>
                        <Button title='readRSSI' onPress={() => {
                            ReactNativeBleManager.readRSSI(item.id).then((data) => {
                                Alert.alert(data + "")
                            })
                        }}></Button>
                    </View>
                    <View style={{ height: 50, width: 120 }}>
                        <Button title='requestMTU' onPress={() => {
                            ReactNativeBleManager.requestMTU(item.id, 10).then((res)=>{
                                Alert.alert(res + "")
                            })
                        }}></Button>
                    </View>
                    <View style={{ height: 50, width: 120 }}>
                        <Button title='checkState' onPress={() => {
                            ReactNativeBleManager.checkState().then((res)=>{
                                Alert.alert(JSON.stringify(res))
                            })
                        }}></Button>
                    </View>
                    <View style={{ height: 50, width: 120 }}>
                        <Button title='startNotification' onPress={() => {
                            ReactNativeBleManager.startNotification(item.id,'00001888-0000-1000-8000-00805F9B34FB', '00001820-0000-1000-8000-00805F9B34FB')
                        }}></Button>
                    </View>
                    <View style={{ height: 50, width: 120 }}>
                        <Button title='stopScan' onPress={() => {
                            ReactNativeBleManager.stopScan()
                        }}></Button>
                    </View>
                    <View style={{ height: 50, width: 120 }}>
                        <Button title='disconnect' onPress={() => {
                            ReactNativeBleManager.disconnect(item.id, true)
                        }}></Button>
                    </View>
                    <View style={{ height: 50, width: 120 }}>
                        <Button title='removeBond' onPress={() => {
                            ReactNativeBleManager.removeBond(item.id).then(() => {
                                Alert.alert('此接口为系统接口，三方库无法调用')
                            })
                        }}></Button>
                    </View>
                </View>
            </TouchableHighlight>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>BleManager</Text>
            </View>
           
            <View style={{ width: '100%', display: 'flex', flexDirection: "row", justifyContent: 'space-around', alignItems: 'center',marginTop:10 }}>
            <View style={{ height: 50, width: 'auto'}}>
                        <Button title='enableBluetooth' onPress={() => {
                            ReactNativeBleManager.enableBluetooth()
                        }}></Button>
                    </View>
                    <View style={{ height: 50,width: 'auto' }}>
                        <Button title='start' onPress={() => {
                            ReactNativeBleManager.start()
                        }}></Button>
                    </View>
                    <View style={{ height: 50,width: 'auto' }}>
                        <Button title='scan' onPress={() => {
                            ReactNativeBleManager.scan(['00001888-0000-1000-8000-00805F9B34FB'], 0, true, {
                                companion: true,
                                matchMode: BleScanMatchMode,
                                scanMode: BleScanMode,
                                reportDelay: 1,
                                exactAdvertisingName: ''
                            })
                        }}></Button>
                    </View>
            </View>
             <FlatList
                data={Array.from(peripherals.values())}
                contentContainerStyle={{ rowGap: 12 }}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{ width: '100%' }}
            />
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
        border:5,
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
    },
    rssi: {
        fontSize: 12,
        textAlign: 'center',
        padding: 2,
    },
    peripheralId: {
        fontSize: 12,
        textAlign: 'center',
        padding: 2,
        paddingBottom: 20,
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
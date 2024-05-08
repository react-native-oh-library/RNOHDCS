import React, { useEffect, useState } from 'react'
import SystemSetting, { EmitterSubscription } from 'react-native-system-setting'
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import App from './../App';

let volumeEvent: EmitterSubscription
let bluetoothEvent: EmitterSubscription

const SystemSettingDemo: React.FC = (): JSX.Element => {
    const [bluetoothEnabled, setBluetoothEnabled] = useState<boolean>()
    const isBluetoothEnabled = async () => {
        const enabled = await SystemSetting.isBluetoothEnabled()
        setBluetoothEnabled(enabled)
    }


    const [brightness, setBrightness] = useState<string>()

    const [volume, setVolume] = useState<string>()

    const [wifi, setWifi] = useState<string>()

    const [location, setLocation] = useState<string>()


    return (
        <>
            <ScrollView>
                <View style={styles.module}>
                    <Text
                        style={styles.moduleName}>
                        Bluetooth(蓝牙模块)
                    </Text>
                    <Text
                        style={styles.moduleContent}>
                        蓝牙状态:{bluetoothEnabled === true ? '开启' : '关闭'}
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            isBluetoothEnabled()
                        }}
                        style={styles.moduleButton}
                    >
                        <Text style={styles.buttonText}>获取蓝牙状态</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            SystemSetting.switchBluetooth(() => {
                                console.log('跳转完成')
                            })

                        }}
                        style={styles.moduleButton}
                    >
                        <Text style={styles.buttonText}>切换蓝牙状态(跳转设置)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            SystemSetting.switchBluetoothSilence(() => {
                                console.log('切换完成')
                            })
                        }}
                        style={styles.moduleButton}
                    >
                        <Text style={styles.buttonText}>切换蓝牙状态</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={async () => {
                            bluetoothEvent = await SystemSetting.addBluetoothListener(e => {
                                console.log(JSON.stringify(e))
                                setBluetoothEnabled(e)
                            })
                        }}
                        style={styles.moduleButton}
                    >
                        <Text style={styles.buttonText}>开启蓝牙状态监听器</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            SystemSetting.removeListener(bluetoothEvent)
                        }}
                        style={styles.moduleButton}
                    >
                        <Text style={styles.buttonText}>关闭蓝牙状态监听器</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.module}>
                    <Text
                        style={styles.moduleName}>
                        Breghtness(亮度模块)
                    </Text>
                    <Text
                        style={styles.moduleContent}>
                        亮度值(-1为默认系统亮度):{brightness}
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            SystemSetting.getBrightness()
                                .then((val: number) => {
                                    setBrightness(val + '')
                                })
                        }}
                        style={styles.moduleButton}
                    >
                        <Text style={styles.buttonText}>获取亮度数值</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            SystemSetting.setBrightness(25)
                        }}
                        style={styles.moduleButton}
                    >
                        <Text style={styles.buttonText}>设置亮度数值(25)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            SystemSetting.getAppBrightness()
                                .then((val: number) => {
                                    setBrightness(val + '')
                                })
                        }}
                        style={styles.moduleButton}
                    >
                        <Text style={styles.buttonText}>获取应用亮度数值</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            SystemSetting.setAppBrightness(76)
                        }}
                        style={styles.moduleButton}
                    >
                        <Text style={styles.buttonText}>设置应用亮度数值(76)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            SystemSetting.setAppBrightness(-1)
                        }}
                        style={styles.moduleButton}
                    >
                        <Text style={styles.buttonText}>还原系统亮度数值(-1)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            SystemSetting.setScreenMode(1)
                        }}
                        style={styles.moduleButton}
                    >
                        <Text style={styles.buttonText}>设置亮度模式(跳转设置)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            SystemSetting.saveBrightness()
                        }}
                        style={styles.moduleButton}
                    >
                        <Text style={styles.buttonText}>保存当前亮度</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            const val = SystemSetting.restoreBrightness()
                            setBrightness(val + '')
                        }}
                        style={styles.moduleButton}
                    >
                        <Text style={styles.buttonText}>还原保存的亮度</Text>
                    </TouchableOpacity>
                </View>



                <View style={styles.module}>
                    <Text
                        style={styles.moduleName}>
                        Volume(音量模块)
                    </Text>
                    <Text
                        style={styles.moduleContent}>
                        媒体音量:{volume}
                    </Text>
                    <TouchableOpacity
                        onPress={async () => {
                            const vol = await SystemSetting.getVolume('music')
                            setVolume(vol + '')
                        }}
                        style={styles.moduleButton}
                    >
                        <Text style={styles.buttonText}>获取媒体音量</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={async () => {
                            volumeEvent = SystemSetting.addVolumeListener((e) => {
                                console.log(JSON.stringify(e))
                            })
                        }}
                        style={styles.moduleButton}
                    >
                        <Text style={styles.buttonText}>增加音量监听器</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={async () => {
                            console.log(JSON.stringify(volumeEvent))
                            SystemSetting.removeVolumeListener(volumeEvent as EmitterSubscription)
                        }}
                        style={styles.moduleButton}
                    >
                        <Text style={styles.buttonText}>移除音量监听器</Text>
                    </TouchableOpacity>
                </View>



                <View style={styles.module}>
                    <Text
                        style={styles.moduleName}>
                        Wifi模块
                    </Text>
                    <Text
                        style={styles.moduleContent}>
                        Wifi状态:{wifi}
                    </Text>
                    <TouchableOpacity
                        onPress={async () => {
                            const wi = await SystemSetting.isWifiEnabled()
                            setWifi(wi ? '开启' : '关闭')
                        }}
                        style={styles.moduleButton}
                    >
                        <Text style={styles.buttonText}>获取Wifi状态</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={async () => {
                            SystemSetting.switchWifi(() => {
                                console.log('WIFI跳转成功')
                            })
                        }}
                        style={styles.moduleButton}
                    >
                        <Text style={styles.buttonText}>切换WIFI状态(跳转设置)</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.module}>
                    <Text
                        style={styles.moduleName}>
                        飞行模式模块
                    </Text>
                    <Text
                        style={styles.moduleContent}>
                        飞行模式状态:
                    </Text>
                    <TouchableOpacity
                        onPress={async () => {
                            SystemSetting.switchAirplane(() => {
                                console.log('飞行模式跳转成功')
                            })
                        }}
                        style={styles.moduleButton}
                    >
                        <Text style={styles.buttonText}>切换WIFI状态(跳转设置)</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.module}>
                    <Text
                        style={styles.moduleName}>
                        位置服务模块
                    </Text>
                    <Text
                        style={styles.moduleContent}>
                        位置服务状态:{location}
                    </Text>
                    <TouchableOpacity
                        onPress={async () => {
                            const isLo = await SystemSetting.isLocationEnabled()
                            setLocation(isLo ? '开启' : '关闭')
                        }}
                        style={styles.moduleButton}
                    >
                        <Text style={styles.buttonText}>获取位置服务状态</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={async () => {
                            SystemSetting.switchLocation(() => {
                                console.log('位置服务跳转成功')
                            })
                        }}
                        style={styles.moduleButton}
                    >
                        <Text style={styles.buttonText}>切换位置服务状态(跳转设置)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            SystemSetting.openAppSystemSettings()
                        }}
                        style={styles.moduleButton}
                    >
                        <Text style={styles.buttonText}>打开应用程序的设置页面</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    module: {
        margin: 15,
    },
    moduleName: {
        fontSize: 25,
        fontWeight: '700',
        marginBottom: 4
    },
    moduleContent: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4
    },
    moduleButton: {
        marginBottom: 4,
        backgroundColor: 'deepskyblue',
        height: 34,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '400',
        color: 'white',
        textAlign: 'center',
        lineHeight: 32,
        verticalAlign: 'middle'
    }
})

export default SystemSettingDemo
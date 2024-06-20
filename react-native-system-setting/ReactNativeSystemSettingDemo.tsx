import React, { useEffect, useState } from 'react'
import SystemSetting, { EmitterSubscription } from 'react-native-system-setting'
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Tester, TestSuite, TestCase } from '@rnoh/testerino'

let volumeEvent: EmitterSubscription
let bluetoothEvent: EmitterSubscription

const SystemSettingDemo: React.FC = (): JSX.Element => {
    const [bluetoothEnabled, setBluetoothEnabled] = useState<boolean>()

    const [brightness, setBrightness] = useState<string>()

    const [volume, setVolume] = useState<string>()

    const [wifi, setWifi] = useState<string>()

    const [location, setLocation] = useState<string>()

    return (
        <Tester style={{ flex: 1, backgroundColor: '#000' }}>
            <ScrollView>
                <TestSuite name='Bluetooth'>
                    <View style={styles.module}>
                        <Text
                            style={styles.moduleName}>
                            Bluetooth(蓝牙模块)
                        </Text>
                        <Text
                            style={styles.moduleContent}>
                            蓝牙状态:{bluetoothEnabled === true ? '开启' : '关闭'}
                        </Text>
                        <TestCase
                            tags={['C_API']}
                            itShould='获取蓝牙状态'
                            initialState={undefined as any}
                            arrange={({ setState }) => {
                                return (
                                    <TouchableOpacity
                                        onPress={async () => {
                                            const enabled = await SystemSetting.isBluetoothEnabled()
                                            setBluetoothEnabled(enabled)
                                            setState(Object.prototype.toString.call(enabled) === '[object Boolean]')
                                        }}
                                        style={styles.moduleButton}
                                    >
                                        <Text style={styles.buttonText}>获取蓝牙状态</Text>
                                    </TouchableOpacity>
                                )
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true
                            }}
                        />
                        <TestCase
                            tags={['C_API']}
                            itShould='切换蓝牙状态(跳转设置)'
                        >
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
                        </TestCase>
                        <TestCase
                            tags={['C_API']}
                            itShould='切换蓝牙状态'
                        >
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
                        </TestCase>

                        <TestCase
                            tags={['C_API']}
                            itShould='开启蓝牙状态监听器'
                        >
                            <TouchableOpacity
                                onPress={async () => {
                                    bluetoothEvent = await SystemSetting.addBluetoothListener((e: any) => {
                                        console.log(JSON.stringify(e))
                                        setBluetoothEnabled(e)
                                    })
                                }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>开启蓝牙状态监听器</Text>
                            </TouchableOpacity>
                        </TestCase>

                        <TestCase
                            tags={['C_API']}
                            itShould='关闭蓝牙状态监听器'
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    SystemSetting.removeListener(bluetoothEvent)
                                }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>关闭蓝牙状态监听器</Text>
                            </TouchableOpacity>
                        </TestCase>
                    </View>
                </TestSuite>
                <TestSuite name='Breghtness'>
                    <View style={styles.module}>
                        <Text
                            style={styles.moduleName}>
                            Breghtness(亮度模块)
                        </Text>
                        <Text
                            style={styles.moduleContent}>
                            亮度值(-1为默认系统亮度):{brightness}
                        </Text>
                        <TestCase
                            tags={['C_API']}
                            itShould='获取亮度数值'
                            initialState={undefined as any}
                            arrange={({ setState }) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => {
                                            SystemSetting.getBrightness()
                                                .then((val: number) => {
                                                    setBrightness(val + '')
                                                    setState(Object.prototype.toString.call(val) === '[object Number]')
                                                })
                                        }}
                                        style={styles.moduleButton}
                                    >
                                        <Text style={styles.buttonText}>获取亮度数值</Text>
                                    </TouchableOpacity>
                                )
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true
                            }}
                        />
                        <TestCase
                            tags={['C_API']}
                            itShould='设置亮度数值'
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    SystemSetting.setBrightness(25)
                                }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>设置亮度数值(25)</Text>
                            </TouchableOpacity>
                        </TestCase>
                        <TestCase
                            tags={['C_API']}
                            itShould='获取应用亮度数值'
                            initialState={undefined as any}
                            arrange={({ setState }) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => {
                                            SystemSetting.getAppBrightness()
                                                .then((val: number) => {
                                                    setBrightness(val + '')
                                                    setState(Object.prototype.toString.call(val) === '[object Number]')
                                                })
                                        }}
                                        style={styles.moduleButton}
                                    >
                                        <Text style={styles.buttonText}>获取应用亮度数值</Text>
                                    </TouchableOpacity>
                                )
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true
                            }}
                        />
                        <TestCase
                            tags={['C_API']}
                            itShould='设置应用亮度数值'
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    SystemSetting.setAppBrightness(76)
                                }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>设置应用亮度数值(76)</Text>
                            </TouchableOpacity>
                        </TestCase>
                        <TestCase
                            tags={['C_API']}
                            itShould='还原系统亮度数值'
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    SystemSetting.setAppBrightness(-1)
                                }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>还原系统亮度数值</Text>
                            </TouchableOpacity>
                        </TestCase>

                        <TestCase
                            tags={['C_API']}
                            itShould='设置亮度模式(跳转设置)'
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    SystemSetting.setScreenMode(1)
                                }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>设置亮度模式(跳转设置)</Text>
                            </TouchableOpacity>
                        </TestCase>
                        <TestCase
                            tags={['C_API']}
                            itShould='保存当前亮度'
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    SystemSetting.saveBrightness()
                                }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>保存当前亮度</Text>
                            </TouchableOpacity>
                        </TestCase>
                        <TestCase
                            tags={['C_API']}
                            itShould='还原保存的亮度'
                            initialState={undefined as any}
                            arrange={({ setState }) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => {
                                            const val = SystemSetting.restoreBrightness()
                                            setBrightness(val + '')
                                            setState(Object.prototype.toString.call(val) === '[object Number]')
                                        }}
                                        style={styles.moduleButton}
                                    >
                                        <Text style={styles.buttonText}>还原保存的亮度</Text>
                                    </TouchableOpacity>
                                )
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true
                            }}
                        />

                    </View>
                </TestSuite>
                <TestSuite name='Volume'>
                    <View style={styles.module}>
                        <Text
                            style={styles.moduleName}>
                            Volume(音量模块)
                        </Text>
                        <Text
                            style={styles.moduleContent}>
                            媒体音量:{volume}
                        </Text>
                        <TestCase
                            tags={['C_API']}
                            itShould='获取媒体音量'
                            initialState={undefined as any}
                            arrange={({ setState }) => {
                                return (
                                    <TouchableOpacity
                                        onPress={async () => {
                                            const vol = await SystemSetting.getVolume('music')
                                            setVolume(vol + '')
                                            setState(Object.prototype.toString.call(vol) === '[object Number]')
                                        }}
                                        style={styles.moduleButton}
                                    >
                                        <Text style={styles.buttonText}>获取媒体音量</Text>
                                    </TouchableOpacity>
                                )
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true
                            }}
                        />
                        <TestCase
                            tags={['C_API']}
                            itShould='增加音量监听器'
                        >
                            <TouchableOpacity
                                onPress={async () => {
                                    volumeEvent = SystemSetting.addVolumeListener((e: any) => {
                                        console.log(JSON.stringify(e))
                                    })
                                }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>增加音量监听器</Text>
                            </TouchableOpacity>
                        </TestCase>
                        <TestCase
                            tags={['C_API']}
                            itShould='移除音量监听器'
                        >
                            <TouchableOpacity
                                onPress={async () => {
                                    console.log(JSON.stringify(volumeEvent))
                                    SystemSetting.removeVolumeListener(volumeEvent as EmitterSubscription)
                                }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>移除音量监听器</Text>
                            </TouchableOpacity>
                        </TestCase>
                    </View>
                </TestSuite>
                <TestSuite name='Wifi'>
                    <View style={styles.module}>
                        <Text
                            style={styles.moduleName}>
                            Wifi模块
                        </Text>
                        <Text
                            style={styles.moduleContent}>
                            Wifi状态:{wifi}
                        </Text>
                        <TestCase
                            tags={['C_API']}
                            itShould='获取Wifi状态'
                            initialState={undefined as any}
                            arrange={({ setState }) => {
                                return (
                                    <TouchableOpacity
                                        onPress={async () => {
                                            const wi = await SystemSetting.isWifiEnabled()
                                            setWifi(wi ? '开启' : '关闭')
                                            setState(Object.prototype.toString.call(wi) === '[object Boolean]')
                                        }}
                                        style={styles.moduleButton}
                                    >
                                        <Text style={styles.buttonText}>获取Wifi状态</Text>
                                    </TouchableOpacity>
                                )
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true
                            }}
                        />
                        <TestCase
                            tags={['C_API']}
                            itShould='切换WIFI状态(跳转设置)'
                        >
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
                        </TestCase>
                    </View>
                </TestSuite>
                <TestSuite name='Airplane'>
                    <View style={styles.module}>
                        <Text
                            style={styles.moduleName}>
                            飞行模式模块
                        </Text>
                        <Text
                            style={styles.moduleContent}>
                            飞行模式状态:
                        </Text>
                        <TestCase
                            tags={['C_API']}
                            itShould='切换WIFI状态(跳转设置)'
                        >
                            <TouchableOpacity
                                onPress={async () => {
                                    SystemSetting.switchAirplane(() => {
                                        console.log('飞行模式跳转成功')
                                    })
                                }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>切换飞行模式状态(跳转设置)</Text>
                            </TouchableOpacity>
                        </TestCase>
                    </View>
                </TestSuite>
                <TestSuite name='Location'>
                    <View style={styles.module}>
                        <Text
                            style={styles.moduleName}>
                            位置服务模块
                        </Text>
                        <Text
                            style={styles.moduleContent}>
                            位置服务状态:{location}
                        </Text>
                        <TestCase
                            tags={['C_API']}
                            itShould='获取位置服务状态'
                            initialState={undefined as any}
                            arrange={({ setState }) => {
                                return (
                                    <TouchableOpacity
                                        onPress={async () => {
                                            const isLo = await SystemSetting.isLocationEnabled()
                                            setLocation(isLo ? '开启' : '关闭')
                                            setState(Object.prototype.toString.call(isLo) === '[object Boolean]')
                                        }}
                                        style={styles.moduleButton}
                                    >
                                        <Text style={styles.buttonText}>获取位置服务状态</Text>
                                    </TouchableOpacity>
                                )
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true
                            }}
                        />
                        <TestCase
                            tags={['C_API']}
                            itShould='切换位置服务状态(跳转设置)'
                        >
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
                        </TestCase>
                        <TestCase
                            tags={['C_API']}
                            itShould='打开应用程序的设置页面'
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    SystemSetting.openAppSystemSettings()
                                }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>打开应用程序的设置页面</Text>
                            </TouchableOpacity>
                        </TestCase
                        >
                    </View>
                </TestSuite>
            </ScrollView>
        </Tester>
    )
}
const styles = StyleSheet.create({
    module: {
        margin: 15,
    },
    moduleName: {
        fontSize: 25,
        fontWeight: '700',
        marginBottom: 4,
        color: '#fff'
    },
    moduleContent: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4,
        color: '#fff'
    },
    moduleButton: {
        // marginBottom: 4,
        backgroundColor: 'deepskyblue',
        height: 34,
        // borderRadius: 10
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '400',
        color: '#fff',
        textAlign: 'center',
        lineHeight: 32,
        verticalAlign: 'middle'
    }
})

export default SystemSettingDemo
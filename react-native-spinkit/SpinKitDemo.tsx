import React, { useState } from 'react';
import { View, ScrollView, Button, Text } from 'react-native'
import Spinkit from 'react-native-spinkit';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino'

const SpinKitDemo: React.FC = (): JSX.Element => {
    const [visible, setVisible] = useState<boolean>(true)
    const [color, setColor] = useState<string>('#e74032')
    const [style, setStyle] = useState<boolean>(true)
    const [size, setSize] = useState<boolean>(true)
    return (
        <Tester style={{ flex: 1, backgroundColor: '#000' }}>
            <ScrollView>
                <TestSuite name='SpinKit属性type的枚举验证'>
                    <TestCase
                        tags={['C_API']}
                        itShould="type:'Plane'"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <Spinkit />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="type:'CircleFlip'"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <Spinkit type='CircleFlip' />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="type:'Bounce'"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <Spinkit type='Bounce' />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="type:'Wave'"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <Spinkit type='Wave' />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="type:'WanderingCubes'"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <Spinkit type='WanderingCubes' />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="type:'Pulse'"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <Spinkit type='Pulse' />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="type:'ChasingDots'"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <Spinkit type='ChasingDots' />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="type:'ThreeBounce'"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <Spinkit type='ThreeBounce' />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="type:'Circle'"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <Spinkit type='Circle' />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="type:'9CubeGrid'"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <Spinkit type='9CubeGrid' />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="type:'WordPress'"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <Spinkit type='WordPress' />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="type:'FadingCircle'"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <Spinkit type='FadingCircle' />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="type:'FadingCircleAlt'"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <Spinkit type='FadingCircleAlt' />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="type:'Arc'"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <Spinkit type='Arc' />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="type:'ArcAlt'"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <Spinkit type='ArcAlt' />
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='SpinKit属性color的验证'>
                    <TestCase
                        tags={['C_API']}
                        itShould="color"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
                            <Spinkit type='9CubeGrid' color={'#e74032'} />
                            <Spinkit type='9CubeGrid' color={'#0d8de7'} />
                            <Spinkit type='9CubeGrid' color={'#259745'} />
                        </View>
                        <View style={{ height: 20, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
                            <Text>#e74032</Text>
                            <Text>#0d8de7</Text>
                            <Text>#259745</Text>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='SpinKit属性size的验证'>
                    <TestCase
                        tags={['C_API']}
                        itShould="size"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
                            <View style={{ width: 60, alignItems: 'center', justifyContent: 'center' }}>
                                <Spinkit type='9CubeGrid' size={10} />
                            </View>
                            <View style={{ width: 60, alignItems: 'center', justifyContent: 'center' }}>
                                <Spinkit type='9CubeGrid' size={30} />
                            </View>
                            <View style={{ width: 60, alignItems: 'center', justifyContent: 'center' }}>
                                <Spinkit type='9CubeGrid' size={50} />
                            </View>
                        </View>
                        <View style={{ height: 20, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
                            <Text>10</Text>
                            <Text>30</Text>
                            <Text>50</Text>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='SpinKit属性style的验证'>
                    <TestCase
                        tags={['C_API']}
                        itShould="style"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
                            <Spinkit type='9CubeGrid' style={{ backgroundColor: '#fcc424' }} />
                            <Spinkit type='9CubeGrid' style={{ transform: [{ rotate: '45deg' }] }} />
                            <Spinkit type='9CubeGrid' style={{ borderRightWidth: 5 }} />
                        </View>
                        <View style={{ height: 20, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 10 }}>backgroundColor</Text>
                            <Text style={{ fontSize: 10 }}>{"transform:rotate"}</Text>
                            <Text style={{ fontSize: 10 }}>borderRightWidth</Text>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='SpinKit属性isVisible的验证'>
                    <TestCase
                        tags={['C_API']}
                        itShould="isVisible"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
                            <Spinkit type='9CubeGrid' isVisible={visible} />
                        </View>
                        <View style={{ height: 30, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
                            <Text>visible:{JSON.stringify(visible)}</Text>
                        </View>
                        <View style={{ height: 40, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
                            <Button
                                title='切换Visible状态'
                                onPress={() => {
                                    setVisible(!visible)
                                }}
                            />
                        </View>
                    </TestCase>
                </TestSuite>
            </ScrollView>
        </Tester>
    )
};

export default SpinKitDemo;
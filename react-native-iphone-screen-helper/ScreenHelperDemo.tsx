import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import {
    isIphoneX,
    isDynamicIsland,
    ifIphoneX,
    getStatusBarHeight,
    getBottomSpace
} from 'react-native-iphone-screen-helper';

const ScreenHelperDemo: React.FC = (): React.JSX.Element => {
    const [state1, setState1] = React.useState('待返回结果');
    const [state2, setState2] = React.useState('待返回结果');
    const [state3, setState3] = React.useState('待返回结果');
    const [state4, setState4] = React.useState('待返回结果');
    const [state5, setState5] = React.useState('待返回结果');
    return (
        <Tester style={{ backgroundColor: '#000' }}>
            <TestSuite name='react-native-iphone-screen-helper'>
                <TestCase
                    tags={['C_API']}
                    itShould='isIphoneX:() => boolean(harmony returns false)'
                    initialState={undefined as any}
                    arrange={({ setState }) => {
                        return (
                            <TouchableOpacity
                                onPress={async () => {
                                    const isIphoneXState = isIphoneX()
                                    setState(Object.prototype.toString.call(isIphoneXState) === '[object Boolean]')
                                    setState1(JSON.stringify(isIphoneXState))
                                }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>isIphoneX | {state1}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.true
                    }}
                />
                <TestCase
                    tags={['C_API']}
                    itShould='isDynamicIsland:() => boolean(harmony returns false)'
                    initialState={undefined as any}
                    arrange={({ setState }) => {
                        return (
                            <TouchableOpacity
                                onPress={async () => {
                                    const isDynamicIslandState = isDynamicIsland()
                                    setState(Object.prototype.toString.call(isDynamicIslandState) === '[object Boolean]')
                                    setState2(JSON.stringify(isDynamicIslandState))
                                }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>isDynamicIsland | {state2}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.true
                    }}
                />
                <TestCase
                    tags={['C_API']}
                    itShould="ifIphoneX({ backgroundColor: '#000' }, { backgroundColor: '#fff' }) => StyleSheet(harmony returns { backgroundColor: '#fff' })"
                    initialState={undefined as any}
                    arrange={({ setState }) => {
                        return (
                            <TouchableOpacity
                                onPress={async () => {
                                    const ifIphoneXState = ifIphoneX({ backgroundColor: '#000' }, { backgroundColor: '#fff' })
                                    setState(Object.prototype.toString.call(ifIphoneXState) === '[object Object]')
                                    setState3(JSON.stringify(ifIphoneXState))
                                }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>ifIphoneX | {state3}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.true
                    }}
                />
                <TestCase
                    tags={['C_API']}
                    itShould="getStatusBarHeight() => number(BRA-AL00(mate60) returns 38.77)"
                    initialState={undefined as any}
                    arrange={({ setState }) => {
                        return (
                            <TouchableOpacity
                                onPress={async () => {
                                    const getStatusBarHeightState = getStatusBarHeight()
                                    setState(Object.prototype.toString.call(getStatusBarHeightState) === '[object Number]')
                                    setState4(getStatusBarHeightState.toFixed(2))
                                }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>getStatusBarHeight | {state4}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.true
                    }}
                />
                <TestCase
                    tags={['C_API']}
                    itShould="getBottomSpace() => number(harmony returns 0)"
                    initialState={undefined as any}
                    arrange={({ setState }) => {
                        return (
                            <TouchableOpacity
                                onPress={async () => {
                                    const getBottomSpaceState = getBottomSpace()
                                    setState(Object.prototype.toString.call(getBottomSpaceState) === '[object Number]')
                                    setState5(JSON.stringify(getBottomSpaceState))
                                }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>getBottomSpace | {state5}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.true
                    }}
                />
            </TestSuite>
        </Tester>
    )
};

const styles = StyleSheet.create({
    moduleButton: {
        backgroundColor: 'deepskyblue',
        height: 34,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '400',
        color: '#fff',
        textAlign: 'center',
        lineHeight: 32,
        verticalAlign: 'middle'
    }
});

export default ScreenHelperDemo;
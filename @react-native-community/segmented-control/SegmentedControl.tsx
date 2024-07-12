import React, { useState } from 'react';

import { StyleSheet, View, Text, ScrollView, Button } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import SegmentedControl from "@react-native-segmented-control/segmented-control";

const Tabs = ["Home", "搜索", "我的"];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    segmentedControl: {
        marginTop: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: '700',
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 10,
    },
    sliders: {
        margin: 20,
        paddingBottom: 80,
    },
    title: {
        fontSize: 30,
    },
    sliderOne: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    sliderMiddle: {
        height: 80,
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
    },
    sliderSmall: {
        marginLeft: 20,
        marginRight: 20,
    },
});

export const T_SegmentedControl = () => {

    const [enabled, setEnabled] = useState(true);
    const [momentary, setMomentary] = useState(false);

    const [tintColor, setTintColor] = useState('#FF0000')
    const [backgroundColor, setBackgroundColor] = useState("purple")
    const [appearance, setAppearance] = useState('light');

    const [fontStyleFontSize, setFontStyleFontSize] = useState(14)
    const [fontStyleColor, setFontStyleColor] = useState('#000000')
    const [fontStyleFontWeight, setFontStyleFontWeight] = useState('normal')
    const [fontStyleFontFamily, setFontStyleFontFamily] = useState('StintUltraCondensed-Regular')

    const [activeFontStyleFontSize, setActiveFontStyleFontSize] = useState(14)
    const [activeFontStyleColor, setActiveFontStyleColor] = useState('#000000')
    const [activeFontStyleFontWeight, setActiveFontStyleFontWeight] = useState('normal')
    const [activeFontStyleFontFamily, setActiveFontStyleFontFamily] = useState('StintUltraCondensed-Regular')

    const [tabStyle, setTabStyle] = useState({ backgroundColor: '#0000ff' })

    const [selectedIndex, setSelectedIndex] = useState(0)

    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentValue, setCurrentValue] = useState(0)
    const [momentaryIndex, setMomentaryIndex] = useState(0)


    return (
        <Tester>
            <ScrollView>
                <TestSuite name="react-native-segmented-control/segmented-control">
                    <TestCase
                        key={"momentary"}
                        itShould={`change momentary`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <Text>触发onChange事件，当前tab的索引为：{momentaryIndex}</Text>
                                    <SegmentedControl
                                        momentary={momentary}
                                        style={styles.segmentedControl}
                                        selectedIndex={momentaryIndex}
                                        onChange={event => {
                                            setMomentaryIndex(event.nativeEvent.selectedSegmentIndex);
                                        }}
                                        testID={'sc11'}
                                        values={Tabs}
                                    />
                                    <Button title={"setMomentary(!momentary)"} onPress={() => {
                                        setMomentary(!momentary); setState(true);
                                    }} />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"enabled"}
                        itShould={`change enabled`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <SegmentedControl
                                        style={styles.segmentedControl}
                                        enabled={enabled}
                                        testID={'sc1'}
                                        values={Tabs}
                                    />
                                    <Button title={"setEnabled(false)"} onPress={() => {
                                        setEnabled(false); setState(true);
                                    }} />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"tintColor"}
                        itShould={`change tintColor`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <SegmentedControl
                                        style={styles.segmentedControl}
                                        selectedIndex={0}
                                        tintColor={tintColor}
                                        backgroundColor='#0000aa'
                                        testID={'sc2'}
                                        values={Tabs}
                                    />
                                    <Button title={"setTintColor('#FF00FF')"} onPress={() => {
                                        setTintColor('#FF00FF'); setState(true)
                                    }} />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"backgroundColor"}
                        itShould={`chanage backgroundColor`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <SegmentedControl
                                        style={styles.segmentedControl}
                                        backgroundColor={backgroundColor}
                                        selectedIndex={0}
                                        testID={'sc3'}
                                        values={Tabs}
                                    />
                                    <Button title={"setBackgroundColor('green')"} onPress={() => {
                                        setBackgroundColor('green'); setState(true)
                                    }} />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"appearance"}
                        itShould={`change appearance`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <SegmentedControl
                                        style={styles.segmentedControl}
                                        appearance={appearance as any}
                                        testID={'sc4'}
                                        values={Tabs}
                                    />
                                    <Button title={"setAppearance('dark')"} onPress={() => {
                                        setAppearance('dark'); setState(true)
                                    }} />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"fontStyle"}
                        itShould={`change fontStyle`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <SegmentedControl
                                        style={styles.segmentedControl}
                                        selectedIndex={0}
                                        fontStyle={{ fontSize: fontStyleFontSize, color: fontStyleColor, fontWeight: fontStyleFontWeight as any, fontFamily: fontStyleFontFamily }}
                                        testID={'sc5'}
                                        values={Tabs}
                                        activeFontStyle={{ fontSize: 12, color: '#F0000F' }}
                                    />
                                    <Button title={"setFontStyle({fontSize:20,fontStyleColor:'#FF0000',fontWeight:'bold',fontFamily:'Pacifico-Regular'})"} onPress={() => {
                                        setFontStyleFontSize(20); setFontStyleColor('#FF0000'); setFontStyleFontWeight('bold'); setFontStyleFontFamily('Pacifico-Regular'); setState(true)
                                    }} />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"activeFontStyle"}
                        itShould={`change activeFontStyle`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <SegmentedControl
                                        style={styles.segmentedControl}
                                        selectedIndex={0}
                                        activeFontStyle={{ fontSize: activeFontStyleFontSize, color: activeFontStyleColor, fontWeight: activeFontStyleFontWeight as any, fontFamily: activeFontStyleFontFamily }}
                                        testID={'sc6'}
                                        values={Tabs}
                                        fontStyle={{ fontSize: 12, color: '#000000' }}
                                    />
                                    <Button title={"setActiveFontStyle({fontSize:20,fontStyleColor:'#FF0000',fontWeight:'bold',fontFamily:'Pacifico-Regular'})"} onPress={() => {
                                        setActiveFontStyleFontSize(20); setActiveFontStyleColor('#FF0000'); setActiveFontStyleFontWeight('bold'); setActiveFontStyleFontFamily('Pacifico-Regular'); setState(true)
                                    }} />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"tabStyle"}
                        itShould={`change tabStyle`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <SegmentedControl
                                        style={styles.segmentedControl}
                                        tabStyle={tabStyle}
                                        selectedIndex={0}
                                        backgroundColor='#00FF00'
                                        testID={'sc7'}
                                        values={Tabs}
                                    />
                                    <Button title={"setTabStyle({ backgroundColor: '#FF00FF' })"} onPress={() => {
                                        setTabStyle({ backgroundColor: '#FF00FF' });
                                        setState(true)
                                    }} />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"selectedIndex"}
                        itShould={`selectedIndex change`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <Text>当前选中的tab：{selectedIndex}</Text>
                                    <SegmentedControl
                                        style={styles.segmentedControl}
                                        selectedIndex={selectedIndex}
                                        testID={'sc8'}
                                        values={Tabs}
                                    />
                                    <Button title={"setSelectedIndex(1)"} onPress={() => {
                                        setSelectedIndex(1);
                                        setState(true)
                                    }} />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"onChange"}
                        itShould={`onChange event`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <Text>触发onChange事件，当前tab的索引为：{currentIndex}</Text>
                                    <SegmentedControl
                                        style={styles.segmentedControl}
                                        selectedIndex={currentIndex}
                                        onChange={event => {
                                            setCurrentIndex(event.nativeEvent.selectedSegmentIndex);
                                            setState(true)
                                        }}
                                        testID={'sc9'}
                                        values={Tabs}
                                    />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"onValueChange"}
                        itShould={`onValueChange event`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <Text>触发onValueChange事件，当前Tab的名称为：{Tabs[currentValue]}</Text>
                                    <SegmentedControl
                                        style={styles.segmentedControl}
                                        selectedIndex={currentValue}
                                        onValueChange={event => {
                                            Tabs.forEach((tab, index) => {
                                                if (tab === event) setCurrentValue(index)
                                            });
                                            setState(true);
                                        }}
                                        testID={'sc10'}
                                        values={Tabs}
                                    />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>
            </ScrollView>
        </Tester >
    );
}
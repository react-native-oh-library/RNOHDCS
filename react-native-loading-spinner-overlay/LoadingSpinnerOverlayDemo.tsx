import React, { useState, ReactNode } from 'react';
import { StyleSheet, ScrollView, View, Text, Button, Switch, TextInput } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import Spinner from 'react-native-loading-spinner-overlay';

export function LoadingSpinnerOverlayDemo() {
    const [isSpinnerVisible, setSpinnerVisible] = useState({
        default: false,
        cancelable: false,
        cancelable2: false,
        color: false,
        color2: false,
        animation: false,
        animation2: false,
        overlayColor: false,
        overlayColor2: false,
        size: false,
        size2: false,
        size3: false,
        textContent: false,
        textContent2: false,
        textStyle: false,
        textStyle2: false,
        indicatorStyle: false,
        indicatorStyle2: false,
        customIndicator: false,
        customIndicator2: false,
        children: false,
        children2: false,
    });

    // 切换显示状态
    const toggleSpinner = (type: keyof typeof isSpinnerVisible) => {
        return new Promise((resolve) => {
            setSpinnerVisible({ ...isSpinnerVisible, [type]: !isSpinnerVisible[type] });
            setTimeout(() => {
                setSpinnerVisible({ ...isSpinnerVisible, [type]: false });
            }, 2000)
            resolve(true);
        })
    };

    return (
        <ScrollView style={{ flex: 1, height: '100%' }}>
            <Tester>
                <TestSuite name='LoadingSpinnerOverlay'>
                    <TestCase
                        itShould="default-option"
                        initialState={undefined as any}
                        arrange={({ setState }) => {
                            return (
                                <TestSpinnerView title='default' onPress={() => toggleSpinner('default').then(res => setState(res))}>
                                    <Spinner
                                        visible={isSpinnerVisible.default}
                                        textContent={'Loading...'}
                                        textStyle={styles.spinnerTextStyle}
                                    />
                                </TestSpinnerView>
                            );
                        }}
                        assert={({ expect, state }) => { expect(state).to.be.true }}
                    />

                    <TestCase
                        itShould="default-option change cancelable=false"
                        initialState={undefined as any}
                        arrange={({ setState }) => {
                            return (
                                <TestSpinnerView title='cancelable' onPress={() => toggleSpinner('cancelable').then(res => setState(res))} >
                                    <Spinner
                                        visible={isSpinnerVisible.cancelable}
                                        cancelable={false}
                                    />
                                </TestSpinnerView>
                            );
                        }}
                        assert={({ expect, state }) => { expect(state).to.be.true }}
                    />
                    <TestCase
                        itShould="default-option change cancelable=true"
                        initialState={undefined as any}
                        arrange={({ setState }) => {
                            return (
                                <TestSpinnerView title='cancelable2' onPress={() => toggleSpinner('cancelable2').then(res => setState(res))}>
                                    <Spinner
                                        visible={isSpinnerVisible.cancelable2}
                                        cancelable={true}
                                    />
                                </TestSpinnerView>
                            );
                        }}
                        assert={({ expect, state }) => { expect(state).to.be.true }}
                    />

                    <TestCase
                        itShould="default-option change color='#ff0000'"
                        initialState={undefined as any}
                        arrange={({ setState }) => {
                            return (
                                <TestSpinnerView title='color' onPress={() => toggleSpinner('color').then(res => setState(res))} >
                                    <Spinner
                                        visible={isSpinnerVisible.color}
                                        color='#ff0000'
                                    />
                                </TestSpinnerView>
                            );
                        }}
                        assert={({ expect, state }) => { expect(state).to.be.true }}
                    />
                    <TestCase
                        itShould="default-option change color='#00ff00'"
                        initialState={undefined as any}
                        arrange={({ setState }) => {
                            return (
                                <TestSpinnerView title='color2' onPress={() => toggleSpinner('color2').then(res => setState(res))} >
                                    <Spinner
                                        visible={isSpinnerVisible.color2}
                                        color='#00ff00'
                                    />
                                </TestSpinnerView>
                            );
                        }}
                        assert={({ expect, state }) => { expect(state).to.be.true }}
                    />

                    <TestCase
                        itShould="default-option change animation='fade'"
                        initialState={undefined as any}
                        arrange={({ setState }) => {
                            return (
                                <TestSpinnerView title='animation' onPress={() => toggleSpinner('animation').then(res => setState(res))}>
                                    <Spinner
                                        visible={isSpinnerVisible.animation}
                                        animation='fade'
                                    />
                                </TestSpinnerView>
                            );
                        }}
                        assert={({ expect, state }) => { expect(state).to.be.true }}
                    />
                    <TestCase
                        itShould="default-option change animation='slide'"
                        initialState={undefined as any}
                        arrange={({ setState }) => {
                            return (
                                <TestSpinnerView title='animation2' onPress={() => toggleSpinner('animation2').then(res => setState(res))}>
                                    <Spinner
                                        visible={isSpinnerVisible.animation2}
                                        animation='slide'
                                    />
                                </TestSpinnerView>
                            );
                        }}
                        assert={({ expect, state }) => { expect(state).to.be.true }}
                    />

                    <TestCase
                        itShould="default-option change overlayColor='#0000ff4f'"
                        initialState={undefined as any}
                        arrange={({ setState }) => {
                            return (
                                <TestSpinnerView title='overlayColor' onPress={() => toggleSpinner('overlayColor').then(res => setState(res))} >
                                    <Spinner
                                        visible={isSpinnerVisible.overlayColor}
                                        overlayColor='#0000ff4f'
                                    />
                                </TestSpinnerView>
                            );
                        }}
                        assert={({ expect, state }) => { expect(state).to.be.true }}
                    />

                    <TestCase
                        itShould="default-option change overlayColor='#0080008f'"
                        initialState={undefined as any}
                        arrange={({ setState }) => {
                            return (
                                <TestSpinnerView title='overlayColor2' onPress={() => toggleSpinner('overlayColor2').then(res => setState(res))}>
                                    <Spinner
                                        visible={isSpinnerVisible.overlayColor2}
                                        overlayColor='#0080008f'
                                    />
                                </TestSpinnerView>
                            );
                        }}
                        assert={({ expect, state }) => { expect(state).to.be.true }}
                    />

                    <TestCase
                        itShould="default-option change size=20"
                        initialState={undefined as any}
                        arrange={({ setState }) => {
                            return (
                                <TestSpinnerView title='size' onPress={() => toggleSpinner('size').then(res => setState(res))}>
                                    <Spinner
                                        visible={isSpinnerVisible.size}
                                        size={20}
                                    />
                                </TestSpinnerView>
                            );
                        }}
                        assert={({ expect, state }) => { expect(state).to.be.true }}
                    />
                    <TestCase
                        itShould="default-option change size=40"
                        initialState={undefined as any}
                        arrange={({ setState }) => {
                            return (
                                <TestSpinnerView title='size2' onPress={() => toggleSpinner('size2').then(res => setState(res))} >
                                    <Spinner
                                        visible={isSpinnerVisible.size2}
                                        size={40}
                                    />
                                </TestSpinnerView>
                            );
                        }}
                        assert={({ expect, state }) => { expect(state).to.be.true }}
                    />
                    <TestCase
                        itShould="default-option change size='small'"
                        initialState={undefined as any}
                        arrange={({ setState }) => {
                            return (
                                <TestSpinnerView title='size3' onPress={() => toggleSpinner('size3').then(res => setState(res))}>
                                    <Spinner
                                        visible={isSpinnerVisible.size3}
                                        size='small'
                                    />
                                </TestSpinnerView>
                            );
                        }}
                        assert={({ expect, state }) => { expect(state).to.be.true }}
                    />

                    <TestCase
                        itShould="default-option textContent-textStyle"
                        initialState={undefined as any}
                        arrange={({ setState }) => {
                            return (
                                <TestSpinnerView title='textContent' onPress={() => toggleSpinner('textContent').then(res => setState(res))} >
                                    <Spinner
                                        visible={isSpinnerVisible.textContent}
                                        textContent='This is textContent'
                                        textStyle={styles.spinnerTextStyle}
                                    />
                                </TestSpinnerView>
                            );
                        }}
                        assert={({ expect, state }) => { expect(state).to.be.true }}
                    />
                    <TestCase
                        itShould="default-option textContent2-textStyle"
                        initialState={undefined as any}
                        arrange={({ setState }) => {
                            return (
                                <TestSpinnerView title='textContent2' onPress={() => toggleSpinner('textContent2').then(res => setState(res))}>
                                    <Spinner
                                        visible={isSpinnerVisible.textContent2}
                                        textContent='Change textContent'
                                        textStyle={styles.spinnerTextStyle}
                                    />
                                </TestSpinnerView>
                            );
                        }}
                        assert={({ expect, state }) => { expect(state).to.be.true }}
                    />

                    <TestCase
                        itShould="default-option change textStyle-color='#fff'"
                        initialState={undefined as any}
                        arrange={({ setState }) => {
                            return (
                                <TestSpinnerView title='textStyle' onPress={() => toggleSpinner('textStyle').then(res => setState(res))}>
                                    <Spinner
                                        visible={isSpinnerVisible.textStyle}
                                        textContent={'This is textContent'}
                                        textStyle={styles.spinnerTextStyle}
                                    />
                                </TestSpinnerView>
                            );
                        }}
                        assert={({ expect, state }) => { expect(state).to.be.true }}
                    />
                    <TestCase
                        itShould="default-option change textStyle-color='#ffff00'"
                        initialState={undefined as any}
                        arrange={({ setState }) => {
                            return (
                                <TestSpinnerView title='textStyle2' onPress={() => toggleSpinner('textStyle2').then(res => setState(res))}>
                                    <Spinner
                                        visible={isSpinnerVisible.textStyle2}
                                        textContent={'This is textContent'}
                                        textStyle={{ color: '#ffff00' }}
                                    />
                                </TestSpinnerView>
                            );
                        }}
                        assert={({ expect, state }) => { expect(state).to.be.true }}
                    />

                    <TestCase
                        itShould="default-option indicatorStyle color='#00ff00' border='dotted'"
                        initialState={undefined as any}
                        arrange={({ setState }) => {
                            return (
                                <TestSpinnerView title='indicatorStyle' onPress={() => toggleSpinner('indicatorStyle').then(res => setState(res))} >
                                    <Spinner
                                        visible={isSpinnerVisible.indicatorStyle}
                                        indicatorStyle={styles.indicatorStyle}
                                    />
                                </TestSpinnerView>
                            );
                        }}
                        assert={({ expect, state }) => { expect(state).to.be.true }}
                    />
                    <TestCase
                        itShould="default-option indicatorStyle2 color='#8b4513' border='dashed'"
                        initialState={undefined as any}
                        arrange={({ setState }) => {
                            return (
                                <TestSpinnerView title='indicatorStyle2' onPress={() => toggleSpinner('indicatorStyle2').then(res => setState(res))}>
                                    <Spinner
                                        visible={isSpinnerVisible.indicatorStyle2}
                                        indicatorStyle={styles.indicatorStyle2}
                                    />
                                </TestSpinnerView>
                            );
                        }}
                        assert={({ expect, state }) => { expect(state).to.be.true }}
                    />

                    <TestCase
                        itShould="default-option change customIndicator"
                        initialState={undefined as any}
                        arrange={({ setState }) => {
                            return (
                                <TestSpinnerView title='customIndicator' onPress={() => toggleSpinner('customIndicator').then(res => setState(res))} >
                                    <Spinner
                                        visible={isSpinnerVisible.customIndicator}
                                        customIndicator={
                                            <View>
                                                <Text style={{ color: '#fff' }}>test customIndicator</Text>
                                            </View>
                                        }
                                    />
                                </TestSpinnerView>
                            );
                        }}
                        assert={({ expect, state }) => { expect(state).to.be.true }}
                    />
                    <TestCase
                        itShould="default-option change customIndicator2"
                        initialState={undefined as any}
                        arrange={({ setState }) => {
                            return (
                                <TestSpinnerView title='customIndicator2' onPress={() => toggleSpinner('customIndicator2').then(res => setState(res))}>
                                    <Spinner
                                        visible={isSpinnerVisible.customIndicator2}
                                        customIndicator={
                                            <View>
                                                <Text style={{ color: '#000fff' }}>test customIndicator2</Text>
                                                <Switch></Switch>
                                            </View>
                                        }
                                    />
                                </TestSpinnerView>
                            );
                        }}
                        assert={({ expect, state }) => { expect(state).to.be.true }}
                    />

                    <TestCase
                        itShould="children"
                        initialState={undefined as any}
                        arrange={({ setState }) => {
                            return (
                                <TestSpinnerView title='children' onPress={() => toggleSpinner('children').then(res => setState(res))} >
                                    <Spinner
                                        visible={isSpinnerVisible.children}
                                    >
                                        <View style={styles.spinnerChild}>
                                            <Text style={{ color: '#fff' }}>test children</Text>
                                        </View>
                                    </Spinner>
                                </TestSpinnerView>
                            );
                        }}
                        assert={({ expect, state }) => { expect(state).to.be.true }}
                    />
                    <TestCase
                        itShould="children2"
                        initialState={undefined as any}
                        arrange={({ setState }) => {
                            return (
                                <TestSpinnerView title='children2' onPress={() => toggleSpinner('children2').then(res => setState(res))}>
                                    <Spinner
                                        visible={isSpinnerVisible.children2}
                                    >
                                        <View style={styles.spinnerChild}>
                                            <Text style={{ color: '#00ff00' }}>test children2</Text>
                                            <TextInput style={{ height: 50, width: 150, backgroundColor: '#eee' }} />
                                        </View>
                                    </Spinner>
                                </TestSpinnerView>
                            );
                        }}
                        assert={({ expect, state }) => { expect(state).to.be.true }}
                    />

                </TestSuite>
            </Tester>
        </ScrollView>
    )
}

type Props = {
    onPress: () => any;
    title: string;
    children: ReactNode
};
const TestSpinnerView: React.FC<Props> = props => (
    <View style={styles.viewbox}>
        <Button title={props.title} onPress={props.onPress} />
        {props.children}
    </View>
);


const styles = StyleSheet.create({
    viewbox: {
        marginBottom: 0,
    },
    spinnerTextStyle: {
        color: '#FFF'
    },
    indicatorStyle: {
        color: '#00ff00',
        opacity: 0.5,
        borderWidth: 5,
        borderRadius: 100,
        borderColor: '#00ff00',
        borderStyle: 'dotted'
    },
    indicatorStyle2: {
        color: '#8b4513',
        opacity: 0.8,
        borderWidth: 5,
        borderRadius: 100,
        borderColor: '#8b4513',
        borderStyle: 'dashed'
    },
    spinnerChild: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
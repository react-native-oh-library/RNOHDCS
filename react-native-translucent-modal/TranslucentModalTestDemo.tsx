import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Image, Button, Alert } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import Modal from 'react-native-translucent-modal'

const STYLES = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover'
    },
    otherImage: {
        width: 500,
        height: 500
    }
});
export const T_ReactNativeTranslucentModal = () => {

    const [visible, setVisible] = useState(false)
    const [animationType, setAnimationType] = useState('none')//'slide', 'fade'
    const [visibleOne, setVisibleOne] = useState(false)
    const [visibleTwo, setVisibleTwo] = useState(false)
    const [visibleThree, setVisibleThree] = useState(false)
    const [visibleFour, setVisibleFour] = useState(false)
    const [transparent, setTransparent] = useState(false)
    const [hardwareAccelerated, setHardwareAccelerated] = useState(false)

    return (
        <Tester>
            <ScrollView>
                <TestSuite name="react-native-translucent-modal">
                    <TestCase
                        key={"visible"}
                        itShould={`change visible`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <Modal testID={'tm1'} visible={visible} onRequestClose={() => setVisible(false)}>
                                        <Image source={{ uri: 'https://avatars0.githubusercontent.com/u/15728691?s=460&v=4' }} style={STYLES.imageBackground} />
                                    </Modal>
                                    <Button title={"setVisible(true)"} onPress={() => {
                                        setVisible(true); setState(true);
                                    }} />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"animationType"}
                        itShould={`change animationType`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <Modal animationType={animationType} testID={'tm2'}
                                        visible={visibleOne} onRequestClose={() => setVisibleOne(false)}>
                                        <Image source={{ uri: 'https://avatars0.githubusercontent.com/u/15728691?s=460&v=4' }} style={STYLES.imageBackground} />
                                    </Modal>
                                    <Button title={"setAnimationType('slide')"} onPress={() => {
                                        setAnimationType('slide'); setState(true);
                                    }} />
                                    <Button title={"setAnimationType('fade')"} onPress={() => {
                                        setAnimationType('fade'); setState(true);
                                    }} />
                                    <Button title={"setVisibleOne(true)"} onPress={() => {
                                        setVisibleOne(true)
                                    }} />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"transparent"}
                        itShould={`change transparent`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <Modal transparent={transparent} testID={'tm3'}
                                        visible={visibleTwo} onRequestClose={() => setVisibleTwo(false)}>
                                        <Image source={{ uri: 'https://avatars0.githubusercontent.com/u/15728691?s=460&v=4' }} style={STYLES.otherImage} />
                                    </Modal>
                                    <Button title={"setTransparent(true)"} onPress={() => {
                                        setTransparent(true); setState(true);
                                    }} />
                                    <Button title={"setVisibleTwo(true)"} onPress={() => {
                                        setVisibleTwo(true)
                                    }} />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"hardwareAccelerated"}
                        itShould={`change hardwareAccelerated`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <Modal hardwareAccelerated={hardwareAccelerated} testID={'tm5'}
                                        visible={visibleFour} onRequestClose={() => setVisibleFour(false)}>
                                        <Image source={{ uri: 'https://avatars0.githubusercontent.com/u/15728691?s=460&v=4' }} style={STYLES.imageBackground} />
                                    </Modal>
                                    <Button title={"setHardwareAccelerated(true)"} onPress={() => {
                                        setHardwareAccelerated(true); setState(true);
                                    }} />
                                    <Button title={"setVisibleFour(true)"} onPress={() => {
                                        setVisibleFour(true)
                                    }} />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"onShow"}
                        itShould={`onShow Event`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <Modal testID={'tm4'} visible={visibleThree}
                                        onShow={() => { Alert.alert('onShow事件触发');setState(true) }}
                                        onRequestClose={() => setVisibleThree(false)}>
                                        <Image source={{ uri: 'https://avatars0.githubusercontent.com/u/15728691?s=460&v=4' }} style={STYLES.imageBackground} />
                                    </Modal>
                                    <Button title={"setVisibleThree(true)"} onPress={() => {
                                        setVisibleThree(true)
                                    }} />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>
            </ScrollView>
        </Tester>);
}
export default T_ReactNativeTranslucentModal
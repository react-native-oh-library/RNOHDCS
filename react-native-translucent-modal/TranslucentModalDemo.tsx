import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Image, Button } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import Modal from 'react-native-translucent-modal'
//import { Modal } from 'react-native';

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
    const [transparent, setTransparent] = useState(false)

    return (
        <Tester>
            <TestSuite name="react-native-translucent-modal">
                <ScrollView>

                    <TestCase
                        key={"visible"}
                        itShould={`change visible`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <Modal testID={'tm1'} visible={visible} onRequestClose={() => setVisible(false)}>
                                        <Image source={require("../../assets/placeholder2000x2000.jpg")} style={STYLES.imageBackground} />
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
                                        <Image source={require("../../assets/placeholder2000x2000.jpg")} style={STYLES.otherImage} />
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
                                        <Image source={require("../../assets/placeholder2000x2000.jpg")} style={STYLES.otherImage} />
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
                </ScrollView>
            </TestSuite>
        </Tester >
    );
}
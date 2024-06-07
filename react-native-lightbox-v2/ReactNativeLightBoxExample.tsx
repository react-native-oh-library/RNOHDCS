import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
    StatusBar,
    Platform,
} from 'react-native';
import Lightbox from 'react-native-lightbox-v2';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';


export const ReactNativeLightBoxExample = () => {
    return (
        <SafeAreaView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name='lightbox render'>
                    <TestCase itShould='renderHeader close button' tags={['C_API']}>
                        <View style={styles.container}>
                            <Lightbox
                                renderHeader={close => (
                                    <TouchableOpacity onPress={close} style={styles.closeButtonContainer}>
                                        <Text style={styles.closeButton}>Close</Text>
                                    </TouchableOpacity>
                                )}
                            >
                                <View style={styles.box}>
                                    <Text>I have a custom Header</Text>
                                </View>
                            </Lightbox>
                        </View>

                    </TestCase>
                    <TestCase itShould='renderContent' tags={['C_API']}>
                        <View style={styles.container}>
                            <Lightbox
                                renderContent={() =>
                                    <View style={[styles.box, { backgroundColor: 'red' }]}>
                                        <Text>renderContent</Text>
                                    </View>
                                }>
                                <View style={styles.box}>
                                    <Text>I have a custom Content</Text>
                                </View>
                            </Lightbox>
                        </View>
                    </TestCase>
                </TestSuite>
            </Tester >
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white'
    },
    box: {
        height: 150,
        backgroundColor: '#6C7A89',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButtonContainer: {
        ...Platform.select({
            harmony: {
                marginTop: StatusBar.currentHeight
            }
        })
    },
    closeButton: {
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        padding: 8,
        borderRadius: 3,
        textAlign: 'center',
        margin: 10,
        alignSelf: 'flex-end',
    }
});



export default ReactNativeLightBoxExample
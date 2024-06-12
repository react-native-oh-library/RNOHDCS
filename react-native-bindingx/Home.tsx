import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    NativeModules,
    findNodeHandle,
    TouchableHighlight,
    ToastAndroid,
    PanResponder,
    Animated
} from 'react-native';
export default class HomeDemo extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <TouchableHighlight
                    onPress={() => { this.props.navigation.navigate("Pan") }}
                    style={styles.button}
                >
                    <Text style={styles.text}>Pan</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => { this.props.navigation.navigate("Orientation") }}
                    style={styles.button}
                >
                    <Text style={styles.text}>Orientation</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => { this.props.navigation.navigate("Scroll") }}
                    style={styles.button}
                >
                    <Text style={styles.text}>Scroll</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => { this.props.navigation.navigate("Timing") }}
                    style={styles.button}
                >
                    <Text style={styles.text}>Timing</Text>
                </TouchableHighlight>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 10,
    },
    text: {
        textAlign: 'center',
        color: '#fff'
    },
    button: {
        height: 50,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    wrapper: {
        backgroundColor: '#0000ff',
        height: 48,
        alignItems: 'center',
        justifyContent: 'center'
    },
    margin: {
        marginTop: 20
    },
    anchor: {
        width: 80,
        height: 80,
        backgroundColor: '#ff0000',
        marginTop: 48
    }

});
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
import ReactBindingXModule from '@react-native-oh-tpl/react-native-bindingx'
export default class OrientationDemo extends React.Component {
    _token = ""
    componentWillUnmount(): void {
        this.onUnBind();
    }
    onBind() {

        let anchor = findNodeHandle(this.refs._anchor);
        this._token = ReactBindingXModule.bind({
            eventType: 'orientation',
            options: {
                sceneType: '2d' //2d场景会返回x,y分量
            },
            props: [
                {
                    element: anchor,
                    property: 'transform.translateX',
                    expression: 'x+0'
                },
                {
                    element: anchor,
                    property: 'transform.translateY',
                    expression: 'y+0'
                }
            ]
        });

        // this._token = token.token;
    }

    onUnBind() {
        ReactBindingXModule.unbind({
            token: this._token,
            eventType: 'orientation'
        });
    }

    render() {
        return (
            <View style={styles.container}>

                <TouchableHighlight
                    onPress={() => { this.onBind() }}
                    style={styles.button}
                >
                    <Text style={styles.text}>Bind</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => { this.onUnBind() }}
                    style={styles.button}
                >
                    <Text style={styles.text}>Unbind</Text>
                </TouchableHighlight>

                <View style={{
                    width: 240,
                    height: 240,
                    backgroundColor: '#0000ff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                    marginLeft: 80
                }}>
                    <Animated.View ref="_anchor"
                        style={{
                            width: 100,
                            height: 100,
                            backgroundColor: '#00ff00',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text style={styles.text}>Target</Text>
                    </Animated.View>
                </View>

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
        color: '#000000'
    },
    button: {
        height: 50,
        backgroundColor: '#00ff00',
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
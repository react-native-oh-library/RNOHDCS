import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    NativeModules,
    findNodeHandle,
    TouchableHighlight,
    ToastAndroid,
    PanResponder
} from 'react-native';
import ReactBindingXModule from '@react-native-oh-tpl/react-native-bindingx'

export default class PandDemo extends React.Component {

    initBind = false;


    _x = 0;
    _y = 0;

    componentDidMount() {

        this.onBind();
    }
    onBind() {

        let expression_x_origin = this._x;

        let expression_y_origin = this._y;

        let anchor = findNodeHandle(this.refs._anchor);
        let token = ReactBindingXModule.bind({
            eventType: 'pan',
            anchor: anchor,
            props: [
                {
                    element: anchor,
                    property: 'transform.translateX',
                    expression: expression_x_origin
                },
                {
                    element: anchor,
                    property: 'transform.translateY',
                    expression: expression_y_origin
                }
            ]
        });

        console.log("ReactBindingXModule.bind==token:" + token)
    }

    onUnBind() {
        let anchor = findNodeHandle(this.refs._anchor);

        ReactBindingXModule.unbind({
            token: anchor,
            eventType: 'pan'
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View
                    ref="_anchor"
                    style={styles.anchor}
                // {...this._panResponder.panHandlers}
                />

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
        color: '#ffffff',
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

import React from 'react';
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
export default class HomeDemo extends React.Component  {
    render() {
        return (
            <View style={styles.container}>


               <TouchableHighlight
                    onPress={() => { this.props.navigation.navigate("InputExample") }}
                    style={styles.button}
                >
                    <Text style={styles.text}>InputExample</Text>
                </TouchableHighlight>


                <TouchableHighlight
                    onPress={() => { this.props.navigation.navigate("BouncesAndScrollEnabledExample") }}
                    style={styles.button}
                >
                    <Text style={styles.text}>BouncesAndScrollEnabledExample</Text>
                </TouchableHighlight>


                <TouchableHighlight
                    onPress={() => { this.props.navigation.navigate("RefreshAndLoadingExample") }}
                    style={styles.button}
                >
                    <Text style={styles.text}>RefreshAndLoadingExample</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => { this.props.navigation.navigate("ComplexExample") }}
                    style={styles.button}
                >
                    <Text style={styles.text}>ComplexExample</Text>
                </TouchableHighlight>


                <TouchableHighlight
                    onPress={() => { this.props.navigation.navigate("ScrollToAndOnScrollExample") }}
                    style={styles.button}
                >
                    <Text style={styles.text}>ScrollToAndOnScrollExample</Text>
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
        backgroundColor: '#1E90FF',
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
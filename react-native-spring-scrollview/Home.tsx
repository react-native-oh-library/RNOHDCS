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
                    onPress={() => { this.props.navigation.navigate("InputTapToHideKeyboardTrueExample") }}
                    style={styles.button}
                >
                    <Text style={styles.text}>InputTapToHideKeyboardTrueExample</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => { this.props.navigation.navigate("InputTapToHideKeyboardFalseExample") }}
                    style={styles.button}
                >
                    <Text style={styles.text}>InputTapToHideKeyboardFalseExample</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => { this.props.navigation.navigate("BouncesDirectionalLockEnabledTrueExample") }}
                    style={styles.button}
                >
                    <Text style={styles.text}>BouncesDirectionalLockEnabledTrueExample</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => { this.props.navigation.navigate("BouncesDirectionalLockEnabledFalseExample") }}
                    style={styles.button}
                >
                    <Text style={styles.text}>BouncesDirectionalLockEnabledFalseExample</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => { this.props.navigation.navigate("BouncesAndScrollEnabledFalseExample") }}
                    style={styles.button}
                >
                    <Text style={styles.text}>BouncesAndScrollEnabledFalseExample</Text>
                </TouchableHighlight>                

                <TouchableHighlight
                    onPress={() => { this.props.navigation.navigate("RefreshAndLoadingInvertFalseExample") }}
                    style={styles.button}
                >
                    <Text style={styles.text}>RefreshAndLoadingInvertFalseExample</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => { this.props.navigation.navigate("RefreshAndLoadingInvertTrueExample") }}
                    style={styles.button}
                >
                    <Text style={styles.text}>RefreshAndLoadingInvertTrueExample</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => { this.props.navigation.navigate("ComplexBouncesFalseExample") }}
                    style={styles.button}
                >
                    <Text style={styles.text}>ComplexBouncesFalseExample</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => { this.props.navigation.navigate("ComplexBouncesTrueExample") }}
                    style={styles.button}
                >
                    <Text style={styles.text}>ComplexBouncesTrueExample</Text>
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
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
    Animated,
    ScrollView
} from 'react-native';
export default class HomeDemo extends React.Component  {
    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
              <TouchableHighlight
                    onPress={() => { this.props.navigation.navigate("InputDragToHideKeyboardTrueExample") }}
                    style={styles.button}
                >
                    <Text style={styles.text}>InputDragToHideKeyboardTrueExample</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => { this.props.navigation.navigate("InputDragToHideKeyboardFalseExample") }}
                    style={styles.button}
                >
                    <Text style={styles.text}>InputDragToHideKeyboardFalseExample</Text>
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
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginBottom: 50
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
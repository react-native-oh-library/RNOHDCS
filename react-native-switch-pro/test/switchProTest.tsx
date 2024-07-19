import { TestSuite } from '@rnoh/testerino';
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TestCase } from '../../components';
import Switch from 'react-native-switch-pro';

export default class SwitchProTest extends Component {
    state = {
        value: false,
        value1: true,
    };
    render() {
        return (
            <TestSuite name="DropShadow">
                <TestCase.Example itShould="DropShadow View">
                    <View style={styles.container}>
                        <Switch />
                        <Text>uncontrolled</Text>
                        <Switch
                            label={2}
                            value={this.state.value}
                            style={{ marginTop: 20 }}
                            onSyncPress={value => this.setState({ value })}
                        />
                        <Text> two way binding</Text>
                        <Switch
                            label={3}
                            value={this.state.value}
                            style={{ marginTop: 20 }}
                        />
                        <Text> controlled by outside</Text>
                        <Switch
                            width={60}
                            height={30}
                            style={{ marginTop: 20 }}
                            value={this.state.value}
                            onAsyncPress={callback => {
                                setTimeout(() => callback(true), 1000);
                            }}
                        />
                    </View>
                </TestCase.Example>
            </TestSuite>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5174a2',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
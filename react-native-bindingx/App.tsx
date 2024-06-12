import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PanDemo from './PanDemo-CAPI'
import OrientationDemo from './OrientationDemo-CAPI'
import ScrollViewDemo from './ScrollViewDemo-CAPI'
import TimingDemo from './TimingDemo-CAPI'
import { Nav } from './Nav'
export default class App extends Component {
    render() {
        return (<View style={{ flex: 1 }}>
            <Nav />
        </View>);
    };
}
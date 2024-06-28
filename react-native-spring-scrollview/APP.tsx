import React, { Component } from 'react';
import { Button, View, Text} from 'react-native';
import { Nav } from './Nav'
export default class App extends Component {
    render() {
        return (<View style={{ flex: 1 }}>
            <Nav />
        </View>);
    };
}
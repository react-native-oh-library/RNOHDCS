import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { LargeList } from 'react-native-largelist';
import { messages } from './DataSource';

export default class scrollEnabledTest extends Component {
    messages;
    largeList: any;

    constructor(props: any) {
        super(props);
        this.state = { refreshing: false };
        this.messages = [...messages];
    }
    render() {
        return (
            <TestSuite name="scrollEnabledTest">
                <TestCase modal itShould="scrollEnabled: Can scroll 、initialContentOffset">
                    <View style={{ height: 600, width: 350 }}>
                        <LargeList
                            scrollEnabled
                            ref={ref => (this.largeList = ref)}
                            heightForSection={() => 0}
                            renderSection={() => null}
                            heightForIndexPath={() => 88}
                            renderIndexPath={this._renderItem}
                            data={this.messages}
                            initialContentOffset={{ x: 0, y: -200 }}
                        />
                    </View>
                </TestCase>
                <TestCase modal itShould="scrollEnabled: Can't scroll">
                    <View style={{ height: 600, width: 350 }}>
                        <LargeList
                            scrollEnabled={false}
                            ref={ref => (this.largeList = ref)}
                            heightForSection={() => 0}
                            renderSection={() => null}
                            heightForIndexPath={() => 88}
                            renderIndexPath={this._renderItem}
                            data={this.messages}
                        />
                    </View>
                </TestCase>
            </TestSuite>
        );
    }
    _renderItem = ({ section: section, row: row }) => {
        let msg = this.messages[section].items[row];
        return (
            <TouchableOpacity
                style={{ flex: 1, backgroundColor: '#FFF' }}
                onPress={() => console.log('=====>')}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={msg.icon}
                        style={{ marginLeft: 16, width: 44, height: 44 }}
                    />
                    <View style={{ marginLeft: 4 }}>
                        <Text style={{ fontSize: 18 }}>{msg.title}</Text>
                        <Text style={{ fontSize: 14, marginTop: 8 }}>{msg.subtitle}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
}
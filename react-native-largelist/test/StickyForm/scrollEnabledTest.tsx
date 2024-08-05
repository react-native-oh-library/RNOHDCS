import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { StickyForm } from 'react-native-largelist';

export default class scrollEnabledTest extends Component {
    render() {
        const data = [];
        for (let section = 0; section < 3; ++section) {
            const sContent = { items: [] };
            for (let row = 0; row < 6; ++row) {
                sContent.items.push(row);
            }
            data.push(sContent);
        }
        return (
            <TestSuite name="scrollEnabledTest">
                <TestCase modal itShould="scrollEnabled: Can scroll 、initialContentOffset">
                    <View style={{ height: 500, width: 350 }}>
                        <StickyForm
                            data={data}
                            heightForSection={() => 50}
                            renderSection={this._renderSection}
                            heightForIndexPath={() => 50}
                            renderIndexPath={this._renderIndexPath}
                            scrollEnabled
                            initialContentOffset={{ x: 0, y: -200 }}
                        />
                    </View>
                </TestCase>
                <TestCase modal itShould="scrollEnabled: Can't scroll">
                    <View style={{ height: 500, width: 350 }}>
                        <StickyForm
                            data={data}
                            heightForSection={() => 50}
                            renderSection={this._renderSection}
                            heightForIndexPath={() => 50}
                            renderIndexPath={this._renderIndexPath}
                            scrollEnabled={false}
                        />
                    </View>
                </TestCase>
            </TestSuite>
        );
    }
    _renderSection = (section: number) => {
        return (
            <View style={styles.section}>
                <View>
                    <Text>Section {section}</Text>
                </View>
            </View>
        );
    };

    _renderIndexPath = ({ section: section, row: row }) => {
        return (
            <View>
                <TouchableOpacity style={styles.row}>
                    <View>
                        <Text>
                            Section {section} Row {row}
                        </Text>
                    </View>
                    <View style={styles.line} />
                </TouchableOpacity>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    section: {
        flex: 1,
        backgroundColor: '#5878f3e0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 1,
        backgroundColor: '#EEE',
    },
});

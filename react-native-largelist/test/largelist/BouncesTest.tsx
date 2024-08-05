import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { foods } from './DataSource';
import { LargeList } from 'react-native-largelist';

const leftData = [{ items: foods }];

export default class BouncesTest extends Component {
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
            <TestSuite name="BouncesTest">
                <TestCase modal itShould="bounces">
                    <View style={{ height: 500, width: 350 }}>
                        <LargeList
                            data={data}
                            heightForSection={() => 50}
                            renderSection={this._renderSection}
                            heightForIndexPath={() => 50}
                            renderIndexPath={this._renderIndexPath}
                            bounces={true}
                        />
                    </View>
                </TestCase>
                <TestCase modal itShould="not bounces">
                    <View style={{ height: 500, width: 350 }}>
                        <LargeList
                            data={data}
                            heightForSection={() => 50}
                            renderSection={this._renderSection}
                            heightForIndexPath={() => 50}
                            renderIndexPath={this._renderIndexPath}
                            bounces={false}
                        />
                    </View>
                </TestCase>
            </TestSuite>
        );
    }
    _renderSection = (section: number) => {
        return (
            <View style={styles.section}>
                <Text>Section {section}</Text>
            </View>
        );
    };

    _renderIndexPath = ({ section: section, row: row }) => {
        return (
            <TouchableOpacity style={styles.row}>
                <Text>
                    Section {section} Row {row}
                </Text>
                <View style={styles.line} />
            </TouchableOpacity>
        );
    };
}

const styles = StyleSheet.create({
    section: {
        flex: 1,
        backgroundColor: 'gray',
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

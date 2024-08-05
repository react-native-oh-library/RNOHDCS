import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import React, { Component } from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ImageBackground,
    Animated,
} from 'react-native';
import { StickyForm } from 'react-native-largelist';

export default class HeightEqualTest extends Component {
    _sectionCount = 3;
    _rowCount = 10;
    _nativeOffset = {
        x: new Animated.Value(0),
        y: new Animated.Value(0),
    };

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        const data = [];
        for (let section = 0; section < this._sectionCount; ++section) {
            const sContent = { items: [] };
            for (let row = 0; row < this._rowCount; ++row) {
                sContent.items.push(row);
            }
            data.push(sContent);
        }
        return (
            <TestSuite name="HeightEqualTest">
                <TestCase
                    modal
                    itShould="initialContentOffset、onTouchBegin、onTouchEnd、onScroll、renderHeader、renderFooter、onMomentumScrollBegin、onMomentumScrollEnd、onNativeContentOffsetExtract、groupCount、groupMinHeight">
                    <View style={{ height: 600, width: 350 }}>
                        <StickyForm
                            data={data}
                            initialContentOffset={{ x: 0, y: 0 }}
                            heightForSection={() => 50}
                            renderSection={this._renderSection}
                            heightForIndexPath={() => 50}
                            renderIndexPath={this._renderIndexPath}
                            renderHeader={this._renderHeader}
                            renderFooter={this._renderFooter}
                            renderScaleHeaderBackground={this._renderHeaderBackground}
                            onTouchBegin={() => console.log('onTouchBegin')}
                            onTouchEnd={() => console.log('onTouchEnd')}
                            onScroll={({
                                nativeEvent: {
                                    contentOffset: { x, y },
                                },
                            }) => console.log('onScroll:', x, y)}
                            onMomentumScrollBegin={this.onMomentumScrollBegin}
                            onMomentumScrollEnd={this.onMomentumScrollEnd}
                            onNativeContentOffsetExtract={this._nativeOffset}
                            groupCount={12}
                            groupMinHeight={600}
                        />
                        <Animated.View style={this._stickyHeaderStyle}>
                            <TouchableOpacity onPress={this._onNativeContentOffsetExtract}>
                                <Text>Test `onNativeContentOffsetExtract`</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </TestCase>
            </TestSuite>
        );
    }

    _stickyHeaderStyle = {
        position: 'absolute',
        top: 80,
        left: 0,
        right: 0,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#95959591',
        transform: [{ translateY: this._nativeOffset.y }],
    };

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

    _renderHeaderBackground = () => {
        return (
            <ImageBackground
                style={{ flex: 1 }}
                source={require('./icons/ScaleHeader.jpg')}
            />
        );
    };

    _renderHeader = () => {
        return (
            <View>
                <TouchableOpacity onPress={() => console.log('_renderHeader')}>
                    <View>
                        <Text style={styles.header}>I am header</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    _renderFooter = () => {
        return (
            <View>
                <TouchableHighlight onPress={() => console.log('_renderFooter')}>
                    <View>
                        <Text style={styles.header}>I am Footer</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    };
    _onNativeContentOffsetExtract = () => {
        console.log('onNativeContentOffsetExtract');
    };

    onMomentumScrollBegin = () => {
        console.log('onMomentumScrollBegin');
    };

    onMomentumScrollEnd = () => {
        console.log('onMomentumScrollEnd');
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        alignSelf: 'center',
        marginVertical: 50,
    },
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
    scrollTo: {
        marginTop: 0,
        backgroundColor: 'gray',
        zIndex: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
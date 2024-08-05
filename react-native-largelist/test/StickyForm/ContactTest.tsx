import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import React, { Component } from 'react';
import {
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';
import { StickyForm } from 'react-native-largelist';
import { contacts } from '../largelist/DataSource';

export default class ContactTest extends Component {
    largeList: any;
    _topInput = React.createRef();
    _bottomInput = React.createRef();

    constructor(props: any) {
        super(props);
        this.state = { data: contacts };
    }
    render() {
        const data = [];
        for (let section = 0; section < 2; ++section) {
            const sContent = { items: [] };
            for (let row = 0; row < 3; ++row) {
                sContent.items.push(row);
            }
            data.push(sContent);
        }
        return (
            <TestSuite name="ContactTest">
                <TestCase
                    modal
                    itShould="heightForSection、renderSection、heightForIndexPath、renderIndexPath、data、dragToHideKeyboard">
                    <View style={{ height: 600, width: 350 }}>
                        <StickyForm
                            heightForSection={() => 40}
                            renderSection={this._renderSection}
                            heightForIndexPath={() => 60}
                            renderIndexPath={this._renderItem}
                            data={this.state.data}
                            renderHeader={this._renderHeader}
                            renderFooter={this._renderFooter}
                            headerStickyEnabled={true}
                            renderEmpty={this._renderEmpty}
                            dragToHideKeyboard
                            inputToolBarHeight={500}
                        />
                    </View>
                </TestCase>
                <TestCase
                    modal
                    itShould="heightForSection、renderSection、heightForIndexPath、renderIndexPath、data、not dragToHideKeyboard">
                    <View style={{ height: 600, width: 350 }}>
                        <StickyForm
                            heightForSection={() => 40}
                            renderSection={this._renderSection}
                            heightForIndexPath={() => 60}
                            renderIndexPath={this._renderItem}
                            data={this.state.data}
                            tapToHideKeyboard={false}
                            renderHeader={this._renderHeader}
                            renderFooter={this._renderFooter}
                            headerStickyEnabled={true}
                            renderEmpty={this._renderEmpty}
                            dragToHideKeyboard={false}
                            inputToolBarHeight={500}
                        />
                    </View>
                </TestCase>
                <TestCase modal itShould="tapToHideKeyboard ">
                    <View style={{ height: 600, width: 350 }}>
                        <StickyForm
                            heightForSection={() => 40}
                            renderSection={this._renderSection}
                            heightForIndexPath={() => 60}
                            renderIndexPath={this._renderItem}
                            data={this.state.data}
                            renderHeader={this._renderHeader}
                            renderFooter={this._renderFooter}
                            headerStickyEnabled={true}
                            tapToHideKeyboard
                            renderEmpty={this._renderEmpty}
                            inputToolBarHeight={500}
                        />
                    </View>
                </TestCase>
                <TestCase modal itShould="not tapToHideKeyboard ">
                    <View style={{ height: 600, width: 350 }}>
                        <StickyForm
                            heightForSection={() => 40}
                            renderSection={this._renderSection}
                            heightForIndexPath={() => 60}
                            renderIndexPath={this._renderItem}
                            data={this.state.data}
                            renderHeader={this._renderHeader}
                            renderFooter={this._renderFooter}
                            tapToHideKeyboard={false}
                            renderEmpty={this._renderEmpty}
                            inputToolBarHeight={500}
                        />
                    </View>
                </TestCase>
                <TestCase modal itShould="textInputRefs Test ">
                    <View style={{ height: 600, width: 350 }}>
                        <StickyForm
                            heightForSection={() => 40}
                            inputToolBarHeight={300}
                            renderSection={this.renderHead}
                            heightForIndexPath={() => 60}
                            renderIndexPath={this._renderIndexPath}
                            data={data}
                            renderHeader={this._renderHeaders}
                            renderFooter={this._renderFooters}
                            textInputRefs={[this._topInput, this._bottomInput]}
                        />
                    </View>
                </TestCase>
            </TestSuite>
        );
    }

    _renderHeaders = () => {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <View>
                    <TextInput
                        style={styles.search}
                        returnKeyType="done"
                        ref={this._topInput}
                        placeholder="Keyboard Test top"
                    />
                </View>
            </View>
        );
    };

    _renderFooters = () => {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <View>
                    <TextInput
                        style={styles.search}
                        returnKeyType="done"
                        ref={this._bottomInput}
                        placeholder="Keyboard Test Bottom"
                    />
                </View>
            </View>
        );
    };

    renderHead = (section: number) => {
        return (
            <View style={styles.sections}>
                <View>
                    <Text>Section {section}</Text>
                </View>
            </View>
        );
    };

    _renderIndexPath = ({ section: section, row: row }) => {
        return (
            <TouchableOpacity style={styles.rows}>
                <View>
                    <Text>
                        Section {section} Row {row}
                    </Text>
                </View>
                <View style={styles.line} />
            </TouchableOpacity>
        );
    };

    _renderHeader = () => {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <View>
                    <TextInput
                        style={styles.search}
                        placeholder="Please type first letter to search"
                        onSubmitEditing={this._search}
                        returnKeyType="done"
                    />
                </View>
            </View>
        );
    };

    _renderEmpty = () => {
        return (
            <View style={styles.empty}>
                <Text>No results found</Text>
            </View>
        );
    };

    _renderFooter = () => {
        return (
            <View>
                <View>
                    <Text style={{ marginVertical: 20, alignSelf: 'center' }}>
                        This is the footer
                    </Text>
                </View>
            </View>
        );
    };

    _renderSection = (section: number) => {
        const contact = this.state.data[section];
        return (
            <View style={styles.section}>
                <View>
                    <Text style={styles.sectionText}>{contact.header}</Text>
                </View>
            </View>
        );
    };

    _renderItem = ({ section: section, row: row }) => {
        const contact = this.state.data[section].items[row];
        return (
            <View style={styles.row}>
                <View>
                    <Image source={contact.icon} style={styles.image} />
                </View>
                <View style={styles.rContainer}>
                    <Text style={styles.title}>{contact.name}</Text>
                    <Text style={styles.subtitle}>{contact.phone}</Text>
                </View>
            </View>
        );
    };

    _search = ({ nativeEvent: { text: text } }) => {
        const notFound = contacts.every(contract => {
            if (contract.header === text) {
                this.setState({ data: [contract] });
                return false;
            }
            return true;
        });
        if (notFound) {
            this.setState({ data: [] });
        }
    };
}

const styles = StyleSheet.create({
    search: {
        margin: 10,
        fontSize: 18,
    },
    empty: {
        marginVertical: 20,
        alignSelf: 'center',
    },
    section: {
        flex: 1,
        backgroundColor: '#EEE',
        justifyContent: 'center',
    },
    sectionText: {
        fontSize: 20,
        marginLeft: 10,
    },
    row: { flex: 1, flexDirection: 'row', alignItems: 'center' },
    image: { marginLeft: 16, width: 44, height: 44 },
    rContainer: { marginLeft: 20 },
    title: { fontSize: 18 },
    subtitle: { fontSize: 14, marginTop: 8 },

    sections: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rows: {
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
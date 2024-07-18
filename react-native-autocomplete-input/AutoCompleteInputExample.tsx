import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Pressable } from 'react-native';
import AutocompleteInput from 'react-native-autocomplete-input';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        height: 200,
        width: '100%',
    },
    containerStyle: {
        borderColor: "#ee7700",
        borderWidth: 5,
        borderRadius: 15,
        width: '100%'
    },
    inputContainerStyle: {
        borderWidth: 5,
        borderColor: "green",
    },
    listContainerStyle: {
        borderWidth: 10,
        borderColor: "yellow",
    },
    itemText: {
        paddingTop: 10,
        paddingBottom: 10,

    },
    renderTextInputStyle: {
        color: 'red',
        fontSize: 30
    },
});
interface AutocompleteItem {
    id: string;
    value: string;
}
const testArray: AutocompleteItem[] = [{ id: '1', value: 'Aabbbbbbb' }, { id: '2', value: 'BBFFFFF' }, { id: '3', value: 'ccccccbbb' }]
function filterData(query: string): AutocompleteItem[] {
    if (query) {
        const filteredItems = testArray.filter(item => item.value.toLowerCase().includes(query.toLowerCase()));
        return filteredItems;
    } else {
        return [];
    }
}
function compare(selectName: string, value: string): boolean {
    return selectName.toLowerCase().trim() === value.toLowerCase().trim();
}
function getFlagStr(flag: boolean): string {
    return flag + '';
}
class App extends Component {
    state = {
        query: '',
        isVisible: true,
        selectName: '',
        showResults: false,
    }
    render() {
        const { query, isVisible, showResults } = this.state;
        const data = filterData(query);
        const showResultFlag = getFlagStr(showResults);
        return (
            <ScrollView >
                <Tester>
                    <TestSuite name="AutoCompleteInput (eg:input 'bb')">
                        <TestCase itShould="Test containerStyle { borderColor: '#ee7700',borderWidth: 5,borderRadius: 15,width: '100%' }">
                            <View style={{ backgroundColor: '#d1f8f7', height: 200, paddingTop: 10 }}>
                                <AutocompleteInput
                                    containerStyle={styles.containerStyle}
                                    data={data.length === 1 && compare(this.state.selectName, data[0].value) ? [] : data}
                                    value={query}
                                    onChangeText={(text) => {
                                        if (text.trim() !== this.state.selectName.trim()) {
                                            this.setState({
                                                isVisible: false,
                                                selectName: text
                                            });
                                        } else {
                                            this.setState({
                                                isVisible: false,
                                                selectName: text
                                            });
                                        }
                                        this.setState({ query: text });
                                    }}
                                    hideResults={isVisible}
                                    flatListProps={{
                                        keyExtractor: (_, idx) => String(idx),
                                        keyboardShouldPersistTaps: 'always',
                                        style: { zIndex: 1 },
                                        renderItem: ({ item }) => {
                                            return (
                                                <TouchableOpacity onPress={() => {
                                                    this.setState({ query: item.value, isVisible: true, selectName: item.value });
                                                    console.log("--------onPress-----value:" + item.value)
                                                }}>
                                                    <Text style={styles.itemText}>{item.value}</Text>
                                                </TouchableOpacity>
                                            )
                                        },
                                    }}
                                />
                            </View>
                        </TestCase>
                        <TestCase itShould="Test inputContainerStyle { borderWidth: 5,borderColor: 'green' }">
                            <View style={{ backgroundColor: '#d1f8f7', height: 200, paddingTop: 10 }}>
                                <AutocompleteInput
                                    inputContainerStyle={styles.inputContainerStyle}
                                    data={data.length === 1 && compare(this.state.selectName, data[0].value) ? [] : data}
                                    value={query}
                                    onChangeText={(text) => {
                                        if (text.trim() !== this.state.selectName.trim()) {
                                            this.setState({
                                                isVisible: false,
                                                selectName: text
                                            });
                                        } else {
                                            this.setState({
                                                isVisible: false,
                                                selectName: text
                                            });
                                        }
                                        this.setState({ query: text });
                                    }}
                                    hideResults={isVisible}
                                    flatListProps={{
                                        keyExtractor: (_, idx) => String(idx),
                                        keyboardShouldPersistTaps: 'always',
                                        style: { zIndex: 1 },
                                        renderItem: ({ item }) => {
                                            return (
                                                <TouchableOpacity onPress={() => {
                                                    this.setState({ query: item.value, isVisible: true, selectName: item.value });
                                                    console.log("--------onPress-----value:" + item.value)
                                                }}>
                                                    <Text style={styles.itemText}>{item.value}</Text>
                                                </TouchableOpacity>
                                            )
                                        },
                                    }}
                                />
                            </View>
                        </TestCase>
                        <TestCase itShould="Test listContainerStyle { borderWidth: 10,borderColor: 'yellow' }">
                            <View style={{ backgroundColor: '#d1f8f7', height: 200, paddingTop: 10 }}>
                                <AutocompleteInput
                                    listContainerStyle={styles.listContainerStyle}
                                    data={data.length === 1 && compare(this.state.selectName, data[0].value) ? [] : data}
                                    value={query}
                                    onChangeText={(text) => {
                                        if (text.trim() !== this.state.selectName.trim()) {
                                            this.setState({
                                                isVisible: false,
                                                selectName: text
                                            });
                                        } else {
                                            this.setState({
                                                isVisible: false,
                                                selectName: text
                                            });
                                        }
                                        this.setState({ query: text });
                                    }}
                                    hideResults={isVisible}
                                    flatListProps={{
                                        keyExtractor: (_, idx) => String(idx),
                                        keyboardShouldPersistTaps: 'always',
                                        style: { zIndex: 1 },
                                        renderItem: ({ item }) => {
                                            return (
                                                <TouchableOpacity onPress={() => {
                                                    this.setState({ query: item.value, isVisible: true, selectName: item.value });
                                                    console.log("--------onPress-----value:" + item.value)
                                                }}>
                                                    <Text style={styles.itemText}>{item.value}</Text>
                                                </TouchableOpacity>
                                            )
                                        },
                                    }}
                                />
                            </View>
                        </TestCase>
                        <TestCase itShould="Test renderTextInput (An Custom Input Component){borderColor: '#f737e7',borderWidth: 2,height:50}" >
                            <View style={{ backgroundColor: '#d1f8f7', height: 200, paddingTop: 10 }}>
                                <AutocompleteInput
                                    data={data.length === 1 && compare(this.state.selectName, data[0].value) ? [] : data}
                                    value={query}
                                    onChangeText={(text) => {
                                        if (text.trim() !== this.state.selectName.trim()) {
                                            this.setState({
                                                isVisible: false,
                                                selectName: text
                                            });
                                        } else {
                                            this.setState({
                                                isVisible: false,
                                                selectName: text
                                            });
                                        }
                                        this.setState({ query: text });
                                    }}
                                    renderTextInput={(props) => (
                                        <TextInput style={{ borderColor: "#f737e7", borderWidth: 2, height: 50 }}
                                            onChangeText={(text) => { this.setState({ query: text }); console.log("----+++ props:" + JSON.stringify(props)) }}
                                            value={query}
                                        />)
                                    }
                                    hideResults={isVisible}
                                    flatListProps={{
                                        keyExtractor: (_, idx) => String(idx),
                                        keyboardShouldPersistTaps: 'always',
                                        style: { zIndex: 1 },
                                        renderItem: ({ item }) => {
                                            return (
                                                <TouchableOpacity onPress={() => {
                                                    this.setState({ query: item.value, isVisible: true, selectName: item.value });
                                                    console.log("--------onPress-----value:" + item.value)
                                                }}>
                                                    <Text style={styles.itemText}>{item.value}</Text>
                                                </TouchableOpacity>
                                            )
                                        },
                                    }}
                                />
                            </View>
                        </TestCase>
                        <TestCase itShould="Test onShowResults (when the autocomplete suggestions appear or disappear will be called)" >
                            <View style={{ backgroundColor: '#d1f8f7', height: 200, paddingTop: 10 }}>
                                <Text>suggestions isShow:{showResultFlag}</Text>
                                <AutocompleteInput
                                    data={data.length === 1 && compare(this.state.selectName, data[0].value) ? [] : data}
                                    value={query}
                                    onChangeText={(text) => {
                                        if (text.trim() !== this.state.selectName.trim()) {
                                            this.setState({
                                                isVisible: false,
                                                selectName: text
                                            });
                                        } else {
                                            this.setState({
                                                isVisible: false,
                                                selectName: text
                                            });
                                        }
                                        this.setState({ query: text });
                                    }}
                                    onShowResults={(showResults) => { this.state.showResults = showResults }}
                                    hideResults={isVisible}
                                    flatListProps={{
                                        keyExtractor: (_, idx) => String(idx),
                                        keyboardShouldPersistTaps: 'always',
                                        style: { zIndex: 1 },
                                        renderItem: ({ item }) => {
                                            return (
                                                <TouchableOpacity onPress={() => {
                                                    this.setState({ query: item.value, isVisible: true, selectName: item.value });
                                                    console.log("--------onPress-----value:" + item.value)
                                                }}>
                                                    <Text style={styles.itemText}>{item.value}</Text>
                                                </TouchableOpacity>
                                            )
                                        },
                                    }}
                                />
                            </View>
                        </TestCase>
                        <TestCase itShould="Test hideResults (Set to 'true' to hide the suggestion list.)" >
                            <View style={{ backgroundColor: '#d1f8f7', height: 200, paddingTop: 10 }}>
                                <AutocompleteInput
                                    data={data.length === 1 && compare(this.state.selectName, data[0].value) ? [] : data}
                                    value={query}
                                    onChangeText={(text) => {
                                        if (text.trim() !== this.state.selectName.trim()) {
                                            this.setState({
                                                isVisible: false,
                                                selectName: text
                                            });
                                        } else {
                                            this.setState({
                                                isVisible: false,
                                                selectName: text
                                            });
                                        }
                                        this.setState({ query: text });
                                    }}
                                    onShowResults={(showResults) => { this.state.showResults = showResults }}
                                    hideResults={true}
                                    flatListProps={{
                                        keyExtractor: (_, idx) => String(idx),
                                        keyboardShouldPersistTaps: 'always',
                                        style: { zIndex: 1 },
                                        renderItem: ({ item }) => {
                                            return (
                                                <TouchableOpacity onPress={() => {
                                                    this.setState({ query: item.value, isVisible: true, selectName: item.value });
                                                    console.log("--------onPress-----value:" + item.value)
                                                }}>
                                                    <Text style={styles.itemText}>{item.value}</Text>
                                                </TouchableOpacity>
                                            )
                                        },
                                    }}
                                />
                            </View>
                        </TestCase>
                        <TestCase itShould="Test renderResultList(This allows you to replace <FlatList /> with another component)" >
                            <View style={{ backgroundColor: '#d1f8f7', height: 200, paddingTop: 10 }}>
                                <AutocompleteInput
                                    value={query}
                                    onChangeText={(text) => {
                                        this.setState({ query: text })
                                        if (text.trim() !== this.state.selectName.trim()) {
                                            this.setState({
                                                isVisible: false,
                                                selectName: text
                                            });
                                        } else {
                                            this.setState({
                                                isVisible: false,
                                                selectName: text
                                            });
                                        }
                                    }}
                                    data={data.length === 1 && compare(this.state.selectName, data[0].value) ? [] : data}
                                    renderResultList={
                                        () => (
                                            <View >
                                                {data.map(({ id, value }) => (
                                                    <Pressable
                                                        onPress={() => {
                                                            this.setState({ query: value, selectName: value, isVisible: true })
                                                        }}
                                                        key={id}>
                                                        <Text>{value}</Text>
                                                    </Pressable>
                                                ))}
                                            </View>
                                        )
                                    }
                                    hideResults={isVisible}
                                />;
                            </View>
                        </TestCase>

                    </TestSuite>
                    <View style={{ height: 500 }}></View>
                </Tester>
            </ScrollView>
        );
    }
}

export default App;
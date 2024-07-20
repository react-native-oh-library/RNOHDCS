import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
    Dimensions,
} from 'react-native';
import RootSiblings, { RootSiblingParent, RootSiblingPortal } from 'react-native-root-siblings';

var id = 0;
var elements: any[] = [];
const addSibling = () => {
    let sibling = new RootSiblings(
        (
            <View style={styles.sibling}>
                <Text>I`m No.{id}</Text>
            </View>
        ),
    );
    id++;
    elements.push(sibling);
};

const destroySibling = () => {
    let lastSibling = elements.pop();
    lastSibling && lastSibling.destroy();
};

const updateSibling = () => {
    let lastId = elements.length - 1;
    lastId >= 0 &&
        elements[lastId].update(
            <View style={styles.sibling}>
                <Text>
                    I`m No.{lastId} : {Math.random()}
                </Text>
            </View>,
        );
};
export default function RootSiblingsTest() {
    return (
        <Tester>
            <TestSuite name="RootSiblings">
                <TestCase itShould="RootSiblings View">
                    <View style={{ backgroundColor: 'green', height: 700, flex: 1 }}>
                        <RootSiblingParent>
                            <RootSiblingPortal>
                                <View style={styles.container}>
                                    <TouchableHighlight style={styles.button} onPress={addSibling}>
                                        <Text style={styles.buttonText}>Add element</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        style={styles.button}
                                        onPress={destroySibling}>
                                        <Text style={styles.buttonText}>Destroy element</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        style={styles.button}
                                        onPress={updateSibling}>
                                        <Text style={styles.buttonText}>Update element</Text>
                                    </TouchableHighlight>
                                </View>
                            </RootSiblingPortal>
                        </RootSiblingParent>
                    </View>
                </TestCase>
            </TestSuite>
        </Tester>
    );
}

var styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    button: {
        borderRadius: 4,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#ccc',
        borderColor: '#333',
        borderWidth: 1,
        top: Dimensions.get('window').height / 2,
    },
    buttonText: {
        color: '#000',
    },
    sibling: {
        top: -115,
        height: 40,
        width: Dimensions.get('window').width / 2,
        backgroundColor: 'blue',
        opacity: 0.5,
    },
});
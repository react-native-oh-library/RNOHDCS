import React, {
    View,
    TouchableHighlight,
    StyleSheet,
    Text,
    Dimensions,
} from 'react-native';
import { Component } from 'react';

import RootSiblings, { RootSiblingParent } from 'react-native-root-siblings';

var id = 0;
var elements = [];
export default class SiblingsDemo extends Component {
    addSibling = () => {
        let sibling = new RootSiblings(<View
            style={styles.sibling}
        >
            <Text>I`m No.{id}</Text>
        </View>);
        id++;
        elements.push(sibling);
    };

    destroySibling = () => {
        let lastSibling = elements.pop();
        lastSibling && lastSibling.destroy();
    };

    updateSibling = () => {
        let lastId = elements.length - 1;
        lastId >= 0 && elements[lastId].update(<View
            style={styles.sibling}
        >
            <Text>I`m No.{lastId} : {Math.random()}</Text>
        </View>);
    };

    render() {
        return <View style={{
            backgroundColor: 'green', flex: 1,
        }}>
            <RootSiblingParent>
                <View style={styles.container}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.addSibling}
                    >
                        <Text style={styles.buttonText}>Add element</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.destroySibling}
                    >
                        <Text style={styles.buttonText}>Destroy element</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.updateSibling}
                    >
                        <Text style={styles.buttonText}>Update element</Text>
                    </TouchableHighlight>
                </View>
            </RootSiblingParent>
        </View>
    }
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
        color: '#000'
    },
    sibling: {
        top: -115,
        height: 40,
        width: Dimensions.get('window').width / 2,
        backgroundColor: 'blue',
        opacity: 0.5,
    }
});
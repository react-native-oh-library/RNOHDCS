import React, {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import Modal from 'react-native-root-modal';
import { Component } from 'react';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    button: {
        backgroundColor: '#ccc',
        borderRadius: 5,
        padding: 10
    },
    close: {
        position: 'absolute',
        right: 50,
        top: 200,
        backgroundColor: 'red'
    },
    modalContainer: {
        height: 150,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        top: 300,
        left: 70
    },
    text: {
        color: '#fff'
    },
    modal: {
        backgroundColor:'#b3b3b39c',
        flex: 1,
        position: 'absolute',
        height: '100%',
        width: "100%"
    }
});

class SimpleModalDemo extends Component{
    constructor() {
        super(...arguments);
        this.state = {
            visible: false
        };
    }

    showModal = () => {
        this.setState({
            visible: true
        });
    };

    hideModal = () => {
        this.setState({
            visible: false
        });
    };

    render() {
        return (
        <View style={styles.container}>
                <TouchableHighlight
                style={styles.button}
                underlayColor="#aaa"
                onPress={this.showModal}
            >
                <Text>Show Modal</Text>
            </TouchableHighlight>
            <Modal
                visible={this.state.visible} 
                style={styles.modal}
                // animationType="slide"
            >
                <TouchableHighlight
                    style={[styles.button, styles.close]}
                    underlayColor="#aaa"
                    onPress={this.hideModal}
                >
                    <Text>Close</Text>
                </TouchableHighlight>

                <View style={styles.modalContainer}>
                    <Text style={styles.text}>Amazing!</Text>
                </View>
            </Modal>
        </View>
        )
    }
}

export default SimpleModalDemo;
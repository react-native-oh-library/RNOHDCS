
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTodoasync,addTodo } from '../actions';

import {
    Alert,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
let AddTodo = ({ dispatch }) => {
    let input;
    return (
        <View style={styles.container}>
            <Text>添加待办信息：</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                    onChangeText={text => {
                        input = text
                    }}
                />
            </View>
            <TouchableOpacity style={styles.btn}
                onPress={() => {
                    dispatch(addTodo(input))
                }}
            >
                <Text style={styles.search}>同步添加</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}
                onPress={() => {
                    Alert.alert('延时3秒后添加...', [{ text: 'OK' }]);
                    dispatch(addTodoasync(input))
                }}
            >
                <Text style={styles.search}>异步添加</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    inputContainer: {
       
    },
    input: {
        marginTop: 10,
        height: 50,
        width:250,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
    },
    btn: {   
        marginTop:10,
        backgroundColor: '#23beff',
        borderRadius: 4,
        padding: 10,
        width:250,
    },
    search: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        
    }
});


AddTodo = connect()(AddTodo);

export default AddTodo

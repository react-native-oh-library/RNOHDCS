import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';


const topOffsetInput = () => {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} >
                <Text >topBar</Text>
            </TouchableOpacity>
            <InputScrollView topOffset={100} >
                <View style={styles.placeholder} />
                <TextInput style={styles.input}
                    value={text}
                    multiline
                    onChangeText={setText}
                />
            </InputScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
    },
    button: {
        height: 100, // 设置按钮高度
        width: 500, // 设置按钮宽度
        backgroundColor: '#007BFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    placeholder: {
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
      },
    input: {
        margin: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#FFF',
    },
});

export default topOffsetInput;
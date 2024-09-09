import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';


const multilineInputStyleInput = () => {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
          <InputScrollView multilineInputStyle={styles.multilineInput}>
            <View style={styles.placeholder} />
            <TextInput style={styles.multilineInput}
                       value={text}
                       onChangeText={setText}
                       multiline
                       placeholder="Type here..."
            />
          </InputScrollView>
          </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
    },
    placeholder: {
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
      },
    multilineInput: {
        fontSize: 28,
        fontFamily: 'Arial',
        lineHeight: 58,
        margin: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: 'gray',
        borderWidth: 1,
      },
});

export default multilineInputStyleInput;
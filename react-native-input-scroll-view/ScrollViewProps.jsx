import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';

  // 继承 ScrollView 组件的所有属性
  // showsVerticalScrollIndicator 默认值: true 决定是否显示垂直滚动条
  // contentContainerStyle 作用: 用于设置子组件容器的样式。例如，可以使用这个属性来设置内边距、对齐方式等。
const ScrollViewPropsInput = () => {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <InputScrollView  keyboardOffset={100} showsVerticalScrollIndicator={false}>
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

export default ScrollViewPropsInput;
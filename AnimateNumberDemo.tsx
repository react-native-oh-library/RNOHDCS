import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AnimateNumber from 'react-native-animate-number';

const App = () => {
    const [value, setValue] = useState(0);
    const onPress = () => { setValue(100) };
    const [finish, setFinish] = useState('');
    const [progress, setProgress] = useState('');
    const onProgress = () => { setProgress('动画正在更新...') };
    const onFinish = () => { setFinish('动画更新完成') }
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Button
                    title={'点击开始动画'}
                    onPress={onPress}
                />
            </View>
            <Text style={styles.row}>
                <Text>linear:</Text>
                <AnimateNumber value={value} timing="linear" countBy={1} interval={150} />
            </Text>
            <Text style={styles.row}>
                <Text>easeOut:</Text>
                <AnimateNumber value={value} timing="easeOut" countBy={1} interval={150} />
            </Text>
            <Text style={styles.row}>
                <Text>easeIn:</Text>
                <AnimateNumber value={value} timing="easeIn" countBy={1} interval={150} />
            </Text>
            <Text style={styles.row}>
                <Text>steps:</Text>
                <AnimateNumber value={value} timing="linear" countBy={1} interval={140} steps={45} />
            </Text>
            <Text style={styles.row}>
                <Text>steps:</Text>
                <AnimateNumber value={value} steps={5} interval={2000} />
            </Text>
            <Text style={styles.row}>
                <Text>Formate Example:</Text>
                <AnimateNumber value={value} countBy={1} interval={150} formatter={(val) => {
                    return '$ ' + parseFloat(val).toFixed(2)
                }} />
            </Text>
            <Text style={styles.row}>
                <Text>{progress}</Text>
            </Text>
            <Text style={styles.row}>
                <AnimateNumber value={30} countBy={5} interval={600} onProgress={onProgress} onFinish={onFinish} />
            </Text>
            <Text style={styles.row}>
                <Text>{finish}</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
        alignItems: "center"
    },
    row: {
        fontSize: 20,
        fontWeight: 'bold',
        flexDirection: "row",
        marginBottom: 20
    },
    button: {
        marginBottom: 20
    },
});

export default App;

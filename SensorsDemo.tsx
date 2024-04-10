import React from "react";
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';
import { accelerometer, gyroscope, magnetometer, barometer, orientation, gravity, setUpdateIntervalForType, setLogLevelForType } from 'react-native-sensors';
export const App = () => {
    const [value, setValue] = React.useState('15');
    const [sensors, setSensorsValue] = React.useState('');
    const setInterVal = () => {
        setUpdateIntervalForType(sensors, value);
        switch (sensors) {
            case 'accelerometer':
                const accelerometerSubscription = accelerometer.subscribe();
                setTimeout(() => {
                    accelerometerSubscription.unsubscribe();
                }, 5000)
                break;
            case 'gyroscope':
                const gyroscopeSubscription = gyroscope.subscribe();
                setTimeout(() => {
                    gyroscopeSubscription.unsubscribe();
                }, 5000)
                break;
            case 'magnetometer':
                const magnetometerSubscription = magnetometer.subscribe();
                setTimeout(() => {
                    magnetometerSubscription.unsubscribe();
                }, 5000)
                break;
            case 'barometer':
                const barometerSubscription = barometer.subscribe();
                setTimeout(() => {
                    barometerSubscription.unsubscribe();
                }, 5000)
                break;
            case 'orientation':
                const orientationSubscription = orientation.subscribe()
                setTimeout(() => {
                    orientationSubscription.unsubscribe();
                }, 5000);
                break;
            case 'gravity':
                const gravitySubscription = gravity.subscribe()
                setTimeout(() => {
                    gravitySubscription.unsubscribe();
                }, 5000);
                break;
            default:
        }
    }
    const setLogLevel0 = () => {
        setLogLevelForType(sensors, 0)
    }
    const setLogLevel1 = () => {
        setLogLevelForType(sensors, 1)
    }
    const setLogLevel2 = () => {
        setLogLevelForType(sensors, 2)
    }
    const handleChangeText = (text) => {
        if (!text) {
            alert('请输入间隔时间，且不能为空！');
            return
        }
        const numericValue = text.replace(/[^0-9]/g, "");
        setValue(numericValue);
    }
    const styles = StyleSheet.create({
        divider: {
            height: 1,
            backgroundColor: '#CCCCCC',
            marginVertical: 5,
        }
    })
    return (
        <View>
            <Text>操作流程：1、输入间隔时间。2、选择传感器类型。3、选择输出日志级别。4、点击日志打印按钮。（默认输出5s）请保证设备支持</Text>
            <View style={styles.divider}></View>
            <Text>setUpdateIntervalForType设置数据采集频率(频率又设备硬件决定，超出或小于频率范围时会自动重置为默认频率)</Text>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} keyboardType="numeric" onChangeText={handleChangeText} value={value} placeholder="单位为ms"></TextInput>
            <Button onPress={() => { setSensorsValue('accelerometer') }} title="accelerometer"></Button>
            <View style={styles.divider}></View>
            <Button onPress={() => { setSensorsValue('gyroscope') }} title="gyroscope"></Button>
            <View style={styles.divider}></View>
            <Button onPress={() => { setSensorsValue('magnetometer') }} title="magnetometer"></Button>
            <View style={styles.divider}></View>
            <Button onPress={() => { setSensorsValue('barometer') }} title="barometer"></Button>
            <View style={styles.divider}></View>
            <Button onPress={() => { setSensorsValue('orientation') }} title="orientation"></Button>
            <View style={styles.divider}></View>
            <Button onPress={() => { setSensorsValue('gravity') }} title="gravity"></Button>
            <View style={styles.divider}></View>
            <Button onPress={setLogLevel0} title="设置LogLevel等级为0"></Button>
            <View style={styles.divider}></View>
            <Button onPress={setLogLevel1} title="设置LogLevel等级为1"></Button>
            <View style={styles.divider}></View>
            <Button onPress={setLogLevel2} title="设置LogLevel等级为2"></Button>
            <View style={styles.divider}></View>
            <Button onPress={setInterVal} title="setUpdateIntervalForType 日志打印"></Button>
        </View>
    )
}
export default App;
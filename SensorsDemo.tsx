import React from "react";
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';
import { accelerometer, gyroscope, magnetometer, barometer, orientation, gravity, setUpdateIntervalForType, setLogLevelForType } from 'react-native-sensors';
export const App = () => {
    const [value, setValue] = React.useState('15');
    const [sensors, setSensorsValue] = React.useState('');
    const [IsProintLog, setIsProintLog] = React.useState(true);
    const setInterVal = () => {
        if (IsProintLog) {
            setUpdateIntervalForType(sensors, value);
            setIsProintLog(false)
            switch (sensors) {
                case 'accelerometer':
                    const accelerometerSubscription = accelerometer.subscribe();
                    const timer1 = setTimeout(() => {
                        accelerometerSubscription.unsubscribe();
                        clearTimeout(timer1)
                        setIsProintLog(true)
                    }, 5000)
                    break;
                case 'gyroscope':
                    const gyroscopeSubscription = gyroscope.subscribe();
                    const timer2 = setTimeout(() => {
                        gyroscopeSubscription.unsubscribe();
                        clearTimeout(timer2)
                        setIsProintLog(true)
                    }, 5000)
                    break;
                case 'magnetometer':
                    const magnetometerSubscription = magnetometer.subscribe();
                    const timer3 = setTimeout(() => {
                        magnetometerSubscription.unsubscribe();
                        clearTimeout(timer3)
                        setIsProintLog(true)
                    }, 5000)
                    break;
                case 'barometer':
                    const barometerSubscription = barometer.subscribe();
                    const timer4 = setTimeout(() => {
                        barometerSubscription.unsubscribe();
                        clearTimeout(timer4)
                        setIsProintLog(true)
                    }, 5000)
                    break;
                case 'orientation':
                    const orientationSubscription = orientation.subscribe()
                    const timer5 = setTimeout(() => {
                        orientationSubscription.unsubscribe();
                        clearTimeout(timer5)
                        setIsProintLog(true)
                    }, 5000);
                    break;
                case 'gravity':
                    const gravitySubscription = gravity.subscribe()
                    const timer6 = setTimeout(() => {
                        gravitySubscription.unsubscribe();
                        clearTimeout(timer6)
                        setIsProintLog(true)
                    }, 5000);
                    break;
                default:
                    setIsProintLog(true)
            }
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
            <Text>操作流程：1、输入间隔时间。2、选择传感器类型。3、选择输出日志级别。4、点击日志打印按钮。请保证设备支持</Text>
            <View style={styles.divider}></View>
            <Text>setUpdateIntervalForType设置数据采集频率</Text>
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
            <View style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row' }}>
                <View style={{ width: '25%', flex: 1 }}><Button onPress={setLogLevel0} title="设置LogLevel等级为0"></Button></View>
                <View style={{ width: '25%', flex: 1 }}><Button onPress={setLogLevel1} title="设置LogLevel等级为1"></Button></View>
                <View style={{ width: '25%', flex: 1 }}><Button onPress={setLogLevel2} title="设置LogLevel等级为2"></Button></View>
            </View>
            <Button disabled={!IsProintLog} onPress={setInterVal} title="setUpdateIntervalForType 日志打印"></Button>
        </View>
    )
}
export default App;
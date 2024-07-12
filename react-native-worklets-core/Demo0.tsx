import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native"
import { useRunOnJS, useSharedValue, useWorklet } from "react-native-worklets-core";

const App = () => {
    const [timeStr, setTimeStr] = useState<Number>(0); // 时间戳
    const runMsg = useSharedValue('等待中');

    // js 阻塞方法
    const runInJs = () => {
        const start = Date.now();
        let result = 0;
        for (let i = 0; i < 1e8; i++) {
            result += i;
        }
        const end = Date.now();
        const msg = `js操作完成，运行时长：${(end - start) / 1000} 秒`;
        runMsg.value = msg;
    }

    // worklet 阻塞方法
    const runInWorkLet = useWorklet('default', () => {
        'worklet';
        runMsg.value = '执行中，请等待...';
        const start = Date.now();
        let result = 0;
        for (let i = 0; i < 1e8; i++) {
            result += i;
        }
        const end = Date.now();
        const msg = `worklet操作完成，运行时长：${(end - start) / 1000} 秒`;
        runMsg.value = msg;
    }, []);

    const run = (type: 'js' | 'worklet') => {
        if (type === 'js') {
            runInJs()
        } else {
            runInWorkLet()
        }
    }

    // 计数器
    const [count, setCount] = useState(0);
    // 定义一个useRunJS方法
    const setCountRunInJS = useRunOnJS(() => {
        setCount(Math.random());
    }, [count])
    // 在worklets线程使用RunInJS方法
    const countInWorkLet = useWorklet('default', () => {
        'worklet'
        setCountRunInJS();
    }, [setCountRunInJS])

    return (
        <View>
            <View style={styles.dividing} />
            <Text>使用 Hooks 展示 worklet 线程与 js 线程的差异</Text>
            <Text>当前使用循环来模拟耗时操作，循环次数越大需要处理的时间越长</Text>

            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                <Button title="点击更新时间戳以验证阻塞" onPress={() => setTimeStr(Date.now())} />
                <Text>{timeStr.toString()}</Text>
            </View>

            <View style={styles.dividing} />
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>useWorklet</Text>
            <Text style={{ marginBottom: 10 }}>通过 useWorklet 创建线程，在两个线程分别遍历1e8次</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <Button title="js" onPress={() => run('js')} />
                <Button title="WorkLet" onPress={() => run('worklet')} />
            </View>

            <View style={styles.dividing} />
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>useSharedValue</Text>
            <Text>以下运行时长是通过 useSharedValue 展示，正常情况下两个线程不共享变量</Text>
            <Text>{runMsg.value}</Text>

            <View style={styles.dividing} />
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>useRunOnJS</Text>
            <Text style={{ marginBottom: 10 }}>点击以下按钮更新随机数字，是在worklets线程中使用 useRunOnJS 的形式更新，注意在useRunOnJS中依旧无法使用js线程的变量：</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <Button title="SetCount" onPress={() => countInWorkLet()} />
            </View>
            <Text style={styles.time}>count:{count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    dividing: {
        height: 1,
        backgroundColor: '#ccc',
        width: '100%',
        marginTop: 15,
        marginBottom: 15,
    },
    time: {
        fontSize: 20
    }
})

export default App;

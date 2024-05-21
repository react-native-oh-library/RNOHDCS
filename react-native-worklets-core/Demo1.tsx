import { useState } from "react";
import { Button, Text, View } from "react-native"
import { useRunOnJS, useWorklet } from "react-native-worklets-core";

const App = () => {
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
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <Button title="SetCount" onPress={() => countInWorkLet()} />
            </View>
            <Text>count:{count}</Text>
        </View>
    )
}

export default App;
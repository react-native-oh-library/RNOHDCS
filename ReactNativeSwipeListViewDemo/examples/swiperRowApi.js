import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { SwipeListView,SwipeRow } from 'react-native-swipe-list-view';

export default function StandaloneRow(){
    const empty = () => { setLog('') }
    const [log,setLog] = useState('')
    const onSwipeValueChange = rowKey =>{
        setLog('每当行的translateX 值更改时调用回调')
    }
    const empty2 = () => { setLog2('') }
    const [log2,setLog2] = useState('')
    const swipeGestureBegan = rowKey =>{
        setLog2('swipeGestureBegan 开始滑动')
    }
    const empty4 = () => { setLog4('') }
    const [log4,setLog4] = useState('')
    
    const swipeGestureEnded = rowKey =>{
        setLog4('swipeGestureBegan 结束滑动')
    } 
    const empty3 = () => { setLog3('') }
    const [log3,setLog3] = useState('')
    const shouldItemUpdate = rowKey =>{
        setLog3('组件更新')
    }

    const empty6 = () => { setLog6('') }
    const [log6,setLog6] = useState('')
    const onRowClose = rowKey =>{
        setLog6('在行动画关闭时调用')
    }
    return (
        <View style={styles.container}>
            <View style={styles.standalone}>
                <Text>onSwipeValueChange:<Text style={[{color:'blue'}]}>{log}</Text></Text>
                <Text onPress={empty} style={styles.empty}>清空日志</Text>
                <SwipeRow leftOpenValue={75} rightOpenValue={-75}
                onSwipeValueChange={onSwipeValueChange}>
                    <View style={styles.standaloneRowBack}>
                        <Text style={styles.backTextWhite}>Left</Text>
                        <Text style={styles.backTextWhite}>Right</Text>
                    </View>
                    <View style={styles.standaloneRowFront}>
                        <Text>I am standalone SwipeRow #1</Text>
                    </View>
                </SwipeRow>
                <Text>swipeGestureBegan:<Text style={[{color:'blue'}]}>{log2}</Text></Text>
                <Text onPress={empty2} style={styles.empty}>清空日志</Text>
                <SwipeRow leftOpenValue={75} rightOpenValue={-75}
                swipeGestureBegan={swipeGestureBegan}>
                    <View style={styles.standaloneRowBack}>
                        <Text style={styles.backTextWhite}>Left</Text>
                        <Text style={styles.backTextWhite}>Right</Text>
                    </View>
                    <View style={styles.standaloneRowFront}>
                        <Text>I am standalone SwipeRow #1</Text>
                    </View>
                </SwipeRow>
                <Text>swipeGestureEnded:<Text style={[{color:'blue'}]}>{log4}</Text></Text>
                <Text onPress={empty4} style={styles.empty}>清空日志</Text>
                <SwipeRow leftOpenValue={75} rightOpenValue={-75}
                swipeGestureEnded={swipeGestureEnded}>
                    <View style={styles.standaloneRowBack}>
                        <Text style={styles.backTextWhite}>Left</Text>
                        <Text style={styles.backTextWhite}>Right</Text>
                    </View>
                    <View style={styles.standaloneRowFront}>
                        <Text>I am standalone SwipeRow #1</Text>
                    </View>
                </SwipeRow>
                <Text>shouldItemUpdate:<Text style={[{color:'blue'}]}>{log3}</Text></Text>
                <Text onPress={empty3} style={styles.empty}>清空日志</Text>
                <SwipeRow leftOpenValue={75} rightOpenValue={-75}
                shouldItemUpdate={shouldItemUpdate}>
                    <View style={styles.standaloneRowBack}>
                        <Text style={styles.backTextWhite}>Left</Text>
                        <Text style={styles.backTextWhite}>Right</Text>
                    </View>
                    <View style={styles.standaloneRowFront}>
                        <Text>I am standalone SwipeRow #1</Text>
                    </View>
                </SwipeRow>

                <Text>onRowClose:<Text style={[{color:'blue'}]}>{log6}</Text></Text>
                <Text onPress={empty6} style={styles.empty}>清空日志</Text>
                <SwipeRow leftOpenValue={75} rightOpenValue={-75}
                onRowClose={onRowClose}>
                    <View style={styles.standaloneRowBack}>
                        <Text style={styles.backTextWhite}>Left</Text>
                        <Text style={styles.backTextWhite}>Right</Text>
                    </View>
                    <View style={styles.standaloneRowFront}>
                        <Text>I am standalone SwipeRow #1</Text>
                    </View>
                </SwipeRow>
            </View>
        </View>
    )
  
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    standaloneRowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        justifyContent: 'center',
        height: 50,
    },
    standaloneRowBack: {
        alignItems: 'center',
        backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    backTextWhite: {
        color: '#FFF',
    },
    spacer: {
        height: 50,
    },
    empty: {
        width: 70,
        padding: 5,
        backgroundColor:'#841584',
        color: '#fff',
        borderRadius: 5
    }
});
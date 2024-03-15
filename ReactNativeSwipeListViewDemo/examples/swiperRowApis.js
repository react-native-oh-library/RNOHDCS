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
    const onRowPress = rowKey =>{
        setLog('当行按下时')
    }
    const empty2 = () => { setLog2('') }
    const [log2,setLog2] = useState('')
    const onRowOpen = rowKey =>{
        setLog2('在行动画打开时调用')
    }
    const empty6 = () => { setLog6('') }
    const [log6,setLog6] = useState('')
    const onRowDidOpen = rowKey =>{
        setLog6('在行动画已打开时调用')
    } 

    const empty3 = () => { setLog3('') }
    const [log3,setLog3] = useState('')
    const onRowClose = rowKey =>{
        setLog3('在行动画关闭时调用')
    }
    
    const empty4 = () => { setLog4('') 
    }
    const [log4,setLog4] = useState('')
    const onRowDidClose = rowKey =>{
        setLog4('在行动画已关闭时调用')
    }
    return (
        <View style={styles.container}>
            <View style={styles.standalone}>
                <Text>onRowPress:<Text style={[{color:'blue'}]}>{log}</Text></Text>
                <Text onPress={empty} style={styles.empty}>清空日志</Text>
                <SwipeRow leftOpenValue={75} rightOpenValue={-75}
                onRowPress={onRowPress}>
                    <View style={styles.standaloneRowBack}>
                        <Text style={styles.backTextWhite}>Left</Text>
                        <Text style={styles.backTextWhite}>Right</Text>
                    </View>
                    <View style={styles.standaloneRowFront}>
                        <Text>I am standalone SwipeRow #1</Text>
                    </View>
                </SwipeRow>
                <Text>onRowOpen:<Text style={[{color:'blue'}]}>{log2}</Text></Text>
                <Text onPress={empty2} style={styles.empty}>清空日志</Text>
                <SwipeRow leftOpenValue={75} rightOpenValue={-75}
                onRowOpen={onRowOpen}>
                    <View style={styles.standaloneRowBack}>
                        <Text style={styles.backTextWhite}>Left</Text>
                        <Text style={styles.backTextWhite}>Right</Text>
                    </View>
                    <View style={styles.standaloneRowFront}>
                        <Text>I am standalone SwipeRow #1</Text>
                    </View>
                </SwipeRow>
                <Text>onRowDidOpen:<Text style={[{color:'blue'}]}>{log6}</Text></Text>
                <Text onPress={empty6} style={styles.empty}>清空日志</Text>
                <SwipeRow leftOpenValue={75} rightOpenValue={-75}
                onRowDidOpen={onRowDidOpen}>
                    <View style={styles.standaloneRowBack}>
                        <Text style={styles.backTextWhite}>Left</Text>
                        <Text style={styles.backTextWhite}>Right</Text>
                    </View>
                    <View style={styles.standaloneRowFront}>
                        <Text>I am standalone SwipeRow #1</Text>
                    </View>
                </SwipeRow>


                <Text>onRowClose:<Text style={[{color:'blue'}]}>{log3}</Text></Text>
                <Text onPress={empty3} style={styles.empty}>清空日志</Text>
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

                <Text>onRowDidClose:<Text style={[{color:'blue'}]}>{log4}</Text></Text>
                <Text onPress={empty4} style={styles.empty}>清空日志</Text>
                <SwipeRow leftOpenValue={75} rightOpenValue={-75}
                onRowDidClose={onRowDidClose}>
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
        height: 10,
    },
    empty: {
        width: 70,
        padding: 5,
        backgroundColor:'#841584',
        color: '#fff',
        borderRadius: 5
    }
});
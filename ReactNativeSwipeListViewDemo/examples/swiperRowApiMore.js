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
    const onRowDidOpen = rowKey =>{
        setLog2('在行动画已打开时调用')
    } 
    const empty3 = () => { setLog3('') }
    const [log3,setLog3] = useState('')
    const onRowClose = rowKey =>{
        setLog3('在行动画关闭时调用')
    }
    const onRowDidClose = rowKey =>{
        setLog3('在行动画已关闭时调用')
    }
    const empty4 = () => { setLog4('') 
    setLog5('') }
    const [log4,setLog4] = useState('')
    const onLeftActionStatusChange = rowKey =>{
        setLog4('当滑动值越过左侧ActivationValue时调用一次')
    }
    const onRightActionStatusChange = rowKey =>{
        setLog4('当滑动值越过右侧ActivationValue时调用一次')
    }
    const [log5,setLog5] = useState('')
    const onLeftAction = rowKey =>{
        setLog5('onLeftAction')
    }
    const onRightAction = rowKey =>{
        setLog5('onRightAction')
    }
    return (
        <View style={styles.container}>
            <View style={styles.standalone}>
                <Text>onRowPress:<Text style={[{color:'blue'}]}>{log}</Text></Text>
                <Text onPress={empty} style={styles.empty}>清空日志</Text>
                <SwipeRow leftOpenValue={75} rightOpenValue={-75}
                onRowPress={onRowPress}
                preview={true}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={1000}>
                    <View style={styles.standaloneRowBack}>
                        <Text style={styles.backTextWhite}>Left</Text>
                        <Text style={styles.backTextWhite}>Right</Text>
                    </View>
                    <View style={styles.standaloneRowFront}>
                        <Text>I am standalone SwipeRow #1</Text>
                    </View>
                </SwipeRow>
                <View style={styles.spacer} />
                <Text>onRowOpen/onRowDidOpen:<Text style={[{color:'blue'}]}>{log2}</Text></Text>
                <Text onPress={empty2} style={styles.empty}>清空日志</Text>
                <SwipeRow leftOpenValue={75} rightOpenValue={-75}
                onRowOpen={onRowOpen}
                onRowDidOpen={onRowDidOpen}
                useNativeDriver={false}>
                    <View style={styles.standaloneRowBack}>
                        <Text style={styles.backTextWhite}>Left</Text>
                        <Text style={styles.backTextWhite}>Right</Text>
                    </View>
                    <View style={styles.standaloneRowFront}>
                        <Text>I am standalone SwipeRow #1</Text>
                    </View>
                </SwipeRow>
                <View style={styles.spacer} />
                <Text>onRowClose/onRowDidClose:<Text style={[{color:'blue'}]}>{log3}</Text></Text>
                <Text onPress={empty3} style={styles.empty}>清空日志</Text>
                <SwipeRow leftOpenValue={75} rightOpenValue={-75}
                onRowClose={onRowClose}
                onRowDidClose={onRowDidClose}
                useNativeDriver={false}>
                    <View style={styles.standaloneRowBack}>
                        <Text style={styles.backTextWhite}>Left</Text>
                        <Text style={styles.backTextWhite}>Right</Text>
                    </View>
                    <View style={styles.standaloneRowFront}>
                        <Text>I am standalone SwipeRow #1</Text>
                    </View>
                </SwipeRow>
                <View style={styles.spacer} />
                <Text>onLeftActionStatusChange/onRightActionStatusChange:<Text style={[{color:'blue'}]}>{log4}</Text></Text>
                <Text>onLeftAction/onRightAction:<Text style={[{color:'blue'}]}>{log5}</Text></Text>
                <Text onPress={empty4} style={styles.empty}>清空日志</Text>
                <SwipeRow leftOpenValue={75} rightOpenValue={-75}
                leftActivationValue={100} rightActivationValue={-200}
                onLeftActionStatusChange={onLeftActionStatusChange}
                onRightActionStatusChange={onRightActionStatusChange}
                onLeftAction={onLeftAction}
                onRightAction={onRightAction}
                useNativeDriver={false} 
                >
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
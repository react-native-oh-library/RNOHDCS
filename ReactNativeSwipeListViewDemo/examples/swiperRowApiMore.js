import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { SwipeListView,SwipeRow } from 'react-native-swipe-list-view';

export default function StandaloneRow(){
    

  

    const empty6 = () => { setLog6('') }
    const [log6,setLog6] = useState('')
    const onRowDidClose = rowKey =>{
        setLog6('在行动画已关闭时调用')
    }
    const empty4 = () => { setLog4('') }
    const [log4,setLog4] = useState('')
    const onLeftActionStatusChange = rowKey =>{
        setLog4('当滑动值越过左侧ActivationValue时调用')
    }

    const empty7 = () => { setLog7('')}
    const [log7,setLog7] = useState('')
    const onRightActionStatusChange = rowKey =>{
        setLog7('当滑动值越过右侧ActivationValue时调用')
    }

    const empty5 = () => { setLog5('')}
    const [log5,setLog5] = useState('')
    const onLeftAction = rowKey =>{
        setLog5('onLeftAction')
    }

    const empty8 = () => { setLog8('')}
    const [log8,setLog8] = useState('')
    const onRightAction = rowKey =>{
        setLog8('onRightAction')
    }
    return (
        <View style={styles.container}>
            <View style={styles.standalone}>
                
             

                <Text>onRowDidClose:<Text style={[{color:'blue'}]}>{log6}</Text></Text>
                <Text onPress={empty6} style={styles.empty}>清空日志</Text>
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

                <Text>onLeftActionStatusChange:<Text style={[{color:'blue'}]}>{log4}</Text></Text>
                <Text onPress={empty4} style={styles.empty}>清空日志</Text>
                <SwipeRow leftOpenValue={75} rightOpenValue={-75}
                leftActivationValue={100} rightActivationValue={-200}
                onLeftActionStatusChange={onLeftActionStatusChange}
                >
                    <View style={styles.standaloneRowBack}>
                        <Text style={styles.backTextWhite}>Left</Text>
                        <Text style={styles.backTextWhite}>Right</Text>
                    </View>
                    <View style={styles.standaloneRowFront}>
                        <Text>I am standalone SwipeRow #1</Text>
                    </View>
                </SwipeRow>

                <Text>onRightActionStatusChange:<Text style={[{color:'blue'}]}>{log7}</Text></Text>
                <Text onPress={empty7} style={styles.empty}>清空日志</Text>
                <SwipeRow leftOpenValue={75} rightOpenValue={-75}
                leftActivationValue={100} rightActivationValue={-200}
                onRightActionStatusChange={onRightActionStatusChange}
         
                >
                    <View style={styles.standaloneRowBack}>
                        <Text style={styles.backTextWhite}>Left</Text>
                        <Text style={styles.backTextWhite}>Right</Text>
                    </View>
                    <View style={styles.standaloneRowFront}>
                        <Text>I am standalone SwipeRow #1</Text>
                    </View>
                </SwipeRow>

           
                <Text>onLeftAction:<Text style={[{color:'blue'}]}>{log5}</Text></Text>
                <Text onPress={empty5} style={styles.empty}>清空日志</Text>
                <SwipeRow leftOpenValue={75} rightOpenValue={-75}
                leftActivationValue={100} rightActivationValue={-200}
                onLeftAction={onLeftAction}
                >
                    <View style={styles.standaloneRowBack}>
                        <Text style={styles.backTextWhite}>Left</Text>
                        <Text style={styles.backTextWhite}>Right</Text>
                    </View>
                    <View style={styles.standaloneRowFront}>
                        <Text>I am standalone SwipeRow #1</Text>
                    </View>
                </SwipeRow>
               
                <Text>onRightAction:<Text style={[{color:'blue'}]}>{log8}</Text></Text>
                <Text onPress={empty8} style={styles.empty}>清空日志</Text>
                <SwipeRow leftOpenValue={75} rightOpenValue={-75}
                leftActivationValue={100} rightActivationValue={-200}
                onRightAction={onRightAction} 
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
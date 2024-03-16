import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { SwipeListView } from 'react-native-swipe-list-view';

export default function StandaloneRow(){
    const listViewData = Array(1).fill("").map((_,i)=>({key:`${i}`,text:`item #${i}`}))
    const empty = () => { setLog('') }
    const [log,setLog] = useState('')
    const swipeGestureBegan = rowKey =>{
        setLog('开始滑动')
    }
    const swipeGestureEnded = rowKey =>{
        setLog('结束滑动')
    }

    const empty2 = () => { setLog2('') }
    const [log2,setLog2] = useState('')
    const onScrollEnabled = rowKey =>{
        setLog2('在启用/禁用滚动时调用')
    }
    const empty3 = () => { setLog3('') }
    const [log3,setLog3] = useState('')
    const onRowOpen = rowKey =>{
        setLog3('滑动行动画处于开启状态时调用')
    }
   
    const [log4,setLog4] = useState('')
    const listViewRef = rowKey =>{
        setLog4('listViewRef')
    }
   
    return (
        <View style={styles.container}>
            <View style={styles.standalone}>
                <Text>swipeGestureBegan/swipeGestureEnded:<Text style={[{color:'blue'}]}>{log}</Text></Text>
                <Text onPress={empty} style={styles.empty}>清空日志</Text>
                <SwipeListView data={listViewData}
                renderItem={(data,rowMap)=>(
                    <View style={styles.rowFront}><Text>I am {data.item.text} in a SwipeListView</Text></View>
                )}
                renderHiddenItem={(data,rowMap)=>(
                    <View style={styles.rowBack}><Text>Left</Text><Text>Right</Text></View>
                )}
                leftOpenValue={75}
                rightOpenValue={-75}
                swipeGestureBegan={swipeGestureBegan}
                swipeGestureEnded={swipeGestureEnded}
                useNativeDriver={false}>
                </SwipeListView>
                <Text>onScrollEnabled:<Text style={[{color:'blue'}]}>{log2}</Text></Text>
                <Text onPress={empty2} style={styles.empty}>清空日志</Text>
                <SwipeListView data={listViewData}
                renderItem={(data,rowMap)=>(
                    <View style={styles.rowFront}><Text>I am {data.item.text} in a SwipeListView</Text></View>
                )}
                renderHiddenItem={(data,rowMap)=>(
                    <View style={styles.rowBack}><Text>Left</Text><Text>Right</Text></View>
                )}
                leftOpenValue={75}
                rightOpenValue={-75}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onScrollEnabled={onScrollEnabled}
                >
                </SwipeListView>
                <Text>onRowOpen:<Text style={[{color:'blue'}]}>{log3}</Text></Text>
                <Text onPress={empty3} style={styles.empty}>清空日志</Text>
                <SwipeListView data={listViewData}
                renderItem={(data,rowMap)=>(
                    <View style={styles.rowFront}><Text>I am {data.item.text} in a SwipeListView</Text></View>
                )}
                renderHiddenItem={(data,rowMap)=>(
                    <View style={styles.rowBack}><Text>Left</Text><Text>Right</Text></View>
                )}
                leftOpenValue={75}
                rightOpenValue={-75}
                onRowOpen={onRowOpen}>
                </SwipeListView>

                <Text>onRowOpen:<Text style={[{color:'blue'}]}>{log4}</Text></Text>
                <SwipeListView data={listViewData}
                renderItem={(data,rowMap)=>(
                    <View style={styles.rowFront}><Text>I am {data.item.text} in a SwipeListView</Text></View>
                )}
                renderHiddenItem={(data,rowMap)=>(
                    <View style={styles.rowBack}><Text>Left</Text><Text>Right</Text></View>
                )}
                leftOpenValue={75}
                rightOpenValue={-75}
                listViewRef={listViewRef}>
                </SwipeListView>
            </View>
        </View>
    )
  
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
   
    empty: {
        width: 70,
        padding: 5,
        backgroundColor:'#841584',
        color: '#fff',
        borderRadius: 5
    }
});
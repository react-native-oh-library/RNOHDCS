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
    const empty2 = () => { setLog2('') }
    const [log2,setLog2] = useState('')
    const swipeGestureEnded = rowKey =>{
        setLog2('结束滑动')
    }
    const empty3 = () => { setLog3('') }
    const [log3,setLog3] = useState('')
    const onRowOpen = rowKey =>{
        setLog3('滑动行动画处于开启状态时调用')
    }
    const empty4 = () => { setLog4('')}
    const [log4,setLog4] = useState('')
    const onRowClose = rowKey =>{
        setLog4('滑动行动画处于关闭时调用')
    }
    const onRowDidClose = rowKey =>{
        setLog4('滑动行动画处于已关闭时调用')
    }
    const empty5 = () => { setLog5('')}
    const [log5,setLog5] = useState('')
    const onPreviewEnd= rowKey =>{
        setLog5('行预览完之后的回调')
    }
   
    return (
        <View style={styles.container}>
            <View style={styles.standalone}>
                <Text>swipeGestureBegan:<Text style={[{color:'blue'}]}>{log}</Text></Text>
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
                swipeGestureBegan={swipeGestureBegan}>
                </SwipeListView>
                <Text>swipeGestureEnded:<Text style={[{color:'blue'}]}>{log2}</Text></Text>
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
                swipeGestureEnded={swipeGestureEnded}>
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

                <Text>onRowClose/onRowDidClose:<Text style={[{color:'blue'}]}>{log4}</Text></Text>
                <Text onPress={empty4} style={styles.empty}>清空日志</Text>
                <SwipeListView data={listViewData}
                renderItem={(data,rowMap)=>(
                    <View style={styles.rowFront}><Text>I am {data.item.text} in a SwipeListView</Text></View>
                )}
                renderHiddenItem={(data,rowMap)=>(
                    <View style={styles.rowBack}><Text>Left</Text><Text>Right</Text></View>
                )}
                leftOpenValue={75}
                rightOpenValue={-75}
                onRowClose={onRowClose}
                onRowDidClose={onRowDidClose}>
                </SwipeListView>

                <Text>onPreviewEnd:<Text style={[{color:'blue'}]}>{log5}</Text></Text>
                <SwipeListView data={listViewData}
                renderItem={(data,rowMap)=>(
                    <View style={styles.rowFront}><Text>I am {data.item.text} in a SwipeListView</Text></View>
                )}
                renderHiddenItem={(data,rowMap)=>(
                    <View style={styles.rowBack}><Text>Left</Text><Text>Right</Text></View>
                )}
                leftOpenValue={75}
                rightOpenValue={-75}
                onPreviewEnd={onPreviewEnd}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}>
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
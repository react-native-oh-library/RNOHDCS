import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { SwipeListView } from 'react-native-swipe-list-view';

export default function StandaloneRow(){
    const listViewData = Array(1).fill("").map((_,i)=>({key:`${i}`,text:`item #${i}`}))

    const empty4 = () => { setLog4('')}
    const [log4,setLog4] = useState('')
    const onRowClose = rowKey =>{
        setLog4('滑动行动画处于关闭时调用')
    }
     
    const empty7 = () => { setLog7('')}
    const [log7,setLog7] = useState('')
    const onRowDidClose = rowKey =>{
        setLog7('滑动行动画处于已关闭时调用')
    }
    const [log5,setLog5] = useState('')
    const onPreviewEnd= rowKey =>{
        setLog5('行预览完之后的回调')
    }

    const [log6,setLog6] = useState('')
    const shouldItemUpdate= rowKey =>{
        setLog6('组件确定已更新')
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.standalone}>
               
                <Text>onRowClose:<Text style={[{color:'blue'}]}>{log4}</Text></Text>
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
                >
                </SwipeListView>
                
                <Text>onRowDidClose:<Text style={[{color:'blue'}]}>{log7}</Text></Text>
                <Text onPress={empty7} style={styles.empty}>清空日志</Text>
                <SwipeListView data={listViewData}
                renderItem={(data,rowMap)=>(
                    <View style={styles.rowFront}><Text>I am {data.item.text} in a SwipeListView</Text></View>
                )}
                renderHiddenItem={(data,rowMap)=>(
                    <View style={styles.rowBack}><Text>Left</Text><Text>Right</Text></View>
                )}
                leftOpenValue={75}
                rightOpenValue={-75}
                onRowDidClose={onRowDidClose}
                useNativeDriver={false}>
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
                previewOpenDelay={1000}
                stopLeftSwipe={10} 
                stopRightSwipe={-10} 
                swipeToClosePercent={10}
                swipeToOpenVelocityContribution={10}
                previewRepeatDelay={1000}
                friction={7}
                tension={40}
                restSpeedThreshold={0.001}
                restDisplacementThreshold={0.001}
                previewDuration={300}
                previewRowIndex={0}
                >
                </SwipeListView>

                <Text>shouldItemUpdate:<Text style={[{color:'blue'}]}>{log6}</Text></Text>
                <SwipeListView data={listViewData}
                renderItem={(data,rowMap)=>(
                    <View style={styles.rowFront}><Text>I am {data.item.text} in a SwipeListView</Text></View>
                )}
                renderHiddenItem={(data,rowMap)=>(
                    <View style={styles.rowBack}><Text>Left</Text><Text>Right</Text></View>
                )}
                leftOpenValue={75}
                rightOpenValue={-75}
                shouldItemUpdate={shouldItemUpdate}
               >
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
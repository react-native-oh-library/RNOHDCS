import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    Animated,
    TouchableOpacity,
    TouchableHighlight,
    View,
} from 'react-native';

import { SwipeListView } from 'react-native-swipe-list-view';
export default function Actions() {
    const [listData, setListData] = useState(
        Array(8)
            .fill('')
            .map((_, i) => ({
                key: `${i}`,
                text: `item #${i}`,
                initialLeftActionState: i % 2 !== 0,
            }))
    );

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const onLeftActionStatusChange = rowKey => {
        console.log('onLeftActionStatusChange', rowKey);
    };

    const onRightActionStatusChange = rowKey => {
        console.log('onRightActionStatusChange', rowKey);
    };

    const onRightAction = rowKey => {
        console.log('onRightAction', rowKey);
    };

    const onLeftAction = rowKey => {
        console.log('onLeftAction', rowKey);
    };

    const VisibleItem = props => {
        const {
            rowHeightAnimatedValue,
            rightActionState,
            leftActionState,
            data,
            removeRow,
        } = props;

        return (
            <Animated.View
                style={[
                    styles.rowFront,
                    { height: rowHeightAnimatedValue },
                    leftActionState && { backgroundColor: 'lightgreen' },
                ]}
            >
                <TouchableHighlight
                    onPress={() => console.log('You touched me')}
                    style={[
                        styles.rowFront,
                        leftActionState && {
                            backgroundColor: 'lightgreen',
                        },
                    ]}
                    underlayColor={'#AAA'}
                >
                    <View>
                        <Text>I am {data.item.text} in a SwipeListView</Text>
                    </View>
                </TouchableHighlight>
            </Animated.View>
        );
    };

    const renderItem = (data, rowMap) => {
        const rowHeightAnimatedValue = new Animated.Value(50);
        return (
            <VisibleItem
                rowHeightAnimatedValue={rowHeightAnimatedValue}
                data={data}
                removeRow={() => deleteRow(rowMap, data.item.key)}
            />
        );
    };

  

    return (
        <View style={styles.container}>
            <SwipeListView
                data={listData}
                renderItem={renderItem}
                renderHiddenItem={()=>(
                    <View style={styles.rowBack}>
                    <Text>Left</Text>
                    <Text>Right</Text>
                    </View>
                    )}
                onRowDidOpen={onRowDidOpen}
                leftOpenValue={75}
                rightOpenValue={-150}
                leftActivationValue={100}
                rightActivationValue={-200}
                leftActionValue={0}
                rightActionValue={-200}
                onLeftAction={onLeftAction}
                onRightAction={onRightAction}
                onLeftActionStatusChange={onLeftActionStatusChange}
                onRightActionStatusChange={onRightActionStatusChange}
            />
        </View>
    );
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
        width: '100%',
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'flex-end',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        paddingRight: 17,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
    trash: {
        height: 25,
        width: 25,
        marginRight: 7,
    },
});

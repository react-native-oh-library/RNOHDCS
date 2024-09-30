import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { DragSortableView } from "react-native-drag-sort";
//此案例id1、id2不支持拖拽
export const E_DragSortableView = () => {
    const [data, setData] = useState([
        {
            id: 1,
            title: "固定任务 1",
        },
        {
            id: 2,
            title: "固定任务 2",
        },
        {
            id: 3,
            title: "任务 3",
        },
        {
            id: 4,
            title: "任务 4",
        },
        {
            id: 5,
            title: "任务 5",
        },
        {
            id: 6,
            title: "任务 6",
        },
        {
            id: 7,
            title: "任务 7",
        },
        {
            id: 8,
            title: "任务 8",
        },
    ]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.header_title}>DragSortableView</Text>
            </View>
            <DragSortableView
                dataSource={data}
                parentWidth={400}
                childrenWidth={100}
                childrenHeight={50}
                marginChildrenTop={5}
                marginChildrenBottom={5}
                marginChildrenLeft={5}
                marginChildrenRight={5}
                keyExtractor={(item, index) => item.id}
                onClickItem={(data, item, index) => {
                    console.log("点击了第", index, "个元素");
                }}
                onDragStart={() => console.log("Drag started")}
                onDragEnd={() => console.log("Drag end")}
                onDataChange={() => {
                    console.log("数据发生变化");
                }}
                fixedItems={[0, 1]}
                delayLongPress={100}
                isDragFreely={true}
                maxScale={1.2}
                minOpacity={0.7}
                renderItem={(item, index) => {
                    return (
                        <View key={item.id} style={styles.box}>
                            <Text style={styles.text}>{item.title}</Text>
                        </View>
                    );
                }}
                sortable={true}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    box: {
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 5,
        margin: 20,
        backgroundColor: "#4e71f2",
        height: 50,
        width: 100,
    },
    text: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center",
    },
    header: {
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "#2ecc71",
        borderBottomWidth: 2,
    },
    header_title: {
        color: "#333",
        fontSize: 24,
        fontWeight: "bold",
    },
});
export default E_DragSortableView;
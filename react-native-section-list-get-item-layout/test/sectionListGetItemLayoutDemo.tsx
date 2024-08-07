import React, { useState } from 'react';
import { View, Text, SectionList, Button, StyleSheet } from 'react-native';
import { Tester, TestCase } from '@rnoh/testerino';
import sectionListGetItemLayout from "react-native-section-list-get-item-layout";

export default function sectionListGetItemLayoutDemo(): JSX.Element {
    const [eparatorHeight, SetSeparatorHeight] = useState<number>(100);
    const [SectionHeaderHeight, SetSectionHeaderHeight] = useState<number>(100);
    const [SectionFooterHeight, SetSectionFooterHeight] = useState<number>(100);
    const [listHeaderHeight, SetlistHeaderHeight] = useState<number>(100);
    const _renderItem = (info) => {
        var txt = '  ' + info.item.title;
        return <Text
            style={{ height: 30, textAlignVertical: 'center', backgroundColor: "#ffffff", color: '#5C5C5C', fontSize: 15 }}>{txt}</Text>
    }

    const _sectionComp = (info) => {
        var txt = info.section.key;
        return <Text
            style={{ height: 30, textAlign: 'center', textAlignVertical: 'center', backgroundColor: '#9CEBBC', color: 'white', fontSize: 30 }}>{txt}</Text>
    }
    const sections = [
        { key: "A", data: [{ title: "阿童木" }, { title: "阿玛尼" }, { title: "爱多多" }] },
        { key: "B", data: [{ title: "表哥" }, { title: "贝贝" }, { title: "表弟" }, { title: "表姐" }, { title: "表叔" }] },
        { key: "C", data: [{ title: "成吉思汗" }, { title: "超市快递" }] },
        { key: "W", data: [{ title: "王磊" }, { title: "王者荣耀" }, { title: "往事不能回味" }, { title: "王小磊" }, { title: "王中磊" }, { title: "王大磊" }] },
    ];

    const _getItemLayoutFunc = sectionListGetItemLayout({
        // The height of the row with rowData at the given sectionIndex and rowIndex
        getItemHeight: (rowData, sectionIndex, rowIndex) => listHeaderHeight,    // 修改了SectionList容器的高度
        // These four properties are optional
        getSeparatorHeight: () => eparatorHeight, // The height of your separators
        getSectionHeaderHeight: () => SectionHeaderHeight, // The height of your section headers
        getSectionFooterHeight: () => SectionFooterHeight, // The height of your section footers
        listHeaderHeight: 100, // The height of your list header
    });

    const onPressLearnMore1 = () => {
        SetSeparatorHeight(100000);
    };
    const onPressLearnMore2 = () => {
        SetSectionHeaderHeight(1000);
    };
    const onPressLearnMore3 = () => {
        SetSectionFooterHeight(50);
    };
    const onPressLearnMore4 = () => {
        SetlistHeaderHeight(1000);
    };
    const onPressLearnMore5 = () => {
        SetSeparatorHeight(100);
        SetSectionHeaderHeight(100);
        SetSectionFooterHeight(100);
        SetlistHeaderHeight(100);
    };
    return (
        <View style={styles.scrollViewStyle}>
            <View>
                <Button
                    onPress={onPressLearnMore1}
                    title="修改SeparatorHeight"
                    color="#2196F3"
                />
                <Button
                    onPress={onPressLearnMore2}
                    title="修改SectionHeaderHeight"
                    color="#2196F3"
                />
                <Button
                    onPress={onPressLearnMore3}
                    title="修改SectionFooterHeight"
                    color="#2196F3"
                />
                <Button
                    onPress={onPressLearnMore4}
                    title="修改ItemHeight"
                    color="#2196F3"
                />
                <Button
                    onPress={onPressLearnMore5}
                    title="恢复"
                    color="#2196F3"
                />
            </View>
            <Tester style={styles.scrollViewStyle}>
                <TestCase itShould="react-native-section-list-get-item-layout">
                    <SectionList
                        style={styles.sectionListStyle}
                        renderSectionHeader={_sectionComp}
                        renderItem={_renderItem}
                        sections={sections}
                        getItemLayout={_getItemLayoutFunc}
                        ItemSeparatorComponent={() => <View style={{backgroundColor: '#eeeeee'}}><Text></Text></View>}
                        ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录</Text></View>}
                        ListFooterComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录尾部</Text></View>}
                    />
                </TestCase>
            </Tester>
        </View>
    );
}
const styles = StyleSheet.create({
    scrollViewStyle: {
        flex: 1,
    },
    sectionListStyle:{
        backgroundColor:'#ed6c00',
    },
});


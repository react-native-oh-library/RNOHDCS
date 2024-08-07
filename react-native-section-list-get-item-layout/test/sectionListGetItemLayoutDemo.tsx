import React, { Component } from 'react';
import { View, Text, SectionList, PixelRatio } from 'react-native';
import { Tester, TestCase } from '@rnoh/testerino';
import sectionListGetItemLayout from "react-native-section-list-get-item-layout";

export default function sectionListGetItemLayoutDemo(): JSX.Element {
    const _renderItem = (info) => {
        var txt = '  ' + info.item.title;
        return <Text
            style={{ height: 60, textAlignVertical: 'center', backgroundColor: "#ffffff", color: '#5C5C5C', fontSize: 15 }}>{txt}</Text>
    }

    const _sectionComp = (info) => {
        var txt = info.section.key;
        return <Text
            style={{ height: 50, textAlign: 'center', textAlignVertical: 'center', backgroundColor: '#9CEBBC', color: 'white', fontSize: 30 }}>{txt}</Text>
    }
    const sections = [
        { key: "A", data: [{ title: "阿童木" }, { title: "阿玛尼" }, { title: "爱多多" }] },
        { key: "B", data: [{ title: "表哥" }, { title: "贝贝" }, { title: "表弟" }, { title: "表姐" }, { title: "表叔" }] },
        { key: "C", data: [{ title: "成吉思汗" }, { title: "超市快递" }] },
        { key: "W", data: [{ title: "王磊" }, { title: "王者荣耀" }, { title: "往事不能回味" }, { title: "王小磊" }, { title: "王中磊" }, { title: "王大磊" }] },
    ];

    const _getItemLayoutFunc = sectionListGetItemLayout({
        // The height of the row with rowData at the given sectionIndex and rowIndex
        getItemHeight: (rowData, sectionIndex, rowIndex) =>
            sectionIndex === 20,

        // These four properties are optional
        getSeparatorHeight: () => 10, // The height of your separators
        getSectionHeaderHeight: () => 20, // The height of your section headers
        getSectionFooterHeight: () => 20, // The height of your section footers
        listHeaderHeight: 40, // The height of your list header
    });

    return (
        
        <View style={{ flex: 1 }}>
           <Tester>
          <TestCase itShould="react-native-section-list-get-item-layout">
          <SectionList
                renderSectionHeader={_sectionComp}
                renderItem={_renderItem}
                sections={sections}
                getItemLayout={_getItemLayoutFunc}
                ItemSeparatorComponent={() => <View><Text></Text></View>}
                ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录</Text></View>}
                ListFooterComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录尾部</Text></View>}
            />
          </TestCase>
        </Tester>
        </View>
    );
}

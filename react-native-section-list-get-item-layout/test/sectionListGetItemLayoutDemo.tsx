import React, { useState, useRef } from 'react';
import { View, Text, SectionList, Button, StyleSheet } from 'react-native';
import { Tester, TestCase } from '@rnoh/testerino';
import sectionListGetItemLayout from "react-native-section-list-get-item-layout";


let ITEM_HEIGHT = 44; //item的高度
let HEADER_HEIGHT = 24;  //分组头部的高度


export default function sectionListGetItemLayoutDemo(): JSX.Element {
    let sectionListEl = useRef(null);
    const [itemHeight, SetItemHeight] = useState<number>(44);
    const [headerHeight, SetHeaderHeight] = useState<number>(24);
    const [separatorHeight, SetSeparatorHeight] = useState<number>(0);
    const [sectionHeaderHeight, SetsectionHeaderHeight] = useState<number>(0);
    const [sectionFooterHeight, SetsectionFooterHeight] = useState<number>(0);

    const sections = [{ "title": "A", "data": ["a sad dog", "accept or reject", "adapt to", "after meals", "Aquarius", "astonishing", "at school"] },
    { "title": "B", "data": ["based on", "be aware of", "beach party", "blood clot", "bottom line", "breakdown"] },
    { "title": "C", "data": ["care", "censor", "cheetah", "coloring", "colour", "compatibility", "comprtently", "cook (v.)", "courtesy"] },
    { "title": "D", "data": ["definite answer", "dentist", "Depreciation", "desktop", "drain", "dry out"] },
    { "title": "E", "data": ["engineer", "enterprise", "exchange (v.)", "explorers"] },
    { "title": "F", "data": ["fierce", "Firm Grip", "flight attendant", "frozen"] },
    { "title": "G", "data": ["get down to", "get to", "Give-and-take", "go dark", "go to parties"] },
    { "title": "H", "data": ["hacker", "have an effect on", "Hollywood celebrity", "Hungary"] },
    { "title": "I", "data": ["imaginary", "in response to", "intensive", "Internal", "intricacy"] }, { "title": "K", "data": ["Kettlebells", "Korean"] },
    { "title": "L", "data": ["late", "liquid", "literature", "love"] },
    { "title": "M", "data": ["marketing method", "Metrics", "mobilepayment", "moderate drinking", "museum", "musician"] },
    { "title": "N", "data": ["neutral"] },
    { "title": "P", "data": ["package", "perfect", "pills", "plant", "pound", "prefer", "proud"] },
    { "title": "R", "data": ["radio", "reporters", "resort", "ridiculous"] },
    { "title": "S", "data": ["safety instruction card", "second-hand", "sex", "singing tour", "sliver", "smooth", "snowflake", "soy sauce", "start a rock band", "street vendor"] },
    { "title": "T", "data": ["take a helicopter ride", "Taurean", "Thanks-giving Day", "tip (n.)", "tracking&tracing", "training courses"] },
    { "title": "U", "data": ["up and down the hill", "user-friendly"] },
    { "title": "V", "data": ["visually"] },
    { "title": "W", "data": ["weight-lifting", "window-shopping", "worthwhile"] }];


    let _getItemLayoutFunc: any = sectionListGetItemLayout({
        // The height of the row with rowData at the given sectionIndex and rowIndex
        getItemHeight: (rowData, sectionIndex, rowIndex) => itemHeight,
        // These four properties are optional
        getSeparatorHeight: () => separatorHeight, // The height of your separators
        getSectionHeaderHeight: () => sectionHeaderHeight, // The height of your section headers
        getSectionFooterHeight: () => sectionFooterHeight, // The height of your section footers
        listHeaderHeight: headerHeight, // The height of your list header
    });


    const _onSectionselect = (k) => {
        sectionListEl.scrollToLocation(
            {
                sectionIndex: k,
                itemIndex: 0,
                viewOffset: headerHeight,
            }
        );
    };
    // 增加分隔符
    const clickPressSeparator = () => {
        SetSeparatorHeight(1);
    }
    // 增加头部标题
    const clickPressSectionHeader = () => {
        SetsectionHeaderHeight(20);
    }
    // 增加尾部标题
    const clickPressSectionFooter = () => {
        SetsectionFooterHeight(20);
    }
    //清空配置
    const clickUpdate = () => {
        SetSeparatorHeight(0);
        SetsectionHeaderHeight(0);
        SetsectionFooterHeight(0);
    }
    const _keyExtractor = (item, index) => index;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Button title={'增加分隔符'} onPress={clickPressSeparator}></Button>
                <Button title={'增加头部标题'} onPress={clickPressSectionHeader}></Button>
                <Button title={'增加尾部标题'} onPress={clickPressSectionFooter}></Button>
                <Button title={'还原'} onPress={clickUpdate}></Button>
                <Text style={styles.headerTitle}>单词本</Text>
            </View>
            <Tester>
                <TestCase itShould="react-native-section-list-get-item-layout ----- getItemLayout">
                    <SectionList
                        showsVerticalScrollIndicator={false}
                        ref={(ref) => { sectionListEl = ref }}
                        keyExtractor={_keyExtractor}
                        sections={sections}
                        getItemLayout={_getItemLayoutFunc}
                        renderItem={({ item }) => <View style={{
                            height: itemHeight,
                            paddingLeft: 10,
                            justifyContent: 'center',
                            borderBottomWidth: 1,
                            borderBottomColor: '#eee',
                            backgroundColor: '#fff',
                        }}><Text>{item}</Text></View>}
                        renderSectionHeader={({ section }) => <View style={styles.sectionHeader}><Text style={styles.sectionHeaderTxt}>{section.title}</Text></View>}
                        ItemSeparatorComponent={() => <View style={{ backgroundColor: '#eeeeee', height: separatorHeight }}><Text></Text></View>}
                        ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: sectionHeaderHeight }}><Text style={{ fontSize: 18, color: '#ffffff' }}>头部</Text></View>}
                        ListFooterComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: sectionFooterHeight }}><Text style={{ fontSize: 18, color: '#ffffff' }}>尾部</Text></View>}
                    />
                    <View style={styles.sectionTitleList}>
                        {
                            sections.map((v, k) => {
                                return (
                                    <Text style={styles.titleText} key={k} onPress={() => { _onSectionselect(k) }}>{v.title}</Text>
                                )
                            })
                        }
                    </View>
                </TestCase>
            </Tester>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#009887',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        color: '#fff',
    },
    sectionHeader: {
        height: HEADER_HEIGHT,
        paddingLeft: 10,
        justifyContent: 'center',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    sectionHeaderTxt: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    sectionItem: {
        height: ITEM_HEIGHT,
        paddingLeft: 10,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: '#fff',
    },
    //右侧标题
    sectionTitleList: {
        position: 'absolute',
        right: 10,
        top: 10,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'center',
    },
    titleText: {
        color: '#666',
        textAlign: 'center',
        paddingVertical: 1,
        width: 20,
    },
});

import * as React from 'react';
import { View, ScrollView, Alert, StyleSheet } from 'react-native';
import { DataTable, Portal, Paragraph, Button, Provider as PaperProvider, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import { fontConfig } from 'react-native-paper/lib/typescript/styles/fonts';

export function DataTableHeader() {

    const handleRowPress = () => {
        Alert.alert('行被点击');
    };

    const styles = StyleSheet.create({
        container: {
            padding: 20,
        },
    })

    return (
        <Tester>
            <ScrollView>
                <TestSuite name='DataTableHeader'>
                    <TestCase itShould='展示DataTable.Title'>
                        <DataTable.Header>
                            <DataTable.Title
                                sortDirection='descending'
                            >
                                Dessert
                            </DataTable.Title>
                            <DataTable.Title numeric>Calories</DataTable.Title>
                            <DataTable.Title numeric>Fat (g)</DataTable.Title>
                        </DataTable.Header>
                    </TestCase>

                    <TestCase itShould='设置不同的style'>
                        <DataTable.Header>
                            <DataTable.Title style={{ backgroundColor: 'red' }}>名称</DataTable.Title>
                            <DataTable.Title style={{ borderWidth: 5, borderColor: 'green' }}>名称</DataTable.Title>
                        </DataTable.Header>
                    </TestCase>

                    <TestCase itShould='DataTableRow属性:auto|box-only|box-none|none,前两行可以点击，后两行无法点击'>
                        <View style={styles.container}>
                            <DataTable>
                                <DataTable.Header>
                                    <DataTable.Title>名称</DataTable.Title>
                                    <DataTable.Title>年龄</DataTable.Title>
                                    <DataTable.Title>城市</DataTable.Title>
                                </DataTable.Header>

                                <DataTable.Row
                                    onPress={handleRowPress}
                                    pointerEvents="auto" // 行可以响应触摸事件
                                >
                                    <DataTable.Cell>张三</DataTable.Cell>
                                    <DataTable.Cell>28</DataTable.Cell>
                                    <DataTable.Cell>北京</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row
                                    onPress={handleRowPress}
                                    pointerEvents="box-only" // 行可以响应触摸事件
                                >
                                    <DataTable.Cell>张三</DataTable.Cell>
                                    <DataTable.Cell>28</DataTable.Cell>
                                    <DataTable.Cell>北京</DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row
                                    pointerEvents="box-none" // 行不响应触摸事件
                                >
                                    <DataTable.Cell>李四</DataTable.Cell>
                                    <DataTable.Cell>32</DataTable.Cell>
                                    <DataTable.Cell>上海</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row
                                    pointerEvents="none" // 行不响应触摸事件
                                >
                                    <DataTable.Cell>李四</DataTable.Cell>
                                    <DataTable.Cell>32</DataTable.Cell>
                                    <DataTable.Cell>上海</DataTable.Cell>
                                </DataTable.Row>
                            </DataTable>
                        </View>
                    </TestCase>

                    <TestCase itShould='设置不同的style2,给theme设置MD3暗,字体灰色'>
                        <PaperProvider theme={MD3DarkTheme}>
                            <DataTable.Header>
                                <DataTable.Title>名称</DataTable.Title>
                                <DataTable.Title>年龄</DataTable.Title>
                                <DataTable.Title>城市</DataTable.Title>
                            </DataTable.Header>

                            <DataTable.Row>
                                <DataTable.Cell > 张三</DataTable.Cell>
                                <DataTable.Cell>28</DataTable.Cell>
                                <DataTable.Cell>北京</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell >李四</DataTable.Cell>
                                <DataTable.Cell>32</DataTable.Cell>
                                <DataTable.Cell>上海</DataTable.Cell>
                            </DataTable.Row>
                        </PaperProvider>
                    </TestCase>

                    <TestCase itShould='设置不同的style3,给theme设置MD3亮,字体黑色'>
                        <PaperProvider theme={MD3LightTheme}>
                            <DataTable.Header>
                                <DataTable.Title>名称</DataTable.Title>
                                <DataTable.Title>年龄</DataTable.Title>
                                <DataTable.Title>城市</DataTable.Title>
                            </DataTable.Header>

                            <DataTable.Row>
                                <DataTable.Cell > 张三</DataTable.Cell>
                                <DataTable.Cell>28</DataTable.Cell>
                                <DataTable.Cell>北京</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell >李四</DataTable.Cell>
                                <DataTable.Cell>32</DataTable.Cell>
                                <DataTable.Cell>上海</DataTable.Cell>
                            </DataTable.Row>
                        </PaperProvider>
                    </TestCase>

                </TestSuite>
            </ScrollView>
        </Tester>

    );

};

export default DataTableHeader;
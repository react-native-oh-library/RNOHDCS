import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text, Button, Alert } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { AutoDragSortableView } from "react-native-drag-sort";

const STYLES = StyleSheet.create({
    box: {
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 5,
        backgroundColor: "#f39c12",
        height: 50,
        width: 100
    },
    text: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center",
        fontWeight:'bold'
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

export const T_AutoDragSortDemo = () => {

    const [autoThrottle, setAutoThrottle] = useState(2);
    const [autoThrottleDuration, setAutoThrottleDuration] = useState(10);
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        const list = []
        for (let i = 0; i < 26; i++) {
            list.push({ text: String.fromCharCode(65 + i) })
        }
        setDataSource(list as any)
    }, [])



    const requiredProps = { parentWidth: 400, childrenHeight: 60, childrenWidth: 120, dataSource };

    const HeaderComp = <View style={{ height: 30, backgroundColor: "f0f0f0" }}>
        <Text style={{ fontSize: 18, color: "#000", textAlign: "center" }}>我是头部</Text>
    </View>;

    const FooterComp = <View style={{ height: 30, backgroundColor: "#f0f0f0" }}>
        <Text style={{ fontSize: 18, color: "#000", textAlign: "center" }}>我是底部</Text>
    </View>;

    return (
        <Tester>
            <TestSuite name="react-native-drag-sort-AutoDragSort">
                <TestCase
                    key={"autoThrottle"}
                    itShould={`change autoThrottle`}
                    tags={['C_API']}
                    initialState={false}

                    arrange={({ setState }) => {
                        return (
                            <View style={{ height: 300 }}>
                                <View style={{ height: 270 }}>
                                    <AutoDragSortableView {...requiredProps}
                                        renderHeaderView={HeaderComp}
                                        renderBottomView={FooterComp}
                                        autoThrottle={autoThrottle} renderItem={item => {
                                            return <View key={item.id} style={STYLES.box}>
                                                <Text style={STYLES.text}>{item.text}</Text>
                                            </View>;
                                        }}
                                        sortable={true}
                                    />
                                </View>
                                <Button title='setAutoThrottle(1)' onPress={() => {
                                    setAutoThrottle(1); setState(true);
                                }}></Button>
                            </View>
                        );
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                />
                <TestCase
                    key={"autoThrottleDuration"}
                    itShould={`change autoThrottleDuration`}
                    tags={['C_API']}
                    initialState={false}

                    arrange={({ setState }) => {
                        return (
                            <View style={{ height: 300 }}>
                                <View style={{ height: 270 }}>
                                    <AutoDragSortableView {...requiredProps}
                                        renderHeaderView={HeaderComp}
                                        renderBottomView={FooterComp}
                                        autoThrottleDuration={autoThrottleDuration} renderItem={item => {
                                            return <View key={item.id} style={STYLES.box}>
                                                <Text style={STYLES.text}>{item.text}</Text>
                                            </View>;
                                        }}
                                        sortable={true}
                                    />
                                </View>
                                <Button title='setAutoThrottleDuration(500)' onPress={() => {
                                    setAutoThrottleDuration(500); setState(true);
                                }}></Button>
                            </View>
                        );
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                />
            </TestSuite>
        </Tester >
    );
}
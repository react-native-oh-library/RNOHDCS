import React, { useState, useEffect } from "react";
import {
    Button,
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Dimensions,

} from "react-native";
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';

import RTNTextSize, { TSFontSpecs, TSFontInfo, TSFontForStyle } from 'react-native-text-size'
const fontSpecs: TSFontSpecs = {
    fontFamily: undefined,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '900',
}
const width = Dimensions.get('window').width * 0.8

let specsForTextList = [];

export default function TextSize() {
    return (
        <ScrollView>
            <Tester>
                <TestCase
                    itShould="measure 文本测量  I rnTextSize"
                    initialState={false}
                    arrange={({ setState }) => <AddMenuMeasureTest setState={setState} />}
                    assert={({ state, expect }) => {
                        expect(state).to.be.true;
                    }}
                />
                <TestCase
                    itShould="flatHeights 字符串高度计算"
                    initialState={false}
                    arrange={({ setState }) => <AddMenuFlatHeightsTest setState={setState} />}
                    assert={({ state, expect }) => {
                        expect(state).to.be.true;
                    }}
                />
                <TestCase
                    itShould="specsForTextStyles 获取正在运行的操作系统的系统字体信息"
                    initialState={false}
                    arrange={({ setState }) => <AddMenuspecsForTextStylesTest setState={setState} />}
                    assert={({ state, expect }) => {
                        expect(state).to.be.true;
                    }}
                />

                <TestCase
                    itShould="fontFromSpecs 返回根据给定的规范获得的字体的特征 San Francisco"
                    initialState={false}
                    arrange={({ setState }) => <AddMenuFontFromSpecsTest setState={setState} />}
                    assert={({ state, expect }) => {
                        expect(state).to.be.true;
                    }}
                />
                <TestCase
                    itShould="fontFamilyNames 返回系统上可用的字体系列名称列表"
                    initialState={false}
                    arrange={({ setState }) => <AddMenuFontFamilyNamesTest setState={setState} />}
                    assert={({ state, expect }) => {
                        expect(state).to.be.true;
                    }}
                />

                <TestCase
                    itShould="fontNamesForFamilyName 返回特定字体具体信息"
                    initialState={false}
                    arrange={({ setState }) => <AddMenuFontNamesForFamilyNameTest setState={setState} />}
                    assert={({ state, expect }) => {
                        expect(state).to.be.true;
                    }}
                />
            </Tester>
        </ScrollView>
    );
}

const AddMenuFontNamesForFamilyNameTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [fontFamilyNamesText, setFontFamilyNamesText] = useState<{ [key: string]: TSFontForStyle }>()

    const getFontFromSpecs = async () => {
        const specsForText = await RTNTextSize.fontNamesForFamilyName(specsForTextList[0]);
        setFontFamilyNamesText(specsForText);
    }

    return (
        <View style={styles.containerFamilyName} >
            <Text >
                {JSON.stringify(fontFamilyNamesText)}
            </Text>
            <Button onPress={getFontFromSpecs} title="返回特定字体具体信息"></Button>
        </View>
    );
}

const AddMenuFontFamilyNamesTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [fontFamilyNamesText, setFontFamilyNamesText] = useState<{ [key: string]: TSFontForStyle }>()

    const getFontFromSpecs = async () => {
        specsForTextList = await RTNTextSize.fontFamilyNames();
        setFontFamilyNamesText(specsForTextList);
    }

    return (
        <View style={styles.containerFontFamily} >
            <Text >
                {JSON.stringify(fontFamilyNamesText)}
            </Text>
            <Button onPress={getFontFromSpecs} title="返回系统字体列表"></Button>
        </View>
    );
}

const AddMenuFontFromSpecsTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [specsForText, setSpecsForText] = useState<{ [key: string]: TSFontForStyle }>()

    const getFontFromSpecs = async () => {
        const specsForText = await RTNTextSize.fontFromSpecs({ ...fontSpecs, ...{ fontFamily: 'San Francisco' } });
        setSpecsForText(specsForText);
    }

    return (
        <View style={styles.containerSpecs} >
            <Text >
                {JSON.stringify(specsForText)}
            </Text>
            <Button onPress={getFontFromSpecs} title="返回字体特征"></Button>
        </View>
    );
}

const AddMenuspecsForTextStylesTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [specsForText, setSpecsForText] = useState<{ [key: string]: TSFontForStyle }>()

    const getSpecsForTextStyles = async () => {
        const specsForText = await RTNTextSize.specsForTextStyles()
        setSpecsForText(specsForText);
    }

    return (
        <View style={styles.containerSpecsFor} >
            <Text >
                {JSON.stringify(specsForText)}
            </Text>
            <Button onPress={getSpecsForTextStyles} title="获取系统字体信息"></Button>
        </View>
    );
}

const AddMenuFlatHeightsTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const texts = ['I rnTextSize', 'I rnTextSize using flatHeights', 'Thx for flatHeights']
    const [flatHeightsText, setFlatHeightsText] = useState<[{
        width: number,
        height: number,
    }]>([{
        width: 0,
        height: 0,
    }])

    const getFlatHeightsText = async () => {
        const newHeights = await RTNTextSize.flatHeights({
            text: texts,      // array of texts to measure, can include symbols
            width: width,            // max-width of the "virtual" container
            ...fontSpecs,     // RN font specification
        })
        setFlatHeightsText(newHeights);
    }

    return (
        <View style={styles.containerFlat} >
            {texts.map((text, index) => {
                return <Text key={index} style={{ height: flatHeightsText[index], ...fontSpecs }}>
                    {text}
                </Text>
            })}
            <Button onPress={getFlatHeightsText} title="字符串计算高度"></Button>
            <Text>
                {JSON.stringify(flatHeightsText)}
            </Text>
        </View>
    );
}


const AddMenuMeasureTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const texts = '無論文字是什麽';
    const measureFontSpecs: TSFontSpecs = {
        fontSize: 20,
        fontStyle: 'normal',
    };
    const [measureText, setMeasureText] = useState<{
        width: number,
        height: number,
    }>({
        width: 0,
        height: 0,
    })

    const setMeasure = async () => {
        const newHeights = await RTNTextSize.measure({
            text: texts,      // array of texts to measure, can include symbols
            width: width,            // max-width of the "virtual" container
            lineInfoForLine: 1,
            ...measureFontSpecs,     // RN font specification
        })
        setMeasureText(newHeights);
    }
    return (
        <View style={styles.container} >
            <Text
                style={{
                    width: measureText.width,
                    height: measureText.height,
                    ...fontSpecs
                }}
            >
                {texts}
            </Text>
            <Button onPress={setMeasure} title="文本测量"></Button>
            <Text>
                {JSON.stringify(measureText)}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    containerFlat: {
        justifyContent: 'center',
    },
    containerSpecsFor: {
        justifyContent: 'center',
    },
    containerSpecs: {
        justifyContent: 'center',
    },
    containerFontFamily: {
        justifyContent: 'center',
    },
    containerFamilyName: {
        justifyContent: 'center',
    }
});

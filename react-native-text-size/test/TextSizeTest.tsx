import React, { useState,useEffect } from "react";
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

import RTNTextSize, { TSFontSpecs, TSFontInfo, TSFontForStyle  } from 'react-native-text-size'
const fontSpecs: TSFontSpecs = {
    fontFamily: undefined,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '900',
}
const width = Dimensions.get('window').width * 0.8

export function TextSizeTest(): JSX.Element {
    return (
        <TestSuite name="TextSize">
            <TestCase
                itShould="measure"
                initialState={false}
                arrange={({ setState }) => <AddMenuMeasureTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />
            <TestCase
                itShould="flatHeights"
                initialState={false}
                arrange={({ setState }) => <AddMenuFlatHeightsTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />
            <TestCase
                itShould="specsForTextStyles"
                initialState={false}
                arrange={({ setState }) => <AddMenuspecsForTextStylesTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />

            <TestCase
                itShould="fontFromSpecs"
                initialState={false}
                arrange={({ setState }) => <AddMenuFontFromSpecsTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />
            <TestCase
                itShould="fontFamilyNames"
                initialState={false}
                arrange={({ setState }) => <AddMenuFontFamilyNamesTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />

            <TestCase
                itShould="fontNamesForFamilyName"
                initialState={false}
                arrange={({ setState }) => <AddMenuFontNamesForFamilyNameTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />
        </TestSuite>
    );
}

const AddMenuFontNamesForFamilyNameTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [fontFamilyNamesText, setFontFamilyNamesText] = useState<{ [key: string]: TSFontForStyle }>()

    const getFontFromSpecs = async ()=>{
        console.log(86)
        const specsForText = await RTNTextSize.fontNamesForFamilyName('HarmonyOS Sans TC');
        console.log(87)
        setFontFamilyNamesText(specsForText);
    }

    useEffect(()=>{
        getFontFromSpecs()
    },[])

    return (
        <View style={styles.containerFamilyName} >
            <Text >
            {JSON.stringify(fontFamilyNamesText)}
            </Text>
        </View>
    );
}

const AddMenuFontFamilyNamesTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [fontFamilyNamesText, setFontFamilyNamesText] = useState<{ [key: string]: TSFontForStyle }>()

    const getFontFromSpecs = async ()=>{
        const specsForText = await RTNTextSize.fontFamilyNames();
        console.log(specsForText)
        setFontFamilyNamesText(specsForText);
    }

    useEffect(()=>{
        getFontFromSpecs()
    },[])

    return (
        <View style={styles.containerFontFamily} >
            <Text >
            {JSON.stringify(fontFamilyNamesText)}
            </Text>
        </View>
    );
}

const AddMenuFontFromSpecsTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [specsForText, setSpecsForText] = useState<{ [key: string]: TSFontForStyle }>()

    const getFontFromSpecs = async ()=>{
        const specsForText = await RTNTextSize.fontFromSpecs(fontSpecs);
    
        setSpecsForText(specsForText);
    }

    useEffect(()=>{
        getFontFromSpecs()
    },[])

    return (
        <View style={styles.containerSpecs} >
            <Text >
            {JSON.stringify(specsForText)}
            </Text>
        </View>
    );
}

const AddMenuspecsForTextStylesTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [specsForText, setSpecsForText] = useState<{ [key: string]: TSFontForStyle }>()

    const getSpecsForTextStyles = async ()=>{
        const specsForText = await RTNTextSize.specsForTextStyles()
        setSpecsForText(specsForText);
        
    }

    useEffect(()=>{
        getSpecsForTextStyles()
    },[])

    return (
        <View style={styles.containerSpecsFor} >
            <Text >
            {JSON.stringify(specsForText)}
            </Text>
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

    const getFlatHeightsText = async()=>{
        const newHeights = await RTNTextSize.flatHeights({
            text: texts,      // array of texts to measure, can include symbols
             width: width,            // max-width of the "virtual" container
             ...fontSpecs,     // RN font specification
        })
        setFlatHeightsText(newHeights);
    }

    useEffect(()=>{
        getFlatHeightsText()
    },[])

    return (
        <View style={styles.containerFlat} >
            {texts.map((text, index)=>{
                return <Text key={index} style={{ height: flatHeightsText[index], ...fontSpecs }}>
                {text}
              </Text>
            })}
        </View>
    );
}


const AddMenuMeasureTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const texts = 'I rnTextSize'
    const [measureText, setMeasureText] = useState<{
        width: number,
        height: number,
    }>({
        width: 0,
        height: 0,
    })

    const setMeasure = ()=>{
        const newHeights = RTNTextSize.measure({
            text: texts,      // array of texts to measure, can include symbols
             width: width,            // max-width of the "virtual" container
             ...fontSpecs,     // RN font specification
        })
        setMeasureText(newHeights);
    }

    useEffect(()=>{
        
        setMeasure()
    },[])

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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: 'center',
    },
    containerFlat: {
        height: 180,
        justifyContent: 'center',
    },
    containerSpecsFor:{
        height: 400,
        justifyContent: 'center',
    },
    containerSpecs: {
        height: 100,
        justifyContent: 'center',
    },
    containerFontFamily:{
        height: 1000,
        justifyContent: 'center',
    },
    containerFamilyName:{
        height: 50,
        justifyContent: 'center',
    }
});


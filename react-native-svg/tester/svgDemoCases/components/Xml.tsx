import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SvgAst, SvgFromUri, SvgFromXml, SvgXml, Circle, SvgUri, parse, Svg, AstProps, JsxAST, camelCase, err as svgErr, fetchText } from 'react-native-svg'
import { Tester, Filter, TestCase, TestSuite } from '@rnoh/testerino';
import { genAdditionalProps } from '../genUtil'
interface ItemProps {
    text: string,
    children: React.ReactNode
}

function Item({ text, children }: ItemProps) {
    return (
        <TestCase
            itShould={text}
        >
            {children}
        </TestCase>
    )
}

export default function () {
    const xmlCase = `
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="500px" height="500px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve">
        <circle cx="50%" cy="50%" r="40%" fill="pink" />
        </svg>
    `
    const [xmlText, setXmlText] = useState('')
    useEffect(() => {
        fetchText('https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg').then(res => {
            setXmlText(res)
        }).catch((e) => {
            setXmlText(e)
        })
    }, [])
    
    return (
        <Tester>
            <ScrollView>
                <Item
                    text="test SvgUri"
                >
                    <SvgUri
                        width="150"
                        height="70"
                        uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/notExist.svg"
                        { ...genAdditionalProps('SvgUri') }
                    />
                </Item>
                <Item
                    text="test SvgFromUri"
                >
                    <SvgFromUri
                        width="150"
                        height="70"
                        uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
                        { ...genAdditionalProps('SvgFromUri') }
                    />
                </Item>
                <Item text="test SvgXml">
                    <SvgXml xml={xmlCase} override={{ width: "100", height: "100" }} { ...genAdditionalProps('SvgXml') } />
                </Item>
                <Item text="test parse">
                    <Svg width={60} height={60}>
                        {(parse(xmlCase) as JsxAST).children}
                    </Svg>
                </Item>
                <Item text="test SvgFromXml">
                    <SvgFromXml xml={xmlCase} override={{ width: "90", height: "70" }} { ...genAdditionalProps('SvgFromXml') } />
                </Item>
                <Item text="test SvgAst">
                    <SvgAst ast={parse(xmlCase)} override={{ width: "60", height: "70" }} { ...genAdditionalProps('SvgAst') } />
                </Item>
                <Item text="test camelCase">
                    <View 
                        style={{
                            height: 100
                        }}    
                    >
                    <Text>input: ':test word', result: { camelCase(':test word') }</Text>
                    <Text>input: ':hello world', result: { camelCase(':hello world') }</Text>
                    <Text>input: 'TEST WORD', result: { camelCase('TEST WORD') }</Text>
                    <Text>input: ':TEST WORD', result: { camelCase(':TEST WORD') }</Text>
                    </View>
                </Item>
                <Item text="test err">
                    <View 
                        style={{
                            height: 60
                        }}    
                    >
                    <Text onPress={() => {
                        svgErr('called err func success')
                    }} >press here to call err func</Text>
                    </View>
                </Item>
                <Item text="test fetchText">
                    <View 
                        style={{
                            height: "auto"
                        }}    
                    >
                    <Text>fetchText('https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg') result is:</Text>
                    <Text>{xmlText}</Text>
                    </View>
                </Item>
            </ScrollView>
        </Tester>
    )
}
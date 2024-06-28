import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Tester } from '@rnoh/testerino';
import { Button, TestCase } from '../components';
import { typography, color ,defaultTheme} from 'react-native-material-design-styles';
const typographyStyle = StyleSheet.create(typography);
const colorStyle = StyleSheet.create(color);
const defaultThemeStyle = StyleSheet.create(defaultTheme)
export function MetariDesignColorTest() {
    const styleList = [typographyStyle.paperFontDisplay4]
    const [titleStyle, setTitleStyle] = useState(styleList);
    return (
        <Tester>
            <ScrollView>
                <TestCase.Example itShould="typography paperFontDisplay1">
                    <Text style={titleStyle}>Display4</Text>
                    <Button label='changeStyle' onPress={() => {
                        setTitleStyle([typographyStyle.paperFontDisplay1, colorStyle.paperPink100])
                    }}></Button>
                </TestCase.Example>
                <TestCase.Example itShould="color.paperBlue50.color">
                    <View style={[styles.colorItem, { backgroundColor: color.paperBlue50.color }]}></View>
                </TestCase.Example>
                <TestCase.Example itShould="color.paperBlue700.color">
                    <View style={[styles.colorItem, { backgroundColor: color.paperBlue700.color }]}></View>
                </TestCase.Example>
                <TestCase.Example itShould="color.paperBlueA700.color">
                    <View style={[styles.colorItem, { backgroundColor: color.paperBlueA700.color }]}></View>
                </TestCase.Example>
                <TestCase.Example itShould="defaultTheme.primaryColor.color">
                    <View style={[styles.colorItem, { backgroundColor: defaultTheme.primaryColor.color }]}></View>
                </TestCase.Example>
                <TestCase.Example itShould="defaultTheme.darkThemeBaseColor.color">
                    <View style={[styles.colorItem, { backgroundColor: defaultTheme.darkThemeBaseColor.color }]}></View>
                </TestCase.Example>
                <TestCase.Example itShould="defaultTheme.darkThemeTextColor.color">
                    <View style={[styles.colorItem, { backgroundColor: defaultTheme.darkThemeDisabledColor.color }]}></View>
                </TestCase.Example>
            </ScrollView>
        </Tester>
    )
}
const styles = StyleSheet.create({
    colorItem: {
        height: 50
    }
})
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Tester } from '@rnoh/testerino';
import { Button, TestCase } from '../components';
import { typography, color ,defaultTheme} from 'react-native-material-design-styles';
const typographyStyle = StyleSheet.create(typography);
const colorStyle = StyleSheet.create(color);
export function MetariDesignColorTest() {
    const styleList = [typographyStyle.paperFontDisplay4]
    const [titleStyle, setTitleStyle] = useState(styleList);
    return (
        <Tester>
            <ScrollView>
                <TestCase.Example itShould="paperFontHeadline">
                    <Text style={[typographyStyle.paperFontHeadline, colorStyle.paperTeal500]}>Typography</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontDisplay1">
                    <Text style={titleStyle}>Display4</Text>
                    <Button label='changeStyle' onPress={() => {
                        setTitleStyle([typographyStyle.paperFontDisplay1, colorStyle.paperPink100])
                    }}></Button>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontDisplay3">
                    <Text style={typographyStyle.paperFontDisplay3}>Display3</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontDisplay2">
                    <Text style={typographyStyle.paperFontDisplay2}>Display2</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontTitle">
                    <Text style={typographyStyle.paperFontTitle}>Title</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontSubhead">
                    <Text style={typographyStyle.paperFontSubhead}>Subhead</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontBody2">
                    <Text style={typographyStyle.paperFontBody2}>Body2</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontBody1">
                    <Text style={typographyStyle.paperFontBody1}>Body1</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontCaption">
                    <Text style={typographyStyle.paperFontCaption}>Caption</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontButton">
                    <Text style={typographyStyle.paperFontButton}>Button</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontCode2">
                    <Text style={typographyStyle.paperFontCode2}>Code2</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontCode1">
                    <Text style={typographyStyle.paperFontCode1}>Code1</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperTeal500">
                    <Text style={[typographyStyle.paperFontHeadline, typographyStyle.paperTeal500]}>Text Color</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontTitle paperPink50">
                    <Text style={[typographyStyle.paperFontTitle, typographyStyle.paperPink50]}>paperPink50</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperPink50">
                    <Text style={colorStyle.paperPink50}>paperPink5000000</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperPink200">
                    <Text style={typographyStyle.paperPink200}>paperPink200</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontTitle paperPink100">
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink100]}>paperPink100</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontTitle paperPink200">
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink200]}>paperPink200</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontTitle paperPink300">
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink300]}>paperPink300</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontTitle paperPink400">
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink400]}>paperPink400</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontTitle paperPink500">
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink500]}>paperPink500</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontTitle paperPink600">
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink600]}>paperPink600</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontTitle paperPink700">
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink700]}>paperPink700</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontTitle paperPink800">
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink800]}>paperPink800</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontTitle paperPink900">
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink900]}>paperPink900</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontTitle paperPinkA100">
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPinkA100]}>paperPinkA100</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontTitle paperPinkA200">
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPinkA200]}>paperPinkA200</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontTitle paperPinkA400">
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPinkA400]}>paperPinkA400</Text>
                </TestCase.Example>
                <TestCase.Example itShould="paperFontTitle paperPinkA700">
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPinkA700]}>paperPinkA700</Text>
                </TestCase.Example>
                <TestCase.Example itShould="color.paperBlue50.color">
                    <View style={[styles.colorItem, { backgroundColor: color.paperBlue50.color }]}></View>
                </TestCase.Example>
                <TestCase.Example itShould="color.paperBlue100.color">
                    <View style={[styles.colorItem, { backgroundColor: color.paperBlue100.color }]}></View>
                </TestCase.Example>
                <TestCase.Example itShould="color.paperBlue200.color">
                    <View style={[styles.colorItem, { backgroundColor: color.paperBlue200.color }]}></View>
                </TestCase.Example>
                <TestCase.Example itShould="color.paperBlue300.color">
                    <View style={[styles.colorItem, { backgroundColor: color.paperBlue300.color }]}></View>
                </TestCase.Example>
                <TestCase.Example itShould="color.paperBlue400.color">
                    <View style={[styles.colorItem, { backgroundColor: color.paperBlue400.color }]}></View>
                </TestCase.Example>
                <TestCase.Example itShould="color.paperBlue500.color">
                    <View style={[styles.colorItem, { backgroundColor: color.paperBlue500.color }]}></View>
                </TestCase.Example>
                <TestCase.Example itShould="color.paperBlue600.color">
                    <View style={[styles.colorItem, { backgroundColor: color.paperBlue600.color }]}></View>
                </TestCase.Example>
                <TestCase.Example itShould="color.paperBlue700.color">
                    <View style={[styles.colorItem, { backgroundColor: color.paperBlue700.color }]}></View>
                </TestCase.Example>
                <TestCase.Example itShould="color.paperBlue800.color">
                    <View style={[styles.colorItem, { backgroundColor: color.paperBlue800.color }]}></View>
                </TestCase.Example>
                <TestCase.Example itShould="color.paperBlue900.color">
                    <View style={[styles.colorItem, { backgroundColor: color.paperBlue900.color }]}></View>
                </TestCase.Example>
                <TestCase.Example itShould="color.paperBlueA200.color">
                    <View style={[styles.colorItem, { backgroundColor: color.paperBlueA200.color }]}></View>
                </TestCase.Example>
                <TestCase.Example itShould="color.paperBlueA400.color">
                    <View style={[styles.colorItem, { backgroundColor: color.paperBlueA400.color }]}></View>
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
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet ,Button} from 'react-native';
import { Tester ,TestCase} from '@rnoh/testerino';
import { typography, color ,defaultTheme} from 'react-native-material-design-styles';
const typographyStyle = StyleSheet.create(typography);
const colorStyle = StyleSheet.create(color);
export function MetariDesignColorTest() {
    const styleList = [typographyStyle.paperFontDisplay4]
    const [titleStyle, setTitleStyle] = useState(styleList);
    return (
        <Tester>
            <ScrollView>
                <TestCase itShould="typography paperFontDisplay1">
                    <Text style={titleStyle}>Display4</Text>
                    <Button title='changeStyle' onPress={() => {
                        setTitleStyle([typographyStyle.paperFontDisplay1, colorStyle.paperPink100])
                    }}></Button>
                </TestCase>
                <TestCase itShould="color.paperBlue50.color">
                    <View style={[styles.colorItem, { backgroundColor: color.paperBlue50.color }]}></View>
                </TestCase>
                <TestCase itShould="color.paperBlue700.color">
                    <View style={[styles.colorItem, { backgroundColor: color.paperBlue700.color }]}></View>
                </TestCase>
                <TestCase itShould="color.paperBlueA700.color">
                    <View style={[styles.colorItem, { backgroundColor: color.paperBlueA700.color }]}></View>
                </TestCase>
                <TestCase itShould="defaultTheme.primaryColor.color">
                    <View style={[styles.colorItem, { backgroundColor: defaultTheme.primaryColor.color }]}></View>
                </TestCase>
                <TestCase itShould="defaultTheme.darkThemeBaseColor.color">
                    <View style={[styles.colorItem, { backgroundColor: defaultTheme.darkThemeBaseColor.color }]}></View>
                </TestCase>
                <TestCase itShould="defaultTheme.darkThemeTextColor.color">
                    <View style={[styles.colorItem, { backgroundColor: defaultTheme.darkThemeDisabledColor.color }]}></View>
                </TestCase>
            </ScrollView>
        </Tester>
    )
}
const styles = StyleSheet.create({
    colorItem: {
        height: 50
    }
})

import React, {useState} from 'react';
import { ScrollView, StyleSheet, View, Text ,Button} from 'react-native';
import { typography, color } from 'react-native-material-design-styles';

const typographyStyle = StyleSheet.create(typography);
const colorStyle = StyleSheet.create(color);
export function MetailDesignColor() {
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView>
                <Text style={[typographyStyle.paperFontHeadline, colorStyle.paperTeal500]}>Typography</Text>
                <Text style={[typographyStyle.paperFontDisplay4]}>Display4</Text>
                <Text style={typographyStyle.paperFontDisplay3}>Display3</Text>
                <Text style={typographyStyle.paperFontDisplay2}>Display2</Text>
                <Text style={typographyStyle.paperFontDisplay1}>Display1</Text>
                <Text style={typographyStyle.paperFontHeadline}>Headline</Text>
                <Text style={typographyStyle.paperFontTitle}>Title</Text>
                <Text style={typographyStyle.paperFontSubhead}>Subhead</Text>
                <Text style={typographyStyle.paperFontBody2}>Body2</Text>
                <Text style={typographyStyle.paperFontBody1}>Body1</Text>
                <Text style={typographyStyle.paperFontCaption}>Caption</Text>
                <Text style={typographyStyle.paperFontButton}>Button</Text>
                <Text style={typographyStyle.paperFontCode2}>Code2</Text>
                <Text style={typographyStyle.paperFontCode1}>Code1</Text>
                <Text style={[typographyStyle.paperFontHeadline, typographyStyle.paperTeal500]}>Text Color</Text>
                <Text style={[typographyStyle.paperFontTitle, typographyStyle.paperPink500]}>paperPink500</Text>
                <Text style={[typographyStyle.paperFontTitle, typographyStyle.paperPink50]}>paperPink50</Text>
                <Text style={colorStyle.paperPink50}>paperPink5000000</Text>
                <Text style={typographyStyle.paperPink200}>paperPink200</Text>
                <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink100]}>paperPink100</Text>
                <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink200]}>paperPink200</Text>
                <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink300]}>paperPink300</Text>
                <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink400]}>paperPink400</Text>
                <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink500]}>paperPink500</Text>
                <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink600]}>paperPink600</Text>
                <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink700]}>paperPink700</Text>
                <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink800]}>paperPink800</Text>
                <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink900]}>paperPink900</Text>
                <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPinkA100]}>paperPinkA100</Text>
                <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPinkA200]}>paperPinkA200</Text>
                <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPinkA400]}>paperPinkA400</Text>
                <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPinkA700]}>paperPinkA700</Text>
                <View style={[styles.colorItem, { backgroundColor: color.paperBlue500.color }]}></View>
                <View style={[styles.colorItem, { backgroundColor: color.paperBlue50.color }]}></View>
                <View style={[styles.colorItem, { backgroundColor: color.paperBlue100.color }]}></View>
                <View style={[styles.colorItem, { backgroundColor: color.paperBlue200.color }]}></View>
                <View style={[styles.colorItem, { backgroundColor: color.paperBlue300.color }]}></View>
                <View style={[styles.colorItem, { backgroundColor: color.paperBlue400.color }]}></View>
                <View style={[styles.colorItem, { backgroundColor: color.paperBlue500.color }]}></View>
                <View style={[styles.colorItem, { backgroundColor: color.paperBlue600.color }]}></View>
                <View style={[styles.colorItem, { backgroundColor: color.paperBlue700.color }]}></View>
                <View style={[styles.colorItem, { backgroundColor: color.paperBlue800.color }]}></View>
                <View style={[styles.colorItem, { backgroundColor: color.paperBlue900.color }]}></View>
                <View style={[styles.colorItem, { backgroundColor: color.paperBlueA200.color }]}></View>
                <View style={[styles.colorItem, { backgroundColor: color.paperBlueA400.color }]}></View>
                <View style={[styles.colorItem, { backgroundColor: color.paperBlueA700.color }]}></View>
            </ScrollView>

        </View>


    )

}



const styles = StyleSheet.create({
    colorItem: {
        height: 50
    }
})

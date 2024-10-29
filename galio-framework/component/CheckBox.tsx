import { Checkbox } from 'galio-framework';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';

const CheckBoxDemo = () => {
    const [result, setReault] = useState('')
    const onChange = () => {
        setReault('success')
    }
    const CheckBoxProps = [
        { disabled: true },
        { disabled: false },
        { checkboxStyle: styles.checkboxStyle },
        { checkboxStyle: styles.checkboxStyle1 },
        { flexDirection: 'row' },
        { flexDirection: 'row-reverse' },
        { flexDirection: 'column', label: "Checkbox" },
        { flexDirection: 'column-reverse', label: "Checkbox" },
        { iconFamily: "zocial", iconName: "drupal", iconColor: "blue", initialValue: true, label: 'zocial' },
        { iconFamily: "zocial", iconName: "eventasaurus", iconColor: "blue", initialValue: true, label: 'zocial' },
        { iconFamily: "octicon", iconName: "telescope", iconColor: "blue", initialValue: true, label: 'octicon' },
        { iconFamily: "octicon", iconName: "tools", iconColor: "blue", initialValue: true, label: 'octicon' },
        { iconFamily: "material", iconName: "hexagon", iconColor: "blue", initialValue: true, label: 'material' },
        { iconFamily: "material", iconName: "hive", iconColor: "blue", initialValue: true, label: 'material' },
        { iconFamily: "material-community", iconName: "biohazard", iconColor: "blue", initialValue: true, label: 'material-community' },
        { iconFamily: "material-community", iconName: "bird", iconColor: "blue", initialValue: true, label: 'material-community' },
        { iconFamily: "ionicon", iconName: "egg", iconColor: "blue", initialValue: true, label: 'ionicon' },
        { iconFamily: "ionicon", iconName: "flask", iconColor: "blue", initialValue: true, label: 'ionicon' },
        { iconFamily: "foundation", iconName: "record", iconColor: "blue", initialValue: true, label: 'foundation' },
        { iconFamily: "foundation", iconName: "sheriff-badge", iconColor: "blue", initialValue: true, label: 'foundation' },
        { iconFamily: "evilicons", iconName: "star", iconColor: "blue", initialValue: true, label: 'evilicons' },
        { iconFamily: "evilicons", iconName: "pencil", iconColor: "blue", initialValue: true, label: 'evilicons' },
        { iconFamily: "font-awesome-5", iconName: "bomb", iconColor: "blue", initialValue: true, label: 'font-awesome-5' },
        { iconFamily: "font-awesome-5", iconName: "burn", iconColor: "blue", initialValue: true, label: 'font-awesome-5' },
        { iconFamily: "simple-line-icon", iconName: "social-reddit", iconColor: "blue", initialValue: true, label: 'simple-line-icon' },
        { iconFamily: "simple-line-icon", iconName: "social-pinterest", iconColor: "blue", initialValue: true, label: 'simple-line-icon' },
        { iconFamily: "feather", iconName: "pocket", iconColor: "blue", initialValue: true, label: 'feather' },
        { iconFamily: "feather", iconName: "settings", iconColor: "blue", initialValue: true, label: 'feather' },
        { iconFamily: "antdesign", iconName: "barcode", iconColor: "blue", initialValue: true, label: 'antdesign' },
        { iconFamily: "antdesign", iconName: "aliwangwang", iconColor: "blue", initialValue: true, label: 'antdesign' },
        { iconFamily: "font-awesome", iconName: "plane", iconColor: "blue", initialValue: true, label: 'font-awesome' },
        { iconFamily: "font-awesome", iconName: "truck", iconColor: "blue", initialValue: true, label: 'font-awesome' },
        { iconFamily: "Entypo", iconName: "aircraft", iconColor: "green", initialValue: true, label: 'Entypo' },
        { iconFamily: "Entypo", iconName: "flashlight", iconColor: "green", initialValue: true, label: 'Entypo' },
        { iconFamily: "font-awesome", iconName: "plane", iconColor: "blue", iconSize: 25 },
        { iconFamily: "Entypo", iconName: "aircraft", iconColor: "green", iconSize: 20 },
        { image: "https://avatars.githubusercontent.com/u/155599655?v=4&size=64" },
        { image: "https://github.githubassets.com/assets/gh-desktop-7c9388a38509.png" },
        { image: "https://github.githubassets.com/assets/gh-desktop-7c9388a38509.png", imageStyle: { width: 50, height: 50, backgroundColor: 'pink' } },
        { image: "https://github.githubassets.com/assets/gh-desktop-7c9388a38509.png", imageStyle: { width: 100, height: 100, backgroundColor: 'purple' } },
        { initialValue: true },
        { initialValue: false },
        { label: "row checkbox" },
        { label: 'label' },
        { labelStyle: { fontSize: 18, color: 'red' }, label: "row checkbox" },
        { labelStyle: { fontSize: 24, color: 'blue' }, label: 'label' },
    ]
    return (
        <ScrollView style={{ backgroundColor: "#fff" }} stickyHeaderIndices={[0]}>
            <View style={styles.inputArea}>
                <Text style={styles.baseText}>
                    {result}
                </Text>
            </View>
            <Tester>
                {CheckBoxProps.map((item) => {
                    return (
                        <TestCase itShould={JSON.stringify(item)} tags={['C_API']} key={JSON.stringify(item)}>
                            <View style={{
                                height: "auto",
                                display: 'flex',
                            }}>
                                <Checkbox {...item}></Checkbox>
                            </View>
                        </TestCase>
                    )
                })
                }

                <TestCase itShould={'onchange:当勾选时触发的事件'} tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Checkbox onChange={onChange}></Checkbox>
                    </View>
                </TestCase>
            </Tester>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    accordion: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        overflow: 'hidden',
    },
    listStyle: {
        borderTopWidth: 10,
        borderTopColor: 'red',
    },
    headerStyle: {
        backgroundColor: '#5E72E4',
        padding: 10,
    },
    contentStyle: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontWeight: 'bold'
    },
    inputArea: {
        width: '100%',
        height: 'auto',
        borderColor: '#000000',
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        marginBottom: 20
    },
    baseText: {
        width: '100%',
        height: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    checkboxStyle: {
        borderColor: 'black',
        width: 50,
        height: 50,
        borderWidth: 5
    },
    checkboxStyle1: {
        borderColor: 'blue',
        width: 40,
        height: 40,
        borderWidth: 3
    },
    imageStyle: {
        backgroundColor: "red"
    },
    labelStyle: {
        color: 'red'
    },
});

export default CheckBoxDemo
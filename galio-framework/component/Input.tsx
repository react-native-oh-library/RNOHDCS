import { TestCase, Tester } from '@rnoh/testerino';
import { Input, theme } from 'galio-framework';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const InputDemo = () => {
    const InputProps = [
        { type: 'default' },
        { type: 'number-pad' },
        { type: 'decimal-pad' },
        { type: 'numeric' },
        { type: 'email-address' },
        { type: 'phone-pad' },
        { password: true },
        { password: false },
        { placeholder: "info", placeholderTextColor: 'red' },
        { placeholder: "success", placeholderTextColor: 'blue' },
        { label: 'label' },
        { bgColor: 'pink' },
        { bgColor: 'blue' },
        { rounded: true },
        { rounded: false },
        { borderless: true },
        { borderless: false },
        { viewPass: true, password: true },
        { viewPass: false, password: true },
        { color: 'red' },
        { color: 'blue' },
        { help: "Bottom help text" },
        { left: true, icon: "heart", family: "AntDesign" },
        { left: false, icon: "frown", family: "AntDesign" },
        { right: true, icon: "heart", family: "AntDesign" },
        { right: false, icon: "frown", family: "AntDesign" },
        { icon: "frown", family: "AntDesign" },
        { icon: "meho", family: "AntDesign" },
        { icon: "cpu", family: "feather" },
        { icon: "feather", family: "feather" },
        { icon: "social-instagram", family: "simple-line-icon" },
        { icon: "link", family: "simple-line-icon" },
        { icon: "broom", family: "font-awesome-5" },
        { icon: "carrot", family: "font-awesome-5" },
        { icon: "certificate", family: "font-awesome" },
        { icon: "github-alt", family: "font-awesome" },
        { icon: "mixi", family: "entypo" },
        { icon: "pin", family: "entypo" },
        { icon: "redo", family: "evilicons" },
        { icon: "retweet", family: "evilicons" },
        { icon: "x", family: "foundation" },
        { icon: "yen", family: "foundation" },
        { icon: "fish", family: "ionicon" },
        { icon: "headset", family: "ionicon" },
        { icon: "beaker", family: "material-community" },
        { icon: "beach", family: "material-community" },
        { icon: "air", family: "material" },
        { icon: "adjust", family: "material" },
        { icon: "hubot", family: "octicon" },
        { icon: "hourglass", family: "octicon" },
        { icon: "plancast", family: "zocial" },
        { icon: "yahoo", family: "zocial" },
        { icon: "frown", family: "AntDesign", iconColor: 'red' },
        { icon: "meho", family: "AntDesign", iconColor: 'blue' },
        { icon: "app-store", family: "Entypo", iconColor: 'blue' },
        { icon: "bowl", family: "Entypo", iconColor: 'skyblue' },
        { icon: "bowl", family: "Entypo", iconColor: 'pink' }
    ]
    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            {
                <Tester>
                    {
                        InputProps.map((item) => {
                            return (
                                <TestCase itShould={JSON.stringify(item)} tags={['C_API']} key={JSON.stringify(item)}>
                                    <View style={{
                                        height: 'auto',
                                        display: 'flex',
                                    }}>
                                        <Input {...item}></Input>
                                    </View>
                                </TestCase>
                            )
                        })
                    }
                    <TestCase itShould='bottomHelp: true'>
                        <Input
                            placeholder="Input with custom styling and help"
                            help="Bottom help text"
                            bottomHelp={true}
                        />
                    </TestCase>
                    <TestCase itShould='bottomHelp: false'>
                        <View style={{ height: 150 }}>
                            <Input
                                placeholder="Input with custom styling and help"
                                help="Bottom help text"
                                bottomHelp={false}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould='topHelp: true'>
                        <View style={{ height: 300 }}>
                            <Input
                                placeholder="Input with custom styling and help"
                                help="Bottom help text"
                                topHelp={true}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould='topHelp: false'>
                        <View style={{ height: 400 }}>
                            <Input
                                placeholder="Input with custom styling and help"
                                help="Bottom help text"
                                topHelp={false}
                            />
                        </View>
                    </TestCase>
                </Tester>
            }
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: theme.COLORS?.FACEBOOK
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
        height: 100,
        borderWidth: 2,
        borderColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        marginBottom: 20
    },
    baseText: {
        width: '100%',
        height: "auto",
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    checkboxStyle: {
        color: 'pink'
    },
    imageStyle: {
        backgroundColor: "red"
    },
    labelStyle: {
        color: 'red'
    },
    focusedCard: {
        transform: [{ scale: 0.5 }],
    },
    nextCard: {
        transform: [{ scale: 1.4 }],
    },
});
export default InputDemo
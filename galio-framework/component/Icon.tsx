import { TestCase, Tester } from '@rnoh/testerino';
import { Icon } from 'galio-framework';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';



const IconDemo = () => {
    const IconFontAwesome = [
        { name: "glass", family: "font-awesome", color: "pink", size: 30 },
    ]
    const IconFontAwesome1 = [
        { name: "music", family: "font-awesome", color: "blue", size: 40 },
    ]
    const IconAntDesign = [
        { name: "frown", family: "antdesign", color: "pink", size: 30 },
    ]
    const IconAntDesign1 = [
        { name: "meho", family: "antdesign", color: "blue", size: 40 },
    ]
    const IconEntypo = [
        { name: "app-store", family: "entypo", color: "pink", size: 30 },
    ]
    const IconEntypo1 = [
        { name: "bug", family: "entypo", color: "blue", size: 40 },
    ]
    const IconEvilIcons = [
        { name: "sc-github", family: "evilicons", color: "pink", size: 30 },
    ]
    const IconEvilIcons1 = [
        { name: "sc-google-plus", family: "evilicons", color: "blue", size: 40 },
    ]
    const IconFeather = [
        { name: "coffee", family: "feather", color: "pink", size: 30 },
    ]
    const IconFeather1 = [
        { name: "github", family: "feather", color: "blue", size: 40 },
    ]
    const IconFontAwesome5 = [
        { name: "atom", family: "font-awesome-5", color: "pink", size: 30 },
    ]
    const IconFontAwesome5s = [
        { name: "angry", family: "font-awesome-5", color: "blue", size: 40 },
    ]
    const IconSimpleLineIcons = [
        { name: "drop", family: "SimpleLineIcons", color: "pink", size: 30 },
    ]
    const IconSimpleLineIcons1 = [
        { name: "diamond", family: "SimpleLineIcons", color: "blue", size: 40 },
    ]
    const IconFoundation = [
        { name: "camera", family: "foundation", color: "pink", size: 30 },
    ]
    const IconFoundation1 = [
        { name: "cloud", family: "foundation", color: "blue", size: 40 },
    ]
    const IconIonicons = [
        { name: "airplane", family: "ionicon", color: "pink", size: 30 },
    ]
    const IconIonicons1 = [
        { name: "battery-full", family: "ionicon", color: "blue", size: 40 },
    ]
    const IconMaterialCommunityIcons = [
        { name: "alarm", family: "material-community", color: "pink", size: 30 },
    ]
    const IconMaterialCommunityIcons1 = [
        { name: "album", family: "material-community", color: "blue", size: 40 },
    ]
    const IconMaterialIcons = [
        { name: "3k", family: "material", color: "pink", size: 30 },
    ]
    const IconMaterialIcons1 = [
        { name: "360", family: "material", color: "blue", size: 40 },
    ]
    const IconOcticons = [
        { name: "bell", family: "octicon", color: "pink", size: 30 },
    ]
    const IconOcticons1 = [
        { name: "bell-fill", family: "octicon", color: "blue", size: 40 },
    ]
    const IconZocial = [
        { name: "android", family: "zocial", color: "pink", size: 30 },
    ]
    const IconZocial1 = [
        { name: "appstore", family: "zocial", color: "blue", size: 40 },
    ]
    return (
        <ScrollView style={{ backgroundColor: "#fff" }}>
            <Tester>
                <TestCase itShould={JSON.stringify(IconFontAwesome)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="glass" family="font-awesome" color="pink" size={30} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconFontAwesome1)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="music" family="font-awesome" color="blue" size={40} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconAntDesign)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="frown" family="antdesign" color="pink" size={30} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconAntDesign1)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="meho" family="antdesign" color="blue" size={40} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconEntypo)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="app-store" family="entypo" color="pink" size={30} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconEntypo1)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="bug" family="entypo" color="blue" size={40} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconEvilIcons)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="sc-github" family="evilicons" color="pink" size={30} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconEvilIcons1)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="sc-google-plus" family="evilicons" color="blue" size={40} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconFeather)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="coffee" family="feather" color="pink" size={30} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconFeather1)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="github" family="feather" color="blue" size={40} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconFontAwesome5)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="atom" family="font-awesome-5" color="pink" size={30} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconFontAwesome5s)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="angry" family="font-awesome-5" color="blue" size={40} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconSimpleLineIcons)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="drop" family="simple-line-icon" color="pink" size={30} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconSimpleLineIcons1)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="diamond" family="simple-line-icon" color="blue" size={40} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconFoundation)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="camera" family="foundation" color="pink" size={30} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconFoundation1)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="cloud" family="foundation" color="blue" size={40} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconIonicons)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="airplane" family="ionicon" color="pink" size={30} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconIonicons1)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="battery-full" family="ionicon" color="blue" size={40} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconMaterialCommunityIcons)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="alarm" family="material-community" color="pink" size={30} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconMaterialCommunityIcons1)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="album" family="material-community" color="blue" size={40} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconMaterialIcons)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="3k" family="material" color="pink" size={30} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconMaterialIcons1)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="360" family="material" color="blue" size={40} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconOcticons)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="bell" family="octicon" color="pink" size={30} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconOcticons1)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="bell-fill" family="octicon" color="blue" size={40} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconZocial)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="android" family="zocial" color="pink" size={30} ></Icon>
                    </View>
                </TestCase>
                <TestCase itShould={JSON.stringify(IconZocial1)} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon name="appstore" family="zocial" color="blue" size={40} ></Icon>
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
export default IconDemo
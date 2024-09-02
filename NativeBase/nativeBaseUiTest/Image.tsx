import  { useEffect, useState } from 'react';
import { Button, View, StyleSheet, ScrollView, Text, TextInput } from 'react-native';
import { Box, Center, Image, VStack } from 'native-base';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
export function ImageTest() {

    return <>

        <Tester>
            <ScrollView style={styles.content}>
                <TestSuite name='source'>
                    <TestCase
                        itShould="source"
                        tags={['dev']}
                    >
                        <Center>
                            <Image source={{
                                uri: "https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI.png"
                            }} alt="Alternate Text" size="xl" />
                        </Center>;
                    </TestCase>
                </TestSuite>
                <TestSuite name='src'>
                    <TestCase
                        itShould="src"
                        tags={['dev']}
                    >
                        <Center>
                            <Image src='https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI.png' alt="Alternate Text" size="xl" />
                        </Center>;
                    </TestCase>
                </TestSuite>
                <TestSuite name='alt， _alt'>
                    <TestCase
                        itShould="alt， _alt"
                        tags={['dev']}
                    >
                        <Center>
                            <Image source={{
                                uri: "https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI.png"
                            }} alt="Alternate Text" size="xl" />
                            <Image source={{
                                uri: "https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI.png"
                            }} alt="Alternate Text" _alt={{ color: 'red', fontSize: '20' }} size="xl" />
                        </Center>
                    </TestCase>
                </TestSuite>
                <TestSuite name='size'>
                    <TestCase
                        itShould="size"
                        tags={['dev']}
                    >
                        <VStack space={2} justifyContent="center" alignItems="center" safeAreaTop // my={6}
                            mb={6}>
                            {["xs", "sm", "md", "lg", "xl", "2xl"].map(size => <Image key={size} size={size} resizeMode="cover" source={{
                                uri: "https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI.png"
                            }} alt={"Alternate Text " + size} />)}
                        </VStack>
                    </TestCase>
                </TestSuite>
                <TestSuite name='fallbackSource'>
                    <TestCase
                        itShould="fallbackSource"
                        tags={['dev']}
                    >
                        <Center>
                            <Image size={150} alt="fallback text" borderRadius={100} source={{
                                uri: "https://-page-icon.png"
                            }} fallbackSource={{
                                uri: "https://www.w3schools.com/css/img_lights.jpg"
                            }} />
                        </Center>
                    </TestCase>
                </TestSuite>

                <TestSuite name='ignoreFallback'>
                    <TestCase
                        itShould="ignoreFallback"
                        tags={['dev']}
                    >
                        <Center>
                            <Image size={150} ignoreFallback={true} alt="fallback text" borderRadius={100} source={{
                                uri: "https://-page-icon.png"
                            }} fallbackSource={{
                                uri: "https://www.w3schools.com/css/img_lights.jpg"
                            }} />
                            <Image size={150} ignoreFallback={false} alt="fallback text" borderRadius={100} source={{
                                uri: "https://-page-icon.png"
                            }} fallbackSource={{
                                uri: "https://www.w3schools.com/css/img_lights.jpg"
                            }} />
                        </Center>
                    </TestCase>
                </TestSuite>
                <TestSuite name='fallbackElement'>
                    <TestCase
                        itShould="fallbackElement"
                        tags={['dev']}
                    >
                        <Center>
                            <Image size={150} fallbackElement={<Text>fallbackElement</Text>} alt="fallback text" borderRadius={100} source={{
                                uri: "https://-page-icon.png"
                            }} fallbackSource={{
                                uri: "https://www.w3schools.com/css/img_lights.jpg"
                            }} />
                        </Center>
                    </TestCase>
                </TestSuite>
                <TestSuite name=''>
                    <TestCase
                        itShould=''
                        initialState={false}
                        tags={['dev']}
                        arrange={({ setState }) => {
                            return (
                                <View style={styles.section}>

                                </View>
                            )
                        }}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true
                        }}
                    />
                </TestSuite>
            </ScrollView>
        </Tester>

    </>

}
const styles = StyleSheet.create({
    btn: {
        width: 60,
        height: 60,
        aspectRatio: 1,
    },
    content: {
        width: '100%',
        height: '100%',
    },
    section: {
        backgroundColor: '#f2f2f2'
    },
    box: {
        height: 100,
        width: 200,
    },
    tipText: {
        fontSize: 12,
        color: '#999',
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        padding: 10,
        color: '#fff'
    },
    colText: {
        padding: 5,
    },
    col: {
        backgroundColor: '#FFB6C1'
    },
    row: {
        backgroundColor: '#00BFFF'
    },

});
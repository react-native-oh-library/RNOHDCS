import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Block, Button, Card } from 'galio-framework';
import { TestCase, Tester } from '@rnoh/testerino';



const BlockDemo = () => {
    const BlockProps = [
        {
            key: "bottom: alignItems: 'flex-end' is true",
            value: true
        },
        {
            key: "bottom: alignItems: 'flex-end' is false",
            value: false
        },
        {
            key: "card: true",
            value: true
        },
        {
            key: "card: false",
            value: false
        },
        {
            key: "height: 100",
            value: 100
        },
        {
            key: "height: 120",
            value: 120
        },
        {
            key: "left: true",
            value: true
        },
        {
            key: "left: false",
            value: false
        },
    ]
    return (
        <ScrollView>
            <Tester>
                {
                    BlockProps.map((item: any) => {
                        return (
                            <TestCase itShould={item.key} tags={['C_API']} key={item.key}>
                                <View style={{
                                    display: 'flex',
                                }}>
                                    <Block
                                        bottom={item.value}
                                        card={item.value}
                                        height={item.value}
                                        left={item.value}
                                    >
                                        <Button color="danger" ><Text style={{ color: 'black' }}>111111</Text></Button>
                                    </Block>
                                </View>
                            </TestCase>
                        )
                    })
                }
                <TestCase itShould="middle:设置middle样式为true" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Block
                            middle={true}
                        >
                            <Button color="danger" ><Text style={{ color: 'black' }}>111111</Text></Button>
                        </Block>
                    </View>
                </TestCase>
                <TestCase itShould="middle:设置middle样式为false" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Block
                            middle={false}
                        >
                            <Button color="danger" ><Text style={{ color: 'black' }}>111111</Text></Button>
                        </Block>
                    </View>
                </TestCase>
                <TestCase itShould="right:设置right样式为true" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Block
                            right={true}
                        >
                            <Button color="danger" ><Text style={{ color: 'black' }}>111111</Text></Button>
                        </Block>
                    </View>
                </TestCase>
                <TestCase itShould="right:设置right样式为false" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Block
                            right={false}
                        >
                            <Button color="danger" ><Text style={{ color: 'black' }}>111111</Text></Button>
                        </Block>
                    </View>
                </TestCase>
                <TestCase itShould="fluid:设置fluid样式为true" tags={['C_API']} >
                    <View>
                        <Block
                            fluid={true}
                            style={{ backgroundColor: 'blue' }}
                        >
                            <Text>111111111111111111111</Text>
                            <Text>111111111111111111111</Text>
                            <Text>111111111111111111111</Text>
                        </Block>
                    </View>
                </TestCase>
                <TestCase itShould="fluid:设置fluid样式为false" tags={['C_API']} >
                    <View>
                        <Block
                            fluid={false}
                            style={{ alignSelf: 'flex-start', backgroundColor: 'pink' }}
                        >
                            <Text>111111111111111111111111</Text>
                            <Text>111111111111111111111111</Text>
                            <Text>111111111111111111111111</Text>
                        </Block>
                    </View>
                </TestCase>
                <TestCase itShould="center:true" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Block
                            center={true}
                        >
                            <Button color="danger" ><Text style={{ color: 'black' }}>111111</Text></Button>
                        </Block>
                    </View>
                </TestCase>
                <TestCase itShould="center:false" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Block
                            center={false}
                        >
                            <Button color="danger" ><Text style={{ color: 'black' }}>111111</Text></Button>
                        </Block>
                    </View>
                </TestCase>
                <TestCase itShould="flex:false" tags={['C_API']} >
                    <View style={{ flex: 1, height: 150 }}>
                        <Block flex={false} backgroundColor="green">
                            <Text>12312</Text>
                            <Text>2222</Text>
                        </Block>
                        <Block flex={false} backgroundColor="blue">
                            <Text>aaaa</Text>
                            <Text>bbb</Text>
                        </Block>
                    </View>
                </TestCase>
                <TestCase itShould="flex:true" tags={['C_API']} >
                    <View style={{ flex: 1, height: 150 }}>
                        <Block flex={true} backgroundColor="green">
                            <Text>12312</Text>
                            <Text>2222</Text>
                        </Block>
                        <Block flex={true} backgroundColor="blue">
                            <Text>aaaa</Text>
                            <Text>bbb</Text>
                        </Block>
                    </View>
                </TestCase>
                <TestCase itShould="row:flexDirection: 'row' is true" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Block
                            row={true}
                        >
                            <Button color="danger" ><Text style={{ color: 'black' }}>111111</Text></Button>
                            <Button color="danger" ><Text style={{ color: 'black' }}>111111</Text></Button>
                        </Block>
                    </View>
                </TestCase>
                <TestCase itShould="row:flexDirection: 'row' is false" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Block
                            row={false}
                        >
                            <Button color="danger" ><Text style={{ color: 'black' }}>111111</Text></Button>
                            <Button color="danger" ><Text style={{ color: 'black' }}>111111</Text></Button>
                        </Block>
                    </View>
                </TestCase>
                <TestCase itShould="safe:是否使用SafeAreaView组件包裹--true" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Block
                            safe={false}
                        >
                            <Button color="danger" ><Text style={{ color: 'black' }}>111111</Text></Button>
                            <Button color="danger" ><Text style={{ color: 'black' }}>111111</Text></Button>
                        </Block>

                    </View>
                </TestCase>
                <TestCase itShould="safe:是否使用SafeAreaView组件包裹--false" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Block
                            safe={false}
                        >
                            <Button color="danger" ><Text style={{ color: 'black' }}>111111</Text></Button>
                            <Button color="danger" ><Text style={{ color: 'black' }}>111111</Text></Button>
                        </Block>
                    </View>
                </TestCase>
                <TestCase itShould="shadow:是否添加阴影--true" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Block
                            shadow={true}
                        >
                            <Button color="danger" ><Text style={{ color: 'black' }}>111111</Text></Button>
                        </Block>
                    </View>
                </TestCase>
                <TestCase itShould="shadow:是否添加阴影--false" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Block
                            shadow={false}
                        >
                            <Button color="danger" ><Text style={{ color: 'black' }}>111111</Text></Button>
                        </Block>
                    </View>
                </TestCase>
                <TestCase itShould="shadowColor:阴影颜色--red(红色)" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Block
                            shadow={true}
                            shadowColor={'red'}
                        >
                            <Button><Text style={{ color: 'black' }}>111111</Text></Button>
                        </Block>
                    </View>
                </TestCase>
                <TestCase itShould="shadowColor:阴影颜色--blue(蓝色)" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Block
                            shadow={true}
                            shadowColor={'blue'}
                        >
                            <Button><Text style={{ color: 'black' }}>111111</Text></Button>
                        </Block>
                    </View>
                </TestCase>
                <TestCase itShould="space:between" tags={['C_API']} >
                    <View style={{ height: 300 }}>
                        <Block
                            flex
                            space='between'
                        >
                            <Button><Text style={{ color: 'black' }}>111111</Text></Button>
                            <Button><Text style={{ color: 'black' }}>111111</Text></Button>
                            <Button><Text style={{ color: 'black' }}>111111</Text></Button>
                        </Block>
                    </View>
                </TestCase>
                <TestCase itShould="space:around" tags={['C_API']} >
                    <View style={{ height: 300 }}>
                        <Block
                            flex
                            space='around'
                        >
                            <Button><Text style={{ color: 'black' }}>111111</Text></Button>
                            <Button><Text style={{ color: 'black' }}>111111</Text></Button>
                            <Button><Text style={{ color: 'black' }}>111111</Text></Button>
                        </Block>
                    </View>
                </TestCase>
                <TestCase itShould="space:evenly" tags={['C_API']} >
                    <View style={{ height: 300 }}>
                        <Block
                            flex
                            space='evenly'
                        >
                            <Button><Text style={{ color: 'black' }}>111111</Text></Button>
                            <Button><Text style={{ color: 'black' }}>111111</Text></Button>
                            <Button><Text style={{ color: 'black' }}>111111</Text></Button>
                        </Block>
                    </View>
                </TestCase>
                <TestCase itShould="top:alignItems: 'flex-start' alignSelf: 'flex-start'--true" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Block
                            top={true}
                        >
                            <Card></Card>
                        </Block>
                    </View>
                </TestCase>
                <TestCase itShould="top:alignItems: 'flex-start' alignSelf: 'flex-start' -- false" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Block
                            top={false}
                        >
                            <Card></Card>
                        </Block>
                    </View>
                </TestCase>
                <TestCase itShould="width:100" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Block
                            width={100}
                        >
                            <Card></Card>
                        </Block>
                    </View>
                </TestCase>
                <TestCase itShould="width:150" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Block
                            width={150}
                        >
                            <Card></Card>
                        </Block>
                    </View>
                </TestCase>
            </Tester>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    accordion: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        overflow: 'hidden',
        shadowRadius: 10
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
        height: '15%',
        borderWidth: 2,
        borderColor: '#000000',
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    baseText: {
        width: '100%',
        height: '100%',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    shadow: {
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    childBlock: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default BlockDemo
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, theme } from 'galio-framework';
import { TestCase, Tester } from '@rnoh/testerino';


const ButtonDemo = () => {
    const ButtonProps = [
        {
            key: 'capitalize:转换大写字母中的第一个字符 -true',
            value: true
        },
        {
            key: 'capitalize:转换大写字母中的第一个字符 -false',
            value: false
        },
        {
            key: 'disabled: true',
            value: true
        },
        {
            key: 'disabled: false',
            value: false
        }
    ]
    return (
        <ScrollView>
            <Tester>
                {ButtonProps.map((item: any) => {
                    return (
                        <TestCase itShould={item.key} tags={['C_API']} key={item.key}>
                            <View style={{
                                height: "auto",
                                display: 'flex',
                            }}>
                                <Button
                                    capitalize={item.value}
                                    disabled={item.value}
                                >
                                    small size capitalize
                                </Button>
                            </View>
                        </TestCase>
                    )
                })}
                <TestCase itShould='loading:true' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button loading={true}>
                            small size capitalize
                        </Button>
                    </View>
                </TestCase>
                <TestCase itShould='loading:false' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button loading={false}>
                            small size capitalize
                        </Button>
                    </View>
                </TestCase>
                <TestCase itShould='color:按钮颜色 -primary' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button color='primary'>
                            small size capitalize
                        </Button>
                    </View>
                </TestCase>
                <TestCase itShould='color:按钮颜色 -warning' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button color='warning'>
                            small size capitalize
                        </Button>
                    </View>
                </TestCase>
                <TestCase itShould='color:按钮颜色 -success' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button color='success'>
                            small size capitalize
                        </Button>
                    </View>
                </TestCase>
                <TestCase itShould='color:按钮颜色 -transparent' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                        backgroundColor: 'pink'
                    }}>
                        <Button color='transparent'>
                            small size capitalize
                        </Button>
                    </View>
                </TestCase>
                <TestCase itShould='color:按钮颜色 -theme' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button color={theme.COLORS?.INPUT}>
                            small size capitalize
                        </Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -tags' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="tags" iconFamily="antdesign">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -aliwangwang-o1' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="aliwangwang-o1" iconFamily="antdesign">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -cake' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="cake" iconFamily="Entypo">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -camera' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="camera" iconFamily="Entypo">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -trophy' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="trophy" iconFamily="EvilIcons">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -trash' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="trash" iconFamily="EvilIcons">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -droplet' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="droplet" iconFamily="Feather">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -dribbble' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="dribbble" iconFamily="Feather">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -phone' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="phone" iconFamily="font-awesome">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -font' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="font" iconFamily="font-awesome">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -crown' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="crown" iconFamily="font-awesome-5">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -democrat' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="democrat" iconFamily="font-awesome-5">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -key' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="key" iconFamily="simple-line-icon">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -bubble' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="bubble" iconFamily="simple-line-icon">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -guide-dog' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="guide-dog" iconFamily="foundation">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -layout' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="layout" iconFamily="foundation">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -bolt' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="bolt" iconFamily="material">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -cancel' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="cancel" iconFamily="material">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -cafe' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="cafe" iconFamily="ionicon">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -desktop' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="desktop" iconFamily="ionicon">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -bed' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="bed" iconFamily="material-community">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -bee' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="bee" iconFamily="material-community">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -star-fill' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="star-fill" iconFamily="octicon">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -zap' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="zap" iconFamily="octicon">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -drupal' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="drupal" iconFamily="zocial">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='icon:图标名称 -lego' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="lego" iconFamily="zocial">warning</Button>
                    </View>
                </TestCase>

                <TestCase itShould='iconColor:图标颜色-black' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="tags" iconFamily="antdesign" iconColor="black">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='iconColor:图标颜色-blue' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="aliwangwang-o1" iconFamily="antdesign" iconColor="blue">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='iconFamily:图标组件-antdesign' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="tags" iconFamily="AntDesign" iconColor="black">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='iconFamily:图标组件-Entypo' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="air" iconFamily="Entypo" iconColor="blue">warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='iconSize:图标大小-16' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="tags" iconFamily="AntDesign" iconSize={16}>warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='iconSize:图标大小-20' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button icon="air" iconFamily="Entypo" iconSize={20}>warning</Button>
                    </View>
                </TestCase>
                <TestCase itShould='loadingSize:加载样式 -small' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button loadingSize='small' loading></Button>
                    </View>
                </TestCase>
                <TestCase itShould='loadingSize:加载样式 -large' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button loadingSize='large' loading></Button>
                    </View>
                </TestCase>
                <TestCase itShould='lowercase:小写 -true' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button lowercase={true}>ABCD</Button>
                    </View>
                </TestCase>
                <TestCase itShould='lowercase:小写 -false' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button lowercase={false}>ABCD</Button>
                    </View>
                </TestCase>
                <TestCase itShould='onlyIcon: true' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button onlyIcon={true} icon="tags" iconFamily="antdesign" iconSize={30} color="warning">ABCD</Button>
                    </View>
                </TestCase>
                <TestCase itShould='onlyIcon: false' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button onlyIcon={false} icon="tags" iconFamily="antdesign" iconSize={30} color="warning">ABCD</Button>
                    </View>
                </TestCase>
                <TestCase itShould='opacity: 0.8' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button color="warning" opacity={0.8}>ABCD</Button>
                    </View>
                </TestCase>
                <TestCase itShould='opacity: 0.1' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button color="warning" opacity={0.1}>ABCD</Button>
                    </View>
                </TestCase>
                <TestCase itShould='shadowColor: 阴影颜色 -yellow' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button opacity={0.8} shadowColor='yellow'>ABCD</Button>
                    </View>
                </TestCase>
                <TestCase itShould='shadowColor: 阴影颜色 -blue' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button opacity={0.1} shadowColor='blue'>ABCD</Button>
                    </View>
                </TestCase>
                <TestCase itShould='shadowless: 移除阴影 -true' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button opacity={0.8} shadowColor='blue' shadowless={true}>ABCD</Button>
                    </View>
                </TestCase>
                <TestCase itShould='shadowless: 移除阴影 -false' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button opacity={0.1} shadowColor='blue' shadowless={false}>ABCD</Button>
                    </View>
                </TestCase>
                <TestCase itShould='size: 按钮大小 -small' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button opacity={0.8} size='small'>ABCD</Button>
                    </View>
                </TestCase>
                <TestCase itShould='size: 按钮大小 -large' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button opacity={0.1} size='large'>ABCD</Button>
                    </View>
                </TestCase>
                <TestCase itShould='uppercase: 使所有字母大写 -true' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button opacity={0.8} uppercase={true}>uppercase</Button>
                    </View>
                </TestCase>
                <TestCase itShould='uppercase: 使所有字母大写 -false' tags={['C_API']}>
                    <View style={{
                        height: "auto",
                        display: 'flex',
                    }}>
                        <Button opacity={0.1} uppercase={false}>uppercase</Button>
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
    button: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default ButtonDemo
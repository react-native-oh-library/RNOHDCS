import React, { useState } from 'react';
import { View, ScrollView, Text, Image, TextInput } from 'react-native'
import { AppleButton, appleAuthHarmony } from '@invertase/react-native-apple-authentication'
import { Tester, TestCase, TestSuite } from '@rnoh/testerino'
const appleLogoWhite = require('./img/apple_logo_white.png')
const appleLogoBlack = require('./img/apple_logo_black.png')

const AppleAuthenticationTest: React.FC = (): JSX.Element => {
    const [onPressTest, setOnPressTest] = useState<number>(0)
    const [clientId, setClientId] = useState<string>('com.example.client')
    const [redirectUri, setRedirectUri] = useState<string>('https://jojobiid.wang')
    const [nonceEnabled, setNonceEnabled] = useState<string>('true')
    const [nonce, setNonce] = useState<string>('111111111111')
    const [state, setState] = useState<string>('222222222222')

    return (
        <Tester style={{ backgroundColor: '#000', marginTop: 38, paddingBottom: 38 }}>
            <ScrollView>
                <Text style={{ fontSize: 20, fontWeight: '600', color: '#fff', margin: 10 }}>AppleButton组件测试用例</Text>
                <TestSuite name='属性style(类型为ViewStyle,展示三个)'>
                    <TestCase
                        tags={['C_API']}
                        itShould="borderBottomWidth: 10(下边框厚度10)"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <AppleButton
                                style={{ borderBottomWidth: 10 }}
                                onPress={() => {

                                }}
                            />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="backgroundColor: 'deepskyblue'(背景颜色深天蓝)"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <AppleButton
                                style={{ backgroundColor: 'deepskyblue' }}
                                onPress={() => {

                                }}
                            />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="transform: [{ rotate: '180deg' }](旋转180度)"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <AppleButton
                                style={{ transform: [{ rotate: '180deg' }] }}
                                onPress={() => {

                                }}
                            />
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='属性textStyle(类型为TextStyle,展示三个)'>
                    <TestCase
                        tags={['C_API']}
                        itShould="fontWeight: '900'(字体粗细900)"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <AppleButton
                                textStyle={{ fontWeight: '900' }}
                                onPress={() => {

                                }}
                            />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="fontStyle: 'italic'(字体风格倾斜)"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <AppleButton
                                textStyle={{ fontStyle: 'italic' }}
                                onPress={() => {

                                }}
                            />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="fontSize: 10(字体大小10)"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <AppleButton
                                textStyle={{ fontSize: 10 }}
                                onPress={() => {

                                }}
                            />
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='属性cornerRadius(类型为number,展示三个)'>
                    <TestCase
                        tags={['C_API']}
                        itShould="cornerRadius={0}(边框圆角弧度0)"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <AppleButton
                                cornerRadius={0}
                                buttonStyle={AppleButton.Style.WHITE_OUTLINE}
                                onPress={() => {

                                }}
                            />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="cornerRadius={10}(边框圆角弧度10)"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <AppleButton
                                cornerRadius={10}
                                buttonStyle={AppleButton.Style.WHITE_OUTLINE}
                                onPress={() => {

                                }}
                            />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="cornerRadius={20}(边框圆角弧度20)"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <AppleButton
                                cornerRadius={20}
                                buttonStyle={AppleButton.Style.WHITE_OUTLINE}
                                onPress={() => {

                                }}
                            />
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='属性buttonStyle(类型为枚举值，全部展示)'>
                    <TestCase
                        tags={['C_API']}
                        itShould="Black(黑)"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <AppleButton
                                buttonStyle={AppleButton.Style.BLACK}
                                onPress={() => {

                                }}
                            />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="White(白)"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <AppleButton
                                buttonStyle={AppleButton.Style.WHITE}
                                onPress={() => {

                                }}
                            />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="WhiteOutline(白底黑边)"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <AppleButton
                                buttonStyle={AppleButton.Style.WHITE_OUTLINE}
                                onPress={() => {

                                }}
                            />
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='属性buttonType(类型为枚举值，全部展示)'>
                    <TestCase
                        tags={['C_API']}
                        itShould="Continue(Continue with Apple)"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <AppleButton
                                buttonType={AppleButton.Type.CONTINUE}
                                onPress={() => {

                                }}
                            />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="SignIn(Sign in with Apple)"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <AppleButton
                                buttonType={AppleButton.Type.SIGN_IN}
                                onPress={() => {

                                }}
                            />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="SignUp(Sign up with Apple)"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <AppleButton
                                buttonType={AppleButton.Type.SIGN_UP}
                                onPress={() => {

                                }}
                            />
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='属性onPress(类型为事件函数，单击改变值)'>
                    <TestCase
                        tags={['C_API']}
                        itShould="onPress()(单击后内部数字+1)"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <AppleButton
                                buttonText={`Sign in with Apple(${onPressTest})`}
                                onPress={() => {
                                    setOnPressTest(onPressTest + 1)
                                }}
                            />
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='属性leftView(左侧渲染图标，展示两个)'>
                    <TestCase
                        tags={['C_API']}
                        itShould="Image组件嵌套黑色Apple图标"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <AppleButton
                                buttonStyle={AppleButton.Style.WHITE_OUTLINE}
                                leftView={(
                                    <Image
                                        style={{
                                            alignSelf: 'center',
                                            width: 14,
                                            height: 14,
                                            marginRight: 7,
                                            resizeMode: 'contain',
                                        }}
                                        source={appleLogoBlack}
                                    />
                                )}
                                onPress={() => {

                                }}
                            />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="Image组件嵌套白色Apple图标"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <AppleButton
                                buttonStyle={AppleButton.Style.BLACK}
                                leftView={(
                                    <Image
                                        style={{
                                            alignSelf: 'center',
                                            width: 14,
                                            height: 14,
                                            marginRight: 7,
                                            resizeMode: 'contain',
                                        }}
                                        source={appleLogoWhite}
                                    />
                                )}
                                onPress={() => {

                                }}
                            />
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='属性buttonText(类型为字符串，展示三个)'>
                    <TestCase
                        tags={['C_API']}
                        itShould="buttonText={'继续使用 Apple'}"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <AppleButton
                                buttonText={'继续使用 Apple'}
                                buttonStyle={AppleButton.Style.WHITE_OUTLINE}
                                onPress={() => {

                                }}
                            />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="buttonText={'使用 Apple 登录'}"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <AppleButton
                                buttonText={'使用 Apple 登录'}
                                buttonStyle={AppleButton.Style.WHITE_OUTLINE}
                                onPress={() => {

                                }}
                            />
                        </View>
                    </TestCase>
                    <TestCase
                        tags={['C_API']}
                        itShould="buttonText={'使用 Apple 注册'}"
                    >
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <AppleButton
                                buttonText={'使用 Apple 注册'}
                                buttonStyle={AppleButton.Style.WHITE_OUTLINE}
                                onPress={() => {

                                }}
                            />
                        </View>
                    </TestCase>
                </TestSuite>
                <Text style={{ fontSize: 20, fontWeight: '600', color: '#fff', margin: 10 }}>appleAuthHarmony对象测试用例</Text>
                <TestSuite name='方法configure(作用为改变原生侧内部值)'>
                    <TestCase
                        tags={['C_API']}
                        itShould="configure( )(插入数据至原生侧给signin( )使用)"
                    >
                        <View style={{ height: 'auto', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                            <Text style={{ width: 200, marginBottom: -8, fontSize: 10 }}>clientId(客户端标识符)</Text>
                            <TextInput
                                style={{ borderBottomWidth: 1, margin: 10, width: 200 }}
                                placeholder='请输入'
                                value={clientId}
                                onChangeText={setClientId}
                            />
                            <Text style={{ width: 200, marginBottom: -8, fontSize: 10 }}>redirectUri(授权重定向到的URI)</Text>
                            <TextInput
                                style={{ borderBottomWidth: 1, margin: 10, width: 200 }}
                                placeholder='请输入'
                                value={redirectUri}
                                onChangeText={setRedirectUri}
                            />
                            <Text style={{ width: 200, marginBottom: -8, fontSize: 10 }}>responseType(请求响应类型)</Text>
                            <TextInput
                                style={{ borderBottomWidth: 1, margin: 10, width: 200 }}
                                placeholder='请输入'
                                value={appleAuthHarmony.ResponseType.ALL}
                            />
                            <Text style={{ width: 200, marginBottom: -8, fontSize: 10 }}>nonceEnabled(自动nonce配置)</Text>
                            <TextInput
                                style={{ borderBottomWidth: 1, margin: 10, width: 200 }}
                                placeholder='请输入'
                                value={nonceEnabled}
                                onChangeText={setNonceEnabled}
                            />
                            <Text style={{ width: 200, marginBottom: -8, fontSize: 10 }}>scope(请求用户信息量)</Text>
                            <TextInput
                                style={{ borderBottomWidth: 1, margin: 10, width: 200 }}
                                placeholder='请输入'
                                value={appleAuthHarmony.Scope.ALL}
                            />
                            <Text style={{ width: 200, marginBottom: -8, fontSize: 10 }}>nonce(缓解重放攻击的值)</Text>
                            <TextInput
                                style={{ borderBottomWidth: 1, margin: 10, width: 200 }}
                                placeholder='请输入'
                                value={nonce}
                                onChangeText={setNonce}
                            />
                            <Text style={{ width: 200, marginBottom: -8, fontSize: 10 }}>state(请求的当前状态值)</Text>
                            <TextInput
                                style={{ borderBottomWidth: 1, margin: 10, width: 200 }}
                                placeholder='请输入'
                                value={state}
                                onChangeText={setState}
                            />
                            <AppleButton
                                buttonText={'configure( )'}
                                buttonStyle={AppleButton.Style.WHITE_OUTLINE}
                                onPress={() => {
                                    const appleAuthHarmonyConfig = {
                                        clientId,
                                        redirectUri,
                                        responseType: appleAuthHarmony.ResponseType.ALL,
                                        nonceEnabled: nonceEnabled === 'true' ? true : false,
                                        scope: appleAuthHarmony.Scope.ALL,
                                        nonce,
                                        state
                                    }
                                    appleAuthHarmony.configure(appleAuthHarmonyConfig)
                                }}
                            />
                        </View>
                    </TestCase>
                </TestSuite>
            </ScrollView>
        </Tester>
    )
};

export default AppleAuthenticationTest;
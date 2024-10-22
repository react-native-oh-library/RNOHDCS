import React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import Alipay from "react-native-alipay";
import { AFAuthServiceResponse } from '@alipay/afservicesdk';

export default function App(): JSX.Element {
    const [bytesString, setBytesString] = useState('');
    const [size, setSize] = useState('30');
    const [value, onChangeText] = React.useState('请输入订单号');

    return (
        <Tester style = {{flex: 1, top: 30}}>
            <TestSuite name = "alipay">
                <Text>{bytesString}</Text>

                {/*通过传入的arrange，手动触发断言 */}
                <TestCase
                    itShould = "native alipay"
                    tags = {['C_API']}
                    initialState = {undefined as any}
                    arrange = {({setState}) => {
                        return (
                            <>
                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={text => onChangeText(text)}
                                value={value}
                            />
                            <Button
                                title="submit"
                                onPress={
                                    async () => {
                                        let orderInfo = value;
                                        console.info('App getOrderInfoStr: ' + orderInfo);
                                        Alipay.alipay(orderInfo).then((result: any) => {
                                            console.info('App alipay result: ' + result);
                                            setState(result);
                                        });
                                    }
                                }
                            />
                            </>
                        )
         
                    }}
                    assert = {async ({expect, state}) => {
                        expect(state).to.have.string("9000"); // 9000 业务调用成功
                    }} 
                />

                <TestCase 
                    itShould = "js alipay"
                    tags = {['C_API']}
                    initialState = {undefined as any}
                    arrange = {({setState}) => {
                        return (
                            <TouchableOpacity 
                                onPress = {async () => {
                                    Alipay.setAlipayScheme('scheme:demo');
                                    const urlStr: string = 'https://authweb.alipay.com/auth?auth_type=PURE_OAUTH_SDK&app_id=2016051801417322&scope=auth_user&state=init';
                                    const bundleName: string = "com.example.harmony";
                                    Alipay.authInfo(urlStr, true, bundleName, 'entry', 'EntryAbility', (response: AFAuthServiceResponse) => {
                                        //授权返回值
                                        console.info('========= response=' + JSON.stringify(response));
                                        setState(JSON.stringify(response));
                                    });
                                }}
                                style = {styles.btn}>
                                <Text style = {styles.btnText}> 登录验证 </Text>
                            </TouchableOpacity>
                        );
                    }}
                    assert = {async ({expect, state}) => {
                        expect(state).to.have.string("9000");
                    }}
                />

            </TestSuite>
        </Tester>
    )
}

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    btnText: {
        color: 'white',
        fontSize: 16,
    },
  });
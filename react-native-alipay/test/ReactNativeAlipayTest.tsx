import React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import Alipay from "react-native-alipay";
import { AFAuthServiceResponse } from '@alipay/afservicesdk';

export default function App(): JSX.Element {
    const [bytesString, setBytesString] = useState('');
    const [size, setSize] = useState('30');

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
                            <TouchableOpacity 
                                onPress = {async () => {
                                    let orderInfo = 'app_id=2014100900013222&biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%221%22%2C%22body%22%3A%22xxx%22%2C%22out_trade_no%22%3A%22723175011179269%22%7D&charset=utf-8&method=alipay.trade.app.pay&sign_type=RSA2&timestamp=2016-07-29%2016%3A55%3A53&version=1.0&sign=ClyziyfaiJtGd01HE1XmLbr%2BGy1JzBiH7QF69Qb66GvB%2BH6ULI5BeqEHeJIxVtKKgM%2F0ILEz7XjH2bvP1Fj52VUg5Gc5sg2reVHr8EhHqY7IiSAkEt3lNckWhfeVvdhjbQEKKZWMPgVC%2FVmMvMkkFzsP5S5Zz3aZKZWRp7xLApWtBZTeJj2Hd%2FDNhbEzvpTiQF9UDs1hPMmXmKLrNUmi0k4MQaeBCxXxmY9ITTmHofsju30rxo3q%2FYMYWD79ayxFmSO6adAXP9nLY%2B16VyeBCb53zxb%2BPWjV4CCVmit8YBOIOssAN4B0yLlmBOYWJS76MM46ADu%2FmiCwkdOnJduC6Q%3D%3D';
                                    console.info('App getOrderInfoStr: ' + orderInfo);
                                    Alipay.alipay(orderInfo).then((result: any) => {
                                        console.info('App alipay result: ' + result);
                                        setState(result);
                                    });
                                }}
                                style = {styles.btn}>
                                <Text style = {styles.btnText} > 支付宝支付 </Text>
                            </TouchableOpacity>
                        );
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
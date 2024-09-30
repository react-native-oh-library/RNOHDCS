import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Alipay from "react-native-alipay";
import { AFAuthServiceResponse } from '@alipay/afservicesdk';

function App(): React.JSX.Element {
    const urlStr: string = 'https://authweb.alipay.com/auth?auth_type=PURE_OAUTH_SDK&app_id=2016051801417322&scope=auth_user&state=init';
    const bundleName: string = "com.example.harmony"; // 包名
    const moduleName: string = "entry";
    const abilityName: string = "EntryAbility";
    
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                ☆Alipay Example☆
            </Text>

            <Button
                title="支付宝支付"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
                onPress={ 
                    async () => {
                        let orderInfo: string = 'app_id=2014100900013222&biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%221%22%2C%22body%22%3A%22xxx%22%2C%22out_trade_no%22%3A%22723175011179269%22%7D&charset=utf-8&method=alipay.trade.app.pay&sign_type=RSA2&timestamp=2016-07-29%2016%3A55%3A53&version=1.0&sign=ClyziyfaiJtGd01HE1XmLbr%2BGy1JzBiH7QF69Qb66GvB%2BH6ULI5BeqEHeJIxVtKKgM%2F0ILEz7XjH2bvP1Fj52VUg5Gc5sg2reVHr8EhHqY7IiSAkEt3lNckWhfeVvdhjbQEKKZWMPgVC%2FVmMvMkkFzsP5S5Zz3aZKZWRp7xLApWtBZTeJj2Hd%2FDNhbEzvpTiQF9UDs1hPMmXmKLrNUmi0k4MQaeBCxXxmY9ITTmHofsju30rxo3q%2FYMYWD79ayxFmSO6adAXP9nLY%2B16VyeBCb53zxb%2BPWjV4CCVmit8YBOIOssAN4B0yLlmBOYWJS76MM46ADu%2FmiCwkdOnJduC6Q%3D%3D';
                        Alipay.alipay(orderInfo).then((result: any) => {
                            console.info('App alipay result: ' + result);
                        });
                    }
                }
            />

            <Button
                title="登录验证"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
                onPress={async () => {
                    Alipay.setAlipayScheme('scheme:demo');
                    await Alipay.authInfo(urlStr, true, bundleName, moduleName, abilityName, (response: AFAuthServiceResponse) => {
                        //授权返回值
                        console.info('========= response=' + JSON.stringify(response));
                    });
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  });

export default App;

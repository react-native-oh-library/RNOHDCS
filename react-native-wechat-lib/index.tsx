import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  Alert,
  Image,
} from 'react-native';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import * as WeChat from '@react-native-ohos/react-native-wechat-lib';
import { APP_ID, APP_SECRET } from './src/constants';
import { launchImageLibrary } from 'react-native-image-picker';

const App = () => {
  const [authRes, setAuthRes] = useState('');
  const [qrcode, setQrcode] = useState('');
  const [scanRes, setScanRes] = useState('');

  const handleRegisterApp = async () => {
    const res = await WeChat.registerApp(APP_ID, '');
    Alert.alert(JSON.stringify(res));
  };

  const handleOpenWXApp = async () => {
    try {
      await WeChat.openWXApp();
    } catch (error) {
      console.log('%c  error:', 'color: #0e93e0;background: #aaefe5;', error);
    }
  };

  const handleCheckIsWXAppInstalled = async () => {
    try {
      const res = await WeChat.isWXAppInstalled();
      Alert.alert(JSON.stringify(res));
    } catch (error) {
      console.log('%c  error:', 'color: #0e93e0;background: #aaefe5;', error);
    }
  };

  const handleLaunchMiniProgram = async () => {
    try {
      await WeChat.launchMiniProgram({
        userName: "gh_bd3176843a63",
        miniProgramType: 2
      });
    } catch (error) {
      console.log('%c  error:', 'color: #0e93e0;background: #aaefe5;', error);
    }
  };

  const handleSendAuthRequest = async () => {
    try {
      const res = await WeChat.sendAuthRequest('snsapi_userinfo', 'none');
      setAuthRes(res as any);
    } catch (error) {
      console.log('%c  error:', 'color: #0e93e0;background: #aaefe5;', error);
    }
  };

  const handleAuthByScanRequest = async () => {
    try {
      const res = await WeChat.authByScan(APP_ID, APP_SECRET, (qrcode: any) => {
        // 拿到 qrcode 用 Image 去渲染
        setQrcode(qrcode);
      });
      setScanRes(res as any);
    } catch (error) {
      console.log('%c  error:', 'color: #0e93e0;background: #aaefe5;', error);
    }
  };

  const handleShareText = async () => {
    try {
      await WeChat.shareText({
        text: '测试一下分享功能',
        scene: 0,
      });
    } catch (error) {
      console.log('%c  error:', 'color: #0e93e0;background: #aaefe5;', error);
    }
  };

  const handleShareRemoteImage = async () => {
    try {
      const res = await WeChat.shareImage({
        imageUrl:
          'https://img.tukuppt.com/photo-big/00/10/77/619619681755c5463.jpg',
        scene: 0,
      });
      console.log(
        '%c WechatLibTurboModuleLogger handleShareRemoteImage res:',
        'color: #0e93e0;background: #aaefe5;',
        res,
      );
    } catch (error) {
      console.log('%c  error:', 'color: #0e93e0;background: #aaefe5;', error);
    }
  };

  const handleShareLocalImage = async () => {
    launchImageLibrary(
      { mediaType: 'photo', selectionLimit: 1 },
      async data => {
        if (data.assets?.length) {
          try {
            await WeChat.shareLocalImage({
              imageUrl: data.assets[0].uri || '',
              scene: 0,
            });
          } catch (error) {
            console.log('error:', error);
          }
        }
      },
    );
  };

  const handlePay = async () => {
    try {
      const res = await WeChat.pay({
        partnerId: '2480306091',
        prepayId: 'wx26161523845794ecced251acf2b6860000',
        nonceStr: 'vmall_240926161523_993_2774',
        timeStamp: '1727338524',
        package: 'Sign=WXPay',
        sign: 'rAqsrx5yLfRNBGvlHYuLhUsNK0OPeOLQ5xlvhxFo9guPU4HeNtzRdPaGAXAzXvn7V5chVe8sj3BfvDgwXlCKctCcFIllOgheyZbZ7btFC',
        extData: '',
      });
      console.log(res);
    } catch (error) {
      console.log('%c  error:', 'color: #0e93e0;background: #aaefe5;', error);
    }
  };

  return (
    <Tester style={{ flex: 1 }}>
      <ScrollView>
        <TestSuite name="注册应用">
          <TestCase itShould="Click the button to register the app, and true will pop up when successful.">
            <Button title="registerApp" onPress={handleRegisterApp} />
          </TestCase>
        </TestSuite>
        <TestSuite name="微信是否安装">
          <TestCase itShould="Click the button to check whether WeChat is installed">
            <Button title="isWXAppInstalled" onPress={handleCheckIsWXAppInstalled} />
          </TestCase>
        </TestSuite>
        <TestSuite name="打开微信">
          <TestCase itShould="Click the button to launch the WeChat application">
            <Button title="openWXApp" onPress={handleOpenWXApp} />
          </TestCase>
        </TestSuite>
        <TestSuite name="打开小程序">
          <TestCase itShould="Click the button to open the mini program">
            <Button title="launchMiniProgram" onPress={handleLaunchMiniProgram} />
          </TestCase>
        </TestSuite>
        <TestSuite name="授权登录">
          <TestCase itShould="Click the button to bring up the WeChat authorization interface, and return the authorization information after authorization.">
            <View>
              <Button title="sendAuthRequest" onPress={handleSendAuthRequest} />
              {authRes && <Text>授权登录结果: {JSON.stringify(authRes)}</Text>}
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="扫码登录">
          <TestCase itShould="Click the button to get the QR code to log in. Scan the QR code to authorize the login and return the login information.">
            <View>
              <Button title="authByScan" onPress={handleAuthByScanRequest} />
              {qrcode && !scanRes && (
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{ uri: qrcode }}
                />
              )}
              {scanRes && <Text>扫码登录结果: {JSON.stringify(scanRes)}</Text>}
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="分享文本">
          <TestCase
            itShould="
Click the button to pull up the WeChat chat list and select friends to share text">
            <Button title="shareText" onPress={handleShareText} />
          </TestCase>
        </TestSuite>
        <TestSuite name="分享图片">
          <TestCase
            itShould="
Click the button to pull up the WeChat chat list and select friends to share remote image">
            <Button title="shareImage" onPress={handleShareRemoteImage} />
          </TestCase>
        </TestSuite>
        <TestSuite name="分享本地图片">
          <TestCase
            itShould="
Click the button to select a local picture, then pull up the WeChat chat list and select friends to share the picture">
            <Button title="shareLocalImage" onPress={handleShareLocalImage} />
          </TestCase>
        </TestSuite>
        <TestSuite name="支付">
          <TestCase itShould="Click the button to launch WeChat payment">
            <Button title="pay" onPress={handlePay} />
          </TestCase>
        </TestSuite>
        <View style={{ height: 150 }} />
      </ScrollView>
    </Tester>
  );
};

export default App;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 80,
    height: 80,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    height: 20,
    width: 200,
    fontSize: 14,
  },
});

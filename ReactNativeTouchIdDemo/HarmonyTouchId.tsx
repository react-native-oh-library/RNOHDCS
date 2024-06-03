
import React, { Component } from 'react';
import {
  Alert,
  View,
  Button
} from 'react-native';



// import TouchID from "@react-native-oh-tpl/react-native-touch-id";
import TouchID from 'react-native-touch-id';
import { options } from 'yargs';
// import NativeHarmonyTouchId from 'react-native-touch-id/src/NativeTouchId'
// var TouchID =TurboModuleRegistry ? 
// TurboModuleRegistry.get('NativeHarmonyTouchId') : NativeModules.TouchID;
export function HarmonyTouchId() {

  return (
    <View>
      <Button title='验证是否有指纹权限'
        onPress={() => {
          TouchID.isSupported({ unifiedErrors: false }).then((res: any) => {
            Alert.alert(res)
          }).catch((err: any) => {
            Alert.alert(JSON.stringify(err.message))
          })
        }}
      ></Button>

      <Button title='校验指纹'
        onPress={() => {
          TouchID.authenticate().then((res:boolean)=>{
            Alert.alert("认证成功")
          }).catch((err:any)=>{
            Alert.alert(err.message)
          })
        }}
      ></Button>
    </View>
  )

}

import React, { Component } from 'react';
import {
  Alert,
  View,
  Button
} from 'react-native';
import { Tester, TestCase, TestSuite } from "@rnoh/testerino"

import TouchID from 'react-native-touch-id';
export function HarmonyTouchId() {

  return (

    <Tester>
      <TestSuite name='TouchID'>
        <TestCase
          itShould="isSupported"
          tags={['C_API']}
          initialState={0}
          arrange={({ setState }) => {
            return (
              <Button title='验证是否有指纹权限'
                onPress={() => {
                  TouchID.isSupported({ unifiedErrors: false }).then((res: any) => {
                    setState(100)
                    Alert.alert(res)
                  }).catch((err: any) => {
                    setState(100)
                    Alert.alert(JSON.stringify(err.message))
                  })
                }}
              ></Button>
            );
          }}
          assert={async ({ expect, state }) => {
            expect(100);
          }}
        />

        <TestCase
          itShould="authenticate"
          tags={['C_API']}
          initialState={0}
          arrange={({ setState }) => {
            return (
              <Button title='校验指纹'
                onPress={() => {
                  TouchID.authenticate().then((res: boolean) => {
                    setState(100)
                    Alert.alert("认证成功")
                  }).catch((err: any) => {
                    setState(100)
                    Alert.alert(err.message)
                  })
                }}
              ></Button>
            );
          }}
          assert={async ({ expect, state }) => {
            expect(100);
          }}
        />


      </TestSuite>
    </Tester>

  )

}
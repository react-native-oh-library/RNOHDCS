import React, { useEffect, useState } from 'react';
import { Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import { TestCase } from '../components/TestCase'
import { Tester, TestSuite } from '@rnoh/testerino'

export function FingerprintScannerDemo() {


  return (
    <Tester style={{ flex: 1 }}>
      <TestSuite name='指纹认证'>
        <TestCase.Example
          tags={['C_API']}
          itShould='调用指纹验证器'
        >
          <TouchableOpacity
            onPress={() => {
              FingerprintScanner.authenticate({ title: '指纹认证' })
            }}
          >
            <Text style={{lineHeight: 35, fontSize: 22}}>调用指纹验证器</Text>
          </TouchableOpacity>
        </TestCase.Example>
        <TestCase.Manual
          tags={['C_API']}
          itShould='检查指纹扫描是否可用'
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <TouchableOpacity
                onPress={async () => {
                  const enabled = await FingerprintScanner.isSensorAvailable()
                  setState(enabled)
                }}
              >
                <Text style={{lineHeight: 35, fontSize: 22}}>检查指纹扫描是否可用</Text>
              </TouchableOpacity>
            )
          }}
          assert={async ({ expect, state }) => {
            expect(state).to.be.string
          }}
        />
        <TestCase.Manual
          tags={['C_API']}
          itShould='获取指纹验证失败message'
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <TouchableOpacity
                onPress={async () => {
                  const enabled = FingerprintScanner.onAttempt()
                  setState(Object.prototype.toString.call(enabled) === '[object Object]')
                }}
              >
                <Text style={{lineHeight: 35, fontSize: 22}}>指纹验证失败方法</Text>
              </TouchableOpacity>
            )
          }}
          assert={async ({ expect, state }) => {
            expect(state).to.be.true
          }}
        />
         <TestCase.Manual
          tags={['C_API']}
          itShould='取消监听指纹监听'
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <TouchableOpacity
                onPress={async () => {
                  FingerprintScanner.release()
                  setState(true)
                }}
              >
                <Text style={{lineHeight: 35, fontSize: 22}}>取消监听指纹监听</Text>
              </TouchableOpacity>
            )
          }}
          assert={async ({ expect, state }) => {
            expect(state).to.be.true
          }}
        />
      </TestSuite>
    </Tester>

  );
}

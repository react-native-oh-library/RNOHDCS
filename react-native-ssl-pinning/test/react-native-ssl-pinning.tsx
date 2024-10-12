import {TestSuite, Tester, TestCase}from '@rnoh/testerino';
import * as React from 'react';
import {
   SafeAreaView,
   ScrollView,
   View,
   StatusBar,
   Alert,
 } from "react-native";
 import {getCookies, fetch, removeCookieByName} from 'react-native-ssl-pinning';

function RNSslPinningTest() {
   return (
        <Tester>
          <ScrollView style={{width: '100%'}}>
            <TestCase
            itShould="RNSslPinning.fetchBykey"
            fn={({expect}:any)=>{
              fetch("https://jsnjlq.cn", {
                method: "GET" ,
                timeoutInterval: 10000, // milliseconds
                pkPinning: true,
                // your certificates array (needed only in android) ios will pick it automatically
                sslPinning: {
                  certs: ["sha256/kPwnudZVhc+iC/fTd3OPph8uugk1YN5ZsJDAeM2P4UU="
                ]
                },
                headers: {
                  Accept: "application/json; charset=utf-8", "Access-Control-Allow-Origin": "*", "e_platform": "mobile",
                }
              }).then(
                (result) => {
                  expect((JSON.stringify(result).search("header") > 0));
                },
              ).catch((error) => {
                expect((error)).to.not.be.undefined;
              });
            }}
         />
         <TestCase
            itShould="RNSslPinning.fetchByCert"
            fn={({expect}:any)=>{
              fetch("https://jsnjlq.cn", {
                method: "POST" ,
                timeoutInterval: 10000, // milliseconds
                pkPinning: true,
                sslPinning: {
                  certs: ["cert"]
                },
                headers: {
                  Accept: "application/json; charset=utf-8", "Access-Control-Allow-Origin": "*", "e_platform": "mobile",
                }
              }).then(
                (result) => {
                  Alert.alert(JSON.stringify(result));
                  expect(JSON.stringify(result).search("header") > 0);
                },
              ).catch((error) => {
                expect((error)).to.not.be.undefined;
              });
            }}
         />
         <TestCase
            itShould="RNSslPinning.getCookies"
            fn={({expect}:any)=>{
              getCookies("jsnjlq.cn").then(
                (result) => {
                  expect(JSON.stringify(result).search("id") > 0);
                },
              ).catch((error) => {
                expect((error)).to.not.be.undefined;
              });
            }}
         />
         <TestCase
            itShould="RNSslPinning.removeCookie"
            fn={({expect}:any)=>{
              removeCookieByName("jsnjlq.cn").then(
                (result) => {
                  getCookies("jsnjlq.cn").then(
                    (result) => {
                      expect(JSON.stringify(result).search("id") == -1);
                    },
                  ).catch((error) => {
                    expect((error)).to.not.be.undefined;
                  });
                },
              ).catch((error) => {
                expect((error)).to.not.be.undefined;
              });
            }}
          />
        </ScrollView>
      </Tester>
   );
}

function App(){
    return(
        <View>
        <StatusBar />
            <SafeAreaView style={{backgroundColor: '#222'}}>
              <RNSslPinningTest/>
            </SafeAreaView>
        </View>
    )
 }
 
 export default App;
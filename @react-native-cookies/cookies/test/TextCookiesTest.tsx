import React, { useState, useRef } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import { TestSuite, TestCase } from '@rnoh/testerino';
import CookieManager from "@react-native-cookies/cookies";
import { WebView } from "react-native-webview";
export interface Cookie {
    name: string;
    value: string;
    path?: string;
    domain?: string;
    version?: string;
    expires?: string;
    secure?: boolean;
    httpOnly?: boolean;
  }
  export interface Cookies {
    [key: string]: Cookie;
  }
  export function TextCookiesTest() {
    const httpUrl = "https://www.baidu.com";
    const [result, setResult] = useState("请点击按钮，进行操作");
    const webViewRef = useRef(null);

    const AddMenuClearAllTest = (props: {
        setState: React.Dispatch<React.SetStateAction<boolean>>;
      }) => {

        const addCustomMenuItem = async() => {
            let cookieResult = await CookieManager.clearAll(true);
          props.setState(true);
          let result = cookieResult
                ? "清除所有cookie成功"
                : "清除所有cookie失败";
              setResult(result + "");
        };

        return (
          <View style={styles.container}>
            <Button title="清除所有cookie" onPress={addCustomMenuItem} />
          </View>
        );
    };

    const AddMenuSetTest = (props: {
      setState: React.Dispatch<React.SetStateAction<boolean>>;
    }) => {

      const addCustomMenuItem = async() => {
        let curCookie: Cookie = { name: "myAddCookie", value: "myNewCookie" };
        let cookieResult = await CookieManager.set(httpUrl, curCookie, true);
        let result = cookieResult
          ? "根据url设置cookie成功"
          : "根据url设置cookie失败";
        setResult(result);

        props.setState(true);
        
      };

      return (
        <View style={styles.container}>
          <Button title="根据url设置cookie" onPress={addCustomMenuItem} />
        </View>
      );
  };

    const AddMenuGetTest = (props: {
      setState: React.Dispatch<React.SetStateAction<boolean>>;
    }) => {

      const addCustomMenuItem = async() => {
        let cookieResult = await CookieManager.get(httpUrl, true);
        setResult(JSON.stringify(cookieResult));
        console.log(80,cookieResult)
        props.setState(true);
        
      };

      return (
        <View style={styles.container}>
          <Button title="根据url获取cookie" onPress={addCustomMenuItem} />
        </View>
      );
  };

  const AddMenuClearByNameTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {

    const addCustomMenuItem = async() => {
      let cookieResult = await CookieManager.clearByName(
        httpUrl,
        "myAddCookie",
        true
      );
      let result = cookieResult
        ? "根据名称删除cookie成功"
        : "根据名称删除cookie失败";
      setResult(result);
      props.setState(true);
    };

    return (
      <View style={styles.container}>
        <Button title="根据名称删除cookie" onPress={addCustomMenuItem} />
      </View>
    );
};

const AddMenuRemoveTest = (props: {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

  const addCustomMenuItem = async() => {
    let cookieResult = await CookieManager.removeSessionCookies();
          let result = cookieResult
            ? "清除会话cookie成功"
            : "清除会话cookie失败";
          setResult(result);
    props.setState(true);
  };

  return (
    <View style={styles.container}>
      <Button title="清除会话cookie" onPress={addCustomMenuItem} />
    </View>
  );
};




    return (
        <TestSuite name="TextSize">
            <ScrollView style={styles.resultArea}>
                <Text style={{color: "#fff"}}>{result}</Text>
            </ScrollView>
            <TestCase
                itShould="clearAll"
                initialState={false}
                arrange={({ setState }) => <AddMenuClearAllTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />
            <TestCase
                itShould="set"
                initialState={false}
                arrange={({ setState }) => <AddMenuSetTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />
            <TestCase
                itShould="get"
                initialState={false}
                arrange={({ setState }) => <AddMenuGetTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />
            <TestCase
                itShould="clearByName"
                initialState={false}
                arrange={({ setState }) => <AddMenuClearByNameTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />
           
            <TestCase
                itShould="removeSessionCookies"
                initialState={false}
                arrange={({ setState }) => <AddMenuRemoveTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />
        </TestSuite>
    );
    
  }

  


  const styles = StyleSheet.create({
    
    container: {
      height: 50,
      justifyContent: 'center',
    },
    pageArea: {
      width: "100%",
      height: 150,
    },
    resultArea: {
      width: "100%",
      height: 200,
      borderWidth: 2,
      borderColor: "gray",
      borderRadius: 10,
      marginTop: 5,
    },
    button: {
      backgroundColor: "#FF0000",
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 24,
      alignItems: "center",
      justifyContent: "center",
      elevation: 4,
      width: "80%",
      marginTop: 5,
    },
  });
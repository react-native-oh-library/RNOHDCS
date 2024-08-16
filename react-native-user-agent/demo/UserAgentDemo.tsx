import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import UserAgent from 'react-native-user-agent';

export default function UserAgentDemo() {
  let userAgent: string = UserAgent.getUserAgent();
  const [webViewUserAgent, setWebViewUserAgent] = useState<string | null>(null);
  useEffect(() => {
    UserAgent.getWebViewUserAgent()
      .then(webViewUserAgent => {
        setWebViewUserAgent(webViewUserAgent);
        console.log(webViewUserAgent);
      })
      .catch(e => {
        console.error('Error getting WebView User Agent:', e);
      });
  }, []);

  return (
    <SafeAreaView>
      <Text style={style.text}>同步方式: </Text>
      <Text style={style.text}>{userAgent}</Text>
      <Text style={style.text}></Text>
      <Text style={style.text}>异步方式: </Text>
      <Text style={style.text}>{webViewUserAgent}</Text>
      <Text style={style.text}></Text>
      <Text style={style.text}>常量: </Text>
      <Text style={style.text}>systemName: {UserAgent.systemName}</Text>
      <Text style={style.text}>systemVersion: {UserAgent.systemVersion}</Text>
      <Text style={style.text}>applicationName: {UserAgent.applicationName}</Text>
      <Text style={style.text}>applicationVersion: {UserAgent.applicationVersion}</Text>
      <Text style={style.text}>buildNumber: {UserAgent.buildNumber}</Text>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 18
  }
});
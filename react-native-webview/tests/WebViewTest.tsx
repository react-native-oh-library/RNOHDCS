import React from 'react';
import { ScrollView, StyleSheet, View, Text, SafeAreaView } from 'react-native';

import { NavigationContainer, Page } from './components';
import { PortalHost, PortalProvider } from '@gorhom/portal';
import WebViewTestSource from "./webviewTest/Source"
import WebViewTestIncognito from "./webviewTest/Incognito"
import WebViewTestDomStorageEnabled from './webviewTest/DomStorageEnabled';
import WebViewTestOnMessage from './webviewTest/OnMessage';
import WebViewTestJavaScriptEnabled from './webviewTest/JavaScriptEnabled';
import WebViewTestTextZoom from './webviewTest/TextZoom';
import WebViewTestScalesPageToFit from './webviewTest/ScalesPageToFit';
import WebViewTestInjectJavaScript from './webviewTest/InjectJavaScript';
import WebViewTestUserAgent from './webviewTest/UserAgent';
import WebViewTestApplicationNameForUserAgent from './webviewTest/ApplicationNameForUserAgent';
import WebViewTestIgnoreSilentHardwareSwitch from './webviewTest/IgnoreSilentHardwareSwitch';
import WebViewTestReload from "./webviewTest/Reload"
import WebViewTestGoBack from "./webviewTest/GoBack"
import WebViewTestInjectJavaScriptRef from "./webviewTest/InjectJavaScriptRef"
import WebViewTestinjectStopLoading from "./webviewTest/StopLoading"
import WebViewTestGoForward from "./webviewTest/GoForward"
import WebViewTestLoadUrl from './webviewTest/LoadUrl';
import WebViewTestRequestFocusRef from "./webviewTest/RequestFocus"
import WebViewTestClearCacheRef from './webviewTest/CacheEnabled';
import WebViewTestClearHistory from "./webviewTest/ClearHistory"
import WebViewTestOnLoadProgress from './webviewTest/OnLoadProgress'
import WebViewTestOnScroll from './webviewTest/OnScroll'
import WebViewTestOnError from "./webviewTest/OnError"
import WebViewTestOnLoad from "./webviewTest/OnLoad"
import WebViewTestOnLoadEnd from "./webviewTest/OnLoadEnd"
import WebViewTestOnHttpError from "./webviewTest/OnHttpError"
import WebViewTestGeolocationEnabled from "./webviewTest/GeolocationEnabled"
import WebViewTestFraudulentWebsiteWarningEnabled from "./webviewTest/FraudulentWebsiteWarningEnabled"
import WebViewTestSetThirdPartyCookiesEnabled from "./webviewTest/SetThirdPartyCookiesEnabled"
import WebViewTestForceDarkOn from "./webviewTest/ForceDarkOn"
import WebViewTestMinimumFontSize from "./webviewTest/MinimumFontSize"
import WebViewTestOnLoadStart from "./webviewTest/OnLoadStart"
import WebViewTestOnBody from "./webviewTest/Body"
import LoadEndAfterOnprogressChange from "./webviewTest/LoadEndAfterOnprogressChange"


function TestPage() {
  return (
    <SafeAreaView>

      <NavigationContainer >
        <PortalProvider>
          <View id="__harmony::ready" style={{ height: 100 }}>
            <Page name="EXAMPLE: WebViewTestSource">
              <WebViewTestSource />
            </Page>
            <Page name="EXAMPLE: WebViewTestIncognito">
              <WebViewTestIncognito />
            </Page>
            <Page name="EXAMPLE: WebViewTestDomStorageEnabled">
              <WebViewTestDomStorageEnabled />
            </Page>
            <Page name="EXAMPLE: WebViewTestOnMessage">
              <WebViewTestOnMessage />
            </Page>
            <Page name="EXAMPLE: WebViewTestJavaScriptEnabled">
              <WebViewTestJavaScriptEnabled />
            </Page>
            <Page name="EXAMPLE: WebViewTestTextZoom">
              <WebViewTestTextZoom />
            </Page>
            <Page name="EXAMPLE: WebViewTestScalesPageToFit">
              <WebViewTestScalesPageToFit />
            </Page>
            <Page name="EXAMPLE: WebViewTestInjectJavaScript">
              <WebViewTestInjectJavaScript />
            </Page>
            <Page name="EXAMPLE: WebViewTestUserAgent">
              <WebViewTestUserAgent />
            </Page>
            <Page name="EXAMPLE: WebViewTestApplicationNameForUserAgent">
              <WebViewTestApplicationNameForUserAgent />
            </Page>
            <Page name="EXAMPLE: WebViewTestIgnoreSilentHardwareSwitch">
              <WebViewTestIgnoreSilentHardwareSwitch />
            </Page>
            <Page name="EXAMPLE: WebViewTestReload">
              <WebViewTestReload />
            </Page>

            <Page name="EXAMPLE: WebViewTestGoBack">
              <WebViewTestGoBack />
            </Page>
            <Page name="EXAMPLE: WebViewTestInjectJavaScriptRef">
              <WebViewTestInjectJavaScriptRef />
            </Page>
            <Page name="EXAMPLE: WebViewTestinjectStopLoading">
              <WebViewTestinjectStopLoading />
            </Page>

            <Page name="EXAMPLE: WebViewTestGoForward">
              <WebViewTestGoForward />
            </Page>

            <Page name="EXAMPLE: WebViewTestLoadUrl">
              <WebViewTestLoadUrl />
            </Page>

            <Page name="EXAMPLE: WebViewTestRequestFocusRef">
              <WebViewTestRequestFocusRef />
            </Page>

            <Page name="EXAMPLE: WebViewTestClearCacheRef">
              <WebViewTestClearCacheRef />
            </Page>

            <Page name="EXAMPLE: WebViewTestClearHistory">
              <WebViewTestClearHistory />
            </Page>

            <Page name="EXAMPLE: WebViewTestOnLoadProgress">
              <WebViewTestOnLoadProgress />
            </Page>

            <Page name="EXAMPLE: WebViewTestOnScroll">
              <WebViewTestOnScroll />
            </Page>

            <Page name="EXAMPLE: WebViewTestOnLoad">
              <WebViewTestOnLoad />
            </Page>

            <Page name="EXAMPLE: WebViewTestOnLoadEnd">
              <WebViewTestOnLoadEnd />
            </Page>

            <Page name="EXAMPLE: WebViewTestOnError">
              <WebViewTestOnError />
            </Page>

            <Page name="EXAMPLE: WebViewTestOnHttpError">
              <WebViewTestOnHttpError />
            </Page>

            <Page name="EXAMPLE: WebViewTestGeolocationEnabled">
              <WebViewTestGeolocationEnabled />
            </Page>
            
            <Page name="EXAMPLE: WebViewTestFraudulentWebsiteWarningEnabled">
              <WebViewTestFraudulentWebsiteWarningEnabled />
            </Page> 
            <Page name="EXAMPLE: WebViewTestSetThirdPartyCookiesEnabled">
              <WebViewTestSetThirdPartyCookiesEnabled />
            </Page> 
            <Page name="EXAMPLE: WebViewTestForceDarkOn">
              <WebViewTestForceDarkOn />
            </Page> 
            <Page name="EXAMPLE: WebViewTestMinimumFontSize">
              <WebViewTestMinimumFontSize />
            </Page> 
            <Page name="EXAMPLE: WebViewTestOnLoadStart">
              <WebViewTestOnLoadStart />
            </Page> 

            <Page name="EXAMPLE: WebViewTestOnBody">
              <WebViewTestOnBody />
            </Page> 
            <Page name="EXAMPLE: LoadEndAfterOnprogressChange">
              <LoadEndAfterOnprogressChange />
            </Page> 
            
          </View>
        </PortalProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default TestPage;



export const displayName = 'react-native-webview';
export const framework = 'React';
export const category = 'basic';
export const title = 'react-native-webview';
export const documentationURL = 'https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-webview.md';
export const description = 'react-native-webview';

export const examples = [
    {
        title: 'react-native-webview',
        render: function (): any {
            return <TestPage />;
        },
    },
];

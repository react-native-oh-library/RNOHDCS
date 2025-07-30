import React from "react";
import { ScrollView } from "react-native";
export const WebViewDemoTwo = () => {
  return (
      <WebView source={{ uri: "https://reactnative.dev/" }}
        onLoadStart={(e) => {
          console.log('Webview LoadStart:', new Date().getTime());
        }}

        onLoadingStart={(e) => {
          console.log('Webview Loading:', (e.nativeEvent.progress * 100 + "%"));
        }}
        
        onLoadEnd={(e) => {
          console.log('Webview LoadEnd:', new Date().getTime());
		    }}
      />
  );
}
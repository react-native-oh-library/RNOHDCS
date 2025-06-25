import { View, Button, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useState, ReactElement } from 'react';
import { WebView } from "react-native-webview";
   
export default WebViewDemo = (): ReactElement => {
    let uri = 'https://jsonplaceholder.typicode.com/posts';
    //loadHtml
    let source = { uri: "https://jsonplaceholder.typicode.com/posts", method: '', body: '', html: '<html><body bgcolor="white">Source:<pre>source</pre></body></html>' };
    const [data, setData] = useState(source);

  return (
        <>
        <Button title='loadUrl(需要网络)' onPress={() => { 
            let source= { uri: uri, method:'', body: '', html: '' };
            setData(source);
         }}></Button>
        <Text></Text>
        <Button title='post(需要网络)' onPress={() => { 
	    let p = "Name=test&Password=test";
            let source = { uri: uri, method: 'POST', body: p, html: '' };
            setData(source);
         }}></Button>
         <Text></Text>
         <Button title='loadHtml' onPress={() => { 
            let source = { uri: uri, method: '', body: '', html: '<html><body bgcolor="white">Source:<pre>source</pre></body></html>' };
            setData(source);
         }}></Button>
        <WebView source={data} startInLoadingState={true} style={{height: 100}}/>
        </>  
    );
};
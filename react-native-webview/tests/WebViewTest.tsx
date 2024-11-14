import WebView from 'react-native-webview';
import { ScrollView, StatusBar, View, Button, Text, TextInput } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';
import React, { useRef, useState } from 'react';

export default function WebViewTest() {
  const reloadRef = useRef<any>();

  const goBackRef = useRef<any>();

  const injectJavaScriptRef = useRef<any>();

  const stopLoadingRef = useRef<any>();

  const goForwardRef = useRef<any>();

  const loadUrlRef = useRef<any>();

  const requestFocusRef = useRef<any>();

  const clearCacheRef = useRef<any>();

  const clearHistoryRef = useRef<any>();

  const webViewPostMessage = useRef<any>();
  const introduceTemplate = `<html>

  <head>
      <meta name="viewport"
          content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
      <style>
          html,
          body {
              height: 100%;
              background-color: transparent
          }
  
          * {
              padding: 0;
              margin: 0
          }
  
          img {
              width: 100%;
              height: auto
          }
          #onPostMessage{
            background: red;
          }
      </style>
      
  </head>
  
  <body>
      <button style="padding-bottom: 90px" id="onPostMessage" style="backgroundColor:'red'">点击触发</button>
      发送数据{a: '123', b: '456'}
      <script>
  
          let onPostMessage = document.getElementById('onPostMessage');
          onPostMessage.onclick = function(){
              window.ReactNativeWebView.postMessage(JSON.stringify({a: '123', b: '456'}));
          }
          
      </script>
  </body>
  
  </html>
  `;

  interface ControlProps {
    backward: () => void;
  }


  const goBack = () => {
    goBackRef?.current.goBack();
  };

  const stopLoading = () => {
    stopLoadingRef?.current.stopLoading();
  };

  const goForward = () => {
    goForwardRef?.current.goForward();
  };

  const reload = () => {
    reloadRef?.current.reload();
  };

  const runJS = () => {
    injectJavaScriptRef?.current.injectJavaScript('window.location.reload()');
  };

  const loadUrl = () => {
    loadUrlRef.current.loadUrl('https://reactnative.dev/');
  };

  const requestFocus = () => {
    requestFocusRef?.current.requestFocus();
  };

  const clearCache = () => {
    clearCacheRef?.current.clearCache(true);
  };

  const clearHistory = () => {
    clearHistoryRef?.current.clearHistory();
  };

  return (
    <View style={{ paddingBottom: 100, paddingTop: 0 }}>
      <StatusBar barStyle="dark-content"></StatusBar>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Tester>
          <TestCase
            key={'webview api uri'}
            itShould={`webview api uri`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView source={{ uri: 'www.baidu.com' }} />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api incognito'}
            itShould={`webview api incognito`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView source={{ uri: 'https://www.chsi.com.cn/' }} incognito={true} />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            key={'webview api domStorageEnabled'}
            itShould={`webview api domStorageEnabled`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const webView1 = useRef<any>();
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    ref={webView1}
                    domStorageEnabled={true}
                  />
                  <Button title='弹窗' onPress={() => {
                    webView1?.current.injectJavaScript("localStorage.setItem('name', 'John');alert('name:=='+localStorage.getItem('name'));");
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api postMessage and onMessage'}
            itShould={`webview api postMessage and onMessage`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {

              const [event, setEvent] = useState({});
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <Text>{JSON.stringify(event)}</Text>
                  <WebView
                    ref={webViewPostMessage}
                    domStorageEnabled={true}
                    onMessage={event => {
                      // const {data} = event.nativeEvent;
                      setEvent(event.nativeEvent.data)
                      console.log('String message from the WebView: ', event.nativeEvent.data);
                    }}
                    source={{ html: introduceTemplate }}
                  />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api javaScriptEnabled'}
            itShould={`webview api javaScriptEnabled`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const webView1 = useRef<any>();
              const webView2 = useRef<any>();
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView
                    ref={webView1}
                    source={{ uri: 'www.baidu.com' }}
                    javaScriptEnabled={false}
                  />
                  <WebView
                    ref={webView2}
                    source={{ uri: 'www.baidu.com' }}
                    javaScriptEnabled={true}
                  />
                  <Button title='弹窗' onPress={() => {
                    webView1.current.injectJavaScript(`
                      alert('JavaScript11111111 is enabled!');
                    `);
                    webView2.current.injectJavaScript(`
                    alert('JavaScript22222222 is enabled!');
                  `);
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            key={'webview api textZoom'}
            itShould={`webview api textZoom`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (

                <View style={{ padding: 20, height: 600 }}>
                  <Text>textZoom:10</Text>
                  <WebView source={{ uri: 'https://developer.huawei.com/consumer/cn/devservice/use' }} textZoom={10} />
                  <Text>textZoom:150</Text>
                  <WebView source={{ uri: 'https://developer.huawei.com/consumer/cn/devservice/use' }} textZoom={150} />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api scalesPageToFit'}
            itShould={`webview api scalesPageToFit`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const webViewRef = useRef<any>(null);

              const onZoomOutPress = () => {
                webViewRef.current.injectJavaScript(`
                  var meta = document.createElement('meta');
                  meta.setAttribute('name', 'viewport');
                  meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0');
                  document.getElementsByTagName('head')[0].appendChild(meta);
                `);
              };

              const onZoomInPress = () => {
                webViewRef.current.injectJavaScript(`
                  var meta = document.createElement('meta');
                  meta.setAttribute('name', 'viewport');
                  meta.setAttribute('content', 'width=device-width, initial-scale=2, maximum-scale=2, user-scalable=0');
                  document.getElementsByTagName('head')[0].appendChild(meta);
                `);
              };
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
                    <Button title="Zoom Out" onPress={onZoomOutPress} />
                    <Button title="Zoom In" onPress={onZoomInPress} />
                  </View>
                  <WebView
                    ref={webViewRef}
                    source={{ uri: 'https://www.baidu.com' }}
                    scalesPageToFit={true}
                    style={{ flex: 1 }}
                  />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api injectJavaScript'}
            itShould={`webview api injectJavaScript`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    injectedJavaScript={`alert('this alert for webview api injectJavaScript test')`}
                  />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api userAgent'}
            itShould={`webview api userAgent`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const webView = useRef<any>();
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    ref={webView}
                    userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
                  />
                  <Button title='获取userAgent' onPress={() => {
                    webView?.current.injectJavaScript(`var userAgent = navigator.userAgent;
                     console.log("获取userAgent",userAgent);`);
                  }}></Button>
                  <Text>'在控制台搜索:获取userAgent'</Text>

                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            key={'webview api ref applicationNameForUserAgent'}
            itShould={`webview api ref applicationNameForUserAgent`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [event, setEvent] = useState({});
              const webView = useRef<any>();
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    ref={webView}
                    applicationNameForUserAgent={'xxxxx'}
                  />
                  <Button title='获取userAgent' onPress={() => {
                    webView?.current.injectJavaScript(`var userAgent = navigator.userAgent;
                     console.log("获取applicationNameForUserAgent",userAgent);`);
                  }}></Button>
                  <Text>'在控制台搜索:获取applicationNameForUserAgent'</Text>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            key={'webview api ignoreSilentHardwareSwitch'}
            itShould={`webview api ignoreSilentHardwareSwitch`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <Text> ignoreSilentHardwareSwitch=true</Text>
                  <WebView
                    source={{ uri: 'https://res.vmallres.com/uomcdn/CN/cms/202210/C75C7E20060F3E909F2998E13C3ABC03.mp4' }}
                    ignoreSilentHardwareSwitch={true} />
                  <Text> ignoreSilentHardwareSwitch=false</Text>
                  <WebView
                    source={{ uri: 'https://res.vmallres.com/uomcdn/CN/cms/202210/C75C7E20060F3E909F2998E13C3ABC03.mp4' }}
                    ignoreSilentHardwareSwitch={false} />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref reload'}
            itShould={`webview api ref reload`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView source={{ uri: 'www.baidu.com' }} ref={reloadRef} />
                  <Button title={'reload'} onPress={reload}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref goBack'}
            itShould={`webview api ref goBack`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView source={{ uri: 'www.baidu.com' }} ref={goBackRef} />
                  <Button title={'goBack'} onPress={goBack}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref injectJavaScriptRef'}
            itShould={`webview api ref injectJavaScriptRef`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    ref={injectJavaScriptRef}
                  />
                  <Button
                    title={'injectJavaScriptRef'}
                    onPress={runJS}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref stopLoading'}
            itShould={`webview api ref stopLoading`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [flg, setFlg] = useState(false)
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    ref={stopLoadingRef}
                    onLoadProgress={() => {
                      if (flg) {
                        stopLoading()
                      }
                    }}
                  />
                  <Button title='切换' onPress={() => {
                    setFlg(!flg)
                    stopLoadingRef?.current.reload()
                  }}></Button>
                  <Text>{flg ? '停止' : '放行'}</Text>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref goForward'}
            itShould={`webview api ref goForward`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView source={{ uri: 'www.baidu.com' }} ref={goForwardRef} />
                  <Button title={'goForward'} onPress={goForward}></Button>
                  <Button title={'goBack'} onPress={()=>{
                    goForwardRef?.current.goBack()
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref loadUrl'}
            itShould={`webview api ref loadUrl`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView source={{ uri: 'www.baidu.com' }} ref={loadUrlRef} />
                  <Button title={'loadUrl'} onPress={loadUrl}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            key={'webview api ref requestFocus'}
            itShould={`webview api ref requestFocus`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    ref={requestFocusRef}
                  />
                  <Button
                    title={'requestFocus'}
                    onPress={requestFocus}></Button>
                  <TextInput style={{ backgroundColor: 'green' }} placeholder='点我聚焦，输入框聚焦' />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref clearCache cacheEnabled'}
            itShould={`webview api ref clearCache value LOAD_CACHE_ELSE_NETWORK  cacheEnabled value true`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              let [start, setstart] = useState<number>(0)
              let [end, setend] = useState<number>(0)
              let [cacheEnabled, setcacheEnabled] = useState<boolean>(true)
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView
                    source={{ uri: 'https://wallpapersite.com/' }}
                    ref={clearCacheRef}
                    cacheMode="LOAD_CACHE_ELSE_NETWORK"
                    cacheEnabled={true}
                    onLoadStart={() => {
                      setstart(new Date().getTime())
                    }}
                    onLoadEnd={(e) => {
                      console.log('总耗时', new Date().getTime() - start);
                      setend(new Date().getTime() - start)
                    }}
                  />
                  <Text>总耗时：{end}</Text>
                  <Button title={'clearCache'} onPress={clearCache}></Button>
                  <Button title={'reload'} onPress={() => {
                    setcacheEnabled(cacheEnabled)
                    clearCacheRef?.current.reload();
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref clearHistory'}
            itShould={`webview api ref clearHistory`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    ref={clearHistoryRef}
                  />
                  <Button
                    title={'clearHistory'}
                    onPress={clearHistory}></Button>
                  <Button
                    title={'goBack'}
                    onPress={() => {
                      clearHistoryRef?.current.goBack();
                    }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref onLoadProgress'}
            itShould={`webview api ref onLoadProgress`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    onLoadProgress={e => {
                      setEvent(e.nativeEvent);
                    }}
                  />
                  <Text>{JSON.stringify(event)}</Text>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref onScroll'}
            itShould={`webview api ref onScroll`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    onScroll={e => {
                      setEvent(e.nativeEvent);
                    }}
                  />
                  <Text>{JSON.stringify(event)}</Text>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref onLoad'}
            itShould={`webview api ref onLoad`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    onLoad={e => {
                      setEvent(e.nativeEvent);
                    }}
                  />
                  <Text>{JSON.stringify(event)}</Text>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref onLoadStart'}
            itShould={`webview api ref onLoadStart`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    onLoadStart={e => {
                      setEvent(e.nativeEvent);
                    }}
                  />
                  <Text>{JSON.stringify(event)}</Text>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref onLoadEnd'}
            itShould={`webview api ref onLoadEnd`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    onLoadEnd={e => {
                      setEvent(e.nativeEvent);
                    }}
                  />
                  <Text>{JSON.stringify(event)}</Text>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref onLoadStart'}
            itShould={`webview api ref onLoadStart`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    onLoadStart={e => {
                      setEvent(e.nativeEvent);
                    }}
                  />
                  <Text>{JSON.stringify(event)}</Text>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref onError'}
            itShould={`webview api ref onError`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView
                    source={{ uri: 'xxxx.baidu.com' }}
                    onError={e => {
                      setEvent(e.nativeEvent);
                      console.log('errorrr,e', e.nativeEvent);

                    }}
                  />
                  <Text>{JSON.stringify(event)}</Text>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref onHttpError'}
            itShould={`webview api ref onHttpError`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView
                    source={{ uri: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-webview-V6' }}
                    onHttpError={e => {
                      console.log('httperror', e);

                      setEvent(e);
                    }}
                  />
                  <Text>{JSON.stringify(event)}</Text>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            key={'webview api ref geolocationEnabled'}
            itShould={`webview api ref geolocationEnabled`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [event, setEvent] = useState({});
              const webView = useRef<any>();
           
             
           
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView
                    source={{ uri: 'm.amap.com' }}
                    geolocationEnabled={true}
                  />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref fraudulentWebsiteWarningEnabled'}
            itShould={`webview api ref fraudulentWebsiteWarningEnabled`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    fraudulentWebsiteWarningEnabled={true}
                  />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref setThirdPartyCookiesEnabled'}
            itShould={`webview api ref setThirdPartyCookiesEnabled`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    setThirdPartyCookiesEnabled={true}
                  />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref forceDarkOn'}
            itShould={`webview api ref forceDarkOn`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView source={{ uri: 'www.baidu.com' }} forceDarkOn={true} />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref minimumFontSize'}
            itShould={`webview api ref minimumFontSize`}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{ padding: 20, height: 600 }}>
                  <WebView
                    source={{ uri: 'www.baidu.com' }}
                    minimumFontSize={50}
                  />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
        </Tester>
      </ScrollView>
    </View>
  );
}
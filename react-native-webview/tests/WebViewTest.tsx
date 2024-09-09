import WebView from 'react-native-webview';
import {ScrollView, StatusBar, View, Button, Text} from 'react-native';
import {TestCase, Tester} from '@rnoh/testerino';
import React, {useRef, useState} from 'react';

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

  interface ControlProps {
    backward: () => void;
  }

  const webView = useRef<any>();

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
    clearCacheRef?.current.clearCache();
  };

  const clearHistory = () => {
    clearHistoryRef?.current.clearHistory();
  };

  return (
    <View style={{paddingBottom: 100, paddingTop: 0}}>
      <StatusBar barStyle="dark-content"></StatusBar>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Tester>
          <TestCase
            key={'webview api uri'}
            itShould={`webview api uri`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView source={{uri: 'www.baidu.com'}} />
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api incognito'}
            itShould={`webview api incognito`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView source={{uri: 'www.baidu.com'}} incognito={true} />
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            key={'webview api domStorageEnabled'}
            itShould={`webview api domStorageEnabled`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    domStorageEnabled={true}
                  />
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api javaScriptEnabled'}
            itShould={`webview api javaScriptEnabled`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    javaScriptEnabled={true}
                  />
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api cacheMode'}
            itShould={`webview api cacheEnabled`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    cacheEnabled={true}
                  />
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api textZoom'}
            itShould={`webview api textZoom`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView source={{uri: 'www.baidu.com'}} textZoom={40} />
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api scalesPageToFit'}
            itShould={`webview api scalesPageToFit`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    scalesPageToFit={true}
                  />
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api injectJavaScript'}
            itShould={`webview api injectJavaScript`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    injectedJavaScript={`alert('injectedJavaScript')`}
                  />
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api userAgent'}
            itShould={`webview api userAgent`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView source={{uri: 'www.baidu.com'}} userAgent="xxxxx" />
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref reload'}
            itShould={`webview api ref`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView source={{uri: 'www.baidu.com'}} ref={reloadRef} />
                  <Button title={'reload'} onPress={reload}></Button>
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref goBack'}
            itShould={`webview api ref goBack`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView source={{uri: 'www.baidu.com'}} ref={goBackRef} />
                  <Button title={'goBack'} onPress={goBack}></Button>
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref injectJavaScriptRef'}
            itShould={`webview api ref injectJavaScriptRef`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    ref={injectJavaScriptRef}
                  />
                  <Button
                    title={'injectJavaScriptRef'}
                    onPress={runJS}></Button>
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref stopLoading'}
            itShould={`webview api ref stopLoading`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    ref={stopLoadingRef}
                  />
                  <Button title={'stopLoading'} onPress={stopLoading}></Button>
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref stopLoading'}
            itShould={`webview api ref stopLoading`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    ref={stopLoadingRef}
                  />
                  <Button title={'stopLoading'} onPress={stopLoading}></Button>
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref goForward'}
            itShould={`webview api ref goForward`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView source={{uri: 'www.baidu.com'}} ref={goForwardRef} />
                  <Button title={'goForward'} onPress={goForward}></Button>
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref goForward'}
            itShould={`webview api ref goForward`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView source={{uri: 'www.baidu.com'}} ref={goForwardRef} />
                  <Button title={'goForward'} onPress={goForward}></Button>
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref loadUrl'}
            itShould={`webview api ref loadUrl`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView source={{uri: 'www.baidu.com'}} ref={loadUrlRef} />
                  <Button title={'loadUrl'} onPress={loadUrl}></Button>
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref requestFocus'}
            itShould={`webview api ref requestFocus`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    ref={requestFocusRef}
                  />
                  <Button
                    title={'requestFocus'}
                    onPress={requestFocus}></Button>
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref requestFocus'}
            itShould={`webview api ref requestFocus`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    ref={requestFocusRef}
                  />
                  <Button
                    title={'requestFocus'}
                    onPress={requestFocus}></Button>
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref clearCache'}
            itShould={`webview api ref clearCache`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    ref={clearCacheRef}
                  />
                  <Button title={'clearCache'} onPress={clearCache}></Button>
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref clearHistory'}
            itShould={`webview api ref clearHistory`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    ref={clearHistoryRef}
                  />
                  <Button
                    title={'clearHistory'}
                    onPress={clearHistory}></Button>
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref onLoadProgress'}
            itShould={`webview api ref onLoadProgress`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    onLoadProgress={e => {
                      setEvent(e);
                    }}
                  />
                  <Text>{JSON.stringify(event)}</Text>
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref onScroll'}
            itShould={`webview api ref onScroll`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    onScroll={e => {
                      setEvent(e);
                    }}
                  />
                  <Text>{JSON.stringify(event)}</Text>
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref onLoad'}
            itShould={`webview api ref onLoad`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    onLoad={e => {
                      setEvent(e);
                    }}
                  />
                  <Text>{JSON.stringify(event)}</Text>
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref onLoadEnd'}
            itShould={`webview api ref onLoadEnd`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    onLoadEnd={e => {
                      setEvent(e);
                    }}
                  />
                  <Text>{JSON.stringify(event)}</Text>
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref onLoadStart'}
            itShould={`webview api ref onLoadStart`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    onLoadStart={e => {
                      setEvent(e);
                    }}
                  />
                  <Text>{JSON.stringify(event)}</Text>
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref onError'}
            itShould={`webview api ref onError`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    onError={e => {
                      setEvent(e);
                    }}
                  />
                  <Text>{JSON.stringify(event)}</Text>
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref onHttpError'}
            itShould={`webview api ref onHttpError`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    onHttpError={e => {
                      setEvent(e);
                    }}
                  />
                  <Text>{JSON.stringify(event)}</Text>
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref applicationNameForUserAgent'}
            itShould={`webview api ref applicationNameForUserAgent`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    applicationNameForUserAgent={'xxxxx'}
                  />
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref mediaPlaybackRequiresUserAction'}
            itShould={`webview api ref mediaPlaybackRequiresUserAction`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    applicationNameForUserAgent={true}
                  />
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref geolocationEnabled'}
            itShould={`webview api ref geolocationEnabled`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    geolocationEnabled={true}
                  />
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref geolocationEnabled'}
            itShould={`webview api ref geolocationEnabled`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    geolocationEnabled={true}
                  />
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref fraudulentWebsiteWarningEnabled'}
            itShould={`webview api ref fraudulentWebsiteWarningEnabled`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    fraudulentWebsiteWarningEnabled={true}
                  />
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref setThirdPartyCookiesEnabled'}
            itShould={`webview api ref setThirdPartyCookiesEnabled`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    setThirdPartyCookiesEnabled={true}
                  />
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref forceDarkOn'}
            itShould={`webview api ref forceDarkOn`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView source={{uri: 'www.baidu.com'}} forceDarkOn={true} />
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'webview api ref minimumFontSize'}
            itShould={`webview api ref minimumFontSize`}
            tags={['C_API']}
            initialState={false}
            arrange={({setState}) => {
              const [event, setEvent] = useState({});
              return (
                <View style={{padding: 20, height: 600}}>
                  <WebView
                    source={{uri: 'www.baidu.com'}}
                    minimumFontSize={50}
                  />
                </View>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.be.true;
            }}
          />
        </Tester>
      </ScrollView>
    </View>
  );
}

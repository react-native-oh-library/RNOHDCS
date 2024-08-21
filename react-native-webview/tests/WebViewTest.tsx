import WebView from "react-native-webview";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import { TestCase, Tester } from "@rnoh/testerino";

export default function WebViewTest() {
    return (
        <View>
            <StatusBar barStyle="dark-content" ></StatusBar>
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                >
                    <Tester>
                        <TestCase
                            key={"webview api uri"}
                            itShould={`webview api uri`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ padding: 20, height: 300 }}>
                                        <WebView source={{ uri: "www.baidu.com" }} />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />


                        <TestCase
                            key={"webview api incognito"}
                            itShould={`webview api incognito`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ padding: 20, height: 300 }}>
                                        <WebView source={{ uri: "www.baidu.com" }} incognito={true} />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />
                        <TestCase
                            key={"webview api domStorageEnabled"}
                            itShould={`webview api domStorageEnabled`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ padding: 20, height: 300 }}>
                                        <WebView source={{ uri: "www.baidu.com" }} domStorageEnabled={true} />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />


                        <TestCase
                            key={"webview api javaScriptEnabled"}
                            itShould={`webview api javaScriptEnabled`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ padding: 20, height: 300 }}>
                                        <WebView source={{ uri: "www.baidu.com" }} javaScriptEnabled={true} />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />

                        <TestCase
                            key={"webview api cacheEnabled"}
                            itShould={`webview api cacheEnabled`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ padding: 20, height: 300 }}>
                                        <WebView source={{ uri: "www.baidu.com" }} cacheEnabled={true} />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />

                        <TestCase
                            key={"webview api cacheEnabled"}
                            itShould={`webview api cacheEnabled`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ padding: 20, height: 300 }}>
                                        <WebView source={{ uri: "www.baidu.com" }} cacheEnabled={true} />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />


                        <TestCase
                            key={"webview api cacheMode"}
                            itShould={`webview api cacheMode`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ padding: 20, height: 300 }}>
                                        <WebView source={{ uri: "www.baidu.com" }} cacheEnabled={true} />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />

                        <TestCase
                            key={"webview api textZoom"}
                            itShould={`webview api textZoom`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ padding: 20, height: 300 }}>
                                        <WebView source={{ uri: "www.baidu.com" }} textZoom={40} />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />

                        <TestCase
                            key={"webview api textZoom"}
                            itShould={`webview api textZoom`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ padding: 20, height: 300 }}>
                                        <WebView source={{ uri: "www.baidu.com" }} textZoom={100} />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />


                        <TestCase
                            key={"webview api scalesPageToFit"}
                            itShould={`webview api scalesPageToFit`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ padding: 20, height: 300 }}>
                                        <WebView source={{ uri: "www.baidu.com" }} scalesPageToFit={true} />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />

                        <TestCase
                            key={"webview api scalesPageToFit"}
                            itShould={`webview api scalesPageToFit`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ padding: 20, height: 300 }}>
                                        <WebView source={{ uri: require('../assets/index.html')}} />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />



                    </Tester>

                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
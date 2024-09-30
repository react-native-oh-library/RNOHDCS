import React, { useState } from 'react';
import * as htmlparser2 from 'htmlparser2';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Animated,
    Image,
} from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { parseDocument, createDocumentStream, parseFeed } from "htmlparser2";
import CircularJSON from "circular-json";

export const HtmlParser2Test = () => {
    return (
        <Tester>
            <ScrollView>
                <TestSuite name="htmlParser2">
                    <TestCase
                        key={"getInitStatus_1"}
                        itShould={`Use htmlparser2 to parse html`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [parsedContent, setParsedContent] = useState('');
                            const htmlFragment = "Xyz <script type='text/javascript'>const foo = '111<<bar>>';</script>"
                            function paserWirte() {
                                const parser = new htmlparser2.Parser({
                                    onopentag(name, attributes) {
                                        if (name === 'script' && attributes.type === 'text/javascript') {
                                            console.log('JS! Hooray!');
                                            setParsedContent(parsedContent => parsedContent + 'JS! Hooray!')
                                        }
                                    },
                                    ontext(text) {
                                        console.log('-->', text);
                                        setParsedContent(parsedContent => parsedContent + text);
                                    },
                                    onclosetag(tagname) {
                                        if (tagname === 'script') {
                                            console.log("That's it?!");
                                            setParsedContent(parsedContent => parsedContent + "That's it?!");
                                            setState(true);
                                        }
                                    },
                                });
                                parser.write(htmlFragment);
                                parser.end();
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View>
                                        <Text style={{ color: 'black', marginTop: 20 }}>被解析html标签：{htmlFragment}</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            paserWirte()
                                        }}>解析</Text>
                                    </View>
                                    <Text style={{ color: 'black', marginTop: 20 }}>{parsedContent}</Text>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>

                <TestSuite name="htmlParser2">
                    <TestCase
                        key={"getInitStatus_2"}
                        itShould={`parseDocument and CircularJSON`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [parsedContent, setParsedContent] = useState('');

                            const html = '<div data-foo="In the end, it doesn\'t really matter."></div><div data-foo="Indeed-that\'s a delicate matter.">'
                            const dom = parseDocument(html);
                            function paserWirte() {
                                setParsedContent(CircularJSON.stringify(dom));
                                setState(true);
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View>
                                        <Text style={{ color: 'black', marginTop: 20  }}>被解析html标签：{html}</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            paserWirte()
                                        }}>parseDocument</Text>
                                    </View>
                                    <Text style={{ color: 'black', marginTop: 20  }}>{parsedContent}</Text>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>

                <TestSuite name="htmlParser2">
                    <TestCase
                        key={"getInitStatus_3"}
                        itShould={`Create a compelling stream using createDocumentStream`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [content, setContent] = useState('null');
                            const html = '<html><head><title>Test</title></head><body><p>Hello, world!</p></body></html>';
                            const options = { decodeEntities: true };
                            const callback = (error, document) => {
                                if (error) {
                                    console.error(error);
                                } else {
                                    setContent(document);
                                    console.log('document', document);
                                }
                            };
                            const elementCallback = (element) => {
                                console.log('element', element)
                            };
                        
                            const parserFunc = () => {
                                const parser = createDocumentStream(callback, options, elementCallback);
                                parser.write(html);
                                parser.end();
                                setState(true);
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View>
                                        <Text style={{ color: 'black', marginTop: 20 }}>被解析html标签：{html}</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                           parserFunc()
                                        }}>createDocumentStream</Text>
                                    </View>
                                    <Text style={{ color: 'black', marginTop: 20 }}>{CircularJSON.stringify(content)}</Text>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>
                
                <TestSuite name="htmlParser2">
                    <TestCase
                        key={"getInitStatus_4"}
                        itShould={`Use parseFeed to parse`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [feedText, setFeedText] = useState('null');
                            const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
                            <rss version="2.0">
                              <channel>
                                <title>Example RSS feed</title>
                                <link>http://example.com/</link>
                                <description>An example RSS feed</description>
                                <item>
                                  <title>Example item</title>
                                  <link>http://example.com/item1</link>
                                  <description>An example item</description>
                                </item>
                              </channel>
                            </rss>`;
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View>
                                        <Text style={{ color: 'black', marginTop: 20 }}>被解析xml标签：{rssFeed}</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setFeedText(parseFeed(rssFeed));
                                            setState(true);
                                        }}>parseFeed</Text>
                                    </View>
                                    <Text style={{ color: 'black', marginTop: 20 }}>{CircularJSON.stringify(feedText)}</Text>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>
            </ScrollView>
        </Tester>
    );
}



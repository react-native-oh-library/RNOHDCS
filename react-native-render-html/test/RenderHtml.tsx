import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  TouchableHighlight,
  TouchableHighlightProps,
  Platform,
  Button,
  Alert
} from 'react-native';
import {
  defaultHTMLElementModels,
  HTMLContentModel,
  TBlock
} from '@native-html/transient-render-engine';
import { findOne, isTag } from 'domutils';
import RenderHtml, { Node, defaultSystemFonts, NodeWithChildren, CustomBlockRenderer } from 'react-native-render-html';
import { TestCase, Tester, TestSuite } from '@rnoh/testerino';

const TestRenderHtml = () => {
  const source = {
    html: `
<p style='text-align:center;'>
  Hello World!
</p>`,
  };
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="react-native-render-html">
          <TestCase
            key={'source'}
            itShould={'source'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [btnState, setBtnState] = useState(false)
              return (
                <View style={{ flex: 1 }}>
                  <Button title='soure' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }
                  } />
                  {btnState === true ? <RenderHtml source={source} /> : null}
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            key={'allowedStyles'}
            itShould={'allowedStyles Attributes fontSize add to Trustlist'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const { width } = useWindowDimensions();
              const [btnState, setBtnState] = useState(false)
              return (
                <View style={{ flex: 1 }}>
                  <Button title='allowedStyles' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {
                    btnState === true ? <RenderHtml
                      contentWidth={width}
                      allowedStyles={['fontSize']}
                      source={{
                        html: '<div style="font-size: 16px; color: red; ">Hello World!</div>',
                      }}
                    /> : <RenderHtml
                      contentWidth={width}
                      source={{
                        html: '<div style="font-size: 16px; color: red; ">Hello World!</div>',
                      }}
                    />
                  }

                  ;
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'baseStyle'}
            itShould={'baseStyle set color attributes'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const { width } = useWindowDimensions()
              const [btnState, setBtnState] = useState(false)
              const baseStyle = {
                color: '#eee',
              };
              const htmlContent = '<p>Hello, world!</p>';
              return (
                <View style={{ flex: 1 }}>
                  <Button title='baseStyle' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {
                    btnState === true ? <RenderHtml
                      baseStyle={baseStyle}
                      source={{ html: htmlContent }}
                    /> : <RenderHtml
                      source={{ html: htmlContent }}
                    />
                  }

                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />


          <TestCase
            key={'bypassAnonymousTPhrasingNodes'}
            itShould={'The most simple one is that itsimplifies the render tree.'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const { width } = useWindowDimensions();
              const [btnState, setBtnState] = useState(false)
              return (
                <View style={{ flex: 1 }}>
                  <Button title='bypassAnonymousTPhrasingNodes' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {
                    btnState === true ? <RenderHtml
                      contentWidth={width}
                      bypassAnonymousTPhrasingNodes={true}
                      source={{
                        html: '<h1><h3>hi</h3></h1>',
                      }}
                    /> : null
                  }

                  ;
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'classesStyles'}
            itShould={'Provide mixed styles'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [btnState, setBtnState] = useState(false)
              const htmlContent = '<div class="myDiv">Hello, world!</div>';
              const styles = {
                myDiv: {
                  backgroundColor: 'blue',
                  color: 'white',
                  padding: 10,
                },
              };
              return (
                <View style={{ flex: 1 }}>
                  <Button title='classesStyles' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {
                    btnState === true ? <RenderHtml
                      classesStyles={styles}
                      source={{ html: htmlContent }}
                    /> : <RenderHtml
                      source={{ html: htmlContent }}
                    />
                  }
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'computeEmbeddedMaxWidth'}
            itShould={'computeEmbeddedMaxWidth Return Width 100'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [btnState, setBtnState] = useState(false)
              const htmlContent = '<p>Hello, world!</p>';
              return (
                <View style={{ flex: 1 }}>
                  <Button title='computeEmbeddedMaxWidth' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {btnState === true ? <RenderHtml
                    computeEmbeddedMaxWidth={(contentWidth = 100) => contentWidth}
                    // computeEmbeddedMaxWidth={contentWidth:100 => {
                    //   // 在这里计算最大宽度并返回
                    //   return contentWidth; // 假设最大宽度为100
                    // }}
                    source={{ html: '<img alt="An image" src="https://img.com/1" />' }}
                  /> :
                    <RenderHtml
                      source={{ html: '<p>An image</p>' }}
                    />
                  }

                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'contentWidth'}
            itShould={'htmlWidth set 50'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [btnState, setBtnState] = useState(false)
              const htmlContent = '<p>Hello, world!</p>';
              return (
                <View style={{ flex: 1 }}>
                  <Button title='contentWidth' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {
                    btnState === true ? <RenderHtml
                      contentWidth={50}
                      source={{
                        html: '<img alt="An image" src="https://img.com/1" />'
                      }} /> : <RenderHtml
                      source={{
                        html: '<p>An image</p>'
                      }} />
                  }

                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'dangerouslyDisableHoisting'}
            itShould={'Disable hoisting'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [btnState, setBtnState] = useState(false)
              const source = `<a href="https://domain.com">
This is
<span>phrasing content</span>
<img src="https://domain.com/logo.jpg" />
    and this is <strong>too</strong>.
</a>`;
              return (
                <View style={{ flex: 1 }}>
                  <Button title='dangerouslyDisableHoisting' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {
                    btnState === true ? <RenderHtml
                      dangerouslyDisableHoisting={true}
                      source={{
                        html: source
                      }} /> : <RenderHtml
                      dangerouslyDisableHoisting={false}
                      source={{
                        html: source
                      }} />
                  }

                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />


          <TestCase
            key={'dangerouslyDisableWhitespaceCollapsing'}
            itShould={'Disable whitespace collapsing'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [btnState, setBtnState] = useState(false)
              const source = `<a href="https://domain.com">
This is
<span>phrasing content</span>
<img src="https://domain.com/logo.jpg" />
    and this is <strong>too</strong>.
</a>`;
              return (
                <View style={{ flex: 1 }}>
                  <Button title='dangerouslyDisableWhitespaceCollapsing' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {
                    btnState ? <RenderHtml
                      dangerouslyDisableWhitespaceCollapsing={true}
                      source={{
                        html: source
                      }} /> : <RenderHtml
                      dangerouslyDisableWhitespaceCollapsing={false}
                      source={{
                        html: source
                      }} />
                  }

                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'defaultTextProps'}
            itShould={'Default props for Text elements in the render tree.'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [btnState, setBtnState] = useState(false)
              const htmlContent = '<p>Hello, world!</p>';
              return (
                <View style={{ flex: 1 }}>
                  <Button title='defaultTextProps' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {
                    btnState === true ? <RenderHtml
                      defaultTextProps={{ style: { color: 'red' } }}
                      source={{ html: htmlContent }}
                    /> : <RenderHtml
                      source={{ html: htmlContent }}
                    />

                  }
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'debug'}
            itShould={'Log to the console a snapshot of the rendered'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [btnState, setBtnState] = useState(false)
              return (
                <View style={{ flex: 1 }}>
                  <Button title='debug' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {
                    btnState === true ? <RenderHtml
                      debug={true}
                      allowedStyles={['fontSize']}
                      source={{
                        html: '<div>debug</div>',
                      }}
                    /> : <RenderHtml
                      debug={false}
                      allowedStyles={['fontSize']}
                      source={{
                        html: '<div style="font-size: 16px; color: red; ">Hello World!</div>',
                      }}
                    />
                  }

                  ;
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'enableExperimentalBRCollapsing'}
            itShould={'ignore `<br>` tags closing an inline formatting context.'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [btnState, setBtnState] = useState(false)
              return (
                <View style={{ flex: 1 }}>
                  <Button title='enableExperimentalBRCollapsing' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {
                    btnState === true ? <RenderHtml
                      enableExperimentalBRCollapsing={false}
                      source={{
                        html: '<p>Hello enableExperimentalBRCollapsing! <br /></p>',
                      }}
                    /> : <RenderHtml
                      enableExperimentalBRCollapsing={true}
                      source={{
                        html: '<p>Hello enableExperimentalBRCollapsing! <br /></p>',
                      }}
                    />
                  }

                  ;
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'defaultViewProps'}
            itShould={'Default props for View elements in the render tree'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [btnState, setBtnState] = useState(false)
              return (
                <View style={{ flex: 1 }}>
                  <Button title='defaultViewProps' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {
                    btnState === true ? <RenderHtml
                      defaultViewProps={{
                        style: {
                          backgroundColor: 'red'
                        }
                      }}
                      source={{
                        html: '<img alt="An image" src="https://img.com/1" />'
                      }}
                      contentWidth={50}
                    /> : <RenderHtml
                      source={{
                        html: '<img alt="An image" src="https://img.com/1" />'
                      }}
                      contentWidth={50}
                    />
                  }

                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'emSize'}
            itShould={'The value in pixels for 50em'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [btnState, setBtnState] = useState(false)
              const htmlContent = '<p>Hello, emSize!</p>';
              return (
                <View style={{ flex: 1 }}>
                  <Button title='emSize' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {
                    btnState === true ? <RenderHtml
                      emSize={50}
                      source={{ html: htmlContent }}
                    /> : <RenderHtml
                      source={{ html: htmlContent }}
                    />
                  }

                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'domVisitors'}
            itShould={'An object which callbacks will be invoked when a DOM element'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [btnState, setBtnState] = useState(false)
              const htmlContent =
                '<a href="https://www.example.com">Example</a>';

              const domVisitors: any = {
                a: (node: any, props: any) => {
                  return {
                    ...node,
                    name: 'span',
                  };
                },
              };

              return (
                <View style={{ flex: 1 }}>
                  <Button title='domVisitors' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {
                    btnState === true ? <RenderHtml
                      domVisitors={domVisitors}
                      source={{ html: htmlContent }}
                    /> : <RenderHtml
                      source={{ html: htmlContent }}
                    />
                  }

                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'enableCSSInlineProcessing'}
            itShould={'Enable or disable inline CSS processing of inline styles'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [btnState, setBtnState] = useState(false)
              const htmlContent =
                '<div style="margin: 20px">Hello, world!</div><div style="margin: 30px">How are you?</div>';

              return (
                <View style={{ flex: 1 }}>
                  <Button title='enableCSSInlineProcessing' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {
                    btnState === true ? <RenderHtml
                      enableCSSInlineProcessing={true}
                      source={{ html: htmlContent }}
                    /> : <RenderHtml
                      enableCSSInlineProcessing={false}
                      source={{ html: htmlContent }}
                    />
                  }

                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'enableExperimentalMarginCollapsing'}
            itShould={'Enable or disable margin collapsing CSS behavior'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [btnState, setBtnState] = useState(false)
              const htmlContent =
                '<div style="margin: 20px">Hello, world!</div><div style="margin: 30px">How are you?</div>';

              return (
                <View style={{ flex: 1 }}>
                  <Button title='enableExperimentalMarginCollapsing' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {
                    btnState === true ? <RenderHtml
                      enableExperimentalMarginCollapsing={true}
                      source={{ html: htmlContent }}
                    /> : <RenderHtml
                      enableExperimentalMarginCollapsing={false}
                      source={{ html: htmlContent }}
                    />
                  }

                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'idsStyles'}
            itShould={'mixed styles by the `id` attribute'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [btnState, setBtnState] = useState(false)
              const htmlContent =
                ' <div id="myDiv">This is my div element.</div>';
              const styles = {
                myDiv: {
                  backgroundColor: 'red',
                  color: 'white',
                  padding: 10,
                },
              };

              return (
                <View style={{ flex: 1 }}>
                  <Button title='idsStyles' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {
                    btnState === true ? <RenderHtml idsStyles={styles} source={{ html: htmlContent }} /> : <RenderHtml source={{ html: htmlContent }} />
                  }

                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'ignoreDomNode'}
            itShould={'Ignore specific DOM nodes'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [btnState, setBtnState] = useState(false)
              const htmlContent = `
              <p style="text-align: center">
                <a href="">you're a noisy one, aren't you?</a>
                Can you see the anchor? It has been ignored!
              </p>
              `
              return (
                <View style={{ flex: 1 }}>
                  <Button title='ignoreDomNode' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {
                    btnState === true ? <RenderHtml
                      source={{ html: htmlContent }}
                      ignoreDomNode={
                        (node: Node, parent: NodeWithChildren) => {
                          return (
                            isTag(node) && node.name === 'a' && isTag(parent) && parent.name === 'p'
                          )
                        }
                      }
                    /> : <RenderHtml
                      source={{ html: htmlContent }}
                    />
                  }
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'ignoredDomTags'}
            itShould={'Ignore specific DOM nodes'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [btnState, setBtnState] = useState(false)
              const htmlContent = '<div>1<span>2</span></div>';
              return (
                <View style={{ flex: 1 }}>
                  <Button title='ignoredDomTags' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {
                    btnState === true ? <RenderHtml
                      source={{ html: htmlContent }}
                      ignoredDomTags={['span']}
                    /> : <RenderHtml
                      source={{ html: htmlContent }}
                    />
                  }

                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'ignoredStyles'}
            itShould={'Blacklist specific inline CSS style properties and allow the others'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [btnState, setBtnState] = useState(false)
              const htmlContent = `
    <div>
      <h1 style="color: red;">red</h1>
      <p style="font-size: 20px;">font-size: 20px</p>
    </div>
  `;
              const ignoredStyles: any = ['color'];
              return (
                <View style={{ flex: 1 }}>
                  <Button title='ignoredStyles' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {
                    btnState === true ? <RenderHtml
                      source={{ html: htmlContent }}
                      ignoredStyles={ignoredStyles}
                    /> : <RenderHtml
                      source={{ html: htmlContent }}
                    />
                  }

                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          {/* <TestCase
            key={'provideEmbeddedHeaders'}
            itShould={'provideEmbeddedHeaders'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const a = (uri: string, tagName: string) => {
                if (tagName === 'img') {
                  return {
                    Authorization: 'Bearer daem6QuaeloopheiD7Oh'
                  };
                }
              }
              return (
                <View style={{ flex: 1 }}>
                  <RenderHtml
                    contentWidth={100}
                    provideEmbeddedHeaders={a}
                    source={{ html: '<img src="https://custom.domain/" />' }}
                  />
                </View>

              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          /> */}

          <TestCase
            key={'onDocumentMetadataLoaded'}
            itShould={'Handler invoked when the document metadata is available'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const htmlContent = `<html><head><title>Example</title></head><body><p>Hello, world!</p></body></html>`;
              const [meate, setMeate] = useState<any>('');
              const [btnState, setBtnState] = useState(false)
              return (
                <View style={{ flex: 1 }}>
                  <Button title='onDocumentMetadataLoaded' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  <RenderHtml
                    source={{ html: htmlContent }}
                    onDocumentMetadataLoaded={metadata => {
                      console.log('metadata====>', metadata);
                      setMeate(metadata);
                    }}
                  />
                  {
                    btnState === true ? <Text>{JSON.stringify(meate)}</Text> : null
                  }
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'onHTMLLoaded'}
            itShould={'HTML is available to the RenderHTML component'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const htmlContent = `<html><head><title>Example</title></head><body><p>Hello, world!</p></body></html>`;
              const [btnState, setBtnState] = useState(false)
              const [meate, setMeate] = useState<any>('');
              // const ignoredStyles = ['color', 'font-size'];
              const handleHTMLLoaded = () => {
                console.log('HTML content loaded');
                setMeate('HTML content loaded');
              };
              return (
                <View style={{ flex: 1 }}>
                  <Button title='onHTMLLoaded' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  <RenderHtml
                    source={{ html: htmlContent }}
                    onHTMLLoaded={handleHTMLLoaded}
                  />
                  {
                    btnState === true ? <Text>{JSON.stringify(meate)}</Text> : null
                  }
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'onTTreeChange'}
            itShould={'Triggered when the transient render tree changes'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [htmlContent, sethtmlContent] = useState('<p>yyyyyyy!</p>');
              const [statusText, setStatusText] =
                useState('DOM 树没变化====>：');
              const onTTreeChange = () => {
                setStatusText("'DOM 树变化了====>：");
                setState(true)
              };
              setTimeout(() => {
                sethtmlContent('<h1 style="color: red;">Hello World!</h1>');
              }, 3000);
              return (
                <View style={{ flex: 1 }}>
                  <RenderHtml
                    source={{ html: htmlContent }}
                    onTTreeChange={onTTreeChange}
                  />
                  <Text>{statusText}</Text>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'renderers'}
            itShould={'Props that will be passed to children renderers'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const onPress = () => {
                Alert.alert("I pressed a div!")
                setState(true)
              }
              const DivRenderer: CustomBlockRenderer = function DivRenderer({ TDefaultRenderer, ...props }) {
                return <TDefaultRenderer {...props} onPress={onPress} />;
              }
              const renderers = { div: DivRenderer }
              const htmlContent = '<div>Hello, World!</div>';
              return (
                <View style={{ flex: 1 }}>
                  <RenderHtml
                    source={{ html: htmlContent }}
                    renderers={renderers}
                  />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'setMarkersForTNode'}
            itShould={'Set a custom tag from a and all its TNode descendants'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const { width } = useWindowDimensions();
              const [btnState, setBtnState] = useState(false)

              return (
                <View style={{ flex: 1 }}>
                  <Button title='setMarkersForTNode' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {
                    btnState === true ? <RenderHtml
                      contentWidth={width}
                      source={{
                        html: '<div><div>marke</div><em>Two</em></div>'
                      }}
                      setMarkersForTNode={(targetMarkers, __parent, tnode) => {
                        if (tnode.tagName === 'em') {
                          //@ts-expect-error undefined marker
                          targetMarkers.em = true;
                        }
                      }}
                    /> : <RenderHtml
                      contentWidth={width}
                      source={{
                        html: '<em>Two</em>'
                      }}
                    />
                  }

                  ;
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'selectDomRoot'}
            itShould={'Select the DOM root before generating the TTree.'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const { width } = useWindowDimensions();
              const html = `
<body>
  <nav>
    <a href="/">home</a>
    <a href="/contact">contact</a>
  </nav>
  <article style="padding: 10px;">
    <header>
      <h1>Lorem Impsum Dolor Sit!</h1>
    </header>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore
      eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
    </p>
  </article>
</body>
`;
              const [btnState, setBtnState] = useState(false)
              function selectDomRoot(node: NodeWithChildren) {
                return findOne((e) => e.name === 'article', node.children, true);
              }
              return (
                <View style={{ flex: 1 }}>
                  <Button title='selectDomRoot' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {
                    btnState === true ? <RenderHtml
                      contentWidth={width}
                      selectDomRoot={selectDomRoot}
                      source={{
                        html: html,
                      }}
                    /> : <RenderHtml
                      contentWidth={width}
                      source={{
                        html: html,
                      }}
                    />
                  }
                  ;
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'renderersProps'}
            itShould={'get this object deep-merged with default renderers props'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [text, setText] = useState('我未被点击');
              const renderersProps: any = {
                img: {
                  resizeMode: 'cover',
                  style: { width: 200, height: 200 },
                },
                a: {
                  onPress: () => {
                    setText('我被点击了')
                    setState(true)
                  },
                  style: { color: 'blue' },
                },
              };
              const htmlContent =
                '<div><a href="https://www.google.com">Google</a><br/><img src="https://via.placeholder.com/150"/></div>';

              return (
                <View style={{ flex: 1 }}>
                  <Text>{text}</Text>
                  <RenderHtml
                    source={{ html: htmlContent }}
                    renderersProps={renderersProps}
                  />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'systemFonts'}
            itShould={'List of fonts available in the current platform'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const { width } = useWindowDimensions();
              const [btnState, setBtnState] = useState(false)
              const systemFonts = [...defaultSystemFonts, 'Mysuperfont']
              return (
                <View style={{ flex: 1 }}>
                  <Button title='systemFonts' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {
                    btnState === true ? <RenderHtml
                      contentWidth={width}
                      systemFonts={systemFonts}
                      source={{
                        html: '<div>Hello-----</div>',
                      }}
                    /> : null
                  }
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'customHTMLElementModels'}
            itShould={'Customize element models for target tags'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [btnState, setBtnState] = useState(false)
              const htmlContent = '<div><span>Hi, custom</span></div>';
              return (
                <View style={{ flex: 1 }}>
                  <Button title='customHTMLElementModels' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {
                    btnState === true ? <RenderHtml
                      source={{ html: htmlContent }}
                      customHTMLElementModels={{
                        ...defaultHTMLElementModels,
                        button: defaultHTMLElementModels.button.extend({
                          contentModel: HTMLContentModel.block
                        })
                      }}
                      renderers={{
                        button: ({
                          TDefaultRenderer,
                          ...props
                        }) => (
                          <TDefaultRenderer onPress={() => {}} {...props} />
                        )
                      }}
                    /> : null
                  }
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            key={'tagsStyles'}
            itShould={'mixed styles to target HTML tag names'}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [btnState, setBtnState] = useState(false)
              const htmlContent = '<span>hi</span>';
              const tagsStyles = {
                span: {
                  fontSize: 16,
                  color: 'blue',
                },
              }
              return (
                <View style={{ flex: 1 }}>
                  <Button title='tagsStyles' onPress={() => {
                    setBtnState(true)
                    setState(true)
                  }} />
                  {
                    btnState === true ? <RenderHtml
                      tagsStyles={tagsStyles}
                      source={{ html: htmlContent }}
                    /> : <RenderHtml
                      source={{ html: htmlContent }}
                    />
                  }
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
};
export default TestRenderHtml;

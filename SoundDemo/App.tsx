import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  AnimatedRenderExample,
  AnimationsExample,
  CheckerboardExample,
  ChessboardExample,
  TextScrollExample,
  CursorExample,
  ImageGalleryExample,
  FlatListVsScrollViewExample,
  LargeImageScrollExample,
  TogglingComponentExample,
  StickyHeadersExample,
  TesterExample,
  TabsAndScrollViewExample,
  NestedScrollingExample,
} from './examples';
import {NavigationContainer, Page} from './components';
import {Benchmarker, DeepTree, SierpinskiTriangle} from './benchmarks';
import {PortalHost, PortalProvider} from '@gorhom/portal';
import * as tests from './tests';
import {Tester} from '@rnoh/testerino';
import SoundDemo from './third_party_demo/SoundDemo'
import BlobUtilDemo from './third_party_demo/BlobUtilDemo'



function App() {
  return (
    <NavigationContainer>
      <PortalProvider>
        <View id="__harmony::ready" />
        <Page name='TESTS:BlobUtil'>
          <BlobUtilDemo />
        </Page>

        <Page name='TESTS:Sound'>
          <SoundDemo />
        </Page>

        <Page name="TESTS: DEV">
          <TesterExample filter={{tags: ['dev']}} />
        </Page>
        <Page name="TESTS: AUTOMATED & MANUAL">
          <TesterExample filter={{types: ['automated', 'manual']}} />
        </Page>
        {Object.keys(tests).map(testSuiteName => {
          const TestSuite = tests[testSuiteName as keyof typeof tests];
          return (
            <Page
              key={testSuiteName}
              name={`TESTS: ${testSuiteName.replace('Test', '')}`}>
              <Tester style={{flex: 1}}>
                <ScrollView style={{flex: 1}}>
                  <TestSuite key={testSuiteName} />
                </ScrollView>
              </Tester>
            </Page>
          );
        })}
        <Page name="BENCHMARK: DEEP TREE">
          <Benchmarker
            samplesCount={0}
            renderContent={refreshKey =>
              refreshKey % 2 === 0 ? (
                <DeepTree depth={9} breadth={2} id={0} wrap={1} />
              ) : null
            }
          />
        </Page>
        <Page name="BENCHMARK: DEEP TREE (20 samples)">
          <Benchmarker
            samplesCount={20}
            renderContent={refreshKey =>
              refreshKey % 2 === 0 ? (
                <DeepTree depth={6} breadth={2} id={0} wrap={1} />
              ) : null
            }
          />
        </Page>
        <Page name="BENCHMARK: UPDATING COLORS">
          <Benchmarker
            samplesCount={100}
            renderContent={refreshKey => (
              <SierpinskiTriangle
                s={150}
                x={150}
                y={75}
                depth={1}
                renderCount={refreshKey}
              />
            )}
          />
        </Page>
        <Page name="BENCHMARK: UPDATING LAYOUT">
          <Benchmarker
            samplesCount={200}
            renderContent={refreshKey => (
              <SierpinskiTriangle
                s={refreshKey}
                x={160}
                y={75}
                depth={1}
                renderCount={refreshKey}
              />
            )}
          />
        </Page>
        <Page name="EXAMPLE: ANIMATIONS">
          <AnimationsExample />
        </Page>
        <Page name="EXAMPLE: CHECKERBOARD">
          <CheckerboardExample />
        </Page>
        <Page name="EXAMPLE: CHESSBOARD">
          <ChessboardExample />
        </Page>
        <Page name="EXAMPLE: CURSOR">
          <CursorExample />
        </Page>
        <Page name="EXAMPLE: IMAGE GALLERY">
          <ImageGalleryExample />
        </Page>
        <Page name="EXAMPLE: LARGE IMAGE SCROLL">
          <LargeImageScrollExample />
        </Page>
        <Page name="EXAMPLE: TEXTSCROLL">
          <TextScrollExample />
        </Page>
        <Page name="EXAMPLE: FLATLIST VS SCROLLVIEW">
          <FlatListVsScrollViewExample />
        </Page>
        <Page name="EXAMPLE: TOGGLING COMPONENT">
          <TogglingComponentExample />
        </Page>
        <Page name="EXAMPLE: STICKY HEADERS (example doesn't work on Android)">
          <StickyHeadersExample />
        </Page>
        <Page name="EXAMPLE: TABS AND SCROLL VIEW">
          <TabsAndScrollViewExample />
        </Page>
        <Page name="EXAMPLE: ANIMATED AND SET STATE">
          <AnimatedRenderExample />
        </Page>
        <Page name="EXAMPLE: NESTED SCROLLING EXAMPLE">
          <NestedScrollingExample />
        </Page>
        <View
          style={[
            StyleSheet.absoluteFill,
            {zIndex: 100, pointerEvents: 'box-none'},
          ]}>
          <PortalHost name="ModalHost" />
        </View>
      </PortalProvider>
    </NavigationContainer>
  );
}

export default App;

import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {TestSuite, TestCase} from '@rnoh/testerino';
import React, {useState} from 'react';
import {Button} from '../../components';
import {StylesTest} from './StylesTest';
import {ContentContainerStyleTest} from './ContentContainerStyleTest';
import {ScrollBarsTest} from './ScrollBarsTest';
import {StickyHeadersTest} from './StickyHeadersTest';
import {PointerEventsTest} from './PointerEventsTest';
import {SnapTest} from './SnapTest';
import {MomentumCallbacksTest} from './MomentumCallbacksTest';
import {KeyboardTest} from './KeyboardTest';
import {MiscPropsTest} from './MiscPropsTest';
import {ScrollToTest} from './ScrollToTest';
import {CenterContentTest} from './CenterContentTest';

export function ScrollViewTest() {
  return (
    <TestSuite name="ScrollView">
      <StylesTest />
      <ContentContainerStyleTest />
      <ScrollBarsTest />
      <StickyHeadersTest />
      <PointerEventsTest />
      <SnapTest />
      <MomentumCallbacksTest />
      <KeyboardTest />
      <ScrollToTest />
      <MiscPropsTest />
      <CenterContentTest />
      <TestCase
        modal
        itShould="maintain scroll position when adding/removing elements">
        <AppendingList />
      </TestCase>
      <TestCase
        modal
        skip // https://gl.swmansion.com/rnoh/react-native-harmony/-/issues/498
        itShould="fill the remaining space of scroll view with yellow color but the element inside scroll view remains transparent">
        <ScrollViewEndFillColorTest />
      </TestCase>
    </TestSuite>
  );
}

const Item = (props: {label: string; mode: 'dark' | 'light'}) => {
  const stylesheet = StyleSheet.create({
    dark: {
      backgroundColor: '#47443D',
      color: 'white',
    },
    light: {
      backgroundColor: '#D9D0BB',
      color: 'black',
    },
    item: {
      height: 100,
    },
  });
  return (
    <View
      style={[
        props.mode === 'dark' ? stylesheet.dark : stylesheet.light,
        stylesheet.item,
      ]}>
      <Text>{props.label}</Text>
    </View>
  );
};

const ITEMS = Array.from({length: 20}, (_, index) => (
  <Item
    label={`Item${index}`}
    key={`item${index}`}
    mode={index % 2 ? 'light' : 'dark'}
  />
));
let itemCount = 20;
const AppendingList = () => {
  const [items, setItems] = useState<React.JSX.Element[]>(ITEMS);
  const styles = StyleSheet.create({
    scrollView: {
      width: 300,
      marginVertical: 50,
      height: 500,
    },
    row: {
      flexDirection: 'row',
    },
  });
  return (
    <View>
      <ScrollView
        automaticallyAdjustContentInsets={false}
        maintainVisibleContentPosition={{
          minIndexForVisible: 0,
          autoscrollToTopThreshold: 10,
        }}
        nestedScrollEnabled
        style={styles.scrollView}>
        {items.map((value, _index, _array) => React.cloneElement(value))}
      </ScrollView>
      <View style={styles.row}>
        <Button
          label="Add to top"
          onPress={() => {
            setItems(prev => {
              const idx = itemCount++;
              return [
                <Item
                  label={`added Item ${idx}`}
                  key={`item${idx}`}
                  mode={idx % 2 ? 'light' : 'dark'}
                />,
              ].concat(prev);
            });
          }}
        />
        <Button
          label="Remove top"
          onPress={() => {
            setItems(prev => prev.slice(1));
          }}
        />
      </View>
      <View style={styles.row}>
        <Button
          label="Add to end"
          onPress={() => {
            setItems(prev => {
              const idx = itemCount++;
              return prev.concat([
                <Item
                  label={`added Item ${idx}`}
                  key={`item${idx}`}
                  mode={idx % 2 ? 'light' : 'dark'}
                />,
              ]);
            });
          }}
        />
        <Button
          label="Remove end"
          onPress={() => {
            setItems(prev => prev.slice(0, -1));
          }}
        />
      </View>
    </View>
  );
};

function ScrollViewEndFillColorTest() {
  return (
    <View
      style={{
        backgroundColor: 'pink',
        width: '100%',
        justifyContent: 'center',
      }}>
      <View
        style={{
          height: 400,
          marginTop: 50,
          marginBottom: 50,
        }}>
        <ScrollView endFillColor={'yellow'}>
          <View
            style={{
              height: 100,
              borderWidth: 1,
              borderColor: '#000',
              padding: 10,
            }}>
            <Text>Content smaller than scroll view</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

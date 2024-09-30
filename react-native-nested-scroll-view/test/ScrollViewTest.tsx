import { View, ScrollView, Text, StyleSheet, RefreshControl } from 'react-native';
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import React, { useState, useEffect } from 'react';
import { Button } from './button';
import { StylesTest } from './StylesTest';
import { ContentContainerStyleTest } from './ContentContainerStyleTest';
import { ScrollBarsTest } from './ScrollBarsTest';
import { StickyHeadersTest } from './StickyHeadersTest';
import { PointerEventsTest } from './PointerEventsTest';
import { SnapTest } from './SnapTest';
import { MomentumCallbacksTest } from './MomentumCallbacksTest';
import { KeyboardTest } from './KeyboardTest';
import { MiscPropsTest } from './MiscPropsTest';
import { ScrollToTest } from './ScrollToTest';
import { CenterContentTest } from './CenterContentTest';

export default function ScrollViewTest() {
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="ScrollView">
          <TestCase modal skip itShould="removeClippedSubviewsBasicTest">
            <RemoveClippedSubviewsBasicTest />
          </TestCase>
          <TestCase modal skip itShould="ScrollViewWithRefreshControlTest">
            <ScrollViewWithRefreshControlTest />
          </TestCase>
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
      </ScrollView>
    </Tester>
  );
}

const Item = (props: { label: string; mode: 'dark' | 'light' }) => {
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

const ITEMS = Array.from({ length: 20 }, (_, index) => (
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

function RemoveClippedSubviewsBasicTest() {
  return (
    <View style={{ height: 300, width: '60%' }}>
      <ScrollView removeClippedSubviews={true}>
        <View style={stylesBox.box}>
          <Text>Box 1</Text>
        </View>
        <View style={stylesBox.box}>
          <Text>Box 2</Text>
        </View>
        <View style={stylesBox.box}>
          <Text>Box 3</Text>
        </View>
        <View style={stylesBox.box4}>
          <Text style={{ fontSize: 18 }}>
            Component that wraps platform ScrollView while providing integration
            with touch locking "responder" system. Keep in mind that ScrollViews
            must have a bounded height in order to work, since they contain
            unbounded-height children into a bounded container (via a scroll
            interaction). In order to bound the height of a ScrollView, either
            set the height of the view directly (discouraged) or make sure all
            parent views have bounded height. Forgetting to transfer "flex: 1"
            down the view stack can lead to errors here, which the element
            inspector makes quick to debug. Doesn't yet support other contained
            responders from blocking this scroll view from becoming the
            responder.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const stylesBox = StyleSheet.create({
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'lightblue',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box4: {
    width: 500,
    height: 200,
    backgroundColor: '#528af58a',
    margin: 10,
  },
});

function ScrollViewWithRefreshControlTest() {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = () => {
    setTimeout(() => {
      const newData: any = ['Item 1', 'Item 2', 'Item 3'];
      setData(newData);
      setRefreshing(false);
    }, 2000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  return (
    <View style={{ height: 300, width: '60%' }}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#9Bd35A', '#689F38']}
            tintColor="#689F38"
            title="Loading..."
            titleColor="#689F38"
            progressBackgroundColor="#F1F1F1"
          />
        }>
        {data.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
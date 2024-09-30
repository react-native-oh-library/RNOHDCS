import {
  View,
  ScrollView,
  StyleSheet,
  ScrollViewProps,
  Text,
} from 'react-native';
import { COMMON_PROPS } from './fixtures';
import React, { useRef } from 'react';
import { TestCase, TestSuite } from '@rnoh/testerino';
import { Button } from './button';

export function ScrollToTest() {
  return (
    <TestSuite name="scrollTo">
      <TestCase modal itShould="scroll down on button press (no animation)">
        <ScrollToTestCase animated={false} />
      </TestCase>
      <TestCase modal itShould="scroll down on button press (with animation)">
        <ScrollToTestCase animated={true} />
      </TestCase>
      <TestCase
        modal
        itShould="call onScroll once when scrolling without animation"
        initialState={0}
        arrange={({ setState }) => (
          <ScrollToTestCase
            animated={false}
            onScroll={() => setState(c => c + 1)}
          />
        )}
        assert={({ state, expect }) => {
          expect(state).to.eq(1);
        }}
      />
      <TestCase
        modal
        itShould="call onScroll multiple times when scrolling with animation"
        initialState={0}
        arrange={AnimatedScrollToEventCountTestCase}
        assert={({ state, expect }) => {
          expect(state).to.be.greaterThan(10);
        }}
      />
      <TestCase
        modal
        itShould="scroll overflow top/bottom when clicking a button"
        skip={''} // iOS only - https://gl.swmansion.com/rnoh/react-native-harmony/-/issues/315
      >
        <ScrollToOverflowEnabledBasicTest />
      </TestCase>
      <TestCase
        modal
        itShould="scroll overflow left/right when clicking a button"
        skip={''} // iOS only - https://gl.swmansion.com/rnoh/react-native-harmony/-/issues/315
      >
        <ScrollToOverflowEnabledHorizontalTest />
      </TestCase>
      <TestCase modal itShould="scroll end when clicking a button">
        <ScrollToEndEnabledBasicTest />
      </TestCase>
    </TestSuite>
  );
}

function ScrollToTestCase({
  animated,
  onScroll,
}: { animated: boolean } & ScrollViewProps) {
  const scrollToOffset = 600;
  const scrollRef = React.useRef<ScrollView>(null);

  const scrollTo = () => {
    scrollRef.current?.scrollTo({ y: scrollToOffset, animated });
  };

  return (
    <View style={styles.wrapperView}>
      <ScrollView
        ref={scrollRef}
        {...COMMON_PROPS}
        onScroll={onScroll}
        scrollEnabled={false}
      />
      <Button label={`Scroll to ${scrollToOffset}`} onPress={scrollTo} />
    </View>
  );
}

function AnimatedScrollToEventCountTestCase({
  setState,
}: {
  setState: (state: number) => void;
}) {
  const counter = React.useRef(0);
  const done = React.useRef(false);

  return (
    <ScrollToTestCase
      animated
      onScroll={e => {
        counter.current += 1;
        if (!done.current && e.nativeEvent.contentOffset.y >= 600) {
          setState(counter.current);
          done.current = true;
        }
      }}
      scrollEnabled={false}
    />
  );
}

function ScrollToOverflowEnabledBasicTest() {
  const scrollViewRef = useRef<ScrollView>(null);

  const scrollToY = (y: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y, animated: true });
    }
  };

  return (
    <View style={{ height: 500, backgroundColor: 'deepskyblue' }}>
      <ScrollView
        ref={scrollViewRef}
        scrollToOverflowEnabled={true}
        contentContainerStyle={{ padding: 10 }}>
        <View style={[styles.contentView, { backgroundColor: 'lightgreen' }]}>
          <Text style={{ textAlign: 'center' }}>Some other content</Text>
        </View>
        <View style={[styles.contentView, { backgroundColor: 'lightblue' }]}>
          <Text style={{ textAlign: 'center' }}>Some other content</Text>
        </View>
      </ScrollView>
      <View style={{ flexDirection: 'column' }}>
        <Button
          label="Scroll to overflow top by 100px"
          onPress={() => scrollToY(-100)}
        />
        <Button
          label="Scroll to overlow bottom by 500px"
          onPress={() => scrollToY(500)}
        />
        <Button
          label="Scroll to Reset (starting point)"
          onPress={() => scrollToY(0)}
        />
      </View>
    </View>
  );
}

function ScrollToEndEnabledBasicTest() {
  const scrollViewRef = useRef<ScrollView>(null);

  const scrollToEnd = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd();
    }
  };

  return (
    <View style={{ height: 500, backgroundColor: 'deepskyblue' }}>
      <ScrollView
        ref={scrollViewRef}
        scrollToOverflowEnabled={true}
        contentContainerStyle={{ padding: 10 }}>
        <View style={[styles.contentView, { backgroundColor: 'lightgreen' }]}>
          <Text style={{ textAlign: 'center' }}>Some other content</Text>
        </View>
        <View style={[styles.contentView, { backgroundColor: 'lightblue' }]}>
          <Text style={{ textAlign: 'center' }}>Some other content</Text>
        </View>
      </ScrollView>
      <View style={{ flexDirection: 'column' }}>
        <Button label="Scroll to End" onPress={() => scrollToEnd()} />
      </View>
    </View>
  );
}

function ScrollToOverflowEnabledHorizontalTest() {
  const scrollViewRef = useRef<ScrollView>(null);

  const scrollToX = (x: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x, animated: true });
    }
  };

  return (
    <View style={{ height: 500, backgroundColor: 'deepskyblue' }}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        scrollToOverflowEnabled={true}
        contentContainerStyle={{ padding: 10 }}>
        <View
          style={[
            styles.horizontalContentView,
            { backgroundColor: 'lightgreen' },
          ]}>
          <Text style={{ textAlign: 'center' }}>Some other content</Text>
        </View>
        <View
          style={[
            styles.horizontalContentView,
            { backgroundColor: 'lightblue' },
          ]}>
          <Text style={{ textAlign: 'center' }}>Some other content</Text>
        </View>
      </ScrollView>
      <View style={{ flexDirection: 'column' }}>
        <Button
          label="Scroll to overflow left by 100px"
          onPress={() => scrollToX(-100)}
        />
        <Button
          label="Scroll to overflow right by 1000px"
          onPress={() => scrollToX(100)}
        />
        <Button
          label="Scroll to Reset (starting point)"
          onPress={() => scrollToX(0)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperView: {
    height: 300,
    flexDirection: 'row',
  },
  contentView: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
  },
  horizontalContentView: {
    height: 250,
    width: 500,
    justifyContent: 'center',
  },
});
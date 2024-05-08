import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { InView, IOScrollView, IOScrollViewController } from 'react-native-intersection-observer';

function ScrollViewTester() {
  const scrollViewRef = useRef<IOScrollViewController>(null);
  const [inViewVal, setValue] = useState(false);
  return (
    <View>
      <Text>目标元素是否进入： {'' + inViewVal }</Text>
      <IOScrollView style={styles.myIOScrollView} ref={scrollViewRef} rootMargin={{ top: 0, bottom: 0 }}>
      <Text
        onPress={() => {
          scrollViewRef.current?.scrollToEnd();
        }}
      >
        Scroll to bottom
      </Text>
      <View style={styles.prefix} />
      <InView
        style={styles.demo}
        as= {Text}
        triggerOnce={true}
        onChange={(inView) => {
          setValue(inView)
        }}
      >
        <Text
          onPress={() => {
            scrollViewRef.current?.scrollToEnd();
          }}
        >
          Hello World!
        </Text>
      </InView>
      <View style={styles.suffix} />
      <Text
        onPress={() => {
          scrollViewRef.current?.scrollTo({x: 1, y: 1, animated: true});
        }}
      >
        Scroll to top
      </Text>
      </IOScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  prefix: {
    height: 1000,
  },
  demo: {
    height: 100,
    backgroundColor: '#f00',
  },
  suffix: {
    height: 1000,
  },
  myIOScrollView: {
    marginBottom: 50
  }
});

export default ScrollViewTester;

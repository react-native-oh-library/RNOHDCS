import React, {useCallback, useMemo, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
  Pressable,
  Alert,
} from 'react-native';
import {Tester, Filter, TestSuite} from '@rnoh/testerino';
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
const WINDOW_HEIGHT = Dimensions.get('window').height;
export default function ScrollBottomSheetDemoDefault9() {
  //callback
  const onSettleCallback = (index: number) => {
    console.log('handleSheetChanges', index);
  };
  const scrollRef = React.useRef(null);
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    [],
  );
  return (
    <View style={styles.screenbox}>
      <ScrollBottomSheet
        componentType="FlatList"
        snapPoints={[128, '50%', WINDOW_HEIGHT - 200]}
        initialSnapIndex={1}
        renderHandle={() => (
          <View style={styles.header}>
            <View style={styles.panelHandle} />
          </View>
        )}
        //FlatList
        data={data}
        keyExtractor={i => i}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text>{`Item ${item}`}</Text>
          </View>
        )}
        onSettle={onSettleCallback}
        topInset={100}
        animationConfig={{
          duration: 2000,
        }}
        innerRef={scrollRef}
        enableOverScroll={false}
        containerStyle={styles.containerStyle}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenbox: {
    height: '100%',
    backgroundColor: 'papayawhip',
  },
  containerStyle: {
    fontSize: 18,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHandle: {
    width: 40,
    height: 2,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 4,
  },
  item: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    marginVertical: 10,
  },
  contentContainerStyle: {
    padding: 16,
    backgroundColor: '#F3F4F9',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

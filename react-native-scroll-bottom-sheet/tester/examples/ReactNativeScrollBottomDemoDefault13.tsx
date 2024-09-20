import React, {useCallback, useMemo, useRef, useState} from 'react';
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
  Image,
} from 'react-native';
import {Tester, Filter, TestSuite} from '@rnoh/testerino';
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
import {
  Easing,
  useSharedValue,
  useAnimatedReaction,
  runOnJS,
} from 'react-native-reanimated';
const WINDOW_HEIGHT = Dimensions.get('window').height;
export default function ScrollBottomSheetDemoDefault13() {
  const [callbackInfo, setCallbackInfo] = useState('');
  //callback
  const onSettleCallback = (index: number) => {
    console.log('handleSheetChanges', index);
  };
  const scrollRef = React.useRef(null);
  //shared animated value
  const animatedPosition = useSharedValue(WINDOW_HEIGHT);
  //动画属性动态监听
  useAnimatedReaction(
    () => {
      return animatedPosition.value;
    },
    (currentValue, previousValue) => {
      if (currentValue !== previousValue) {
        console.log('检测到animationPosition的值被更改', {
          currentValue,
          previousValue,
        });
      }
    },
  );
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    [],
  );
  return (
    <View style={styles.screenbox}>
      <Image
        style={styles.logLogo}
        source={require('../assets/images/logImg.png')}
      />
      <ScrollBottomSheet
        componentType="FlatList"
        snapPoints={[128, '50%', WINDOW_HEIGHT - 300]}
        initialSnapIndex={2}
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
        animatedPosition={animatedPosition}
        topInset={100}
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
  logLogo: {
    width: '100%',
    height: 300,
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

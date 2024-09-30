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
export default function ScrollBottomSheetDemoDefault2() {
  //callback
  const onSettleCallback = (index: number) => {
    console.log('handleSheetChanges', index);
  };
  const scrollRef = React.useRef(null);
  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];
  return (
    <View style={styles.screenbox}>
      <ScrollBottomSheet
        componentType="SectionList"
        snapPoints={[128, '40%', '60%']}
        initialSnapIndex={2}
        renderHandle={() => (
          <View style={styles.header}>
            <View style={styles.panelHandle} />
          </View>
        )}
        //SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        onSettle={onSettleCallback}
        animationType={'spring'}
        animationConfig={{}}
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
  sectionHeader: {
    fontSize: 32,
    backgroundColor: '#fff',
    fontWeight: 800,
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

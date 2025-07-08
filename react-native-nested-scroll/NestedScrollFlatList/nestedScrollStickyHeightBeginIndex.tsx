import {withNavigationItem} from 'hybrid-navigation';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {NestedScrollView, NestedScrollViewHeader} from '@react-native-oh-tpl/react-native-nested-scroll';
import {FlatListPage} from './components/FlatListPage';

export function NestedScrollStickyHeightBeginIndex() {
  return (
    <NestedScrollView style={styles.coordinator} bounces = {false}>

      <NestedScrollViewHeader stickyHeaderBeginIndex={1}>
        <Image source={require('../assets/cover.webp')} style={styles.image} resizeMode="cover" />
        <Text style={styles.text}>anchor</Text>
        <Text style={styles.text}>anchorTest</Text>
      </NestedScrollViewHeader>

      <View style={{ height: "90%"}}>
        <FlatListPage/>

        <ScrollView> 
          <Text>NestedScrollFlatList</Text>
        </ScrollView>
      </View>
    </NestedScrollView>
  );
}

const styles = StyleSheet.create({
  coordinator: {
    backgroundColor: '#fff',
  },
  content: {
    backgroundColor: '#0000FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 160,
    width: '100%',
  },
  text: {
    lineHeight: 60,
    fontSize: 18,
    color: '#0xCCCCCC',
  },
});
export default NestedScrollStickyHeightBeginIndex

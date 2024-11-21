// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, ScrollView, StyleSheet, View, Image, Dimensions ,Text,Platform} from 'react-native';

import type { FlatList, SectionList, ListView } from 'react-native';


const ScrollViewComponent =  Animated.ScrollView
// overScrollMode={Platform.OS == 'ios' ? 'never' : 'always'}
const Test = () => {
    return (
      <ScrollViewComponent style={styles.container} overScrollMode ={ 'never'}    onScroll={(e)=>{
        const scrollY = e.nativeEvent.contentOffset.y;
        console.log('scrollY1111111',scrollY)
      }}>
        {Array.from({ length: 20 }, (_, i) => (
          <View key={i} style={styles.box}>
            <Text>Item {i + 1}</Text>
          </View>
        ))}
      </ScrollViewComponent>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    box: {
      height: 100,
      marginBottom: 10,
      backgroundColor: '#f0f0f0',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  

export default Test;



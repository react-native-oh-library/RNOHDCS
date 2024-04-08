/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import MapLinking from 'react-native-map-linking';

class MapLinkingDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {MapLinking.markLocation({lat: 39.9901079, lng:116.1887467},'香山公园','bbb')}}>
          <View style={styles.button}>
            <Text style={styles.text}>在地图上标记位置</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {MapLinking.planRoute({lat: 39.9901079, lng:116.1887467, title: '香山公园'}, {lat:400382556, lng:116.3144536, title:'清河站'}, 'drive')}}>
          <View style={styles.button}>
            <Text style={styles.text}>规划线路</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {MapLinking.navigate({lat:400382556, lng:116.3144536, title:'清河站'} )}}>
          <View style={styles.button}>
            <Text style={styles.text}>导航</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    padding: 10,
    backgroundColor: '#3B5998',
    marginBottom: 10,
  },
  text: {
    color: 'white',
  },
});
export default MapLinkingDemo;
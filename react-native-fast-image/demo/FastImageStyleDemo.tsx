import React from 'react';
import { StyleSheet, View, ScrollView,Image } from 'react-native';
import FastImage from 'react-native-fast-image';

export function FastImageDemo(): JSX.Element {

  return(
    <View style={styles.container}>
		<FastImage
			style={styles.image}
			source={require('./bunny.png')}
			resizeMode={FastImage.resizeMode.contain}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'grey',
  },
  image: {
    width: 150,
    height: 150,
  },
});
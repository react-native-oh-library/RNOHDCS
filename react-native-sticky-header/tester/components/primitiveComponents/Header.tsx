import * as React from 'react';
import {Image, PixelRatio, StyleSheet, View} from 'react-native';

export const Header: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={{
          uri: 'https://developer.huawei.com/allianceCmsResource/resource/HUAWEI_Developer_VUE/images/0417/home-new-10.png',
        }}
        style={styles.headerImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    padding: 50 / PixelRatio.get(),
  },
  headerImage: {
    height: 200 / PixelRatio.get(),
    width: 200 / PixelRatio.get(),
  },
});

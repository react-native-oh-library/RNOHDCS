import React from 'react';
import {StyleSheet, View, Text, Image, Button, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';

export const FastImageTestDemo = () => {
  const [tintColor, setTintColor] = React.useState('');

  return (
    <ScrollView>
      <View>
        <View>
          <Text style={styles.titleText}>defaultSource</Text>
          <FastImage
            style={styles.image}
            defaultSource={require('./fastimage/logo.png')}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>

        <View>
          <Text style={styles.titleText}>webp</Text>
          <FastImage
            style={styles.image}
            source={require('./fastimage/test3.webp')}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>

        <View>
          <Text style={styles.titleText}>jpg</Text>
          <FastImage
            style={styles.image}
            source={require('./fastimage/fields.jpg')}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View>
          <Text style={styles.titleText}>png</Text>
          <FastImage
            style={styles.image}
            source={require('./fastimage/bunny.png')}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View>
          <Text style={styles.titleText}>gif</Text>
          <FastImage
            style={styles.image}
            source={require('./fastimage/jellyfish.gif')}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>

        <View>
          <Text style={styles.titleText}>setTintColor</Text>
          <FastImage
            style={{width: 200, height: 200, left: '40%'}}
            tintColor={tintColor}
            source={require('./fastimage/bunny.png')}
          />
          <View style={styles.buttons}>
            <View style={styles.buttonView}>
              <Button
                title="green"
                color={'green'}
                onPress={() => setTintColor('green')}
              />
            </View>
            <View style={styles.buttonView}>
              <Button
                title="#9324c3"
                color={'#9324c3'}
                onPress={() => setTintColor('#9324c3')}
              />
            </View>
            <View style={styles.buttonView}>
              <Button
                color={'rgba(0, 0, 255, 0.5)'}
                title="rgba(0, 0, 255, 0.5)"
                onPress={() => setTintColor('rgba(0, 0, 255, 0.5)')}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontWeight: '900',
    marginBottom: 20,
    color: '#222',
    fontSize: 20,
  },
  buttons: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  buttonView: {flex: 1},
  image: {
    width: 150,
    height: 150,
    margin: 10,
  },
  imagegif: {
    height: 200,
    width: 250,
    backgroundColor: '#ddd',
    margin: 10,
    marginTop: 0,
    marginBottom: 10,
    flex: 0,
  },
});

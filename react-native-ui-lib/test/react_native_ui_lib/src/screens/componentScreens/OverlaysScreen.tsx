import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {View, Text, Image, Card, Constants, Colors} from 'react-native-ui-lib'; // eslint-disable-line
import {TestCase, TestSuite} from '@rnoh/testerino';

const image = require('../../assets/images/card-example.jpg');
const customOverlayImage = require('../../assets/icons/star.png');
const customOverlayImage2 = require('../../assets/icons/cameraSelected.png');

const uri = {
  uri: 'https://images.pexels.com/photos/140234/pexels-photo-140234.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
};

export default class OverlaysScreen extends Component {
  getImageWithOverlay = (
    type: string | undefined,
    text: string,
    customOverlay?: JSX.Element,
  ) => {
    return (
      <View centerH>
        <Text grey10>{text}</Text>
        <Image
          /* overlayColor={Colors.rgba(Colors.red40, 0.4)} */ style={
            styles.image
          }
          source={image}
          overlayType={type}
          customOverlayContent={customOverlay}
        />
      </View>
    );
  };

  renderCustomOverlay() {
    return <Image style={styles.customOverylay} source={customOverlayImage} />;
  }

  renderCustomOverlay2() {
    return (
      <View flex center>
        <Image style={styles.customOverylay2} source={customOverlayImage2} />
      </View>
    );
  }

  render() {
    return (
      <TestSuite name="Overlays">
        <TestCase itShould="设置 overlayType">
          <View padding-20>
            <View row centerH>
              {this.getImageWithOverlay(
                Image.overlayTypes.VERTICAL,
                'vertical',
              )}
              {this.getImageWithOverlay(Image.overlayTypes.SOLID, 'solid')}
            </View>
            <View row centerH>
              {this.getImageWithOverlay(Image.overlayTypes.TOP, 'top')}
              {this.getImageWithOverlay(Image.overlayTypes.BOTTOM, 'bottom')}
            </View>
          </View>
        </TestCase>
        <TestCase itShould="Image Overlays (absolute)">
          <View padding-5>
            <View style={styles.overlayImageAbsoluteContainer}>
              <Image
                style={styles.overlayImageAbsoluteVertical}
                source={image}
                overlayType={Image.overlayTypes.VERTICAL}
              />
              <Image
                style={styles.overlayImageAbsoluteSolid}
                source={image}
                overlayType={Image.overlayTypes.SOLID}
              />
              <Image
                style={styles.overlayImageAbsoluteTop}
                source={image}
                overlayType={Image.overlayTypes.TOP}
              />
              <Image
                style={styles.overlayImageAbsoluteBottom}
                source={image}
                overlayType={Image.overlayTypes.BOTTOM}
              />
            </View>
          </View>
        </TestCase>
        <TestCase itShould="Custom Overlay">
          <View padding-20>
            <View row center>
              {this.getImageWithOverlay(
                undefined,
                'cutom overlay only',
                this.renderCustomOverlay(),
              )}
              {this.getImageWithOverlay(
                Image.overlayTypes.SOLID,
                'solid + custom',
                this.renderCustomOverlay2(),
              )}
            </View>
            <View row center>
              {this.getImageWithOverlay(
                Image.overlayTypes.VERTICAL,
                'vertical + custom',
                this.renderCustomOverlay2(),
              )}
              {this.getImageWithOverlay(
                Image.overlayTypes.BOTTOM,
                'bottom + custom',
                this.renderCustomOverlay(),
              )}
            </View>
          </View>
        </TestCase>
      </TestSuite>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    margin: 10,
  },
  overlayImageAbsoluteContainer: {
    width: Constants.screenWidth,
    height: 380,
    marginLeft: -20,
  },
  overlayImageAbsoluteVertical: {
    position: 'absolute',
    top: 30,
    left: 10,
    width: 120,
    height: 120,
    margin: 5,
  },
  overlayImageAbsoluteSolid: {
    position: 'absolute',
    top: 30,
    right: 30,
    width: 120,
    height: 120,
    margin: 5,
  },
  overlayImageAbsoluteTop: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    width: 120,
    height: 120,
    margin: 5,
  },
  overlayImageAbsoluteBottom: {
    position: 'absolute',
    bottom: 20,
    right: 30,
    width: 120,
    height: 120,
    margin: 5,
  },
  cardImage: {
    width: 100,
    borderRadius: 4,
  },
  imageFillContainer: {
    height: 100,
  },
  customOverylay: {
    position: 'absolute',
    left: 137,
    top: 134,
    width: 25,
    height: 25,
    tintColor: Colors.yellow20,
    borderWidth: 1,
    borderColor: Colors.yellow20,
    borderRadius: 100,
    backgroundColor: Colors.rgba(Colors.yellow20, 0.2),
  },
  customOverylay2: {
    width: 40,
    height: 40,
    tintColor: Colors.white,
  },
});

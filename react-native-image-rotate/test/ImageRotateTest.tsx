import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import{
  Tester,
  TestSuite,
  TestCase,
} from '@rnoh/testerino';

import ImageRotate from "react-native-image-rotate";

const SOURCE_IMAGE = 'https://upload.wikimedia.org/wikipedia/en/5/56/Warcraft_Teaser_Poster.jpg';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      image: SOURCE_IMAGE,
      currentAngle: 0,
      width: 150,
      height: 240,
    };

    this.rotate = this.rotate.bind(this);
  }

  rotate(angle) {
    const nextAngle = this.state.currentAngle + angle;
    ImageRotate.rotateImage(
      SOURCE_IMAGE,
      nextAngle,
      (uri) => {
        this.setState({
          image: uri,
          currentAngle: nextAngle,
          width: this.state.height,
          height: this.state.width,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  render() {
    return (
      <Tester style = {styles.container}>
            <TestSuite name = "imageRotateTest">
                <Text>{""}</Text>

                <TextInput>
                    {}
                </TextInput>

                <TestCase
                    itShould = "native rotate CW"
                    tags = {['C_API']}
                    initialState = {undefined as any}
                    arrange = {({setState}) => {
                        return (
                            <TouchableOpacity 
                                onPress = {() => {
                                    this.rotate(90);
                                    setState(true);
                                }}
                                style = {styles.btn}>
                                <Text style = {styles.btnText} > 图片顺旋转 </Text>
                            </TouchableOpacity>
                        );
                    }}
                    assert = {async ({expect, state}) => {
                        expect((state as Buffer)).to.be.true;
                    }} 
                />
                <TestCase
                    itShould = "native rotate CCW"
                    tags = {['C_API']}
                    initialState = {undefined as any}
                    arrange = {({setState}) => {
                        return (
                            <TouchableOpacity 
                                onPress = {() => {
                                    this.rotate(-90);
                                    setState(true);
                                }}
                                style = {styles.btn}>
                                <Text style = {styles.btnText} > 图片逆旋转 </Text>
                            </TouchableOpacity>
                        );
                    }}
                    assert = {async ({expect, state}) => {
                        expect((state as Buffer)).to.be.true;
                    }} 
                /> 
            </TestSuite>
            <View style={styles.imageContainer}>
                <Image style={{width: this.state.width, height: this.state.height}} resizeMode="contain" source={{uri: this.state.image}} />
            </View>
        </Tester>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: 240,
    justifyContent: 'center',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
},
});
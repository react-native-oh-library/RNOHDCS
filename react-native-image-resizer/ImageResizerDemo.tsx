/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useRef, useState } from 'react';
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageResizer from '@bam.tech/react-native-image-resizer';
import type {
  ResizeMode,
  Response,
  ResizeFormat
} from '@bam.tech/react-native-image-resizer';
import { launchImageLibrary } from 'react-native-image-picker';

const modeOptions: { label: string; value: ResizeMode }[] = [
  {
    label: 'contain',
    value: 'contain',
  },
  {
    label: 'cover',
    value: 'cover',
  },
  {
    label: 'stretch',
    value: 'stretch',
  },
];

const onlyScaleDownOptions: { label: string; value: boolean }[] = [
  {
    label: 'true',
    value: true,
  },
  {
    label: 'false',
    value: false,
  },
];

const compressFormatOptions: { label: string; value: ResizeFormat }[] = [
  {
    label: 'JPEG',
    value: 'JPEG',
  },
  {
    label: 'PNG',
    value: 'PNG',
  },
  {
    label: 'WEBP',
    value: 'WEBP',
  }
];

const rotationOptions: { label: string; value: number }[] = [
  {
    label: '0',
    value: 0,
  },
  {
    label: '90',
    value: 90,
  },
  {
    label: '180',
    value: 180,
  },
  {
    label: '270',
    value: 270,
  }
];

const keepMetaOptions: { label: string; value: boolean }[] = [
  {
    label: 'true',
    value: true,
  },
  {
    label: 'false',
    value: false,
  },
];

function ImageResizerDemo() {
  const [selectedMode, setMode] = useState<ResizeMode>('contain');
  const [onlyScaleDown, setOnlyScaleDown] = useState(false);
  const [imageUri, setImageUri] = useState<null | string>();
  const [sizeTarget, setSizeTarget] = useState(80);
  const [resizedImage, setResizedImage] = useState<null | Response>();
  const [compressFormat, setCompressFormat] = useState<ResizeFormat>('JPEG');
  const [quality, setQuality] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [keepMeta, setKeepMeta] = useState(false);

  const resize = async () => {
    if (!imageUri) return;

    setResizedImage(null);

    try {
      let result = await ImageResizer.createResizedImage(
        imageUri,
        sizeTarget,
        sizeTarget,
        compressFormat,
        quality,
        rotation,
        undefined,
        keepMeta,
        {
          mode: selectedMode,
          onlyScaleDown,
        }
      );

      setResizedImage(result);
    } catch (error) {
      Alert.alert('Unable to resize the photo');
    }
  };

  const selectImageFromPicker = async () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (!response || !response.assets) return;
      const asset = response.assets[0];
      if (asset) {
        setImageUri(asset.uri);
      }
    });
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.welcome}>Image Resizer example</Text>
      <View style={styles.imageSourceButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={selectImageFromPicker}>
          <Text>{'Select an image (react-native-image-picker)'}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.instructions}>This is the original image:</Text>
      {imageUri ? (
        <Image
          style={styles.image}
          source={{ uri: imageUri }}
          resizeMode="contain"
        />
      ) : null}

      <Text style={styles.instructions}>Resized image:</Text>
      <Text>Format: </Text>
      <View style={styles.optionContainer}>
        {compressFormatOptions.map((formatOption) => (
          <TouchableOpacity
            style={styles.buttonOption}
            onPress={() => setCompressFormat(formatOption.value)}
            key={formatOption.label}
          >
            <Text>{`${formatOption.label} ${compressFormat === formatOption.value ? '✅' : ''
              }`}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text>Rotation: </Text>
      <View style={styles.optionContainer}>
        {rotationOptions.map((rotationOption) => (
          <TouchableOpacity
            style={styles.buttonOption}
            onPress={() => setRotation(rotationOption.value)}
            key={rotationOption.label}
          >
            <Text>{`${rotationOption.label} ${rotation === rotationOption.value ? '✅' : ''
              }`}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text>keepMeta </Text>
      <View style={styles.optionContainer}>
        {keepMetaOptions.map((keepMetaOptions) => (
          <TouchableOpacity
            style={styles.buttonOption}
            onPress={() => setKeepMeta(keepMetaOptions.value)}
            key={keepMetaOptions.label}
          >
            <Text>{`${keepMetaOptions.label} ${keepMeta === keepMetaOptions.value ? '✅' : ''
              }`}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text>Mode: </Text>
      <View style={styles.optionContainer}>
        {modeOptions.map((mode) => (
          <TouchableOpacity
            style={styles.buttonOption}
            onPress={() => setMode(mode.value)}
            key={mode.label}
          >
            <Text>{`${mode.label} ${selectedMode === mode.value ? '✅' : ''
              }`}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text>Only scale down? </Text>
      <View style={styles.optionContainer}>
        {onlyScaleDownOptions.map((scaleDownOption) => (
          <TouchableOpacity
            style={styles.buttonOption}
            onPress={() => setOnlyScaleDown(scaleDownOption.value)}
            key={scaleDownOption.label}
          >
            <Text>{`${scaleDownOption.label} ${onlyScaleDown === scaleDownOption.value ? '✅' : ''
              }`}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text>quality(0 ~ 100): </Text>
      <TextInput
        style={styles.textInput}
        placeholder={quality.toString()}
        keyboardType="decimal-pad"
        onChangeText={(text) => {
          setQuality(Number(text));
        }}
      />

      <Text>Target size: </Text>
      <TextInput
        style={styles.textInput}
        placeholder={sizeTarget.toString()}
        keyboardType="decimal-pad"
        onChangeText={(text) => {
          setSizeTarget(Number(text));
        }}
      />

      <TouchableOpacity style={styles.button} onPress={resize}>
        <Text>Click me to resize the image</Text>
      </TouchableOpacity>
      {resizedImage ? (
        <>
          <Image
            style={styles.image}
            source={{ uri: resizedImage.uri }}
            resizeMode="contain"
          />
          <Text>Width: {resizedImage.width}</Text>
          <Text>Height: {resizedImage.height}</Text>
          <Text>OutPutPath: {resizedImage.path}</Text>
          <Text>Name: {resizedImage.name}</Text>
        </>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#F5FCFF',
  },
  container: {
    paddingVertical: 100,
    paddingHorizontal: 10,
  },
  imageSourceButtonContainer: {
    marginBottom: 10,
  },
  welcome: {
    fontSize: 20,
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    height: 250,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2596be',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  optionContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  buttonOption: {
    backgroundColor: '#2596be',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    margin: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
    overflow: 'hidden',
  },
});

export default ImageResizerDemo;
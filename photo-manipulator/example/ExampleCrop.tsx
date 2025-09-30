import * as React from 'react';
import { Image, Text } from 'react-native';
import styles, { ImageResultProps } from '../App.styles';
import { noop } from '../utils';
import PhotoManipulator from 'react-native-photo-manipulator';
import { IMAGE } from './settings';

export default React.memo(function ExampleCrop() {
  const [crop, setCrop] = React.useState<string | null>(null);
  const [resize, setResize] = React.useState<string | null>(null);
  const [cropPng, setCropPng] = React.useState<string | null>(null);

  const [imageRequire, setRequire] = React.useState<string | null>(null);
  const [imageFile, setFile] = React.useState<string | null>(null);

  React.useEffect(() => {
    const operation = async () => {
      setRequire(
        await PhotoManipulator.crop(require('./assets/car.png'), {
          x: 400,
          y: 200,
          width: 300,
          height: 200,
        })
      )
      //请替换为沙箱图片路径
      // setFile( 
      //   await PhotoManipulator.crop("file://com.rnoh.tester/data/storage/el2/base/haps/entry/files/car_1759139388951.jpg", {
      //     x: 100,
      //     y: 100,
      //     width: 100,
      //     height: 100,
      //   })
      // )
      setCrop(
        await PhotoManipulator.crop(IMAGE, {
          x: 400,
          y: 200,
          width: 300,
          height: 200,
        })
      );
      setResize(
        await PhotoManipulator.crop(
          IMAGE,
          { x: 400, y: 200, width: 300, height: 200 },
          { width: 60, height: 40 }
        )
      );
      setCropPng(
        await PhotoManipulator.crop(IMAGE, {
          x: 400,
          y: 200,
          width: 300,
          height: 200,
        },{},"image/png")
      );
    };

    operation().then(noop).catch(console.log);
  }, []);

  return (
    <>
     <Image
      testID="cropRequire"
      {...ImageResultProps}
      source={{uri: imageRequire}}
    />
    {/* <Image
      testID="cropFile"
      source={{uri: imageFile}}
      {...ImageResultProps}
    /> */}
      {typeof crop === 'string' ? (
        <Text style={styles.exampleDescription}>Crop& {crop}</Text>
       ) : null}
      {typeof crop === 'string' ? (
         <Image
          testID="cropResult"
          {...ImageResultProps}
          source={{ uri: crop }}
        /> 
       ) : null}
      {typeof resize === 'string' ? (
         <Text style={styles.exampleDescription}>Crop & Resize & {resize}</Text>
       ) : null}
      {typeof resize === 'string' ? ( 
         <Image
          testID="cropResizeResult"
          {...ImageResultProps}
          source={{ uri: resize }}
        />
       ) : null} 
       {typeof cropPng === 'string' ? (
        <Text style={styles.exampleDescription}>PNG& {cropPng}</Text>
      ) : null}
      {typeof cropPng === 'string' ? (
        <Image
          testID="cropPngResult"
          {...ImageResultProps}
          source={{ uri: cropPng }}
        />
      ) : null}
    </>
  );
});



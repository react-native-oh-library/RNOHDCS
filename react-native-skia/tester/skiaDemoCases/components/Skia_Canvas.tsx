import React, {useState, useEffect} from 'react';

import {useSharedValue} from 'react-native-reanimated';
import {Canvas, Circle, Image, useCanvasRef} from '@shopify/react-native-skia';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';

export const CanvasDemo = () => {
  const ref = useCanvasRef();
  const size = useSharedValue({width: 0, height: 0});
  const [show, setShow] = useState(false);
  const [byteLength, setByteLength] = useState(0);
  const [image, setImage] = useState(null);

  return (
    <View style={styles.viewStyle}>
      {/* <Button
        title="click to makeImageSnapshot"
        onPress={() => {
          const image = ref.current?.makeImageSnapshot();
          console.log(
            'skia CanvasDemo makeImageSnapshot image=',
            JSON.stringify(image),
          );
          if (image) {
            setImage(image);
            // you can use image in an <Image> component
            // Or save to file using encodeToBytes -> Uint8Array
            const bytes = image.encodeToBytes();
            console.log(
              'skia CanvasDemo makeImageSnapshot bytes.length=',
              bytes.length,
            );
            setByteLength(bytes.length);
            setShow(true);
          }
        }}></Button> */}
      <Canvas
        style={styles.canvasStyle}
        ref={ref}
        mode={'default'}
        onSize={size}
        onLayout={event => {}}>
        <Circle r={128} cx={128} cy={128} color="red" />
        <Circle r={64} cx={128} cy={128} color="green" />
      </Canvas>
      {/* <Text>image.encodeToBytes length={byteLength}</Text>
      {show ? (
        <Canvas style={styles.canvasStyle}>
          <Image
            image={image}
            fit="contain"
            x={0}
            y={0}
            width={256}
            height={256}
          />
        </Canvas>
      ) : null} */}
    </View>
  );
};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase
          itShould="Canvas: style={styles.canvasStyle}
        ref={ref}
        mode={'default'}
        onSize={size}
        onLayout={event => {}}">
          <CanvasDemo />
        </TestCase>
      </ScrollView>
    </Tester>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    padding: 10,
    alignItems: 'center',
  },
  canvasStyle: {
    flex: 1,
    width: 256,
    height: 256,
  },
});

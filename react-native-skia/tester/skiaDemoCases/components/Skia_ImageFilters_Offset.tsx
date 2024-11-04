import React from 'react';
import {StyleSheet, View} from 'react-native';

import {
  Canvas,
  useImage,
  Image,
  Offset,
  Fill,
  ColorMatrix,
} from '@shopify/react-native-skia';

import {ScrollView} from 'react-native';
import {Tester, Filter, TestCase, TestSuite} from '@rnoh/testerino';

const OffsetDemo = () => {
  const image = useImage(require('../../assets/oslo.jpg'));
  if (!image) {
    return null;
  }
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Fill color="lightblue" />
        <Image image={image} x={0} y={0} width={256} height={256} fit="cover">
          <Offset x={64} y={64} />
        </Image>
      </Canvas>
    </View>
  );
};

const OffsetChildrenDemo = () => {
  const image = useImage(require('../../assets/oslo.jpg'));
  if (!image) {
    return null;
  }
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Fill color="lightblue" />
        <Image image={image} x={0} y={0} width={256} height={256} fit="cover">
          <Offset x={64} y={64}>
            <ColorMatrix
              matrix={[
                -0.578, 0.99, 0.588, 0, 0, 0.469, 0.535, -0.003, 0, 0, 0.015,
                1.69, -0.703, 0, 0, 0, 0, 0, 1, 0,
              ]}
            />
          </Offset>
        </Image>
      </Canvas>
    </View>
  );
};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase itShould="Offset: x={64} y={64}">
          <OffsetDemo />
        </TestCase>
        <TestCase itShould="Offset: x={64} y={64} children">
          <OffsetChildrenDemo />
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

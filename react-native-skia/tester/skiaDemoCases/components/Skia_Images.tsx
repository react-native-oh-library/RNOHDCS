import React, {useState, useRef} from 'react';
import {
  Canvas,
  useImage,
  Image,
  ImageSVG,
  useSVG,
  useAnimatedImage,
  useAnimatedImageValue,
  rect,
  fitbox,
  OpacityMatrix,
  ColorMatrix,
  Paint,
  Group,
  SkImage,
  makeImageFromView,
} from '@shopify/react-native-skia';

import {
  PixelRatio,
  Pressable,
  ScrollView,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';
import {useSharedValue} from 'react-native-reanimated';

const ImageDemo = () => {
  const image = useImage(require('../../assets/oslo.jpg'));
  return (
    <View style={{padding: 10, alignItems: 'center'}}>
      <Canvas style={{flex: 1, width: 256, height: 256}}>
        <Image
          image={image}
          fit="contain"
          x={0}
          y={0}
          width={256}
          height={256}
        />
      </Canvas>
    </View>
  );
};

const GifImageDemo = () => {
  const isPaused = useSharedValue(false);
  const image = useAnimatedImageValue(
    require('../../assets/birdFlying.gif'),
    isPaused,
  );
  return (
    <View style={{padding: 10, alignItems: 'center'}}>
      <Text>click to pause the gif</Text>
      <Pressable
        style={{width: 256, height: 256}}
        onPress={() => (isPaused.value = !isPaused.value)}>
        <Canvas style={{flex: 1, width: 256, height: 256}}>
          <Image
            image={image}
            fit="contain"
            x={0}
            y={0}
            width={256}
            height={256}
          />
        </Canvas>
      </Pressable>
    </View>
  );
};

const SVGImageDemo = () => {
  const width = 256;
  const height = 256;
  const tiger = useSVG(require('../../assets/tiger.svg'));
  if (!tiger) {
    return null;
  }
  const src = rect(0, 0, tiger.width(), tiger.height());
  const dst = rect(0, 0, width, height);
  return (
    <View style={{padding: 10, alignItems: 'center'}}>
      <Canvas style={{flex: 1, width: 256, height: 256}}>
        <Group
          transform={fitbox('contain', src, dst)}
          layer={
            <Paint>
              <ColorMatrix matrix={OpacityMatrix(0.5)} />
            </Paint>
          }>
          <ImageSVG svg={tiger} x={0} y={0} width={800} height={800} />
        </Group>
      </Canvas>
    </View>
  );
};

const SnapshotImageDemo = () => {
  const pd = PixelRatio.get();
  // Create a ref for the view you'd like to take a snapshot of
  const ref = useRef<View>(null);
  // Create a state variable to store the snapshot
  const [image, setImage] = useState<SkImage | null>(null);
  // Create a function to take the snapshot
  const onPress = async () => {
    // Take the snapshot of the view
    console.log('makeImage');
    const snapshot = await makeImageFromView(ref);
    console.log('makeImage over');
    setImage(snapshot);
  };
  const onLayout = (event: {
    nativeEvent: {layout: {width: any; height: any}};
  }) => {
    const {width, height} = event.nativeEvent.layout;
    console.log('View width:', width);
    console.log('View height:', height);
  };

  return (
    <View style={{flex: 1}}>
      <Pressable onPress={onPress}>
        <View
          id="1011"
          ref={ref}
          // collapsable={false} is important here
          collapsable={false}
          onLayout={onLayout}
          style={{width: 256, height: 256, backgroundColor: 'cyan', flex: 1}}>
          <Text selectionColor={'red'}>This is a React Native View</Text>
        </View>
      </Pressable>
      <View style={{backgroundColor: 'red', width: 256, height: 10}}></View>
      {image && (
        <Canvas style={{flex: 1, width: 256, height: 256}}>
          <Image image={image} x={0} y={0} width={256} height={256} />
        </Canvas>
      )}
    </View>
  );
};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase
          itShould="Image: image={image}
          fit='contain'
          x={0}
          y={0}
          width={256}
          height={256}">
          <ImageDemo />
        </TestCase>
        <TestCase itShould="case2: Gif Image Demo">
          <GifImageDemo />
        </TestCase>
        <TestCase itShould="ImageSVG: svg={tiger} x={0} y={0} width={800} height={800}">
          <SVGImageDemo />
        </TestCase>
        <TestCase itShould="case4: Creating Snapshots of Views">
          <SnapshotImageDemo />
        </TestCase>
      </ScrollView>
    </Tester>
  );
}

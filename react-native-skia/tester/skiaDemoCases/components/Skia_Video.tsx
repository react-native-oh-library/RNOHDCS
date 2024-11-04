import React, {Component, useState} from 'react';
import {Button, Pressable, Text, View, useWindowDimensions} from 'react-native';

import {
  Box,
  BoxShadow,
  Canvas,
  rect,
  rrect,
  Fill,
  Image,
  useVideo,
  ImageShader,
  ColorMatrix,
  fitbox,
} from '@shopify/react-native-skia';

//import {useVideo} from '@react-native-oh-tpl/react-native-skia/src/useVideo';

import {ScrollView} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';
import {useSharedValue} from 'react-native-reanimated';

export const VideoExample = () => {
  const seek = useSharedValue<number>(0);
  // // Set this value to true to pause the video
  const paused = useSharedValue(false);
  const [pausedStr, setPausedStr] = useState('Paused');
  const volume = useSharedValue(0.5);
  const {width, height} = useWindowDimensions();
  const {currentFrame, currentTime, duration, rotation, framerate, size} =
    useVideo(
      '../../assets/BigBuckBunny.mp4',
      // '../../assets/212135299b9e0938ca4986891.mp4',
      // 'https://res.vmallres.com//uomcdn/CN/cms/202210/C75C7E20060F3E909F2998E13C3ABC03.mp4',
      {
        seek,
        paused,
        looping: true,
        volume: volume,
      },
    );
  const src = rect(0, 0, size.width, size.height);
  const dst = rect(0, 0, width, height);
  const transform = fitbox('cover', src, dst, rotation);
  return (
    <View>
      <TestCase itShould="case1: VideoExample NextImage looping=true">
        <Pressable
          style={{flex: 1, width: 350, height: 200}}
          onPress={() => (paused.value = !paused.value)}>
          <Canvas style={{width: 350, height: 200}}>
            <Image
              image={currentFrame}
              x={0}
              y={0}
              width={350}
              height={200}
              fit="fill"
              // transform={transform}
            />
          </Canvas>
        </Pressable>
      </TestCase>
      <TestCase itShould="case2: paused Button">
        <Button
          title={pausedStr}
          onPress={() => {
            paused.value = !paused.value;
            setPausedStr(paused.value ? 'Paused' : 'Continue');
          }}
        />
      </TestCase>
      <TestCase itShould="case3: seek Button">
        <Button
          title="Seek"
          onPress={() => {
            seek.value = seek.value + 5000;
          }}
        />
      </TestCase>
      <TestCase itShould="case4: set voulume">
        <Button
          title="volume +"
          onPress={() => {
            volume.value = volume.value >= 1 ? 1 : volume.value + 0.1;
            // console.log(volume.value);
          }}
        />
        <Button
          title="volume -"
          onPress={() => {
            volume.value = volume.value <= 0 ? 0 : volume.value - 0.1;
            // console.log(volume.value);
          }}
        />
      </TestCase>
      <TestCase itShould="case5: duration">
        <Text>video duration:{duration}</Text>
      </TestCase>
      <TestCase itShould="case6: rotation">
        <Text>video rotation:{rotation}</Text>
      </TestCase>
      <TestCase itShould="case7: framerate">
        <Text>video framerate:{framerate}</Text>
      </TestCase>
    </View>
  );
};

export const VideoMatrixExample = () => {
  const paused = useSharedValue(false);
  const {width, height} = useWindowDimensions();
  const {currentFrame} = useVideo(
    '../../assets/212135299b9e0938ca4986891.mp4',
    {
      paused,
      volume: 300.0,
    },
  );
  return (
    <Pressable style={{flex: 1}} onPress={() => (paused.value = !paused.value)}>
      <Canvas style={{flex: 1, width: width, height: 320}}>
        <Fill>
          <ImageShader
            image={currentFrame}
            x={0}
            y={0}
            width={width}
            height={320}
            fit="cover"
          />
          <ColorMatrix
            matrix={[
              0.95, 0, 0, 0, 0.05, 0.65, 0, 0, 0, 0.15, 0.15, 0, 0, 0, 0.5, 0,
              0, 0, 1, 0,
            ]}
          />
        </Fill>
      </Canvas>
    </Pressable>
  );
};

export const VideoReturnValueExample = () => {
  const seek = useSharedValue<null | number>(null);
  // Set this value to true to pause the video
  const paused = useSharedValue(false);
  const {width, height} = useWindowDimensions();
  const {currentFrame, currentTime} = useVideo(
    '../../assets/Download1833189513.mp4',
    {
      seek,
      paused,
      looping: true,
    },
  );
  return (
    <Pressable style={{flex: 1}} onPress={() => (seek.value = 1000.0)}>
      <Canvas style={{flex: 1, width: width, height: 320}}>
        <Image
          image={currentFrame}
          x={0}
          y={0}
          width={width}
          height={320}
          fit="cover"
        />
      </Canvas>
    </Pressable>
  );
};

export const RotatedVideoExample = () => {
  const paused = useSharedValue(false);
  const {width, height} = useWindowDimensions();
  const {currentFrame, rotation, size} = useVideo(
    '../../assets/212135299b9e0938ca4986891.mp4',
  );
  const src = rect(0, 0, size.width, size.height);
  const dst = rect(0, 0, width, height);
  // const transform = fitbox('cover', src, dst, rotation);
  return (
    <Canvas style={{flex: 1, width: width, height: 320}}>
      <Image
        image={currentFrame}
        x={0}
        y={0}
        width={width}
        height={320}
        fit="none"
        // transform={transform}
      />
    </Canvas>
  );
};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <VideoExample />

        {/* <TestCase itShould="case2: Video Example with Shader and Matrix">
          <VideoMatrixExample />
        </TestCase> */}
        {/* <TestCase itShould="case3: Video Returned Value Example">
          <VideoReturnValueExample />
        </TestCase> */}
        {/* <TestCase itShould="case4: Rotated Video Example">
          <RotatedVideoExample />
        </TestCase> */}
      </ScrollView>
    </Tester>
  );
}

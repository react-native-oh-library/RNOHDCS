/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
 * Copyright (c) Huawei Technologies Co., Ltd. 2023-2023. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import Animated, { useSharedValue,useAnimatedStyle,withSpring,withTiming,withRepeat,cancelAnimation,withSequence} from '@react-native-oh-tpl/react-native-reanimated';
import { StyleSheet,Button,View, Text} from 'react-native';
import { snapPoint } from "react-native-redash/src/Physics"
import { mixColor } from "react-native-redash/src/Colors";
// 导出组件
export default function ReanimatedDemo() {
  const offset = useSharedValue(0);
  const progress = useSharedValue(0);
  const rotation = useSharedValue(0);

  const translateAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { 
          translateX: offset.value * 2
        },
      ],
    };
  })

    
  const colorAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: mixColor(progress.value, "#b58df1", "#38ffb3"),
    };
  });

  const rotationAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { 
          rotateZ: `${rotation.value}deg`
        },
      ],
    };
  })

  const handlePress= () => {
    // offset.value = withRepeat(withSpring(snapPoint(96, 600, [0, 125, 393])* Math.random(),{
    //  duration:1000
    // }),60,true);

    offset.value =  withSequence(
      withTiming(-snapPoint(96, 600, [0, 125, 393]), { duration: 1000 }),
      withRepeat(withTiming(snapPoint(96, 600, [0, 125, 393]), { duration: 1000 }), 60, true),
      withTiming(0, { duration: 50 })
    );
  }

  const handleColorPress = () => {
    progress.value = withRepeat(withTiming(1 - progress.value, { duration: 1000 }),60,true);
  }

  const handleRotationPress = () => {
     rotation.value = withSequence(
      withTiming(-20, { duration: 1000 }),
      withRepeat(withTiming(20, { duration: 1000 }), 60, true),
      withTiming(0, { duration: 50 })
    );
  }


  const startAnimation = () => {
    handlePress()
    handleColorPress()
    handleRotationPress()
  }

  const stopAnimation = () => {
    cancelAnimation(offset)
    cancelAnimation(progress)
    cancelAnimation(rotation)
  }

return (
  <View style={styles.container}>
    <Animated.View style={[styles.box, translateAnimatedStyles]} />
    <Animated.View style={[styles.box, colorAnimatedStyle]} />
    <Animated.View style={[styles.box, rotationAnimatedStyle]} />
    <View style={{marginBottom:10}}>
    <Button onPress={startAnimation} title="启动动画" />
    </View>
    <View>
    <Button onPress={stopAnimation} title="暂停动画" />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },

  box: {
    height: 120,
    width: 120,
    marginBottom:20,
    backgroundColor: '#b58df1',
    borderRadius: 20,
  },
});
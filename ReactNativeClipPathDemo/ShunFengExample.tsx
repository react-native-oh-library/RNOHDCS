import { View, Text, Image, ScrollView, Animated, Dimensions, PixelRatio, Button, StyleSheet, Easing } from 'react-native'
import React, { useRef, useState, useEffect, forwardRef, useMemo, useCallback } from 'react'
import { ClipPathView } from 'react-native-clippathview'
import { myPath2, myPath3, myPath10, myPath11, myPath12 } from './paths'
import { banner01 } from './imageData'

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const windowWidth = windowDimensions.width;
const windowHeight = windowDimensions.height;

const widthPx = PixelRatio.getPixelSizeForLayoutSize(windowWidth);
const heightPx = PixelRatio.getPixelSizeForLayoutSize(windowHeight);

let num = 0;
const num_max = 100;


// const CustomView = React.forwardRef((props, ref) => {
//   // some additional logic
//   return <View ref={ref} {...props} > custom view  {props.d}</View>;
// });

function CustomView(props) {
  return (
    <View {...props} > custom view  {props.d}</View>
  )
}



const WClipPath = React.forwardRef((props, ref) => {
  // some additional logic
  console.log('FG ========= 1', props.d)
  return <View ref={ref} {...props} > custom view  {props.d}</View>;
  // return (
  //   <View ref={ref}>
  //     <ClipPathView {...props} d="M 0 0 L 0 14 Q 187.5 65 375 14 L 375 0 L 0 0 Z"></ClipPathView>
  //   </View>
  // );
});

const AnimatedClipPath = Animated.createAnimatedComponent(CustomView);

export default function index() {
  const [moveY, setMoveY] = useState(0);

  const viewBox = [0, 0, 400, 400]
  const path = myPath12
  // const path_d = "M 0 0 L 0 14 Q 187.5 65 375 14 L 375 0 L 0 0 Z";
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const offset = useRef(new Animated.Value(0)).current;
  const headerViewHeight = 200;
  const pathHeight = PixelRatio.getPixelSizeForLayoutSize(headerViewHeight);
  const screenWidth = widthPx - PixelRatio.getPixelSizeForLayoutSize(32);
  const ScreenConstant = {
    height: 900,
  };

  const generatePath = (arcDepth: number) => {
    return `M 0 0
      L 0 ${pathHeight + arcDepth}
      Q ${screenWidth / 2} ${pathHeight - arcDepth - 1}
        ${screenWidth} ${pathHeight + arcDepth}
      L ${screenWidth} 0
      L 0 0
      Z`;
  };

  const path_d = generatePath(0);

  // const path_d = offset?.interpolate({
  //   inputRange: [-headerViewHeight, -26, 0],
  //   outputRange: [generatePath(0), generatePath(-26), generatePath(0)]
  // })

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const finalPath = useMemo(() => {
    if (Math.abs(moveY) <= num_max) {
      // return generatePath(-moveY*2);
      return generatePath(moveY * 3);
      // return generatePath(-104);
    }
    return generatePath(-num_max * 3);
  }, [moveY])

  const finalTransY = useMemo(() => {
    if (moveY < num_max) {
      return -headerViewHeight + moveY * 0.2
    } else if (moveY <= headerViewHeight) {
      return -headerViewHeight + moveY * 0.3
    }
    return -headerViewHeight + moveY * 0.3
  }, [moveY])


  const startHandle = () => {

  };
  const stopHandle = () => {

  };

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      {
        iterations: -1,
      }
    ).start();
  }, [rotateAnim]);

  // useEffect(() => {
  //   Animated.loop(
  //     Animated.timing(offset, {
  //       toValue: 1,
  //       duration: 2000,
  //       easing: Easing.linear,
  //       useNativeDriver: true,
  //     }),
  //     {
  //       iterations: -1,
  //     }
  //   ).start();
  // }, [offset]);

  const loop = () => {
    // console.log(`FG ????`, moveY)
    if (num <= headerViewHeight) {
      num = num + 1;
      setMoveY(num);
    }
    requestAnimationFrame(loop)
  };

  const scrollHandle = (ev) => {
    // console.log('FG scroll ', JSON.stringify(ev))
    const contentHeight = ev.nativeEvent.contentSize.height;
    const offsetY = ev.nativeEvent.contentOffset.y;
    console.log("FG scroll", contentHeight, offsetY)

    if (offsetY < 0) {
      setMoveY(offsetY);
    }
  };

  const onScrollBeginDrag = (ev) => {
    // console.log('FG onScrollBeginDrag ', JSON.stringify(ev))
    console.log("FG onScrollBeginDrag")
  };

  const onScrollEndDrag = (ev) => {
    // console.log('FG onScrollEndDrag ', JSON.stringify(ev))
    console.log("FG onScrollEndDrag")
  };

  useEffect(() => {
    // loop();
  }, [])

  return (
    <ScrollView style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0, 255, 0, 0.1)' }}
      onScroll={scrollHandle}
      onScrollBeginDrag={onScrollBeginDrag}
      onScrollEndDrag={onScrollEndDrag}
    >
      <ClipPathView
        style={{
          zIndex: 1,
          // backgroundColor: "#201E1E",
          // backgroundColor: "rgba(0, 255, 0, 0.2)",
          width: windowWidth,
          height: headerViewHeight,
          position: "absolute",
          top: -headerViewHeight,
          // flexDirection: "column-reverse",
          transform: [
            // { translateY: -headerViewHeight },
            // { rotate: "45deg"}
          ]
        }}
        // d={path_d}
        d={finalPath}
      >
        <Image
          style={{ width: '100%', height: '100%' }}
          source={{
            uri: banner01,
          }}
        />
      </ClipPathView>
      {/* <AnimatedClipPath
        svgKey="1"
        style={{
          zIndex: 1,
          backgroundColor: '#ff0',
          width: 375,
          height: 60,
          // position: 'absolute',
          // flexDirection: 'column-reverse',
        }}
        d={path_d}
        ></AnimatedClipPath> */}

      <Text></Text>
      <View style={{ padding: 20, backgroundColor: "rgba(0,0,255, 0.2)" }}>
        <Text>{JSON.stringify(windowDimensions)}</Text>
        <Text></Text>
        <Text>{JSON.stringify(screenDimensions)}</Text>
        <Text></Text>
        <Text>{widthPx}</Text>
        <Text>{heightPx}</Text>
        <Text></Text>
        <Text>{finalPath}</Text>
        <Text>{headerViewHeight}</Text>
      </View>
      <Text></Text>
      {/* <View style={{ padding: 20, backgroundColor: "rgba(0,0,255, 0.2)" }}>
        <Button title="Start" onPress={startHandle}></Button>
        <Button title="Stop" onPress={stopHandle}></Button>
      </View> */}
      {/* 
      <View style={styles.transformOriginWrapper}>
        <Animated.View
          style={[
            styles.transformOriginView,
            {
              transform: [{ rotate: spin }],
            },
          ]}>
        </Animated.View>
      </View> */}
      {/* 
      <ClipPathView viewBox={viewBox} d={myPath2} fill="#f00" style={{ backgroundColor: '#ff0' }}>
        <Image
          // style={styles.tinyLogo}
          style={{ width: 150, height: 150 }}
          source={{
            // uri: 'https://pic.rmb.bdstatic.com/bjh/5cf572ed80a9e6b003a1063e3cc62b871426.jpeg',
            uri: 'https://octodex.github.com/images/OctoAsians_dex_Full.png',
          }}
        />
      </ClipPathView> */}
    </ScrollView>
  )
}

//   <AnimatedClipPathView
//       style={{
//         zIndex: 1,
//         backgroundColor: "#201E1E",
//         width: 375,
//         height: 60,
//         position: "absolute",
//         flexDirection: "column-reverse",
//         transform: [
//           {
//             translateY:
//               this.props.offset?.interpolate({
//                 inputRange: [
//                   -ScreenConstant.height,
//                   -headerViewHeight,
//                   0,
//                   ScreenConstant.height
//                 ],
//                 outputRange: [
//                   headerViewHeight - ScreenConstant.height,
//                   0,
//                   0,
//                   0
//                 ]
//               }) ?? 0
//           }
//         ]
//       }}
//       d={offset?.interpolate({
//         inputRange: [-headerViewHeight, -26, 0],
//         outputRange: [generatePath(-26), generatePath(-26), generatePath(0)]
//       })}
// >

const styles = StyleSheet.create({
  cpvContainer: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  transformOriginWrapper: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
  },
  transformOriginView: {
    backgroundColor: 'pink',
    width: 100,
    height: 100,
    // transformOrigin: 'center',
    transformOrigin: 'left top',
  },
});
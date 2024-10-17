
// // /************
// //  * 
// //  * 
// //  * 此demo是基于0.10.3版本的 因最新版本 TriggeringView组件的回调bug 详情请查看 https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-image-header-scroll-view.md
// //  * 
// //  * 
// //  */

import React, { useEffect, useState ,useRef} from 'react';
import { StyleSheet, Text, View, Image,Animated, Dimensions ,Easing} from 'react-native';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino'
import ImageHeaderScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

const MIN_HEIGHT = 80;
const MAX_HEIGHT = 250;
const tvShowContent = {
    title: 'Doctor Who',
    overview: `
    The Doctor looks and seems human. He's handsome, witty, and could be mistaken for just another man in the street.

    But he is a Time Lord: a 900 year old alien with 2 hearts, part of a gifted civilization who mastered time travel.

    The Doctor saves planets for a living – more of a hobby actually, and he's very, very good at it.

    He's saved us from alien menaces and evil from before time began – but just who is he?`,
    year: 2005,
    genres: ['Action & Adventure', 'Drama', 'Sci-Fi & Fantasy'],
    keywords: [
        'time travel',
        'time machine',
        'phone booth',
        'alien',
        'time traveler',
        'police box',
        'space and aliens',
    ],
};

const styles = StyleSheet.create({
    image: {
        height: MAX_HEIGHT,
        width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        resizeMode: 'cover',
    },
    title: {
        fontSize: 20,
        color:'yellow'
    },
    name: {
        fontWeight: 'bold',
    },
    section: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: 'white',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    sectionContent: {
        fontSize: 16,
        textAlign: 'justify',
    },
    keywords: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    keywordContainer: {
        backgroundColor: '#999999',
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    keyword: {
        fontSize: 16,
        color: 'white',
    },
    titleContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageTitle: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 24,
    },
    navTitleView: {
        height: MIN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
        opacity: 0,
    },
    navTitle: {
        color: 'white',
        fontSize: 18,
        backgroundColor: 'transparent',
    },
    sectionLarge: {
        height: 800,
    },
});


function AnimationTest() {
    const [visible, setVisible] = useState(false);
    const fadeAnim = new Animated.Value(0);
    useEffect(() => {
        if (visible) {
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 100,
            easing: Easing.bounce,
            useNativeDriver: true,
          }).start();
        } else {
          // 如果当前是不可见的，则执行淡出动画
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 100,
            easing: Easing.bounce,
            useNativeDriver: true,
          }).start();
        }
      }, [visible, fadeAnim]);   
     
     const scaleValue = useRef(new Animated.Value(1)).current; // 初始值为1
   scaleValue.interpolate 
  // 动画开始的方法
  const startAnimation = () => {
    // 设置动画配置（目标值、持续时间、缓动函数等）
    Animated.timing(scaleValue, {
      toValue: 1.3, // 目标值
      duration: 500, // 持续时间
      useNativeDriver: true, // 使用原生驱动提高性能
      easing: Easing.linear, // 缓动函数
    }).start();
  };

  // 动画重置的方法
  const resetAnimation = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  };

  // 动画样式
  const animatedStyle = {
    transform: [{ scale: scaleValue }],
  };

    return (
      
                        <View style={{ height:1000}}>
                            <ImageHeaderScrollView
                                maxHeight={MAX_HEIGHT}
                                minHeight={MIN_HEIGHT}
                                maxOverlayOpacity={0.8}
                                minOverlayOpacity={0.2}
                                overlayColor={'blue'}
                                onScrollBeginDrag={()=>{
                                    startAnimation()
                                }}
                               onScrollEndDrag={()=>{
                                 resetAnimation()
                               }}
                               
                                renderHeader={() => <Animated.View  style={animatedStyle}> <Image source={require('./doctorwho.jpg')} style={styles.image} /> </Animated.View>}
                                renderFixedForeground={() => (
                                    <Animated.View
                                        style={[styles.navTitleView,{ opacity: fadeAnim}]}  
                                    >
                                        <Text style={styles.navTitle}>
                                            {tvShowContent.title}, ({tvShowContent.year})
                                        </Text>
                                    </Animated.View>
                                )}
                                renderForeground={() => (
                                    <View style={styles.titleContainer}>
                                        <Text style={styles.imageTitle}>{tvShowContent.title}</Text>
                                    </View>
                                )}
                                // fixedForegroundContainerStyles={{backgroundColor: '#999999',
                                // borderRadius: 10,
                                // margin: 10,
                                // padding: 10,}}
                                // useNativeDriver={true}
                                // disableHeaderGrow={false}
                                
                            >
                                <>
                                    <TriggeringView
                                       
                                        onHide={() => setVisible(true)}
                                        onDisplay={() => setVisible(false)}
                                    >
                                        <Text style={styles.title}>
                                            <Text style={styles.name}>{tvShowContent.title}</Text>, ({tvShowContent.year})
                                        </Text>
                                    </TriggeringView>
                                    <View style={styles.section}>
                                        <Text style={styles.sectionTitle}>Overview</Text>
                                        <Text style={styles.sectionContent}>{tvShowContent.overview}</Text>
                                    </View>
                                    <View style={[styles.section, styles.sectionLarge]}>
                                        <Text style={styles.sectionTitle}>Keywords</Text>
                                        <View style={styles.keywords}>
                                            {tvShowContent.keywords.map(keyword => (
                                                <View style={styles.keywordContainer} key={keyword}>
                                                    <Text style={styles.keyword}>{keyword}</Text>
                                                </View>
                                            ))}
                                        </View>
                                    </View>
                                </>
                            </ImageHeaderScrollView>
                        </View>

    );

}

export default AnimationTest;
// import React, { useRef } from 'react';
// import { View, TouchableOpacity, StyleSheet, Text, Animated, Easing } from 'react-native';

// const ScaleAnimation = () => {
//   // 创建一个Animated.Value来表示缩放比例
//   const scaleValue = useRef(new Animated.Value(1)).current; // 初始值为1

//   // 动画开始的方法
//   const startAnimation = () => {
//     // 设置动画配置（目标值、持续时间、缓动函数等）
//     Animated.timing(scaleValue, {
//       toValue: 0.5, // 目标值
//       duration: 500, // 持续时间
//       useNativeDriver: true, // 使用原生驱动提高性能
//       easing: Easing.linear, // 缓动函数
//     }).start();
//   };

//   // 动画重置的方法
//   const resetAnimation = () => {
//     Animated.timing(scaleValue, {
//       toValue: 1,
//       duration: 500,
//       useNativeDriver: true,
//       easing: Easing.linear,
//     }).start();
//   };

//   // 动画样式
//   const animatedStyle = {
//     transform: [{ scale: scaleValue }],
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={startAnimation}>
//         <Animated.View style={[styles.box, animatedStyle]} />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={resetAnimation} style={styles.resetButton}>
//         <Text>Reset</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'blue',
//   },
//   resetButton: {
//     marginTop: 20,
//   },
// });

// export default ScaleAnimation;
import * as React from 'react';
import { Animated, ScrollView, StyleSheet, View } from 'react-native';

import {
    Badge,
    IconButton,
    MD2Colors,MD3DarkTheme, MD3LightTheme
} from 'react-native-paper';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { useEffect, useRef } from 'react';


export function BadgeTest() {
    const animatedTextRef = useRef(null);  
    const opacity = useRef(new Animated.Value(1)).current; 
    useEffect(() => {  
        // 动画逻辑：将不透明度从1变为0，再变回1  
        Animated.sequence([  
          Animated.timing(opacity, {  
            toValue: 0, // 目标值：完全透明  
            duration: 1000, // 动画时长  
            useNativeDriver: true, // 使用原生驱动性能更好  
          }),  
          Animated.timing(opacity, {  
            toValue: 1, // 目标值：完全不透明  
            duration: 1000, // 动画时长  
            useNativeDriver: true, // 使用原生驱动  
          }),  
        ]).start(); // 开始动画  
      }, []); // 空依赖数组表示只运行一次  

      const animatedStyle = {  
        opacity: opacity.interpolate({  
          inputRange: [0, 1],  
          outputRange: [0, 1],  
        }),  
      };    

    const BadgeProps = [
        {
          key: 'Badge: children is 3',
          value: {
            style:styles.badge,
            visible:true
          }
        },
        {
            key: 'Badge: style is { backgroundColor:MD2Colors.blue100}',
            value: {
            style:{ backgroundColor:MD2Colors.blue100},
            visible:true
            }
        },
        {
            key: 'Badge: visible is true',
            value: {
            style:styles.badge,
            visible:true
            }
        },
        {
            key: 'Badge: visible is false',
            value: {
            style:styles.badge,
            visible:false
            }
        },
        {
            key: 'Badge: size is 22',
            value: {
            style:styles.badge,
            visible:true,
            size:22
            }
        },
        {
            key: 'Badge: size is 24',
            value: {
            style:styles.badge,
            visible:true,
            size:24
            }
        },
        
        {
            key: 'Badge: theme is colors:{ primary: "green" }',
            value: {
            style:styles.badge,
            theme:{ colors: { primary: 'green' }}
            }
        },
    ]

    return (
        <ScrollView>
         <Tester> 
          <TestSuite name='Badge'>
          <TestCase itShould={'Badge style:ref={animatedTextRef}'}  >
          <View style={styles.row}>
            <View style={styles.item}>
                <View style={styles.row}>
                    <View style={styles.item}>
                        <IconButton icon="palette-swatch" size={36} style={styles.button} />
                        <Badge  style={[styles.badge,animatedStyle]} ref={animatedTextRef} >
                            12
                        </Badge>
                    </View>
                 </View>
            </View>
         </View>
         </TestCase>
          {BadgeProps.map((item) => {
              return (
                <TestCase  itShould={item.key}  key={item.key} > 
                 <View style={styles.row}>
                    <View style={styles.item}>
                        <IconButton icon="palette-swatch" size={36} style={styles.button} theme={MD3DarkTheme }/>
                        <Badge  {...item.value}>
                            12
                        </Badge>
                    </View>
                 </View>
                </TestCase>
              );
          })}
          </TestSuite>
        </Tester>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        margin: 16,
    },
    button: {
        opacity: 0.6,
    },
    badge: {
        position: 'absolute',
        top: 4,
        right: 0,
    },
    label: {
        flex: 1,
    },
});

export default BadgeTest;

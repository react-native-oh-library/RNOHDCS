import React, {useState,useRef} from 'react';
import {View, Text, Animated} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import styles from './styles';

const CELL_COUNT = 6;
const BESE_NAME = 'BasicExample';

const BasicExample = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  console.log(`${BESE_NAME} - cellCount - ${CELL_COUNT}`);
  console.log(`${BESE_NAME} - rootStyle - ${JSON.stringify(styles.codeFieldRoot)}`);
  console.log(`${BESE_NAME} - cellCount - ${props}`);
  setTimeout(()=>{
    Animated.timing(fadeAnim,{
      toValue:1,
      duration:5000,
      useNativeDriver:true
    }).start(({finished})=>{
      /* 动画完成的回调函数 */
      console.log(`${BESE_NAME} - Animated -动画完成的回调函数`) 
    })
  },3000);
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Basic example</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        RootComponent={Animated.View}
        rootStyle={[styles.codeFieldRoot,{opacity:fadeAnim}]}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </View>
  );
};

export default BasicExample;

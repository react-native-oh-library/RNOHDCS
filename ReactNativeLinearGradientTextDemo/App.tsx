import React from 'react';

import { StyleSheet, View,Button } from 'react-native';
import { LinearGradientText } from 'react-native-linear-gradient-text';
import { TestCase, Tester } from '@rnoh/testerino';


export default function App() {
  const [text, setText] = React.useState('Hello World');

  return (
    <Tester>
      <TestCase tags={['C_API']} itShould="show linear gradien text">
        <ShowText/>
      </TestCase>
      <TestCase tags={['C_API']} itShould="change color position">
        <ChangeColorPosition/>
      </TestCase>
      <TestCase tags={['C_API']} itShould="change font size(Dependent on react native text components)">
        <ChangeTextStyle/>
      </TestCase>
    </Tester>
  );
}

export function ShowText() {
  const [text, setText] = React.useState('Hello World');
  const [color, setColor] = React.useState('#ff0000');

  return (
    <View style={styles.container}>
    <LinearGradientText
      colors={['#000000', color, '#000000']}
      text={text}
    />
    <View style={styles.row}>
    <Button title ="change text" onPress={()=>{
      setText('Hello World' + new Date().getTime().toString())
      }}/>

    <Button title ="change color" onPress={()=>{
      setColor(generateRandomColor())
      }}/>
    </View>
  </View>
  );
}

export function ChangeColorPosition() {
  const [startX, setStartX] = React.useState(0.5);
  const [startY, setStartY] = React.useState(0);
  const [endX, setEndX] = React.useState(1);
  const [endY, setEndY] = React.useState(1);

  // setInterval(()=>{
  //   setStartX(parseFloat(Math.random().toFixed(1)))
  //   setStartY(parseFloat(Math.random().toFixed(1)))
  //   setEndX(parseFloat(Math.random().toFixed(1)))
  //   setEndY(parseFloat(Math.random().toFixed(1)))

  // },1000)

  return (
    <View style={styles.container}>
    <LinearGradientText
      colors={['#000000', '#ff0000', '#000000']}
      text={'Hello World'}
      start={{ x: startX, y: startY }}  
        end={{ x: endX, y: endY }}  
        textStyle={{ fontSize: 40 ,width:200}}  
        textProps={{allowFontScaling:true,numberOfLines:1}}
    />
    <Button title ="change text" onPress={()=>{
      setStartX(parseFloat(Math.random().toFixed(0)))
    setStartY(parseFloat(Math.random().toFixed(1)))
    setEndX(parseFloat(Math.random().toFixed(0.5)))
    setEndY(parseFloat(Math.random().toFixed(0.5)))
      }}/>
  </View>
  );
}

export function ChangeTextStyle() {
  const [fontSize, setFontSize] = React.useState(10);

  return (
    <View style={styles.container}>
    <LinearGradientText
      colors={['#000000', '#ff0000', '#000000']}
      text={'Hello World'}
        textStyle={{ fontSize: fontSize ,width:200}}  
        textProps={{allowFontScaling:true,numberOfLines:1}}
    />
    <Button title ="change font Size" onPress={()=>{
        setFontSize(Math.random() * 50)
      }}/>
  </View>
  );
}


function generateRandomColor(): string {  
  const letters = '0123456789ABCDEF';  
  let color = '#';  
  for (let i = 0; i < 6; i++) {  
      color += letters[Math.floor(Math.random() * 16)];  
  }  
  return color;  
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    rowGap: 20,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    flexDirection:'row'
  },
  row:{
    flexDirection:'row'
  }
});

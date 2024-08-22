import React, { useState } from 'react'
import { View, StyleSheet, Button, Text, ScrollView } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'


export default function SwitchDemo(){
  const [isPlaying, setIsPlaying] = useState(true)
  const [count, setCount] = useState(15)
  
  return(
    <View  style={styles.container}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={count}
        initialRemainingTime={6}
        isSmoothColorTransition={false}
        colors="#aabbcc"
        onUpdate={(remainingTime) => {
          console.log('Counter is ', count)
          console.log('Remaining time is ', remainingTime)
        }}
        onComplete={() => ({ shouldRepeat: true })}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
      <Button onPress={() => setIsPlaying((prev) => !prev)} title={'Toggle Playing'}></Button>
      <Button onPress={() => setCount((prev) => (prev += 5))} title={'Count'}></Button>
    </View>
    )
  }
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:"#fff",
      
    }
  });
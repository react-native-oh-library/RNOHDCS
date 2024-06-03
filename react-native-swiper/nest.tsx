import React, { useRef, useState } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'

var styles = StyleSheet.create({
  wrapper: {
  backgroundColor: 'red'
  },
  slide1: {
     flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
   flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default () => {
  const swiper = useRef(null)
  const [enable, setEnable] = useState(11111)
  return (
    <Swiper
      ref={swiper}
      containerStyle={styles.wrapper}
      index={0}
      showsButtons
      onTouchStart={e => {
        setEnable(222)
      }}
      onTouchEnd={e => {
        setEnable(333)
      }}
      onScrollBeginDrag={
        e=>{
            setEnable(9999)
        }
      }
      onMomentumScrollEnd={e => {
        setEnable(5555)
      }}
    >
                   <View style={styles.slide1}>
                   <Text style={styles.text}>{enable}</Text>
                 </View>
                 <View style={styles.slide2}>
                   <Text style={styles.text}>{enable}</Text>
                 </View>
                 <View style={styles.slide3}>
                   <Text style={styles.text}>{enable}</Text>
                 </View>
    </Swiper>
  )
}

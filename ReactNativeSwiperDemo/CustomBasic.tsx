import React from 'react'
import { Text, View } from 'react-native'
import Swiper from 'react-native-swiper'

var styles = {
  wrapper: {
    backgroundColor: 'red',
    flex:0
  },
  slide1: {
  flex:1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  slide2: {
       flex:1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  slide3: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

export default () => (
  <View style={{flex:1, width:200}}>
      <Swiper
        style={{flex:0,backgroundColor: 'yellow'}}
        showsButtons
         containerStyle={
                         {
                             flex:0
                         }
                     }
        width={200}
        height={200}
        >
        <View style={{backgroundColor: 'green', height: 150}}><Text>1</Text></View>
        <View style={{backgroundColor: 'green', height: 150}}><Text>2</Text></View>
        <View style={{backgroundColor: 'green', height: 150}}><Text>3</Text></View>
        <View style={{backgroundColor: 'green', height: 150}}><Text>4</Text></View>
      </Swiper>
    </View>
)

import React from 'react'
import { Text, View } from 'react-native'
import Swiper from 'react-native-swiper'

var styles = {
  wrapper: {},
  slide1: {
    width:"200%",
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,

    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,

    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

export default () => {
const swiperRef = React.useRef(null);

return (
  <Swiper ref={swiperRef} style={styles.wrapper} showsButtons
  onTouchStart={e => {
      swiperRef.current.scrollBy(2,true)
    }}>
    <View testID="Hello" style={styles.slide1}>
      <Text style={styles.text}>Hello Swiper</Text>
    </View>
    <View testID="Beautiful" style={styles.slide2}>
      <Text style={styles.text}>Beautiful</Text>
    </View>
    <View testID="Simple" style={styles.slide3}>
      <Text style={styles.text}>And simple</Text>
    </View>
  </Swiper>
)
}

import React,{useState} from 'react'
import { Text, View } from 'react-native'
import Swiper from 'react-native-swiper'

var styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

export default () => {
   const [enable, setEnable] = useState(11111)
    return(
      <Swiper style={styles.wrapper} showsButtons loop={false}
     onIndexChanged={e => {
        setEnable(e)
      }}
      showsPagination={false}
       >
        <View testID="Hello" style={styles.slide1}>
          <Text style={styles.text}>{enable}</Text>
        </View>
        <View testID="Beautiful" style={styles.slide2}>
          <Text style={styles.text}>{enable}</Text>
        </View>
        <View testID="Simple" style={styles.slide3}>
          <Text style={styles.text}>{enable}</Text>
        </View>
      </Swiper>
      )
}

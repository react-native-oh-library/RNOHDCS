import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = {
  wrapper: {

  },
  container:{
    height:'95%'
  },
  slide: {
     flex:1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    width,
    flex: 1
  },
  paginationStyle: {
    position: 'absolute',
    bottom: -30,
    right: 10
  },
  paginationText: {
    color: 'blue',
    fontSize: 20
  }
}

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: 'grey' }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}

export default class extends Component {
  render() {
    return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        renderPagination={renderPagination}
        loop
      >
        <View
          style={styles.slide}
          title={
            <Text   numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
          }
        >
          <Image style={styles.image} source={require('./img/1.jpg')} />
        </View>
        <View
          style={styles.slide}
          title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}
        >
          <Image style={styles.image} source={require('./img/2.jpg')} />
        </View>
        <View
          style={styles.slide}
          title={<Text  numberOfLines={1}>Why Stone split from Garfield</Text>}
        >
          <Image style={styles.image} source={require('./img/3.jpg')} />
        </View>
        <View
          style={styles.slide}
          title={
            <Text  numberOfLines={1}>Learn from Kim K to land that job</Text>
          }
        >
          <Image style={styles.image} source={require('./img/4.jpg')} />
        </View>
      </Swiper>
      </View>
    )
  }
}

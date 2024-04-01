import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = {
  container: {
    height:'95%'
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

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
  },

  image: {
    width,
    flex: 1
  }
}

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} height={200} horizontal={false} autoplay
        showsButtons={true}
        buttonWrapperStyle={
            {
                 backgroundColor: 'transparent',
                 flexDirection: 'row',
                 position: 'absolute',
                 top: 50,
                 left: 0,
                 flex: 1,
                 paddingHorizontal: 10,
                 paddingVertical: 10,
                 justifyContent: 'space-between',
                 alignItems: 'center'
             }
        }
         nextButton={
                    <Text style={styles.buttonText}>*</Text>
                  }
                  prevButton={
                        <Text style={styles.buttonText}>*</Text>
                  }
        dotStyle={
               {
                 backgroundColor:'red'
               }
        }
        activeDotStyle={
            {
                backgroundColor:'yellow'
            }
        }
        >
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>

        <Swiper
          style={styles.wrapper}
          height={240}
          dotColor={'red'}
          activeDotColor={'blue'}

          paginationStyle={{
            bottom: -23,
            left: null,
            right: 10
          }}
          loop
        >
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
            }
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./img/1.jpg')}
            />
          </View>
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Big lie behind Nine’s new show</Text>
            }
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./img/2.jpg')}
            />
          </View>
          <View
            style={styles.slide}
            title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./img/3.jpg')}
            />
          </View>
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Learn from Kim K to land that job</Text>
            }
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./img/4.jpg')}
            />
          </View>
        </Swiper>
      </View>
    )
  }
}

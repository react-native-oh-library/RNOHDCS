import React, { useState } from "react";
import {  Text, View, Image, ScrollView, StyleSheet } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const ReactImageZoon = () => {
  const [onSwipeDownStatus, setOnSwipeDownStatusd] = useState('');


  // 自定义图像组件
  const renderImage = (props: any) => {
    return (
      <View>
        <Image source={{ uri: 'https://octodex.github.com/images/godotocat.png' }} style={{ width: '100%', height: '100%' }}></Image>
      </View>
    )
  }

  const imagesFailImage = [
    {
      url: 'https://octodex.github.com/images/godotocat.png',
      props: {
      }
    },
    {
      url: '',
      props: {
        source: require('./assets/2.png')
      }
    },]

  return (
    <View style={{ width: '100%', height: '100%' }}>
      <ScrollView>
        <View>
          <Text>
            renderImage;menuContext
            enableSwipeDown,swipeDownThreshold,
          </Text>
          <Text>onSwipeDown{onSwipeDownStatus}</Text>
        </View>
        <View style={{ width: '100%', height: 500 }}>
          <ImageViewer
            imageUrls={imagesFailImage}
            renderImage={renderImage}
            enableSwipeDown={true}
            swipeDownThreshold={100}
            onSwipeDown={() => {
              setOnSwipeDownStatusd('onSwipeDown')
            }}
            menuContext={{ saveToLocal: '保存图片', cancel: '取消' }}
          />
        </View>


      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

export default ReactImageZoon
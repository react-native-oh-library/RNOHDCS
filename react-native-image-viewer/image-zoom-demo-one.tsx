import React, { PureComponent, useRef, useState } from "react";
import { Alert, Modal, Text, View, Button, Image, ScrollView, StyleSheet } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const ReactImageZoon = () => {
  // 向下滑动的阈值
  const [flipThreshold, setFlipThreshold] = useState(0);
  // 页脚位置
  const [footerContainerStyle, setFlexooterContainerStyle] = useState(100);
  // 翻页动画时间
  const [pageAnimateTimeA, setPageAnimateTime] = useState(0);

  const [changeStatus, setChangeStatus] = useState('')
  const renderHeaderFun = () => {
    return (
      <View style={{ backgroundColor: 'red' }}>
        <Text style={{ backgroundColor: 'red', color: '#fff', fontSize: 20 }}>自定义页头或页脚</Text>
      </View>
    )
  }


  const renderArrowLeftFun = () => {
    return (
      <View style={{ width: 20, height: 20 }}>
        <Image source={{ uri: 'https://bpic.51yuansu.com/pic2/cover/00/52/03/5816a254309d2_610.jpg' }} style={{ width: '100%', height: '100%' }}></Image>
      </View>
    )
  }
  const renrenderArrowRightFun = () => {
    return (
      <View style={{ width: 20, height: 20 }}>
        <Image source={{ uri: 'https://pic.616pic.com/ys_img/00/13/60/slee3clqRZ.jpg' }} style={{ width: '100%', height: '100%' }}></Image>
      </View>
    )
  }


  const renderIndicatorFn = (currentIndex?: number, allSize?: number) => {
    return (
      <View style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 38,
        zIndex: 99,
        backgroundColor: 'red'
      }}>
        <Text style={{ color: '#fff' }}> {`${currentIndex}/${allSize}`}</Text>
      </View>
    );
  }

  const images = [{
    url: '',
    props: {
      // headers: ...
      source: require('./assets/1.png')
    }
  },
  {
    url: 'https://octodex.github.com/images/godotocat.png',
    props: {
      // headers: ...

    }
  }, {
    url: '',
    props: {

    }
  }]

  const clearBtn = () => {
    setChangeStatus('')
    setFlexooterContainerStyle(100)
    setPageAnimateTime(0)
  }
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <ScrollView>
        <View>
          <Text>
            imageUrls
            enableImageZoom;index;saveToLocalByLongPress;
            backgroundColor,onChange;
            flipThreshold;renderIndicator;renderArrowRight
            renderArrowLeft;pageAnimateTime;renderHeader;renderFooter;
            onClick;footerContainerStyle;failImageSource
          </Text>
          <Text>保存到相机的回调onSaveToCamera</Text>
          <Text>查看更改的状态{changeStatus}</Text>
        </View>
        <View style={{ width: '100%', height: 500 }}>
          <ImageViewer
            image Urls={images}
            index={1}
            enableImageZoom={true}
            backgroundColor={'pink'}
            saveToLocalByLongPress={false}
            onSave={null}
            onSaveToCamera={() => {
              setChangeStatus('onSaveToCamera')
            }}
            onChange={() => {
              setChangeStatus('onChange')
            }}
            onClick={() => {
              setChangeStatus('onClick')
            }}
            flipThreshold={flipThreshold}
            renderArrowLeft={renderArrowLeftFun}
            renderArrowRight={renrenderArrowRightFun}
            pageAnimateTime={pageAnimateTimeA}
            renderHeader={renderHeaderFun}
            renderFooter={renderHeaderFun}
            renderIndicator={renderIndicatorFn}
            footerContainerStyle={{ bottom: footerContainerStyle, position: "absolute", zIndex: 9999 }}
            failImageSource={{
              width: 300,
              height: 300,
              url: 'https://octodex.github.com/images/Robotocat.png'
            }}
          />
        </View>
        <View style={styles.container}>
          <Button title="下一页滑动0" onPress={() => setFlipThreshold(0)} />
          <Button title="下一页滑动阈值1000" onPress={() => setFlipThreshold(1000)} />
          <Button title="页脚位置" onPress={() => setFlexooterContainerStyle(200)} />
          <Button title="清空" onPress={clearBtn} />
        </View>
        <Text></Text>
        <Button title="翻页动画" onPress={() => setPageAnimateTime(500)}></Button>
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
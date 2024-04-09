import React, { PureComponent, useRef, useState } from "react";
import { Alert, Modal, Text, View, Button, Image, ScrollView, StyleSheet } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const ReactImageZoon = () => {
  const [maxOverflowStatus, setOverflowStatus] = useState(10);
  const [doubleClickStatus, setDoubleClickStatus] = useState(0);
  const [changeDouble, setChangeDouble] = useState('')
  const [changeStatus, setChangeStatus] = useState('')

  const loadingRenderFun = () => {
    return (
      <View style={{ width: 200, height: 200, backgroundColor: 'red' }}>
        <Image source={{ uri: 'https://octodex.github.com/images/godotocat.png' }} style={{ width: '100%', height: '100%' }}></Image>
      </View>
    )
  }

  const imagesFailImage = [
    {
      url: 'https://octodex.github.com/images/godotocat.png',
      props: {
      }
    }, {
      url: '',
      props: {
        source: require('./assets/1.png')
      }
    },
    {
      url: '',

      props: {
        source: require('./assets/2.png')
      }
    },]
  const menusImag = ({ cancel, saveToLocal }: any) => {
    const save = () => {
      saveToLocal()
    }
    const onCancel = () => {
      saveToLocal()
    }
    return (
      <View>
        <Button title="点击取消" onPress={onCancel}></Button>
        <Button title="点击保存" onPress={save}></Button>
      </View>
    )
  }

  return (
    <View style={{ width: '100%', height: '100%' }}>
      <ScrollView>
        <View>
          <Text>
            enablePreload;
            useNativeDriver;
            loadingRender;
            doubleClickInterval;
            onDoubleClick;
            onCancel;maxOverflow;
            onMove;onSave;menus
          </Text>
          <Text>查看更改的状态{changeStatus}</Text>
          <Text>查看更改的状态onDoubleClick{changeDouble}</Text>
        </View>
        <View style={{ width: '100%', height: 500 }}>
          <ImageViewer
            imageUrls={imagesFailImage}
            saveToLocalByLongPress={true}
            onMove={() => {
              setChangeStatus('onMove')
            }}
            onClick={(callback) => {
              callback()
            }}
            onSave={(e) => {
              setChangeStatus('onSave')
            }}
            onCancel={() => {
              setChangeStatus('onCancel')
            }}
            doubleClickInterval={doubleClickStatus}
            onDoubleClick={() => {
              setChangeDouble('onDoubleClick')
            }}
            menus={menusImag}
            maxOverflow={maxOverflowStatus}
            loadingRender={loadingRenderFun}
            useNativeDriver={false}
            enablePreload={false}

          />
        </View>
        <View style={styles.container}>
          <Button title="点击可操作双击" onPress={() => setDoubleClickStatus(1000)} />
          <Button title="点击可进行翻页" onPress={() => setOverflowStatus(1000)} />
          <Button title="清空" onPress={() => setChangeStatus('')} />
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
import React, { PureComponent, useRef, useState } from "react";
import { Alert, Modal, Text, View, Button, Image, ScrollView } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const ReactImageZoon = () => {
  const [showPopverA, setShowPopverA] = useState(0);
  const [swipeDownThreshold, setSwipeDownThreshold] = useState(0);
  // 向下滑动的阈值
  const [flipThreshold, setFlipThreshold] = useState(0);
  // 页脚位置
  const [footerContainerStyle, setFlexooterContainerStyle] = useState(100);
  // 翻页动画时间
  const [pageAnimateTimeA, setPageAnimateTime] = useState(0);
  // 控制list标题的显示和隐藏
  const [showTitle, setShowTitle] = useState(true);
  //触发事件的提示
  const [clickText, setClickText] = useState('NO');
  //loading 触发的提示
  const [clickTextLoading, setClickTextLoading] = useState('NO');
  //其他触发的方法的提示
  const [otherFun, setOtherFun] = useState('NO');
  const [doubleClickStatus, setDoubleClickStatus] = useState(0);
  const [maxOverflowStatus, setOverflowStatus] = useState(10);

  const setFlipThresholdBtn = () => {
    setClickTextLoading('NO')
    setOtherFun('NO')
    setClickText('NO')
    setShowPopverA(0)
    setShowTitle(true)
  }

  const buttonChange = (index: number) => {
    setShowPopverA(index)
    if (index !== 0) {
      setShowTitle(false)
      setSwipeDownThreshold(0)
      setFlexooterContainerStyle(100)
      setPageAnimateTime(0)
      setDoubleClickStatus(0)
      setOverflowStatus(10)
    }
  }

  const onSwipeDown = () => {
    setShowPopverA(0)
    setShowTitle(true)
  }

  // 自定义图像组件

  const renderImage = (props: any) => {
    return (
      <View>
        <Image source={{ uri: 'https://avatars2.githubusercontent.com/u/77?v=3&s=460' }} style={{ width: '100%', height: '100%' }}></Image>
      </View>
    )
  }

  const renderHeaderFun = () => {
    return (
      <View style={{ backgroundColor: 'red' }}>
        <Text style={{ backgroundColor: 'red', color: '#fff', fontSize: 20 }}>自定义页头或页脚</Text>
      </View>
    )
  }

  const loadingRenderFun = () => {
    return (
      <View style={{ width: 200, height: 200, backgroundColor: 'red' }}>
        <Image source={{ uri: 'https://avatars2.githubusercontent.com/u/7970946?v=3&s=460' }} style={{ width: '100%', height: '100%' }}></Image>
      </View>
    )
  }

  const renderArrowLeftFun = () => {
    return (
      <View style={{ width: 20, height: 20 }}>
        <Image source={require('./assets/1.png')} style={{ width: '100%', height: '100%' }}></Image>
      </View>
    )
  }
  const renrenderArrowRightFun = () => {
    return (
      <View style={{ width: 20, height: 20 }}>
        <Image source={require('./assets/1.png')} style={{ width: '100%', height: '100%' }}></Image>
      </View>
    )
  }

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
  }, {
    url: '',
    props: {
      source: require('./assets/2.png')
    }
  }]
  const imagesFailImage = [
    {
      url: 'https://avatars2.githubusercontent.com/u/66?v=3&s=460',
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

      }
    },]

  const imagesNetWorkLoad = [{
    url: 'https://avatars2.githubusercontent.com/u/79?v=3&s=460',
    props: {

    }
  },
  {
    url: 'https://avatars2.githubusercontent.com/u/988',
    props: {

    }
  }
  ]
  const imagesSaveToCamera = [{
    url: 'https://avatars2.githubusercontent.com/u/795?v=3&s=460',
    props: {

    }
  }]
  return (
    <ScrollView>
      <View>
        {showTitle ? <Button title="onSaveToCamera" onPress={() => buttonChange(1)} />
          : ''}
        <Modal visible={showPopverA == 1} transparent={true}>
          <View>
            <Text>保存到相机的回调onSaveToCamera{clickText} </Text>
          </View>
          <ImageViewer
            imageUrls={imagesSaveToCamera}
            onSave={null}
            onSaveToCamera={() => {
              setClickText('Yes + onSaveToCamera')
            }}
          />
          <Button title="点击关闭" onPress={setFlipThresholdBtn} />
        </Modal>

        {showTitle ? <Button title="index,menuContext,enableImageZoon" onPress={() => buttonChange(2)} />
          : ''}


        <Modal visible={showPopverA == 2} transparent={true} >
          <Text>启用图像缩放enableImageZoom</Text>
          <Text>图像的初始化索引index</Text>
          <ImageViewer
            imageUrls={images}
            index={1}
            enableImageZoom={true}
          />
          <Button title="点击关闭" onPress={setFlipThresholdBtn} />
        </Modal>

        {showTitle ? <Button title="saveToLocalByLongPress,backgroundColor,enableSwipeDown,swipeDownThreshold,onSwipeDown" onPress={() => buttonChange(3)} />
          : ''}

        <Modal visible={showPopverA == 3} transparent={true} style={{ width: 300, height: 300 }}>
          <View >
            <Text>saveToLocalByLongPress,改为false长按无显示保存到相册弹窗 </Text>
            <Text>背景颜色，backgroundColor;</Text>
            <Text>启用向下滑动以关闭图像查看器。向下滑动时，将触发 onCancel;enableSwipeDown </Text>
            <Text>触发的阈值，向下滑动功能swipeDownThreshold</Text>
            <Text>向下滑动消失的的回调</Text>
          </View>
          <ImageViewer
            imageUrls={images}
            saveToLocalByLongPress={false}
            backgroundColor={'pink'}
            enableSwipeDown
            swipeDownThreshold={swipeDownThreshold}
            onSwipeDown={onSwipeDown}
          />
          <Button title="点击增加向下滑动的阈值500" onPress={() => setSwipeDownThreshold(500)} />
          <Button title="点击关闭" onPress={setFlipThresholdBtn} />
        </Modal>

        {showTitle ? <Button title="flipThreshold" onPress={() => buttonChange(4)} />
          : ''}

        <Modal visible={showPopverA == 4} transparent={true}>
          <View >
            <Text>滑动到下一页的阈值 </Text>
          </View>
          <ImageViewer
            imageUrls={images}
            flipThreshold={flipThreshold}
          />
          <Button title="下一页的滑动阈值0" onPress={() => setFlipThreshold(0)} />
          <Button title="下一页的滑动阈值1000" onPress={() => setFlipThreshold(1000)} />
          <Button title="点击关闭" onPress={setFlipThresholdBtn} />
        </Modal>

        {showTitle ? <Button title="onChange,renderArrowLeft,renderArrowRight,pageAnimateTime,renderHeader,renderFooter,footerContainerStyle" onPress={() => buttonChange(5)} />
          : ''}

        <Modal visible={showPopverA == 5} transparent={true}>
          <View>
            <Text>图像改变回调 onChange{clickText}</Text>
            <Text>左箭头renderArrowLeft</Text>
            <Text>右箭头pageAnimateTime </Text>
            <Text>翻页动画时间pageAnimateTime</Text>
            <Text>自定义使用页脚或者页renderHeader/renderFooter头</Text>
            <Text>容器自定义样式道具他将保存您被传递的页脚footerContainerStyle</Text>

          </View>
          <ImageViewer
            imageUrls={images}
            onChange={() => {
              setClickText('Yes + onChange')
            }}
            renderArrowLeft={renderArrowLeftFun}
            renderArrowRight={renrenderArrowRightFun}
            pageAnimateTime={pageAnimateTimeA}
            renderHeader={renderHeaderFun}
            renderFooter={renderHeaderFun}
            footerContainerStyle={{ bottom: footerContainerStyle, position: "absolute", zIndex: 9999 }}

          />
          <Button title="页脚位置100" onPress={() => setFlexooterContainerStyle(200)} />
          <Button title="翻页动画时间500" onPress={() => setPageAnimateTime(500)} />
          <Button title="点击关闭" onPress={setFlipThresholdBtn} />
        </Modal>
        {showTitle ? <Button title="menus" onPress={() => buttonChange(6)} />
          : ''}

        <Modal visible={showPopverA == 6} transparent={true}>
          <View>
            <Text> 自定义菜单：menus</Text>
          </View>
          <ImageViewer
            imageUrls={imagesSaveToCamera}
            menus={menusImag}
          />
          <Button title="点击关闭" onPress={setFlipThresholdBtn} />
        </Modal>

        {showTitle ? <Button title="renderIndicator" onPress={() => buttonChange(8)} />
          : ''}

        <Modal visible={showPopverA == 8} transparent={true} style={{ width: 100, height: 100 }}>
          <Text>自定义指标renderIndicator</Text>
          <ImageViewer
            imageUrls={images}
            renderIndicator={renderIndicatorFn}
          />
          <Button title="点击关闭" onPress={setFlipThresholdBtn} />
        </Modal>
        {
          showTitle ? <Button title="renderImage" onPress={() => buttonChange(9)} />
            : ''
        }
        <Modal visible={showPopverA == 9} transparent={true}>
          <Text>自定义图像组件renderImage</Text>
          <ImageViewer
            imageUrls={images}
            index={0}
            renderImage={renderImage}
          />
          <Button title="点击关闭" onPress={setFlipThresholdBtn} />
        </Modal>
        {
          showTitle ? <Button title="onMove" onPress={() => buttonChange(10)} />
            : ''
        }
        <Modal visible={showPopverA == 10} transparent={true}>
          <Text>报告移动位置数据(有助于构建叠加层)onMove{otherFun}</Text>
          <ImageViewer
            imageUrls={images}
            onMove={() => {
              setOtherFun('Yes + onMove')
            }}
          />
          <Button title="点击关闭" onPress={setFlipThresholdBtn} />
        </Modal>

        {
          showTitle ? <Button title="menuContext" onPress={() => buttonChange(11)} />
            : ''
        }
        <Modal visible={showPopverA == 11} transparent={true}>
          <ImageViewer
            imageUrls={images}
            menuContext={{ saveToLocal: '保存图片', cancel: '取消' }}
          />
          <Button title="点击关闭" onPress={setFlipThresholdBtn} />
        </Modal>


        {
          showTitle ? <Button title="onCancel,onSave" onPress={() => buttonChange(12)} />
            : ''
        }
        <Modal visible={showPopverA == 12} transparent={true}>
          <Text>onCancel{clickText}需要单击一下</Text>
          <Text>onSave{otherFun}</Text>
          <ImageViewer
            imageUrls={images}
            menuContext={{ saveToLocal: '保存图片', cancel: '取消' }}
            onClick={(callback) => {
              callback()
            }}
            onSave={(e) => {
              setOtherFun('Yes + onSave')
              console.log('565768969')
            }}
            onCancel={() => {
              setClickText('Yes + onCancel')
            }}
          
          />
          <Button title="点击关闭" onPress={setFlipThresholdBtn} />
        </Modal>


        {
          showTitle ? <Button title="onDoubleClick" onPress={() => buttonChange(13)} />
            : ''
        }
        <Modal visible={showPopverA == 13} transparent={true}>
          <Text>onDoubleClick{clickText}</Text>

          <ImageViewer
            imageUrls={images}
            doubleClickInterval={1000}
            onDoubleClick={(e) => {
              setClickText('Yes + onDoubleClick')
            }}

          />
          <Button title="点击关闭" onPress={setFlipThresholdBtn} />
        </Modal>

        {
          showTitle ? <Button title="maxOverflow" onPress={() => buttonChange(14)} />
            : ''
        }
        <Modal visible={showPopverA == 14} transparent={true}>
          <Text>当前页能滑到下一页X位置最大值</Text>
          <ImageViewer
            imageUrls={images}
            maxOverflow={maxOverflowStatus}
            enableSwipeDown
          />
          <Button title="maxOverflow-- 1000" onPress={() => setOverflowStatus(1000)} />
          <Button title="点击关闭" onPress={setFlipThresholdBtn} />
        </Modal>


        {
          showTitle ? <Button title="doubleClickInterval" onPress={() => buttonChange(15)} />
            : ''
        }
        <Modal visible={showPopverA == 15} transparent={true}>
          <Text>双击无效，请点击按钮改变doubleClickInterval{clickText}</Text>
          <ImageViewer
            imageUrls={images}
            doubleClickInterval={doubleClickStatus}
            onDoubleClick={(e) => {
              setClickText('Yes + onDoubleClick')
            }}
          />
          <Button title="doubleClickStatus改变--1000" onPress={() => setDoubleClickStatus(1000)} />
          <Button title="点击关闭" onPress={setFlipThresholdBtn} />
        </Modal>

        {
          showTitle ? <Button title="onClick" onPress={() => buttonChange(16)} />
            : ''
        }
        <Modal visible={showPopverA == 16} transparent={true}>

          <Text>onClick{clickTextLoading}</Text>
          <ImageViewer
            imageUrls={images}
            onClick={() => {
              setClickTextLoading('Yes + onClick')
            }}
          />
          <Button title="点击关闭" onPress={setFlipThresholdBtn} />
        </Modal>

        {
          showTitle ? <Button title="loadingRender" onPress={() => buttonChange(17)} />
            : ''
        }
        <Modal visible={showPopverA == 17} transparent={true}>
          <Text>用于加载的占位符loadingRender(观察首次加载图片变化)</Text>
          <ImageViewer
            imageUrls={imagesNetWorkLoad}
            loadingRender={loadingRenderFun}
          />
          <Button title="点击关闭" onPress={setFlipThresholdBtn} />
        </Modal>

        {
          showTitle ? <Button title="useNativeDriver" onPress={() => buttonChange(18)} />
            : ''
        }
        <Modal visible={showPopverA == 18} transparent={true}>
          <Text>使用useNativeDriver 进行动画处理</Text>
          <ImageViewer
            imageUrls={images}
            enableImageZoom={false}
            useNativeDriver={true}
          />
          <Button title="点击关闭" onPress={setFlipThresholdBtn} />
        </Modal>
        {showTitle ? <Button title="enablePreload,failImageSource" onPress={() => buttonChange(19)} />
          : ''}
        <Modal visible={showPopverA == 19} transparent={true}>
          <Text>预加载下一个图像需要加载网络图片enablePreload</Text>
          <Text> 失败占位符failImageSource(第三张为加载不成功图片)</Text>
          <ImageViewer
            imageUrls={imagesFailImage}
            enablePreload={true}
            failImageSource={{
              width: 300,
              height: 300,
              url: 'https://avatars2.githubusercontent.com/u/12334555'
            }}
          />
          <Button title="点击关闭" onPress={setFlipThresholdBtn} />
        </Modal>
      </View>
    </ScrollView>
  )
}

export default ReactImageZoon 
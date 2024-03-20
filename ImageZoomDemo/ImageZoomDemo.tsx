import React, { useState } from 'react';
import { Button, Dimensions, Image, LayoutChangeEvent, StyleSheet, Switch, Text, View } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom'
import type { IOnClick, IOnMove, ICenterOn } from 'react-native-image-pan-zoom';
// const LOCAL_IMAGE_ASSET_ID = require('../')

const formatEventData = (evt: IOnClick) => {
    const { locationX, locationY, pageX, pageY } = evt;
    return `x ${locationX.toFixed(2)} y ${locationY.toFixed(2)} pageX ${pageX.toFixed(2)} pageY ${pageY.toFixed(2)}`;
}

const ImageZoomDemo = () => {
    //长按
    const [longPressData, setLongPressData] = useState("LongPress: Haven't long pressed yet");
    const longPressHandler = (evt: IOnClick) => {
        const data = formatEventData(evt);
        setLongPressData(`LongPress: ${data}`);
    }
    const [longPressTime, setLongPressTime] = useState(800);

    // 双击
    const [doubleClickData, setDoubleClickData] = useState("DoubleClick: Haven't doubleclicked yet");
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleDoubleClickSwitch = () => setIsEnabled(previousState => !previousState);
    const doubleClickHandler = (evt: IOnClick) => {
        setDoubleClickData(`DoubleClick: x: ${evt.locationX.toFixed(2)} y: ${evt.locationY.toFixed(2)}}`);
    }
    const [clickInterval, setClickInterval] = useState(175);

    // 单击
    const [singleClickData, setSingleClickData] = useState("SingleClick: Haven't singleClicked yet");
    const singleClickHandler = (evt: IOnClick) => {
        setSingleClickData(`SingleClick: x: ${evt.locationX.toFixed(2)} y: ${evt.locationY.toFixed(2)}`);
    }

    // 下滑
    const [swiperDownData, setSwiperDownData] = useState("SwiperDown: Haven't swipe down yet");
    const [enableSwiperDown, setSwiperDownEnabled] = useState(false);
    const [downThreshold, setDownThreshold] = useState(230);
    const swiperDownHandler = () => {
        setSwiperDownData('SwiperDown: already swipe down');
    }
    const toggleSwipeDownSwitch = () => {
        setSwiperDownEnabled(previousState => !previousState);
    }

    // 移动
    const [moveData, setMoveData] = useState("Move: Haven't move yet");
    const moveHandler = (data: IOnMove) => {
        const { type, positionX, positionY, scale, zoomCurrentDistance } = data;
        setMoveData(`Move: type:${type} positionX:${positionX.toFixed(2)} positionY:${positionY.toFixed(2)} scale:${scale} zoomCurrentDistance:${zoomCurrentDistance}`);
    }

    // 窗口和图片尺寸
    const winWidth = Dimensions.get('window').width;
    const winHeight = winWidth;
    const [zoomWidth, setZoomWidth] = useState(winWidth);
    const [zoomHeight, setZoomHeight] = useState(winHeight);
    const defaultViewData = `Current view data:width:${zoomWidth.toFixed(2)}, height:${zoomHeight.toFixed(2)}`;
    const [viewData, setViewData] = useState(defaultViewData);
    const toggleAdd = () => {
        setZoomWidth(winWidth);
        setZoomHeight(winHeight);
        setViewData(getViewData(winWidth, winHeight));
    }
    const toggleDecrease = () => {
        setZoomWidth(winWidth * 0.8);
        setZoomHeight(winHeight * 0.8);
        setViewData(getViewData(winWidth * 0.8, winHeight * 0.8));
    }
    const getViewData = (width: number, height: number) => {
        return `Current view data:width: ${width.toFixed(2)} height: ${height.toFixed(2)}`
    }

    // 双指缩放
    const [isEnablePinchToZoom, setPinchToZoomState] = useState(false);
    const togglePinchToZoomSwitch = () => {
        setPinchToZoomState(previousState => !previousState);
    }
    const [minScale, setMinScale] = useState(0.6);
    const [maxScale, setMaxScale] = useState(2);

    // 单指移动
    const [isEnablePanToMove, setPanToMoveState] = useState(false);
    const [singleClickDistance, setSingleClickDistance] = useState(10);
    const togglePanToMoveSwitch = () => {
        setPanToMoveState(previousState => !previousState);
    }
    const [maxOverflow, setMaxOverFlow] = useState(100);

    // 自定义中心
    const defaultCenter: ICenterOn = {
        x: 0,
        y: 0,
        scale: 1,
        duration: 300
    }
    const [centerData, setCenterData] = useState((): ICenterOn | undefined => undefined);
    const leftCenter: ICenterOn = {
        x: 100,
        y: 100,
        scale: 1,
        duration: 300
    }
    const [centerEnable, setCenterIsEnable] = useState(false);
    const toggleSettingCenter = (val: boolean) => {
        console.log(`toggleSettingCenter: ${val}`)
        if (val) {
            setCenterData(leftCenter);
        } else {
            setCenterData(defaultCenter);
        }
        setCenterIsEnable(previousState => !previousState)
    }

    // 中心焦点
    const [enableCenterFocus, setEnterFocusIsEnable] = useState(false);

    // 动画驱动
    const [enableNativeDriver, setNativeDriverIsEnable] = useState(false);

    // 禁用安卓渲染
    const [enableAndroidRender, setAndroidRenderEnable] = useState(false);

    // 触发想切换到左边的图，向左滑动速度超出阈值触发
    const dragLeftHandler = () => {
        console.log('dragLeftHandler!!!');
    }

    // 松手但是没有取消看图
    const responderReleaseHandler = (vx: number, scale: number) => {
        setViewData(`ResponderRelease: scale: ${scale}`);
    }

    // 成为响应者
    const startPanResponderHandler = () => {
        console.log('respondercallback:startPanResponderHandler!!!');
        return true;
    }
    const movePanResponderHandler = () => {
        console.log('respondercallback:movePanResponderHandler!!!');
        return false;
    }
    const terminationRequestHandler = () => {
        console.log('respondercallback:terminationRequestHandler!!!');
        return false;
    }

    const getButtonColor = (current: number, origin: number): string => {
        return current === origin ? '#007AFF99' : '#007AFF';
    }

    // 横向超出距离
    const offsetHandler = (offsetX?: number) => {
        setViewData(`HorizontalOuterRangeOffset: offsetX: ${offsetX?.toFixed(2)}`);
    }

    // 图片渲染完成
    const layoutChangeHandler = (event: LayoutChangeEvent) => {
        console.log('layoutChangeHandler!!!');
    }

    return (
        <View>
            <Text>操作区域：<View style={{ width: 60 }}><Button
                title='100%' onPress={toggleAdd} color={getButtonColor(zoomWidth, winWidth)} /></View> <View style={ styles.button }><Button
                    title='80%' onPress={toggleDecrease} color={getButtonColor(zoomWidth, winWidth * 0.8)} /></View></Text>
            <Text>{viewData}</Text>
            <Text>{longPressData}</Text>
            <Text>{doubleClickData}</Text>
            <Text>{singleClickData}</Text>
            <Text>{swiperDownData}</Text>
            <View style={styles.box}>
                <Text style={styles.switchText}>单指移动：<Switch onValueChange={togglePanToMoveSwitch} value={isEnablePanToMove}></Switch></Text>
                <Text style={styles.switchText}>双指缩放：<Switch onValueChange={togglePinchToZoomSwitch} value={isEnablePinchToZoom}></Switch></Text>
                <Text style={styles.switchText}>双击放大：<Switch onValueChange={toggleDoubleClickSwitch} value={isEnabled}></Switch></Text>
                <Text style={styles.switchText}>开启下滑：<Switch onValueChange={toggleSwipeDownSwitch} value={enableSwiperDown}></Switch></Text>
                <Text style={styles.switchText}>自定义中心：<Switch onValueChange={value => toggleSettingCenter(value)} value={centerEnable}></Switch></Text>
                <Text style={styles.switchText}>中心禁用：<Switch onValueChange={value => setEnterFocusIsEnable(value)} value={enableCenterFocus}></Switch></Text>
                {/* <Text style={styles.switchText}>动画驱动：<Switch onValueChange={value => setNativeDriverIsEnable(value)} value={enableNativeDriver}></Switch></Text> */}
                {/* <Text style={styles.switchText}>禁用安卓硬解：<Switch onValueChange={value => setAndroidRenderEnable(value)} value={enableAndroidRender}></Switch></Text> */}
                <Text style={styles.switchText}>单击距离：<View style={styles.button}><Button title='10' onPress={() => setSingleClickDistance(10)} color={getButtonColor(singleClickDistance, 10)} /></View>  <View style={styles.button}><Button title='50' onPress={() => setSingleClickDistance(50)} color={getButtonColor(singleClickDistance, 50)} /></View></Text>
                <Text style={styles.switchText}>滑动阈值：<View style={styles.button}><Button title='100' onPress={() => setMaxOverFlow(100)} color={getButtonColor(maxOverflow, 100)} /></View>  <View style={styles.button}><Button title='200' onPress={() => setMaxOverFlow(200)} color={getButtonColor(maxOverflow, 200)} /></View></Text>
                <Text style={styles.switchText}>长按阈值：<View style={styles.button}><Button title='800' onPress={() => setLongPressTime(800)} color={getButtonColor(longPressTime, 800)} /></View>  <View style={styles.button}><Button title='2k' onPress={() => setLongPressTime(2000)} color={getButtonColor(longPressTime, 2000)} /></View></Text>
                <Text style={styles.switchText}>下滑阈值：<View style={styles.button}><Button title='230' onPress={() => setDownThreshold(230)} color={getButtonColor(downThreshold, 230)} /></View>  <View style={styles.button}><Button title='100' onPress={() => setDownThreshold(100)} color={getButtonColor(downThreshold, 100)} /></View></Text>
                <Text style={styles.switchText}>最小缩放：<View style={styles.button}><Button title='0.6' onPress={() => setMinScale(0.6)} color={getButtonColor(minScale, 0.6)} /></View>  <View style={styles.button}><Button title='1' onPress={() => setMinScale(1)} color={getButtonColor(minScale, 1)} /></View></Text>
                <Text style={styles.switchText}>最大缩放：<View style={styles.button}><Button title='2' onPress={() => setMaxScale(2)} color={getButtonColor(maxScale, 2)} /></View>  <View style={styles.button}><Button title='5' onPress={() => setMaxScale(5)} color={getButtonColor(maxScale, 5)} /></View></Text>
                <Text style={styles.switchText}>双击间隔：<View style={styles.button}><Button title='175' onPress={() => setClickInterval(175)} color={getButtonColor(clickInterval, 175)} /></View>  <View style={styles.button}><Button title='1k' onPress={() => setClickInterval(1000)} color={getButtonColor(clickInterval, 1000)} /></View></Text>
            </View>
            <Text>{moveData}</Text>
            <ImageZoom
                cropWidth={zoomWidth}
                cropHeight={zoomHeight}
                imageWidth={zoomWidth}
                imageHeight={zoomHeight}
                enableSwipeDown={enableSwiperDown}
                panToMove={isEnablePanToMove}
                pinchToZoom={isEnablePinchToZoom}
                enableDoubleClickZoom={isEnabled}
                enableCenterFocus={enableCenterFocus}
                clickDistance={singleClickDistance}
                maxOverflow={maxOverflow}
                longPressTime={longPressTime}
                doubleClickInterval={clickInterval}
                centerOn={centerData}
                swipeDownThreshold={downThreshold}
                minScale={minScale}
                maxScale={maxScale}
                useNativeDriver={enableNativeDriver}
                useHardwareTextureAndroid={enableAndroidRender}
                layoutChange={layoutChangeHandler}
                horizontalOuterRangeOffset={offsetHandler}
                onLongPress={longPressHandler}
                onClick={singleClickHandler}
                onDoubleClick={doubleClickHandler}
                onDragLeft={dragLeftHandler}
                onSwipeDown={swiperDownHandler}
                onMove={moveHandler}
                responderRelease={responderReleaseHandler}
                onStartShouldSetPanResponder={startPanResponderHandler}
                onMoveShouldSetPanResponder={movePanResponderHandler}
                onPanResponderTerminationRequest={terminationRequestHandler}
            >
                <Image
                    enableHorizontalBounce={true}
                    style =  {{
                        width: zoomWidth,
                        height: zoomHeight,
                    }}
                    source={{uri: 'https://img0.baidu.com/it/u=3570889183,2260151218&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'}}
                />
            </ImageZoom>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 50
    },
    switchText: {
        width: '50%'
    },
    box: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default ImageZoomDemo;
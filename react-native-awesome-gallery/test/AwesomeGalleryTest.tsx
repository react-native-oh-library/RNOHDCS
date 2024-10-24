import Animated, {
    FadeInDown,
    FadeInUp,
    FadeOutDown,
    FadeOutUp,
} from 'react-native-reanimated';
import React, { useRef, useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Gallery, {
    GalleryRef,
    RenderItemInfo,
} from 'react-native-awesome-gallery';

const LOCAL_IMAGE_ASSET_ID = [
    require('../images/photo_1.jpg'),
    require('../images/photo_2.jpg'),
    require('../images/photo_3.jpg'),
    require('../images/photo_4.jpg'),
    require('../images/photo_5.jpg'),
    require('../images/photo_6.jpg'),
];
const images = LOCAL_IMAGE_ASSET_ID.map(item => {
    return Image.resolveAssetSource(item).uri;
});

export const TestCase = {
    AwesomeGalleryDataTest: '测试[data]属性, data中放置6张图片, 可以通过滑动显示',
    AwesomeGalleryRenderItemTest: '测试[renderItem]属性, 使用自定义组件显示图片. 设置图片的宽高为250*150,圆角为8',
    AwesomeGalleryKeyExtractorTest: '测试[keyExtractor]属性, 设置图片的index为key, 图片加载正常',
    AwesomeGalleryInitialIndex1Test: '测试[initialIndex]属性, 设置initialIndex = 1, 打开后展示第二张图片',
    AwesomeGalleryInitialIndex2Test: '测试[initialIndex]属性, 设置initialIndex = 2, 打开后展示第三张图片',
    AwesomeGalleryNumToRenderTest: '测试[numToRender]属性, 设置numToRender = 2, 初始化会缓存2张图片, 默认是缓存5张',
    AwesomeGalleryEmptySpaceWidth10Test: '测试[emptySpaceWidth]属性, 设置emptySpaceWidth = 10, 图片之间的间隔为10',
    AwesomeGalleryEmptySpaceWidth20Test: '测试[emptySpaceWidth]属性, 设置emptySpaceWidth = 20, 图片之间的间隔为20',
    AwesomeGalleryMaxScale2Test: '测试[maxScale]属性, 设置maxScale=2, 图片最大放大2倍',
    AwesomeGalleryMaxScale4Test: '测试[maxScale]属性, 设置maxScale=4, 图片最大放大4倍',
    AwesomeGalleryPinchEnabledTrueTest: '测试[pinchEnabled]属性, 设置pinchEnabled=true, 可以使用双指放大缩小图片',
    AwesomeGalleryPinchEnabledFalseTest: '测试[pinchEnabled]属性, 设置pinchEnabled=False, 无法使用双指放大缩小图片',
    AwesomeGallerySwipeEnabledTrueTest: '测试[swipeEnabled]属性, 设置swipeEnabled=true, 可以滑动查看图片',
    AwesomeGallerySwipeEnabledFalseTrueTest: '测试[swipeEnabled]属性, 设置swipeEnabled=false, 无法滑动查看图片',
    AwesomeGalleryDisableTransitionOnScaledImageTrueTest: '测试[disableTransitionOnScaledImage]属性, 设置disableTransitionOnScaledImage=true, 当图片放大后无法滑动到下一张图片',
    AwesomeGalleryDisableTransitionOnScaledImageFalseTest: '测试[disableTransitionOnScaledImage]属性, 设置disableTransitionOnScaledImage=false, 当图片放大后可以滑动到下一张图片',
    AwesomeGalleryHideAdjacentImagesOnScaledImageTrueTest: '测试[hideAdjacentImagesOnScaledImage], 设置hideAdjacentImagesOnScaledImage=true, 当disableTransitionOnScaledImage=true并且图片放大时, 滑动看不到下一张图片',
    AwesomeGalleryHideAdjacentImagesOnScaledImageFalseTest: '测试[hideAdjacentImagesOnScaledImage], 设置hideAdjacentImagesOnScaledImage=false, 当disableTransitionOnScaledImage=true并且图片放大时, 滑动可以看下一张图片',
    AwesomeGalleryDisableVerticalSwipeTrueTest: '测试[disableVerticalSwipe], 设置disableVerticalSwipe=true, 当图片没有放大时禁止垂直滑动',
    AwesomeGalleryDisableVerticalSwipeFalseTest: '测试[disableVerticalSwipe], 设置disableVerticalSwipe=false, 当图片没有放大时可以垂直滑动',
    AwesomeGalleryDisableSwipeUpTrueTest: '测试[disableSwipeUp], 设置disableSwipeUp=true, 无法向上滑动查看图片',
    AwesomeGalleryDisableSwipeUpFalseTest: '测试[disableSwipeUp], 设置disableSwipeUp=false, 可以向上滑动查看图片',
    AwesomeGalleryLoopTrueTest: '测试[loop], 设置loop=true. 可以循环滑动',
    AwesomeGalleryLoopFalseTest: '测试[loop], 设置loop=false. 无法循环滑动',
    AwesomeGalleryOnScaleChangeTest: '测试[onScaleChange] 和 [onScaleChangeRange], 测试scaleChangeRange=(start: 1, end: 2), 当前图片放大倍数在1~2之间, 将触发onScaleChangeRange事件',
    AwesomeGalleryOnScaleChange2Test: '测试[onScaleChange] 和 [onScaleChangeRange], 测试scaleChangeRange=(start: 3, end: 4), 当前图片放大倍数在3~4之间, 将触发onScaleChangeRange事件',
    AwesomeGalleryContainerDimensionsTest: '测试[containerDimensions], 设置containerDimensions=(width: 200, height: 350), 图片展示View大小为200*350',
    AwesomeGalleryContainerDimensions2Test: '测试[containerDimensions], 设置containerDimensions=(width: 300, height: 400), 图片展示View大小为300*400',
    AwesomeGalleryStyleTest: '测试[style], set backgroundColor red, 背景色为红色',
    AwesomeGalleryOnSwipeToCloseTest: '测试[onSwipeToClose], 当图片滑动到最底部或顶部时将触发onSwipeToClose事件',
    AwesomeGalleryOnTapTest: '测试[onTap], 当点击图片时触发onTap事件',
    AwesomeGalleryOnLongPressTest: '测试[onLongPress], 当长按图片时触发onLongPress事件',
    AwesomeGalleryOnScaleStartTest: '测试[onScaleStart], 图片开始缩放时触发onScaleStart方法',
    AwesomeGalleryOnScaleEndTest: '测试[onScaleEnd], 图片缩放结束时触发onScaleEnd方法',
    AwesomeGalleryOnPanStartTest: '测试[onPanStart], 拖动图片开始时触发onPanStart方法',
    AwesomeGallerySetIndexTest: '测试[onIndexChange] 和 [setIndex]. 点击[Previous] or [Next] 按钮, 顶部的index会变化, 图片也会跟随切换',
    AwesomeGalleryResetTest: '测试[reset], 图片缩放后 点击Reset按钮, 图片恢复原来大小'
}

export function AwesomeGalleryDataTest() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryDataTest}</Text>
            <Gallery data={images} />
        </View>
    );
}

export function AwesomeGalleryRenderItemTest() {
    const renderItem = ({ item, setImageDimensions }: RenderItemInfo<string>) => {
        return (
            <View style={{ width: '100%', height: 500, alignItems: 'center' }}>
                <Image
                    source={{ uri: item }}
                    style={{ width: 250, height: 150, borderRadius: 8 }}
                    onLoad={event => {
                        const { height: h, width: w } = event.nativeEvent.source;
                        setImageDimensions({ width: w, height: h });
                    }}
                />
            </View>
        );
    };
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryRenderItemTest}</Text>
            <Gallery data={images} renderItem={renderItem} />
        </View>
    );
}

export function AwesomeGalleryKeyExtractorTest() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryKeyExtractorTest}</Text>
            <Gallery
                data={images}
                keyExtractor={(item, index) => {
                    return index;
                }}
            />
        </View>
    );
}

export function AwesomeGalleryInitialIndex1Test() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryInitialIndex1Test}</Text>
            <Gallery
                data={images}
                initialIndex={1}
            />
        </View>
    );
}

export function AwesomeGalleryInitialIndex2Test() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryInitialIndex2Test}</Text>
            <Gallery
                data={images}
                initialIndex={2}
            />
        </View>
    );
}

export function AwesomeGalleryNumToRenderTest() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryNumToRenderTest}</Text>
            <Gallery data={images} numToRender={2} />
        </View>
    );
}

export function AwesomeGalleryEmptySpaceWidth10Test() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryEmptySpaceWidth10Test}</Text>
            <Gallery data={images} emptySpaceWidth={10} />
        </View>
    );
}

export function AwesomeGalleryEmptySpaceWidth20Test() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryEmptySpaceWidth20Test}</Text>
            <Gallery data={images} emptySpaceWidth={20} />
        </View>
    );
}

export function AwesomeGalleryDoubleTapScale2Test() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryDoubleTapScale2Test}</Text>
            <Gallery data={images} doubleTapScale={2} />
        </View>
    );
}

export function AwesomeGalleryDoubleTapScale3Test() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryDoubleTapScale3Test}</Text>
            <Gallery data={images} doubleTapScale={3} />
        </View>
    );
}

export function AwesomeGalleryDoubleTapInterval400Test() {
    return (
        <View style={{ flex: 1 }}>
            <Text>{TestCase.AwesomeGalleryDoubleTapInterval400Test}</Text>
            <Gallery data={images} doubleTapInterval={400} />
        </View>
    );
}

export function AwesomeGalleryDoubleTapInterval1000Test() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryDoubleTapInterval1000Test}</Text>
            <Gallery data={images} doubleTapInterval={1000} />
        </View>
    );
}

export function AwesomeGalleryMaxScale2Test() {
    const renderItem = ({ item, setImageDimensions }: RenderItemInfo<string>) => {
        return (
            <Image
            source={{ uri: item }}
            style={{ width: 250, height: 150, borderRadius: 8, alignSelf: 'center',top: '25%' }}
            onLoad={event => {
                const { height: h, width: w } = event.nativeEvent.source;
                setImageDimensions({ width: w, height: h });
            }}
        />
        );
    };
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryMaxScale2Test}</Text>
            <Gallery data={images} renderItem={renderItem} maxScale={2}/>
        </View>
    );
}

export function AwesomeGalleryMaxScale4Test() {
    const renderItem = ({ item, setImageDimensions }: RenderItemInfo<string>) => {
        return (
            <Image
            source={{ uri: item }}
            style={{ width: 250, height: 150, borderRadius: 8, alignSelf: 'center',top: '25%' }}
            onLoad={event => {
                const { height: h, width: w } = event.nativeEvent.source;
                setImageDimensions({ width: w, height: h });
            }}
        />
        );
    };
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryMaxScale4Test}</Text>
            <Gallery data={images} renderItem={renderItem} maxScale={4} />
        </View>
    );
}

export function AwesomeGalleryPinchEnabledTrueTest() {
    return (
        <View style={{ flex: 1 }}>
            <Text>{TestCase.AwesomeGalleryPinchEnabledTrueTest}</Text>
            <Gallery data={images} pinchEnabled={true} />
        </View>
    );
}

export function AwesomeGalleryPinchEnabledFalseTest() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryPinchEnabledFalseTest}</Text>
            <Gallery data={images} pinchEnabled={false} />
        </View>
    );
}

export function AwesomeGallerySwipeEnabledTrueTest() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGallerySwipeEnabledTrueTest}</Text>
            <Gallery data={images} swipeEnabled={true} />
        </View>
    );
}

export function AwesomeGallerySwipeEnabledFalseTrueTest() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGallerySwipeEnabledFalseTrueTest}</Text>
            <Gallery data={images} swipeEnabled={false} />
        </View>
    );
}

export function AwesomeGalleryDoubleTapEnabledTrueTest() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryDoubleTapEnabledTrueTest}</Text>
            <Gallery data={images} doubleTapEnabled={true} />
        </View>
    );
}

export function AwesomeGalleryDoubleTapEnabledFalseTest() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryDoubleTapEnabledFalseTest}</Text>
            <Gallery data={images} doubleTapEnabled={false} />
        </View>
    );
}

export function AwesomeGalleryDisableTransitionOnScaledImageTrueTest() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryDisableTransitionOnScaledImageTrueTest}</Text>
            <Gallery
                data={images}
                disableTransitionOnScaledImage={true}
            />
        </View>
    );
}

export function AwesomeGalleryDisableTransitionOnScaledImageFalseTest() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryDisableTransitionOnScaledImageFalseTest}</Text>
            <Gallery
                data={images}
                disableTransitionOnScaledImage={false}
            />
        </View>
    );
}

export function AwesomeGalleryHideAdjacentImagesOnScaledImageTrueTest() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryHideAdjacentImagesOnScaledImageTrueTest}</Text>
            <Gallery
                data={images}
                disableTransitionOnScaledImage={true}
                hideAdjacentImagesOnScaledImage={true}
            />
        </View>
    );
}

export function AwesomeGalleryHideAdjacentImagesOnScaledImageFalseTest() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryHideAdjacentImagesOnScaledImageFalseTest}</Text>
            <Gallery
                data={images}
                disableTransitionOnScaledImage={true}
                hideAdjacentImagesOnScaledImage={false}
            />
        </View>
    );
}

export function AwesomeGalleryDisableVerticalSwipeTrueTest() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryDisableVerticalSwipeTrueTest}</Text>
            <Gallery data={images} disableVerticalSwipe={true} />
        </View>
    );
}

export function AwesomeGalleryDisableVerticalSwipeFalseTest() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryDisableVerticalSwipeFalseTest}</Text>
            <Gallery data={images} disableVerticalSwipe={false} />
        </View>
    );
}

export function AwesomeGalleryDisableSwipeUpTrueTest() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryDisableSwipeUpTrueTest}</Text>
            <Gallery data={images} disableSwipeUp={true} />
        </View>
    );
}

export function AwesomeGalleryDisableSwipeUpFalseTest() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryDisableSwipeUpFalseTest}</Text>
            <Gallery data={images} disableSwipeUp={false} />
        </View>
    );
}

export function AwesomeGalleryLoopTrueTest() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryLoopTrueTest}</Text>
            <Gallery data={images} loop={true} />
        </View>
    );
}

export function AwesomeGalleryLoopFalseTest() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryLoopFalseTest}</Text>
            <Gallery data={images} loop={false} />
        </View>
    );
}

export function AwesomeGalleryOnScaleChangeTest() {
    const [scaleChangeText, setScaleChangeText] = useState('');
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryOnScaleChangeTest}</Text>
            <Text>Current scale is:{scaleChangeText}</Text>
            <Gallery
                data={images}
                onScaleChange={scale => setScaleChangeText('' + scale)}
                onScaleChangeRange={{ start: 1, end: 2 }}
            />
        </View>
    );
}

export function AwesomeGalleryOnScaleChange2Test() {
    const [scaleChangeText, setScaleChangeText] = useState('');
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryOnScaleChange2Test}</Text>
            <Text>Current scale is:{scaleChangeText}</Text>
            <Gallery
                data={images}
                onScaleChange={scale => setScaleChangeText('' + scale)}
                onScaleChangeRange={{ start: 3, end: 4 }}
            />
        </View>
    );
}

export function AwesomeGalleryContainerDimensionsTest() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryContainerDimensionsTest}</Text>
            <Gallery data={images} containerDimensions={{ width: 200, height: 350 }} />
        </View>
    );
}

export function AwesomeGalleryContainerDimensions2Test() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryContainerDimensions2Test}</Text>
            <Gallery data={images} containerDimensions={{ width: 300, height: 400 }} />
        </View>
    );
}

export function AwesomeGalleryStyleTest() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryStyleTest}</Text>
            <Gallery data={images} style={{
                backgroundColor: 'red'
            }} />
        </View>
    );
}

export function AwesomeGalleryOnSwipeToCloseTest() {
    const [swipeText, setSwipeText] = useState(false);
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryOnSwipeToCloseTest}</Text>
            <Text style={styles.eventText}>
                {'onSwipeToClose Fired:' + swipeText}
            </Text>
            <Gallery data={images} onSwipeToClose={() => setSwipeText(true)} />
        </View>
    );
}

export function AwesomeGalleryOnTranslationYChangeTest() {
    const [translationY, setTranslationY] = useState(0);
    const [shouldClose, setShouldClose] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryOnTranslationYChangeTest}</Text>
            <Text style={styles.eventText}>
                {'onTranslationYChange Fired, translationY is:' +
                    translationY +
                    ', shouldClose is:' +
                    shouldClose}
            </Text>
            <Gallery
                data={images}
                onTranslationYChange={(translationY, shouldClose) => {
                    setTranslationY(translationY);
                    setShouldClose(shouldClose);
                }}
            />
        </View>
    );
}

export function AwesomeGalleryOnTapTest() {
    const [tapText, setTapText] = useState(false);
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryOnTapTest}</Text>
            <Text style={styles.eventText}>{'onTap Fired:' + tapText}</Text>
            <Gallery data={images} onTap={() => setTapText(true)} />
        </View>
    );
}

export function AwesomeGalleryOnDoubleTapTest() {
    const [doubleTapText, setDoubleTapText] = useState(false);
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryOnDoubleTapTest}</Text>
            <Text style={styles.eventText}>
                {'onDoubleTap Fired:' + doubleTapText}
            </Text>
            <Gallery data={images} onDoubleTap={toScale => setDoubleTapText(true)} />
        </View>
    );
}

export function AwesomeGalleryOnLongPressTest() {
    const [longPressText, setLongPressText] = useState(false);
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryOnLongPressTest}</Text>
            <Text style={styles.eventText}>
                {'onLongPress Fired:' + longPressText}
            </Text>
            <Gallery data={images} onLongPress={() => setLongPressText(true)} />
        </View>
    );
}

export function AwesomeGalleryOnScaleStartTest() {
    const [scaleStartText, setScaleStartText] = useState(false);
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryOnScaleStartTest}</Text>
            <Text style={styles.eventText}>
                {'onScaleStart Fired:' + scaleStartText}
            </Text>
            <Gallery data={images} onScaleStart={scale => setScaleStartText(true)} />
        </View>
    );
}

export function AwesomeGalleryOnScaleEndTest() {
    const [scaleEndText, setScaleEndText] = useState(false);
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryOnScaleEndTest}</Text>
            <Text style={styles.eventText}>{'onScaleEnd Fired:' + scaleEndText}</Text>
            <Gallery data={images} onScaleEnd={scale => setScaleEndText(true)} />
        </View>
    );
}

export function AwesomeGalleryOnPanStartTest() {
    const [panStartText, setPanStartText] = useState(false);
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryOnPanStartTest}</Text>
            <Text style={styles.eventText}>{'onPanStart Fired:' + panStartText}</Text>
            <Gallery data={images} onPanStart={() => setPanStartText(true)} />
        </View>
    );
}

export function AwesomeGallerySetIndexTest() {
    const gallery = useRef<GalleryRef>(null);
    const [mounted, setMounted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGallerySetIndexTest}</Text>
            <Animated.View
                entering={mounted ? FadeInUp.duration(250) : undefined}
                exiting={FadeOutUp.duration(250)}
                style={[
                    styles.toolbar,
                    {
                        height: 64,
                        paddingTop: 24,
                    },
                ]}>
                <View style={[styles.textContainer, { flexDirection: 'row' }]}>
                    <Text style={[styles.headerText, { color: 'red', fontSize: 20 }]}>
                        {currentIndex + 1 + ' '}
                    </Text>
                    <Text style={styles.headerText}>of {images.length}</Text>
                </View>
            </Animated.View>
            <Gallery
                ref={gallery}
                data={images}
                onIndexChange={newIndex => {
                    console.log(`onIndexChange ${newIndex}`);
                    setCurrentIndex(newIndex);
                }}
                loop={false}
            />
            <Animated.View
                entering={mounted ? FadeInDown.duration(250) : undefined}
                exiting={FadeOutDown.duration(250)}
                style={[
                    styles.toolbar,
                    styles.bottomToolBar,
                    {
                        height: 48,
                    },
                ]}>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.textContainer}
                        onPress={() =>
                            gallery.current?.setIndex(
                                currentIndex === 0 ? images.length - 1 : currentIndex - 1,
                                true,
                            )
                        }>
                        <Text style={styles.buttonText}>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.textContainer}
                        onPress={() =>
                            gallery.current?.setIndex(
                                currentIndex === images.length - 1 ? 0 : currentIndex + 1,
                                true,
                            )
                        }>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </View>
    );
}

export function AwesomeGalleryResetTest() {
    const gallery = useRef<GalleryRef>(null);
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.testCaseHeaderText}>{TestCase.AwesomeGalleryResetTest}</Text>
            <Animated.View
                style={[
                    styles.toolbar,
                    {
                        height: 64,
                        paddingTop: 24,
                    },
                ]}>
                <View style={[styles.textContainer]}>
                    <TouchableOpacity
                        style={styles.textContainer}
                        onPress={() => gallery.current?.reset()}>
                        <Text style={styles.buttonText}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
            <Gallery
                ref={gallery}
                data={images}
                onIndexChange={newIndex => {
                    console.log(`onIndexChange ${newIndex}`);
                }}
                loop={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    testCaseHeaderText: {
        color: '#d98df7',
        fontWeight: 'bold'
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    toolbar: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
    },
    bottomToolBar: {
        bottom: 0,
    },
    headerText: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600',
    },
    eventText: {
        fontSize: 16,
        color: 'black',
        fontWeight: '600',
    },
});

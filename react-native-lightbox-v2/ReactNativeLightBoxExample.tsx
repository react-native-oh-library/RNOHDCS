import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
    StatusBar,
    Platform,
    ScrollView,
    Pressable,
    Alert
} from 'react-native';
import Lightbox from 'react-native-lightbox-v2';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';


export const ReactNativeLightBoxExample = () => {
    interface State {
        doubleTapZoomEnabled?: boolean;
        doubleTapGapTimer?: number;
        longPressGapTimer?: number;
        doubleTapZoomToCenter?: boolean;
        doubleTapMaxZoom?: number;
        doubleTapZoomStep?: number;
        underlayColor?: string;
        backgroundColor?: string;
        swipeToDismiss?: boolean;
        disabled?: boolean;
        dragDismissThreshold?: number;
        useNativeDriver?: boolean;
        springConfig?: Object;
    }

    const [state, setState] = useState(() => {
        return {
            doubleTapZoomEnabled: true,
            doubleTapGapTimer: 500,
            longPressGapTimer: 2000,
            doubleTapZoomToCenter: false,
            doubleTapMaxZoom: 2,
            doubleTapZoomStep: 0.5,
            underlayColor: 'black',
            backgroundColor: 'black',
            swipeToDismiss: true,
            disabled: false,
            dragDismissThreshold: 150,
            useNativeDriver: false,
            springConfig: { tension: 30, friction: 7 }
        } as State
    })

    const callBackList = [{
        trigger: 'willClose',
        description: 'lightbox关闭前触发',
    }, {
        trigger: 'onClose',
        description: 'lightbox关闭时触发',
    }, {
        trigger: 'onOpen',
        description: 'lightbox打开时触发',
    }, {
        trigger: 'didOpen',
        description: 'lightbox打开后触发',
    }, {
        trigger: 'onLongPress',
        description: 'lightbox长按时触发',
    }, {
        trigger: 'onLayout',
        description: 'lightbox布局完成后触发',
    }, {
        trigger: 'doubleTapCallback',
        description: 'lightbox双击时触发',
    }, {
        trigger: 'longPressCallback',
        description: '长按modal 2s后触发',
    }]

    const ToggleButton: React.FC<{
        title?: string,
        list: any[],
        initValue: any,
        onChange: Function
    }> = ({
        title,
        list,
        initValue,
        onChange
    }) => {
            let [value, setValue] = useState(initValue)
            return (
                <View style={{
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    marginVertical: 5
                }}>
                    <Text style={{ color: '#fff' }}>{title}：</Text>
                    <View style={{
                        borderWidth: 1,
                        borderColor: '#eee',
                        borderRadius: 2,
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                    }}>
                        {

                            list.map((val: any, index: number) => {
                                return (
                                    <Pressable
                                        style={{
                                            borderEndWidth: (index + 1) === list.length ? 0 : 1,
                                            borderColor: '#eee',
                                            backgroundColor: value === val ? '#0081f1' : '#ffffff',
                                            paddingHorizontal: 6,
                                        }}
                                        key={index + ''} onPress={() => {
                                            console.log(title, val)
                                            setValue(val)
                                            onChange(val)
                                        }}
                                    >
                                        <Text>{val + ''}</Text>
                                    </Pressable>
                                )
                            })
                        }
                    </View>
                </View>
            )
        }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar></StatusBar>
            <Tester style={{ flex: 1 }}>
                <ScrollView>
                    <TestSuite name='activeProps' key={'activeProps'}>
                        <TestCase itShould='lightbox打开时的属性，设置背景色变为蓝色' tags={['C_API']}>
                            <View style={styles.container}>
                                <Lightbox
                                    activeProps={{
                                        style: [styles.box, { backgroundColor: 'blue' }]
                                    }}
                                >
                                    <View style={styles.box}>
                                        <Text>lightbox</Text>
                                    </View>
                                </Lightbox>
                            </View>
                        </TestCase>
                    </TestSuite>

                    <TestSuite name='renderHeader' key={'renderHeader'}>
                        <TestCase itShould='打开lightbx,header渲染为close按钮' tags={['C_API']}>
                            <View style={styles.container}>
                                <Lightbox
                                    renderHeader={close => (
                                        <TouchableOpacity onPress={close} style={styles.closeButtonContainer}>
                                            <Text style={styles.closeButton}>Close</Text>
                                        </TouchableOpacity>
                                    )}
                                >
                                    <View style={styles.box}>
                                        <Text>I have a custom Header</Text>
                                    </View>
                                </Lightbox>
                            </View>
                        </TestCase>
                    </TestSuite>

                    <TestSuite name='renderContent' key={'renderContent'}>
                        <TestCase itShould='打开lightbx,content渲染为自定义组件' tags={['C_API']}>
                            <View style={styles.container}>
                                <Lightbox
                                    renderContent={() =>
                                        <View style={[styles.box, { backgroundColor: 'red' }]}>
                                            <Text>renderContent</Text>
                                        </View>
                                    }>
                                    <View style={styles.box}>
                                        <Text>I have a custom Content</Text>
                                    </View>
                                </Lightbox>
                            </View>
                        </TestCase>
                    </TestSuite>
                    {
                        callBackList.map(({ trigger, description }) => {
                            return (
                                <TestSuite name={trigger} key={trigger}>
                                    <TestCase itShould={description} initialState={false} tags={['C_API']} arrange={({ setState }) => {
                                        return (
                                            <View style={styles.container}>
                                                <Lightbox  {...{
                                                    [trigger]: () => {
                                                        setState(true);
                                                    }
                                                }}>
                                                    <View style={styles.box}>
                                                        <Text>content</Text>
                                                    </View>
                                                </Lightbox>
                                            </View>
                                        )
                                    }}
                                        assert={({ expect, state }) => {
                                            expect(state).to.be.true;
                                        }}
                                    >
                                    </TestCase>
                                </TestSuite>
                            )
                        })
                    }

                    <TestSuite name='doubleTapZoomEnabled' key={'doubleTapZoomEnabled' + state.doubleTapZoomEnabled}>
                        <ToggleButton title='切换doubleTapZoomEnabled' list={[true, false]} initValue={state.doubleTapZoomEnabled} onChange={(val: any) => {
                            setState({
                                ...state,
                                doubleTapZoomEnabled: val
                            })

                        }}></ToggleButton>
                        <TestCase itShould='开启双击缩放功能' tags={['C_API']}>
                            <View style={styles.container}>
                                <Lightbox doubleTapZoomEnabled={state.doubleTapZoomEnabled}>
                                    <View style={styles.box}>
                                        <Text>lightbox</Text>
                                    </View>
                                </Lightbox>
                            </View>
                        </TestCase>
                    </TestSuite>

                    <TestSuite name='doubleTapGapTimer' key={'doubleTapGapTimer' + state.doubleTapGapTimer}>
                        <ToggleButton title='切换doubleTapGapTimer' list={[250, 500, 1000]} initValue={state.doubleTapGapTimer} onChange={(val: any) => {
                            setState({
                                ...state,
                                doubleTapGapTimer: val
                            })
                        }}></ToggleButton>
                        <TestCase itShould='确定双击的时间间隔' tags={['C_API']}>
                            <View style={styles.container}>
                                <Lightbox doubleTapGapTimer={state.doubleTapGapTimer}>
                                    <View style={styles.box}>
                                        <Text>lightbox</Text>
                                    </View>
                                </Lightbox>
                            </View>
                        </TestCase>
                    </TestSuite>


                    <TestSuite name='longPressGapTimer' key={'longPressGapTimer' + state.longPressGapTimer}>
                        <ToggleButton title='切换longPressGapTimer' list={[500, 1000, 2000, 5000]} initValue={state.longPressGapTimer} onChange={(val: any) => {
                            setState({
                                ...state,
                                longPressGapTimer: val
                            })
                        }}></ToggleButton>
                        <TestCase itShould='确定长按的的时间间隔' tags={['C_API']}>
                            <View style={styles.container}>
                                <Lightbox longPressGapTimer={state.longPressGapTimer} longPressCallback={() => {
                                    Alert.alert('长按成功')
                                }}>
                                    <View style={styles.box}>
                                        <Text>lightbox</Text>
                                    </View>
                                </Lightbox>
                            </View>
                        </TestCase>
                    </TestSuite>

                    <TestSuite name='doubleTapZoomToCenter' key={'doubleTapZoomToCenter' + state.doubleTapZoomToCenter}>
                        <ToggleButton title='切换doubleTapZoomToCenter' list={[true, false]} initValue={state.doubleTapZoomToCenter} onChange={(val: any) => {
                            setState({
                                ...state,
                                doubleTapZoomToCenter: val
                            })
                        }}></ToggleButton>
                        <TestCase itShould='双击时缩放到中间' tags={['C_API']}>
                            <View style={styles.container}>
                                <Lightbox doubleTapZoomToCenter={state.doubleTapZoomToCenter}>
                                    <View style={styles.box}>
                                        <Text>lightbox</Text>
                                    </View>
                                </Lightbox>
                            </View>
                        </TestCase>
                    </TestSuite>



                    <TestSuite name='doubleTapMaxZoom' key={'doubleTapMaxZoom' + state.doubleTapMaxZoom}>
                        <ToggleButton title='切换doubleTapMaxZoom' list={[1.5, 2, 4]} initValue={state.doubleTapMaxZoom} onChange={(val: any) => {
                            setState({
                                ...state,
                                doubleTapMaxZoom: val
                            })
                        }}></ToggleButton>
                        <TestCase itShould='设置最大放大系数' tags={['C_API']}>
                            <View style={styles.container}>
                                <Lightbox doubleTapMaxZoom={state.doubleTapMaxZoom}>
                                    <View style={styles.box}>
                                        <Text>lightbox</Text>
                                    </View>
                                </Lightbox>
                            </View>
                        </TestCase>
                    </TestSuite>


                    <TestSuite name='doubleTapZoomStep' key={'doubleTapZoomStep' + state.doubleTapZoomStep}>
                        <ToggleButton title='切换doubleTapZoomStep' list={[0.25, 0.5, 0.75]} initValue={state.doubleTapZoomStep} onChange={(val: any) => {
                            setState({
                                ...state,
                                doubleTapZoomStep: val
                            })
                        }}></ToggleButton>
                        <TestCase itShould='每次双击的缩放比例' tags={['C_API']}>
                            <View style={styles.container}>
                                <Lightbox doubleTapZoomStep={state.doubleTapZoomStep} doubleTapMaxZoom={4}>
                                    <View style={styles.box}>
                                        <Text>lightbox</Text>
                                    </View>
                                </Lightbox>
                            </View>
                        </TestCase>
                    </TestSuite>


                    <TestSuite name='underlayColor' key={'underlayColor' + state.underlayColor}>
                        <ToggleButton title='切换underlayColor' list={['white', 'black', 'red', 'blue']} initValue={state.underlayColor} onChange={(val: any) => {
                            setState({
                                ...state,
                                underlayColor: val
                            })
                        }}></ToggleButton>
                        <TestCase itShould='可触摸背景的颜色' tags={['C_API']}>
                            <View style={styles.container}>
                                <Lightbox underlayColor={state.underlayColor}>
                                    <View style={styles.box}>
                                        <Text>lightbox</Text>
                                    </View>
                                </Lightbox>
                            </View>
                        </TestCase>
                    </TestSuite>

                    <TestSuite name='backgroundColor' key={'backgroundColor' + state.backgroundColor}>
                        <ToggleButton title='切换backgroundColor' list={['white', 'black', 'red', 'blue']} initValue={state.backgroundColor} onChange={(val: any) => {
                            setState({
                                ...state,
                                backgroundColor: val
                            })
                        }}></ToggleButton>
                        <TestCase itShould='lightbox 背景颜色' tags={['C_API']}>
                            <View style={styles.container}>
                                <Lightbox backgroundColor={state.backgroundColor}>
                                    <View style={styles.box}>
                                        <Text>lightbox</Text>
                                    </View>
                                </Lightbox>
                            </View>
                        </TestCase>
                    </TestSuite>

                    <TestSuite name='swipeToDismiss' key={'swipeToDismiss' + state.swipeToDismiss}>
                        <ToggleButton title='切换swipeToDismiss' list={[true, false]} initValue={state.swipeToDismiss} onChange={(val: any) => {
                            setState({
                                ...state,
                                swipeToDismiss: val
                            })
                        }}></ToggleButton>
                        <TestCase itShould='启用手势以通过向上或向下轻扫来取消全屏模式' tags={['C_API']}>
                            <View style={styles.container}>
                                <Lightbox swipeToDismiss={state.swipeToDismiss}>
                                    <View style={styles.box}>
                                        <Text>lightbox</Text>
                                    </View>
                                </Lightbox>
                            </View>
                        </TestCase>
                    </TestSuite>

                    <TestSuite name='disabled' key={'disabled' + state.disabled}>
                        <ToggleButton title='切换disabled' list={[true, false]} initValue={state.disabled} onChange={(val: any) => {
                            setState({
                                ...state,
                                disabled: val
                            })
                        }}></ToggleButton>
                        <TestCase itShould='禁用lightbox' tags={['C_API']}>
                            <View style={styles.container}>
                                <Lightbox disabled={state.disabled}>
                                    <View style={styles.box}>
                                        <Text>lightbox</Text>
                                    </View>
                                </Lightbox>
                            </View>
                        </TestCase>
                    </TestSuite>

                    <TestSuite name='style' key={'style'}>
                        <TestCase itShould='lightbox视图包装器的样式，加一个红色边框' tags={['C_API']}>
                            <View style={styles.container}>
                                <Lightbox style={{
                                    borderColor: 'red',
                                    borderWidth: 5
                                }}>
                                    <View style={styles.box}>
                                        <Text>lightbox</Text>
                                    </View>
                                </Lightbox>
                            </View>
                        </TestCase>
                    </TestSuite>


                    <TestSuite name='dragDismissThreshold' key={'dragDismissThreshold' + state.dragDismissThreshold}>
                        <ToggleButton title='切换dragDismissThreshold' list={[50, 150, 300, 1000]} initValue={state.dragDismissThreshold} onChange={(val: any) => {
                            setState({
                                ...state,
                                dragDismissThreshold: val
                            })
                        }}></ToggleButton>
                        <TestCase itShould='滑动退出的阈值距离' tags={['C_API']}>
                            <View style={styles.container}>
                                <Lightbox dragDismissThreshold={state.dragDismissThreshold}>
                                    <View style={styles.box}>
                                        <Text>lightbox</Text>
                                    </View>
                                </Lightbox>
                            </View>
                        </TestCase>
                    </TestSuite>


                    <TestSuite name='modalProps' key={'modalProps'}>
                        <TestCase itShould='添加modal属性onShow，打开modal时会做响应' initialState={false} tags={['C_API']} arrange={({ setState }) => {
                            return (
                                <View style={styles.container}>
                                    <Lightbox modalProps={{
                                        onShow: () => {
                                            setState(true);
                                        }
                                    }}>
                                        <View style={styles.box}>
                                            <Text>content</Text>
                                        </View>
                                    </Lightbox>
                                </View>
                            )
                        }}
                            assert={({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        >
                        </TestCase>
                    </TestSuite>
                    <TestSuite name='springConfig' key={'springConfig'}>
                        <TestCase itShould='Animated.spring 配置，可感受到和默认动画的差异' tags={['C_API']} >
                            <View style={styles.container}>
                                <Lightbox springConfig={{
                                    tension: 40,
                                    friction: 3
                                }}>
                                    <View style={styles.box}>
                                        <Text>lightbox</Text>
                                    </View>
                                </Lightbox>
                            </View>
                        </TestCase>
                    </TestSuite>
                </ScrollView>
            </Tester >

        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white'
    },
    box: {
        height: 150,
        backgroundColor: '#6C7A89',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButtonContainer: {
        ...Platform.select({
            harmony: {
                marginTop: StatusBar.currentHeight
            }
        })
    },
    closeButton: {
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        padding: 8,
        borderRadius: 3,
        textAlign: 'center',
        margin: 10,
        alignSelf: 'flex-end',
    }
});



export default ReactNativeLightBoxExample
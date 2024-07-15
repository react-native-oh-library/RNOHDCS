import React, { Component, useState } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native'
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

// demo purposes only
function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i
    }
}

export default class DeckSwiperExample3 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cards: [...range(1, 10)],
            swipedAllCards: false,
            swipeDirection: '操作卡片滑动，此处显示滑动方向',
            cardIndex: 0,
            //启动水平滑动
            horizontalSwipeState: true,
            //启动垂直滑动
            verticalSwipeState: true,
            //上滑卡片触发的阈值
            verticalThresholdNumber: 1,
            //水平滑动卡片触发的阈值
            horizontalThresholdNumber: 1,
            //卡片滑动的特效
            swipeAnimationDurationNumber: 350,
            //向下滑动的开关
            ableBottomSwipe: false,
            //向左滑动的开关
            ableLeftSwipe: false,
            //向右滑动的开关
            ableRightSwipe: false,
            //向顶部滑动的开关
            ableTopSwipe: false,
            //控制卡片滑动是否允许超出容器，配合开关使用,默认为true
            useViewOverflowState: true,
        }
    }

    renderCard = (card, index) => {
        return (
            <View style={styles.card}>
                <Text style={styles.text}>{card} - {index}</Text>
            </View>
        )
    };

    onSwiped = (type) => {
        console.log(`on swiped ${type}`)
    }

    onSwipedAllCards = () => {
        this.setState({
            swipedAllCards: this.state.swipedAllCards = true
        })
    };

    //轻触时，卡片滑动的方向
    swipeLeft = () => {
        this.swiper.swipeLeft()
    };
    swipeRight = () => {
        this.swiper.swipeRight()
    };
    swipeTop = () => {
        this.swiper.swipeTop()
    };
    swipeBottom = () => {
        this.swiper.swipeBottom()
    };

    //启动水平滑动
    useHorizontalSwipe = () => {
        this.setState({
            ...this.props,
            horizontalSwipeState: true
        })
    }
    //禁止水平滑动
    disUseHorizontalSwipe = () => {
        this.setState({
            ...this.props,
            horizontalSwipeState: false
        })
    }

    //启动垂直滑动
    useVerticalSwipeState = () => {
        this.setState({
            ...this.props,
            verticalSwipeState: true
        })
    }
    //禁止垂直滑动
    disVerticalSwipeState = () => {
        this.setState({
            ...this.props,
            verticalSwipeState: false
        })
    }
    //改变垂直滑动的阀值
    changeVerticalThresholdNumber = () => {
        this.setState({
            ...this.props,
            verticalThresholdNumber: 500
        })
    }
    //改变水平滑动的阀值
    changeHorizontalThresholdNumver = () => {
        this.setState({
            ...this.props,
            horizontalThresholdNumber: 500
        })
    }
    //改变滑动特效的时间
    changeSwipeAnimationDurationNumber = () => {
        this.setState({
            ...this.props,
            swipeAnimationDurationNumber: 1000
        })
    }
    //禁用向下滑动
    disableBottomSwipe = () => {
        this.setState({
            ...this.props,
            ableBottomSwipe: true,
            useViewOverflowState:false
        })
    }   
    //禁用向左滑动
    disableLeftSwipe = () => {
        this.setState({
            ...this.props,
            ableLeftSwipe: true,
            useViewOverflowState:false
        })
    }
    //禁用向右滑动
    disableRightSwipe = () => {
        this.setState({
            ...this.props,
            ableRightSwipe: true,
            useViewOverflowState:false
        })
    }
    //禁用向上滑动
    disableTopSwipe = () => {
        this.setState({
            ...this.props,
            ableTopSwipe: true,
            useViewOverflowState:false
        })
    }

    render() {
        return (
            <Tester>
                <ScrollView>
                    <TestSuite name="DeckSwiperExample3" >
                        <TestCase
                            tags={['C_API']}
                            itShould="整体效果3">
                            <View style={styles.container}>
                                <Swiper
                                    ref={swiper => {
                                        this.swiper = swiper
                                    }}
                                    //滑动方向
                                    onSwiped={() => this.setState({ swipeDirection: this.state.swipeDirection = 'general' })}
                                    onSwipedLeft={() => this.setState({ swipeDirection: this.state.swipeDirection = 'left' })}
                                    onSwipedRight={() => this.setState({ swipeDirection: this.state.swipeDirection = 'right' })}
                                    onSwipedTop={() => this.setState({ swipeDirection: this.state.swipeDirection = 'top' })}
                                    onSwipedBottom={() => this.setState({ swipeDirection: this.state.swipeDirection = 'bottom' })}
                                    //需要渲染的卡片组，必填
                                    cards={this.state.cards}
                                    //首张卡片，这里为设置为0
                                    cardIndex={this.state.cardIndex}
                                    //卡片的垂直边距，默认为60
                                    cardVerticalMargin={500}
                                    //卡片的水平边距，默认为20
                                    cardHorizontalMargin={50}
                                    //卡片渲染的参数，必填
                                    renderCard={this.renderCard}
                                    //当卡片滑完后触发的回调
                                    onSwipedAll={this.onSwipedAllCards}
                                    //卡片堆叠张数
                                    stackSize={3}
                                    //卡之间的垂直间隔
                                    stackSeparation={5}
                                    //滑动覆盖标签，滑动时候卡片上的覆盖样式
                                    overlayLabels={{
                                        bottom: {
                                            title: 'BLEAH',
                                            style: {
                                                label: {
                                                    backgroundColor: 'black',
                                                    borderColor: 'black',
                                                    color: 'white',
                                                    borderWidth: 1
                                                },
                                                wrapper: {
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }
                                            }
                                        },
                                        left: {
                                            title: '向左',
                                            style: {
                                                label: {
                                                    backgroundColor: 'black',
                                                    borderColor: 'black',
                                                    color: 'white',
                                                    borderWidth: 1
                                                },
                                                wrapper: {
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-end',
                                                    justifyContent: 'flex-start',
                                                    marginTop: 30,
                                                    marginLeft: -30
                                                }
                                            }
                                        },
                                        right: {
                                            title: '向右',
                                            style: {
                                                label: {
                                                    backgroundColor: 'black',
                                                    borderColor: 'black',
                                                    color: 'white',
                                                    borderWidth: 1
                                                },
                                                wrapper: {
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent: 'flex-start',
                                                    marginTop: 30,
                                                    marginLeft: 30
                                                }
                                            }
                                        },
                                        top: {
                                            title: '向上',
                                            style: {
                                                label: {
                                                    backgroundColor: 'black',
                                                    borderColor: 'black',
                                                    color: 'white',
                                                    borderWidth: 1
                                                },
                                                wrapper: {
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }
                                            }
                                        }
                                    }}
                                    //上滑卡片触发的高度
                                    verticalThreshold={this.state.verticalThresholdNumber}
                                    //水平卡片触发的阀值
                                    horizontalThreshold={this.state.horizontalThresholdNumber}
                                    //滑动特效持续时间
                                    swipeAnimationDuration={this.state.swipeAnimationDurationNumber}
                                    //无限期的刷卡
                                    infinite={this.state.infiniteState}
                                    //动画卡覆盖标签不透明度，默认为false
                                    animateOverlayLabelsOpacity
                                    animateCardOpacity
                                    swipeBackCard
                                    horizontalSwipe={this.state.horizontalSwipeState}
                                    verticalSwipe={this.state.verticalSwipeState}
                                    disableBottomSwipe={this.state.ableBottomSwipe}
                                    disableLeftSwipe={this.state.ableLeftSwipe}
                                    disableRightSwipe={this.state.ableRightSwipe}
                                    disableTopSwipe={this.state.ableTopSwipe}
                                    useViewOverflow={this.state.useViewOverflowState}
                                    //背景图
                                    containerStyle={
                                        {
                                            height: 900,
                                            zIndex: 0,
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                        }}
                                >
                                    <Button onPress={() => this.swiper.swipeBack()} title='Swipe Back' />
                                    <Button onPress={() => this.useHorizontalSwipe()} title='启用水平滑动' />
                                    <Button onPress={() => this.disUseHorizontalSwipe()} title='禁止水平滑动' />
                                    <Button onPress={() => this.useVerticalSwipeState()} title='启用垂直滑动' />
                                    <Button onPress={() => this.disVerticalSwipeState()} title='禁止垂直滑动' />
                                    <Button onPress={() => this.changeVerticalThresholdNumber()} title='更改垂直滑动的阀值' />
                                    <Button onPress={() => this.changeHorizontalThresholdNumver()} title='更改水平滑动的阀值' />
                                    <Button onPress={() => this.changeSwipeAnimationDurationNumber()} title='更改卡片滑动的特效速度' />
                                    <Button onPress={() => this.disableBottomSwipe()} title='禁用向下滑动' />
                                    <Button onPress={() => this.disableLeftSwipe()} title='禁用向左滑动' />
                                    <Button onPress={() => this.disableRightSwipe()} title='禁用向右滑动' />
                                    <Button onPress={() => this.disableTopSwipe()} title='禁用向上滑动' />
                                </Swiper>
                            </View>
                        </TestCase>
                    </TestSuite>

                </ScrollView>
            </Tester>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        width: '100%',
        height: '900',
        display: 'flex',
        position: 'relative'
    },
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        backgroundColor: 'white'

    },
    text: {
        textAlign: 'center',
        fontSize: 50,
        backgroundColor: 'transparent'
    },
    done: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        backgroundColor: 'transparent'
    }
})
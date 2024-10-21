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

export default class DeckSwiperExample4 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: [...range(1, 10)],
      swipedAllCards: false,
      swipeDirection: '操作卡片滑动，此处显示滑动方向',
      cardIndex: 0,
      //减少每张图的尺寸
      stackScaleNumber: 5,
      //上一张图返回的力度
      stackAnimationFrictionNumber: 7,
      //上一张图返回的速度
      stackAnimationTensionNumber: 40,
      //旋转特效
      inputRotationRangeNumber: [0,0],
      outputRotationRangeNumber: ['0deg','0deg'],
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
  //每张底层图的尺寸
  changeStackScale = () => {
    this.setState({
        ...this.props,
        stackScaleNumber: 1
    })
  }
  //改变力度
 changeStackAnimationFriction = () => {
   this.setState({
       ...this.props,
       stackAnimationFrictionNumber: 1
   })
 }
  //改变速度
  changeStackAnimationTension = () => {
    this.setState({
        ...this.props,
        stackAnimationTensionNumber: 1
    })
  }
  //改变旋转动效
  changeRotationRange = () => {
    this.setState({
        ...this.props,
        inputRotationRangeNumber: [-15, 15],
        outputRotationRangeNumber: ['-10deg', '10deg']
    })
  }


  render() {
    return (
      <Tester>
        <ScrollView>
          <TestSuite name="DeckSwiperExample4" >
            <TestCase
              tags={['C_API']}
              itShould="整体效果4">
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
                  //轻触卡时要调用的函数，这里是向左滑动
                  onTapCard={this.swipeLeft}
                  //需要渲染的卡片组，必填
                  cards={this.state.cards}
                  //首张卡片，这里为设置为0
                  cardIndex={this.state.cardIndex}
                  //卡片的垂直边距，默认为60
                  cardVerticalMargin={230}
                  //卡片的水平边距，默认为20
                  cardHorizontalMargin={80}
                  //卡片渲染的参数，必填
                  renderCard={this.renderCard}
                  //卡片移动时触发的回调
                  onSwiping={this.Swiping}
                  //当卡片滑完后触发的回调
                  onSwipedAll={this.onSwipedAllCards}
                  stackSize={3}
                  //卡之间的垂直间隔,具体表现为卡片的堆叠样式,例如此处为-100，成多米诺形式
                  stackSeparation={-20}
                  //堆叠卡片所占
                  stackScale={this.state.stackScaleNumber}
                  //卡片恢复时候的反弹力度
                  stackAnimationFriction={this.state.stackAnimationFrictionNumber}
                  //卡片恢复时候的反弹速度
                  stackAnimationTension={this.state.stackAnimationTensionNumber}
                  //手指移动距离对应的旋转角度范围,要和outputRotationRange一起使用
                  inputRotationRange={this.state.inputRotationRangeNumber}
                  //实际应用的旋转角度范围，要和inputRotationRange一起使用
                  outputRotationRange={this.state.outputRotationRangeNumber}
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
                  //动画卡覆盖标签不透明度，默认为false
                  animateOverlayLabelsOpacity
                  animateCardOpacity
                  //回退卡片动画
                  swipeBackCard
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
                  <Button onPress={() => this.changeStackScale()} title='减小每张底卡尺寸的百分比为:"1",默认为5.点击后，滑动卡片生效' />
                  <Button onPress={() => this.changeStackAnimationFriction()} title='改变上一张图返回的幅度为1,默认为7' />
                  <Button onPress={() => this.changeStackAnimationTension()} title='改变上一张图返回的速度为1,默认为40' />
                  <Button onPress={() => this.changeRotationRange()} title='改变旋转动效' />
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
    backgroundColor: 'white',
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
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

export default class DeckSwiperExample5 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: [...range(1, 10)],
      swipedAllCards: false,
      swipeDirection: '操作卡片滑动，此处显示滑动方向',
      cardIndex: 0,
      //卡片是否透明
      animateCardOpacityState: false,
      //卡片透明的XY，需要配合animateCardOpacityState为true使用
      inputCardOpacityRangeXNumber:[0,0],
      outputCardOpacityRangeXNumber:[1,1],
      inputCardOpacityRangeYNumber:[0,0],
      outputCardOpacityRangeYNumber:[1,1],
      //卡片上的table的透明度，需要配合animateOverlayLabelsOpacity为true使用
      animateOverlayLabelsOpacity: false,
      inputOverlayLabelsOpacityRangeXNumber:[0, 0],
      outputOverlayLabelsOpacityRangeXNumber:[1, 1],
      inputOverlayLabelsOpacityRangeYNumber:[0, 0],
      outputOverlayLabelsOpacityRangeYNumber:[1, 1],
      //卡片上的显示table的阀值
      overlayOpacityVerticalThresholdNumber: 0,
      overlayOpacityHorizontalThreshold: 0 
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
  //改变卡片透明度
  changeAnimateCardOpacity = () => {
    this.setState({
        ...this.props,
        animateCardOpacityState: true,
        inputCardOpacityRangeXNumber:[-15, 15],
        outputCardOpacityRangeXNumber:[0.8,0.8],
        inputCardOpacityRangeYNumber:[-15,15],
        outputCardOpacityRangeYNumber:[0.8,0.8],
    })
  }
  //改变卡片上面的table的透明度
  changeAnimateOverlayLabelsOpacity = () => {
    this.setState({
        ...this.props,
        animateOverlayLabelsOpacity: true,
        inputOverlayLabelsOpacityRangeXNumber:[-15, 15],
        outputOverlayLabelsOpacityRangeXNumber:[0.5, 0.5],
        inputOverlayLabelsOpacityRangeYNumber:[-15, 15],
        outputOverlayLabelsOpacityRangeYNumber:[0.5, 0.5],
    })
  }
  //改变卡片上面的table的显示阀值
  changeOverlayOpacity = () => {
    this.setState({
        ...this.props,
        overlayOpacityVerticalThresholdNumber: 1,
        overlayOpacityHorizontalThreshold: 1 
    })
  }

  render() {
    return (
      <Tester>
        <ScrollView>
          <TestSuite name="DeckSwiperExample5" >
            <TestCase
              tags={['C_API']}
              itShould="整体效果5">
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
                  cardVerticalMargin={200}
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
                  //滑动覆盖标签，滑动时候卡片上的覆盖样式
                  overlayLabels={{
                    bottom: {
                      title: '向下',
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
                  //卡片的移动时候的透明度
                  animateCardOpacity={this.state.animateCardOpacityState}
                  //卡片移动的时候的不透明度
                  inputCardOpacityRangeX={this.state.inputCardOpacityRangeXNumber} 
                  outputCardOpacityRangeX={this.state.outputCardOpacityRangeXNumber} 
                  inputCardOpacityRangeY={this.state.inputCardOpacityRangeYNumber} 
                  outputCardOpacityRangeY={this.state.outputCardOpacityRangeYNumber} 
                  //卡片上的table的透明度默认为false
                  animateOverlayLabelsOpacity={true}
                  inputOverlayLabelsOpacityRangeX={this.state.inputOverlayLabelsOpacityRangeXNumber}
                  outputOverlayLabelsOpacityRangeX={this.state.outputOverlayLabelsOpacityRangeXNumber}
                  inputOverlayLabelsOpacityRangeY={this.state.inputCardOpacityRangeYNumber}
                  outputOverlayLabelsOpacityRangeY={this.state.outputOverlayLabelsOpacityRangeYNumber}
                  //table的呈现透明的阀值
                  overlayOpacityVerticalThreshold={this.state.overlayOpacityVerticalThresholdNumber}
                  overlayOpacityHorizontalThreshold={this.state.overlayOpacityHorizontalThreshold}
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
                  //swip的容器，默认为0
                  marginTop={0}
                  marginBottom={0}
                  cardStyle={{
                    backgroundColor: '#f9f9f9',
                    borderRadius: 8,
                    borderWidth: 0,
                    elevation: 3,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 2,
                    padding: 15,
                  }}
                >
                  <Button onPress={() => this.swiper.swipeBack()} title='Swipe Back' />
                  <Button onPress={() => this.changeAnimateCardOpacity()} title='修改滑动卡片时候的透明度,默认为不透明' />
                  <Button onPress={() => this.changeAnimateOverlayLabelsOpacity()} title='修改卡片上的table透明度,默认为不透明' />
                  <Button onPress={() => this.changeOverlayOpacity()} title='修改卡片上的table显示阀值' />
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
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

export default class DeckSwiperExample10 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: [...range(1, 10)],
      swipedAllCards: false,
      swipeDirection: '操作卡片滑动，此处显示滑动方向',
      cardIndex: 0,
      //是否显示下一张卡片
      showSecondCardState:true,
      //卡片移动时候的索引
      indexWhenmove:'请移动卡片',
      positionWhenmove:'请移动卡片',
      dragStartState:'拖动开始触发',
      dragEndState:'拖动结束触发',
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
  //卡片拖动时，调用的函数
  Swiping = (index, position) => {
    this.setState({
      ...this.props,
      indexWhenmove:index,
      positionWhenmove:position
    })
  };
  //拖动开始时候要调用的函数
  dragStart = () => {
    this.setState({
      ...this.props,
      dragStartState:'拖动已经开始了！！！！'
    })
  } 
  //拖动结束时候要调用的函数
  dragEnd = () => {
    this.setState({
      ...this.props,
      dragEndState:'拖动已经结束了！！！！'
    })
  } 

  render() {
    return (
      <Tester>
        <ScrollView>
          <TestSuite name="DeckSwiperExample10" >
            <TestCase
              tags={['C_API']}
              itShould="滑动方向：向下">
              <Text>onTapCard,轻触时，卡片调用的函数:这里设置的是swipeBottom向下滑动</Text>
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
                  //轻触卡时要调用的函数，这里是向下滑动
                  onTapCard={this.swipeBottom}
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
                  //拖动开始触发的函数
                  dragStart={this.dragStart}
                  //拖动结束触发的函数
                  dragEnd={this.dragEnd}
                  //卡之间的垂直间隔f,具体表现为卡片的堆叠样式,例如此处为-100，成多米诺形式
                  stackSeparation={20}
                  //是否显示第二张卡
                  showSecondCard={this.state.showSecondCardState}
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
                        height: 700,
                        zIndex: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                >
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
    height: '700',
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
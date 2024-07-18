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

export default class DeckSwiperExample2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: [...range(1, 10)],
      swipedAllCards: false,
      swipeDirection: '操作卡片滑动，此处显示滑动方向',
      cardIndex: 0,
      //无限刷卡，默认为false
      infiniteState:false,
      //刷卡松手的回调
      onSwipedAbortedText:'卡片没有被拖动',
      //获取卡片的操作值
      keyExtractorText: 0,
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

  //无限卡
  infiniteCard = () =>{
    this.setState({
      ...this.props,
      infiniteState:true
    })
  }
  //有限卡
  disInfiniteCard = () =>{
    this.setState({
      ...this.props,
      infiniteState:false
    })
  }
  //拖动时候的函数回调
  onSwipedAborted = () =>{
    this.setState({
      ...this.props,
      onSwipedAbortedText:'划卡取消了！！'
    })
  } 
 //跳转卡
  handleJumpToCard = () => {
    const index = 2; // 要跳转的卡片索引
    this.swiper.jumpToCardIndex(index); 
  };
  //获取操作值
  keyExtractor = () => {
    this.setState({
      ...this.props,
      keyExtractorText: this.state.keyExtractorText +1
    })
  }

  render() {
    return (
      <Tester>
        <ScrollView> 
          <TestSuite name="DeckSwiperExample2" >
            <TestCase
              tags={['C_API']}
              itShould="更改infinite的设置,具体效果为无限刷卡/有限刷卡">
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
                  onTapCardDeadZone={500}
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
                  //当卡片滑完后触发的回调
                  onSwipedAll={this.onSwipedAllCards}
                  stackSize={3}
                  //卡之间的垂直间隔
                  stackSeparation={20}
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
                  //无限期的刷卡
                  infinite={this.state.infiniteState}
                  //动画卡覆盖标签不透明度，默认为false
                  animateOverlayLabelsOpacity
                  animateCardOpacity
                  swipeBackCard
                  //背景图
                  containerStyle={
                    {
                        height: 660,
                        zIndex: 0,
                        position: 'absolute',
                        top: 40,
                        left: 0,
                    }}
                  //拖动时候的函数回调
                  onSwipedAborted={this.onSwipedAborted}
                  //当前索引
                  keyExtractor={this.keyExtractor}
                >
                  <Button onPress={() => this.swiper.swipeBack()} title='Swipe Back' />
                  <Button onPress={() => this.infiniteCard()} title='无限刷卡' />
                  <Button onPress={() => this.disInfiniteCard()} title='有限刷卡' />
                  <Button onPress={() => this.handleJumpToCard()}   title="跳转到卡3" />
                </Swiper>
                <Text>卡片现在的状态：{this.state.onSwipedAbortedText}</Text>   
                <Text>卡片操作值：{this.state.keyExtractorText}</Text>    
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
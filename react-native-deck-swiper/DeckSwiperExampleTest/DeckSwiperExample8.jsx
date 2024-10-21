import React, { Component, useState, useRef } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Button, StyleSheet, Text, View, ScrollView ,Animated} from 'react-native'
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

// demo purposes only
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i
  }
}

export default class DeckSwiperExample8 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards:['Card 1', 'Card 2', 'Card 3','Card 4','Card 5'],
      swipedAllCards: false,
      swipeDirection: '操作卡片滑动，此处显示滑动方向',
      cardIndex: 0,
      onTapCardDeadZoneState: 500,
      onTapText: 0,
    }
  }

  onTapCard = (index) => {
    console.log(`Tapped card ${index}`);
    this.changeOnTapText()
  };

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

  //更改识别距离
  changeOnTapCardDeadZone = () => {
    this.setState({
        ...this.props,
        //轻触滑动后,不会触发划卡
        onTapCardDeadZoneState: 1
    })
  }

  changeOnTapText= () => {
    this.setState({
        ...this.props,
        //轻触滑动后+1
        onTapText: (this.state.onTapText + 1),
    })
    console.log(this.state.onTapText);
  }

  render() {
    return (
        <Tester>
        <ScrollView>
            <TestSuite name="DeckSwiperExample8" >
                <TestCase
                    tags={['C_API']}
                    itShould="整体效果8">                     
                 <View style={styles.container}></View>
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
                  onTapCard={this.onTapCard}
                  //轻触的距离
                  onTapCardDeadZone={this.state.onTapCardDeadZoneState} 
                  //需要渲染的卡片组，必填
                  cards={this.state.cards}
                  //首张卡片，这里为设置为0
                  cardIndex={this.state.cardIndex}
                  //卡片渲染的参数，必填
                  renderCard={this.renderCard}
                  //卡片移动时触发的回调
                  onSwiping={this.Swiping}
                  cardVerticalMargin={260}
                  cardHorizontalMargin={80}
                  //当卡片滑完后触发的回调
                  onSwipedAll={this.onSwipedAllCards}
                  stackSize={5}  // 可选属性，指定同时显示的卡片数量
                  //卡之间的垂直间隔,具体表现为卡片的堆叠样式,例如此处为-100，成多米诺形式
                  stackSeparation={-20}
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
                  //回退卡片动画
                  swipeBackCard
                  //背景图
                  containerStyle={
                    {
                        height: 600,
                        zIndex: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                  //无限刷卡
                  infinite={true}
                >
                  <Text>测试onTapCardDeadZone回调:测试前请在设备设置-->系统-->开发者模式-->打开'显示触摸操作'和显示布局边界'</Text>
                 <Button onPress={() => this.changeOnTapCardDeadZone()} title='调整轻触范围,默认为500,调整为1' />
                </Swiper> 
                <Text>轻触事件触发次数！！！！:{this.state.onTapText}</Text>             
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
    height: '600',
    display: 'flex', 
    position: 'relative'
  },
  card: {
    flex: 1,
    // borderRadius: 4,
    // borderWidth: 2,
    // borderColor: '#E8E8E8',
    // justifyContent: 'center',
    // backgroundColor: 'white',
    width: 300, // Example width
    height: 200, // Example height
    justifyContent: 'center', 
    alignItems: 'center'
  },
})
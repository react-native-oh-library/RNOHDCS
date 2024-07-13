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

export default class DeckSwiperExample extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: [...range(1, 10)],
      swipedAllCards: false,
      swipeDirection: '操作卡片滑动，此处显示滑动方向',
      cardIndex: 0,
      //滑动回退上一张
      goBackToPreviousCardOnSwipeLeftState: false,
      goBackToPreviousCardOnSwipeRightState: false,
      goBackToPreviousCardOnSwipeTopState: false,
      goBackToPreviousCardOnSwipeBottomState: false,
      //渲染是否在标签上
      childrenOnTopState: false,
      //触摸状态
      pointerEventsState:'auto'
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
  //左滑动
  changeGoBackToPreviousCardOnSwipeLeftState = () => {
    this.setState({
        ...this.props,
        goBackToPreviousCardOnSwipeLeftState: true
    })
  }
  //右滑动
  changeGoBackToPreviousCardOnSwipeRightState = () => {
    this.setState({
        ...this.props,
        goBackToPreviousCardOnSwipeRightState: true
    })
  }
  //上滑动
  changeGoBackToPreviousCardOnSwipeTopState = () => {
    this.setState({
        ...this.props,
        goBackToPreviousCardOnSwipeTopState: true
    })
  }
  //下滑动
  changeGoBackToPreviousCardOnSwipeBottomState = () => {
    this.setState({
        ...this.props,
        goBackToPreviousCardOnSwipeBottomState:true
    })
  }
  //更改渲染优先级
  changeChildrenOnTop = () => {
    this.setState({
        ...this.props,
        childrenOnTopState: true
    })
  }
  //更改触摸事件
  changePointerEventsState = () => {
    this.setState({
        ...this.props,
        pointerEventsState: 'none'
    })
  }

  render() {
    return (
      <Tester>
        <ScrollView>
          <TestSuite name="DeckSwiperExampl6" >
            <TestCase
              tags={['C_API']}
              itShould="整体效果6">
              <Text>通过overlayLabels,overlayLabelStyle和overlayLabelWrapperStyle一起渲染滑动时候的样式</Text>
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
                  cardVerticalMargin={290}
                  //卡片的水平边距，默认为20
                  cardHorizontalMargin={60}
                  //卡片渲染的参数，必填
                  renderCard={this.renderCard}
                  //卡片移动时触发的回调
                  onSwiping={this.Swiping}
                  //当卡片滑完后触发的回调
                  onSwipedAll={this.onSwipedAllCards}
                  stackSize={3}
                  //卡之间的垂直间隔,具体表现为卡片的堆叠样式,例如此处为-100，成多米诺形式
                  stackSeparation={-20}
                  // //滑动覆盖标签，滑动时候卡片上的覆盖标题
                  overlayLabels={{
                    bottom: {
                        title: '向下',
                      },
                    left: {
                      title: '向左',
                    },
                    right: {
                      title: '向右',
                    },
                    top: {
                      title: '向上',
                    }
                  }}
                  //滑动覆盖标签，滑动时候卡片上的覆盖样式
                  overlayLabelStyle={{
                    fontSize: 45,
                    fontWeight: 'bold',
                    borderRadius: 10,
                    padding: 10,
                    overflow: 'hidden'
                  }}
                  //滑动覆盖标签，滑动时候卡片上的包装样式
                  overlayLabelWrapperStyle={{
                    position: 'absolute',
                    backgroundColor: '#F5FCFF',
                    zIndex: 2,
                    flex: 1,
                    width: '100%',
                    height: '100%'
                  }}
                  //动画卡覆盖标签不透明度，默认为false
                  animateOverlayLabelsOpacity
                  //默认为0
                  marginTop={20}
                  marginBottom={100}
                  //是否在顶部渲染 
                  childrenOnTop={this.state.childrenOnTopState}
                  animateCardOpacity
                  //回退卡片动画
                  swipeBackCard
                  //确保将showSecondCard设置为{false}，以便在返回上一张卡时进行更平滑和正确的转换。---官方
                  showSecondCard={false}
                  //上一张牌在左扫时呈现	
                  goBackToPreviousCardOnSwipeLeft={this.state.goBackToPreviousCardOnSwipeLeftState}
                  //右滑时呈现上一张卡
                  goBackToPreviousCardOnSwipeRight={this.state.goBackToPreviousCardOnSwipeRightState}
                  //上一张牌在顶部滑动时呈现	
                  goBackToPreviousCardOnSwipeTop={this.state.goBackToPreviousCardOnSwipeTopState}
                  //上一张牌在底部滑动时呈现	
                  goBackToPreviousCardOnSwipeBottom={this.state.goBackToPreviousCardOnSwipeBottomState}
                  //背景图
                  containerStyle={
                    {
                        height: 900,
                        zIndex: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                  //卡片样式
                  cardStyle={{
                    backgroundColor: 'lightblue',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    elevation: 5,
                    padding: 10,
                  }}
                  //触摸事件
                  pointerEvents= {this.state.pointerEventsState}
                >
                  <Button onPress={() => this.swiper.swipeBack()} title='Swipe Back' />
                  <Button onPress={() => this.changeGoBackToPreviousCardOnSwipeLeftState()} title='向左滑动时候，显示上一张卡片' />
                  <Button onPress={() => this.changeGoBackToPreviousCardOnSwipeRightState()} title='向右滑动时候，显示上一张卡片' />
                  <Button onPress={() => this.changeGoBackToPreviousCardOnSwipeTopState()} title='向上滑动时候，显示上一张卡片' />
                  <Button onPress={() => this.changeGoBackToPreviousCardOnSwipeBottomState()} title='向下滑动时候，显示上一张卡片' />
                  <Button onPress={() => this.changeChildrenOnTop()} title='切换顶部渲染模式,默认为false,点击后,卡片可以从按键下方滑出' />
                  <Button onPress={() => this.changePointerEventsState()} title='点击关闭触摸事件监听(需要滑动一张卡后生效)' />
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
    backgroundColor: '#00BFFF',
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
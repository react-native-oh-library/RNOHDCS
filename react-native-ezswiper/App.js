/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  Dimensions,
  ScrollView,
  Image
} from 'react-native';

const { height, width } = Dimensions.get('window');
import EZSwiper from 'react-native-ezswiper';
import { Tester, TestSuite } from '@rnoh/testerino';
import { TestCase } from './TestCase';

const images = [require(`./resource/0.jpg`), require(`./resource/1.jpg`), require(`./resource/2.jpg`), require(`./resource/3.jpg`), require(`./resource/4.jpg`), require(`./resource/5.jpg`), require(`./resource/6.jpg`), require(`./resource/7.jpg`), require(`./resource/8.jpg`)]

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0,
      swiperWidth: 0
    };
  }

  renderTitle(title) {
    return <Text style={{ backgroundColor: 'green' }}>{title}</Text>
  }

  renderRow(obj, index) {
    return (
      <View style={[styles.cell, { backgroundColor: index % 2 === 0 ? 'red' : 'yellow' }]}>
        <Text>{obj}</Text>
      </View>
    )
  }

  renderImageRow(obj, index) {
    return (
      <View style={[styles.cell, { backgroundColor: 'gray', overflow: 'hidden' }]}>
        <Image
          style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, width: undefined, height: undefined }}
          resizeMode={'contain'}
          source={obj} />
        <Text style={{ backgroundColor: 'transparent', color: 'white' }}>{'Victoria\'s Secre ' + index}</Text>

      </View>
    )
  }


  onPressRow(obj, index) {
    console.log('onPressRow=>obj:' + obj + ' ,index:' + index);
    alert('onPressRow=>obj:' + obj + ' ,index:' + index);
  }

  onWillChange(obj, index) {
    // console.log('onWillChange=>obj:' + obj + ' ,index:' + index);
    // alert('onWillChange=>obj:'+ obj + ' ,index:' + index);
  }

  onDidChange(obj, index, setDidChangeObj, setIndex) {
    setDidChangeObj(obj);
    setIndex(index)
  }
  render() {
    // 38  大概是testerinfo的内外边距
    return (
      <ScrollView>
        <Tester>
          <TestSuite name="EZSwiper" style={[styles.container]}>
            <TestCase.Example itShould="height:150 autoplayDirection:false">
              <EZSwiper style={[styles.swiper, { width: '100%', height: 150 }]}
                dataSource={['0', '1', '2', '3']}
                width={width - 39}
                height={150}
                autoplayDirection={false}
                renderRow={this.renderRow}
                onPress={this.onPressRow}
                onWillChange={this.onWillChange}
                ratio={0.6}
                index={2}
                horizontal={true}
                loop={true}
                autoplayTimeout={2}
              />
            </TestCase.Example>
            <TestCase.Example itShould="width:上方*0.8,height:100 autoplayDirection:false">
              <EZSwiper style={[styles.swiper, { width: '80%', height: 150 }]}
                dataSource={['0', '1', '2', '3']}
                width={(width - 39)*0.8}
                height={100}
                autoplayDirection={false}
                renderRow={this.renderRow}
                onPress={this.onPressRow}
                onWillChange={this.onWillChange}
                ratio={0.6}
                index={2}
                horizontal={true}
                loop={true}
                autoplayTimeout={2}
              />
            </TestCase.Example>
            <TestCase.Example itShould="render a ez-swiper autoplayDirection = true">
              <EZSwiper style={[styles.swiper, { width: '100%', height: 150 }]}
                dataSource={['0', '1', '2', '3']}
                width={width - 39}
                height={150}
                autoplayDirection={true}
                renderRow={this.renderRow}
                onPress={this.onPressRow}
                onWillChange={this.onWillChange}
                ratio={0.6}
                index={2}
                horizontal={true}
                loop={true}
                autoplayTimeout={2}
              />
            </TestCase.Example>
            <TestCase.Example itShould="offset给一定的值偏移到left">
              <EZSwiper style={[styles.swiper, { width: '100%', height: 150 }]}
                dataSource={['0', '1', '2', '3']}
                width={width - 39}
                height={150}
                renderRow={this.renderRow}
                onPress={this.onPressRow}
                onWillChange={this.onWillChange}
                index={2}
                horizontal={true}
                loop={true}
                autoplayTimeout={2}
                cardParams={{ cardSide: width * 0.6, cardSmallSide: 150 * 0.6, cardSpace: width * (1 - 0.6) / 2 * 0.4 }}
                offset={-width * 0.2 + 20}
              />
            </TestCase.Example>
            <TestCase.Example itShould="offset给一定的值偏移到right">
              <EZSwiper style={[styles.swiper, { width: '100%', height: 150 }]}
                dataSource={['0', '1', '2', '3']}
                width={width - 39}
                height={150}
                renderRow={this.renderRow}
                onPress={this.onPressRow}
                onWillChange={this.onWillChange}
                ratio={0.6}
                index={2}
                horizontal={true}
                loop={true}
                autoplayTimeout={2}
                offset={60}
              /></TestCase.Example>
            <TestCase.Example itShould="normal">
              <EZSwiper style={[styles.swiper, { width: '100%', height: 150 }]}
                dataSource={['0', '1', '2', '3']}
                width={width - 40}
                height={150}
                renderRow={this.renderRow}
                onPress={this.onPressRow} />
            </TestCase.Example>
            <TestCase.Example itShould="render a ratio with 0.867">
              <EZSwiper style={[styles.swiper, { width: '100%', height: 150 }]}
                dataSource={images}
                width={width - 39}
                height={150}
                renderRow={this.renderImageRow}
                onPress={this.onPressRow}
                ratio={0.867}
              /></TestCase.Example>
            <TestCase.Example itShould="ratio={0.867},loop={false},index={2},width: width - 100')">
              <EZSwiper style={[styles.swiper, { width: width - 100, height: 150, marginHorizontal: 50 }]}
                dataSource={['0', '1', '2', '3', '4']}
                width={width - 100}
                height={150}
                renderRow={this.renderRow}
                onPress={this.onPressRow}
                ratio={0.867}
                loop={false}
                index={2}
              /></TestCase.Example>
            <TestCase.Example itShould="ratio={0.867},horizontal={false}">
              <EZSwiper style={[styles.swiper, { width: '100%', height: 200 }]}
                dataSource={['0', '1', '2', '3']}
                width={width}
                height={200}
                renderRow={this.renderRow}
                onPress={this.onPressRow}
                ratio={0.867}
                horizontal={false}
              /></TestCase.Example>
            <TestCase.Example itShould="cardParams={ cardSide: width * 0.867, cardSmallSide: 150 * 0.867, cardSpace: width * (1 - 0.867) / 2 * 0.2 }">
              <EZSwiper style={[styles.swiper, { width: '100%', height: 150 }]}
                dataSource={['0', '1', '2', '3']}
                width={width - 40}
                height={150}
                renderRow={this.renderRow}
                onPress={this.onPressRow}
                cardParams={{ cardSide: (width - 40) * 0.867, cardSmallSide: 150 * 0.867, cardSpace: width * (1 - 0.867) / 2 * 0.2 }}
              /></TestCase.Example>
            <TestCase.Example itShould="cardParams={ cardSide: width * 0.6, cardSmallSide: 150 * 0.6, cardSpace: width * (1 - 0.6) / 2 * 0.2 }">
              <EZSwiper style={[styles.swiper, { width: '100%', height: 150 }]}
                dataSource={['0', '1', '2', '3']}
                width={width - 40}
                height={150}
                renderRow={this.renderRow}
                onPress={this.onPressRow}
                cardParams={{ cardSide: (width - 40) * 0.6, cardSmallSide: 150 * 0.6, cardSpace: width * (1 - 0.6) / 2 * 0.2 }}
              /></TestCase.Example>
            <TestCase.Example itShould="render a ez-swiper with onDidChange">
              <DidChangeDom renderRow={this.renderRow} />
            </TestCase.Example>
            <TestCase.Example itShould="render a ez-swiper with onWillChange">
              <WillChangeDom renderRow={this.renderRow} />
            </TestCase.Example>
            <TestCase.Example itShould="render a ez-swiper with scrollTo">
              <ScrollToDom renderRow={this.renderRow} />
            </TestCase.Example>
          </TestSuite>
        </Tester>
      </ScrollView>
    );
  }
}


const DidChangeDom = (props) => {
  const [didChangeObj, setDidChangeObj] = React.useState(0);
  const [index, setIndex] = React.useState(0);

  return (
    <View>
      {/* <View>
        <Text>obj:{didChangeObj}</Text>
        <Text>index:{index}</Text>
      </View> */}
      <View>
        <Text>见log</Text>
      </View>
      <EZSwiper style={[styles.swiper, { width: '100%', height: 150 }]}
        dataSource={['0', '1', '2', '3']}
        width={width - 40}
        height={150}
        renderRow={props.renderRow}
        onDidChange={(obj, index) => {
          console.log('onDidChange触发')
        }} />
    </View>)
}

const WillChangeDom = (props) => {
  const [didChangeObj, setDidChangeObj] = React.useState(0);
  const [index, setIndex] = React.useState(0);

  return (
    <View>
      {/* <View>
        <Text>obj:{didChangeObj}</Text>
        <Text>index:{index}</Text>
      </View> */}
      <View>
        <Text>见log</Text>
      </View>
      <EZSwiper style={[styles.swiper, { width: '100%', height: 150 }]}
        dataSource={['0', '1', '2', '3']}
        width={width - 39}
        height={150}
        renderRow={props.renderRow}
        onWillChange={(obj, index) => {
          console.log('onWillChange触发');
        }} />
    </View>)
}

function ScrollToDom(props) {
  this.refDom = null;
  const refDomFn = (view) => {
    this.refDom = view
  }
  const scrollTo = (index) => {
    if (this.refDom) {
      this.refDom.scrollTo(index + 1, true)
    }
  }
  return (
    <View>
      <View style={{ display: 'flex' }}>
        <Button onPress={() => scrollTo(0)} style={styles.button} title="Press 0" />
        <Button onPress={() => scrollTo(1)} style={styles.button} title="Press 1" />
        <Button onPress={() => scrollTo(2)} style={styles.button} title="Press 2" />
        <Button onPress={() => scrollTo(3)} style={styles.button} title="Press 3" />
        <Button onPress={() => scrollTo(4)} style={styles.button} title="Press 4" />
      </View>
      <EZSwiper style={[styles.swiper, { width: '100%', height: 150 }]}
        dataSource={['0', '1', '2', '3', '4']}
        width={width - 40}
        ref={refDomFn}
        height={150}
        renderRow={props.renderRow}
      />
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: width
  },
  swiper: {
    backgroundColor: 'white',
  },
  button: {
    width: 50,
    height: 30,
  },
  cell: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageControl: {
    position: 'absolute',
    bottom: 4,
    right: 10,
  },
});

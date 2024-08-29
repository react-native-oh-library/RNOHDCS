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

const images = [require(`./resource/0.png`), require(`./resource/1.png`), require(`./resource/2.png`), require(`./resource/3.png`), require(`./resource/4.png`), require(`./resource/5.png`), require(`./resource/6.png`)]

export default class ezswiperApp extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0,
    };
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

  render() {

    return (
      <ScrollView>
        <Tester>
          <TestSuite name="EZSwiper" style={[styles.container]}>

            <TestCase.Example itShould="render a ez-swiper with ratio autoplayDirection autoplayTimeout loop horizontal offset width height">
              <BaseDom renderRow={this.renderRow} />
            </TestCase.Example>

            <TestCase.Example itShould="render a ez-swiper with cardParams">
              <CardParamsDom renderRow={this.renderRow} />
            </TestCase.Example>

            <TestCase.Example itShould="render a ez-swiper with renderImageRow">
              <RenderImageRowDom renderRow={this.renderImageRow} />
            </TestCase.Example>

            <TestCase.Example itShould="render a ez-swiper with renderRow">
              <RenderRowDom renderRow={this.renderRow} />
            </TestCase.Example>

            <TestCase.Example itShould="render a ez-swiper with onPress">
              <PressDom renderRow={this.renderRow} />
            </TestCase.Example>

            <TestCase.Example itShould="render a ez-swiper with onDidChange">
              <DidChangeDom renderRow={this.renderRow} />
            </TestCase.Example>

            <TestCase.Example itShould="render a ez-swiper with onWillChange">
              <WillChangeDom renderRow={this.renderRow} />
            </TestCase.Example>
            <TestCase.Example itShould="render a ez-swiper with scrollTo index">
              <ScrollToDom renderRow={this.renderRow} />
            </TestCase.Example>
          </TestSuite>
        </Tester>
      </ScrollView>
    );
  }
}

const BaseDom = (props) => {

  const [ratio, setratio] = React.useState(1);
  const [autoplayDirection, setautoplayDirection] = React.useState(true);
  const [autoplayTimeout, setautoplayTimeout] = React.useState(2);
  const [loop, setloop] = React.useState(true);
  const [horizontal, sethorizontal] = React.useState(true);
  const [offset, setoffset] = React.useState(10);
  const [width, setwidth] = React.useState(387);
  const [height, setheight] = React.useState(150);

  return (
    <View>
      <View>
        <Text>ratio:{ratio}</Text>
        <Text>autoplayDirection:{autoplayDirection == true ? "true" : "false"}</Text>
        <Text>autoplayTimeout:{autoplayTimeout}</Text>
        <Text>loop:{loop == true ? "true" : "false"}</Text>
        <Text>horizontal:{horizontal == true ? "true" : "false"}</Text>
        <Text>offset:{offset}</Text>
        <Text>width:{width}</Text>
        <Text>height:{height}</Text>

        <Button onPress={() => setratio(0.5)} style={styles.button} title="修改ratio" />
        <Button onPress={() => setautoplayDirection(false)} style={styles.button} title="修改autoplayDirection" />
        <Button onPress={() => setautoplayTimeout(1)} style={styles.button} title="修改autoplayTimeout" />
        <Button onPress={() => setloop(false)} style={styles.button} title="修改loop" />
        <Button onPress={() => sethorizontal(false)} style={styles.button} title="修改horizontal" />
        <Button onPress={() => setoffset(20)} style={styles.button} title="修改offset" />
        <Button onPress={() => setwidth(300)} style={styles.button} title="修改width" />
        <Button onPress={() => setheight(180)} style={styles.button} title="修改height" />
      </View>
      <EZSwiper style={[styles.swiper, { width: width, height: 200 }]}
        dataSource={['0', '1', '2', '3']}
        width={width}
        height={height}
        renderRow={props.renderRow}
        ratio={ratio}
        autoplayDirection={autoplayDirection}
        autoplayTimeout={autoplayTimeout}
        loop={loop}
        horizontal={horizontal}
        offset={offset}
      />
    </View>)
}

const CardParamsDom = (props) => {
  const [{ cardSide, cardSmallSide, cardSpace }, setcardParams] = React.useState({
    cardSide: width * 0.8,
    cardSmallSide: 150 * 0.8,
    cardSpace: width * (1 - 0.8) / 2 * 0.2
  });

  return (
    <View>
      <View>
        <Text>cardSide:{cardSide}</Text>
        <Text>cardSmallSide:{cardSmallSide}</Text>
        <Text>cardSpace:{cardSpace}</Text>
        <Button onPress={() => setcardParams({ cardSide: width * 0.3, cardSmallSide: 150 * 0.3, cardSpace: width * (1 - 0.3) / 2 * 0.2 })} style={styles.button} title="修改cardParams" />
      </View>
      <EZSwiper style={[styles.swiper, { width: width, height: 150 }]}
        dataSource={['0', '1', '2', '3']}
        width={width}
        height={150}
        renderRow={props.renderRow}
        cardParams={{ cardSide: cardSide, cardSmallSide: cardSmallSide, cardSpace: cardSpace }}
      />
    </View>)
}

const RenderImageRowDom = (props) => {
  return (
    <View>
      <EZSwiper style={[styles.swiper, { width: width, height: 150 }]}
        dataSource={images}
        width={width}
        height={150}
        renderRow={props.renderRow}
      />
    </View>)
}

const RenderRowDom = (props) => {
  return (
    <View>
      <EZSwiper style={[styles.swiper, { width: width, height: 150 }]}
        dataSource={['0', '1', '2', '3']}
        width={width}
        height={150}
        renderRow={props.renderRow}
      />
    </View>)
}

const PressDom = (props) => {

  return (
    <View>
      <View>
      
      </View>
      <EZSwiper style={[styles.swiper, { width: width, height: 150 }]}
        dataSource={['0', '1', '2', '3']}
        width={width}
        height={150}
        renderRow={props.renderRow}
        onPress={(obj, index) => {
          console.log('onPress=>obj:' + obj + ',index:' + index);
          alert('onPress=>obj:' + obj + ',index:' + index);
        }} />
    </View>)
}

const DidChangeDom = (props) => {
  const [didChangeObj, setDidChangeObj] = React.useState(0);
  const [index, setIndex] = React.useState(0);

  return (
    <View>
      <View>
        <Text>obj:{didChangeObj}</Text>
        <Text>index:{index}</Text>
      </View>
      <EZSwiper style={[styles.swiper, { width: width, height: 150 }]}
        dataSource={['0', '1', '2', '3']}
        width={width}
        height={150}
        renderRow={props.renderRow}
        onDidChange={(obj, index) => {
          setDidChangeObj(obj)
          setIndex(index)
        }} />
    </View>)
}

const WillChangeDom = (props) => {
  const [didChangeObj, setDidChangeObj] = React.useState(0);
  const [index, setIndex] = React.useState(0);

  return (
    <View>
      <View>
        <Text>obj:{didChangeObj}</Text>
        <Text>index:{index}</Text>
      </View>
      <EZSwiper style={[styles.swiper, { width: width, height: 150 }]}
        dataSource={['0', '1', '2', '3']}
        width={width}
        height={150}
        renderRow={props.renderRow}
        onWillChange={(obj, index) => {
          setDidChangeObj(obj)
          setIndex(index)
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
      <EZSwiper style={[styles.swiper, { width: width, height: 150 }]}
        dataSource={['0', '1', '2', '3', '4']}
        width={width}
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
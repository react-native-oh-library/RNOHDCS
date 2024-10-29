import React, {Component, useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  PressableProps,
} from 'react-native';
import {Avatar, Icon, AirbnbRating} from '@rneui/themed';
import {Text} from '@rneui/base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

import rating from './images/rating.png';
interface AirbnbRatingComponentProps {
  // 定义props的属性和类型
}

class AirbnbRatingrComponent extends React.Component<{}, {}> {
  render() {
    return (
      <Image
        style={{width: 30, height: 30, backgroundColor: 'yellow'}}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
        }}></Image>
    );
  }
}

const AirbnbRatings: React.FunctionComponent<
  AirbnbRatingComponentProps
> = () => {
  const [value, setValue] = useState(3);
  return (
    <Tester style={{flex: 1, backgroundColor: '#000'}}>
      <ScrollView>
        <TestSuite name="AirbnbRating属性count 设置多少个rating">
          <TestCase tags={['C_API']} itShould="count">
            <AirbnbRating count={4} />
          </TestCase>
        </TestSuite>
        <TestSuite name="AirbnbRating属性defaultRating 默认rating数量">
          <TestCase tags={['C_API']} itShould="defaultRating">
            <AirbnbRating defaultRating={3} />
          </TestCase>
        </TestSuite>
        <TestSuite name="AirbnbRating属性isDisabled 设置后不可评分">
          <TestCase tags={['C_API']} itShould="isDisabled">
            <AirbnbRating defaultRating={3} isDisabled />
          </TestCase>
        </TestSuite>
        <TestSuite name="AirbnbRating属性onFinishRating 评分后的回调 会将分数回调出来">
          <TestCase tags={['C_API']} itShould="onFinishRating">
            <AirbnbRating
              defaultRating={3}
              onFinishRating={value => {
                setValue(value);
              }}
            />
            <Text>评分分数：{value}</Text>
          </TestCase>
        </TestSuite>
        <TestSuite name="AirbnbRating属性ratingContainerStyle 容器样式">
          <TestCase tags={['C_API']} itShould="ratingContainerStyle">
            <AirbnbRating
              ratingContainerStyle={{
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 300,
                alignSelf: 'center',
              }}
              defaultRating={3}
              onFinishRating={value => {
                setValue(value);
              }}
            />
            <Text>评分分数：{value}</Text>
          </TestCase>
        </TestSuite>
        <TestSuite name="AirbnbRating属性reviewColor 文字的颜色">
          <TestCase tags={['C_API']} itShould="reviewColor">
            <AirbnbRating
              reviewColor="red"
              defaultRating={3}
              onFinishRating={value => {
                setValue(value);
              }}
            />
            <Text>评分分数：{value}</Text>
          </TestCase>
        </TestSuite>
        <TestSuite name="AirbnbRating属性reviewSize 文字的大小">
          <TestCase tags={['C_API']} itShould="reviewSize">
            <AirbnbRating
              reviewColor="red"
              reviewSize={100}
              defaultRating={3}
              onFinishRating={value => {
                setValue(value);
              }}
            />
            <Text>评分分数：{value}</Text>
          </TestCase>
        </TestSuite>
        <TestSuite name="AirbnbRating属性reviews 设置一组自定义的文字  不使用系统默认的">
          <TestCase tags={['C_API']} itShould="reviews">
            <AirbnbRating
              reviewColor="red"
              reviews={['ok', 'okk', 'okkk', 'okkkk', 'okkkkk']}
              reviewSize={100}
              defaultRating={3}
              onFinishRating={value => {
                setValue(value);
              }}
            />
            <Text>评分分数：{value}</Text>
          </TestCase>
        </TestSuite>
        <TestSuite name="AirbnbRating属性selectedColor 选中rating的颜色">
          <TestCase tags={['C_API']} itShould="selectedColor">
            <AirbnbRating
              selectedColor={'pink'}
              reviewColor="red"
              reviews={['ok', 'okk', 'okkk', 'okkkk', 'okkkkk']}
              reviewSize={100}
              defaultRating={3}
              onFinishRating={value => {
                setValue(value);
              }}
            />
            <Text>评分分数：{value}</Text>
          </TestCase>
        </TestSuite>
        <TestSuite name="AirbnbRating属性showRating 是否显示文字 默认为true 现在设置为false">
          <TestCase tags={['C_API']} itShould="showRating">
            <AirbnbRating
              showRating={false}
              selectedColor={'pink'}
              reviewColor="red"
              reviews={['ok', 'okk', 'okkk', 'okkkk', 'okkkkk']}
              reviewSize={100}
              defaultRating={3}
              onFinishRating={value => {
                setValue(value);
              }}
            />
            <Text>评分分数：{value}</Text>
          </TestCase>
        </TestSuite>
        <TestSuite name="AirbnbRating属性size 设置星星的大小 设置为60 默认时40">
          <TestCase tags={['C_API']} itShould="size">
            <AirbnbRating
              size={60}
              showRating={false}
              selectedColor={'pink'}
              reviewColor="red"
              reviews={['ok', 'okk', 'okkk', 'okkkk', 'okkkkk']}
              reviewSize={100}
              defaultRating={3}
              onFinishRating={value => {
                setValue(value);
              }}
            />
            <Text>评分分数：{value}</Text>
          </TestCase>
        </TestSuite>
        <TestSuite name="AirbnbRating属性starContainerStyle 设置星星的容器样式">
          <TestCase tags={['C_API']} itShould="starContainerStyle">
            {/* 与iOS平台一致 */}
            <AirbnbRating
              starContainerStyle={{backgroundColor: 'black', borderRadius: 20,width:200}}
              // ratingContainerStyle={{
              //   backgroundColor: 'pink',
              //   borderRadius: 20,
              //   width: 300,
              //   alignSelf: 'center',
              // }}
              
              size={60}
              showRating={false}
              selectedColor={'pink'}
              reviewColor="red"
              reviews={['ok', 'okk', 'okkk', 'okkkk', 'okkkkk']}
              reviewSize={100}
              defaultRating={3}
              onFinishRating={value => {
                setValue(value);
              }}
            />
            <Text>评分分数：{value}</Text>
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="AirbnbRating属性starImage 自定义图标无效">
          <TestCase tags={['C_API']} itShould="starImage">
            <AirbnbRating
              starImage={require('./images/img.png')}
              selectedColor={'pink'}
              reviewColor="red"
              reviews={['ok', 'okk', 'okkk', 'okkkk', 'okkkkk']}
              reviewSize={100}
              defaultRating={3}
              onFinishRating={value => {
                setValue(value);
              }}
            />
            <Text>评分分数：{value}</Text>
          </TestCase>
        </TestSuite> */}
      </ScrollView>
    </Tester>
  );
};

export default AirbnbRatings;

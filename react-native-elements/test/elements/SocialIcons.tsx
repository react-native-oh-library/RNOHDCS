import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SocialIcon, SocialIconProps, Button} from '@rneui/themed';
import {SocialMediaType} from '@rneui/themed';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

type IconData = {
  type: SocialMediaType;
  iconType: string;
};

const dataList: Partial<IconData>[][] = [
  [
    {
      type: 'facebook',
    },
    {
      type: 'twitter',
    },
    {
      type: 'google-plus-official',
    },
  ],
  [
    {
      type: 'google',
    },
    {
      type: 'pinterest',
    },
    {
      type: 'linkedin',
    },
  ],
  [
    {
      type: 'youtube',
    },
    {
      type: 'vimeo',
    },
    {
      type: 'tumblr',
    },
  ],
  [
    {
      type: 'instagram',
    },
    {
      type: 'quora',
    },
    {
      type: 'flickr',
    },
  ],
  [
    {
      type: 'foursquare',
    },
    {
      type: 'wordpress',
    },
    {
      type: 'stumbleupon',
    },
  ],
  [
    {
      type: 'github',
    },
    {
      type: 'github-alt',
    },
    {
      type: 'twitch',
    },
  ],
  [
    {
      type: 'twitch',
    },
    {
      type: 'medium',
    },
    {
      type: 'soundcloud',
    },
    {
      type: 'stack-overflow',
    },
  ],
  [
    {
      type: 'gitlab',
    },
    {
      type: 'angellist',
    },
    {
      type: 'codepen',
    },
  ],
  [
    {
      type: 'weibo',
    },
    {
      type: 'vk',
    },
    {
      type: 'whatsapp',
    },
  ],
];

type SocialIconsComponentProps = {};
class ButtonComponent extends React.Component<{}, {}> {
  render() {
    return (
      <Button
        icon={{
          name: 'home',
          type: 'font-awesome',
          color: 'blue',
        }}
        color={'pink'}
      />
    );
  }
}
const SocialIcons: React.FunctionComponent<SocialIconsComponentProps> = () => {
  const socialProps = {};
  const [onlongPress, setOnlongPress] = useState(false);
  const [onPress, setOnPress] = useState(false);
  const [onPressIn, setOnPressIn] = useState(false);
  const [onPressOut, setonPressOut] = useState(false);
  const [value, setValue] = useState(false);
  return (
    <Tester>
      {/* <TestSuite name='Social Icons'>
        <TestCase itShould='Social Icons' tags={['C_API']}>
          <ScrollView>
            {dataList.map(
              (chunk: Partial<IconData>[], chunkIndex: React.Key) => (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 10,
                    backgroundColor: '#4c4c4c',
                  }}
                  key={chunkIndex}
                >
                  {chunk.map((l: Partial<IconData>, i: React.Key) => (
                    <SocialIcon
                      {...(socialProps as SocialIconProps)}
                      type={l.type}
                      iconType={l.iconType ? l.iconType : 'font-awesome'}
                      key={`${chunkIndex}-${i}`}
                    />
                  ))}
                </View>
              )
            )}
          </ScrollView>
        </TestCase>
      </TestSuite> */}
      <ScrollView>
        <TestSuite name="SocialIcon的属性Component 传入一个button类型的组件">
          <TestCase itShould="Component">
            <SocialIcon Component={ButtonComponent} />
          </TestCase>
        </TestSuite>
        <TestSuite name="SocialIcon的属性activityIndicatorStyle 指示器样式">
          <TestCase itShould="activityIndicatorStyle">
            <SocialIcon
              loading={true}
              activityIndicatorStyle={{width:40,height:40,backgroundColor:'green'}}
              style={{alignSelf: 'center'}}
              type={'codepen'}
              iconType={'font-awesome'}
              onPress={() => {
                console.log('11111');
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="SocialIcon的属性button 将SocialIcon变为button类型">
          <TestCase itShould="button">
            <SocialIcon
              // loading={true}
              activityIndicatorStyle={{width: 40, height: 40}}
              style={{alignSelf: 'center'}}
              type={'codepen'}
              iconType={'font-awesome'}
              button={true}
              onPress={() => {
                console.log('22222');
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="SocialIcon的属性disabled 设置disable则点击无响应">
          <TestCase itShould="disabled 为true">
            <SocialIcon
              disabled={true}
              activityIndicatorStyle={{width: 40, height: 40}}
              style={{alignSelf: 'center'}}
              type={'codepen'}
              iconType={'font-awesome'}
              button={true}
              onPress={() => {
                console.log('22222');
              }}
            />
          </TestCase>
          <TestCase itShould="disabled 为false">
            <SocialIcon
              disabled={false}
              activityIndicatorStyle={{width: 40, height: 40}}
              style={{alignSelf: 'center'}}
              type={value ? 'stumbleupon' : 'codepen'}
              iconType={'font-awesome'}
              button={true}
              onPress={() => {
                console.log('22222');
                setValue(!value)
              }}
            />
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="SocialIcon的属性fontFamily 设置font-awesome QuickSand字体无效">
          <TestCase itShould="fontFamily">
            <SocialIcon
              fontFamily='font-awesome'
              disabled={true}
              activityIndicatorStyle={{width: 40, height: 40}}
              style={{alignSelf: 'center'}}
              type={'stumbleupon'}
              iconType={'font-awesome'}
              button={true}
              onPress={() => {
                console.log('22222');
              }}
            />
            <SocialIcon

              disabled={true}
              activityIndicatorStyle={{width: 40, height: 40}}
              style={{alignSelf: 'center'}}
              type={'stumbleupon'}
              iconType={'font-awesome'}
              fontFamily="QuickSand"
              button={true}
              onPress={() => {
                console.log('22222');
              }}
            />
          </TestCase>
        </TestSuite> */}
        <TestSuite name="SocialIcon的属性fontStyle 设置字体样式">
          <TestCase itShould="fontStyle">
            <SocialIcon
              disabled={true}
              activityIndicatorStyle={{width: 40, height: 40}}
              style={{alignSelf: 'center', width: 100, height: 100}}
              type={'stumbleupon'}
              iconType={'font-awesome'}
              button={true}
              title="SocialIcon"
              fontStyle={{fontSize: 20, color: 'green'}}
              onPress={() => {
                console.log('22222');
              }}
            />
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="SocialIcon的属性fontWeight 设置字体为800无效">
          <TestCase itShould="fontWeight">
            <SocialIcon
              // disabled={true}
              activityIndicatorStyle={{width: 40, height: 40}}
              style={{alignSelf: 'center', width: 100, height: 100}}
              type={'stumbleupon'}
              iconType={'font-awesome'}
              button={true}
              title="SocialIcon"
              fontWeight="800"
              fontStyle={{fontSize: 30, fontWeight: '500', color: 'black'}}
              onPress={() => {
                console.log('22222');
              }}
            />
          </TestCase>
        </TestSuite> */}
        <TestSuite name="SocialIcon的属性iconColor 设置icon颜色">
          <TestCase itShould="iconColor">
            <SocialIcon
              disabled={true}
              activityIndicatorStyle={{width: 40, height: 40}}
              style={{alignSelf: 'center', width: 100, height: 100}}
              type={'stumbleupon'}
              iconType={'font-awesome'}
              button={true}
              fontWeight="800"
              iconColor={'green'}
              fontStyle={{fontSize: 30, fontWeight: '400', color: 'black'}}
              onPress={() => {
                console.log('22222');
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="SocialIcon的属性iconSize 设置icon大小">
          <TestCase itShould="iconSize">
            <SocialIcon
              disabled={true}
              activityIndicatorStyle={{width: 40, height: 40}}
              style={{alignSelf: 'center', width: 100, height: 100}}
              type={'stumbleupon'}
              iconType={'font-awesome'}
              button={true}
              iconSize={100}
              fontWeight="800"
              iconColor={'green'}
              fontStyle={{fontSize: 30, fontWeight: '400', color: 'black'}}
              onPress={() => {
                console.log('22222');
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="SocialIcon的属性iconStyle 设置icon样式">
          <TestCase itShould="iconStyle">
            <SocialIcon
              disabled={true}
              activityIndicatorStyle={{width: 40, height: 40}}
              style={{alignSelf: 'center', width: 100, height: 100}}
              type={'stumbleupon'}
              iconType={'font-awesome'}
              button={true}
              iconSize={100}
              fontWeight="800"
              iconColor={'green'}
              iconStyle={{
                backgroundColor: 'pink',
                borderRadius: 50,
                opacity: 0.7,
              }}
              fontStyle={{fontSize: 30, fontWeight: '400', color: 'black'}}
              onPress={() => {
                console.log('22222');
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="SocialIcon的属性iconType 设置iconType 设置icon图标集的类型">
          <TestCase itShould="iconType">
            <SocialIcon
              disabled={true}
              activityIndicatorStyle={{width: 40, height: 40}}
              style={{alignSelf: 'center', width: 100, height: 100}}
              type={'whatsapp'}
              iconType={'font-awesome-5'}
              button={true}
              iconSize={100}
              fontWeight="800"
              iconColor={'green'}
              iconStyle={{
                backgroundColor: 'pink',
                borderRadius: 50,
                opacity: 0.7,
              }}
              fontStyle={{fontSize: 30, fontWeight: '400', color: 'black'}}
              onPress={() => {
                console.log('22222');
              }}
            />
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="SocialIcon的属性light 设置主题为light为true或false 均无效">
          <TestCase itShould="iconType">
            <SocialIcon
              light={true}
              disabled={true}
              activityIndicatorStyle={{width: 40, height: 40}}
              style={{alignSelf: 'center', width: 100, height: 100}}
              type={'stumbleupon'}
              iconType={'font-awesome'}
              button={true}
              iconSize={100}
              fontWeight="800"
              iconColor={'green'}
              iconStyle={{
                backgroundColor: 'pink',
                borderRadius: 50,
                opacity: 0.7,
              }}
              fontStyle={{fontSize: 30, fontWeight: '400', color: 'black'}}
              onPress={() => {
                console.log('22222');
              }}
            />
          </TestCase>
        </TestSuite> */}
        <TestSuite name="SocialIcon的属性loading 设置loading">
          <TestCase itShould="loading">
            <SocialIcon
              loading={true}
              disabled={true}
              activityIndicatorStyle={{width: 40, height: 40}}
              style={{alignSelf: 'center', width: 100, height: 100}}
              type={'stumbleupon'}
              iconType={'font-awesome'}
              button={true}
              iconSize={100}
              fontWeight="800"
              iconColor={'green'}
              iconStyle={{
                backgroundColor: 'pink',
                borderRadius: 50,
                opacity: 0.7,
              }}
              fontStyle={{fontSize: 30, fontWeight: '400', color: 'black'}}
              onPress={() => {
                console.log('22222');
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="SocialIcon的属性onLongPress 设置长按事件onLongPress">
          <TestCase itShould="onLongPress">
            <SocialIcon
              // loading={true}
              activityIndicatorStyle={{width: 40, height: 40}}
              style={{alignSelf: 'center', width: 100, height: 100}}
              type={'stumbleupon'}
              iconType={'font-awesome'}
              button={true}
              iconSize={100}
              fontWeight="800"
              iconColor={onlongPress ? 'green' : 'yellow'}
              iconStyle={{
                backgroundColor: 'pink',
                borderRadius: 50,
                opacity: 0.7,
              }}
              fontStyle={{fontSize: 30, fontWeight: '400', color: 'black'}}
              onLongPress={() => {
                setOnlongPress(!onlongPress);
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="SocialIcon的属性onPress 点击事件onPress">
          <TestCase itShould="onPress">
            <SocialIcon
              // loading={true}
              activityIndicatorStyle={{width: 40, height: 40}}
              style={{alignSelf: 'center', width: 100, height: 100}}
              type={'stumbleupon'}
              iconType={'font-awesome'}
              button={true}
              iconSize={100}
              fontWeight="800"
              iconColor={onPress ? 'green' : 'yellow'}
              iconStyle={{
                backgroundColor: 'pink',
                borderRadius: 50,
                opacity: 0.7,
              }}
              fontStyle={{fontSize: 30, fontWeight: '400', color: 'black'}}
              onPress={() => {
                setOnPress(!onPress);
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="SocialIcon的属性onPressIn  手指按下事件onPressIn">
          <TestCase itShould="onPressIn">
            <SocialIcon
              // loading={true}
              activityIndicatorStyle={{width: 40, height: 40}}
              style={{alignSelf: 'center', width: 100, height: 100}}
              type={'stumbleupon'}
              iconType={'font-awesome'}
              button={true}
              iconSize={100}
              fontWeight="800"
              iconColor={onPressIn ? 'green' : 'yellow'}
              iconStyle={{
                backgroundColor: 'pink',
                borderRadius: 50,
                opacity: 0.7,
              }}
              fontStyle={{fontSize: 30, fontWeight: '400', color: 'black'}}
              onPressIn={() => {
                setOnPressIn(!onPressIn);
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="SocialIcon的属性onPressOut 手指松开事件onPressOut">
          <TestCase itShould="onPressOut">
            <SocialIcon
              // loading={true}
              activityIndicatorStyle={{width: 40, height: 40}}
              style={{alignSelf: 'center', width: 100, height: 100}}
              type={'stumbleupon'}
              iconType={'font-awesome'}
              button={true}
              iconSize={100}
              fontWeight="800"
              iconColor={onPressOut ? 'green' : 'yellow'}
              iconStyle={{
                backgroundColor: 'pink',
                borderRadius: 50,
                opacity: 0.7,
              }}
              fontStyle={{fontSize: 30, fontWeight: '400', color: 'black'}}
              onPressOut={() => {
                setonPressOut(!onPressOut);
              }}
            />
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="SocialIcon的属性raised 设置raised为true或false均无效">
          <TestCase itShould="raised">
            <SocialIcon
              // loading={true}
              activityIndicatorStyle={{width: 40, height: 40}}
              style={{alignSelf: 'center', width: 100, height: 100}}
              type={'stumbleupon'}
              iconType={'font-awesome'}
              button={true}
              iconSize={100}
              fontWeight="800"
              raised={true}
            />
          </TestCase>
        </TestSuite> */}
        {/* <TestSuite name="SocialIcon的属性small 设置small字符串文本无效">
          <TestCase itShould="small">
            <SocialIcon
              activityIndicatorStyle={{width: 40, height: 40}}
              style={{alignSelf: 'center', width: 100, height: 100}}
              type={'stumbleupon'}
              iconType={'font-awesome'}
              button={true}
              // iconSize={100}
              // fontWeight='800'
              small={'small'}
            />
          </TestCase>
        </TestSuite> */}
        <TestSuite name="SocialIcon的属性style 设置style">
          <TestCase itShould="style">
            <SocialIcon
              activityIndicatorStyle={{width: 40, height: 40}}
              style={{
                alignSelf: 'center',
                width: 100,
                height: 100,
                backgroundColor: 'pink',
              }}
              type={'stumbleupon'}
              iconType={'font-awesome'}
              button={true}
              // iconSize={100}
              fontWeight="800"
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="SocialIcon的属性title 设置title文字">
          <TestCase itShould="title">
            <SocialIcon
              activityIndicatorStyle={{width: 40, height: 40}}
              type={'stumbleupon'}
              iconType={'font-awesome'}
              button={true}
              iconSize={100}
              fontWeight="800"
              small={'small'}
              title="title"
              fontStyle={{color: 'black'}}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="SocialIcon的属性title 设置type">
          <TestCase itShould="type">
            <SocialIcon
              activityIndicatorStyle={{width: 40, height: 40}}
              type={'youtube'}
              iconType={'font-awesome'}
              button={true}
              iconSize={100}
              fontWeight="800"
              small={'small'}
            />
            <SocialIcon
              activityIndicatorStyle={{width: 40, height: 40}}
              type={'soundcloud'}
              iconType={'font-awesome'}
              button={true}
              iconSize={100}
              fontWeight="800"
              small={'small'}
            />
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="SocialIcon的属性underlayColor 设置underlayColor为黑色无效">
          <TestCase itShould="underlayColor">
            <SocialIcon
              activityIndicatorStyle={{width: 40, height: 40}}
              type={'youtube'}
              iconType={'font-awesome'}
              button={true}
              iconSize={100}
              fontWeight="800"
              small={'small'}
              underlayColor={'black'}
            />
          </TestCase>
        </TestSuite> */}
      </ScrollView>
    </Tester>
  );
};

export default SocialIcons;

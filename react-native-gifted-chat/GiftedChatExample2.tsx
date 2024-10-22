import React, { useState, useRef, useEffect } from 'react'
import { Text, View, ScrollView, Alert, Image, TextInput, Keyboard, Button } from 'react-native'
import {
  GiftedChat,
  IMessage,
} from 'react-native-gifted-chat'
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import Lightbox from 'react-native-lightbox-v2';



export function GiftedChatExample2() {

  const data = [
    'locale',
    'timeFormat',
    'dateFormat',
    'loadEarlier',
    'renderDay',
    'renderTime',
    'renderLoadEarlier',
    'onLoadEarlier',
    'infiniteScroll',
    'isLoadingEarlier'
  ]

  const [messages, setMessages] = useState<IMessage[]>([
    {
      _id: 1,
      text: 'My message111',
      createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
      image: '',  // 图片的 URL,
      // video: require('./C-API.mp4'),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://facebook.github.io/react/img/logo_og.png',
      },
      // system: true,
      quickReplies: {
        type: 'radio', // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: '😋 Yes',
            value: 'yes',
          },
          {
            title: '📷 Yes, let me show you with a picture!',
            value: 'yes_picture',
          },
          {
            title: '😞 Nope. What?',
            value: 'no',
          },
        ],
      },
    },
    {
      _id: 2,
      text: 'Hello World',
      createdAt: new Date(),
      user: {
        _id: 3,
        name: 'renderUsernameOnMessage 显示的用户名',
      },
      image: 'https://pic.rmb.bdstatic.com/bjh/events/d882fc1d6d1ff5e4cb4cdfce2f1ac62c1450.jpeg@h_1280',  // 图片的 URL,
      quickReplies: {
        type: 'checkbox', // or 'radio',
        values: [
          {
            title: 'Yes',
            value: 'yes',
          },
          {
            title: 'Yes, let me show you with a picture!',
            value: 'yes_picture',
          },
          {
            title: 'Nope. What?',
            value: 'no',
          },
        ],
      },
    },
    {
      _id: 4,
      text: '190976198@qq.com',
      createdAt: new Date(),
      user: {
        _id: 4,
        name: 'Me',
        avatar: '190976198@qq.com',
      },
      // system: true,
    },

  ])
  const messagesList = ['My message1', 'My message2', 'My message3', 'My message4', 'My message5', 'My message6', 'My message7', 'My message8', 'My message9', 'My message10', 'My message11', 'My message12', 'My message13', 'My message14', 'My message15', 'My message16', 'My message17', 'My message18', 'My message19', 'My message20', 'My message21', 'My message22', 'My message23', 'My message24', 'My message25', 'My message26', 'My message27', 'My message28',]
    .map((item, index) => ({
      _id: index + 1, text: `${item}${index + 1}`, createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)), user: {
        _id: index + 2,
        name: 'renderUsernameOnMessage 显示的用户名',
      },
    }))
  const renderLoadEarlier = () => (
    <View style={{ alignItems: 'center', justifyContent: 'center', width: 100, height: 60, }}>
      <Button title='加载早期消息' onPress={() => { Alert.alert('加载早期消息') }} />
    </View>
  );

  const onSend = (newMsg: IMessage[]) => setMessages([...messages, ...newMsg])
  const prop = {
    messages: messages,
    isKeyboardInternallyHandled: false,
    messagesContainerStyle: { flex: 1 },
    user: { _id: 1, name: 'Developer', },
    showUserAvatar: true,
    onSend,
  }
  return (
    <Tester style={{ height: '100%' }}>
      <ScrollView>
        <TestSuite name='giftedChat'>
          <TestCase itShould='locale'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                locale={require('dayjs/locale/de')}
              />
            </View>
          </TestCase>

          <TestCase itShould='locale对比'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                locale='en-US'
              />
            </View>
          </TestCase>

          <TestCase itShould='timeFormat 用于渲染时间的格式；默认值为LT'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                timeFormat={'LTS'}
              />
            </View>
          </TestCase>

          <TestCase itShould='dateFormat 用于呈现日期的格式；默认值为ll'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                dateFormat={'LLLL'}
              />
            </View>
          </TestCase>

          <TestCase itShould='renderDay 自定义消息上方的日期'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                renderDay={() => <Text>1999-09-01</Text>}
              />
            </View>
          </TestCase>

          <TestCase itShould='renderTime 消息中的自定义时间'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                renderTime={() => <Text>1999-09-02</Text>}
              />
            </View>
          </TestCase>

          <TestCase itShould='loadEarlier 启用“加载早期消息”按钮'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                loadEarlier
              />
            </View>
          </TestCase>

          <TestCase itShould='renderLoadEarlier 自定义“加载早期消息”(需要设置loadEarlier)'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                loadEarlier
                renderLoadEarlier={renderLoadEarlier}
              />
            </View>
          </TestCase>

          <TestCase itShould='onLoadEarlier 加载早期消息时的回调(需要设置loadEarlier)'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                loadEarlier
                onLoadEarlier={() => { Alert.alert('加载早期消息时的回调') }}
              />
            </View>
          </TestCase>

          <TestCase itShould='infiniteScroll 到达消息容器顶部时无限向上滚动，如果存在则自动调用 onLoadEarlier 函数'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                messages={messagesList}
                loadEarlier
                infiniteScroll
                onLoadEarlier={() => { Alert.alert('加载早期消息时的回调') }}
              />
            </View>
          </TestCase>

          <TestCase itShould='isLoadingEarlier 加载早期消息时显示'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                loadEarlier
                isLoadingEarlier
              />
            </View>
          </TestCase>

        </TestSuite>
      </ScrollView>
    </Tester>
  )
}
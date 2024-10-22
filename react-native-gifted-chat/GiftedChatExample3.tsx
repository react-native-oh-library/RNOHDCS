import React, { useState, useRef, useEffect } from 'react'
import { Text, View, ScrollView, Alert, Image, TextInput, Keyboard, Button } from 'react-native'
import {
  GiftedChat,
  IMessage,
} from 'react-native-gifted-chat'
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import Lightbox from 'react-native-lightbox-v2';



export function GiftedChatExample3() {

  const data = [
    'renderBubble',
    'renderSystemMessage',
    'renderTicks',
    'onPress',
    'onLongPress',
    'renderUsernameOnMessage',
    'renderUsername',
    'renderMessage',
    'renderMessageText'
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
      },
      system: true,
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
        name: '用户名: zhouchong',
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
        _id: 5,
        name: 'Me',
        // avatar: '190976198@qq.com',
      },
      // system: true,
    },

  ])

  const renderLoadEarlier = () => (
    <View style={{ alignItems: 'center', justifyContent: 'center', width: 100, height: 60, }}>
      <Button title='加载早期消息' onPress={() => { Alert.alert('加载早期消息') }} />
    </View>
  );
  const renderBubble = () => (
    <View style={{ alignItems: 'center', justifyContent: 'center', width: 100, height: 60, backgroundColor: 'pink' }}>
      <Text style={{ color: '#ffffff' }}>自定义消息气泡</Text>
    </View>
  );
  const renderSystemMessage = () => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', width: 100, height: 60, backgroundColor: 'pink' }}>
        <Text style={{ color: '#ffffff' }}>自定义系统消息</Text>
      </View>
    );
  };
  const renderUsername = () => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', width: 100, height: 60, backgroundColor: 'pink' }}>
        <Text style={{ color: '#ffffff' }}>自定义用户名容器</Text>
      </View>
    );
  };
  const renderMessage = () => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', width: 100, height: 60, backgroundColor: 'pink' }}>
        <Text style={{ color: '#ffffff' }}>自定义消息容器</Text>
      </View>
    );
  };
  const renderMessageText = () => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', width: 100, height: 60, backgroundColor: 'pink' }}>
        <Text style={{ color: '#ffffff' }}>自定义消息文本</Text>
      </View>
    );
  };
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
          <TestCase itShould='renderBubble 自定义消息气泡'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                renderBubble={renderBubble}
              />
            </View>
          </TestCase>

          <TestCase itShould='renderTicks 自定义消息内时间'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                renderTicks={() => (
                  <Text style={{ color: 'pink' }}>2024-07-30</Text>
                )}
              />
            </View>
          </TestCase>


          <TestCase itShould='renderSystemMessage 自定义系统消息'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                renderSystemMessage={renderSystemMessage}
              />
            </View>
          </TestCase>

          <TestCase itShould='onPress 按下消息气泡时回调'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                onPress={() => { Alert.alert('按下消息气泡 onPress') }}
              />
            </View>
          </TestCase>

          <TestCase itShould='onLongPress 长按消息气泡时回调'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                onLongPress={() => { Alert.alert('长按消息气泡 onLongPress') }}
              />
            </View>
          </TestCase>

          <TestCase itShould='renderUsernameOnMessage true 指示是否在消息气泡内显示用户的用户名；默认为false'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                renderUsernameOnMessage
              />
            </View>
          </TestCase>
          <TestCase itShould='renderUsernameOnMessage false 指示是否在消息气泡内显示用户的用户名；默认为false'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                renderUsernameOnMessage={false}
              />
            </View>
          </TestCase>

          <TestCase itShould='renderUsername 自定义用户名容器(需要设置renderUsernameOnMessage)'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                renderUsernameOnMessage
                renderUsername={renderUsername}
              />
            </View>
          </TestCase>

          <TestCase itShould='renderMessage 自定义消息容器'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                renderMessage={renderMessage} // 自定义消息容器
              />
            </View>
          </TestCase>

          <TestCase itShould='renderMessageText 自定义消息文本'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                renderMessageText={renderMessageText} // 
              />
            </View>
          </TestCase>

        </TestSuite>
      </ScrollView>
    </Tester>
  )
}
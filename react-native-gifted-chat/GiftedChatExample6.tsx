import React, { useState, useRef, useEffect } from 'react'
import { Text, View, ScrollView, Alert, Image, TextInput, Keyboard, Button } from 'react-native'
import {
  GiftedChat,
  IMessage,
} from 'react-native-gifted-chat'
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

export function GiftedChatExample6() {

  const [messages, setMessages] = useState<IMessage[]>([
    {
      _id: 1,
      text: 'My message111',
      createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
      image: '',
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://facebook.github.io/react/img/logo_og.png',
      },
      quickReplies: {
        type: 'radio',
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
      text: '15727293407',
      createdAt: new Date(),
      user: {
        _id: 3,
        name: 'renderUsernameOnMessage 显示的用户名',
      },
      image: 'https://pics1.baidu.com/feed/c2cec3fdfc0392456576003568f8f3cc7c1e2540.jpeg@f_auto?token=b8c70f853c3c1bd7984b47a2e382552a',  // 图片的 URL,
      quickReplies: {
        type: 'checkbox',
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
    },

  ])
  const messagesList = ['My message1', 'My message2', 'My message3', 'My message4', 'My message5', 'My message6', 'My message7', 'My message8', 'My message9', 'My message10', 'My message11', 'My message12', 'My message13', 'My message14', 'My message15', 'My message16', 'My message17', 'My message18', 'My message19', 'My message20', 'My message21', 'My message22', 'My message23', 'My message24', 'My message25', 'My message26', 'My message27', 'My message28',]
    .map((item, index) => ({
      _id: index + 1, text: `${item}${index + 1}`, createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)), user: {
        _id: index + 2,
        name: 'renderUsernameOnMessage 显示的用户名',
      },
    }))

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
          <TestCase itShould='listViewProps={{ initialNumToRender: 5 }} 每次渲染五条'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                messages={messagesList}
                listViewProps={{ initialNumToRender: 5 }}
              />
            </View>
          </TestCase>

          <TestCase itShould='textInputProps 传递给textInput的额外属性'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                textInputProps={{ placeholder: '额外属性placeholder...', autoFocus: true }}
              />
            </View>
          </TestCase>

          <TestCase itShould='textInputStyle 传递给textInput自定义样式'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                textInputStyle={{ backgroundColor: 'red' }}
              />
            </View>
          </TestCase>

          <TestCase itShould='multiline <TextInput>多行；默认true'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                multiline={false}
              />
            </View>
          </TestCase>

          <TestCase itShould="keyboardShouldPersistTaps  'always'：键盘不会因为点击屏幕其他区域而收起。'never'：键盘会在点击屏幕其他任何区域时收起。'handled'（默认值）：只有当组件自身处理了点击事件时，键盘才不会收起。">
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                keyboardShouldPersistTaps="never"
              />
            </View>
          </TestCase>

          <TestCase itShould='onInputTextChanged 输入的onChange回调事件”'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                onInputTextChanged={(value) => { Alert.alert(value) }}
              />
            </View>
          </TestCase>

          <TestCase itShould='maxInputLength 消息编写器 TextInput 的最大长度'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                maxInputLength={5}
              />
            </View>
          </TestCase>

          <TestCase itShould='parsePatterns 高亮显示特定消息(聊天记录中邮箱)'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                parsePatterns={() => [
                  {
                    pattern: /\b\w+@\w+\.\w+\b/gi,
                    style: { fontWeight: 'bold', color: 'pink' },
                  },
                ]}
              />
            </View>
          </TestCase>

        </TestSuite>
      </ScrollView>
    </Tester>
  )
}
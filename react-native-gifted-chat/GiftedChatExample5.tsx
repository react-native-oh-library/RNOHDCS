import React, { useState, useRef, useEffect } from 'react'
import { Text, View, ScrollView, Alert, Image, TextInput, Keyboard, Button } from 'react-native'
import {
  GiftedChat,
  IMessage,
} from 'react-native-gifted-chat'
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import Lightbox from 'react-native-lightbox-v2';



export function GiftedChatExample5() {

  const data = [
    'renderInputToolbar',
    'renderComposer',
    'renderActions',
    'renderSend',
    'renderAccessory',
    'onPressActionButton',
    'minComposerHeight',
    'maxComposerHeight?',
    'bottomOffset?',
    'minInputToolbarHeight?'
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
  const renderInputToolbar = () => {
    return (
      <TextInput style={{ alignItems: 'center', justifyContent: 'center', height: 30, backgroundColor: 'grey' }}></TextInput>
    );
  };
  const renderComposer = () => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: 30, backgroundColor: 'pink' }}>
        <Text style={{ color: '#ffffff' }}>自定义文本输入消息编写器</Text>
      </View>
    );
  };
  const renderActions = () => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', width: 100, height: 100, backgroundColor: 'pink' }}>
        <Text style={{ color: '#ffffff' }}>按钮</Text>
      </View>
    );
  };
  const renderSend = () => {
    return (
      <View style={{ backgroundColor: 'green', padding: 10 }}>
        <Text>自定义发送按钮</Text>
      </View>
    );
  };
  const renderAccessory = () => {
    return (
      <View style={{ backgroundColor: 'yellow', width: 50, height: 30 }}>
        <Text>下方的显示</Text>
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
          <TestCase itShould='minComposerHeight 50px 输入框最小高'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                minComposerHeight={50}  // 输入框最小高
              />
            </View>
          </TestCase>

          <TestCase itShould='renderInputToolbar 自定义消息编写器容器'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                renderInputToolbar={renderInputToolbar}
              />
            </View>
          </TestCase>

          <TestCase itShould='renderComposer 自定义文本输入消息编写器'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                renderComposer={renderComposer}
              />
            </View>
          </TestCase>

          <TestCase itShould='renderActions 消息编辑器左侧的自定义操作按钮'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                renderActions={renderActions}
              />
            </View>
          </TestCase>

          <TestCase itShould='renderSend 自定义发送按钮'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                renderSend={renderSend}
              />
            </View>
          </TestCase>

          <TestCase itShould='renderAccessory 定义消息编辑器下方的操作'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                renderAccessory={renderAccessory}
              />
            </View>
          </TestCase>

          <TestCase itShould='onPressActionButton 按下操作按钮时回调”'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                onPressActionButton={() => Alert.alert('按下了操作按钮')}
              />
            </View>
          </TestCase>

          <TestCase itShould='maxComposerHeight 输入框最大高 RN框架监听输入框高度改变onContentSizeChange未触发'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                minComposerHeight={50}
                maxComposerHeight={70}
              />
            </View>
          </TestCase>

          <TestCase itShould='bottomOffset 聊天与屏幕底部的距离?RN FlatList组件无源码传入触发bottomOffset相关属性方法'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                bottomOffset={200}
              />
            </View>
          </TestCase>

          <TestCase itShould='minInputToolbarHeight 输入工具栏的最小高度?1'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                minInputToolbarHeight={200}
              />
            </View>
          </TestCase>

        </TestSuite>
      </ScrollView>
    </Tester>
  )
}
import React, { useState, useRef, useEffect } from 'react'
import { Text, View, ScrollView, Alert, Image, TextInput, Keyboard, Button } from 'react-native'
import {
  GiftedChat,
  IMessage,
} from 'react-native-gifted-chat'
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import Lightbox from 'react-native-lightbox-v2';



export function GiftedChatExample7() {

  const data = [
    'scrollToBottom',
    'scrollToBottomComponent',
    'scrollToBottomStyle',
    'scrollToBottomOffset',
    'alignTop',
    'onQuickReply',
    'renderQuickReplies',
    'quickReplyStyle',
    'renderQuickReplySend',
    'shouldUpdateMessage',
  ]

  const [messages, setMessages] = useState<IMessage[]>([
    {
      _id: 2,
      text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
      createdAt: new Date(),
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
      user: {
        _id: 2,
        name: 'React Native',
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
  const scrollToBottomComponent = () => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', width: 100, height: 100, backgroundColor: 'red' }}>
        <Text style={{ color: '#ffffff' }}>底部组件</Text>
      </View>
    );
  }

  const renderQuickReplies = () => {
    return (
      <View>
        <Text style={{ backgroundColor: 'pink' }} onPress={() => Alert.alert('Yes')}>Yes</Text>
        <Text onPress={() => Alert.alert('NO')}>No</Text>
        <Text onPress={() => Alert.alert('Maybe')}>Maybe</Text>
      </View>
    );
  }
  const renderQuickReplySend = () => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', width: 375, height: 60, backgroundColor: 'pink' }}>
        <Text style={{ color: '#ffffff' }}>自定义快捷回复发送视图</Text>
      </View>
    );
  };

  const [messages1, setMessages1] = React.useState([]);
  const shouldUpdateMessage = (newMessage, oldMessage) => {
    return newMessage.text!== oldMessage.text || newMessage.specialFlag;
  };
  const handleSend = (newMessages = []) => {
    const updatedMessages = GiftedChat.append(messages1, newMessages);
    setMessages1(updatedMessages);
  };
  const sendSpecialMessage = () => {
    const newMessage = {
      text: 'shouldUpdateMessage',
      specialFlag: true,
    };
    handleSend([newMessage]);
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
          <TestCase itShould='shouldUpdateMessage 用于决定是否更新特定的消息)'>
            <View style={{ height: 500, flex: 1 }}>
            <Button title="Send shouldUpdateMessage" onPress={sendSpecialMessage} />
              <GiftedChat {...prop}
                messages={messages1}
                shouldUpdateMessage={shouldUpdateMessage}
              />
            </View>
          </TestCase>

          <TestCase itShould='scrollToBottom true 启用显示滚动底部的组件（默认为 false）'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                messages={messagesList}
                scrollToBottom
              />
            </View>
          </TestCase>
          <TestCase itShould='scrollToBottom false 启用显示滚动底部的组件（默认为 false）'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                messages={messagesList}
                scrollToBottom={false}
              />
            </View>
          </TestCase>

          <TestCase itShould='scrollToBottomOffset 根据设置的偏移量显示滚动底部的组件'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                messages={messagesList}
                scrollToBottom
                scrollToBottomOffset={1000}
              />
            </View>
          </TestCase>

          <TestCase itShould='scrollToBottomComponent 自定义滚动.底部的容器'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                messages={messagesList}
                scrollToBottom
                scrollToBottomComponent={scrollToBottomComponent}
              />
            </View>
          </TestCase>

          <TestCase itShould='scrollToBottomStyle 底部组件容器的自定义样式'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                messages={messagesList}
                scrollToBottom
                scrollToBottomStyle={{ borderRadius: 50, width: 200, height: 200, backgroundColor: 'pink' }}
              />
            </View>
          </TestCase>

          <TestCase itShould='alignTop true 控制消息气泡是否出现在聊天顶部（默认为 false - 气泡对齐到底部）'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                alignTop={true}
              />
            </View>
          </TestCase>
          <TestCase itShould='alignTop false 控制消息气泡是否出现在聊天顶部（默认为 false - 气泡对齐到底部）'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                alignTop={false}
              />
            </View>
          </TestCase>

          <TestCase itShould='onQuickReply 发送快速回复时回调'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                onQuickReply={() => { Alert.alert('发送快速回复时回调') }}
              />
            </View>
          </TestCase>

          <TestCase itShould="quickReplyStyle 自定义快速回复视图样式">
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                quickReplyStyle={{ borderRadius: 15, width: 200, height: 50, backgroundColor: 'pink' }}
              />
            </View>
          </TestCase>

          <TestCase itShould="renderQuickReplies 快速回复">
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                renderQuickReplies={renderQuickReplies}
              />
            </View>
          </TestCase>

          <TestCase itShould='renderQuickReplySend 自定义快捷回复发送视图”'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                renderQuickReplySend={renderQuickReplySend}
              />
            </View>
          </TestCase>

        </TestSuite>
      </ScrollView>
    </Tester>
  )
}
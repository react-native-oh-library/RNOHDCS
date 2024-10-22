import React, { useState, useRef, useEffect } from 'react'
import { Text, View, ScrollView, Alert, Image, TextInput, Keyboard, Button } from 'react-native'
import {
  GiftedChat,
  IMessage,
} from 'react-native-gifted-chat'
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import Lightbox from 'react-native-lightbox-v2';
// import uuid from 'uuid'



export function GiftedChatExample() {

  const data = [
    'messages',
    'isKeyboardInternallyHandled',
    'messagesContainerStyle',
    'user',
    'onSend',
    'inverted',
    'messageContainerRef',
    'textInputRef',
    'isTyping',
    'renderFooter',
    'extraData',
    'text',
    'alwaysShowSend',
    'placeholder'
  ]

  const [messages, setMessages] = useState<IMessage[]>([
    {
      _id: 1,
      text: 'My message',
      createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
      image: '', 
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://facebook.github.io/react/img/logo_og.png',
      },
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
      text: 'Hello',
      createdAt: new Date(),
      user: {
        _id: 3,
        name: 'renderUsernameOnMessage',
      },
      image: 'https://facebook.github.io/react/img/logo_og.png',  // 图片的 URL,
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
      },
    },

  ])
  const messageContainerRef: any = useRef(null);
  const textInputRef: any = useRef(null);
  const renderFooter = () => {
    if (extraData.isHighlighted) {
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center', width: 375, height: 60, backgroundColor: 'pink' }}>
          <Text style={{ color: '#ffffff' }}>extraData传入的额外道具</Text>
        </View>
      );
    }
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', width: 375, height: 60, backgroundColor: 'red' }}>
          <Text style={{ color: '#ffffff' }}>自定义页脚组件</Text>
      </View>
    )
  };
  const [isHighlighted, setIsHighlighted] = useState(false);

  const extraData = {
    isHighlighted: isHighlighted
  };

  const handleToggleHighlight = () => {
    setIsHighlighted(!isHighlighted);
  };
  const onSend = (newMsg: IMessage[]) => setMessages([...messages, ...newMsg])
  const prop = {
    messages: messages,
    isKeyboardInternallyHandled: false,
    messagesContainerStyle: { flex: 1 },
    user: { _id: 1, name: 'Developer', },
    onSend,
  }
  return (
    <Tester style={{ height: '100%' }}>
      <ScrollView>
        <TestSuite name='giftedChat'>
          <TestCase itShould='基础属性 messages  isKeyboardInternallyHandled false messagesContainerStyle user onSend'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop} />
            </View>
          </TestCase>
          <TestCase itShould='基础属性 messages  isKeyboardInternallyHandled true messagesContainerStyle user onSend'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop} 
               isKeyboardInternallyHandled
              />
            </View>
          </TestCase>

          <TestCase itShould='inverted 反转显示顺序messages'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                inverted={false}
              />
            </View>
          </TestCase>

          <TestCase itShould='messageContainerRef & textInputRef   聊天message Ref, TextInput输入Ref textInputRef&messageContainerRef'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                textInputRef={textInputRef}
                messageContainerRef={messageContainerRef}
              />
              <Button title='改变Ref'
                onPress={() => { textInputRef.current.setNativeProps({ style: { backgroundColor: 'yellow' } }); messageContainerRef.current.setNativeProps({ style: { backgroundColor: 'pink' } }); }}></Button>
            </View>
          </TestCase>

          <TestCase itShould='isTyping true键入指示器状态；'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                inverted={false}
                isTyping={true}
                messages={[
                  {
                    _id: 2,
                    text: 'Hello',
                    createdAt: new Date(),
                    user: {
                      _id: 3,
                      name: 'renderUsernameOnMessage 显示的用户名',
                    },
                    image: 'https://pics1.baidu.com/feed/c2cec3fdfc0392456576003568f8f3cc7c1e2540.jpeg@f_auto?token=b8c70f853c3c1bd7984b47a2e382552a',  // 图片的 URL,
                  },
                ]}
              />
            </View>
          </TestCase>

          <TestCase itShould='isTyping false键入指示器状态；默认值false。'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                inverted={false}
                isTyping={false}
                messages={[
                  {
                    _id: 2,
                    text: 'Hello',
                    createdAt: new Date(),
                    user: {
                      _id: 3,
                      name: 'renderUsernameOnMessage 显示的用户名',
                    },
                    image: 'https://pics1.baidu.com/feed/c2cec3fdfc0392456576003568f8f3cc7c1e2540.jpeg@f_auto?token=b8c70f853c3c1bd7984b47a2e382552a',  // 图片的 URL,
                  },
                ]}
              />
            </View>
          </TestCase>

          <TestCase itShould='renderFooter 自定义页脚组件'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                renderFooter={renderFooter}
              />
            </View>
          </TestCase>

          <TestCase itShould='extraData 用于向组件传递额外的数据(给renderFooter传递)，以控制组件的某些渲染行为或根据这些数据进行特定的处理'>
            <View style={{ height: 500, flex: 1 }}>
              <Button title='extraData' onPress={handleToggleHighlight} />
              <GiftedChat {...prop}
                renderFooter={renderFooter}
                extraData={extraData}
              />
            </View>
          </TestCase>

          <TestCase itShould='text 输入框文本；输入框默认值为空'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                text='text'
              />
            </View>
          </TestCase>

          <TestCase itShould='alwaysShowSend true 文本编辑器中始终显示发送按钮'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                alwaysShowSend
              />
            </View>
          </TestCase>
          <TestCase itShould='alwaysShowSend false 文本编辑器中始终显示发送按钮'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                alwaysShowSend={false}
              />
            </View>
          </TestCase>

          <TestCase itShould='placeholder text为空时占位符；默认为Type a message...'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                placeholder='placeholder...'
              />
            </View>
          </TestCase>

        </TestSuite>
      </ScrollView>
    </Tester>
  )
}
import React, { useState, useRef, useEffect } from 'react'
import { Text, View, ScrollView, Alert, Image, TextInput, Keyboard, Button } from 'react-native'
import {
    GiftedChat,
    IMessage,
} from 'react-native-gifted-chat'
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import uuid from 'uuid'

export function GiftedChatExample1() {

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
    const renderAvatar = () => (
        <View style={{ alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 20, backgroundColor: 'pink' }}>
          <Text style={{ color: '#f5f5f5', fontSize: 20 }}>冲</Text>
        </View>
    );
    
    
   const renderLoading = () => (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'red' }}>正在加载...</Text>
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
                    <TestCase itShould='renderLoading 初始化时渲染加载视图'>
                        <View style={{ height: 500, flex: 1 }}>
                            <GiftedChat {...prop} 
                               renderLoading={renderLoading}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould='messageIdGenerator 点击生成uuid'>
                        <View style={{ height: 500, flex: 1 }}>
                            <Button title='点击生成uuid' onPress={() => { Alert.alert(uuid.v4()) }} />
                            <GiftedChat {...prop}
                                messageIdGenerator={() => uuid.v4()}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould='showUserAvatar 显示用户图像'>
                        <View style={{ height: 500, flex: 1 }}>
                            <GiftedChat {...prop}
                                showUserAvatar={true}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould='showAvatarForEveryMessage 默认false仅当连续消息来自同一天的同一个用户时才会显示头像(需要设置showUserAvatar)'>
                        <View style={{ height: 500, flex: 1 }}>
                            <GiftedChat {...prop}
                                showUserAvatar={true}
                                showAvatarForEveryMessage={true}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould='onPressAvatar 点击消息头像时回调'>
                        <View style={{ height: 500, flex: 1 }}>
                            <GiftedChat {...prop}
                                onPressAvatar={() => { Alert.alert('Alert onPressAvatar') }}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould='onLongPressAvatar 点击消息头像时回调'>
                        <View style={{ height: 500, flex: 1 }}>
                            <GiftedChat {...prop}
                                onLongPressAvatar={() => { Alert.alert('长按 onLongPressAvatar') }} // 长按消息头像时回调
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould='renderAvatarOnTop 将消息头像呈现在连续消息的顶部，而不是底部'>
                        <View style={{ height: 500, flex: 1 }}>
                            <GiftedChat {...prop}
                                renderAvatarOnTop={true}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould='renderAvatar 自定义消息头像；设置为null不为消息呈现任何头像'>
                        <View style={{ height: 500, flex: 1 }}>
                            <GiftedChat {...prop}
                                renderAvatar={renderAvatar} // 
                            />
                        </View>
                    </TestCase>

                </TestSuite>
            </ScrollView>
        </Tester>
    )
}
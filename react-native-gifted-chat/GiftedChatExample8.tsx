import React, { useState, useRef, useEffect } from 'react'
import { Text, View, ScrollView, Alert, Image, TextInput, Keyboard, Button } from 'react-native'
import {
    GiftedChat,
    IMessage,
} from 'react-native-gifted-chat'

export function GiftedChatExample8() {
    const [messages, setMessages] = useState<IMessage[]>([
        {
            _id: 2,
            text: 'Hello World',
            createdAt: new Date(),
            user: {
                _id: 3,
                name: 'renderUsernameOnMessage 显示的用户名',
            },
            image: 'https://pic.rmb.bdstatic.com/bjh/events/d882fc1d6d1ff5e4cb4cdfce2f1ac62c1450.jpeg@h_1280',  // 图片的 URL,
        },

    ])
    const onSend = (newMsg: IMessage[]) => setMessages([...messages, ...newMsg])
    const prop = {
        messages: messages,
        isKeyboardInternallyHandled: false,
        messagesContainerStyle: { flex: 1 },
        user: { _id: 1, name: 'Developer', },
        showUserAvatar: true,
        inverted:false,
        onSend,
    }
    const [keyboardShouldPersistTaps, setKeyboardShouldPersistTaps] = useState('handled')
    return (
        <>
            <Text style={{color: 'red'}}>keyboardShouldPersistTaps 'always'：键盘不会因为点击屏幕其他区域而收起。'never'：键盘会在点击屏幕其他任何区域时收起。'handled'（默认值）：即使键盘可见，对聊天界面的任何部分的触摸都将被处理。</Text>
            <Text style={{color: 'red', fontWeight: "800"}}>keyboardShouldPersistTaps: {keyboardShouldPersistTaps}</Text>
            <View style={{ padding: 20, flex: 1 }}>
                <GiftedChat {...prop}
                    keyboardShouldPersistTaps={keyboardShouldPersistTaps}
                    onPressAvatar={() => { Alert.alert('Alert onPressAvatar') }} // 点击消息头像时回调
                    // minComposerHeight={100}
                    // maxComposerHeight={100}
                />
                <Button title='never' onPress={() => {setKeyboardShouldPersistTaps('never')}}></Button>
                <Button title='always' onPress={() => {setKeyboardShouldPersistTaps('always')}}></Button>
                <Button title='handled' onPress={() => {setKeyboardShouldPersistTaps('handled')}}></Button>
            </View>
        </>
    )
}
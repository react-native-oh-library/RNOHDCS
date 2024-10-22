import React, { useState, useRef, useEffect } from 'react'
import { Text, View, ScrollView, Alert, Image, TextInput, Keyboard, Button } from 'react-native'
import {
  GiftedChat,
  IMessage,
} from 'react-native-gifted-chat'
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import Lightbox from 'react-native-lightbox-v2';



export function GiftedChatExample4() {

  const data = [
    'imageProps',
    'renderMessageImage',
    'renderMessageVideo',
    'videoProps',
    'lightboxProps',
    'renderCustomView',
    'isCustomViewBottom',
    'renderChatEmpty',
    'renderChatFooter',
  ]

  const [messages, setMessages] = useState<IMessage[]>([
    {
      _id: 1,
      text: 'My message111',
      createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
      video: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4',
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
  const renderMessageImage = (props: any) => {
    return (
      <Image
        source={{url: 'https://pics1.baidu.com/feed/c2cec3fdfc0392456576003568f8f3cc7c1e2540.jpeg@f_auto?token=b8c70f853c3c1bd7984b47a2e382552a'}}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
    );
  };
  const renderMessageVideo = (props: any) => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', width: 100, height: 60, }}>
        <Text>自定义的视频</Text>
      </View>
    );
  };
  const imageProps: any = {
    onLoad: () => { Alert.alert('图片加载完毕') },
  }
  const videoProps: any = {
    onLoad: () => { Alert.alert('视频加载完毕') },
  }
  const renderCustomView = () => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', width: 100, height: 60, backgroundColor: 'pink' }}>
        <Text style={{ color: '#ffffff' }}>气泡内的自定义视图</Text>
      </View>
    );
  };
  const renderChatEmpty = () => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', width: 500, height: 400, backgroundColor: 'pink' }}>
        <Text style={{ color: '#ffffff' }}>消息为空de组件</Text>
      </View>
    );
  };
  const renderChatFooter = () => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', height: 200, backgroundColor: 'pink' }}>
        <Text style={{ color: '#ffffff' }}>聊天界面的底部区显示内容</Text>
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
          <TestCase itShould='imageProps 传递给<Image>默认创建的组件的额外属性(图片加载完毕弹出弹框)'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                imageProps={imageProps}
              />
            </View>
          </TestCase>

          <TestCase itShould='renderMessageImage 自定义消息图片'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                renderMessageImage={renderMessageImage}
              />
            </View>
          </TestCase>

          <TestCase itShould='renderMessageVideo 自定义消息视频'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                renderMessageVideo={renderMessageVideo}
              />
            </View>
          </TestCase>

          <TestCase itShould='videoProps 传递给所需创建的视频组件的额外属性(视频显示在聊天记录为源码显示)需要导入视频库,原库未提供显示显示视频能力,通过自定义实现'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                // videoProps={}
              />
            </View>
          </TestCase>

          <TestCase itShould='lightboxProps 传递给 的MessageImage灯箱的额外道具'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                lightboxProps={{style: {backgroundColor: 'pink', width:300},}}
              />
            </View>
          </TestCase>

          <TestCase itShould='renderCustomView 气泡内的自定义视图'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
               renderCustomView={renderCustomView}
              />
            </View>
          </TestCase>

          <TestCase itShould='isCustomViewBottom 气泡内的自定义视图renderCustomView是否显示在文本、图像和视频视图之前或之后(需要设置renderCustomView)'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
               renderCustomView={renderCustomView} 
               isCustomViewBottom
              />
            </View>
          </TestCase>

          <TestCase itShould='renderChatEmpty 当消息为空时在 ListView 中呈现的自定义组件'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                messages={[]}
                renderChatEmpty={renderChatEmpty}  
              />
            </View>
          </TestCase>

          <TestCase itShould='renderChatFooter 聊天界面的底部区域需要显示特定内容时被触发'>
            <View style={{ height: 500, flex: 1 }}>
              <GiftedChat {...prop}
                renderChatFooter={renderChatFooter}
              />
            </View>
          </TestCase>

        </TestSuite>
      </ScrollView>
    </Tester>
  )
}
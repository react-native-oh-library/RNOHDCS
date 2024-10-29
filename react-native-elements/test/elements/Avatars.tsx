import React, {Component, useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  PressableProps,
} from 'react-native';
import {Avatar, Icon} from '@rneui/themed';
import {Text} from '@rneui/base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

interface AvatarComponentProps {
  // 定义props的属性和类型
}

class AvatarComponent extends React.Component<{}, {}> {
  render() {
    return (
      <Image
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'yellow',
          resizeMode: 'contain',
          alignSelf:'center'
        }}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
        }}></Image>
    );
  }
}

const Avatars: React.FunctionComponent<AvatarComponentProps> = () => {
  const [onlongPress, setOnlongPress] = useState(false);
  const [onPress, setOnPress] = useState(false);
  const [onPressIn, setOnPressIn] = useState(false);
  const [onPressOut, setonPressOut] = useState(false);
  const [onlongPress1, setOnlongPress1] = useState(false);
  const [onPress1, setOnPress1] = useState(false);
  const [onPressIn1, setOnPressIn1] = useState(false);
  const [onPressOut1, setonPressOut1] = useState(false);
  return (
    <Tester style={{flex: 1, backgroundColor: '#000'}}>
      <ScrollView>
        <TestSuite name="Avatars属性Component的验证 传入一个Image组件">
          <TestCase tags={['C_API']} itShould="Component">
            <Avatar
              containerStyle={{
                width: '100%',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              Component={AvatarComponent}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Avatars属性ImageComponent的验证 传入一个Image组件">
          <TestCase tags={['C_API']} itShould="ImageComponent">
            <Avatar
              containerStyle={{
                width: '100%',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              ImageComponent={AvatarComponent}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Avatars属性avatarStyle的验证 ">
          <TestCase tags={['C_API']} itShould="avatarStyle">
            <Avatar
              containerStyle={{
                width: '100%',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              avatarStyle={{
                resizeMode: 'cover',
                width: 100,
                height: 100,
                borderRadius: 50,
              }}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Avatars属性containerStyle的验证 设置容器的样式">
          <TestCase tags={['C_API']} itShould="containerStyle">
            <Avatar
              containerStyle={{
                width: 200,
                height: 100,
                backgroundColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              avatarStyle={{resizeMode: 'cover', width: 100, height: 100}}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Avatars属性icon的验证 设置三种icon">
          <TestCase tags={['C_API']} itShould="icon">
            <Avatar
              containerStyle={{
                width: '100%',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              avatarStyle={{resizeMode: 'cover', width: 100, height: 100}}
              icon={{
                name: 'home',
                type: 'font-awesome',
                color: 'red',
                size: 50,
              }}
            />

            <Avatar
              containerStyle={{
                width: '100%',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              avatarStyle={{resizeMode: 'cover', width: 100, height: 100}}
              icon={{
                name: 'remove',
                type: 'font-awesome',
                color: 'blue',
                size: 20,
              }}
            />
            <Avatar
              containerStyle={{
                width: '100%',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              avatarStyle={{resizeMode: 'cover', width: 100, height: 100}}
              icon={{
                name: 'save',
                type: 'font-awesome',
                color: 'green',
                size: 80,
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Avatars属性iconStyle的验证 设置icon的样式">
          <TestCase tags={['C_API']} itShould="iconStyle">
            <Avatar
              iconStyle={{backgroundColor: 'pink', borderRadius: 20,width:100}}
              containerStyle={{
                width: '100%',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              avatarStyle={{resizeMode: 'cover', width: 100, height: 100}}
              icon={{
                name: 'save',
                type: 'font-awesome',
                color: 'green',
                size: 80,
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Avatars属性imageProps的验证 传入一个Image组件">
          <TestCase tags={['C_API']} itShould="imageProps">
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Avatar
                containerStyle={{
                  width: '100%',
                  height: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                avatarStyle={{resizeMode: 'cover', width: 100, height: 100}}
                imageProps={{
                  PlaceholderContent: (
                    <Image
                      source={{
                        uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
                      }}
                      style={{width: 100, height: 100, resizeMode: 'cover'}}
                    />
                  ),
                  transition:true,
                  transitionDuration:1000
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Avatars属性onLongPress的验证 长按触发修改下面小方块的背景色">
          <TestCase tags={['C_API']} itShould="onLongPress">
            <Avatar
              containerStyle={{
                width: '100%',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              avatarStyle={{resizeMode: 'cover', width: 100, height: 100}}
              onLongPress={() => {
                setOnlongPress(!onlongPress);
              }}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
              }}
            />
            <View
              style={{
                alignSelf: 'center',
                marginTop: 20,
                width: 100,
                height: 100,
                backgroundColor: onlongPress ? 'yellow' : 'gray',
              }}></View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Avatars属性onPress的验证 点击触发修改下面小方块的背景色">
          <TestCase tags={['C_API']} itShould="onPress">
            <Avatar
              containerStyle={{
                width: '100%',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              avatarStyle={{resizeMode: 'cover', width: 100, height: 100}}
              onPress={() => {
                setOnPress(!onPress);
              }}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
              }}
            />
            <View
              style={{
                alignSelf: 'center',
                marginTop: 20,
                width: 100,
                height: 100,
                backgroundColor: onPress ? 'yellow' : 'gray',
              }}></View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Avatars属性onPressIn的验证 手指按下触发下方小方块背景色变化">
          <TestCase tags={['C_API']} itShould="onPressIn">
            <Avatar
              containerStyle={{
                width: '100%',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              avatarStyle={{resizeMode: 'cover', width: 100, height: 100}}
              onPressIn={() => {
                setOnPressIn(!onPressIn);
              }}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
              }}
            />
            <View
              style={{
                alignSelf: 'center',
                marginTop: 20,
                width: 100,
                height: 100,
                backgroundColor: onPressIn ? 'yellow' : 'gray',
              }}></View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Avatars属性onPressOut的验证 手指松开触发下方小方块背景色变化">
          <TestCase tags={['C_API']} itShould="onPressOut">
            <Avatar
              containerStyle={{
                width: '100%',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              avatarStyle={{resizeMode: 'cover', width: 100, height: 100}}
              onPressOut={() => {
                setonPressOut(!onPressOut);
              }}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
              }}
            />
            <View
              style={{
                alignSelf: 'center',
                marginTop: 20,
                width: 100,
                height: 100,
                backgroundColor: onPressOut ? 'yellow' : 'gray',
              }}></View>
          </TestCase>
        </TestSuite>
        {/*warning: 设置了透明度 */}
        <TestSuite name="Avatars属性overlayContainerStyle的验证 超出Avatar的部分的样式">
          <TestCase tags={['C_API']} itShould="overlayContainerStyle">  
            <Avatar
              containerStyle={{
                width: '100%',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              avatarStyle={{resizeMode: 'cover', width: 80, height: 80}}
              overlayContainerStyle={{backgroundColor: 'yellow',borderRadius:20}}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
              }}
            />
          </TestCase>
        </TestSuite>

        {/* <TestSuite name="Avatars属性renderCustomContent的验证  无效 无此属性 设置会报错">
          <TestCase tags={['C_API']} itShould="renderCustomContent">
            <Avatar
              renderCustomContent={
                <Image
                  style={{width: 30, height: 30}}
                  source={{
                    uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
                  }}></Image>
              }
            />
          </TestCase>
        </TestSuite> */}
        <TestSuite name="Avatars属性rounded的验证 设置圆角">
          <TestCase tags={['C_API']} itShould="rounded">
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Avatar
                size={'medium'}
                rounded={true}
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Avatars属性size的枚举验证">
          <TestCase tags={['C_API']} itShould="size:'small'">
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Avatar
                size={'small'}
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
                }}
              />
            </View>
          </TestCase>
          <TestCase tags={['C_API']} itShould="size:'large'">
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Avatar
                size={'large'}
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
                }}
              />
            </View>
          </TestCase>
          <TestCase tags={['C_API']} itShould="size:'medium'">
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Avatar
                size={'medium'}
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
                }}
              />
            </View>
          </TestCase>
          <TestCase tags={['C_API']} itShould="size:'xlarge'">
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Avatar
                size={'xlarge'}
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
                }}
              />
            </View>
          </TestCase>
          <TestCase tags={['C_API']} itShould="size:'number'">
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Avatar
                size={64}
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Avatars属性source的验证 图片显示源">
          <TestCase tags={['C_API']} itShould="source">
            <Avatar
              containerStyle={{
                width: '100%',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              avatarStyle={{resizeMode: 'cover', width: 80, height: 80}}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Avatars属性titleStyle的验证  显示文字 必须不是在source图片源">
          <TestCase tags={['C_API']} itShould="titleStyle">
            <Avatar
              containerStyle={{
                width: '100%',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              avatarStyle={{resizeMode: 'cover', width: 80, height: 80}}
              // source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg' }}
              title="Avatar"
              titleStyle={{color: 'red', fontSize: 24, backgroundColor: 'pink'}}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Avatar.Accessory属性onLongPress的验证 长按触发修改下面小方块的背景色">
          <TestCase tags={['C_API']} itShould="onLongPress">
            <Avatar.Accessory
              size={100}
              onLongPress={() => {
                setOnlongPress1(!onlongPress1);
              }}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
              }}
            />
            <View
              style={{
                alignSelf: 'center',
                marginTop: 20,
                width: 100,
                height: 100,
                backgroundColor: onlongPress1 ? 'yellow' : 'gray',
              }}></View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Avatar.Accessory属性onPress的验证 点击触发修改下面小方块的背景色">
          <TestCase tags={['C_API']} itShould="onPress">
            <Avatar.Accessory
             size={100}
              onPress={() => {
                setOnPress1(!onPress1);
              }}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
              }}
            />
            <View
              style={{
                alignSelf: 'center',
                marginTop: 20,
                width: 100,
                height: 100,
                backgroundColor: onPress1 ? 'yellow' : 'gray',
              }}></View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Avatar.Accessory属性onPressIn的验证 手指按下触发下方小方块背景色变化">
          <TestCase tags={['C_API']} itShould="onPressIn">
            <Avatar.Accessory
              size={100}
              onPressIn={() => {
                setOnPressIn1(!onPressIn1);
              }}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
              }}
            />
            <View
              style={{
                alignSelf: 'center',
                marginTop: 20,
                width: 100,
                height: 100,
                backgroundColor: onPressIn1 ? 'yellow' : 'gray',
              }}></View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Avatar.Accessory属性onPressOut的验证 手指松开触发下方小方块背景色变化">
          <TestCase tags={['C_API']} itShould="onPressOut">
            <Avatar.Accessory
              onPressOut={() => {
                setonPressOut1(!onPressOut1);
              }}
             
              size={100}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
              }}
            />
            <View
              style={{
                alignSelf: 'center',
                marginTop: 20,
                width: 100,
                height: 100,
                backgroundColor: onPressOut1 ? 'yellow' : 'gray',
              }}></View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Avatar.Accessory属性type  接收Icon组件的type属性">
          <TestCase tags={['C_API']} itShould="icon的type">
          <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                width:'100%',
                height:100,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
            <Avatar.Accessory
              name="home"
              type="font-awesome"
              color="red"
              size={100}
               
            />
           </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Avatar.Accessory属性size 接收Icon组件的size属性">
          <TestCase tags={['C_API']} itShould="icon的size">
          <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                width:'100%',
                height:100,
  
              }}>
            <Avatar.Accessory
              name="remove"
              type="font-awesome"
              color="green"
              size={50}
               
            />
           </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Avatar.Accessory属性source 接收Image组件的source属性">
          <TestCase tags={['C_API']} itShould="Image的source">
          <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                width:'100%',
                height:100,
  
              }}>
            <Avatar.Accessory
               size={100}
               source={{
                 uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
               }}
               
            />
           </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Avatar.Accessory属性transitionDuration 接收Image组件的transitionDuration属性">
          <TestCase tags={['C_API']} itShould="设置Image的transitionDuration动画显示时间">
          <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                width:'100%',
                height:100,
  
              }}>
            <Avatar.Accessory
               transitionDuration={20000}
               transition={true}
               size={100}
               source={{
                 uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
               }}
               
            />
           </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Avatar.Accessory属性h1和h1Style 接收Text组件的h1和h1Style属性">
          <TestCase tags={['C_API']} itShould="设置Text组件的h1和h1Style属性">
          <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                width:'100%',
                height:100,
  
              }}>
            <Avatar.Accessory
               h1={true}
               h1Style={{backgroundColor:'pink'}}
               size={100}
               source={{
                 uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
               }}
               
            />
           </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Avatar.Accessory属性h2和h2Style 接收Text组件的h2和h2Style属性">
          <TestCase tags={['C_API']} itShould="设置Text组件的h2和h2Style属性">
          <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                width:'100%',
                height:100,
  
              }}>
            <Avatar.Accessory
               h2={true}
               h2Style={{backgroundColor:'green'}}
               size={100}
               source={{
                 uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
               }}
               
            />
           </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

export default Avatars;

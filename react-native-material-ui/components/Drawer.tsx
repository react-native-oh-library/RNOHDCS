import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

import { Avatar, Drawer } from 'react-native-material-ui';
import Container from './Container';
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"
import { backgroundColor } from '@shopify/restyle';

const DrawerDemo = () => {
  const imageComponent = <Image  source={require('../image/avatar1.png')}  style={{width:75,height:75,borderRadius:50}}></Image>
  const [active,setActive] = useState(true)
  const [active1,setActive1] = useState(true)
  return (
    <Tester>
      <ScrollView style={{marginBottom:100}}>
      <TestSuite name='Drawer(抽屉桌面，是一个整体，所以props需要一起设置) Drawer'>
        <TestCase itShould='涉及到的props：children,style  children为Drawer组件的子元素，比如Drawer.Header style 抽屉组件的样式，设置背景颜色为#666'>
          <View style={{ height: 600 }}>
            <View style={styles.container}>
              <Drawer style={{container:{backgroundColor:"#666"}}}>
                <Drawer.Header backgroundColor='red'>
                  <Drawer.Header.Account
                    avatar={<Avatar text="A" />}
                    accounts={[
                      { avatar: <Avatar text="B" />, key: 'b' },
                      { avatar: <Avatar text="C" />, key: 'c' },
                    ]}
                    footer={{
                      dense: true,
                      centerElement: {
                        primaryText: 'Reservio',
                        secondaryText: 'business@email.com',
                      },
                      rightElement: 'arrow-drop-down',
                    }}
                    style={{avatarsContainer:{backgroundColor:'red'},activeAvatarContainer:{margin:20}}}
                  />
                </Drawer.Header>
                <Drawer.Section
                  divider
                  items={[
                    { icon: 'bookmark-border', value: 'Notifications',label:'Notifications'},
                    { icon: 'today', value: 'Calendar', active: active },
                    { icon: 'people', value: 'Clients' },
                  ]}
                />
                <Drawer.Section
                  title="Personal"
                  items={[
                    { icon: 'info', value: 'Info' },
                    { icon: 'settings', value: 'Settings' },
                  ]}
                />
              </Drawer>
            </View>
          </View>

        </TestCase>
      </TestSuite>

      <TestSuite name='Drawer(抽屉桌面 是一个整体，所以props需要一起设置) Drawer.Header'>
        <TestCase itShould='image header头部使用背景图片'>
          <View style={{ height: 600 }}>
            <View style={styles.container}>
              <Drawer >
                <Drawer.Header  image={imageComponent}>
                  <Drawer.Header.Account
                    avatar={<Avatar text="A" />}
                    accounts={[
                      { avatar: <Avatar text="B" />, key: 'b' },
                      { avatar: <Avatar text="C" />, key: 'c' },
                    ]}
                    footer={{
                      dense: true,
                      centerElement: {
                        primaryText: 'Reservio',
                        secondaryText: 'business@email.com',
                      },
                      rightElement: 'arrow-drop-down',
                    }}
                    style={{accountContainer:{margin:20},topContainer:{margin:20},inactiveAvatarContainer:{margin:10}}}
                  />
                </Drawer.Header>
                <Drawer.Section
                  divider
                  items={[
                    { icon: 'bookmark-border', value: 'Notifications',label:'Notifications'},
                    { icon: 'today', value: 'Calendar',  },
                    { icon: 'people', value: 'Clients', active: active},
                  ]}
                  style={{container:{backgroundColor:'red'},item:{margin:20},subheader:{margin:20}}}
                />
                <Drawer.Section
                  title="Personal"
                  items={[
                    { icon: 'info', value: 'Info'},
                    { icon: 'settings', value: 'Settings' },
                  ]}
                  style={{icon:{},value:{fontSize:50},label:{fontSize:20}}}
                />
              </Drawer>
            </View>
          </View>

        </TestCase>
      </TestSuite>
      <TestSuite name='Drawer(抽屉桌面 是一个整体，所以props需要一起设置) Drawer.Header'>
        <TestCase itShould='children 子元素为Draw.Header.Account '>
            <View style={styles.container}>
            <Drawer style={{container:{backgroundColor:"blue"}}}>
                <Drawer.Header >
                  <Drawer.Header.Account
                    avatar={<Avatar text="A" />}
                    accounts={[
                      { avatar: <Avatar text="B" />, key: 'b' },
                      { avatar: <Avatar text="C" />, key: 'c' },
                    ]}
                    footer={{
                      dense: true,
                      centerElement: {
                        primaryText: 'Reservio',
                        secondaryText: 'business@email.com',
                      },
                      rightElement: 'arrow-drop-down',
                    }}
                  />
                </Drawer.Header>
                <Drawer.Section
                  divider
                  items={[
                    { icon: 'bookmark-border', value: 'Notifications',label:'Notifications'},
                    { icon: 'today', value: 'Calendar', active: active },
                    { icon: 'people', value: 'Clients' },
                  ]}
                />
                <Drawer.Section
                  title="Personal"
                  items={[
                    { icon: 'info', value: 'Info' },
                    { icon: 'settings', value: 'Settings' },
                  ]}
                />
              </Drawer>
            </View>
        </TestCase>
      </TestSuite>
      <TestSuite name='Drawer(抽屉桌面 是一个整体，所以props需要一起设置) Drawer.Header'>
        <TestCase itShould='style:设置背景为红色'>
          <View style={{ height: 600 }}>
            <View style={styles.container}>
            <Drawer style={{container:{backgroundColor:"blue"}}}>
                <Drawer.Header style={{contentContainer:{backgroundColor:'red'}}}>
                  <Drawer.Header.Account
                    avatar={<Avatar text="A" />}
                    accounts={[
                      { avatar: <Avatar text="B" />, key: 'b' },
                      { avatar: <Avatar text="C" />, key: 'c' },
                    ]}
                    footer={{
                      dense: true,
                      centerElement: {
                        primaryText: 'Reservio',
                        secondaryText: 'business@email.com',
                      },
                      rightElement: 'arrow-drop-down',
                    }}
                  />
                </Drawer.Header>
                <Drawer.Section
                  divider
                  items={[
                    { icon: 'bookmark-border', value: 'Notifications',label:'Notifications'},
                    { icon: 'today', value: 'Calendar', active: active },
                    { icon: 'people', value: 'Clients' },
                  ]}
                />
                <Drawer.Section
                  title="Personal"
                  items={[
                    { icon: 'info', value: 'Info' },
                    { icon: 'settings', value: 'Settings' },
                  ]}
                />
              </Drawer>
            </View>
          </View>

        </TestCase>
      </TestSuite>

      <TestSuite name='Drawer(抽屉桌面 是一个整体，所以props需要一起设置) Drawer:HeaderAccount'>
        <TestCase itShould='avatar 设置头像为元素，accounts 账目摘要  设置头像为元素 footer 页脚  container 容器样式，背景为天蓝色 skyblue'>
          <View style={{ height: 600 }}>
            <View style={styles.container}>
            <Drawer style={{container:{backgroundColor:"#666"}}}>
                <Drawer.Header style={{container:{backgroundColor:'blue'}}}>
                  <Drawer.Header.Account
                    avatar={<Avatar text="A" />}
                    accounts={[
                      { avatar: <Avatar text="B" />, key: 'b' },
                      { avatar: <Avatar text="C" />, key: 'c' },
                    ]}
                    footer={{
                      dense: true,
                      centerElement: {
                        primaryText: 'Reservio',
                        secondaryText: 'business@email.com',
                      },
                      rightElement: 'arrow-drop-down',
                    }}
                    style={{container:{backgroundColor:'skyblue'},activeAvatarContainer:{margin:20}}}
                  />
                </Drawer.Header>
                <Drawer.Section
                  divider
                  items={[
                    { icon: 'bookmark-border', value: 'Notifications',label:'Notifications'},
                    { icon: 'today', value: 'Calendar', active: active },
                    { icon: 'people', value: 'Clients' },
                  ]}
                />
                <Drawer.Section
                  title="Personal"
                  items={[
                    { icon: 'info', value: 'Info' },
                    { icon: 'settings', value: 'Settings' },
                  ]}
                />
              </Drawer>
            </View>
          </View>

        </TestCase>
      </TestSuite>
      <TestSuite name='Drawer(抽屉桌面 是一个整体，所以props需要一起设置) Drawer:HeaderAccount'>
        <TestCase itShould='accountContainer 账户容器样式，背景为红色 red'>
          <View style={{ height: 600 }}>
            <View style={styles.container}>
            <Drawer style={{container:{backgroundColor:"#666"}}}>
                <Drawer.Header style={{container:{backgroundColor:'blue'}}}>
                  <Drawer.Header.Account
                    avatar={<Avatar text="A" />}
                    accounts={[
                      { avatar: <Avatar text="B" />, key: 'b' },
                      { avatar: <Avatar text="C" />, key: 'c' },
                    ]}
                    footer={{
                      dense: true,
                      centerElement: {
                        primaryText: 'Reservio',
                        secondaryText: 'business@email.com',
                      },
                      rightElement: 'arrow-drop-down',
                    }}
                    style={{container:{backgroundColor:'skyblue'},accountContainer:{backgroundColor:'red'}}}
                  />
                </Drawer.Header>
                <Drawer.Section
                  divider
                  items={[
                    { icon: 'bookmark-border', value: 'Notifications',label:'Notifications'},
                    { icon: 'today', value: 'Calendar', active: active },
                    { icon: 'people', value: 'Clients' },
                  ]}
                />
                <Drawer.Section
                  title="Personal"
                  items={[
                    { icon: 'info', value: 'Info' },
                    { icon: 'settings', value: 'Settings' },
                  ]}
                />
              </Drawer>
            </View>
          </View>

        </TestCase>
        <TestCase itShould='topContainer 顶部容器样式，背景为红色 red'>
          <View style={{ height: 600 }}>
            <View style={styles.container}>
            <Drawer style={{container:{backgroundColor:"#666"}}}>
                <Drawer.Header style={{container:{backgroundColor:'blue'}}}>
                  <Drawer.Header.Account
                    avatar={<Avatar text="A" />}
                    accounts={[
                      { avatar: <Avatar text="B" />, key: 'b' },
                      { avatar: <Avatar text="C" />, key: 'c' },
                    ]}
                    footer={{
                      dense: true,
                      centerElement: {
                        primaryText: 'Reservio',
                        secondaryText: 'business@email.com',
                      },
                      rightElement: 'arrow-drop-down',
                    }}
                    style={{container:{backgroundColor:'skyblue'},topContainer:{backgroundColor:'red'}}}
                  />
                </Drawer.Header>
                <Drawer.Section
                  divider
                  items={[
                    { icon: 'bookmark-border', value: 'Notifications',label:'Notifications'},
                    { icon: 'today', value: 'Calendar', active: active },
                    { icon: 'people', value: 'Clients' },
                  ]}
                />
                <Drawer.Section
                  title="Personal"
                  items={[
                    { icon: 'info', value: 'Info' },
                    { icon: 'settings', value: 'Settings' },
                  ]}
                />
              </Drawer>
            </View>
          </View>

        </TestCase>
        <TestCase itShould='avatarsContainer 头像容器样式，背景为红色 red'>
          <View style={{ height: 600 }}>
            <View style={styles.container}>
            <Drawer style={{container:{backgroundColor:"#666"}}}>
                <Drawer.Header style={{container:{backgroundColor:'blue'}}}>
                  <Drawer.Header.Account
                    avatar={<Avatar text="A" />}
                    accounts={[
                      { avatar: <Avatar text="B" />, key: 'b' },
                      { avatar: <Avatar text="C" />, key: 'c' },
                    ]}
                    footer={{
                      dense: true,
                      centerElement: {
                        primaryText: 'Reservio',
                        secondaryText: 'business@email.com',
                      },
                      rightElement: 'arrow-drop-down',
                    }}
                    style={{container:{backgroundColor:'skyblue'},avatarsContainer:{backgroundColor:'red'}}}
                  />
                </Drawer.Header>
                <Drawer.Section
                  divider
                  items={[
                    { icon: 'bookmark-border', value: 'Notifications',label:'Notifications'},
                    { icon: 'today', value: 'Calendar', active: active },
                    { icon: 'people', value: 'Clients' },
                  ]}
                />
                <Drawer.Section
                  title="Personal"
                  items={[
                    { icon: 'info', value: 'Info' },
                    { icon: 'settings', value: 'Settings' },
                  ]}
                />
              </Drawer>
            </View>
          </View>

        </TestCase>
        <TestCase itShould='activeAvatarContainer 活动头像容器样式，背景为红色 red'>
          <View style={{ height: 600 }}>
            <View style={styles.container}>
            <Drawer style={{container:{backgroundColor:"#666"}}}>
                <Drawer.Header style={{container:{backgroundColor:'blue'}}}>
                  <Drawer.Header.Account
                    avatar={<Avatar text="A" />}
                    accounts={[
                      { avatar: <Avatar text="B" />, key: 'b' },
                      { avatar: <Avatar text="C" />, key: 'c' },
                    ]}
                    footer={{
                      dense: true,
                      centerElement: {
                        primaryText: 'Reservio',
                        secondaryText: 'business@email.com',
                      },
                      rightElement: 'arrow-drop-down',
                    }}
                    style={{container:{backgroundColor:'skyblue'},activeAvatarContainer:{backgroundColor:'red'}}}
                  />
                </Drawer.Header>
                <Drawer.Section
                  divider
                  items={[
                    { icon: 'bookmark-border', value: 'Notifications',label:'Notifications'},
                    { icon: 'today', value: 'Calendar', active: active },
                    { icon: 'people', value: 'Clients' },
                  ]}
                />
                <Drawer.Section
                  title="Personal"
                  items={[
                    { icon: 'info', value: 'Info' },
                    { icon: 'settings', value: 'Settings' },
                  ]}
                />
              </Drawer>
            </View>
          </View>

        </TestCase>
        <TestCase itShould='inactiveAvatarContainer 非活动头像容器样式，背景为红色 red'>
          <View style={{ height: 600 }}>
            <View style={styles.container}>
            <Drawer style={{container:{backgroundColor:"#666"}}}>
                <Drawer.Header style={{container:{backgroundColor:'blue'}}}>
                  <Drawer.Header.Account
                    avatar={<Avatar text="A" />}
                    accounts={[
                      { avatar: <Avatar text="B" />, key: 'b' },
                      { avatar: <Avatar text="C" />, key: 'c' },
                    ]}
                    footer={{
                      dense: true,
                      centerElement: {
                        primaryText: 'Reservio',
                        secondaryText: 'business@email.com',
                      },
                      rightElement: 'arrow-drop-down',
                    }}
                    style={{container:{backgroundColor:'skyblue'},inactiveAvatarContainer:{backgroundColor:'red'}}}
                  />
                </Drawer.Header>
                <Drawer.Section
                  divider
                  items={[
                    { icon: 'bookmark-border', value: 'Notifications',label:'Notifications'},
                    { icon: 'today', value: 'Calendar', active: active },
                    { icon: 'people', value: 'Clients' },
                  ]}
                />
                <Drawer.Section
                  title="Personal"
                  items={[
                    { icon: 'info', value: 'Info' },
                    { icon: 'settings', value: 'Settings' },
                  ]}
                />
              </Drawer>
            </View>
          </View>

        </TestCase>
      </TestSuite>
      <TestSuite name='Drawer(抽屉桌面 是一个整体，所以props需要一起设置) Drawer:Section'>
        <TestCase itShould='title 抽屉标题: 章节'>
          <View style={{ height: 600 }}>
            <View style={styles.container}>
            <Drawer style={{container:{backgroundColor:"#666"}}}>
                <Drawer.Header style={{container:{backgroundColor:'blue'}}}>
                  <Drawer.Header.Account
                    avatar={<Avatar text="A" />}
                    accounts={[
                      { avatar: <Avatar text="B" />, key: 'b' },
                      { avatar: <Avatar text="C" />, key: 'c' },
                    ]}
                    footer={{
                      dense: true,
                      centerElement: {
                        primaryText: 'Reservio',
                        secondaryText: 'business@email.com',
                      },
                      rightElement: 'arrow-drop-down',
                    }}
                    style={{container:{backgroundColor:'skyblue'},activeAvatarContainer:{margin:20}}}
                  />
                </Drawer.Header>
                <Drawer.Section
                  divider
                  items={[
                    { icon: 'bookmark-border', value: 'Notifications',label:'Notifications'},
                    { icon: 'today', value: 'Calendar', active: active },
                    { icon: 'people', value: 'Clients' },
                  ]}
                />
                <Drawer.Section
                  title="Personal"
                  items={[
                    { icon: 'info', value: 'Info' },
                    { icon: 'settings', value: 'Settings' },
                  ]}
                />
              </Drawer>
            </View>
          </View>

        </TestCase>
      </TestSuite>
      <TestSuite name='Drawer(抽屉桌面 是一个整体，所以props需要一起设置) Drawer:Section'>
        <TestCase itShould='items 抽屉的种类  icon 图标，value：文本 label:标签对value的描述无显示 active 活动 onPress:点击触发的回调活动元素取反，在选中和未选中切换 '>
          <View style={{ height: 600 }}>
            <Text>{active1}</Text>
            <View style={styles.container}>
            <Drawer style={{container:{backgroundColor:"#666"}}}>
                <Drawer.Header style={{container:{backgroundColor:'blue'}}}>
                  <Drawer.Header.Account
                    avatar={<Avatar text="A" />}
                    accounts={[
                      { avatar: <Avatar text="B" />, key: 'b' },
                      { avatar: <Avatar text="C" />, key: 'c' },
                    ]}
                    footer={{
                      dense: true,
                      centerElement: {
                        primaryText: 'Reservio',
                        secondaryText: 'business@email.com',
                      },
                      rightElement: 'arrow-drop-down',
                    }}
                    style={{container:{backgroundColor:'skyblue'},activeAvatarContainer:{margin:20}}}
                  />
                </Drawer.Header>
                <Drawer.Section
                  divider
                  items={[
                    { icon: 'bookmark-border',label:'Notifications',},
                    { icon: 'today', value: 'Calendar', active: active,onPress:()=>{setActive(!active)},disabled:true },
                    { icon: 'people', value: 'Clients',},
                  ]}
                />
                <Drawer.Section
                  divider
                  items={[
                    { icon: 'bookmark-border', value: 'Notifications',label:'Notifications',},
                    { icon: 'today', value: 'Calendar', active: active,onPress:()=>{setActive(!active)},disabled:true },
                    { icon: 'people', value: 'Clients',},
                  ]}
                />
                <Drawer.Section
                  title="Personal"
                  items={[
                    { icon: 'info', value: 'Info' },
                    { icon: 'settings', value: 'Settings' },
                  ]}
                />
              </Drawer>
            </View>
          </View>

        </TestCase>
      </TestSuite>
      
      <TestSuite name='Drawer(抽屉桌面 是一个整体，所以props需要一起设置) Drawer:Section'>
        <TestCase itShould='divider 抽屉分隔线 true'>
          <View style={{ height: 600 }}>
            <Text>{active1}</Text>
            <View style={styles.container}>
            <Drawer style={{container:{backgroundColor:"#fff"}}}>
                <Drawer.Header style={{container:{backgroundColor:'blue'}}}>
                  <Drawer.Header.Account
                    avatar={<Avatar text="A" />}
                    accounts={[
                      { avatar: <Avatar text="B" />, key: 'b' },
                      { avatar: <Avatar text="C" />, key: 'c' },
                    ]}
                    footer={{
                      dense: true,
                      centerElement: {
                        primaryText: 'Reservio',
                        secondaryText: 'business@email.com',
                      },
                      rightElement: 'arrow-drop-down',
                    }}
                    style={{container:{backgroundColor:'skyblue'},activeAvatarContainer:{margin:20}}}
                  />
                </Drawer.Header>
                <Drawer.Section
                  divider={true}
                  items={[
                    { icon: 'bookmark-border', value: 'Notifications',label:'Notifications',},
                    { icon: 'today', value: 'Calendar', active: active,onPress:()=>{setActive(!active)} },
                    { icon: 'people', value: 'Clients',},
                  ]}
                />
                <Drawer.Section
                  divider={true}
                  items={[
                    { icon: 'bookmark-border', value: 'Notifications',label:'Notifications',},
                    { icon: 'today', value: 'Calendar', active: active,onPress:()=>{setActive(!active)} },
                    { icon: 'people', value: 'Clients',},
                  ]}
                />
              </Drawer>
            </View>
          </View>

        </TestCase>
      </TestSuite>
      <TestSuite name='Drawer(抽屉桌面 是一个整体，所以props需要一起设置) Drawer:Section'>
        <TestCase itShould='divider 抽屉分隔线 false'>
          <View style={{ height: 600 }}>
            <Text>{active1}</Text>
            <View style={styles.container}>

              <Drawer style={{container:{backgroundColor:"#fff"}}}>
                <Drawer.Header style={{container:{backgroundColor:'blue'}}}>
                  <Drawer.Header.Account
                    avatar={<Avatar text="A" />}
                    accounts={[
                      { avatar: <Avatar text="B" />, key: 'b' },
                      { avatar: <Avatar text="C" />, key: 'c' },
                    ]}
                    footer={{
                      dense: true,
                      centerElement: {
                        primaryText: 'Reservio',
                        secondaryText: 'business@email.com',
                      },
                      rightElement: 'arrow-drop-down',
                    }}
                    style={{container:{backgroundColor:'skyblue'},activeAvatarContainer:{margin:20}}}
                  />
                </Drawer.Header>
                <Drawer.Section
                  divider={false}
                  items={[
                    { icon: 'bookmark-border', value: 'Notifications',label:'Notifications',},
                    { icon: 'today', value: 'Calendar', active: active,onPress:()=>{setActive(!active)} },
                    { icon: 'people', value: 'Clients',},
                  ]}
                />
                <Drawer.Section
                  divider={false}
                  items={[
                    { icon: 'bookmark-border', value: 'Notifications',label:'Notifications',},
                    { icon: 'today', value: 'Calendar', active: active,onPress:()=>{setActive(!active)} },
                    { icon: 'people', value: 'Clients',},
                  ]}
                />
              </Drawer>
            </View>
          </View>

        </TestCase>
      </TestSuite>
      </ScrollView>
      
    </Tester>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: 'white',
    height: 600
  },
});
export default DrawerDemo

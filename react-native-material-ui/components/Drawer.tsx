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
  return (
    <Tester>
      <ScrollView style={{marginBottom:100}}>
      <TestSuite name='Drawer(抽屉桌面，是一个整体，所以props需要一起设置)'>
        <TestCase itShould='props:style,children。DrawerHeaderPops:backgroundColor,DrawerAccount:avatar,accounts,footer,style'>
          <View style={{ height: 600 }}>
            <View style={styles.container}>
              <Drawer style={{container:{backgroundColor:"#fff"}}}>
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
                    style={{container:{backgroundColor:'skyblue'},avatarsContainer:{backgroundColor:'red'},activeAvatarContainer:{margin:20}}}
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

      <TestSuite name='Drawer(抽屉桌面 此用例展示其他样式,背景为图片)'>
        <TestCase itShould=''>
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


      <TestSuite name='Drawer(抽屉桌面 此用例展示其他样式)'>
        <TestCase itShould='props:'>
          <View style={{ height: 600 }}>
            <View style={styles.container}>
              <Drawer style={{container:{backgroundColor:"#142"},contentContainer:{backgroundColor:'red'}}}>
                <Drawer.Header backgroundColor='red' image={imageComponent}>
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
                    style={{container:{backgroundColor:'red'},accountContainer:{margin:20},topContainer:{margin:20},inactiveAvatarContainer:{margin:10}}}
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
                  style={{icon:{backgroundColor:'red'},value:{fontSize:20},label:{fontSize:20}}}
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
    elevation: 4,
    backgroundColor: 'white',

  },
});
export default DrawerDemo

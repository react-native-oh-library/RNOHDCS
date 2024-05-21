import React from 'react';
import {ScrollView} from 'react-native';

//导入原库自带字体
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import { createIconSetFromIcoMoon, createIconSetFromFontello, createIconSet } from 'react-native-vector-icons';
import icoMoonConfig from '../assets/fonts/icomoon-selection.json';
import fontelloConfig from '../assets/fonts/fontello-config.json';

export function VectorIconsDemo() {

  //引入用户自制字体
  const CustomTest = createIconSet(
    require('../assets/fonts/test.json'),
    'poppy-icon',
    '../assets/fonts/test.ttf',
  );

  //引入 IcoMoon 自定义字体
  const CustomIconMoon = createIconSetFromIcoMoon(
    icoMoonConfig,
    'icomoon',
    '../assets/fonts/icomoon.ttf'
  );

  //引入 fontello 自定义字体
  const CustomFontello = createIconSetFromFontello(
    fontelloConfig,
    'fontello',
    '../assets/fonts/fontello.ttf'
  );

  return (
    <ScrollView style={{ padding:20 }}>

      <CustomTest.Button
          name="application-record"
          backgroundColor="#3b5998"
          size={20}
       >
        CustomTest application-record
       </CustomTest.Button>

       <CustomTest.Button
          name="to-do"
          backgroundColor="#3b5998"
          size={20}
       >
        CustomTest to-do
       </CustomTest.Button>

      <CustomIconMoon.Button
          name="home2"
          backgroundColor="#3b5998"
       >
        CustomIconMoon home2
       </CustomIconMoon.Button>

       <CustomFontello.Button
          name="emo-happy"
          backgroundColor="#3b5998"
       >
        CustomFontello emo-happy
       </CustomFontello.Button>

        <AntDesign.Button
            name="forward"
            backgroundColor="#3b5998"
            size={20}
          >
        AntDesign forward
        </AntDesign.Button>

        <Entypo.Button
            name="app-store"
            backgroundColor="#3b5998"
            size={20}
          >
        Entypo app-store
        </Entypo.Button>

        <EvilIcons.Button
            name="bell"
            backgroundColor="#3b5998"
            size={20}
          >
        EvilIcons bell
        </EvilIcons.Button>

        <Feather.Button
            name="sunrise"
            backgroundColor="#3b5998"
            size={20}
          >
        Feather sunrise
        </Feather.Button>
        <FontAwesome.Button
            name="glass"
            backgroundColor="#3b5998"
            size={20}
          >
          FontAwesome glass
        </FontAwesome.Button>
        

        <FontAwesome5.Button
            name="angry"
            backgroundColor="#3b5998"
            size={20}
          >
          FontAwesome5_regular angry
        </FontAwesome5.Button>
        <FontAwesome5.Button
            name="adn"
            backgroundColor="#3b5998"
            size={20}
          >
          FontAwesome5_brands adn
        </FontAwesome5.Button>
        <FontAwesome5.Button
            name="ad"
            backgroundColor="#3b5998"
            size={20} 
            
          >
          FontAwesome5_solid ad
        </FontAwesome5.Button>

        <FontAwesome6.Button
            name="adn"
            backgroundColor="#3b5998"
            size={20} 
          >
          FontAwesome6_brands adn
        </FontAwesome6.Button>
        <FontAwesome6.Button
            name="bookmark"
            backgroundColor="#3b5998"
            size={20} 
            solid
          >
          FontAwesome6_regular bookmark
        </FontAwesome6.Button>
        <FontAwesome6.Button
            name="apple-whole"
            backgroundColor="#3b5998"
            size={20}
          >
          FontAwesome6_solid apple-whole
        </FontAwesome6.Button>
        <Fontisto.Button
            name="aws"
            backgroundColor="#3b5998"
            size={20}
          >
          Fontisto aws
        </Fontisto.Button>
        <Foundation.Button
            name="archive"
            backgroundColor="#3b5998"
            size={20}
          >
          Foundation archive
        </Foundation.Button>
        <Ionicons.Button
            name="aperture"
            backgroundColor="#3b5998"
            size={20}
          >
          Ionicons aperture
        </Ionicons.Button>
        <MaterialCommunityIcons.Button
              name="zip-box"
              backgroundColor="#3b5998"
              size={20}
            >
          MaterialCommunityIcons zip-box
        </MaterialCommunityIcons.Button>
        <MaterialIcons.Button
              name="airplay"
              backgroundColor="#3b5998"
              size={20}
            >
          MaterialIcons airplay
        </MaterialIcons.Button>
        <Octicons.Button
            name="share"
            backgroundColor="#3b5998"
            size={20}
          >
          Octicons share
        </Octicons.Button>
        <SimpleLineIcons.Button
            name="mouse"
            backgroundColor="#3b5998"
            size={20}
          >
          SimpleLineIcons mouse
        </SimpleLineIcons.Button>
        <Zocial.Button
            name="rss"
            backgroundColor="#3b5998"
            size={20}
          >
          Zocial rss
        </Zocial.Button>
    </ScrollView>
  );
}

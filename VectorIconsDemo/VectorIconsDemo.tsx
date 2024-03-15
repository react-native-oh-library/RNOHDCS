import React, {useState} from 'react';
import {ScrollView, Text, TextInput, TurboModuleRegistry, View, Image} from 'react-native';


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

// import { IconButtonProps, IconProps as VectorIconProps, Icon as VectorIcon } from 'react-native-vector-icons/Icon';

import { createIconSetFromIcoMoon, createIconSetFromFontello, createIconSet } from 'react-native-vector-icons';
import icoMoonConfig from '../assets/fonts/icomoon-selection.json';
import fontelloConfig from '../assets/fonts/fontello-config.json';

import { Button } from '../components';
import { TurboModule } from 'react-native';

interface VectorIconsTurboModuleProtocol{
  getImageForFont(fontFamily: string, glyph: string, fontSize: number, color: number): void
  getImageForFontSync(fontFamily: string, glyph: string, fontSize: number, color: number): string
  loadFontWithFileName(fontFileName: string, extension: string): void
}

interface Spec extends TurboModule, VectorIconsTurboModuleProtocol{
}

export function VectorIconsDemo() {
  const [numberOfComponents, setNumberOfComponents] = useState(100);
  const [turboResult, setTurboResult] = useState('');

  const vectorIconsTurbo = TurboModuleRegistry.get<Spec>('RNVectorIcons')!

  const navIcon = MaterialIcons.getImageSourceSync('123', 20, 'white');

  console.info('[liwang-VectorIconsDemo]-->navIcon:', navIcon)
  
  const CustomTest = createIconSet(
    require('../assets/fonts/test.json'),
    'poppy-icon',
    '../assets/fonts/test.ttf',
  );

  //直接调用库函数创建字体信息
  const AntDesign = createIconSet(
    require('../assets/fonts/AntDesign.json'),
    'AntDesign',
    '../assets/fonts/AntDesign.ttf',
  );

  const Entypo = createIconSet(
    require('../assets/fonts/Entypo.json'),
    'Entypo',
    '../assets/fonts/Entypo.ttf',
  );

  const EvilIcons = createIconSet(
    require('../assets/fonts/EvilIcons.json'),
    'EvilIcons',
    '../assets/fonts/EvilIcons.ttf',
  );

  const Feather = createIconSet(
    require('../assets/fonts/Feather.json'),
    'Feather',
    '../assets/fonts/Feather.ttf',
  );
  
  const FontAwesome = createIconSet(
    require('../assets/fonts/FontAwesome.json'),
    'FontAwesome',
    '../assets/fonts/FontAwesome.ttf',
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

      <Button label='liwang turboModule' onPress={()=>{
        console.info('[liwang-VectorIconsDemo]-->Button press事件: vectorIconsTurbo.getImageForFont()')
        const navIcon = MaterialIcons.getImageSourceSync('123', 20, 'white');
        console.info('[liwang-VectorIconsDemo]-->Button press事件: MaterialIcons.getImageForFontSync()', navIcon.uri)
        // vectorIconsTurbo.getImageForFont('liwang from rn tsx new version', 'glyph', 1, 10)
        // console.info('[liwang-VectorIconsDemo]-->Button press事件: vectorIconsTurbo.getImageForFontSync()')

        // let result = vectorIconsTurbo.getImageForFontSync('liwang from rn tsx new version', 'glyph', 1, 10)
        // console.info('[liwang-VectorIconsDemo]-->Button press事件: vectorIconsTurbo.getImageForFontSync() result:' + result)

        // console.info('[liwang-VectorIconsDemo]-->Button press事件: vectorIconsTurbo.loadFontWithFileName()')
        // vectorIconsTurbo.loadFontWithFileName('liwang from rn tsx new version', 'glyph')

        // setTurboResult(result);
      }}></Button>

      <Text style={{
        fontSize:20,
      }}>
        {turboResult}
      </Text>

      <Image source={navIcon} width={50} height={50}></Image>

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
            name="google"
            backgroundColor="#3b5998"
            size={20}
          >
        AntDesign google
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
          >
          FontAwesome6_regular bookmark
        </FontAwesome6.Button>
        <FontAwesome6.Button
            name="anchor"
            backgroundColor="#3b5998"
            size={20} 
          >
          FontAwesome6_solid anchor
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
            name="weibo"
            backgroundColor="#3b5998"
            size={20}
          >
          Zocial weibo
        </Zocial.Button>
    </ScrollView>
  );
}



import { Tester, Filter, TestSuite } from '@rnoh/testerino';
import {Button, TestCase} from '../components';
import React, { useState,useEffect } from 'react';
import {
  ScrollView, StyleSheet, View, Text,Alert, FlatList,
  SafeAreaView,
  StatusBar,
  Linking,
  TouchableOpacity
} from 'react-native';
import ParsedText from 'react-native-parsed-text';
export function TestNativeParsedTextDemo({ filter }: { filter: Filter }) {
  const [param1, setParam1] = React.useState('')
  const [param2, setParam2] = React.useState('')
  const [param2l, setParam2l] = React.useState('')
  const [param3, setParam3] = React.useState('')
  const [param3l, setParam3l] = React.useState('')
  const [param4, setParam4] = React.useState('')
  const [param5, setParam5] = React.useState('')
  const [param6, setParam6] = React.useState('')
  const [param7, setParam7] = React.useState('')
  const [param8, setParam8] = React.useState('')
  const [param9, setParam9] = React.useState(0)
  const handleUrlPress1=(url, matchIndex /*: number*/)=>{
    let p={url, matchIndex}
    setParam1(JSON.stringify(p));
    Linking.openURL(url);
  }
  const handleUrlPress2=(phone, matchIndex /*: number*/)=>{
    let p={phone, matchIndex}
    setParam2(JSON.stringify(p)+`---展示点击事件回调信息：${phone} has been pressed!`);
  }
  const handleLongPress2=()=>{
    setParam2l(' ParsedText child text Long Press 方法回调被执行')
  }
  const handleUrlPress3=(email, matchIndex /*: number*/)=>{
    let p={email, matchIndex}
    setParam3(JSON.stringify(p)+`---展示点击事件回调信息：${email} has been pressed!`);
  }
  const handleLongPress3=()=>{
    setParam3l('ParsedText Long Press 方法回调被执行')
  }
  const handleUrlPress4=(name, matchIndex /*: number*/)=>{
    let p={name, matchIndex}
    setParam4(JSON.stringify(p)+`---展示点击事件回调信息：${name} has been pressed!`);
  }
  const handleUrlPress5=(matchString, matchIndex /*: number*/)=>{
    let p={matchString, matchIndex}
    setParam5(JSON.stringify(p)+`---展示点击事件回调信息：${matchString} has been pressed!`);
  }
  const renderText=(matchingString, matches)=> {
    let p={matchingString, matches}
    setParam6(JSON.stringify(p));
    return matches[0]
  }
  const handleUrlPress6=(matchString, matchIndex /*: number*/)=>{
    let p={matchString, matchIndex}
    setParam7(JSON.stringify(p)+`---展示点击事件回调信息：${matchString} has been pressed!`);
  }
  const renderText2=(matchingString, matches)=> {
    let p={matchingString, matches}
    setParam8(JSON.stringify(p));
    return matches[0];
  }
  const handleLongPressFunc=()=>{
    let times=param9+1;
    setParam9(times);
  }
 
  return (
    <Tester style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
        <TestSuite name="React Native Parsed Text">
            <TestCase.Example itShould="test default type url">
                <Text>{`url: /(https?:\/\/|www\.)[-a-zA-Z0-9@:%._\+~#=]{1,256}\.(xn--)?[a-z0-9-]{2,20}\b([-a-zA-Z0-9@:%_\+\[\],.~#?&\/=]*[-a-zA-Z0-9@:%_\+\]~#?&\/=])*/i`}</Text>
                <Text>{`style:{color:'red',fontFamily:'Times',fontSize:20,fontStyle:'italic',fontWeight:('bold', '700')}`}</Text>
                <Text>{`展示 handleUrlPress1获取的参数:${param1}`}</Text>
                <ParsedText
                  style={styles.text}
                  parse={
                    [
                      {type: 'url',style: styles.url, onPress: handleUrlPress1}
                    ]
                  }
                  childrenProps={{allowFontScaling: false}}
                >
                  Hello this is an example of the ParsedText, links like http://www.google.com、https://www.baidu.com and http://www.facebook.com are clickable.
                </ParsedText>
            </TestCase.Example>
            <TestCase.Example itShould="test default type phone">
                <Text>{`phone:  ${/[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}/}`}</Text>
                <Text>{`style:{color:'green',fontFamily:'Times',fontSize:20,fontStyle:'italic',fontWeight:('bold', '700')}`}</Text>
                <Text>{`展示 handleUrlPress2获取的参数:${param2}`}</Text>
                <Text>{`展示 ParsedText child text handleLongPress2获取的参数:${param2l}`}</Text>
                <ParsedText
                  style={styles.text}
                  parse={
                    [
                      {type: 'phone',style: styles.phone, onPress: handleUrlPress2,onLongPress:handleLongPress2}
                    ]
                  }
                  childrenProps={{allowFontScaling: false}}
                >
                  Hello this is an example of the ParsedText, phone address like 444-555-6666、15138646572 and 511-4405222 are clickable.
                </ParsedText>
            </TestCase.Example>
                <TestCase.Example itShould="test default type email">
                <Text>{`email: ${/\S+@\S+\.\S+/}`}</Text>
                <Text>{`style:{color:'blue',fontFamily:'Times',fontSize:20,fontStyle:'italic',fontWeight:('bold', '700')}`}</Text>
                <Text>{`展示 handleUrlPress3获取的参数:${param3}`}</Text>
                <Text>{`展示 ParsedText handleLongPress3方法返回的信息:${param3l}`}</Text>
                <ParsedText
                  style={styles.text}
                  onLongPress={handleLongPress3}
                  parse={
                    [
                      {type: 'email',style: styles.email, onPress: handleUrlPress3}
                    ]
                  }
                  childrenProps={{allowFontScaling: false}}
                >
                  Hello this is an example of the ParsedText, email address like jinz@l-partners.com or 2550125965@qq.com and 15138646578@163.com are clickable.
                </ParsedText>
            </TestCase.Example>
            <TestCase.Example itShould="test customizing name and email pattern">
              <Text>{`name:/Bob|David/`}</Text>
              <Text>{`style:{color:'purple',fontFamily:'Times',fontSize:20,fontStyle:'italic',fontWeight:('bold', '700')}`}</Text>
              <Text>{`展示 handleUrlPress4获取的参数:${param4}`}</Text>
              <ParsedText
                style={styles.text}
                parse={
                  [{pattern: /Bob|David/,              style: styles.name, onPress: handleUrlPress4},
                  {type: 'email',style: styles.email}
                ]
                }
                childrenProps={{allowFontScaling: false}}
              >
                Hello this is an example of the ParsedText,names like Bob or David ,email address like jinz@l-partners.com or 2550125965@qq.com and 15138646578@163.com and John are clickable.
              </ParsedText>
            </TestCase.Example>
            <TestCase.Example itShould="test customizing username pattern">
              <Text>{`username:  ${/\[(@[^:]+):([^\]]+)\]/i}`}</Text>
              <Text>{`style:{color:'orange',fontFamily:'Times',fontSize:20,fontStyle:'italic',fontWeight:('bold', '700')}`}</Text>
              <Text>{`展示 handleUrlPress5获取的参数:${param5}`}</Text>
              <Text>{`提示:renderText默认返回matches[0]`}</Text>
              <Text>{`展示 renderText获取的参数:${param6}`}</Text>
              <ParsedText
                style={styles.text}
                parse={
                  [{pattern: /\[(@[^:]+):([^\]]+)\]/i, style: styles.username, onPress: handleUrlPress5, renderText: renderText}]
                }
                childrenProps={{allowFontScaling: false}}
              >
                Hello this is an example of the ParsedText,names like [@^:^] or [@^^:^^] and [@jinzhao:api] are clickable.
              </ParsedText>
            </TestCase.Example>
            <TestCase.Example itShould="test customizing magicnumber pattern">
              <Text>{`magicnumber:  /520|521/`}</Text>
              <Text>{`style:{color:'pink',fontFamily:'Times',fontSize:20,fontStyle:'italic',fontWeight:('bold', '700')}`}</Text>
              <ParsedText
                style={styles.text}
                parse={
                  [{pattern: /520|521/,style: styles.magicNumber}]
                }
                childrenProps={{allowFontScaling: false}}
              >
                Hello this is an example of the ParsedText,magic numbers like 520 or 521.
              </ParsedText>
            </TestCase.Example>
            <TestCase.Example itShould="test customizing hashTag pattern">
              <Text>{`hashTag:  ${/#(\w+)/}`}</Text>
              <Text>{`style:{color:'#009f5d',fontFamily:'Times',fontSize:20,fontStyle:'italic',fontWeight:('bold', '700')}`}</Text>
              <ParsedText
                style={styles.text}
                parse={
                  [{pattern: /#(\w+)/,                 style: styles.hashTag}]
                }
                childrenProps={{allowFontScaling: false}}
              >
                Hello this is an example of the ParsedText,names like #react  or #react-native and #009f5d.
              </ParsedText>
            </TestCase.Example>
            <TestCase.Example itShould="test customizing idnumber pattern child text onLongPress:handleLongPressFunc">
              <Text>{`idnumber:  ${/\d{17}[0-9|X]/}`}</Text>
              <Text>{`style:{color:'#8cc540',fontFamily:'Times',fontSize:20,fontStyle:'italic',fontWeight:('bold', '700')}`}</Text>
              <Text>{`展示 handleUrlPress6获取的参数:${param7}`}</Text>
              <Text>{`提示:renderText默认返回matches[0]`}</Text>
              <Text>{`展示 renderText获取的参数:${param8}`}</Text>
              <Text>{`handleLongPressFunc方法执行了${param9}次`}</Text>
              <ParsedText
                style={styles.text}
                parse={
                  [{pattern: /\d{17}[0-9|X]/, style: styles.idnumber, onPress: handleUrlPress6,renderText: renderText2}]
                }
                childrenProps={{allowFontScaling: false,onLongPress:handleLongPressFunc}}
              >
                Hello this is an example of the ParsedText,idnumber like 110108199302173951 or 110108199605183951 are clickable.
              </ParsedText>
            </TestCase.Example>
          </TestSuite>
        </ScrollView>
    </Tester>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#333'
  },
  url:{
    color:'red',
    fontFamily:'Times',
    fontSize:20,
    fontStyle:'italic',
    fontWeight:('bold', '700'),
  },
  phone:{
    color:'green',
    fontFamily:'Times',
    fontSize:20,
    fontStyle:'italic',
    fontWeight:('bold', '700'),
  },
  email:{
    color:'blue',
    fontFamily:'Times',
    fontSize:20,
    fontStyle:'italic',
    fontWeight:('bold', '700'),
  },
  name:{
    color:'purple',
    fontFamily:'Times',
    fontSize:20,
    fontStyle:'italic',
    fontWeight:('bold', '700'),
  },
  username:{
    color:'orange',
    fontFamily:'Times',
    fontSize:20,
    fontStyle:'italic',
    fontWeight:('bold', '700'),
  },
  magicNumber:{
    color:'pink',
    fontFamily:'Times',
    fontSize:20,
    fontStyle:'italic',
    fontWeight:('bold', '700'),
  },
  hashTag:{
    color:'#009f5d',
    fontFamily:'Times',
    fontSize:20,
    fontStyle:'italic',
    fontWeight:('bold', '700'),
  },
  idnumber:{
    color:'#8cc540',
    fontFamily:'Times',
    fontSize:20,
    fontStyle:'italic',
    fontWeight:('bold', '700'),
  },
  idnumber2:{
    color:'#880000',
    fontFamily:'Times',
    fontSize:20,
    fontStyle:'italic',
    fontWeight:('bold', '700'),
  },
  fontstyle: {
    fontSize: 32,
    fontWeight: 600
  }
});

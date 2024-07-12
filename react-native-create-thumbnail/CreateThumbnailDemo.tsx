/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
 * Copyright (c) Huawei Technologies Co., Ltd. 2023-2023. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, {useState } from 'react';
import { Button,View,Text,StyleSheet,ScrollView} from 'react-native';
import { createThumbnail }  from 'react-native-create-thumbnail';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { string } from 'yargs';

interface thumbnailClass {
    url: string;
    timeStamp?: number;
    format?: boolean;
    dirSize?: number;
    headers?: object;
    cacheName?: string;
}

function CreateThumbnailDemo() { 

  const [text, setText] = useState('');

  const createThumbnailProps = [
    {
      key: 'style:url is https://media.w3.org/2010/05/sintel/trailer.mp4',
      value: {
          url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
      }
    },
    {
      key: 'style:timeStamp is 1000',
      value: {
          url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
          timeStamp:1000
      },
    },
    {
      key: 'style:timeStamp is 2000',
      value: {
          url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
          timeStamp:2000
      },
    },
    {
      key: 'style:headers is {Content-Type: "application/json"}',
      value: {
          url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
          headers:{Authorization: ''}
      },
    },

    {
      key: 'style:Thumbnail format, can be one of:jpeg',
      value: {
          url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
          format:true
      },
    },
    {
      key: 'style:Thumbnail format, can be one of:png',
      value: {
          url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
          format:false
      },
    },
    {
      key: 'style:dirSize is 100',
      value: {
          url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
          dirSize:100
      },
    },
    {
      key: 'style:dirSize is 200',
      value: {
          url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
          dirSize:200
      },
    },
    {
      key: 'style:cacheName is 20240625',
      value: {
          url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
          cacheName:'20240625'
      },
    },
    {
      key: 'style:cacheName is aaaaaa',
      value: {
          url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
          cacheName:'aaaaaa'
      },
    },
  ]

  const onCreateThumbnail = async (value:thumbnailClass)=> {
   let obje  = await createThumbnail({ 
      url:value.url,
      timeStamp:value.timeStamp,
      format:value.format ? "jpeg" : "png",
      dirSize:value.dirSize,
      headers:value.headers,
      cacheName:value.cacheName
    })
    setText(JSON.stringify(obje))
    return obje
  }

  return (
    <ScrollView>
    <Tester>
      <TestSuite name='CreateThumbnail'>
        <TestCase itShould="Return picture information">
          <View>
            <Text style={styles.baseText}>
              返回结果(网络地址需要联网):
            </Text>
            <Text style={styles.inputArea}>
              {text}
            </Text>
          </View>
        </TestCase>
          {createThumbnailProps.map((item) => {
              return (
                <TestCase itShould={item.key}  key={item.key} initialState={null as any} arrange={({ setState }) => (
                  <Button title='运行' color='#841584' onPress={async () => {
                   let obje =  await onCreateThumbnail(item.value)
                  setState(obje)
                  }}></Button>
                )} 
                assert={({ expect, state }) => {
                  expect(state).to.have.property('path')
                }}
                />
              );
          })}
     </TestSuite>
    </Tester>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  buttonArea: {
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  baseText: {
    fontWeight: 'bold',
    textAlign:'center',
    fontSize:16
  },

  inputArea: {
    width:'100%',
    height:120,
    borderColor:'#000000',
    marginTop:8,
  
    justifyContent:'center',
    alignItems:'center',
  },

})

export default CreateThumbnailDemo;

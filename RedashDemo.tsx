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
import {  StyleSheet, Text, Button ,ScrollView,View} from 'react-native';
import {
  mix,
  round,
  bin,
  clamp,
  between,
  toRad,
  toDeg } from "react-native-redash/src/Math";

// 导出组件
export default function RadashDemo() {

  const [text, setText] = useState('');

  const onMix =() => {
    const mixre = mix(0, 10, 20);
    setText(mixre.toString())
  }

  const onRoundre =()=> {
    const roundre = round(5.123, 0);
    setText(roundre.toString())
  }

  const onBinre =()=> {
    const binre = bin(true);
    setText(binre.toString())
  }

  const onBetweenre =() => {
    const betweenre = between(-1, 0, 100);
    setText(betweenre.toString())
  }

  const onToRadre = () => {
    const toRadre = toRad(180);
    setText(toRadre.toString())
  }

  const onToDegre = () => {
    const toDegre = toDeg(Math.PI);
    setText(toDegre.toString())
  }

  const onClampre = () => {
    const clampre = clamp(-1, 0, 100)
    setText(clampre.toString())
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
         <Text style = {styles.title}>Math</Text> 
      </View>
      <View style = {styles.baseArea}>
         <Text style={styles.baseText}>
          {text}
        </Text>
      </View>
      <ScrollView style= {{width:'90%',height:'90%'}}>
        <View style = {styles.soArea}>
          <View style = {{flex:3}}> <Text>mix(0, 10, 20)</Text></View>
          <View style = {{flex:1}}> <Button title='运行' color='#841584' onPress={onMix}></Button></View>            
        </View>  
        <View style = {styles.soArea}>
          <View style = {{flex:3}}> <Text>round(5.123, 0)</Text></View>
          <View style = {{flex:1}}> <Button title='运行' color='#841584' onPress={onRoundre}></Button></View>                                  
        </View>  
        <View style = {styles.soArea}>
          <View style = {{flex:3}}><Text>bin(true)</Text></View>
          <View style = {{flex:1}}><Button title='运行' color='#841584' onPress={onBinre}></Button> </View>                   
        </View>  
        <View style = {styles.soArea}>
          <View style = {{flex:3}}><Text>between(-1, 0, 100)</Text></View>
          <View style = {{flex:1}}><Button title='运行' color='#841584' onPress={onBetweenre}></Button> </View>                       
        </View>  
        <View style = {styles.soArea}>
          <View style = {{flex:3}}><Text>toRad(180)</Text></View>
          <View style = {{flex:1}}><Button title='运行' color='#841584' onPress={onToRadre}></Button>   </View>            
        </View>  
        <View style = {styles.soArea}>
          <View style = {{flex:3}}><Text>toDeg(Math.PI)</Text></View>
          <View style = {{flex:1}}><Button title='运行' color='#841584' onPress={onToDegre}></Button></View>            
        </View> 

        <View style = {styles.soArea}>
          <View style = {{flex:3}}> <Text>clamp(-1, 0, 100)</Text></View>
          <View style = {{flex:1}}><Button title='运行' color='#841584' onPress={onClampre}></Button>  </View>               
        </View> 
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F1F3F5',
  },
  
  button:{
    width:'20%'
  },
  baseText: {
    fontWeight: 'bold',
    textAlign:'center',
    fontSize:16
  },

  titleArea:{
    width:'90%',
    height:'8%',
    alignItems:'center',
    flexDirection:'row',
  },

  infoTitle: {
    width:'90%',
    height:'20%',
    marginTop:10,
    borderWidth:2,
    backgroundColor:'#FFFFFF'
  },
  title: {
    width:'90%',
    color:'#000000',
    textAlign:'left',
    fontSize: 30,
  },

  soArea: {
    width:'100%',
    height:'16%',
    backgroundColor:'#FFFFFF',
    borderRadius:16,
    justifyContent:'center',
    flexDirection: 'row',
    alignItems:'center',
    marginTop:8,
    paddingLeft:8,
    paddingRight:8
  },

  baseArea: {
    width:'90%',
    height:'10%',
    borderWidth:2,
    borderColor:'#000000',
    marginTop:8,
    justifyContent:'center',
    alignItems:'center',
  },

  counterViewStyle: {
    backgroundColor: 'pink',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop:8
  }
});
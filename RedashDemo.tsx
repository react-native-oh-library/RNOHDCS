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
  cubicBezier,
  avg,
  between,
  toRad,
  toDeg } from 'react-native-redash/src/Math';
import { 
  canvas2Cartesian,
  cartesian2Canvas,
  cartesian2Polar,
  polar2Cartesian,
  polar2Canvas,
  canvas2Polar
} from 'react-native-redash/src/Coordinates'

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

  const avgre = () => {
    const values: number[] = [1,2,3,4,5,6,7,8,9,10]
    const avgs = avg(values)
    setText(avgs.toString())
  }

  const cubicBezires =()=> {
    const cubicBezire = cubicBezier(1, 0, 0.1, 0.1, 1)
    setText(cubicBezire.toString())
  }

  const  canvas2Cartesianre = () => {
    const point = canvas2Cartesian({ x: 500, y: 200 }, { x: 500, y: 200 });
    setText(JSON.stringify(point))
  }

  const cartesian2Canvasre = () => {
    const point = cartesian2Canvas({ x: -500, y: 200 }, { x: 500, y: 200 });
    setText(JSON.stringify(point))
  }

  const cartesian2Polarre = () => {
    const x = 0;
    const y = 100;
    const center = { x: 100, y: 100 };
    const { theta, radius } = cartesian2Polar(canvas2Cartesian({ x, y }, center));
    setText('theta ==' + theta +"  radius==" + radius);
  }

  const polar2Cartesianre = () => {
    const x = 0;
    const y = 100;
    const center = { x: 100, y: 100 };
    const { theta, radius } = cartesian2Polar(canvas2Cartesian({ x, y }, center));
    const { x: x1, y: y1 } = cartesian2Canvas(
      polar2Cartesian({ theta, radius }),
      center
    );
    setText('x1 ==' + x1 +"  Math.round(y1)==" + Math.round(y1));
  }

  const polar2Canvasre = () => {
    const x = 0;
    const y = 100;
    const center = { x: 100, y: 100 };
    const { theta, radius } = cartesian2Polar(canvas2Cartesian({ x, y }, center));
    const point = polar2Canvas({ theta, radius },center)
    setText(JSON.stringify(point))
  }

  const canvas2Polarre = () => {
    const { theta, radius } =  canvas2Polar({ x: -500, y: 200 }, { x: 500, y: 200 });
    setText('theta ==' + theta +"  radius==" + radius);
  }


  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <Text style = {styles.title}>Math</Text>
      </View>
      <View style = {styles.inputArea}>
        <Text style={styles.baseText}>
          {text}
        </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={ { flexDirection: 'column'}}>
          <View style ={styles.baseArea}>
             <Text style= {{flex:1}}>mix(0, 10, 20)</Text>
             <Button title='运行' color='#841584' onPress={onMix}></Button>
          </View>
          <View style ={styles.baseArea}>
             <Text style= {{flex:1}}>round(5.123, 0)</Text>
             <Button title='运行' color='#841584' onPress={onRoundre}></Button>
          </View>
          <View style ={styles.baseArea}>
            <Text  style= {{flex:1}}>bin(true)</Text> 
            <Button title='运行' color='#841584' onPress={onBinre}></Button>
          </View>
          <View style ={styles.baseArea}>
            <Text  style= {{flex:1}}>between(-1, 0, 100)</Text>
            <Button title='运行' color='#841584' onPress={onBetweenre}></Button>
          </View>
          <View style ={styles.baseArea}>
            <Text  style= {{flex:1}}>toRad(180)</Text> 
            <Button title='运行' color='#841584' onPress={onToRadre}></Button>
          </View>
          <View style ={styles.baseArea}>
            <Text  style= {{flex:1}}>avg([1,2,3,4,5,6,7,8,9,10])</Text> 
            <Button title='运行' color='#841584' onPress={avgre}></Button>
          </View>
          <View style ={styles.baseArea}>
            <Text  style= {{flex:1}}>cubicBezier(1, 0, 0.1, 0.1, 1)</Text> 
            <Button title='运行' color='#841584' onPress={cubicBezires}></Button>
          </View>
          <View style ={styles.baseArea}>
            <Text  style= {{flex:1}}>toDeg(Math.PI)</Text> <Button title='运行' color='#841584' onPress={onToDegre}></Button>
          </View>
          <View style ={styles.baseArea}>
            <Text  style= {{flex:1}}>clamp(-1, 0, 100)</Text> <Button title='运行' color='#841584' onPress={onClampre}></Button>
          </View>

          <View style ={styles.baseArea}>
            <Text  style= {{flex:1}}>canvas2Cartesian: (vectors,center)</Text> <Button title='运行' color='#841584' onPress={canvas2Cartesianre}></Button>
          </View>
          <View style ={styles.baseArea}>
            <Text  style= {{flex:1}}>cartesian2Canvas: (vectors,center)</Text> <Button title='运行' color='#841584' onPress={cartesian2Canvasre}></Button>
          </View>
          <View style ={styles.baseArea}>
            <Text  style= {{flex:1}}>cartesian2Polar(polarPoint,center)</Text> <Button title='运行' color='#841584' onPress={cartesian2Polarre}></Button>
          </View>
          <View style ={styles.baseArea}>
            <Text  style= {{flex:1}}>polar2Cartesian: (polarPoint)</Text> <Button title='运行' color='#841584' onPress={polar2Cartesianre}></Button>
          </View> 

          <View style ={styles.baseArea}>
            <Text  style= {{flex:1}}>polar2Canvas: (polarPoint,center)</Text> <Button title='运行' color='#841584' onPress={polar2Canvasre}></Button>
          </View>      

          <View style ={styles.baseArea}>
            <Text  style= {{flex:1}}>canvas2Polar: (vectors,center)</Text> <Button title='运行' color='#841584' onPress={canvas2Polarre}></Button>
          </View>                    
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F1F3F5',
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

  title: {
    width:'90%',
    color:'#000000',
    textAlign:'left',
    fontSize: 30,
  },

  scrollView: {
    width:'90%',
    marginHorizontal: 20,
  },

  inputArea: {
    width:'90%',
    height:'10%',
    borderWidth:2,
    borderColor:'#000000',
    marginTop:8,
    justifyContent:'center',
    alignItems:'center',
  },
  baseArea: {
    width:'100%',
    height:60,
    borderRadius:4,
    borderColor:'#000000',
    marginTop:8,
    backgroundColor:'#FFFFFF',
    flexDirection: 'row',
    alignItems:'center',
    paddingLeft:8,
    paddingRight:8
  }

});
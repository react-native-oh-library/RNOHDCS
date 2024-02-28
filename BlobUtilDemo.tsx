import {Tester, Filter} from '@rnoh/testerino';
import React, {useState} from 'react';
import {ScrollView, StyleSheet,Button, View, Text, TextInput, Alert} from 'react-native';
import BlobUtilTurboModule from 'react-native-blob-util';


export default function BlobUtilDemo() {
   const [result, setResult] = useState<string | null>(null);
   const [mkdirParam, setMkdirParam] = useState('');

   const createFile = async () => {
      await BlobUtilTurboModule.fs.createFile('/test.txt','Try to write str.','utf8');
    }

    const unlink = ()=>{
      BlobUtilTurboModule.fs.unlink('/data/storage/el2/base/haps/entry/cache/test.txt')
    }

    const getConstants = () => {
      let obj = BlobUtilTurboModule.fs.dirs.CacheDir;
      setResult(obj)
    }

    const stat = () => {
      BlobUtilTurboModule.fs.stat('/data/storage/el2/base/haps/entry/cache/test.txt')
    }
  
   const copyFileToCache =() => {
      BlobUtilTurboModule.fs.cp('/data/storage/el2/base/haps/entry/cache/test.txt','/data/storage/el2/base/haps/entry/cache/text1.txt')
    }

    const writeFile = () =>{
      BlobUtilTurboModule.fs.writeFile('/data/storage/el2/base/haps/entry/cache/test.txt',"Try to write str",'utf8') 
    }

    const writeStream = () =>{
      BlobUtilTurboModule.fs.writeStream("/data/storage/el2/base/haps/entry/cache/test.txt","utf8",false)
    }

    const mkdir = () => {
      BlobUtilTurboModule.fs.mkdir(BlobUtilTurboModule.fs.dirs.DocumentDir + '/' + mkdirParam)
  };

return (
   <View style={styles.container}>
     <View style={styles.titleArea}>
       <Text style = {styles.title}>BlobUtil</Text>
     </View>
     <View style = {styles.inputArea}>
       <Text style={styles.baseText}>
         {result}
       </Text>
     </View>
     <ScrollView style={styles.scrollView}>
       <View style={ { flexDirection: 'column'}}>
         
         <View style ={styles.baseArea}>
            <Text style= {{flex:1}}>BlobUtilTurboModule.getConstants()</Text>
            <Button title='运行' color='#841584' onPress={getConstants}></Button>
         </View>

         <View style ={styles.baseArea}>
            <Text style= {{flex:1}}>BlobUtilTurboModule.createFile(utf-8)</Text>
            <Button title='运行' color='#841584' onPress={createFile}></Button>
         </View>

         <View style ={styles.baseArea}>
            <Text style= {{flex:1}}>BlobUtilTurboModule.unlink(utf-8)</Text>
            <Button title='运行' color='#841584' onPress={unlink}></Button>
         </View>

         <View style ={styles.baseArea}>
            <Text style= {{flex:1}}>BlobUtilTurboModule.copyFileToCache(utf-8)</Text>
            <Button title='运行' color='#841584' onPress={copyFileToCache}></Button>
         </View>

         <View style ={styles.baseArea}>
            <Text style= {{flex:1}}>BlobUtilTurboModule.writeFile()</Text>
            <Button title='运行' color='#841584' onPress={writeFile}></Button>
         </View>

         <View style ={styles.baseArea}>
            <Text style= {{flex:1}}>BlobUtilTurboModule.stat()</Text>
            <Button title='运行' color='#841584' onPress={stat}></Button>
         </View>
         
         <View style ={styles.baseArea}>
            <Text style= {{flex:1}}>BlobUtilTurboModule.mkdir()</Text>
            <Button title='运行' color='#841584' onPress={mkdir}></Button>
         </View>
         
         <View style ={styles.baseArea}>
            <Text style= {{flex:1}}>BlobUtilTurboModule.writeStream()</Text>
            <Button title='运行' color='#841584' onPress={writeStream}></Button>
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
   width: '100%',
   height: '100%',
   fontWeight: 'bold',
   textAlign:'center',
   fontSize:16,
   ellipsizeMode:'tail',
   numberOfLines:2
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
   marginHorizontal: 10,
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
   marginTop:6,
   backgroundColor:'#FFFFFF',
   flexDirection: 'row',
   alignItems:'center',
   paddingLeft:8,
   paddingRight:8
 }
});
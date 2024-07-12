import React, { useState } from 'react';
import { Provider} from 'react-redux';   
import { StyleSheet, Text, TextInput, View ,Button,ScrollView} from 'react-native';
import { useAppDispatch, useAppSelector } from './hooks';
import { store } from './store';
import { addUser } from './action/UserReducer';
import { number } from 'yargs';

const UserInfo = () => {  
  const user = useAppSelector((state) => state.user.user);
  return (
    <View style={{width:'90%',height:120,flexDirection: 'column'}}>
      <View><Text style = {styles.title}>Redux</Text></View>
      <View style = {styles.inputArea}>
            <Text style={styles.baseText}>
              {JSON.stringify(user)}
            </Text>
        </View>
    </View> 
  );  
}

const FromData = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [date, setTime] = useState('');
  const [email,setEmail] = useState('');
  const [height,setHigh] = useState('');
  const [hobby,setHobby] = useState('');

  const onSubmit = () => {
    const user = {
      'name':name,
      'date':date,
      'email':email,
      'height':height,
      'hobby':hobby
    }
    dispatch(addUser(user))
  }

  return (
    <ScrollView style={styles.scrollView}> 
      <View style={ { flexDirection: 'column'}}>
        <View style ={styles.baseArea}>
          <Text style= {{flex:1}}>用户名：</Text>
          <TextInput style= {{flex:3,height:'100%'}} onChangeText={text => setName(text)} placeholder='用户名'></TextInput>
        </View>
        <View style ={styles.baseArea}>
          <Text style= {{flex:1}}>出生日期：</Text>
          <TextInput style= {{flex:3,height:'100%'}} onChangeText={text => setTime(text)} placeholder = '日期（yyyy-dd-mm）'></TextInput>
        </View>  
        <View style ={styles.baseArea}>
          <Text style= {{flex:1}}>电子邮箱：</Text>
          <TextInput style= {{flex:3,height:'100%'}} onChangeText={text => setEmail(text)} placeholder = '电子邮箱'></TextInput>
        </View>  
        <View style ={styles.baseArea}>
          <Text style= {{flex:1}}>身高：</Text>
          <TextInput style= {{flex:3,height:'100%'}} onChangeText={text => setHigh(text)} placeholder = '升高（cm）'></TextInput>
        </View>   
        <View style ={styles.baseArea}>
          <Text style= {{flex:1}}>兴趣爱好：</Text>
          <TextInput style= {{flex:3,height:'100%'}} onChangeText={text => setHobby(text)} placeholder = '兴趣爱好：'></TextInput>
        </View> 
        <View style = {{marginTop:20}}>
           <Button onPress={onSubmit} title="submit" color="#841584"/>  
        </View>
      </View>
    </ScrollView>
  );
}

// 导出组件  
export default function TestPage() {  
  return (  
    <Provider store={store}> // 将store作为props传递给组件，这样组件就能访问到store和dispatch方法了。  
      <View style={styles.container}>  
        <UserInfo></UserInfo>
        <FromData></FromData>
      </View>  
    </Provider>  
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
    marginTop:28
  },

  inputArea: {
    width:'100%',
    height:100,
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
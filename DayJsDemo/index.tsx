import React, { useState, } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Pressable } from 'react-native';
import ValueAssignmentDemo from './ValueAssignmentDemo.tsx'
import OperationDemo from './OperationDemo.tsx'
import RevealDemo from './RevealDemo.tsx'
import QueryDemo from './QueryDemo.tsx'
import PluginDemo from './PluginDemo.tsx'

const DayJsDemo = () => {
  const [value, setValue] = useState(1)




  const changeDemo = (val: number) =>{
    setValue(val)
  }

  const menuList = [
    {
      name:'取值/赋值',
      id:1
    },
    {
      name:'操作',
      id:2
    },
    {
      name:'显示',
      id:3
    },
    {
      name:'查询',
      id:4
    },
    {
      name:'插件',
      id:5
    },
  ] 


  return (


      <View style={styles.container}>
        <View style={styles.tabs} >
          {
            menuList.map(item =>{
              return (
                <Pressable style={[styles.tabItem, value === item.id ? styles.isBoxActive : {}]} key={item.id}  onPress={() =>changeDemo(item.id)} >
                <Text style={[styles.tabItemText,value === item.id ? styles.isActive : {}]}>{item.name}</Text>
              </Pressable>
              )
            })
          }
 
        </View>

        <View style={styles.interval}></View>
        <ScrollView>
          {
            value === 1 ? <ValueAssignmentDemo /> :
              value === 2 ? <OperationDemo /> :
                value === 3 ? <RevealDemo /> :
                  value === 4 ? <QueryDemo /> : <PluginDemo />
          }
        </ScrollView>

      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    padding: 8
  },
  navigationContainer: {
    flex: 1,
    paddingTop: 50,
    padding: 8
  },
  tabs:{
    width:'100%',
    flexDirection: 'row',
    alignItems: "center",
    flexWrap:"wrap",
    justifyContent:"space-between"
  },
  tabItem:{
    width:80,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#ccc',
    borderRadius:10,
    marginBottom:10,
  },
  tabItemText:{
    color:'#000',
    fontSize:16
  },
  isActive: {
    color:'#fff',
    fontSize:16
  },
  isBoxActive:{
    backgroundColor: 'skyblue',
  },
  textCommon: {
    marginBottom: 10,
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  interval: {
    marginBottom: 10,
  },
  viewBox: {
    width: '100%',
    borderWidth: 1,
    marginBottom: 2,
    padding: 5
  },
  viewButtonBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  formatLabel: {
    marginRight: 2,
    fontSize: 16,
    fontWeight: '700'
  },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  },
  flexColCenter: {
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700'
  },
  componentTitle: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 20
  },
  inputStyle: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderRadius: 10
  }
});

export default DayJsDemo;
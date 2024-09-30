import { View, Text, ScrollView } from 'react-native';
import React, { useRef, useState } from 'react';
import { Card, Snackbar, Toolbar,Button, BottomNavigation } from 'react-native-material-ui';
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"

const SnackbarDemo = () => {
  const [snackbar, setSnackbar] = useState('')
  const [snackbarOne, setSnackbarOne] = useState('')
  const [snackbarTwo, setSnackbarTwo] = useState('')
  const [snackbarThree, setSnackbarThree] = useState('')
  const [snackbarFour, setSnackbarFour] = useState('')
  const [snackbarFive, setSnackbarFive] = useState('')
  const buttonProps = {
    text:"1111",
    onPress:()=>{setSnackbarFour('hello word')}
  }
  return (
    <Tester>
      <ScrollView style={{marginBottom:170}}>
      <TestSuite name='Snackbar 轻量提示框'>
        <TestCase itShould='props:message(提示框显示的文本 visible(是否可见) onRequestColose(时间结束时的回调))'>
          <View style={{ height: 200 }}>
            <Snackbar 
              message={snackbar}
              visible={snackbar ? true : false}
              onRequestClose={() => { setSnackbar('') }}
            />
           <Button text='改变snackbar状态' onPress={()=>setSnackbar('hello word')}></Button>
          </View>
        </TestCase>
      </TestSuite>

      <TestSuite name='Snackbar 轻量提示框'>
        <TestCase itShould='props:timeout(显示的时间:1000)'>
          <View style={{ height: 200 }}>
            <Snackbar 
              message={snackbarOne}
              visible={snackbarOne ? true : false}
              onRequestClose={() => { setSnackbarOne('') }}
              timeout={1000}
            />
           <Button text='改变snackbar状态' onPress={()=>setSnackbarOne('hello word')}></Button>
          </View>
        </TestCase>
      </TestSuite>

      <TestSuite name='Snackbar 轻量提示框'>
        <TestCase itShould='props:bottomNavigation(是否有底部导航) 配合底部导航栏使用,默认为没有为false,其他用例均覆盖这一情况'>
          <View style={{ height: 200 }}>
            <Snackbar 
            
              message={snackbarTwo}
              visible={snackbarTwo ? true : false}
              onRequestClose={() => { setSnackbarTwo('') }}
              bottomNavigation={true}
            />
              <BottomNavigation>
                  <BottomNavigation.Action
                    active
                    key="today"
                    icon="today"
                    label="today"
                    onPress={()=>setSnackbarTwo('hello word')}
                  />
                  <BottomNavigation.Action
                    key="people"
                    icon="people"
                    label="people"
                    onPress={ ()=>setSnackbarTwo('hello word')}
                  />
                  <BottomNavigation.Action
                    key="bookmark-border"
                    icon="bookmark-border"
                    label="bookmark-border"
                    onPress={()=>setSnackbarTwo('hello word')}
                  />
                  <BottomNavigation.Action
                    key="settings"
                    icon="settings"
                    label="settings"
                    onPress={()=>setSnackbarTwo('hello word')}
                  />
                </BottomNavigation>
          </View>
        </TestCase>
      </TestSuite>

      <TestSuite name='Snackbar 轻量提示框'>
        <TestCase itShould='props:onActionPress(单击操作时要执行的函数) actionText(单机操作显示的文本) 需配合使用'>
          <View style={{ height: 200 }}>
            <Snackbar 
              
              message={snackbarThree}
              visible={snackbarThree ? true : false}
              onRequestClose={() => { setSnackbarThree('') }}
              timeout={5000}
              onActionPress={()=>{setSnackbarThree('')}}
              actionText={'关闭'}
             
            />
           <Button  text='改变snackbar状态' onPress={()=>setSnackbarThree('hello word')}></Button>
          </View>
        </TestCase>
      </TestSuite>

      <TestSuite name='Snackbar 轻量提示框'>
        <TestCase itShould='props:button(按钮，沿用按钮组件的props，按钮使用snackbar设置的按钮样式) '>
          <View style={{ height: 200 }}>
            <Snackbar
              message={snackbarFour}
              visible={snackbarFour ? true : false}
              onRequestClose={() => { setSnackbarFour('') }}
              timeout={5000}
              onActionPress={()=>{setSnackbarFour('')}}
              button={{text:'1111',style:{container:{backgroundColor:'red'}}}}
              style={{container:{height:50,width:'100%'}}}
            />
            <Button text={buttonProps.text} onPress={buttonProps.onPress}></Button>
          </View>
        </TestCase>
      </TestSuite>

      <TestSuite name='Snackbar 轻量提示框'>
        <TestCase itShould='props:style(样式) '>
          <View style={{ height: 200 }}>
            <Snackbar 
              message={snackbarFive}
              visible={snackbarFive ? true : false}
              onRequestClose={() => { setSnackbarFive('') }}
              timeout={5000}
              style={{container:{backgroundColor:'red'}}}
            />
           <Button text='改变snackbar状态' onPress={()=>setSnackbarFive('hello word')}></Button>
          </View>
        </TestCase>
      </TestSuite>

      </ScrollView>
    </Tester>
  )
}
export default SnackbarDemo;
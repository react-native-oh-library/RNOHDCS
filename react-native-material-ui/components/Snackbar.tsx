import { View, Text, ScrollView } from 'react-native';
import React, { useRef, useState } from 'react';
import { Card, Snackbar, Toolbar,Button, BottomNavigation } from 'react-native-material-ui';
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"

const SnackbarDemo = () => {
  const [snackbar, setSnackbar] = useState('')
  const [snackbar1, setSnackbar1] = useState('')
  const [snackbarOne, setSnackbarOne] = useState('')
  const [snackbarOne1, setSnackbarOne1] = useState('')
  const [snackbarTwo, setSnackbarTwo] = useState('')
  const [snackbarThree, setSnackbarThree] = useState('')
  const [snackbarFour, setSnackbarFour] = useState('')
  const [snackbarFive, setSnackbarFive] = useState('')
  const buttonProps = {
    text:"button",
    onPress:()=>{setSnackbarFour('hello word')}
  }
  return (
    <Tester>
      <ScrollView style={{marginBottom:170}}>
      <TestSuite name='Snackbar 轻量提示框 message visible onRequestClose  需要一起设置'>
        <TestCase itShould='props:message(提示框显示的文本 visible(是否可见,通过状态改变true或者false) onRequestClose(时间结束时的回调)) 文本为"hello word"'>
          <View style={{ height: 200 }}>
            <Snackbar 
              message={snackbar}
              visible={snackbar ? true : false}
              onRequestClose={() => { setSnackbar('') }}
            />
           <Button text='改变snackbar状态' onPress={()=>setSnackbar('hello word')}></Button>
          </View>
        </TestCase>
        <TestCase itShould='props:message(提示框显示的文本 visible(是否可见,通过状态改变true或者false) onRequestClose(时间结束时的回调)) 需要一起设置 文本为"hello Snackbar"'>
          <View style={{ height: 200 }}>
            <Snackbar 
              message={snackbar1}
              visible={snackbar1 ? true : false}
              onRequestClose={() => { setSnackbar1('') }}
            />
           <Button text='改变snackbar状态' onPress={()=>setSnackbar1('hello Snackbar')}></Button>
          </View>
        </TestCase>
      </TestSuite>

      <TestSuite name='Snackbar 轻量提示框'>
        <TestCase itShould='props:timeout(显示的时间:1000ms)'>
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
        <TestCase itShould='props:timeout(显示的时间:5000ms)'>
          <View style={{ height: 200 }}>
            <Snackbar 
              message={snackbarOne1}
              visible={snackbarOne1 ? true : false}
              onRequestClose={() => { setSnackbarOne1('') }}
              timeout={5000}
            />
           <Button text='改变snackbar状态' onPress={()=>setSnackbarOne1('hello word')}></Button>
          </View>
        </TestCase>
      </TestSuite>

      <TestSuite name='Snackbar 轻量提示框'>
        <TestCase itShould='props:bottomNavigation(底部导航) 配合底部导航栏使用'>
          <View style={{ height: 200 }}>
            <Snackbar  
              message={snackbarTwo}
              visible={snackbarTwo ? true : false}
              onRequestClose={() => { setSnackbarTwo('') }}
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
        <TestCase itShould='props:onActionPress(单击操作时要执行的函数) actionText(单机操作显示的文本) 需配合使用 文字为关闭，点击关闭可以立马关闭'>
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
              button={{text:'button',icon:'home'}}
              style={{container:{height:50,width:'100%'}}}
            />s
            <Button text={buttonProps.text} onPress={buttonProps.onPress} ></Button>
          </View>
        </TestCase>
      </TestSuite>

      <TestSuite name='Snackbar 轻量提示框'>
        <TestCase itShould='props:style(样式) 设置容器背景为红色 '>
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
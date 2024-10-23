import { ActionButton} from 'react-native-material-ui';
import { View, StyleSheet,ScrollView,Text } from 'react-native'
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"
import { useState } from 'react';

const ActionButtonDemo = () => {
  const [actionText,setActionText] = useState('')
  const [actionTextToolBar,setActionTextToolBar] = useState('')
  return (
        <Tester >
        <ScrollView style={styles.scrollView}>
          <TestSuite name='ActionButton actions  '>
            <TestCase itShould='props:actions 按下主按钮后将显示的图标（或元素）名称的数组 speedDial 拨号过渡展示效果'>
              <View style={styles.view}>
                <ActionButton
                  actions={[
                    { icon: 'email', label: 'Email',name:'email'},
                    { icon: 'phone', label: 'Phone',name:'Phone' },
                    { icon: 'sms', label: 'Text',name:'Text' },
                    { icon: 'chat', label: 'chat',name:'chat' },
                ]}
                  icon='email'
                  transition="speedDial"
                />
                
              </View>
            </TestCase>
          </TestSuite>
          
          <TestSuite name='ActionButton actions  '>
            <TestCase itShould='props:actions 按下主按钮后将显示的图标（或元素）名称的数组 toolbar 工具栏过渡展示效果'>
              <View style={styles.view}>
                <ActionButton
                  actions={[{ icon: 'email', label: 'email', name: 'email' },
                  { icon: 'phone', label: 'Phone', name: 'phone' },
                  { icon: 'home', label: 'home', name: 'home' },
                  { icon: 'chat', label: 'chat', name: 'chat' }]}
                  icon='email'
                  transition="toolbar"
                />
                
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name='ActionButton onPress '>
            <TestCase itShould='props:onPress(按下之后触发的回调:显示文字 onPress actionText) speedDial 拨号过渡展示效果'>
              <View style={styles.view}>
                <ActionButton
                  onPress={()=>setActionText("onPress actionText")}
                  actions={[
                    { icon: 'email', label: 'Email',name:'email'},
                    { icon: 'phone', label: 'Phone',name:'Phone' },
                    { icon: 'sms', label: 'Text',name:'Text' },
                    { icon: 'chat', label: 'chat',name:'chat' },
                ]}
                  icon='email'
                  transition="speedDial"
                />
                <Text>{actionText}</Text>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name='ActionButton onPress  '>
            <TestCase itShould='props:onPress(按下之后触发的回调 显示文字 onPress actionText) toolbar 工具栏过渡展示效果'>
              <View style={styles.view}>
                <ActionButton
                  onPress={()=>setActionTextToolBar("onPress actionText")}
                  actions={[{ icon: 'email', label: 'email', name: 'email' },
                  { icon: 'phone', label: 'Phone', name: 'phone' },
                  { icon: 'home', label: 'home', name: 'home' },
                  { icon: 'chat', label: 'chat', name: 'chat' }]}
                  icon='email'
                  transition="toolbar"
                />
                <Text>{actionTextToolBar}</Text>
              </View>
            </TestCase>
          </TestSuite>

         


          <TestSuite name='ActionButton transition(toolbar) '>
            <TestCase itShould='props:transition(过渡效果 toolbar) 工具栏过渡展示效果'>
              <View style={styles.view}>
                <ActionButton
                   actions={[{ icon: 'email', label: 'email', name: 'email' },
                   { icon: 'phone', label: 'Phone', name: 'phone' },
                   { icon: 'home', label: 'home', name: 'home' },
                   { icon: 'chat', label: 'chat', name: 'chat' }]}
                  icon="share"
                  transition="toolbar"
                />
              </View>
            </TestCase>
          </TestSuite>

           <TestSuite name='ActionButton transition(speedDial)'>
            <TestCase itShould='props:transition(过渡效果 speedDial) 快速拨号过渡效果'>
              <View style={styles.view}>
                <ActionButton
                  actions={[
                    { icon: 'email', label: 'Email',name:'email'},
                    { icon: 'phone', label: 'Phone',name:'Phone' },
                    { icon: 'sms', label: 'Text',name:'Text' },
                    { icon: 'chat', label: 'chat',name:'chat' },
                ]}
                  icon='email'
                  transition="speedDial"
                />
              </View>
            </TestCase>
          </TestSuite> 

          <TestSuite name='ActionButton style container 容器风格'>
            <TestCase itShould="props:style(快速拨号过渡效果，容器组件的样式 backgroundColor:'blue') ">
              <View style={styles.view}>
                <ActionButton
                style={{container:{backgroundColor:'blue'}}}
                  actions={[{ icon: 'email', label: 'email', name: 'email' },
                  { icon: 'phone', label: 'Phone', name: 'phone' },
                  { icon: 'sms', label: 'text', name: 'text' },
                  { icon: 'chat', label: 'chat', name: 'chat' }]}
                  icon="share"
                  transition="speedDial"
                />
              </View>
            </TestCase>
          </TestSuite>
          
          <TestSuite name='ActionButton style container 容器风格'>
            <TestCase itShould="props:style(工具栏过渡效果，容器组件的样式  backgroundColor:'blue') ">
              <View style={styles.view}>
                <ActionButton
                style={{container:{backgroundColor:'blue'}}}
                actions={[{ icon: 'email', label: 'email', name: 'email' },
                { icon: 'phone', label: 'Phone', name: 'phone' },
                { icon: 'home', label: 'home', name: 'home' },
                { icon: 'chat', label: 'chat', name: 'chat' }]}
                  icon="share"
                  transition="toolbar"
                />
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name='ActionButton style icon 图标风格'>
            <TestCase itShould="props:style(快速拨号过渡效果，组件的样式 color:'blue') ">
              <View style={styles.view}>
                <ActionButton
                style={{icon:{color:'blue'}}}
                  actions={[{ icon: 'email', label: 'email', name: 'email' },
                  { icon: 'phone', label: 'Phone', name: 'phone' },
                  { icon: 'sms', label: 'text', name: 'text' },
                  { icon: 'chat', label: 'chat', name: 'chat' }]}
                  icon="share"
                  transition="speedDial"
                />
              </View>
            </TestCase>
          </TestSuite>
          
          <TestSuite name='ActionButton style icon 图标风格'>
            <TestCase itShould="props:style(工具栏过渡效果，组件的样式 color:'blue') ">
              <View style={styles.view}>
                <ActionButton
                style={{icon:{color:'blue'}}}
                actions={[{ icon: 'email', label: 'email', name: 'email' },
                { icon: 'phone', label: 'Phone', name: 'phone' },
                { icon: 'home', label: 'home', name: 'home' },
                { icon: 'chat', label: 'chat', name: 'chat' }]}
                  icon="share"
                  transition="toolbar"
                />
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name='ActionButton style positionContainer 位置容器风格 更改组件在视图中的位置'>
            <TestCase itShould="props:style(快速拨号过渡效果，组件的样式 positionContainer:{top:2} ">
              <View style={styles.view}>
                <ActionButton
                style={{positionContainer:{top:2}}}
                  actions={[{ icon: 'email', label: 'email', name: 'email' },
                  { icon: 'phone', label: 'Phone', name: 'phone' },
                  { icon: 'sms', label: 'text', name: 'text' },
                  { icon: 'chat', label: 'chat', name: 'chat' }]}
                  icon="share"
                  transition="speedDial"
                />
              </View>
            </TestCase>
          </TestSuite>
          
          <TestSuite name='ActionButton style positionContainer 位置容器风格 更改组件在视图中的位置'>
            <TestCase itShould="props:style(工具栏过渡效果，组件的样式 positionContainer:{top:2}">
              <View style={styles.view}>
                <ActionButton
                style={{positionContainer:{top:2}}}
                actions={[{ icon: 'email', label: 'email', name: 'email' },
                { icon: 'phone', label: 'Phone', name: 'phone' },
                { icon: 'home', label: 'home', name: 'home' },
                { icon: 'chat', label: 'chat', name: 'chat' }]}
                  icon="share"
                  transition="toolbar"
                />
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name='ActionButton style toolbarContainer 工具栏样式 工具栏过渡效果之后工具栏的样式'>
            <TestCase itShould="props:style(工具栏过渡效果，组件的样式 toolbarContainer:{background:'orange'} ">
              <View style={styles.view}>
                <ActionButton
                style={{toolbarContainer:{backgroundColor:'orange'}}}
                  actions={[{ icon: 'email', label: 'email', name: 'email' },
                  { icon: 'phone', label: 'Phone', name: 'phone' },
                  { icon: 'home', label: 'home', name: 'home' },
                  { icon: 'chat', label: 'chat', name: 'chat' }]}
                  icon="share"
                  transition="toolbar"
                />
              </View>
            </TestCase>
          </TestSuite>
          
          </ScrollView>        
        </Tester>
  )
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 350,
  },
  scrollView:{
    marginBottom:70
  }
});


export default ActionButtonDemo
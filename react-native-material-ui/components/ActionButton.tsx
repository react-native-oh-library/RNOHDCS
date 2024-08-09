import { ActionButton} from 'react-native-material-ui';
import { View, StyleSheet,ScrollView,Text } from 'react-native'
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"
import { useState } from 'react';

const ActionButtonDemo = () => {
  const [actionText,setActionText] = useState('')
  return (
        <Tester >
        <ScrollView style={styles.scrollView}>
          <TestSuite name='ActionButton speedDial'>
            <TestCase itShould='props:actions(点击按钮之后显示的图标，标题，以及该图标的名称),icon(按钮的图标),transition（过度效果 speedDial） '>
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
          
          <TestSuite name='ActionButton onPress'>
            <TestCase itShould='props:onPress(按下之后触发的回调)'>
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

         


          <TestSuite name='ActionButton transition(toolbar)'>
            <TestCase itShould='props:transition(过渡效果 toolbar)'>
              <View style={styles.view}>
                <ActionButton
                  actions={[{ icon: 'email', label: 'email', name: 'email' },
                  { icon: 'phone', label: 'Phone', name: 'phone' },
                  { icon: 'sms', label: 'text', name: 'text' },
                  { icon: 'chat', label: 'chat', name: 'chat' }]}
                  icon="share"
                  transition="toolbar"
                />
              </View>
            </TestCase>
          </TestSuite>

           <TestSuite name='ActionButton style'>
            <TestCase itShould='props:style(快速拨号过渡效果，组件的样式)'>
              <View style={styles.view}>
                <ActionButton
                  style={{container:{backgroundColor:'blue'},icon:{color:'red'},positionContainer:{top:2,bottom:2}}}
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
          
          <TestSuite name='ActionButton style'>
            <TestCase itShould='props:style(工具栏过渡效果，组件的样式)'>
              <View style={styles.view}>
                <ActionButton
                style={{toolbarContainer:{backgroundColor:'blue'}}}
                  actions={[{ icon: 'email', label: 'email', name: 'email' },
                  { icon: 'phone', label: 'Phone', name: 'phone' },
                  { icon: 'sms', label: 'text', name: 'text' },
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
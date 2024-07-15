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
            <TestCase itShould='props:actions,icon,transition speedDial'>
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
            <TestCase itShould='props:actions,icon,transition speedDial,onPress'>
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

         


          <TestSuite name='props:actions,icon,transition:toolbar'>
            <TestCase itShould='props:actions,icon,transition'>
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
            <TestCase itShould='props:actions,icon,transition speedDial,style(container,icon,positionContainer)'>
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
          
          <TestSuite name='props:actions,icon,transition:toolbar style'>
            <TestCase itShould='props:actions,icon,transition,style(toolbarContainer)'>
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
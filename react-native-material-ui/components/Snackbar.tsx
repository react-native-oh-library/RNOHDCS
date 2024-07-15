import { View, Text } from 'react-native';
import React, {  useState } from 'react';
import { Snackbar } from 'react-native-material-ui';
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"

const SnackbarDemo = ()=>{
  const [isVisible,setIsVisible] = useState(true)
  return (
    <Tester>
      <TestSuite name='Snackbar'>
        <TestCase itShould='props:visible,message,onRequestClose,timeout,bottomNavigation'>
        <View style={{height:200}}>
        <Text>{`visible+${isVisible}`}</Text>
        <Snackbar visible={isVisible} message="hello World" onRequestClose={() => setIsVisible(false)} timeout={2000} bottomNavigation button={{text:'one'}}/>
        
    </View>
        </TestCase>
      </TestSuite>
    </Tester>
  )
}
export default SnackbarDemo;
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import { View, Text, TouchableOpacity, Modal, ScrollView, Button} from 'react-native';

export function tester_change(title:string,buttonTitle:string,pressEvent:Function){
  return(          
    <TestCase
      itShould = {title} initialState={false}  assert={({expect, state}) => { expect(state).to.be.true; }}
      arrange={({setState}) => ( <Button title={buttonTitle} onPress={() => { pressEvent();setState(true); }}></Button> )} >
    </TestCase>
  )
}
  
export function tester_back_string(title:string,string:any){
  return(  <TestCase itShould={title}> <Text>{string}</Text> </TestCase> )
}
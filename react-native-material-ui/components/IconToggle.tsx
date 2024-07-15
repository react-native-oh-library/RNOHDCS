import { IconToggle } from 'react-native-material-ui'
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"
import {ScrollView, Text} from 'react-native'
import { useState } from 'react'
const IconToggleDemo =()=>{
  const [iconText,setIconText] = useState('')
  return(
    <Tester>
      <ScrollView style={{marginBottom:70}}>
      <TestSuite name='IconToggle'>
        <TestCase itShould='props:name'>
          <IconToggle name="person"/>
          <IconToggle name="star"/>
        </TestCase>
      </TestSuite>

      <TestSuite name='IconToggle'>
        <TestCase itShould='props:maxOpacity'>
          <IconToggle name="person" maxOpacity={20}/>
          <IconToggle name="star"/>
        </TestCase>
      </TestSuite>

      <TestSuite name='IconToggle'>
        <TestCase itShould='props:color'>
          <IconToggle name="person" color='red'/>
          <IconToggle name="person" color='blue'/>
        </TestCase>
      </TestSuite>

      <TestSuite name='IconToggle'>
        <TestCase itShould='props:underlayColor,percent'>
          <IconToggle name="person" underlayColor='#666' percent={50}/>
          <IconToggle name="person" underlayColor='blue' percent={100}/>
        </TestCase>
      </TestSuite>

      <TestSuite name='IconToggle'>
        <TestCase itShould='props:disabled'>
          <IconToggle name="person" disabled/>
        </TestCase>
      </TestSuite>

      <TestSuite name='IconToggle'>
        <TestCase itShould='props:size'>
          <IconToggle name="person" size={50}/>
          <IconToggle name="person" size={20}/>
        </TestCase>
      </TestSuite>

      <TestSuite name='IconToggle'>
        <TestCase itShould='props:size'>
          <IconToggle name="person" children={<Text>person</Text>}/>
        </TestCase>
      </TestSuite>

      <TestSuite name='IconToggle'>
        <TestCase itShould='props:size'>
          <IconToggle name="person" onPress={()=>{setIconText('icon')}}/>
          <Text>{iconText}</Text>
        </TestCase>
      </TestSuite>

      <TestSuite name='IconToggle'>
        <TestCase itShould='props:size'>
          <IconToggle name="person" style={{container:{backgroundColor:'red'}}}/>
          <Text>{iconText}</Text>
        </TestCase>
      </TestSuite>
      </ScrollView>
    </Tester>
  )
}

export default IconToggleDemo;
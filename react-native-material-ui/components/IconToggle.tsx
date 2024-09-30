import { IconToggle } from 'react-native-material-ui'
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"
import {ScrollView, Text} from 'react-native'
import { useState } from 'react'
const IconToggleDemo =()=>{
  const [iconText,setIconText] = useState('')
  return(
    <Tester>
      <ScrollView style={{marginBottom:70}}>
      <TestSuite name='IconToggle (图标切换开关名称)'>
        <TestCase itShould='props:name'>
          <IconToggle name="person"/>
          <IconToggle name="star"/>
        </TestCase>
      </TestSuite>

      <TestSuite name='IconToggle (图标切换开关最大可见)'>
        <TestCase itShould='props:maxOpacity'>
          <IconToggle name="person" maxOpacity={20}/>
          <IconToggle name="star"/>
        </TestCase>
      </TestSuite>

      <TestSuite name='IconToggle  (图标切换开关颜色)'>
        <TestCase itShould='props:color'>
          <IconToggle name="person" color='red'/>
          <IconToggle name="person" color='blue'/>
        </TestCase>
      </TestSuite>

      <TestSuite name='IconToggle  (图标切换开关底图颜色，颜色百分比)'>
        <TestCase itShould='props:underlayColor,percent'>
          <IconToggle name="person" underlayColor='red' percent={50}/>
          <IconToggle name="person" underlayColor='blue' percent={100}/>
        </TestCase>
      </TestSuite>

      <TestSuite name='IconToggle (图标切换开关禁用)'>
        <TestCase itShould='props:disabled'>
          <IconToggle name="person" disabled/>
        </TestCase>
      </TestSuite>

      <TestSuite name='IconToggle (图标切换开关大小)'>
        <TestCase itShould='props:size'>
          <IconToggle name="person" size={50}/>
          <IconToggle name="person" size={20}/>
        </TestCase>
      </TestSuite>

      <TestSuite name='IconToggle (图标切换子元素)'>
        <TestCase itShould='props:children'>
          <IconToggle name="person" children={<Text>person</Text>}/>
        </TestCase>
      </TestSuite>

      <TestSuite name='IconToggle'>
        <TestCase itShould='props:onPress (图标切换按下触发的回调)'>
          <IconToggle name="person" onPress={()=>{setIconText('icon')}}/>
          <Text>{iconText}</Text>
        </TestCase>
      </TestSuite>

      <TestSuite name='IconToggle'>
        <TestCase itShould='props:style(图标切换样式)'>
          <IconToggle name="person" style={{container:{backgroundColor:'red'}}}/>
          <Text>{iconText}</Text>
        </TestCase>
      </TestSuite>
      </ScrollView>
    </Tester>
  )
}

export default IconToggleDemo;
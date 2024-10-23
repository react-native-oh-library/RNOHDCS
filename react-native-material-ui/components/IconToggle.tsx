import { IconToggle } from 'react-native-material-ui'
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"
import {ScrollView, Text} from 'react-native'
import { useState } from 'react'
const IconToggleDemo =()=>{
  const [iconText,setIconText] = useState('')
  return(
    <Tester>
      <ScrollView style={{marginBottom:70}}>
      <TestSuite name='IconToggle  name (图标切换开关名称) 第一个图标切换开关名称为：person 第二个图标切换开关名称为：star'>
        <TestCase itShould='props:name'>
          <IconToggle name="person"/>
          <IconToggle name="star"/>
        </TestCase>
      </TestSuite>

      <TestSuite name='IconToggle maxOpacity (图标切换开关最大可见) 第一个图标切换开关最大可见为0.5 第二个图标切换开关最大可见为1'>
        <TestCase itShould='props:maxOpacity'>
          <IconToggle name="person" maxOpacity={0.5}/>
          <IconToggle name="star" maxOpacity={1}/>
        </TestCase>
      </TestSuite>

      <TestSuite name='IconToggle color (图标切换开关颜色) 第一个图标切换开关颜色为红色 第二个图标切换开关颜色为蓝色'>
        <TestCase itShould='props:color'>
          <IconToggle name="person" color='red'/>
          <IconToggle name="person" color='blue'/>
        </TestCase>
      </TestSuite>

      <TestSuite name='IconToggle percent (图标切换开关不透明度百分比) 第一个为百分之50 第二个为百分之百'>
        <TestCase itShould='props:percent'>
          <IconToggle name="person"  percent={50}/>
          <IconToggle name="person"  percent={100}/>
        </TestCase>
      </TestSuite>

      <TestSuite name='IconToggle disabled (图标切换开关禁用) 第一个为禁用 true，第二个为不禁用 false'>
        <TestCase itShould='props:disabled'>
          <IconToggle name="person" disabled={true}/>
          <IconToggle name="person" disabled={false}/>
        </TestCase>
      </TestSuite>

      <TestSuite name='IconToggle size (图标切换开关大小) 第一个为50 第二个为20'>
        <TestCase itShould='props:size'>
          <IconToggle name="person" size={50}/>
          <IconToggle name="person" size={20}/>
        </TestCase>
      </TestSuite>

      <TestSuite name='IconToggle  children (图标切换子元素) 图标切换开关包含的子元素，包含的为text文本 <Text>person</Text>'>
        <TestCase itShould='props:children'>
          <IconToggle name="person" children={<Text>person</Text>}/>
        </TestCase>
      </TestSuite>

      <TestSuite name='IconToggle onPress (图标切换按下触发的回调) 点击以后触发回调显示文本 icon'>
        <TestCase itShould='props:onPress '>
          <IconToggle name="person" onPress={()=>{setIconText('icon')}}/>
          <Text>{iconText}</Text>
        </TestCase>
      </TestSuite>

      <TestSuite name='IconToggle (图标切换样式) 设置style样式为背景颜色第一个为红色，第二个为蓝色'>
        <TestCase itShould='props:style'>
          <IconToggle name="person" style={{container:{backgroundColor:'red'}}}/>
          <IconToggle name="person" style={{container:{backgroundColor:'blue'}}}/>
        </TestCase>
      </TestSuite>
      </ScrollView>
    </Tester>
  )
}

export default IconToggleDemo;
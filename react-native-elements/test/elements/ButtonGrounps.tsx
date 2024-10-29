import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from '@rneui/themed';
import { ButtonGroup, Text, Icon } from '@rneui/themed';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino'
import LinearGradient from 'react-native-linear-gradient';
class TouchableComponent extends React.Component<{}, {}> {
  render() {
    return <TouchableOpacity>
      <View style={{   height:40, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 28, backgroundColor: 'yellow', color: 'pink' }}>TouchableComponent</Text>
      </View>
    </TouchableOpacity>
  }
}
class ViewComponent extends React.Component<{}, {}> {
  render() {
    return <TouchableOpacity>
      <View style={{  alignItems: 'center', justifyContent: 'center', backgroundColor: 'pink',height:60 }}>
        <Text style={{ fontSize: 28, backgroundColor: 'yellow', color: 'pink' }}>ViewComponent</Text>
      </View>
    </TouchableOpacity>
  }
}

export default function ButtonGroups(): JSX.Element {

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedIndex1, setSelectedIndex1] = useState<number>(0);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([0, 2, 3]);
  const [selectedIndex2, setSelectedIndex2] = React.useState([]);

  const [onlongPress, setOnlongPress] = useState(false)
  const [onPress, setOnPress] = useState(false)
  const [onPressIn, setOnPressIn] = useState(false)
  const [onPressOut, setonPressOut] = useState(false)
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="ButtonGroup属性TouchableComponent的验证  传入一个新的可点击的组件">
          <TestCase itShould='TouchableComponent' tags={['C_API']}>
            <ButtonGroup
              containerStyle={{height:60}}
              Component={ViewComponent}
              selectedIndex={selectedIndex}
              onPress={setSelectedIndex}
              buttons={[<Icon type='font-awesome' color='red' size={50} name='remove'/>]}
            />
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="ButtonGroup属性activeOpacity的验证   设置activeOpacity为1，0.8，0.1 均无效">
          <TestCase itShould='activeOpacity' tags={['C_API']}>
            <ButtonGroup
              containerStyle={{height:60}}
              activeOpacity={1}
              selectedIndex={selectedIndex}
              onPress={setSelectedIndex}
              buttons={[<Icon name='save' type='font-awesome' color='red' size={40}/>,<Icon type='font-awesome' color='red' size={20} name='home'/>,<Icon type='font-awesome' color='red' size={50} name='remove'/>]}
            />
          </TestCase>
        </TestSuite> */}
        {/* <TestSuite name="ButtonGroup属性button的验证  传入一个button组件 传入一个button组件无效">
          <TestCase itShould='button' tags={['C_API']}>
            <ButtonGroup
            containerStyle={{height:60}}
               selectedIndex={selectedIndex1}
               onPress={setSelectedIndex1}
               buttons={[<Icon name='save' type='font-awesome' color='red' size={40}/>,<Icon type='font-awesome' color='red' size={20} name='home'/>,<Icon type='font-awesome' color='red' size={50} name='remove'/>]}
              activeOpacity={2}
              button={<Button style={{width:100,height:100,backgroundColor:'green'}}></Button>}
            />
          </TestCase>
        </TestSuite> */}
        <TestSuite name="ButtonGroup属性buttonContainerStyle的验证  设置buttonGroup容器的样式">
          <TestCase itShould='buttonContainerStyle' tags={['C_API']}>
            <ButtonGroup
            buttonContainerStyle ={{backgroundColor:'yellow',borderWidth:0,opacity:0.7}}
            buttons={['button1', 'button2']}
            activeOpacity={2}
           
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="ButtonGroup属性buttonStyle的验证  设置button的样式 ">
          <TestCase itShould='buttonStyle' tags={['C_API']}>
            <ButtonGroup
            
              buttonStyle={{backgroundColor:'pink',borderRadius:20,borderStyle:'solid'}}
              buttons={['button1', 'button2']}
              activeOpacity={2}
           
            />
          </TestCase>
        
        </TestSuite>
        <TestSuite name="ButtonGroup属性buttons的验证  设置buttons">
          <TestCase itShould='buttons' tags={['C_API']}>
            <ButtonGroup
            
              buttonStyle={{backgroundColor:'pink'}}
              buttons={['button1', 'button2','button2']}
              activeOpacity={2}
           
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="ButtonGroup属性containerStyle的验证  设置button容器的样式">
          <TestCase itShould='containerStyle' tags={['C_API']}>
            <ButtonGroup
              containerStyle={{backgroundColor:'black',borderRadius:20,opacity:0.9}}
              buttons={['button1', 'button2']}
              activeOpacity={2}
           
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="ButtonGroup属性disabled的验证  设置disabled 设置后点击无响应">
          <TestCase itShould='disabled' tags={['C_API']}>
            <ButtonGroup
            containerStyle={{backgroundColor:'black'}}
            buttonStyle={{backgroundColor:'pink'}}
            buttonContainerStyle ={{backgroundColor:'yellow',paddingLeft:10,paddingRight:10}}
              buttons={['button1', 'button2']}
              activeOpacity={2}
            disabled={true}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="ButtonGroup属性disabledSelectedStyle的验证  设置disable下选中按钮的样式">
          <TestCase itShould='disabledSelectedStyle' tags={['C_API']}>
            <ButtonGroup
              selectedIndex={0}
            
              buttons={['button1', 'button2']}
              activeOpacity={2}
            disabled={true}
            disabledSelectedStyle={{backgroundColor:'green',borderRadius:20,opacity:1}}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="ButtonGroup属性disabledSelectedTextStyle的验证   设置disable选中按钮文字的样式">
          <TestCase itShould='disabledSelectedTextStyle' tags={['C_API']}>
            <ButtonGroup
            selectedIndex={0}
            disabledSelectedTextStyle={{color:'black',fontSize:20,fontWeight:'bold'}}
            
            buttonContainerStyle ={{backgroundColor:'yellow',paddingLeft:10,paddingRight:10}}
              buttons={['button1', 'button2']}
              activeOpacity={2}
            disabled={true}
            disabledSelectedStyle={{backgroundColor:'green'}}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="ButtonGroup属性disabledStyle的验证  设置disabled下的按钮样式">
          <TestCase itShould='disabledStyle' tags={['C_API']}>
            <ButtonGroup
            disabledStyle={{backgroundColor:'red',borderRadius:10,borderWidth:1,borderColor:'blue'}}
            disabledSelectedTextStyle={{color:'black'}}
              buttons={['button1', 'button2']}
              activeOpacity={2}
            disabled={true}
           
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="ButtonGroup属性disabledTextStyle的验证  设置disabled下的文本样式">
          <TestCase itShould='disabledTextStyle' tags={['C_API']}>
            <ButtonGroup
            disabledTextStyle={{color:'black',fontSize:20,fontWeight:'400'}}
            disabledStyle={{backgroundColor:'red',borderRadius:10,borderWidth:1,borderColor:'blue'}}
              buttons={['button1', 'button2']}
              activeOpacity={2}
            disabled={true}
        
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="ButtonGroup属性innerBorderStyle的验证  设置innerBorderStyle 按钮之间的间距的样式">
          <TestCase itShould='innerBorderStyle' tags={['C_API']}>
            <ButtonGroup
            innerBorderStyle={{color:'black',width:50}}
            containerStyle={{backgroundColor:'black'}}
            buttonStyle={{backgroundColor:'pink'}}
            buttonContainerStyle ={{backgroundColor:'yellow',paddingLeft:10,paddingRight:10}}
              buttons={['button1', 'button2']}
              activeOpacity={2}
            disabledSelectedStyle={{backgroundColor:'green'}}
            />
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="ButtonGroup属性onHideUnderlay的验证  设置onHideUnderlay  因为underlay显示不出来 所以设置onHideUnderlay无效">
          <TestCase itShould='onHideUnderlay' tags={['C_API']}>
            <ButtonGroup
            onShowUnderlay={()=>{}}
            underlayColor='orange'
            onHideUnderlay={()=>{}}
            innerBorderStyle={{color:'black',width:50}}
            disabledTextStyle={{color:'green',fontSize:20,fontWeight:'400'}}
            disabledStyle={{backgroundColor:'red',borderRadius:10,borderWidth:1,borderColor:'blue'}}
            disabledSelectedTextStyle={{color:'black'}}
            containerStyle={{backgroundColor:'black'}}
            buttonStyle={{backgroundColor:'pink'}}
            buttonContainerStyle ={{backgroundColor:'yellow',paddingLeft:10,paddingRight:10}}
              buttons={['button1', 'button2']}
              activeOpacity={2}
            disabledSelectedStyle={{backgroundColor:'green'}}
            />
          </TestCase>
        </TestSuite> */}
        <TestSuite name="ButtonGroup属性onLongPress的验证  设置onLongPress 长按触发切换背景色">
          <TestCase itShould='onLongPress' tags={['C_API']}>
            <ButtonGroup
            onLongPress={()=>{setOnlongPress(!onlongPress)}}
            underlayColor='orange'
            onHideUnderlay={()=>{}}
            innerBorderStyle={{color:'black',width:50}}
            disabledTextStyle={{color:'green',fontSize:20,fontWeight:'400'}}
            disabledStyle={{backgroundColor:'red',borderRadius:10,borderWidth:1,borderColor:'blue'}}
            disabledSelectedTextStyle={{color:'black'}}
            containerStyle={{backgroundColor:'black'}}
            buttonStyle={{backgroundColor:'pink'}}
            buttonContainerStyle ={{backgroundColor: onlongPress ? 'yellow' : 'blue',paddingLeft:10,paddingRight:10}}
              buttons={['button1', 'button2']}
              activeOpacity={0.1}
            disabledSelectedStyle={{backgroundColor:'green'}}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="ButtonGroup属性onPress的验证  设置onPress 点击触发切换背景色">
          <TestCase itShould='onPress' tags={['C_API']}>
            <ButtonGroup
            onPress={()=>{setOnPress(!onPress)}}
            underlayColor='orange'
            onHideUnderlay={()=>{}}
            innerBorderStyle={{color:'black',width:50}}
            disabledTextStyle={{color:'green',fontSize:20,fontWeight:'400'}}
            disabledStyle={{backgroundColor:'red',borderRadius:10,borderWidth:1,borderColor:'blue'}}
            disabledSelectedTextStyle={{color:'black'}}
            containerStyle={{backgroundColor:'black'}}
            buttonStyle={{backgroundColor:'pink'}}
            buttonContainerStyle ={{backgroundColor: onPress ? 'yellow' : 'blue',paddingLeft:10,paddingRight:10}}
              buttons={['button1', 'button2']}
              activeOpacity={0.1}
            disabledSelectedStyle={{backgroundColor:'green'}}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="ButtonGroup属性onPressIn的验证  设置onPressIn 手指按下触发">
          <TestCase itShould='onPressIn' tags={['C_API']}>
            <ButtonGroup
            onPressIn={()=>{setOnPressIn(!onPressIn)}}
            underlayColor='orange'
            onHideUnderlay={()=>{}}
            innerBorderStyle={{color:'pink',width:100}}
            disabledTextStyle={{color:'green',fontSize:20,fontWeight:'400'}}
            disabledStyle={{backgroundColor:'red',borderRadius:10,borderWidth:1,borderColor:'blue'}}
            disabledSelectedTextStyle={{color:'black'}}
            containerStyle={{backgroundColor:'black'}}
            buttonStyle={{backgroundColor:'pink'}}
            buttonContainerStyle ={{backgroundColor: onPressIn ? 'yellow' : 'blue',paddingLeft:10,paddingRight:10}}
              buttons={['button1', 'button2']}
              activeOpacity={0.1}
            disabledSelectedStyle={{backgroundColor:'green'}}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="ButtonGroup属性onPressOut的验证  设置onPressOut 手指松开触发">
          <TestCase itShould='onPressOut' tags={['C_API']}>
            <ButtonGroup
            onPressOut={()=>{setonPressOut(!onPressOut)}}
            underlayColor='orange'
            onHideUnderlay={()=>{}}
            innerBorderStyle={{color:'pink',width:100}}
            disabledTextStyle={{color:'green',fontSize:20,fontWeight:'400'}}
            disabledStyle={{backgroundColor:'red',borderRadius:10,borderWidth:1,borderColor:'blue'}}
            disabledSelectedTextStyle={{color:'black'}}
            containerStyle={{backgroundColor:'black'}}
            buttonStyle={{backgroundColor:'pink'}}
            buttonContainerStyle ={{backgroundColor: onPressOut ? 'yellow' : 'blue',paddingLeft:10,paddingRight:10}}
              buttons={['button1', 'button2']}
              activeOpacity={0.1}
            disabledSelectedStyle={{backgroundColor:'green'}}
            />
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="ButtonGroup属性onShowUnderlay的验证  设置onShowUnderlay 因为underlay显示不出来 所以设置onShowUnderlay无效">
          <TestCase itShould='onShowUnderlay' tags={['C_API']}>
            <ButtonGroup
            onShowUnderlay={()=>{}}
            underlayColor='orange'
            onHideUnderlay={()=>{}}
            innerBorderStyle={{color:'pink',width:100}}
            disabledTextStyle={{color:'green',fontSize:20,fontWeight:'400'}}
            disabledStyle={{backgroundColor:'red',borderRadius:10,borderWidth:1,borderColor:'blue'}}
            disabledSelectedTextStyle={{color:'black'}}
            containerStyle={{backgroundColor:'black'}}
            buttonStyle={{backgroundColor:'pink'}}
            buttonContainerStyle ={{backgroundColor:'yellow',paddingLeft:10,paddingRight:10}}
              buttons={['button1', 'button2']}
              activeOpacity={0.1}
            disabledSelectedStyle={{backgroundColor:'green'}}
            />
          </TestCase>
        </TestSuite> */}
        <TestSuite name="ButtonGroup属性selectMultiple的验证  设置selectMultiple 设置选中多个">
          <TestCase itShould='selectMultiple' tags={['C_API']}>
          <ButtonGroup
         selectMultiple={true}
         buttons={['Multiple', 'Select', 'Button', 'Group']}
         selectedIndexes={selectedIndex2}
         onPress={(value) => {
          setSelectedIndex2(value);
         }}
       />
          </TestCase>
        </TestSuite>
        <TestSuite name="ButtonGroup属性selectedButtonStyle的验证  设置selectedButtonStyle 选中button的样式 选中第一个元素 ">
          <TestCase itShould='selectedButtonStyle' tags={['C_API']}>
            <ButtonGroup
            selectedIndex={0}
            selectedButtonStyle={{backgroundColor:"green",borderWidth:2,borderColor:'black'}}
            selectMultiple={true}
            underlayColor='orange'
              buttonContainerStyle ={{backgroundColor:'yellow',paddingLeft:10,paddingRight:10}}
              buttons={['button1', 'button2']}
              activeOpacity={0.1}
          
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="ButtonGroup属性selectedIndex的验证  设置选中第二个元素">
          <TestCase itShould='selectedIndex' tags={['C_API']}>
            <ButtonGroup
            selectedIndex={1}
            selectedButtonStyle={{backgroundColor:"green",borderWidth:2,borderColor:'black'}}
            selectMultiple={true}
            onShowUnderlay={()=>{}}
            underlayColor='orange'
            containerStyle={{backgroundColor:'black'}}
            buttonStyle={{backgroundColor:'pink'}}
            buttonContainerStyle ={{backgroundColor:'yellow',paddingLeft:10,paddingRight:10}}
              buttons={['button1', 'button2']}
              activeOpacity={0.1}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="ButtonGroup属性selectedIndexes的验证  设置selectedIndexes 设置选中三个按钮">
          <TestCase itShould='selectedIndexes' tags={['C_API']}>
            <ButtonGroup
            selectedIndexes={[0,1,2]}
            selectedButtonStyle={{backgroundColor:"green"}}
            selectMultiple={true}
            onShowUnderlay={()=>{}}
            underlayColor='orange'
            onHideUnderlay={()=>{}}
            containerStyle={{backgroundColor:'black'}}
            buttonStyle={{backgroundColor:'pink'}}
            buttonContainerStyle ={{backgroundColor:'yellow',paddingLeft:10,paddingRight:10}}
              buttons={['button1', 'button2','button3']}
              activeOpacity={0.1}
            disabledSelectedStyle={{backgroundColor:'green'}}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="ButtonGroup属性selectedTextStyle的验证  设置selectedTextStyle 设置选中按钮文字的样式">
          <TestCase itShould='selectedTextStyle' tags={['C_API']}>
            <ButtonGroup
            selectedTextStyle={{color:'red',fontSize:20,fontWeight:'bold'}}
            selectedIndexes={[0,1]}
            selectedButtonStyle={{backgroundColor:"green"}}
            selectMultiple={true}
            onShowUnderlay={()=>{}}
            underlayColor='orange'
            onHideUnderlay={()=>{}}
            innerBorderStyle={{color:'pink',width:100}}
            disabledTextStyle={{color:'green',fontSize:20,fontWeight:'400'}}
            disabledStyle={{backgroundColor:'red',borderRadius:10,borderWidth:1,borderColor:'blue'}}
            disabledSelectedTextStyle={{color:'black'}}
            containerStyle={{backgroundColor:'black'}}
            buttonStyle={{backgroundColor:'pink'}}
            buttonContainerStyle ={{backgroundColor:'yellow',paddingLeft:10,paddingRight:10}}
              buttons={['button1', 'button2']}
              activeOpacity={0.1}
            disabledSelectedStyle={{backgroundColor:'green'}}
            />
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="ButtonGroup属性setOpacityTo的验证  设置setOpacityTo 无法触发属性   设置无效 ">
          <TestCase itShould='setOpacityTo' tags={['C_API']}>
            <ButtonGroup
            setOpacityTo={(value)=>{
              
            }}
            selectedTextStyle={{color:'red',fontSize:20}}
            selectedIndexes={[0,1]}
            selectedButtonStyle={{backgroundColor:"green"}}
            selectMultiple={true}
            onShowUnderlay={()=>{}}
            underlayColor='orange'
            onHideUnderlay={()=>{}}
            innerBorderStyle={{color:'pink',width:100}}
            disabledTextStyle={{color:'green',fontSize:20,fontWeight:'400'}}
            disabledStyle={{backgroundColor:'red',borderRadius:10,borderWidth:1,borderColor:'blue'}}
            disabledSelectedTextStyle={{color:'black'}}
            containerStyle={{backgroundColor:'black'}}
            buttonStyle={{backgroundColor:'pink'}}
            buttonContainerStyle ={{backgroundColor:'yellow',paddingLeft:10,paddingRight:10}}
              buttons={['button1', 'button2']}
              activeOpacity={0.1}
            disabledSelectedStyle={{backgroundColor:'green'}}
            />
          </TestCase>
        </TestSuite> */}
        <TestSuite name="ButtonGroup属性textStyle的验证  设置textStyle 设置普通状态下文字的样式">
          <TestCase itShould='textStyle' tags={['C_API']}>
            <ButtonGroup
            textStyle={{color:'orange',fontSize:20,fontWeight:'bold'}}
            selectMultiple={true}
            onShowUnderlay={()=>{}}
            underlayColor='orange'
            onHideUnderlay={()=>{}}
            innerBorderStyle={{color:'pink',width:100}}
            disabledTextStyle={{color:'green',fontSize:20,fontWeight:'400'}}
            disabledStyle={{backgroundColor:'red',borderRadius:10,borderWidth:1,borderColor:'blue'}}
            disabledSelectedTextStyle={{color:'black'}}
            containerStyle={{backgroundColor:'black'}}
            buttonStyle={{backgroundColor:'pink'}}
            buttonContainerStyle ={{backgroundColor:'yellow',paddingLeft:10,paddingRight:10}}
              buttons={['button1', 'button2']}
              activeOpacity={0.1}
            disabledSelectedStyle={{backgroundColor:'green'}}
            />
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="ButtonGroup属性underlayColor的验证  设置underlayColor  underlay显示不出来 设置颜色无效">
          <TestCase itShould='underlayColor' tags={['C_API']}>
            <ButtonGroup
            textStyle={{color:'orange',fontSize:20}}
            setOpacityTo={(value)=>{

            }}
           
            selectMultiple={true}
            onShowUnderlay={()=>{}}
            underlayColor='orange'
            onHideUnderlay={()=>{}}
            innerBorderStyle={{color:'pink',width:100}}
            disabledTextStyle={{color:'green',fontSize:20,fontWeight:'400'}}
            disabledStyle={{backgroundColor:'red',borderRadius:10,borderWidth:1,borderColor:'blue'}}
            disabledSelectedTextStyle={{color:'black'}}
            containerStyle={{backgroundColor:'black'}}
            buttonStyle={{backgroundColor:'pink'}}
            buttonContainerStyle ={{backgroundColor:'yellow',paddingLeft:10,paddingRight:10}}
              buttons={['button1', 'button2']}
              activeOpacity={0.1}
            disabledSelectedStyle={{backgroundColor:'green'}}
            />
          </TestCase>
        </TestSuite> */}
        <TestSuite name="ButtonGroup属性vertical的验证  设置vertical 按钮垂直方向显示">
          <TestCase itShould='vertical' tags={['C_API']}>
            <ButtonGroup
            textStyle={{color:'orange',fontSize:20}}
            vertical={true}
            buttonContainerStyle ={{height:60, backgroundColor:'yellow',paddingLeft:10,paddingRight:10}}
              buttons={['button1', 'button2','button3']}
              activeOpacity={0.1}
            disabledSelectedStyle={{backgroundColor:'green'}}
            />
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester >
  );
}



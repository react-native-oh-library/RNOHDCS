import { View, StyleSheet, Text, ScrollView, TextInput, } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Toolbar, Button, COLOR } from 'react-native-material-ui';
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"
import { backgroundColor } from '@shopify/restyle';

const ToolbarDemo = () => {
  const [textRightElement, setTextRightElement] = useState('')
  const [textLeftElement, setTextLeftElement] = useState('')
  const [textOnPress, setTextOnPress] = useState('')
  const [onChangeText, setOnChangeText] = useState('')
  const [onSearchClosed, setOnSearchClosed] = useState('')
  const [onSearchCloseRequested, setOnSearchCloseRequested] = useState('')
  const [onSearchPressed, setOnSearchPressed] = useState('')
  const [onSubmitEditing, setOnSubmitEditing] = useState('')
  const [autoCorrect, setAutoCorrect] = useState('')
  const [autoCapitalize1, setAutoCapitalize1] = useState('')
  const inputRef = React.useRef(null);
  return (
    <Tester>
      <ScrollView style={{ marginBottom: 100 }}>

        <TestSuite name='Toolbar(工具栏) isSearchActive searchable onLeftElementPress'>
          <TestCase itShould='props:isSearchActive(搜索是否在活动状态 true),searchable(搜索),leftElement(左边元素),onLeftElementPress (按下左边元素触发的回调) centerElement(中间元素) 需要一起设置'>
            <View style={{ height: 100 }}>
              <View style={styles.container}>
                <Text>{textLeftElement}</Text>
                <Toolbar
                  isSearchActive={true}
                  onLeftElementPress={() => setTextLeftElement('textLeftElement')}
                  leftElement="menu"
                  centerElement="Searchable"
                  searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                  }}
                />
              </View>
            </View>
          </TestCase>

          <TestCase itShould='props:isSearchActive(搜索是否在活动状态 false),searchable(搜索),leftElement(左边元素)需要一起设置'>
            <View style={{ height: 100 }}>
              <View style={styles.container}>
                <Toolbar
                  isSearchActive={false}
                  leftElement="menu"
                  centerElement="Searchable"
                  searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                  }}
                />
              </View>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name='Toolbar(工具栏) searchable'>
          <TestCase itShould='props:searchable(onChangeText):文字改变触发的回调'>
            <View style={{ height: 100 }}>
              <View style={styles.container}>
                <Text>{onChangeText}</Text>
                <Toolbar
                  isSearchActive={false}
                  leftElement="menu"
                  centerElement="Searchable"
                  searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                    onChangeText: () => { setOnChangeText('onChangeText') }
                  }}
                />
              </View>
            </View>
          </TestCase>
          <TestCase itShould='props:searchable(onSearchClosed):搜索关闭触发的回调'>
            <View style={{ height: 100 }}>
              <View style={styles.container}>
                <Text>{onSearchClosed}</Text>
                <Toolbar
                  isSearchActive={false}
                  leftElement="menu"
                  centerElement="Searchable"
                  searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                    onSearchClosed: () => { setOnSearchClosed('OnSearchClosed') }
                  }}
                />
              </View>
            </View>
          </TestCase>
          <TestCase itShould='props:searchable(onSearchCloseRequested)：搜索请求关闭触发的回调'>
            <View style={{ height: 100 }}>
              <View style={styles.container}>
                <Text>{onSearchCloseRequested}</Text>
                <Toolbar
                  isSearchActive={false}
                  leftElement="menu"
                  centerElement="Searchable"
                  searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                    onSearchCloseRequested: () => { setOnSearchCloseRequested('onSearchCloseRequested') }
                  }}
                />
              </View>
            </View>
          </TestCase>
          <TestCase itShould='props:searchable(onSearchPressed):按下搜索触发的回调'>
            <View style={{ height: 100 }}>
              <View style={styles.container}>
                <Text>{onSearchPressed}</Text>
                <Toolbar
                  isSearchActive={false}
                  leftElement="menu"
                  centerElement="Searchable"
                  searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                    onSearchPressed: () => { setOnSearchPressed('onSearchPressed') }
                  }}
                />
              </View>
            </View>
          </TestCase>
          <TestCase itShould='props:searchable(onSubmitEditing):搜索关键字输入完成，按下确定时的回调'>
            <View style={{ height: 100 }}>
              <View style={styles.container}>
                <Text>{onSubmitEditing}</Text>
                <Toolbar
                  isSearchActive={false}
                  leftElement="menu"
                  centerElement="Searchable"
                  searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                    onSubmitEditing: () => { setOnSubmitEditing('onSubmitEditing') }
                  }}
                />
              </View>
            </View>
          </TestCase>

          <TestCase itShould='props:searchable(placeholder):将显示为搜索输入的占位符,占位符为Search'>
            <View style={{ height: 100 }}>
              <View style={styles.container}>
                <Toolbar
                  isSearchActive={false}
                  leftElement="menu"
                  centerElement="Searchable"
                  searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                  }}
                />
              </View>
            </View>
          </TestCase>

          <TestCase itShould='props:searchable(autoFocus):指示打开搜索后何时应聚焦输入,true'>
            <View style={{ height: 200 }}>
              <View style={styles.container}>
                <Toolbar
                  isSearchActive={false}
                  leftElement="menu"
                  centerElement="Searchable"
                  searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                  }}
                />
                <Toolbar
                  isSearchActive={false}
                  leftElement="menu"
                  centerElement="Searchable"
                  searchable={{
                    autoFocus: false,
                    placeholder: 'Search',
                  }}
                />
              </View>
            </View>
          </TestCase>
          <TestCase itShould='props:searchable(icon):覆盖默认搜索图标,home'>
            <View style={{ height: 200 }}>

              <View style={styles.container}>
                <Toolbar
                  isSearchActive={false}
                  leftElement="menu"
                  centerElement="Searchable"
                  searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                    icon: 'home'
                  }}
                />
              </View>
            </View>
          </TestCase>
          <TestSuite name='Toolbar(工具栏) size'>
            <TestCase itShould='props,size(Toolbar图标大小) 第一个为16 第二个为30'>
              <View style={{ height: 250 }}>
                <View style={styles.container}>
                  <Toolbar
                    size={16}
                    leftElement="clear"
                    centerElement="Custom icon size"
                   
                  />
                  <Toolbar
                    size={30}
                    leftElement="clear"
                    centerElement="Custom icon size"
                   
                  />
                </View>
              </View>


            </TestCase>
          </TestSuite>

          
        <TestSuite name='Toolbar(工具栏) onPress'>
          <TestCase itShould='props:onPress(按下触发的回调)'>
            <View style={{ height: 100 }}>
              <View style={styles.container}>
                <Text>{textOnPress}</Text>
                <Toolbar
                  centerElement="With menu"
                  rightElement={{
                    actions: ['edit']
                  }}
                  onPress={() => setTextOnPress('TextonPress')}
                  onRightElementPress={()=>{}}
                />
              </View>
            </View>
          </TestCase>
        </TestSuite>
       

        </TestSuite>

        <TestSuite name='Toolbar(工具栏) rightElement'>
          <TestCase itShould='props:rightElement(右侧元素) 元素类型'>
            <View style={{ height: 100 }}>
              <View style={styles.container}>
                <Toolbar
                  centerElement="With menu"
                  rightElement={<Text>1</Text>}
                  onRightElementPress={()=>{}}
                />
              </View>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name='Toolbar(工具栏) rightElement'>
          <TestCase itShould='props:rightElement(右侧元素) 字符串类型默认为图标'>
            <View style={{ height: 100 }}>
              <View style={styles.container}>

                <Toolbar
                  centerElement="With menu"
                  rightElement='home'
                  onRightElementPress={()=>{}}
                />
              </View>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name='Toolbar(工具栏) rightElement'>
          <TestCase itShould='props:rightElement(右侧元素) 数组类型'>
            <View style={{ height: 100 }}>
              <View style={styles.container}>

                <Toolbar
                  centerElement="With menu"
                  rightElement={["home","home","home"]}
                  onRightElementPress={()=>{}}
                />
              </View>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name='Toolbar(工具栏) rightElement'>
          <TestCase itShould='props:rightElement(右侧元素) 对象类型'>
            <View style={{ height: 100 }}>
              <View style={styles.container}>

              <Toolbar
                        leftElement="clear"
                        centerElement="Custom styles"
                        rightElement={{
                            actions: ['edit'],      
                        }}
                        onRightElementPress={()=>{}}
                    />
              </View>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='Toolbar(工具栏) onRightElementPress'>
          <TestCase itShould='props:onRightElementPress(按下右侧元素触发的回调)'>
            <View style={{ height: 200 }}>
              <View style={styles.container}>
                <Text>{textRightElement}</Text>
                <Toolbar
                  centerElement="With menu"
                  rightElement={{
                    actions: ['edit']
                  }}
                  onRightElementPress={() => { setTextRightElement('textRightElement') }}
                />
              </View>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='Toolbar(工具栏) style'>
          <TestCase itShould='props:style 工具栏样式 container 容器样式 背景1：red,背景2:blue'>
            <View style={{ height: 200 }}>
              <View style={styles.container}>
                <Toolbar
                  centerElement="With menu"
                  rightElement={{
                    actions: ['edit']
                  }}
                  style={{container:{backgroundColor:'red'}}}
                />
                 <Toolbar
                  centerElement="With menu"
                  rightElement={{
                    actions: ['edit']
                  }}
                  style={{container:{backgroundColor:'blue'}}}
                />
              </View>
            </View>
          </TestCase>

          <TestCase itShould='props:style 工具栏样式 leftElementContainer左边元素容器样式 背景1：red,背景2:blue'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
                <Toolbar
                  leftElement='clear'
                  centerElement="With menu"
                  rightElement={{
                    actions: ['edit']
                  }}
                  style={{leftElementContainer:{backgroundColor:'red'}}}
                />
                 <Toolbar
                  leftElement='clear'
                  centerElement="With menu"
                  rightElement={{
                    actions: ['edit']
                  }}
                  style={{leftElementContainer:{backgroundColor:'blue'}}}
                />
              </View>
            </View>
          </TestCase>
          <TestCase itShould='props:style 工具栏样式 leftElement左边元素样式 颜色1：red,颜色2:blue'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
                <Toolbar
                  leftElement='clear'
                  centerElement="With menu"
                  rightElement={{
                    actions: ['edit']
                  }}
                  style={{leftElement:{color:'red'}}}
                />
                 <Toolbar
                  leftElement='clear'
                  centerElement="With menu"
                  rightElement={{
                    actions: ['edit']
                  }}
                  style={{leftElement:{color:'blue'}}}
                />
              </View>
            </View>
          </TestCase>
          <TestCase itShould='props:style 工具栏样式 centerElementContainer中间元素容器样式 背景1：red,背景2:blue'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
                <Toolbar
                  leftElement='clear'
                  centerElement="With menu"
                  rightElement={{
                    actions: ['edit']
                  }}
                  style={{centerElementContainer:{backgroundColor:'red'}}}
                />
                 <Toolbar
                  leftElement='clear'
                  centerElement="With menu"
                  rightElement={{
                    actions: ['edit']
                  }}
                  style={{centerElementContainer:{backgroundColor:'blue'}}}
                />
              </View>
            </View>
          </TestCase>

          <TestCase itShould='props:style 工具栏样式 titleText中间元素文本样式 颜色1：red,颜色2:blue'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
                <Toolbar
                  leftElement='clear'
                  centerElement="With menu"
                  rightElement={{
                    actions: ['edit']
                  }}
                  style={{titleText:{color:'red'}}}
                />
                 <Toolbar
                  leftElement='clear'
                  centerElement="With menu"
                  rightElement={{
                    actions: ['edit']
                  }}
                  style={{titleText:{color:'blue'}}}
                />
              </View>
            </View>
          </TestCase>
          <TestCase itShould='props:style 工具栏样式 rightElementContainer右侧元素容器样式 背景1：red,背景2:blue'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
                <Toolbar
                  leftElement='clear'
                  centerElement="With menu"
                  rightElement={{
                    actions: ['edit']
                  }}
                  style={{rightElementContainer:{backgroundColor:'red'}}}
                />
                 <Toolbar
                  leftElement='clear'
                  centerElement="With menu"
                  rightElement={{
                    actions: ['edit']
                  }}
                  style={{rightElementContainer:{backgroundColor:'blue'}}}
                />
              </View>
            </View>
          </TestCase>
          <TestCase itShould='props:style 工具栏样式 rightElement右侧元素样式 颜色1：red,颜色2:blue'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
                <Toolbar
                  leftElement='clear'
                  centerElement="With menu"
                  rightElement={{
                    actions: ['edit']
                  }}
                  style={{rightElement:{color:'red'}}}
                />
                 <Toolbar
                  leftElement='clear'
                  centerElement="With menu"
                  rightElement={{
                    actions: ['edit']
                  }}
                  style={{rightElement:{color:'blue'}}}
                />
              </View>
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
  },
});
export default ToolbarDemo;
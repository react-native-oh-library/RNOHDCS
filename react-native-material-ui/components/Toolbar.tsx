import { View, StyleSheet, Text, ScrollView, } from 'react-native';
import React, {useState } from 'react';
import { Toolbar, Button, COLOR } from 'react-native-material-ui';
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"

const ToolbarDemo = () => {
  const [textRightElement,setTextRightElement] =useState ('')
  const [textLeftElement,setTextLeftElement] =useState ('')
  const [textOnPress,setTextOnPress] =useState ('')
  const [onChangeText,setOnChangeText] = useState('')
  const [onSearchClosed,setOnSearchClosed] = useState('')
  const [onSearchCloseRequested,setOnSearchCloseRequested] = useState('')
  const [onSearchPressed,setOnSearchPressed] = useState('')
  const [onSubmitEditing,setOnSubmitEditing] = useState('')
  return (
    <Tester>
      <ScrollView style={{marginBottom:50}}>
      <TestSuite name='Toolbar(工具栏)'>
        <TestCase itShould='props:centerElement(中间元素),rightElement(右侧元素),onRightElementPress(按下右侧元素触发的回调)'>
          <View style={{ height: 100 }}>
            <View style={styles.container}>
              <Text>{textRightElement}</Text>
              <Toolbar
                centerElement="With menu"
                rightElement={{
                  actions: ['edit']
                }}
                onRightElementPress={()=>{setTextRightElement('textRightElement')}}
              />
            </View>
          </View>
        </TestCase>
      </TestSuite>

      
      <TestSuite name='Toolbar(工具栏)'>
        <TestCase itShould='props:onPress(按下触发的回调)'>
          <View style={{ height: 100 }}>
            <View style={styles.container}>
              <Text>{textOnPress}</Text>
              <Toolbar
                centerElement="With menu"
                rightElement={{
                  actions: ['edit']
                }}
               onPress={()=>setTextOnPress('TextonPress')}
              />
            </View>
          </View>
        </TestCase>
      </TestSuite>

      <TestSuite name='Toolbar(工具栏)'>
        <TestCase itShould='props:isSearchActive(搜索是否在活动状态，默认为false,其他用例已展示),searchable(搜索),leftElement(左边元素),onLeftElementPress(按下左边元素触发的回调)'>
          <View style={{ height: 100 }}>
            <View style={styles.container}>
              <Text>{textLeftElement}</Text>
              <Toolbar
                isSearchActive={false}
                onLeftElementPress={()=>setTextLeftElement('textLeftElement')}
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

      <TestSuite name='Toolbar(工具栏)'>
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
                  onChangeText:()=>{setOnChangeText('onChangeText')}
                }}
              />
            </View>
          </View>
        </TestCase>
      </TestSuite>

      <TestSuite name='Toolbar(工具栏)'>
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
                  onSearchClosed:()=>{setOnSearchClosed('OnSearchClosed')}
                }}
              />
            </View>
          </View>
        </TestCase>
      </TestSuite>


      <TestSuite name='Toolbar(工具栏)'>
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
                  onSearchCloseRequested:()=>{setOnSearchCloseRequested('onSearchCloseRequested')}
                }}
              />
            </View>
          </View>
        </TestCase>
      </TestSuite>

      <TestSuite name='Toolbar(工具栏)'>
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
                  onSearchPressed:()=>{setOnSearchPressed('onSearchPressed')}
                }}
              />
            </View>
          </View>
        </TestCase>
      </TestSuite>

      <TestSuite name='Toolbar(工具栏)'>
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
                  onSubmitEditing:()=>{setOnSubmitEditing('onSubmitEditing')}
                }}
              />
            </View>
          </View>
        </TestCase>
      </TestSuite>


      <TestSuite name='Toolbar(工具栏)'>
        <TestCase itShould='props:leftEment,centerElement,rightElement(右边元素为组件元素)'>
          <View style={{ height: 100 }}>
            <View style={styles.container}>
              <Toolbar
                leftElement="clear"
                centerElement="With button"
                rightElement={
                  <Button
                    text="Save"
                    style={{ text: { color: 'white' } }}
                  />
                }
              />
            </View>
          </View>
        </TestCase>
      </TestSuite>


      <TestSuite name='Toolbar(工具栏)'>
        <TestCase itShould='props,size(大小)'>
          <View style={{ height: 100 }}>
          <View style={styles.container}>
                    <Toolbar
                        size={16}
                        leftElement="clear"
                        centerElement="Custom icon size"
                        rightElement={{
                            actions: ['edit'],
                            menu: { labels: ['Item 1', 'Item 2'],icon:'add' },
                        }}
                    />
                </View>
          </View>


        </TestCase>
      </TestSuite>

      <TestSuite name='Toolbar(工具栏)'>
        <TestCase itShould='props:style(样式,元素样式)'>
          <View style={{ height: 100 }}>
          <View style={styles.container}>
                    <Toolbar
                        leftElement="clear"
                        centerElement="Custom styles"
                        rightElement={{
                            actions: ['edit'],
                            menu: { labels: ['Item 1', 'Item 2'],icon:'add' },
                        }}
                        style={{
                            container: { backgroundColor: COLOR.orange300 },
                            leftElement: { color: COLOR.orange900 },
                            titleText: { color: COLOR.orange900 },
                            rightElement: { color: COLOR.orange900 },
                        }}
                    />
                </View>
          </View>

          
        </TestCase>
      </TestSuite>

      <TestSuite name='Toolbar(工具栏)'>
        <TestCase itShould='props:style(样式：元素盒子样式)'>
          <View style={{ height: 100 }}>
          <View style={styles.container}>
                    <Toolbar
                        leftElement="clear"
                        centerElement="Custom styles"
                        rightElement={{
                            actions: ['edit'],
                            menu: { labels: ['Item 1', 'Item 2'],icon:'add' },
                        }}
                        style={{
                            container: { backgroundColor: COLOR.orange300 },
                            leftElementContainer: { backgroundColor: COLOR.orange900 },
                            centerElementContainer: { backgroundColor: COLOR.orange900 },
                            rightElementContainer: { backgroundColor: COLOR.orange900 },
                        }}
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
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
      <TestSuite name='Toolbar With menu'>
        <TestCase itShould='props:centerElement,rightElement,onRightElementPress'>
          <View style={{ height: 100 }}>
            <View style={styles.container}>
              <Text>{textRightElement}</Text>
              <Toolbar
                centerElement="With menu"
                rightElement={{
                  actions: ['edit'],
                  menu: { icon: 'star', labels: ['Item 1', 'Item 2'] },
                }}
                onRightElementPress={()=>{setTextRightElement('textRightElement')}}
              />
            </View>
          </View>
        </TestCase>
      </TestSuite>

      
      <TestSuite name='Toolbar With menu'>
        <TestCase itShould='props:centerElement,rightElement,onRightElementPress'>
          <View style={{ height: 100 }}>
            <View style={styles.container}>
              <Text>{textOnPress}</Text>
              <Toolbar
                centerElement="With menu"
                rightElement={{
                  actions: ['edit'],
                  menu: { icon: 'star', labels: ['Item 1', 'Item 2'] },
                }}
               onPress={()=>setTextOnPress('TextonPress')}
              />
            </View>
          </View>
        </TestCase>
      </TestSuite>

      <TestSuite name='Searchable'>
        <TestCase itShould='props:isSearchActive,searchable,leftElement,centerElement,onLeftElementPress'>
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

      <TestSuite name='Searchable'>
        <TestCase itShould='props:searchable(onChangeText)'>
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

      <TestSuite name='Searchable'>
        <TestCase itShould='props:searchable(onSearchClosed)'>
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


      <TestSuite name='Searchable'>
        <TestCase itShould='props:searchable(onSearchCloseRequested)'>
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

      <TestSuite name='Searchable'>
        <TestCase itShould='props:searchable(onSearchPressed)'>
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

      <TestSuite name='Searchable'>
        <TestCase itShould='props:searchable(onSearchCloseRequested)'>
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


      <TestSuite name='With button'>
        <TestCase itShould='props:leftEment,centerElement,rightElement'>
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


      <TestSuite name='Custom icon size'>
        <TestCase itShould='props,size,leftElement,centerEment,rightElement'>
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

      <TestSuite name='Custom styles'>
        <TestCase itShould='props:leftEmenet,centerElment,rightElement,style'>
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

      <TestSuite name='Custom styles'>
        <TestCase itShould='props:leftEmenet,centerElment,rightElement,style'>
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
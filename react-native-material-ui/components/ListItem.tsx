import { View, StyleSheet, Text, ScrollView, UIManager, Platform, ToastAndroid } from 'react-native';
import React, { Component, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ListItem, Subheader } from 'react-native-material-ui';
import Container from './Container';
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"

const ListItemDemo = () => {
  const contextTypes = {
    uiTheme: PropTypes.object.isRequired,
  };
  // const { uiTheme } = useContext(UIThemeContext);
  const [pressOne,setPresssOne] = useState('');
  const [pressOneRight,setPressOneRight] = useState('')
  return (
    <Tester>
      <ScrollView style = {{marginBottom:100}}>
        <TestSuite name='ListItem(列表项)'>
          <TestCase itShould='props:divider(分隔线),centerElement(中间文本元素),dense(紧密)'>
            <View style={{ height: 300 }}>
              <View style={styles.container}>
                <Subheader text="One line" />
                <ListItem
                  divider
                  centerElement="Center element as a text"
                  onPress={() => { }}
                />
                <ListItem
                  divider
                  centerElement={{
                    primaryText: 'Center element as an object',
                  }}
                  onPress={() => { }}
                />
                <ListItem
                  divider
                  centerElement="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                />
                <ListItem
                  divider
                  dense
                  centerElement="Center element as a text (dense)"
                />
                 <ListItem
                  divider
                  centerElement="Center element as a text (dense)"
                />
              </View>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name='ListItem(列表项)'>
          <TestCase itShould='props:centerElement(object)'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
              <Subheader text="Two lines" />
                    <ListItem
                        divider
                        dense
                        centerElement={{
                            primaryText: 'Center element as an object (dense)',
                            secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum',
                        }}
                    />
                    <ListItem
                        divider
                        centerElement={{
                            primaryText: 'Center element as an object',
                            secondaryText: 'Subtext',
                        }}
                    />
              </View>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='ListItem(列表项)'>
          <TestCase itShould='props:onPress(按下之后触发的回调),OnRightElementPress(按下右边元素触发的回调)，leftElement(左边元素),rightElement(右边元素)'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
              <Subheader text="Two lines with icon" />
                    <ListItem
                        divider
                        leftElement="person"
                        centerElement={{
                            primaryText: 'Center element as an object',
                            secondaryText: 'Subtext',
                        }}
                    />
                    <ListItem
                        divider
                        leftElement="person"
                        centerElement={{
                            primaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                            secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum',
                        }}
                        rightElement="info"
                        onPress={()=>{setPresssOne('Two lines with icon')}}
                        onRightElementPress={() => {
                          setPressOneRight('PressOneRight')
                        }}
                    />
                    <Text>{pressOne}</Text>
                    <Text>{pressOneRight}</Text>
              </View>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='ListItem(列表项)'>
          <TestCase itShould='numberOfLines(行数),style(样式)'>
            <View style={{ height: 300 }}>
              <View style={styles.container}>
              <ListItem
                        divider
                        leftElement="person"
                        centerElement={{
                            primaryText: 'Center element as an object',
                            secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                        }}
                        numberOfLines={2}
                    />
                    <ListItem
                        divider
                        leftElement="person"
                        centerElement={{
                            primaryText: 'Center element as an object',
                            secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                            tertiaryText: 'Praesent in ipsum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
                        }}
                    />
                    <ListItem
                        divider
                        leftElement="person"
                        centerElement={{
                            primaryText: 'Ali Connors',
                            secondaryText: 'Brunch this weekend?',
                            tertiaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum.',
                        }}
                        style={{
                            secondaryText: { color: "red" },
                        }}
                    />
              </View>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='ListItem(列表项)'>
          <TestCase itShould='props:numberOfLines(dynamic)'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
              <Subheader text="Dynamic" />
                    <ListItem
                        divider
                        leftElement="person"
                        numberOfLines='dynamic'
                        centerElement={{
                            primaryText: 'With dynamic second line',
                            secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Pellentesque commodo ultrices diam. Praesent in ipsum',
                        }}
                        onPress={() => {}}
                    />
              </View>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='Custom'>
          <TestCase itShould='centerElement(element)'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
              <Subheader text="Custom" />
                    <ListItem
                        divider
                        leftElement="person"
                        centerElement={<Text>Custom center element</Text>}
                    />
              </View>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name='ListItem(列表项)'>
          <TestCase itShould='props:style'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
              <Subheader text="Custom" />
              <ScrollView style={{marginBottom:100,height:300}}>

             
                    <ListItem
                        divider
                        leftElement="person"
                        centerElement={<Text>Custom center element</Text>}
                        style={{container:{backgroundColor:'red'}}}
                    />
                    <ListItem
                        divider
                        leftElement="person"
                        centerElement={<Text>Custom center element</Text>}
                        style={{contentViewContainer:{backgroundColor:'red'}}}
                    />
                    <ListItem
                        divider
                        leftElement="person"
                        centerElement={<Text>Custom center element</Text>}
                        style={{leftElementContainer:{backgroundColor:'blue'}}}
                    />
                    <ListItem
                        divider
                        leftElement="person"
                        centerElement={<Text>Custom center element</Text>}
                        style={{centerElementContainer:{backgroundColor:'blue'}}}
                    />
                      <ListItem
                        
                        divider
                        leftElement="person"
                        centerElement={{
                            primaryText: 'Center element as an object',
                            secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                            tertiaryText: 'Praesent in ipsum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
                        }}
                        style={{textViewContainer:{backgroundColor:'#666'}}}
                    />
                      <ListItem
                        
                        divider
                        leftElement="person"
                        centerElement={{
                          primaryText: 'Center element as an object',
                          secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                          tertiaryText: 'Praesent in ipsum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
                      }}
                        style={{primaryText:{fontSize:30}}}
                    />
                     <ListItem
                        
                        divider
                        leftElement="person"
                        centerElement={{
                          primaryText: 'Center element as an object',
                          secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                          tertiaryText: 'Praesent in ipsum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
                      }}
                        style={{firstLine:{backgroundColor:'#666'}}}
                    />
                     <ListItem
                        
                        divider
                        leftElement="person"
                        centerElement={{
                          primaryText: 'Center element as an object',
                          secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                          tertiaryText: 'Praesent in ipsum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
                      }}
                        style={{primaryTextContainer:{backgroundColor:'#666'}}}
                    />
                    <ListItem
                        
                        divider
                        leftElement="person"
                        centerElement={{
                          primaryText: 'Center element as an object',
                          secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                          tertiaryText: 'Praesent in ipsum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
                      }}
                        style={{secondaryText:{backgroundColor:'#666'}}}
                    />
                     <ListItem
                        
                        divider
                        leftElement="person"
                        centerElement={{
                          primaryText: 'Center element as an object',
                          secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                          tertiaryText: 'Praesent in ipsum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
                      }}
                        style={{tertiaryText:{backgroundColor:'#666'}}}
                    />
                      <ListItem
                        
                        divider
                        leftElement="person"
                        rightElement="person"
                        centerElement={<Text>Custom center element</Text>}
                        style={{rightElementContainer:{backgroundColor:'#666'}}}
                    />
                    
                     </ScrollView>
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
    flex: 1,
  },
});
export default ListItemDemo
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
        <TestSuite name='ListItem'>
          <TestCase itShould='props'>
            <View style={{ height: 250 }}>
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
              </View>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name='Two lines'>
          <TestCase itShould='props:divide,dense,centerElement(object)'>
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

        <TestSuite name='TTwo lines with icon'>
          <TestCase itShould='props:divide,dense,centerElement(object),onPress,OnRightElementPress'>
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

        <TestSuite name='Three lines'>
          <TestCase itShould='props:divide,centerElement(object),numberOfLines,leftElement,style'>
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

        <TestSuite name='Dynamic'>
          <TestCase itShould='props:divide,centerElement(object),numberOfLines(dynamic),onPress'>
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
          <TestCase itShould='props:divide,leftElement,centerElement(element)'>
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

        <TestSuite name='style'>
          <TestCase itShould='props:style'>
            <View style={{ height: 250 }}>
              <View style={styles.container}>
              <Subheader text="Custom" />
              <ScrollView style={{marginBottom:100,height:"100%"}}>

             
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
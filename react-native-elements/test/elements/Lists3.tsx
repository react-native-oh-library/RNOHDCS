import { ListItem,Button, Icon } from '@rneui/themed';
import { TestCase, Tester, TestSuite } from '@rnoh/testerino';
import React, { useState } from 'react';
import { Pressable, Text, StyleSheet, View, ScrollView } from 'react-native';

const TestDemo = () => {
  const [test1,setTest1] = useState('111')
  const [selectedButtonIndex3, setSelectedButtonIndex3] = React.useState(0);
  const [changeBg2, setChangeBg2] = React.useState(false);
  const [onPress, setOnPress] = React.useState(false);
  const [onPressIn, setOnPressIn] = React.useState(false);
  const [onPressOut, setonPressOut] = React.useState(false);
  return (
    <ScrollView style={{marginBottom:20}}>
       <Tester>
    <TestSuite name="ListItem.ButtonGroup属性onPressOut  手指松开触发事件">
    <TestCase itShould="设置onPressOut" tags={['C_API']}>
      <View style={styles.container}>
        <Text style={styles.subText}>设置onPressOut</Text>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Choose 🤯</ListItem.Title>
          </ListItem.Content>
          <ListItem.ButtonGroup selectedButtonStyle={{backgroundColor:'black',width:100,borderRadius:20}}
            buttons={['Flower', 'Coco']}
            selectedIndex={selectedButtonIndex3}
            onPressOut={()=>{setSelectedButtonIndex3(selectedButtonIndex3 == 0 ? 1 : 0)}} />
        </ListItem>
      </View>
    </TestCase>
  </TestSuite>
  <TestSuite name="ListItem.Swipeable事件onSwipeEnd onSwipeEnd结束滑动修改背景颜色">
          <TestCase itShould="onSwipeEnd事件触发修改背景颜色" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>onSwipeEnd事件触发</Text>
              <ListItem.Swipeable
                animation={{type: 'timing', duration: 100}}
                bottomDivider
                onSwipeEnd={() => {
                  setChangeBg2(!changeBg2);
                }}
                leftContent={resetToDefault => (
                  <Button
                    title="Info"
                    onPress={() => resetToDefault()}
                    icon={{name: 'info', type: 'font-awesome', color: 'white'}}
                    buttonStyle={{minHeight: '100%'}}
                  />
                )}
                // or pass component
                rightContent={
                  <Button
                    title="Delete"
                    icon={{
                      name: 'remove',
                      type: 'font-awesome',
                      color: 'white',
                    }}
                    buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
                  />
                }
                containerStyle={
                  changeBg2
                    ? {backgroundColor: 'blue'}
                    : {backgroundColor: 'gray'}
                }>
                <Icon type="font-awesome" name="save" color="green" size={30} />
                <ListItem.Content>
                  <ListItem.Title>{'ListItem.Swipeable'}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem.Swipeable>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="ListItem.Chevron属性onPress	点击事件">
          <TestCase itShould="设置onPress	" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>onPress</Text>
              <ListItem
                containerStyle={{backgroundColor: 'white'}}
                bottomDivider>
                <ListItem.Content>
                  <ListItem.Title style={{color: 'black'}}>
                    修改chevron颜色
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron
                  onPress={() => {
                    setOnPress(!onPress);
                  }}
                  color={'blue'}
                  size={30}
                  type="font-awesome"
                  name={onPress ? 'close' : 'save'}
                />
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Chevron属性onPressIn	按下触发">
          <TestCase itShould="设置onPressIn	" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>onPressIn</Text>
              <ListItem
                containerStyle={{backgroundColor: 'white'}}
                bottomDivider>
                <ListItem.Content>
                  <ListItem.Title style={{color: 'black'}}>
                    修改chevron颜色
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron
                  onPressIn={() => {
                    setOnPressIn(!onPressIn);
                  }}
                  color={'blue'}
                  size={30}
                  type="font-awesome"
                  name={onPressIn ? 'close' : 'save'}
                />
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="ListItem.Chevron属性onPressOut	松开触发">
          <TestCase itShould="设置onPressOut" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>onPressOut</Text>
              <ListItem
                containerStyle={{backgroundColor: 'white'}}
                bottomDivider>
                <ListItem.Content>
                  <ListItem.Title style={{color: 'black'}}>
                    修改chevron颜色
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron
                  onPressOut={() => {
                    setonPressOut(!onPressOut);
                  }}
                  color={'blue'}
                  size={30}
                  type="font-awesome"
                  name={onPressOut ? 'close' : 'save'}
                />
              </ListItem>
            </View>
          </TestCase>
        </TestSuite>
  </Tester>
    </ScrollView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  subText: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
    color: '#222',
  },
  vertical: {
    paddingTop: 20,
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#222',
  },
  subTitleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default TestDemo;
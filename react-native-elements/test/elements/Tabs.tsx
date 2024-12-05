import React, { useState } from 'react';
import {Tab, Text, TabView,Button} from '@rneui/themed';
import {ScrollView, View} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {panResponder} from './RegistEvent'
export default () => {
  const [direction,setDirection] = React.useState('right')
  const [index, setIndex] = React.useState(0);
  const [index1, setIndex1] = React.useState(0);
  const [index2, setIndex2] = React.useState(0);
  const [index3, setIndex3] = React.useState(0);
  const [index4, setIndex4] = React.useState(0);
  const [index5, setIndex5] = React.useState(0);
  const [index6, setIndex6] = React.useState(0);
  const [index7, setIndex7] = React.useState(0);
  const [index8, setIndex8] = React.useState(0);
  const [index9, setIndex9] = React.useState(0);
  const [index10, setIndex10] = React.useState(0);
  const [index11, setIndex11] = React.useState(0);
  const [index12, setIndex12] = React.useState(0);
  const [index13, setIndex13] = React.useState(0);
  const [index14, setIndex14] = React.useState(0);
  const [index15, setIndex15] = React.useState(0);
  const [index16, setIndex16] = React.useState(0);
  const [index17, setIndex17] = React.useState(0);
  const [index18, setIndex18] = React.useState(0);
  const [index19, setIndex19] = React.useState(0);
  const [index20, setIndex20] = React.useState(0);
  const [index21, setIndex21] = React.useState(0);
  const [index22, setIndex22] = React.useState(0);
  const [index23, setIndex23] = React.useState(0);
  const [index24, setIndex24] = React.useState(0);
  const [index25, setIndex25] = React.useState(0);
  const [index26, setIndex26] = React.useState(0);
  const [index27, setIndex27] = React.useState(0);
  const [index28, setIndex28] = React.useState(0);
  const [index29, setIndex29] = React.useState(0);
  const [index30, setIndex30] = React.useState(0);
  const [index31, setIndex31] = React.useState(0);
  const [index32, setIndex32] = React.useState(0);
  const [index33, setIndex33] = React.useState(0);
  const [index34, setIndex34] = React.useState(0);
  const [index35, setIndex35] = React.useState(0);
  const [index36, setIndex36] = React.useState(0);
  const [index37, setIndex37] = React.useState(0);
  const [index38, setIndex38] = React.useState(0);
  const [dimensions, setDimensions] = useState({ width: '100%', height: 100 });
  const [changeBg,setChangeBg] = useState(false)
  console.log('tabs re render');
  const [value2,setValue2] = useState('')
  const pan = panResponder()
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="Tab的buttonStyle属性 设置选项卡的buttonStyle">
          <TestCase itShould="buttonStyle" tags={['C_API']}>
            <Tab
              value={index}
              onChange={index => setIndex(index)}
              indicatorStyle={{
                backgroundColor: 'white',
                height: 3,
              }}
              variant="primary"
              containerStyle={{justifyContent: 'space-around'}}
              buttonStyle={active=>({backgroundColor: active ? 'pink' : 'green', borderRadius: 20,borderWidth:1,borderColor:'black'})}
              dense={true}>
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'white',
                }}
              />
            </Tab>
          </TestCase>
          <TestCase itShould="TabView" tags={['C_API']}>
            <View style={{width: '100%', height: 200, overflow: 'hidden'}}>
              <TabView
                onSwipeStart={e => console.log(e)}
                value={index}
                onChange={index => setIndex(index)}
                animationType="spring">
                <TabView.Item style={{backgroundColor: 'red', width: '100%'}}>
                  <ScrollView>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                  </ScrollView>
                </TabView.Item>
                <TabView.Item style={{backgroundColor: 'blue', width: '100%'}}>
                  <Text h1>Favorite 1</Text>
                </TabView.Item>
                <TabView.Item style={{backgroundColor: 'green', width: '100%'}}>
                  <Text h1>Cart 2${Math.random()}</Text>
                </TabView.Item>
              </TabView>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tab的containerStyle属性 设置选项卡的containerStyle无效 设置背景颜色 圆角 宽度 均无效">
          <TestCase itShould="containerStyle" tags={['C_API']}>
            <Tab
              value={Math.ceil(index1 > -1 ? index1 : 0)}
              onChange={e => setIndex1(e)}
              indicatorStyle={{
                backgroundColor: 'white',
                height: 3,
              }}
              variant="primary"
              containerStyle={active => ({
                backgroundColor: 'yellow',
                borderRadius: 20,
                width:100,
                borderWidth:2,
                borderColor:'black'
              })}
              dense={true}>
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'white',
                }}
              />
            </Tab>
          </TestCase>
          <TestCase itShould="TabView" tags={['C_API']}>
            <View style={{width: '100%', height: 200, overflow: 'hidden'}}>
              <TabView
                onSwipeStart={e => console.log(e)}
                value={index1}
                onChange={index => setIndex1(index)}
                animationType="spring">
                <TabView.Item style={{backgroundColor: 'red', width: '100%'}}>
                  <ScrollView>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                  </ScrollView>
                </TabView.Item>
                <TabView.Item style={{backgroundColor: 'blue', width: '100%'}}>
                  <Text h1>Favorite 1</Text>
                </TabView.Item>
                <TabView.Item style={{backgroundColor: 'green', width: '100%'}}>
                  <Text h1>Cart 2${Math.random()}</Text>
                </TabView.Item>
              </TabView>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tab的disableIndicator属性 设置Tab的disableIndicator 选择哪一个选项卡的指示器隐藏">
          <TestCase itShould="containerStyle" tags={['C_API']}>
            <Tab
              value={Math.ceil(index3 > -1 ? index3 : 0)}
              onChange={e => setIndex3(e)}
              indicatorStyle={{
                backgroundColor: 'white',
                height: 3,
              }}
              variant="default"
              style={{backgroundColor: 'yellow'}}
              // buttonStyle={{ backgroundColor:'yellow' ,borderRadius:20}}
              dense={false}
              disableIndicator>
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'black',
                }}
              />
            </Tab>
          </TestCase>
          <TestCase itShould="TabView" tags={['C_API']}>
            <View style={{width: '100%', height: 200, overflow: 'hidden'}}>
              <TabView
                onSwipeStart={e => console.log(e)}
                value={index3}
                onChange={index => setIndex3(index)}
                animationType="spring">
                <TabView.Item style={{backgroundColor: 'red', width: '100%'}}>
                  <ScrollView>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                  </ScrollView>
                </TabView.Item>
                <TabView.Item style={{backgroundColor: 'blue', width: '100%'}}>
                  <Text h1>Favorite 1</Text>
                </TabView.Item>
                <TabView.Item style={{backgroundColor: 'green', width: '100%'}}>
                  <Text h1>Cart 2${Math.random()}</Text>
                </TabView.Item>
              </TabView>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tab的iconPosition属性 设置Tab的iconPosition的枚举验证">
          <TestCase itShould="left" tags={['C_API']}>
            <Tab
              value={Math.ceil(index4 > -1 ? index4 : 0)}
              onChange={e => setIndex4(e)}
              indicatorStyle={{
                backgroundColor: 'black',
                height: 3,
              }}
              variant="default"
              style={{backgroundColor: 'yellow'}}
              iconPosition="left">
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'black',
                }}
              />
            </Tab>
          </TestCase>
          <TestCase itShould="top" tags={['C_API']}>
            <Tab
              value={Math.ceil(index4 > -1 ? index4 : 0)}
              onChange={e => setIndex4(e)}
              indicatorStyle={{
                backgroundColor: 'black',
                height: 3,
              }}
              variant="default"
              style={{backgroundColor: 'yellow'}}
              iconPosition="top">
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'black',
                }}
              />
            </Tab>
          </TestCase>
          <TestCase itShould="right" tags={['C_API']}>
            <Tab
              value={Math.ceil(index4 > -1 ? index4 : 0)}
              onChange={e => setIndex4(e)}
              indicatorStyle={{
                backgroundColor: 'black',
                height: 3,
              }}
              variant="default"
              style={{backgroundColor: 'yellow'}}
              iconPosition="right">
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'black',
                }}
              />
            </Tab>
          </TestCase>
          <TestCase itShould="bottom" tags={['C_API']}>
            <Tab
              value={Math.ceil(index5 > -1 ? index5 : 0)}
              onChange={e => setIndex5(e)}
              indicatorStyle={{
                backgroundColor: 'black',
                height: 3,
              }}
              variant="default"
              style={{backgroundColor: 'yellow'}}
              iconPosition="bottom">
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'black',
                }}
              />
            </Tab>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tab的indicatorStyle属性 设置Tab的indicatorStyle 设置指示器的样式">
          <TestCase itShould="indicatorStyle" tags={['C_API']}>
            <Tab
              value={Math.ceil(index6 > -1 ? index6 : 0)}
              onChange={e => setIndex6(e)}
              indicatorStyle={{
                backgroundColor: 'pink',
                height: 5,
                borderRadius: 2.5,
              }}
              variant="default"
              style={{backgroundColor: 'yellow'}}
              dense={false}>
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'black',
                }}
              />
            </Tab>
          </TestCase>
          <TestCase itShould="TabView" tags={['C_API']}>
            <View style={{width: '100%', height: 200, overflow: 'hidden'}}>
              <TabView
                onSwipeStart={e => console.log(e)}
                value={index6}
                onChange={index => setIndex6(index)}
                animationConfig={{duration:100,useNativeDriver:true}}
                animationType="spring">
                  
                <TabView.Item style={{backgroundColor: 'red', width: '100%'}}>
                  <ScrollView>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                  </ScrollView>
                </TabView.Item>
                <TabView.Item style={{backgroundColor: 'blue', width: '100%'}}>
                  <Text h1>Favorite 1</Text>
                </TabView.Item>
                <TabView.Item style={{backgroundColor: 'green', width: '100%'}}>
                  <Text h1>Cart 2${Math.random()}</Text>
                </TabView.Item>
              </TabView>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tab的onChange属性 设置Tab的onChange 切换选项卡的时候触发此方法 切换去修改背景颜色 ">
          <TestCase itShould="onChange" tags={['C_API']}>
            <Tab
              value={Math.ceil(index7 > -1 ? index7 : 0)}
              onChange={e => setIndex7(e)}
              indicatorStyle={{
                backgroundColor: 'pink',
                height: 5,
                borderRadius: 2.5,
              }}
              variant="default"
              style={{
                backgroundColor:
                  index7 == 0 ? 'yellow' : index7 == 1 ? 'red' : 'blue',
              }}
              dense={false}>
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'black',
                }}
              />
            </Tab>
          </TestCase>
          <TestCase itShould="TabView" tags={['C_API']}>
            <View style={{width: '100%', height: 200, overflow: 'hidden'}}>
              <TabView
                onSwipeStart={e => console.log(e)}
                value={index7}
                onChange={index => setIndex7(index)}
                animationType="spring">
                <TabView.Item style={{backgroundColor: 'red', width: '100%'}}>
                  <ScrollView>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                  </ScrollView>
                </TabView.Item>
                <TabView.Item style={{backgroundColor: 'blue', width: '100%'}}>
                  <Text h1>Favorite 1</Text>
                </TabView.Item>
                <TabView.Item style={{backgroundColor: 'green', width: '100%'}}>
                  <Text h1>Cart 2${Math.random()}</Text>
                </TabView.Item>
              </TabView>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tab的value属性 设置Tab的value 选项卡选中的值 ">
          <TestCase itShould="value" tags={['C_API']}>
            <Tab
              titleStyle={{fontSize: 100, fontWeight: '500', color: '#222222'}}
              value={Math.ceil(index10 > -1 ? index10 : 0)}
              onChange={e => setIndex10(e)}
              indicatorStyle={{
                backgroundColor: 'pink',
                height: 5,
                borderRadius: 2.5,
              }}
              variant="default"
              style={{
                backgroundColor:
                  index10 == 0 ? 'yellow' : index10 == 1 ? 'red' : 'blue',
              }}
              dense={false}>
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'black',
                }}
              />
            </Tab>
            <View style={{width:'100%',height:40,marginTop:20,marginBottom:20}}>
              <Text style={{color:'black'}}>value值：{index10}</Text>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tab的variant属性 设置Tab的variant枚举值 ">
          <TestCase itShould="primary" tags={['C_API']}>
            <Tab
              titleStyle={{fontSize: 100, fontWeight: '500', color: '#222222'}}
              value={Math.ceil(index11 > -1 ? index11 : 0)}
              onChange={e => setIndex11(e)}
              indicatorStyle={{
                backgroundColor: 'pink',
                height: 5,
                borderRadius: 2.5,
              }}
              variant="primary"
              dense={false}>
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'black',
                }}
              />
            </Tab>
          </TestCase>
          <TestCase itShould="default" tags={['C_API']}>
            <Tab
              titleStyle={{fontSize: 100, fontWeight: '500', color: '#222222'}}
              value={Math.ceil(index12 > -1 ? index12 : 0)}
              onChange={e => setIndex12(e)}
              indicatorStyle={{
                backgroundColor: 'pink',
                height: 5,
                borderRadius: 2.5,
              }}
              variant="default"
              // style={{ backgroundColor: index == 0 ? 'yellow' : index == 1 ? 'red' : 'blue' }}
              dense={false}>
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'black',
                }}
              />
            </Tab>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tab的style属性 接收React-native 的原生View组件的style ">
          <TestCase itShould="设置React-native 的原生View组件的style 设置背景色为黄色 圆角 居中" tags={['C_API']}>
            <Tab
              style={{backgroundColor:'black',borderRadius:40,width:300,alignSelf:'center'}}
              titleStyle={{fontSize: 100, fontWeight: '500', color: '#222222'}}
              value={Math.ceil(index11 > -1 ? index11 : 0)}
              onChange={e => setIndex11(e)}
              indicatorStyle={{
                backgroundColor: 'pink',
                height: 5,
                borderRadius: 2.5,
              }}
              variant="primary"
              dense={false}>
              <Tab.Item
                containerStyle={active => ({
                  width: 100,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 100,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 100,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'black',
                }}
              />
            </Tab>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tab的onResponderMove属性 接收React-native 的原生View组件的onResponderMove">
          <TestCase itShould="设置React-native 的原生View组件的onResponderMove" tags={['C_API']}>
            <Tab
              testID='Tab'
              style={{backgroundColor:changeBg ? '#489303' : 'yellow'}}
              titleStyle={{fontSize: 100, fontWeight: '500', color: '#222222'}}
              indicatorStyle={{
                backgroundColor: 'pink',
                height: 5,
                borderRadius: 2.5,
              }}
              {...pan.panHandlers}
              onResponderMove={()=>{
                console.log('1111111111111')
                    setChangeBg(!changeBg)
              }}
              variant="primary"
              dense={false}>
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'black',
                }}
              />
            </Tab>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tab.Item的buttonStyle属性 设置Tab.Item的buttonStyle 设置选项卡样式 ">
          <TestCase itShould="buttonStyle" tags={['C_API']}>
            <Tab
              titleStyle={{fontSize: 100, fontWeight: '500', color: '#222222'}}
              value={Math.ceil(index14 > -1 ? index14 : 0)}
              onChange={e => setIndex14(e)}
              indicatorStyle={{
                backgroundColor: 'pink',
                height: 5,
                borderRadius: 2.5,
              }}
              variant="default"
              style={{
                backgroundColor:
                  index14 == 0 ? 'yellow' : index14 == 1 ? 'red' : 'blue',
              }}
              dense={false}>
              <Tab.Item
                buttonStyle={{backgroundColor: 'pink', borderRadius: 20}}
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
              buttonStyle={{backgroundColor: 'pink', borderRadius: 20}}
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
              buttonStyle={{backgroundColor: 'pink', borderRadius: 20}}
                active={false}
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'black',
                }}
              />
            </Tab>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tab.Item的containerStyle属性 设置Tab.Item的containerStyle 设置选项卡容器样式 ">
          <TestCase itShould="containerStyle" tags={['C_API']}>
            <Tab
              titleStyle={{fontSize: 100, fontWeight: '500', color: '#222222'}}
              value={Math.ceil(index15 > -1 ? index15 : 0)}
              onChange={e => setIndex15(e)}
              indicatorStyle={{
                backgroundColor: 'pink',
                height: 5,
                borderRadius: 2.5,
              }}
              variant="default"
              style={{
                backgroundColor:
                  index15 == 0 ? 'yellow' : index15 == 1 ? 'red' : 'blue',
              }}
              dense={false}>
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: 'gray',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: 'white',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                active={false}
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: 'orange',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'black',
                }}
              />
            </Tab>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tab.Item的iconContainerStyle属性 设置Tab.Item的iconContainerStyle 设置icon图标的容器样式 ">
          <TestCase itShould="iconContainerStyle" tags={['C_API']}>
            <Tab
              titleStyle={{fontSize: 100, fontWeight: '500', color: '#222222'}}
              value={Math.ceil(index17 > -1 ? index17 : 0)}
              onChange={e => setIndex17(e)}
              indicatorStyle={{
                backgroundColor: 'pink',
                height: 5,
                borderRadius: 2.5,
              }}
              variant="default"
              style={{
                backgroundColor:
                  index17 == 0 ? 'yellow' : index17 == 1 ? 'red' : 'blue',
              }}
              dense={true}>
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: 'yellow',
                })}
                iconContainerStyle={active => ({
                  backgroundColor: active ? 'blue' : 'gray',
                  width: 100,
                  height: 100,
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                title="Custom"
                iconContainerStyle={active => ({
                  backgroundColor: active ? 'blue' : 'gray',
                  width: 100,
                  height: 100,
                })}
                containerStyle={active => ({
                  backgroundColor: 'white',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                active={false}
                iconContainerStyle={active => ({
                  backgroundColor: active ? 'blue' : 'gray',
                  width: 100,
                  height: 100,
                })}
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: 'orange',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'black',
                }}
              />
            </Tab>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tab.Item的titleStyle属性 设置Tab.Item的titleStyle 设置Tab.Item的文字样式 ">
          <TestCase itShould="titleStyle" tags={['C_API']}>
            <Tab
              titleStyle={{fontSize: 100, fontWeight: '500', color: '#222222'}}
              value={Math.ceil(index18 > -1 ? index18 : 0)}
              onChange={e => setIndex18(e)}
              indicatorStyle={{
                backgroundColor: 'pink',
                height: 5,
                borderRadius: 2.5,
              }}
              variant="default"
              style={{
                backgroundColor:
                  index18 == 0 ? 'yellow' : index18 == 1 ? 'red' : 'blue',
              }}
              dense={true}>
              <Tab.Item
                titleStyle={active => ({
                  fontSize: 28,
                  color: 'green',
                })}
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: 'yellow',
                })}
                iconContainerStyle={active => ({
                  backgroundColor: active ? 'blue' : 'gray',
                  width: 100,
                  height: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                })}
                title="Recent"
                icon={{name: 'calendar', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                title="Custom"
                iconContainerStyle={active => ({
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: active ? 'blue' : 'gray',
                  width: 100,
                  height: 100,
                })}
                containerStyle={active => ({
                  backgroundColor: 'white',
                  width: 115,
                })}
                titleStyle={active => ({
                  fontSize: 28,
                  color: 'green',
                })}
                icon={{name: 'heart', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                active={false}
                iconContainerStyle={active => ({
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: active ? 'blue' : 'gray',
                  width: 100,
                  height: 100,
                })}
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: 'orange',
                })}
                title="Cart"
                titleStyle={active => ({
                  fontSize: 28,
                  color: 'green',
                })}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'black',
                }}
              />
            </Tab>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tab.Item的disable属性  接收Button组件的disable属性 ">
          <TestCase itShould="设置Button组件的disable属性为true" tags={['C_API']}>
            <Tab
              titleStyle={{fontSize: 100, fontWeight: '500', color: '#222222'}}
              value={Math.ceil(index33 > -1 ? index33 : 0)}
              onChange={e => setIndex33(e)}
              indicatorStyle={{
                backgroundColor: 'pink',
                height: 5,
                borderRadius: 2.5,
              }}

              variant="default"
              style={{
                backgroundColor:
                  index33 == 0 ? 'yellow' : index33 == 1 ? 'red' : 'blue',
              }}
              dense={true}>
              <Tab.Item
              disabled={true}
                titleStyle={active => ({
                  fontSize: 28,
                  color: 'green',
                })}
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: 'yellow',
                })}
                iconContainerStyle={active => ({
                  backgroundColor: active ? 'blue' : 'gray',
                  width: 100,
                  height: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                })}
                title="Recent"
                icon={{name: 'calendar', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                title="Custom"
                disabled={true}
                iconContainerStyle={active => ({
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: active ? 'blue' : 'gray',
                  width: 100,
                  height: 100,
                })}
                containerStyle={active => ({
                  backgroundColor: 'white',
                  width: 115,
                })}
                titleStyle={active => ({
                  fontSize: 28,
                  color: 'green',
                })}
                icon={{name: 'heart', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                disabled={true}
                active={false}
                iconContainerStyle={active => ({
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: active ? 'blue' : 'gray',
                  width: 100,
                  height: 100,
                })}
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: 'orange',
                })}
                title="Cart"
                titleStyle={active => ({
                  fontSize: 28,
                  color: 'green',
                })}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'black',
                }}
              />
            </Tab>
          </TestCase>
          <TestCase itShould="设置Button组件的disable属性为false" tags={['C_API']}>
            <Tab
              titleStyle={{fontSize: 100, fontWeight: '500', color: '#222222'}}
              value={Math.ceil(index37 > -1 ? index37 : 0)}
              onChange={e => setIndex37(e)}
              indicatorStyle={{
                backgroundColor: 'pink',
                height: 5,
                borderRadius: 2.5,
              }}

              variant="default"
              style={{
                backgroundColor:
                  index37 == 0 ? 'yellow' : index37 == 1 ? 'red' : 'blue',
              }}
              dense={true}>
              <Tab.Item
                disabled={false}
                titleStyle={active => ({
                  fontSize: 28,
                  color: 'green',
                })}
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: 'yellow',
                })}
                iconContainerStyle={active => ({
                  backgroundColor: active ? 'blue' : 'gray',
                  width: 100,
                  height: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                })}
                title="Recent"
                icon={{name: 'calendar', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                title="Custom"
                disabled={false}
                iconContainerStyle={active => ({
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: active ? 'blue' : 'gray',
                  width: 100,
                  height: 100,
                })}
                containerStyle={active => ({
                  backgroundColor: 'white',
                  width: 115,
                })}
                titleStyle={active => ({
                  fontSize: 28,
                  color: 'green',
                })}
                icon={{name: 'heart', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                disabled={false}
                active={false}
                iconContainerStyle={active => ({
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: active ? 'blue' : 'gray',
                  width: 100,
                  height: 100,
                })}
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: 'orange',
                })}
                title="Cart"
                titleStyle={active => ({
                  fontSize: 28,
                  color: 'green',
                })}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'black',
                }}
              />
            </Tab>
          </TestCase>
        </TestSuite>
        <TestSuite name="Tab.Item的uppercase属性  接收Button组件的uppercase属性 ">
          <TestCase itShould="设置Button组件的uppercase属性" tags={['C_API']}>
            <Tab
              titleStyle={{fontSize: 100, fontWeight: '500', color: '#222222'}}
              value={Math.ceil(index34 > -1 ? index34 : 0)}
              onChange={e => setIndex34(e)}
              indicatorStyle={{
                backgroundColor: 'pink',
                height: 5,
                borderRadius: 2.5,
              }}

              variant="default"
              style={{
                backgroundColor:
                  index34 == 0 ? 'yellow' : index34 == 1 ? 'red' : 'blue',
              }}
              dense={true}>
              <Tab.Item
              uppercase
             
                titleStyle={active => ({
                  fontSize: 28,
                  color: 'green',
                })}
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: 'yellow',
                })}
                iconContainerStyle={active => ({
                  backgroundColor: active ? 'blue' : 'gray',
                  width: 100,
                  height: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                })}
                title="Recent"
                icon={{name: 'calendar', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                title="Custom"
                uppercase
                iconContainerStyle={active => ({
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: active ? 'blue' : 'gray',
                  width: 100,
                  height: 100,
                })}
                containerStyle={active => ({
                  backgroundColor: 'white',
                  width: 115,
                })}
                titleStyle={active => ({
                  fontSize: 28,
                  color: 'green',
                })}
                icon={{name: 'heart', type: 'font-awesome', color: 'black'}}
              />
              <Tab.Item
                  uppercase
                active={false}
                iconContainerStyle={active => ({
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: active ? 'blue' : 'gray',
                  width: 100,
                  height: 100,
                })}
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: 'orange',
                })}
                title="Cart"
                titleStyle={active => ({
                  fontSize: 28,
                  color: 'green',
                })}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'black',
                }}
              />
            </Tab>
          </TestCase>
        </TestSuite>
        <TestSuite name="TabView的animationConfig属性 设置animationConfig 配置动画时间和是否使用原生动画">
          <TestCase itShould="animationConfig" tags={['C_API']}>
            <Tab
              value={Math.ceil(index22 > -1 ? index22 : 0)}
              onChange={e => setIndex22(e)}
              indicatorStyle={{
                backgroundColor: 'white',
                height: 3,
              }}

              variant="primary"
              containerStyle={{justifyContent: 'space-around'}}
              buttonStyle={{backgroundColor: 'pink'}}
              dense={true}>
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'white',
                }}
              />
            </Tab>
          </TestCase>
          <TestCase itShould="TabView" tags={['C_API']}>
            <View style={{width: '100%', height: 200, overflow: 'hidden'}}>
              <TabView
                animationConfig={{
                  duration: 1000,
                  useNativeDriver: true,
                }}
                onSwipeStart={e => console.log(e)}
                value={index22}
                onChange={index22 => setIndex22(index22)}
                animationType="timing">
                <TabView.Item style={{backgroundColor: 'red', width: '100%'}}>
                  <ScrollView>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                  </ScrollView>
                </TabView.Item>
                <TabView.Item style={{backgroundColor: 'blue', width: '100%'}}>
                  <Text h1>Favorite 1</Text>
                </TabView.Item>
                <TabView.Item style={{backgroundColor: 'green', width: '100%'}}>
                  <Text h1>Cart 2${Math.random()}</Text>
                </TabView.Item>
              </TabView>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="TabView的animationType属性 设置animationType 配置动画类型">
          <TestCase itShould="animationType" tags={['C_API']}>
            <Tab
              value={Math.ceil(index23 > -1 ? index23 : 0)}
              onChange={e => setIndex23(e)}
              indicatorStyle={{
                backgroundColor: 'white',
                height: 3,
              }}

              variant="primary"
              containerStyle={{justifyContent: 'space-around'}}
              buttonStyle={{backgroundColor: 'pink'}}
              dense={true}>
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'white',
                }}
              />
            </Tab>
          </TestCase>
          <TestCase itShould="spring" tags={['C_API']}>
            <View style={{width: '100%', height: 200, overflow: 'hidden'}}>
              <TabView
                animationConfig={{
                  duration: 1000,
                  useNativeDriver: true,
                }}
                onSwipeStart={e => console.log(e)}
                value={index23}
                onChange={index => setIndex23(index)}
                animationType="spring">
                <TabView.Item style={{backgroundColor: 'red', width: '100%'}}>
                  <ScrollView>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                  </ScrollView>
                </TabView.Item>
                <TabView.Item style={{backgroundColor: 'blue', width: '100%'}}>
                  <Text h1>Favorite 1</Text>
                </TabView.Item>
                <TabView.Item style={{backgroundColor: 'green', width: '100%'}}>
                  <Text h1>Cart 2${Math.random()}</Text>
                </TabView.Item>
              </TabView>
            </View>
          </TestCase>
          <TestCase itShould="timing" tags={['C_API']}>
            <View style={{width: '100%', height: 200, overflow: 'hidden'}}>
              <TabView
                animationConfig={{
                  duration: 1000,
                  useNativeDriver: true,
                }}
                onSwipeStart={e => console.log(e)}
                value={index23}
                onChange={index => setIndex23(index)}
                animationType="timing">
                <TabView.Item style={{backgroundColor: 'red', width: '100%'}}>
                  <ScrollView>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                  </ScrollView>
                </TabView.Item>
                <TabView.Item style={{backgroundColor: 'blue', width: '100%'}}>
                  <Text h1>Favorite 1</Text>
                </TabView.Item>
                <TabView.Item style={{backgroundColor: 'green', width: '100%'}}>
                  <Text h1>Cart 2${Math.random()}</Text>
                </TabView.Item>
              </TabView>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="TabView的containerStyle属性 设置containerStyle TabView的容器样式 ">
          <TestCase itShould="containerStyle" tags={['C_API']}>
            <Tab
              value={Math.ceil(index24 > -1 ? index24 : 0)}
              onChange={e => setIndex24(e)}
              indicatorStyle={{
                backgroundColor: 'white',
                height: 3,
              }}

              variant="primary"
              containerStyle={{justifyContent: 'space-around'}}
              buttonStyle={{backgroundColor: 'pink'}}
              dense={true}>
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'white',
                }}
              />
            </Tab>
          </TestCase>
          <TestCase itShould="TabView" tags={['C_API']}>
            <View style={{width: '100%', height: 200, overflow: 'hidden'}}>
              <TabView
                containerStyle={{backgroundColor: 'black'}}
                animationConfig={{
                  duration: 1000,
                  useNativeDriver: true,
                }}
                onSwipeStart={e => console.log(e)}
                value={index24}
                onChange={index => setIndex24(index)}
                animationType="spring">
                <TabView.Item style={{width: '100%'}}>
                  <ScrollView>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                  </ScrollView>
                </TabView.Item>
                <TabView.Item>
                  <Text h1>Favorite 1</Text>
                </TabView.Item>
                <TabView.Item>
                  <Text h1>Cart 2${Math.random()}</Text>
                </TabView.Item>
              </TabView>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="TabView的disableSwipe属性 设置disableSwipe 后无法手动左右滑动 ">
          <TestCase itShould="disableSwipe" tags={['C_API']}>
            <Tab
              value={Math.ceil(index25 > -1 ? index25 : 0)}
              onChange={e => setIndex25(e)}
              indicatorStyle={{
                backgroundColor: 'white',
                height: 3,
              }}

              variant="primary"
              containerStyle={{justifyContent: 'space-around'}}
              buttonStyle={{backgroundColor: 'pink'}}
              dense={true}>
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'white',
                }}
              />
            </Tab>
          </TestCase>
          <TestCase itShould="TabView" tags={['C_API']}>
            <View style={{width: '100%', height: 200, overflow: 'hidden'}}>
              <TabView
                disableSwipe={true}
                containerStyle={{backgroundColor: 'black'}}
                animationConfig={{
                  duration: 0,
                  useNativeDriver: true,
                }}
                onSwipeStart={e => console.log(e)}
                value={index25}
                onChange={index => setIndex25(index)}
                animationType="spring">
                <TabView.Item style={{width: '100%'}}>
                  <ScrollView>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                  </ScrollView>
                </TabView.Item>
                <TabView.Item>
                  <Text h1>Favorite 1</Text>
                </TabView.Item>
                <TabView.Item>
                  <Text h1>Cart 2${Math.random()}</Text>
                </TabView.Item>
              </TabView>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="TabView的disableTransition属性 设置disableTransition 去掉滑动动画 ">
          <TestCase itShould="disableTransition" tags={['C_API']}>
            <Tab
              value={Math.ceil(index26 > -1 ? index26 : 0)}
              onChange={e => setIndex26(e)}
              indicatorStyle={{
                backgroundColor: 'white',
                height: 3,
              }}

              variant="primary"
              containerStyle={{justifyContent: 'space-around'}}
              buttonStyle={{backgroundColor: 'pink'}}
              dense={true}>
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'white',
                }}
              />
            </Tab>
          </TestCase>
          <TestCase itShould="TabView" tags={['C_API']}>
            <View style={{width: '100%', height: 200, overflow: 'hidden'}}>
              <TabView
                disableTransition={true}
                disableSwipe={true}
                containerStyle={{backgroundColor: 'black'}}
                animationConfig={{
                  duration: 10,
                  useNativeDriver: true,
                }}
                onSwipeStart={e => console.log(e)}
                value={index26}
                onChange={index => setIndex26(index)}
                animationType="spring">
                <TabView.Item style={{width: '100%'}}>
                  <ScrollView>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                  </ScrollView>
                </TabView.Item>
                <TabView.Item>
                  <Text h1>Favorite 1</Text>
                </TabView.Item>
                <TabView.Item>
                  <Text h1>Cart 2${Math.random()}</Text>
                </TabView.Item>
              </TabView>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="TabView的minSwipeRatio属性 设置minSwipeRatio 可以看到将要滚动的page的最小宽度值 ">
          <TestCase itShould="minSwipeRatio" tags={['C_API']}>
            <Tab
              value={Math.ceil(index27 > -1 ? index27 : 0)}
              onChange={e => setIndex27(e)}
              indicatorStyle={{
                backgroundColor: 'white',
                height: 3,
              }}

              variant="primary"
              containerStyle={{justifyContent: 'space-around'}}
              buttonStyle={{backgroundColor: 'pink'}}
              dense={true}>
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'white',
                }}
              />
            </Tab>
          </TestCase>
          <TestCase itShould="TabView" tags={['C_API']}>
            <View style={{width: '100%', height: 200, overflow: 'hidden'}}>
              <TabView
                minSwipeRatio={0.8}
                containerStyle={{backgroundColor: 'black'}}
                animationConfig={{
                  duration: 10,
                  useNativeDriver: true,
                }}
                onSwipeStart={e => console.log(e)}
                value={index27}
                onChange={index => setIndex27(index27)}
                animationType="spring">
                <TabView.Item style={{width: '100%'}}>
                  <ScrollView>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                  </ScrollView>
                </TabView.Item>
                <TabView.Item>
                  <Text h1>Favorite 1</Text>
                </TabView.Item>
                <TabView.Item>
                  <Text h1>Cart 2${Math.random()}</Text>
                </TabView.Item>
              </TabView>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="TabView的minSwipeSpeed属性 设置minSwipeSpeed 滚动的最小速度 ">
          <TestCase itShould="minSwipeRatio" tags={['C_API']}>
            <Tab
              value={Math.ceil(index28 > -1 ? index28 : 0)}
              onChange={e => setIndex28(e)}
              indicatorStyle={{
                backgroundColor: 'white',
                height: 3,
              }}

              variant="primary"
              containerStyle={{justifyContent: 'space-around'}}
              buttonStyle={{backgroundColor: 'pink'}}
              dense={true}>
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'white',
                }}
              />
            </Tab>
          </TestCase>
          <TestCase itShould="TabView" tags={['C_API']}>
            <View style={{width: '100%', height: 200, overflow: 'hidden'}}>
              <TabView
                // minSwipeRatio={80}
                minSwipeSpeed={10}
                containerStyle={{backgroundColor: 'black'}}
                animationConfig={{
                  duration: 10,
                  useNativeDriver: true,
                }}
                onSwipeStart={e => console.log(e)}
                value={index28}
                onChange={index => setIndex28(index)}
                animationType="spring">
                <TabView.Item style={{width: '100%'}}>
                  <ScrollView>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                  </ScrollView>
                </TabView.Item>
                <TabView.Item>
                  <Text h1>Favorite 1</Text>
                </TabView.Item>
                <TabView.Item>
                  <Text h1>Cart 2${Math.random()}</Text>
                </TabView.Item>
              </TabView>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="TabView的onChange属性 设置onChange page切换的时候触发 修改背景颜色 ">
          <TestCase itShould="onChange" tags={['C_API']}>
            <Tab
              value={Math.ceil(index29 > -1 ? index29 : 0)}
              onChange={e => setIndex29(e)}
              indicatorStyle={{
                backgroundColor: 'white',
                height: 3,
              }}

              variant="primary"
              containerStyle={{justifyContent: 'space-around'}}
              buttonStyle={{backgroundColor: 'pink'}}
              dense={true}>
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'white',
                }}
              />
            </Tab>
          </TestCase>
          <TestCase itShould="TabView" tags={['C_API']}>
            <View style={{width: '100%', height: 200, overflow: 'hidden'}}>
              <TabView
                // minSwipeRatio={80}
                minSwipeSpeed={10}
                containerStyle={{
                  backgroundColor:
                    index29 == 0 ? 'black' : index29 == 1 ? 'green' : 'red',
                }}
                animationConfig={{
                  duration: 10,
                  useNativeDriver: true,
                }}
                onSwipeStart={e => console.log(e)}
                value={index29}
                onChange={index => setIndex29(index)}
                animationType="spring">
                <TabView.Item style={{width: '100%'}}>
                  <ScrollView>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                  </ScrollView>
                </TabView.Item>
                <TabView.Item>
                  <Text h1>Favorite 1</Text>
                </TabView.Item>
                <TabView.Item>
                  <Text h1>Cart 2${Math.random()}</Text>
                </TabView.Item>
              </TabView>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="TabView的onSwipeStart属性 设置onSwipeStart page滚动的时候触发 ">
          <TestCase itShould="onSwipeStart" tags={['C_API']}>
            <Tab
              value={Math.ceil(index30 > -1 ? index30 : 0)}
              onChange={e => setIndex30(e)}
              indicatorStyle={{
                backgroundColor: 'white',
                height: 3,
              }}

              variant="primary"
              containerStyle={{justifyContent: 'space-around'}}
              buttonStyle={{backgroundColor: 'pink'}}
              dense={true}>
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'white',
                }}
              />
            </Tab>
          </TestCase>
          <TestCase itShould="TabView" tags={['C_API']}>
            <View style={{width: '100%', height: 200, overflow: 'hidden'}}>
              <TabView
                // minSwipeRatio={80}
                minSwipeSpeed={10}
                containerStyle={{
                  backgroundColor:
                    index30 == 0 ? 'black' : index30 == 1 ? 'green' : 'red',
                }}
                animationConfig={{
                  duration: 10,
                  useNativeDriver: true,
                }}
                onSwipeStart={e => {
                  console.log('1111111111111111',e)
                  setDirection(e)
                } }
                value={index30}
                onChange={index => setIndex30(index)}
                animationType="spring">
                <TabView.Item style={{width: '100%'}}>
                  <ScrollView>
                   <Text>滚动方向：{direction}</Text>
                  </ScrollView>
                </TabView.Item>
                <TabView.Item>
                  <Text h1>滚动方向：{direction}</Text>
                </TabView.Item>
                <TabView.Item>
                  <Text h1>滚动方向：{direction}</Text>
                </TabView.Item>
              </TabView>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="TabView的tabItemContainerStyle属性 设置TabView容器的样式 ">
          <TestCase itShould="tabItemContainerStyle" tags={['C_API']}>
            <Tab
              value={Math.ceil(index31 > -1 ? index31 : 0)}
              onChange={e => setIndex31(e)}
              indicatorStyle={{
                backgroundColor: 'white',
                height: 3,
              }}

              variant="primary"
              containerStyle={{justifyContent: 'space-around'}}
              buttonStyle={{backgroundColor: 'pink'}}
              dense={true}>
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'white',
                }}
              />
            </Tab>
          </TestCase>
          <TestCase itShould="TabView" tags={['C_API']}>
            <View style={{width: '100%', height: 200, overflow: 'hidden'}}>
              <TabView
                tabItemContainerStyle={{backgroundColor: 'yellow'}}
                minSwipeSpeed={10}
                containerStyle={{
                  backgroundColor:
                    index31 == 0 ? 'black' : index31 == 1 ? 'green' : 'red',
                }}
                animationConfig={{
                  duration: 10,
                  useNativeDriver: true,
                }}
                onSwipeStart={e => console.log(e)}
                value={index31}
                onChange={index => setIndex31(index)}
                animationType="spring">
                <TabView.Item style={{width: '100%'}}>
                  <ScrollView>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                  </ScrollView>
                </TabView.Item>
                <TabView.Item>
                  <Text h1>Favorite 1</Text>
                </TabView.Item>
                <TabView.Item>
                  <Text h1>Cart 2${Math.random()}</Text>
                </TabView.Item>
              </TabView>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="TabView的value属性  滚动到哪个TabView的值 ">
          <TestCase itShould="value" tags={['C_API']}>
            <Tab
              value={Math.ceil(index32 > -1 ? index32 : 0)}
              onChange={e => setIndex32(e)}
              indicatorStyle={{
                backgroundColor: 'white',
                height: 3,
              }}

              variant="primary"
              containerStyle={{justifyContent: 'space-around'}}
              buttonStyle={{backgroundColor: 'pink'}}
              dense={true}>
              <Tab.Item
                containerStyle={active => ({
                  width: 113,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'calendar', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                title="Custom"
                containerStyle={active => ({
                  backgroundColor: active ? '#208990' : 'transparent',
                  width: 115,
                })}
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'font-awesome', color: 'white'}}
              />
              <Tab.Item
                containerStyle={active => ({
                  width: 118,
                  backgroundColor: active ? '#208990' : 'transparent',
                })}
                title="Cart"
                titleStyle={{fontSize: 12}}
                icon={{
                  name: 'shopping-cart',
                  type: 'font-awesome',
                  color: 'white',
                }}
              />
            </Tab>
          </TestCase>
          <TestCase itShould="TabView" tags={['C_API']}>
            <View style={{width: '100%', height: 200, overflow: 'hidden'}}>
              <TabView
                tabItemContainerStyle={{backgroundColor: 'yellow'}}
                minSwipeSpeed={10}
                containerStyle={{
                  backgroundColor:
                    index32 == 0 ? 'black' : index32 == 1 ? 'green' : 'red',
                }}
                animationConfig={{
                  duration: 10,
                  useNativeDriver: true,
                }}
                onSwipeStart={e => console.log(e)}
                value={index32}
                onChange={index => setIndex32(index)}
                animationType="spring">
                <TabView.Item style={{width: '100%'}}>
                  <ScrollView>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                  </ScrollView>
                </TabView.Item>
                <TabView.Item>
                  <Text h1>Favorite 1</Text>
                </TabView.Item>
                <TabView.Item>
                  <Text h1>Cart 2$0.9823</Text>
                </TabView.Item>
              </TabView>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="TabView.Item的style属性  接收React-native 的原生View组件的style ">
          <TestCase itShould="设置原生View组件的style" tags={['C_API']}>
            <View style={{width: '100%', height: 200, overflow: 'hidden'}}>
              <TabView
                tabItemContainerStyle={{backgroundColor: 'yellow'}}
                minSwipeSpeed={10}
                containerStyle={{
                  backgroundColor:
                    index35 == 0 ? 'black' : index35 == 1 ? 'green' : 'red',
                }}
                animationConfig={{
                  duration: 10,
                  useNativeDriver: true,
                }}
                onSwipeStart={e => console.log(e)}
                value={index35}
                onChange={index => setIndex35(index)}
                animationType="spring">
                <TabView.Item  style={{width: '100%',backgroundColor:'blue',borderRadius:20}}>
                  <ScrollView>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                  </ScrollView>
                </TabView.Item>
                <TabView.Item style={{width: '100%',backgroundColor:'blue',borderRadius:20}}>
                  <Text h1>Favorite 1</Text>
                </TabView.Item>
                <TabView.Item style={{width: '100%',backgroundColor:'blue',borderRadius:20}}>
                  <Text h1>Cart 2${Math.random()}</Text>
                </TabView.Item>
              </TabView>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="TabView.Item的onLayout属性  接收React-native 的原生View组件的onLayout ">
          <TestCase itShould="设置原生View组件的onLayout" tags={['C_API']}>
            <View style={{width: dimensions.width, height: dimensions.height, overflow: 'hidden'}}>
              <TabView
                
                tabItemContainerStyle={{backgroundColor: 'yellow'}}
                minSwipeSpeed={10}
                containerStyle={{
                  backgroundColor:
                    index36 == 0 ? 'black' : index36 == 1 ? 'green' : 'red',
                }}
                animationConfig={{
                  duration: 10,
                  useNativeDriver: true,
                }}
                onSwipeStart={e => console.log(e)}
                value={index36}
                onChange={index => setIndex36(index)}
                animationType="spring">
                <TabView.Item  onLayout={(event) => {
                const { width, height } = event.nativeEvent.layout;
                const layoutString = `width: ${width}, height: ${height}`;
                setValue2(layoutString);
                console.log('Layout:', layoutString);
              }} testID='TabView.Item1' style={{width: '100%',backgroundColor:'red'}}>
                  <ScrollView>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                    <Text h1>Recent 0</Text>
                  </ScrollView>
                </TabView.Item>
                <TabView.Item testID='TabView.Item2' style={{width: '100%',backgroundColor:'green'}}>
                  <Text h1>Favorite 1</Text>
                </TabView.Item>
                <TabView.Item testID='TabView.Item3' style={{width: '100%',backgroundColor:'black'}}>
                  <Text h1>Cart 2${Math.random()}</Text>
                </TabView.Item>
              </TabView>
            </View>

            <View style={{ width: 200, marginLeft: 20, paddingBottom: 20, marginTop: 20 }}>
              <Text style={{ color: 'black' }}>onLayout回调方法显示组件的宽高</Text>
              <Text style={{ color: 'black' }}>
                {value2}
              </Text>
              <Button onPress={()=>{
                if (dimensions.height == 100 ) {
                  setDimensions({ width: '100%', height: 200 })
                }else{
                  setDimensions({ width: '100%', height: 100 })
                }       
              }}>修改组件的size</Button>
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};
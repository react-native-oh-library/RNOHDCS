import React from 'react';
import { Tab, Text, TabView } from '@rneui/themed';
import { ScrollView, View } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino'

export default () => {
  const [index, setIndex] = React.useState(0);

  console.log('tabs re render');
  return (
    <Tester>
      <TestSuite name='Tab'>
        <TestCase itShould='Tab' tags={['C_API']}>
          <Tab
            value={Math.ceil(index > -1 ? index : 0)}
            onChange={(e) => setIndex(e)}
            indicatorStyle={{
              backgroundColor: 'white',
              height: 3,
            }}
            scrollable
            variant="primary"
          >
            <Tab.Item
              containerStyle={{
                width: 180,
              }}
              title="Recent"
              titleStyle={{ fontSize: 12 }}
              icon={{ name: 'calendar', type: 'font-awesome', color: 'white' }}
            />
            <Tab.Item
              title="Custom"
              containerStyle={(active) => ({
                backgroundColor: active ? '#208990' : 'transparent',
                width: 180,
              })}
              titleStyle={{ fontSize: 12 }}
              icon={{ name: 'heart', type: 'font-awesome', color: 'white' }}
            />
            <Tab.Item
              containerStyle={{
                width: 180,
              }}
              title="Cart"
              titleStyle={{ fontSize: 12 }}
              icon={{ name: 'shopping-cart', type: 'font-awesome', color: 'white' }}
            />
            <Tab.Item
              containerStyle={{
                width: 180,
              }}
              title="Example tab 1"
              titleStyle={{ fontSize: 12 }}
              icon={{ name: 'shopping-cart', type: 'font-awesome', color: 'white' }}
            />
            <Tab.Item
              containerStyle={{
                width: 180,
              }}
              title="Example tab 2"
              titleStyle={{ fontSize: 12 }}
              icon={{ name: 'shopping-cart', type: 'font-awesome', color: 'white' }}
            />
            <Tab.Item
              containerStyle={{
                width: 180,
              }}
              title="Example tab 3"
              titleStyle={{ fontSize: 12 }}
              icon={{ name: 'shopping-cart', type: 'font-awesome', color: 'white' }}
            />
          </Tab>
        </TestCase>
        <TestCase itShould='TabView' tags={['C_API']}>
          <View style={{width:'100%', height:600, overflow:'hidden'}}>
            <TabView
              onSwipeStart={(e) => console.log(e)}
              value={index}
              onChange={setIndex}
              animationType="spring"
            >
              <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
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
              <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
                <Text h1>Favorite 1</Text>
              </TabView.Item>
              <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
                <Text h1>Cart 2${Math.random()}</Text>
              </TabView.Item>
              <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
                <Text h1>Example 3</Text>
              </TabView.Item>
              <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
                <Text h1>Example 4</Text>
              </TabView.Item>
              <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
                <Text h1>Example 5</Text>
              </TabView.Item>
            </TabView>
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
};

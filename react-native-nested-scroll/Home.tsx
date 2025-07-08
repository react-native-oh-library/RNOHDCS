import React from 'react';
import {useNavigator, withNavigationItem} from 'hybrid-navigation';

import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NestedScrollFlatList from './NestedScrollFlatList/index';
import NestedScrollTabView from './NestedScrollTabView/index';
import NestedScrollView from './NestedScrollParallaxHeader/index';
import NestedScrollPagerViewStickyHeader from './NestedScrollPagerViewStickyHeader';
import nestedScrollStickyHeightBeginIndex from './NestedScrollFlatList/nestedScrollStickyHeightBeginIndex';
const Stack = createNativeStackNavigator();

class Entrance extends React.Component {
    onPress1 = () => {
        this.props.navigation.navigate('NestedScrollFlatList');
    }
    onPress2 = () => {
        this.props.navigation.navigate('NestedScrollTabView');
    }
    onPress3 = () => {
        this.props.navigation.navigate('NestedScrollView');
    }
    onPress4 = () => {
        this.props.navigation.navigate('NestedScrollPagerViewStickyHeader');
    }
    onPress5 = () => {
        this.props.navigation.navigate('nestedScrollStickyHeightBeginIndex');
    }
 

    render() {
        return (
            <View style={{padding:14}}>
                <View style={{height:50}}>
                    <Button title="NestedScrollFlatList"  onPress={this.onPress1}></Button>
                </View>
                <View style={{height:50,marginTop:12}}>
                    <Button title="NestedScrollTabView"  onPress={this.onPress2}></Button>
                </View>
                <View style={{height:50,marginTop:12}}>
                    <Button title="NestedScrollView"  onPress={this.onPress3}></Button>
                </View>
                <View style={{height:50,marginTop:12}}>
                    <Button title="NestedScrollPagerViewStickyHeader"  onPress={this.onPress4}></Button>
                </View>
                <View style={{height:50,marginTop:12}}>
                    <Button title="nestedScrollStickyHeightBeginIndex"  onPress={this.onPress5}></Button>
                </View>
               
            </View>
        );
    }
};

class NestScrollApp extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="nestedScroll组件测试">
                    <Stack.Screen name="nestedScroll测试入口" component={Entrance} />
                    <Stack.Screen name="NestedScrollFlatList" component={NestedScrollFlatList} />
                    <Stack.Screen name="NestedScrollTabView" component={NestedScrollTabView} />
                    <Stack.Screen name="NestedScrollView" component={NestedScrollView} />
                    <Stack.Screen name="NestedScrollPagerViewStickyHeader" component={NestedScrollPagerViewStickyHeader} />
                    <Stack.Screen name="indexStickyHeightBeginIndex" component={nestedScrollStickyHeightBeginIndex} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default {
  displayName: "NestedScroll",
  framework: "React",
  category: "Map",
  title: "Nested_scroll",
  documentationURL: "",
  description: "滚动组件",
  examples: [
    {
      title: "NestedScroll",
      render: function (): any {
        return <NestScrollApp />;
      },
    },
  ],
};
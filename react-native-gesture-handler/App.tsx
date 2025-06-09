import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GestureDetector from './GestureDetector';
import DrawerLayout from './DrawerLayout';
import Swipeable from './Swipeable';
import GestureHandlers from './GestureHandlers';
import Buttons from './Buttons';
import Touchables from './Touchables';
import DDGestureDemo from './DDGestureDemo';

const Stack = createStackNavigator();

class Home extends React.Component {
    onPress1 = () => {
        this.props.navigation.navigate('Gesture detector');
    }
    onPress2 = () => {
        this.props.navigation.navigate('Touchables');
    }
    onPress3 = () => {
        this.props.navigation.navigate('Buttons');
    }
    onPress4 = () => {
        this.props.navigation.navigate('DrawerLayout');
    }
    onPress5 = () => {
        this.props.navigation.navigate('Swipeable');
    }
    onPress6 = () => {
        this.props.navigation.navigate('GestureHandlers');
    }
    onPress7 = () => {
        this.props.navigation.navigate('滴滴出行');
    }


    render() {
        return (
            <View style={{padding:14}}>
                <View style={{height:50}}>
                    <Button title="Gesture detector"  onPress={this.onPress1}></Button>
                </View>
                <View style={{height:50,marginTop:12}}>
                    <Button title="Touchables"  onPress={this.onPress2}></Button>
                </View>
                <View style={{height:50,marginTop:12}}>
                    <Button title="Buttons"  onPress={this.onPress3}></Button>
                </View>
                <View style={{height:50,marginTop:12}}>
                    <Button title="DrawerLayout"  onPress={this.onPress4}></Button>
                </View>
                <View style={{height:50,marginTop:12}}>
                    <Button title="Swipeable"  onPress={this.onPress5}></Button>
                </View>
                <View style={{height:50,marginTop:12}}>
                    <Button title="GestureHandlers"  onPress={this.onPress6}></Button>
                </View>
                <View style={{height:50,marginTop:12}}>
                    <Button title="滴滴出行"  onPress={this.onPress7}></Button>
                </View>
            </View>
        );
    }
};

class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="react-native-gesture-handler 组件测试">
                    <Stack.Screen name="Gesture-handler 组件测试" component={Home} />
                    <Stack.Screen name="Gesture detector" component={GestureDetector} />
                    <Stack.Screen name="DrawerLayout" component={DrawerLayout} />
                    <Stack.Screen name="Swipeable" component={Swipeable} />
                    <Stack.Screen name="GestureHandlers" component={GestureHandlers} />
                    <Stack.Screen name="Buttons" component={Buttons} />
                    <Stack.Screen name="Touchables" component={Touchables} />
                    <Stack.Screen name="滴滴出行" component={DDGestureDemo} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;
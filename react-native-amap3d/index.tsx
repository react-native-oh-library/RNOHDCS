import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AMapDemo from './AMapDemo';
import AMapDemo2 from './AMapDemoType2';
import AMapDemo3 from './AMapDemoType3';
import AMapDemo4 from './AMapDemoType4';


const Stack = createStackNavigator();

class Entrance extends React.Component {
    onPress1 = () => {
        this.props.navigation.navigate('AMapDemo');
    }
    onPress2 = () => {
        this.props.navigation.navigate('AMapDemo2');
    }
    onPress3 = () => {
        this.props.navigation.navigate('AMapDemo3');
    }
    onPress4 = () => {
        this.props.navigation.navigate('AMapDemo4');
    }


    render() {
        return (
            <View style={{padding:14}}>
                <View style={{height:50}}>
                    <Button title="Amap3dDemo"  onPress={this.onPress1}></Button>
                </View>
                <View style={{height:50,marginTop:12}}>
                    <Button title="Amap3dDemo2"  onPress={this.onPress2}></Button>
                </View>
                <View style={{height:50,marginTop:12}}>
                    <Button title="Amap3dDemo3"  onPress={this.onPress3}></Button>
                </View>
                <View style={{height:50,marginTop:12}}>
                    <Button title="Amap3dDemo4"  onPress={this.onPress4}></Button>
                </View>
            </View>
        );
    }
};

class AMapApp extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="amap3d组件测试">
                    <Stack.Screen name="amap3d测试入口" component={Entrance} />
                    <Stack.Screen name="AMapDemo" component={AMapDemo} />
                    <Stack.Screen name="AMapDemo2" component={AMapDemo2} />
                    <Stack.Screen name="AMapDemo3" component={AMapDemo3} />
                    <Stack.Screen name="AMapDemo4" component={AMapDemo4} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default AMapApp;



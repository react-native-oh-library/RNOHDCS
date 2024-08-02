import { Header, getHeaderTitle } from "@react-navigation/elements";
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from 'react-native';


const Stack = createStackNavigator();

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

export function NavigationElements() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    header: ({ options, route }) => (
                        <Header {...options} title={getHeaderTitle(options, route.name)} headerStyle={{ backgroundColor: 'red' }} />
                    ),
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationElements;
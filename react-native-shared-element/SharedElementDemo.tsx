import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';
import {
  SharedElement,
  SharedElementNode,
  SharedElementTransition,
  nodeFromRef,
} from 'react-native-shared-element';

const Home = ({navigation}) => {
  const startAncestor = useRef<SharedElementNode | null>(null);
  const startNode = useRef<SharedElementNode | null>(null);

  return (
    <View
      style={styles.container}
      ref={ref => (startAncestor.current = nodeFromRef(ref))}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Detail', {
            itemId: 1,
            startAncestor: startAncestor,
            startNode: startNode,
          })
        }>
        <SharedElement id="item.1" onNode={node => (startNode.current = node)}>
          <Image
            source={require('placeholder2000x2000.jpg')}
            style={styles.image}
          />
        </SharedElement>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

const Detail = ({route}) => {
  const {itemId, startAnc, startN} = route.params;

  const startAncestor = useRef<SharedElementNode | null>(startAnc);
  const startNode = useRef<SharedElementNode | null>(startN);
  const endAncestor = useRef<SharedElementNode | null>(null); // 正确设置 useRef 的类型
  const endNode = useRef<SharedElementNode | null>(null); // 正确设置 useRef 的类型
  const position = useRef(new Animated.Value(100)).current;

  return (
    <View
      style={styles.container}
      ref={ref => (endAncestor.current = nodeFromRef(ref))}>
      <SharedElement
        id={`item.${itemId}`}
        onNode={node => (endNode.current = node)}>
        <Image
          source={require('placeholder2000x2000.jpg')}
          style={styles.image}
        />
      </SharedElement>

      <View style={StyleSheet.absoluteFill}>
        <SharedElementTransition
          start={{
            node: startNode.current,
            ancestor: startAncestor.current,
          }}
          end={{
            node: endNode.current,
            ancestor: endAncestor.current,
          }}
          position={position}
          animation="fade"
          resize="auto"
          align="auto"
        />
      </View>

      {/* <SharedElementTransition
        sharedElementId={`item.${itemId}`}
        transitionDuration={300}
        start={{
          node: startNode.current,
          ancestor: startAncestor.current,
        }}
        end={{
          node: endNode.current,
          ancestor: endAncestor.current,
        }}
        // 可以添加更多属性来调整转场效果
      >
        <SharedElement id={`item.${itemId}`}>
          <Image
            source={require('../assets/placeholder2000x2000.jpg')}
            style={styles.image}
          />
        </SharedElement>
      </SharedElementTransition> */}
    </View>
  );
};

const Stack = createStackNavigator();

const SharedEDemo1 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SharedEDemo1;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  Platform,
  Easing,
  View,
  Dimensions,
} from 'react-native';
import SortableList from 'react-native-sortable-list';

const window = Dimensions.get('window');

const data = {
  0: {
    image: require('../assets/1.jpg'),
    text: 'Chloe',
  },
  1: {
    image: require('../assets/2.jpg'),
    text: 'Jasper',
  },
  2: {
    image: require('../assets/3.jpg'),
    text: 'Pepper',
  },
  3: {
    image: require('../assets/4.jpg'),
    text: 'Oscar',
  },
  4: {
    image: require('../assets/5.jpg'),
    text: 'Dusty',
  },
  5: {
    image: require('../assets/6.jpg'),
    text: 'Spooky',
  },
  6: {
    image: require('../assets/7.jpg'),
    text: 'Kiki',
  },
  7: {
    image: require('../assets/8.jpg'),
    text: 'Smokey',
  },
  8: {
    image: require('../assets/9.jpg'),
    text: 'Gizmo',
  },
  9: {
    image: require('../assets/10.jpg'),
    text: 'Kitty',
  },
};

function Row(props) {
  const {active, data} = props;

  const activeAnim = useRef(new Animated.Value(0));
  const style = useMemo(
    () => ({
      ...Platform.select({
        ios: {
          transform: [
            {
              scale: activeAnim.current.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.07],
              }),
            },
          ],
          shadowRadius: activeAnim.current.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 10],
          }),
        },

        android: {
          transform: [
            {
              scale: activeAnim.current.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.07],
              }),
            },
          ],
          elevation: activeAnim.current.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 6],
          }),
        },
        harmony: {
          transform: [
            {
              scale: activeAnim.current.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.07],
              }),
            },
          ],
          elevation: activeAnim.current.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 6],
          }),
        },
      }),
    }),
    [],
  );
  useEffect(() => {
    Animated.timing(activeAnim.current, {
      duration: 300,
      easing: Easing.bounce,
      toValue: Number(active),
      useNativeDriver: true,
    }).start();
  }, [active]);

  return (
    <Animated.View style={[styles.row, style]}>
      <Image source={data.image} style={[styles.image]} />
      <Text style={styles.text}>{data.text}</Text>
    </Animated.View>
  );
}

const App = () => {
  const renderRow = useCallback(({data, active}) => {
    return <Row data={data} active={active} />;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Sortable List</Text>
      <SortableList
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
        data={data}
        renderRow={renderRow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
      harmony: {
        paddingTop: 20,
      },
    }),
  },
  title: {
    fontSize: 20,
    paddingVertical: 20,
    color: '#999999',
  },
  list: {
    flex: 1,
  },
  contentContainer: {
    width: window.width,
    ...Platform.select({
      ios: {
        paddingHorizontal: 30,
      },
      android: {
        paddingHorizontal: 0,
      },
      harmony: {
        paddingHorizontal: 0,
      },
    }),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    height: 80,
    flex: 1,
    marginTop: 7,
    marginBottom: 12,
    borderRadius: 4,
    ...Platform.select({
      ios: {
        width: window.width - 30 * 2,
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOpacity: 1,
        shadowOffset: {height: 2, width: 2},
        shadowRadius: 2,
      },
      android: {
        width: window.width - 30 * 2,
        elevation: 0,
        marginHorizontal: 30,
      },
      harmony: {
        width: window.width - 30 * 2,
        elevation: 0,
        marginHorizontal: 30,
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOpacity: 1,
        shadowOffset: {height: 2, width: 2},
        shadowRadius: 2,
      },
    }),
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 30,
    borderRadius: 25,
  },
  text: {
    fontSize: 24,
    color: '#222222',
  },
});

export default App;

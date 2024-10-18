/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';
import SortableList from 'react-native-sortable-list';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

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
};

export default function ShowsHorizontalScrollIndicator1() {
  const renderRow = useCallback(({data, active}) => {
    return <Row data={data} active={active} />;
  }, []);

  return (
    <Tester>
      <ScrollView>
        <TestSuite name="Test showsHorizontalScrollIndicator">
          <TestCase itShould={'Test showsHorizontalScrollIndicator={true}'}>
            <SortableList
              horizontal
              style={styles.list}
              contentContainerStyle={styles.contentContainer}
              data={data}
              renderRow={renderRow}
              showsHorizontalScrollIndicator={true}
            />
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
}

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
                outputRange: [1, 1.1],
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
      <Image source={data.image} style={styles.image} />
      <Text style={styles.text}>{data.text}</Text>
    </Animated.View>
  );
}

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
    height: 210,
    width: window.width-50,
  },

  contentContainer: {
    ...Platform.select({
      ios: {
        paddingVertical: 30,
      },

      android: {
        paddingVertical: 0,
      },
    }),
  },

  row: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    width: 110,
    height: 150,
    marginHorizontal: 10,
    borderRadius: 4,

    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOpacity: 1,
        shadowOffset: {height: 2, width: 2},
        shadowRadius: 2,
      },
      android: {
        elevation: 0,
        marginHorizontal: 30,
      },
      harmony: {
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
    marginBottom: 15,
    borderRadius: 25,
  },

  text: {
    fontSize: 18,
    color: '#222222',
  },
});

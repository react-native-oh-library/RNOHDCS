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

const SortableStyleDemo = () => {
  const renderRow = useCallback(({data, active}) => {
    return <Row data={data} active={active} />;
  }, []);

  return (
    <Tester>
      <TestSuite name="Test style data renderRow">
        <TestCase
          itShould={`style={flex: 1,backgroundColor: '#AAE'}, data:{0: {image: require('../assets/1.jpg'),text: 'Chloe',}, 1: {image: require('../assets/2.jpg'),text: 'Jasper',},2: {image: require('../assets/3.jpg'),text: 'Pepper',},} renderRow:useCallback(({data, active}) => { return <Row data={data} active={active} />;}, [])`}>
          <View style={{height: 400}}>
            <SortableList
              style={styles.list}
              // contentContainerStyle={styles.contentContainer}
              data={data}
              renderRow={renderRow}
            />
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#AAE',
  },
  contentContainer: {
    width: window.width-100,
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
    marginTop: 10,
    ...Platform.select({
      ios: {
        width: window.width - 60 * 2,
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOpacity: 1,
        shadowOffset: {height: 2, width: 2},
        shadowRadius: 2,
      },
      android: {
        width: window.width - 60 * 2,
        elevation: 0,
        marginHorizontal: 30,
      },
      harmony: {
        width: window.width - 60 * 2,
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
  },
  text: {
    fontSize: 24,
    color: '#222222',
  },
});

export default SortableStyleDemo;

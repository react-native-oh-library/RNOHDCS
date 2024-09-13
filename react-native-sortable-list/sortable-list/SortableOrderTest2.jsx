/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
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
    text: 'Chloe （0）',
  },
  1: {
    image: require('../assets/2.jpg'),
    text: 'Jasper （1）',
  },
  2: {
    image: require('../assets/3.jpg'),
    text: 'Pepper （2）',
  },
  3: {
    image: require('../assets/4.jpg'),
    text: 'Oscar （3）',
  },
  4: {
    image: require('../assets/5.jpg'),
    text: 'Dusty （4）',
  },
  5: {
    image: require('../assets/6.jpg'),
    text: 'Spooky （5）',
  },
  6: {
    image: require('../assets/7.jpg'),
    text: 'Kiki （6）',
  },
  7: {
    image: require('../assets/8.jpg'),
    text: 'Smokey （7）',
  },
  8: {
    image: require('../assets/9.jpg'),
    text: 'Gizmo （8）',
  },
  9: {
    image: require('../assets/10.jpg'),
    text: 'Kitty （9）',
  },
};

export default function SortableOrderTest2() {
  const [myOrder, setMyOrder] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const renderRow = useCallback(({data, active}) => {
    return <Row data={data} active={active} />;
  }, []);

  return (
    <Tester>
      <TestSuite name="Test order onChangeOrder">
        <TestCase
          itShould={
            `Test onChangeOrder={(nextOrder) => {
                setMyOrder(nextOrder)
              }} 
              order={myOrder}
              myOrder: ` + myOrder
          }>
          <View style={{height: 600}}>
            <SortableList
              style={styles.list}
              data={data}
              renderRow={renderRow}
              order={myOrder}
              onChangeOrder={nextOrder => {
                setMyOrder(nextOrder);
              }}
            />
          </View>
        </TestCase>
      </TestSuite>
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
  list: {
    flex: 1,
    backgroundColor: '#AAE',
  },
  contentContainer: {
    width: window.width - 100,
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
    marginRight: 30,
  },
  text: {
    fontSize: 24,
    color: '#222222',
  },
});

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
  TextInput,
  Button,
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

export default function SortableKeyboard2() {
  const [myOrder, setMyOrder] = useState([5, 6, 7, 8, 9, 0, 1, 2, 3, 4]);

  const renderRow = useCallback(({data, active}) => {
    return <Row data={data} active={active} />;
  }, []);

  return (
    <Tester>
      <TestSuite name="Test keyboardShouldPersistTaps">
        <TestCase itShould={`Test keyboardShouldPersistTaps= handled `}>
          <View style={{height: 600}}>
            <SortableList
              style={styles.list}
              data={data}
              renderRow={renderRow}
              keyboardShouldPersistTaps={'handled'}
            />
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
}

function Row(props) {
  const [imageClickTimes, setImageClickTimes] = useState(0);
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
      <Text>已被点击 {imageClickTimes} 次</Text>
      <Button
        title={'点我'}
        onPress={() => {
          setImageClickTimes(imageClickTimes + 1);
        }}></Button>
      <Text style={styles.text}>{data.text}</Text>
      <View
        style={{
          borderBottomWidth: 1,
        }}>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          width={20}
          maxLength={40}
        />
      </View>
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
    height: 120,
    flex: 1,
    marginTop: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 30,
  },
  text: {
    fontSize: 16,
    color: '#222222',
  },
});

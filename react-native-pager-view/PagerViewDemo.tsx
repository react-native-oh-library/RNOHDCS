import React from 'react';
import PagerView from 'react-native-pager-view';
import {View, Text, TouchableOpacity} from 'react-native';

const PagerViewTest = () => {
  const pagerRef = React.useRef<PagerView>(null);
  const [index, setIndex] = React.useState(0);
  return (
    <PagerView
      style={{
        flex: 1,
        width: '100%',
        height: 200,
        margin: 10,
        backgroundColor: '#6D8585',
      }}
      ref={pagerRef}
      initialPage={0}
      layoutDirection={'rtl'}
      keyboardDismissMode={'on-drag'}
      onPageSelected={(e: any) => {
        setIndex(e.nativeEvent.position);
        // pagerRef.current?.setPageWithoutAnimation(2);
        pagerRef.current?.setScrollEnabled(true);
      }}>
      <View
        style={{
          alignItems: 'center',
          padding: 10,
          margin: 10,
          width: '80%',
          height: '80%',
          backgroundColor: '#E6713E',
        }}
        key="1">
        <TouchableOpacity onPress={()=>{
          pagerRef.current?.setScrollEnabled(true);
        }}>
          <Text
            style={{
              width: '100%',
              height: 100,
              fontWeight: 'bold',
            }}>
            pagerRef.current?.setScrollEnabled(true);
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          pagerRef.current?.setScrollEnabled(false);
        }}>
          <Text
            style={{
              width: '100%',
              height: 100,
              fontWeight: 'bold',
            }}>
            pagerRef.current?.setScrollEnabled(false);
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            width: '100%',
            height: 100,
            fontWeight: 'bold',
          }}>
          First page:({index})
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          padding: 10,
          margin: 10,
          width: '80%',
          height: '80%',
          backgroundColor: '#7A8CF2',
        }}
        key="2">
        <Text
          style={{
            width: '100%',
            height: '100%',
            fontWeight: 'bold',
          }}>
          Second page:({index})
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          padding: 10,
          margin: 10,
          width: '80%',
          height: '80%',
          backgroundColor: '#F28CE9',
        }}
        key="3">
        <Text
          style={{
            width: '100%',
            height: '100%',
            fontWeight: 'bold',
          }}>
          Third page:({index})
        </Text>
      </View>
    </PagerView>
  );
};

export default PagerViewTest;

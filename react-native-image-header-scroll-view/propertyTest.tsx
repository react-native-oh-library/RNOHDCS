import {View, TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';
import {TestSuite} from '@rnoh/testerino';
import React, {useState} from 'react';
import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import {TestCase} from './testCase';

export function ImageHeaderPropertyTest() {
  const [bounces, setBounces] = useState(true);
  const [fadeOutForeground, setFadeOutForeground] = useState(false);
  const [disableHeaderGrow, setDisableHeaderGrow] = useState(true);
  const [maxHeight, setMaxHeight] = useState(200);
  const [minHeight, setMinHeight] = useState(88);
  const [minOverlayOpacity, setMinOverlayOpacity] = useState(0);
  const [maxOverlayOpacity, setMaxOverlayOpacity] = useState(0.3);
  const [overlayColor, setOverlayColor] = useState('black');
  const [scrollViewBackgroundColor, setScrollViewBackgroundColor] = useState('white');
  const [foregroundParallaxRatio, setForegroundParallaxRatio] = useState(1);

  const listData = [
    {
      title: 'bounces',
      type: 'boolean',
      value: bounces,
      action: setBounces,
      valueList: [],
    },
    {
      title: 'maxHeight',
      type: 'array',
      value: maxHeight,
      valueList: [200, 300, 400],
      action: setMaxHeight,
    },
    {
      title: 'minHeight',
      type: 'array',
      value: minHeight,
      valueList: [88, 44, 0],
      action: setMinHeight,
    },
    {
      title: 'minOverlayOpacity',
      type: 'array',
      value: minOverlayOpacity,
      valueList: [0, 0.1, 0.2],
      action: setMinOverlayOpacity,
    },
    {
      title: 'maxOverlayOpacity',
      type: 'array',
      value: maxOverlayOpacity,
      valueList: [0.3, 0.4, 0.5],
      action: setMaxOverlayOpacity,
    },
    {
      title: 'overlayColor',
      type: 'array',
      value: overlayColor,
      valueList: ['black', 'red', 'blue'],
      action: setOverlayColor,
    },
    {
      title: 'scrollViewBackgroundColor',
      type: 'array',
      value: scrollViewBackgroundColor,
      valueList: ['white', 'lightpink', 'lightblue'],
      action: setScrollViewBackgroundColor,
    },
    {
      title: 'foregroundParallaxRatio',
      type: 'array',
      value: foregroundParallaxRatio,
      valueList: [1, 2, 3],
      action: setForegroundParallaxRatio,
    },
    {
      title: 'disableHeaderGrow',
      type: 'boolean',
      value: disableHeaderGrow,
      action: setDisableHeaderGrow,
      valueList: [],
    },
    {
      title: 'fadeOutForeground',
      type: 'boolean',
      value: fadeOutForeground,
      action: setFadeOutForeground,
      valueList: [],
    },
  ];

  const onItemBtnPress = (item: (typeof listData)[0]) => {
    if (item.type === 'boolean') {
      if (item.title === 'disableHeaderGrow' && item.value === false) {
        return Alert.alert('disableHeaderGrow只支持修改一次，再次修改请刷新页面');
      }
      (item.action as React.Dispatch<React.SetStateAction<boolean>>)(
        !item.value,
      );
    } else if (item.type === 'array') {
      console.log('%c  item.type2:', 'color: #0e93e0;background: #aaefe5;', item.type);
      const index = item.valueList.indexOf(item.value as never);
      const nextIndex = (index + 1) % item.valueList.length;
      item.action(item.valueList[nextIndex] as any);
    }
  };

  return (
    <TestSuite name="ImageHeaderPropertyTest">

      <TestCase.Example tags={['C_API']} modal itShould="test properties">
        <View style={styles.wrapperView}>
          <HeaderImageScrollView
            maxHeight={maxHeight}
            minHeight={minHeight}
            minOverlayOpacity={minOverlayOpacity}
            maxOverlayOpacity={maxOverlayOpacity}
            overlayColor={overlayColor}
            foregroundParallaxRatio={foregroundParallaxRatio}
            fadeOutForeground={fadeOutForeground}
            bounces={bounces}
            disableHeaderGrow={disableHeaderGrow}
            scrollViewBackgroundColor={scrollViewBackgroundColor}
            headerImage={require('./assets/NZ.jpg')}
            renderForeground={() => (
              <View style={styles.foreStyle}>
                <TouchableOpacity onPress={() => console.log('tap!!')}>
                  <Text>Tap Me!</Text>
                </TouchableOpacity>
              </View>
            )}>
            <View style={{height: 800}}>
              <TriggeringView onHide={() => console.log('text hidden')}>
                <View style={styles.listCon}>
                  {listData.map(item => {
                    return (
                      <View style={styles.listItem} key={item.title}>
                        <Text>
                          {item.title}:{'  '}
                          {JSON.stringify(item.value)}
                        </Text>
                        <TouchableOpacity
                          style={styles.listItemBtn}
                          onPress={() => onItemBtnPress(item)}>
                          <Text>切换</Text>
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </View>
              </TriggeringView>
            </View>
          </HeaderImageScrollView>
        </View>
      </TestCase.Example>
    </TestSuite>
  );
}

const styles = StyleSheet.create({
  wrapperView: {
    height: 600,
    width: '100%',
    overflow: 'hidden',
  },
  listCon: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  listItemBtn: {
    width: 40,
    height: 20,
  },
  foreStyle: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

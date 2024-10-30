import * as React from 'react';
import type {NativeScrollEvent} from 'react-native';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSharedValue} from 'react-native-reanimated';
import {TabbedHeaderPager} from 'react-native-sticky-parallax-header';

import {colors, screenStyles} from '../../../constants/index';

import {HeaderBar} from './HeaderBar';
import {TABS} from './data';
import {yodaScreenTestIDs} from './testIDs';
const logo = require('../../../assets/react-native-logo.png');
import backgroundImage from '../../../assets/react-native-logo.png';

const YodaDemoDefault: React.FC = () => {
  const {height: windowHeight} = useWindowDimensions();
  const scrollValue = useSharedValue(0);

  function onScroll(e: NativeScrollEvent) {
    'worklet';
    scrollValue.value = e.contentOffset.y;
  }

  return (
    <>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="black"
          translucent
        />
        <TabbedHeaderPager
          containerStyle={screenStyles.stretchContainer}
          backgroundImage={backgroundImage}
          title="Baby Yoda"
          titleStyle={styles.titleStyle}
          titleTestID={yodaScreenTestIDs.headerTitle}
          foregroundImage={{
            uri: 'https://developer.huawei.com/allianceCmsResource/resource/HUAWEI_Developer_VUE/images/0417/home-new-10.png',
          }}
          tabsContainerBackgroundColor={colors.black}
          tabTextContainerStyle={styles.tabTextContainerStyle}
          tabTextContainerActiveStyle={styles.tabTextContainerActiveStyle}
          tabTextStyle={styles.tabText}
          tabTextActiveStyle={styles.tabTextActiveStyle}
          tabWrapperStyle={styles.tabWrapperStyle}
          tabsContainerStyle={styles.tabsContainerStyle}
          onScroll={onScroll}
          tabs={TABS}
          renderHeaderBar={() => <HeaderBar scrollValue={scrollValue} />}
          showsVerticalScrollIndicator={false}>
          {TABS.map((tab, i) => (
            <View
              key={i}
              style={[styles.contentContainer, {height: windowHeight}]}>
              <Text
                style={[screenStyles.text2, styles.contentText]}
                testID={tab.contentTestID}>
                {tab.description}
              </Text>
            </View>
          ))}
        </TabbedHeaderPager>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  titleStyle: {
    backgroundColor: colors.semitransparentBlack,
    color: colors.white,
    fontFamily: 'AvertaStd-Semibold',
    fontSize: 40,
    padding: 10,
  },
  tabTextContainerStyle: {
    backgroundColor: colors.transparent,
    borderRadius: 18,
  },
  tabTextContainerActiveStyle: {
    backgroundColor: colors.activeOrange,
  },
  tabText: {
    color: colors.white,
    fontFamily: 'AvertaStd-Semibold',
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  tabTextActiveStyle: {
    color: colors.black,
    fontFamily: 'AvertaStd-Semibold',
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  tabWrapperStyle: {
    paddingVertical: 10,
  },
  tabsContainerStyle: {
    paddingHorizontal: 10,
  },
  contentContainer: {
    backgroundColor: colors.white,
    padding: 10,
  },
  contentText: {
    fontSize: 16,
  },
});

export default YodaDemoDefault;

import {withNavigationItem} from 'hybrid-navigation';
import React from 'react';
import {Animated, Image, StyleSheet,ScrollView,View} from 'react-native';
import {NestedScrollView, NestedScrollViewHeader} from '@react-native-oh-tpl/react-native-nested-scroll';
import PagerView from '@react-native-oh-tpl/react-native-pager-view';
import {ScrollViewPage} from './components/ScrollViewPage';
import {WebViewPage} from './components/WebViewPage';
import TabBar from './components/TabBar';
import usePagerView from './components/usePagerView';
import Contacts from './components/contacts/Contacts';
import ContactsSectionList from './components/contacts/ContactsSectionList';

const AnimatedPagerView = Animated.createAnimatedComponent<typeof PagerView>(PagerView);

const pages = ['SectionList', 'FlashList', 'ScrollView'];

export function NestedScrollPagerViewStickyHeader() {
  const {
    pagerRef,
    setPage,
    page,
    position,
    offset,
    isIdle,
    onPageScroll,
    onPageSelected,
    onPageScrollStateChanged,
  } = usePagerView();

  return (
    <NestedScrollView style={styles.nestedscroll} bounces>

      <NestedScrollViewHeader stickyHeaderBeginIndex={1} >
        <Image source={require('../assets/cover.webp')} style={styles.image} resizeMode="cover" />
        <TabBar
          tabs={pages}
          onTabPress={setPage}
          position={position}
          offset={offset}
          page={page}
          isIdle={isIdle}
        />
      </NestedScrollViewHeader>

      <AnimatedPagerView
        ref={pagerRef}
        style={styles.pager}
        overdrag={true}
        overScrollMode="always"
        onPageScroll={onPageScroll}
        onPageSelected={onPageSelected}
        onPageScrollStateChanged={onPageScrollStateChanged}>
        <ContactsSectionList />
        <Contacts />
        <ScrollViewPage />
      </AnimatedPagerView>
  
    </NestedScrollView>
  );
}

const styles = StyleSheet.create({
  nestedscroll: {
    backgroundColor: '#fff',
  },
  image: {
    height: 160,
    width: '100%',
  },
  pager: {
    height: '90%',
  },
});

export default NestedScrollPagerViewStickyHeader

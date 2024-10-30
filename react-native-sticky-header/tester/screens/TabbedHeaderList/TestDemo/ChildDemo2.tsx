import * as React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {TabbedHeaderList} from 'react-native-sticky-parallax-header';
import {logo, photosPortraitMe} from '../../../assets/images';
import {TABBED_SECTIONS} from '../../../assets/data/tabbedSections';
import {TabbedSectionHeader} from '../../../components/predefinedComponents/TabbedSectionHeader';
import {
  TABBED_SECTION_ITEM_HEIGHT,
  TabbedSectionItem,
} from '../../../components/predefinedComponents/TabbedSectionItem';
import {
  colors,
  screenStyles,
  tabbedHeaderListTestIDs,
} from '../../../constants/index';
import IconImage from '../../../assets/icon.png';

const TabbedHeaderListDemoChild2: React.FC<{
  attrProps?: Record<string, any>;
}> = (props: {attrProps?: Record<string, any>}) => {
  const testMomentumScrollBegin = () => {
    'worklet';
    console.log('TabbedHeaderList-worklet:onMomentumScrollBegin回调已执行');
  };
  const testMomentumScrollEnd = () => {
    'worklet';
    console.log('TabbedHeaderList-worklet:onMomentumScrollEnd回调已执行');
  };
  const onScroll = () => {
    'worklet';
    console.log('TabbedHeaderList-worklet:onScroll回调已执行');
  };
  const onScrollBeginDrag = () => {
    'worklet';
    console.log('TabbedHeaderList-worklet:onScrollBeginDrag回调已执行');
  };
  const onScrollEndDrag = () => {
    'worklet';
    console.log('TabbedHeaderList-worklet:onScrollEndDrag回调已执行');
  };
  return (
    <>
      <TabbedHeaderList
        contentContainerStyle={{backgroundColor: colors.coralPink}}
        containerStyle={screenStyles.stretchContainer}
        backgroundColor={colors.coralPink}
        title="Food delivery app"
        logo={logo}
        enableSafeAreaTopInset={false}
        titleStyle={screenStyles.text}
        titleTestID={tabbedHeaderListTestIDs.title}
        foregroundImage={IconImage}
        onMomentumScrollBegin={testMomentumScrollBegin}
        onMomentumScrollEnd={testMomentumScrollEnd}
        onScroll={onScroll}
        onScrollBeginDrag={onScrollBeginDrag}
        onScrollEndDrag={onScrollEndDrag}
        parallaxHeight={300}
        tabs={TABBED_SECTIONS.map(({title, tabTestID}) => ({
          title,
          testID: tabTestID,
        }))}
        stickyTabs={false}
        tabTextStyle={screenStyles.text2}
        tabTextActiveStyle={styles.tabTextActiveStyle}
        tabTextContainerStyle={styles.tabTextContainerStyle}
        tabTextContainerActiveStyle={styles.tabTextContainerActiveStyle}
        tabUnderlineColor={'white'}
        tabWrapperStyle={styles.tabWrapperStyle}
        tabsContainerBackgroundColor={'#rgb(255,102,0)'}
        tabsContainerStyle={styles.tabsContainerStyle}
        sections={TABBED_SECTIONS}
        tabTextContainerActiveStyle={{backgroundColor: colors.activeOrange}}
        keyExtractor={(_, i) => `${i}`}
        renderItem={({item}) => <TabbedSectionItem {...item} />}
        renderSectionHeader={({section}) => (
          <TabbedSectionHeader
            title={section.title}
            tabTestID={section.tabTestID}
          />
        )}
        getItemLayout={(_, index) => ({
          length: TABBED_SECTION_ITEM_HEIGHT,
          offset: TABBED_SECTION_ITEM_HEIGHT * index,
          index,
        })}
        updateCellsBatchingPeriod={100}
        showsVerticalScrollIndicator={false}
        {...props.attrProps}
      />
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.coralPink}
        translucent
      />
    </>
  );
};
const styles = StyleSheet.create({
  tabTextActiveStyle: {
    color: 'red',
  },
  tabTextContainerStyle: {
    backgroundColor: 'yellow',
  },
  tabTextContainerActiveStyle: {
    borderWidth: 1,
    borderColor: 'yellow',
  },
  tabWrapperStyle: {
    borderWidth: 1,
    borderColor: 'yellow',
  },
  tabsContainerStyle: {
    borderWidth: 1,
    borderColor: 'red',
  },
});
export default TabbedHeaderListDemoChild2;

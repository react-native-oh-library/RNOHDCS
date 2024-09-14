import * as React from 'react';
import {StatusBar} from 'react-native';
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

const TabbedHeaderListDemoDefault: React.FC<{
  attrProps?: Record<string, any>;
}> = (props: {attrProps?: Record<string, any>}) => {
  const testMomentumScrollBegin = () => {
    'worklet';
    console.log('测试testMomentumScrollBegin');
  };
  const testMomentumScrollEnd = () => {
    'worklet';
    console.log('测试testMomentumScrollEnd');
  };
  const onScroll = () => {
    'worklet';
    console.log('测试onScroll');
  };
  const onScrollBeginDrag = () => {
    'worklet';
    console.log('测试onScrollBeginDrag');
  };
  const onScrollEndDrag = () => {
    'worklet';
    console.log('测试onScrollEndDrag');
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
        tabTextStyle={screenStyles.text}
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
export default TabbedHeaderListDemoDefault;
